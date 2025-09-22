import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("ANTHROPIC_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 500 }
      );
    }

    const { message, conversation } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Build conversation history for context (last 10 messages to save tokens)
    const recentMessages = conversation?.slice(-10) || [];

    // Create a concise system prompt for business consulting
    const systemPrompt = `You are a helpful AI business consultant for Kodedit, an AI solutions company for small businesses.

Key points:
- Kodedit offers: AI chatbots, process automation, predictive analytics, and AI strategy
- Packages: AI Starter ($2k-$5k), AI Growth ($5k-$12k), AI Enterprise ($12k+)
- Focus on understanding their business challenges and recommending relevant AI solutions
- Be conversational, helpful, and concise
- Guide toward booking a call or filling the intake form when appropriate
- Ask follow-up questions to understand their needs better

Keep responses under 100 words when possible.`;

    // Build messages array for Claude API
    const messages = [
      ...recentMessages.map((msg: ChatMessage) => ({
        role: msg.isUser ? "user" : "assistant",
        content: msg.text
      })),
      {
        role: "user",
        content: message
      }
    ];

    // Call Claude API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307", // Most cost-effective model
        max_tokens: 200, // Keep responses concise to save tokens
        system: systemPrompt,
        messages: messages
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Claude API error:", errorData);
      throw new Error(`Claude API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.content[0]?.text;

    if (!aiResponse) {
      throw new Error("No response from Claude API");
    }

    return NextResponse.json({
      message: aiResponse,
      success: true
    });

  } catch (error) {
    console.error("Error in chat API:", error);

    // Fallback responses for when API fails
    const fallbackResponses = [
      "I'm having a brief technical moment. Can you tell me more about your business goals?",
      "Sorry for the delay! I'd love to help you explore AI solutions for your business.",
      "Let me get back on track - what specific business challenges are you looking to solve?",
      "Technical hiccup! While I reconnect, feel free to book a call with our team for immediate assistance."
    ];

    const fallbackMessage = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

    return NextResponse.json({
      message: fallbackMessage,
      success: true,
      fallback: true
    });
  }
}