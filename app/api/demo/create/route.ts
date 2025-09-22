import { NextRequest, NextResponse } from "next/server";
import { createDemoLink, saveDemoLink } from "@/lib/demo-utils";

export async function POST(request: NextRequest) {
  try {
    const { clientName } = await request.json();

    // Create a new demo link
    const demo = createDemoLink(clientName);

    // Save it (in production, this would go to a database)
    saveDemoLink(demo);

    return NextResponse.json({
      success: true,
      demo: {
        slug: demo.slug,
        expiresAt: demo.expiresAt,
        clientName: demo.clientName,
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/demo/${demo.slug}`
      }
    });

  } catch (error) {
    console.error("Error creating demo link:", error);
    return NextResponse.json(
      { error: "Failed to create demo link" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Simple endpoint to create a demo link via GET (for testing)
    const demo = createDemoLink();
    saveDemoLink(demo);

    return NextResponse.json({
      success: true,
      demo: {
        slug: demo.slug,
        expiresAt: demo.expiresAt,
        url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/demo/${demo.slug}`
      }
    });

  } catch (error) {
    console.error("Error creating demo link:", error);
    return NextResponse.json(
      { error: "Failed to create demo link" },
      { status: 500 }
    );
  }
}