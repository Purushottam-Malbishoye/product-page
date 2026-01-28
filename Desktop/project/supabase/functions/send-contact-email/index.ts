import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, phone, company, message }: ContactFormData = await req.json();

    if (!name || !email || !phone || !company || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const RESEND_API_KEY = "re_HdNC4ZMa_Anghisem4bLPxXAx1kFxP5ok";

    const emailBody = {
      from: "onboarding@resend.dev",
      to: ["amiya.behera@tigerworldtech.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #1f2937; margin-bottom: 5px; }
              .field-value { background-color: white; padding: 12px; border-radius: 4px; border: 1px solid #e5e7eb; }
              .message-box { background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e5e7eb; min-height: 100px; white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value">${email}</div>
                </div>

                <div class="field">
                  <div class="field-label">Phone:</div>
                  <div class="field-value">${phone}</div>
                </div>

                <div class="field">
                  <div class="field-label">Company:</div>
                  <div class="field-value">${company}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Message:</div>
                  <div class="message-box">${message}</div>
                </div>
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  This email was sent from the First Science AI contact form.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const result = await resendResponse.json();

    return new Response(
      JSON.stringify({ success: true, emailId: result.id }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send notification email",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});