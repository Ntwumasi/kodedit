import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract all form fields
    const data = {
      // Basic Information
      fullName: formData.get("fullName") as string,
      businessName: formData.get("businessName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      existingWebsite: formData.get("existingWebsite") as string,
      
      // Business Overview
      businessDescription: formData.get("businessDescription") as string,
      targetCustomers: formData.get("targetCustomers") as string,
      uniqueValue: formData.get("uniqueValue") as string,
      onlinePresence: formData.get("onlinePresence") as string,
      
      // Project Goals
      projectGoals: formData.get("projectGoals") as string,
      problemsToSolve: formData.get("problemsToSolve") as string,
      integrations: formData.get("integrations") as string,
      aiFeatures: formData.get("aiFeatures") as string,
      
      // Branding & Visual Identity
      hasLogo: formData.get("hasLogo") as string,
      colorScheme: formData.get("colorScheme") as string,
      brandColors: formData.get("brandColors") as string,
      lookAndFeel: formData.get("lookAndFeel") as string,
      inspirationWebsites: formData.get("inspirationWebsites") as string,
      
      // Content & Features
      aboutUsSection: formData.get("aboutUsSection") as string,
      corePages: formData.get("corePages") as string,
      needsBlog: formData.get("needsBlog") as string,
      needsEcommerce: formData.get("needsEcommerce") as string,
      needsBooking: formData.get("needsBooking") as string,
      needsMultiLanguage: formData.get("needsMultiLanguage") as string,
      
      // AI & Modern Features
      interestedInAI: formData.get("interestedInAI") as string,
      aiFeaturesList: formData.get("aiFeaturesList") as string,
      otherAIFeatures: formData.get("otherAIFeatures") as string,
      
      // Technical & Budget
      hasHostingDomain: formData.get("hasHostingDomain") as string,
      hostingDetails: formData.get("hostingDetails") as string,
      techStack: formData.get("techStack") as string,
      budgetRange: formData.get("budgetRange") as string,
      timeline: formData.get("timeline") as string,
      
      // Communication & Collaboration
      mainContact: formData.get("mainContact") as string,
      preferredComm: formData.get("preferredComm") as string,
      involvementLevel: formData.get("involvementLevel") as string,
      
      // Success Metrics
      successMetrics: formData.get("successMetrics") as string,
      
      // Additional Notes
      additionalNotes: formData.get("additionalNotes") as string,
    };

    // Parse brand colors if present
    let brandColors = null;
    if (data.brandColors) {
      try {
        brandColors = JSON.parse(data.brandColors);
      } catch (e) {
        brandColors = data.brandColors;
      }
    }

    // Format the email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #fe3641; border-bottom: 3px solid #fe3641; padding-bottom: 10px; }
    h2 { color: #171717; background: #f5f5f5; padding: 10px; margin-top: 30px; }
    .section { margin-bottom: 30px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; margin-bottom: 5px; }
    .value { background: #f9f9f9; padding: 10px; border-left: 3px solid #fe3641; }
    .empty { color: #999; font-style: italic; }
    .color-palette { display: flex; gap: 10px; margin-top: 10px; }
    .color-box { width: 60px; height: 60px; border: 1px solid #ddd; border-radius: 4px; text-align: center; padding: 5px; }
  </style>
</head>
<body>
  <h1>New Project Intake Form Submission</h1>
  
  <div class="section">
    <h2>1. Basic Information</h2>
    <div class="field">
      <div class="label">Full Name:</div>
      <div class="value">${data.fullName || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Business Name:</div>
      <div class="value">${data.businessName || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Email:</div>
      <div class="value">${data.email || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Phone:</div>
      <div class="value">${data.phone || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Existing Website:</div>
      <div class="value">${data.existingWebsite || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>2. Business Overview</h2>
    <div class="field">
      <div class="label">Business Description:</div>
      <div class="value">${data.businessDescription || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Target Customers:</div>
      <div class="value">${data.targetCustomers || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Unique Value Proposition:</div>
      <div class="value">${data.uniqueValue || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Current Online Presence:</div>
      <div class="value">${data.onlinePresence || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>3. Project Goals</h2>
    <div class="field">
      <div class="label">Main Goals:</div>
      <div class="value">${data.projectGoals || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Problems to Solve:</div>
      <div class="value">${data.problemsToSolve || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Integration Needs:</div>
      <div class="value">${data.integrations || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">AI Features Interest:</div>
      <div class="value">${data.aiFeatures || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>4. Branding & Visual Identity</h2>
    <div class="field">
      <div class="label">Has Logo:</div>
      <div class="value">${data.hasLogo || '<span class="empty">Not provided</span>'}</div>
    </div>
    ${brandColors && typeof brandColors === 'object' ? `
    <div class="field">
      <div class="label">Brand Colors:</div>
      <div class="color-palette">
        ${Object.entries(brandColors).map(([name, color]) => `
          <div class="color-box" style="background-color: ${color};">
            <small>${name}</small><br>
            <small style="font-size: 10px;">${color}</small>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}
    <div class="field">
      <div class="label">Brand Personality:</div>
      <div class="value">${data.lookAndFeel || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Inspiration Websites:</div>
      <div class="value">${data.inspirationWebsites || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>5. Content & Features</h2>
    <div class="field">
      <div class="label">About Us Content:</div>
      <div class="value">${data.aboutUsSection || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Required Pages:</div>
      <div class="value">${data.corePages || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Blog/News Section:</div>
      <div class="value">${data.needsBlog || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">E-commerce:</div>
      <div class="value">${data.needsEcommerce || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Booking System:</div>
      <div class="value">${data.needsBooking || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Multi-language Support:</div>
      <div class="value">${data.needsMultiLanguage || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>6. AI & Modern Features</h2>
    <div class="field">
      <div class="label">Interested in AI:</div>
      <div class="value">${data.interestedInAI || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">AI Features Selected:</div>
      <div class="value">${data.aiFeaturesList || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Other AI Features:</div>
      <div class="value">${data.otherAIFeatures || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>7. Technical & Budget</h2>
    <div class="field">
      <div class="label">Hosting & Domain:</div>
      <div class="value">${data.hasHostingDomain || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Hosting Details:</div>
      <div class="value">${data.hostingDetails || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Preferred Tech Stack:</div>
      <div class="value">${data.techStack || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Budget Range:</div>
      <div class="value">${data.budgetRange || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Timeline:</div>
      <div class="value">${data.timeline || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>8. Communication & Collaboration</h2>
    <div class="field">
      <div class="label">Main Contact:</div>
      <div class="value">${data.mainContact || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Preferred Communication:</div>
      <div class="value">${data.preferredComm || '<span class="empty">Not provided</span>'}</div>
    </div>
    <div class="field">
      <div class="label">Involvement Level:</div>
      <div class="value">${data.involvementLevel || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>9. Success Metrics</h2>
    <div class="field">
      <div class="value">${data.successMetrics || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <div class="section">
    <h2>10. Additional Notes</h2>
    <div class="field">
      <div class="value">${data.additionalNotes || '<span class="empty">Not provided</span>'}</div>
    </div>
  </div>

  <hr style="margin-top: 40px; border: 1px solid #fe3641;">
  <p style="text-align: center; color: #666; font-size: 12px;">
    Submitted on ${new Date().toLocaleString()}
  </p>
</body>
</html>
`;

    // Since we can't directly send emails from the browser, we'll need to use a service
    // For now, we'll just log the data and return success
    // In production, you would integrate with an email service like SendGrid, Resend, etc.
    
    console.log("Intake form submission:", data);
    console.log("Email would be sent to: kodedit.io@gmail.com");
    console.log("Email content:", emailContent);
    
    // In a real implementation, you would:
    // 1. Use an email service API (SendGrid, Resend, AWS SES, etc.)
    // 2. Store the submission in a database
    // 3. Send a confirmation email to the user
    
    // For now, we'll simulate success
    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully! We'll review your information and get back to you within 24 hours.",
      note: "Note: Email service integration needed for production. Currently logging to console." 
    });
    
  } catch (error) {
    console.error("Error processing intake form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission. Please try again." },
      { status: 500 }
    );
  }
}