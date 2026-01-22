import { Resend } from "resend"; // Changed from "resend/mod.ts"

// Define CORS headers for the Edge Function
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*", // Adjust this to your frontend's origin in production
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  try {
    const { name, email, message } = await req.json();

    // Basic validation (Zod handles more robustly on frontend)
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: {
            type: "VALIDATION_ERROR",
            message: "Name, email, and message are required.",
          },
        }),
        {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
          status: 400,
        },
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set in environment variables.");
      return new Response(
        JSON.stringify({
          error: {
            type: "SERVER_ERROR",
            message: "Resend API key is not configured.",
          },
        }),
        {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
          status: 500,
        },
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Placeholder, user will update later
      to: "m4littlemozarts@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return new Response(
        JSON.stringify({
          error: {
            type: "RESEND_API_ERROR",
            message: error.message || "Failed to send email via Resend.",
          },
        }),
        {
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
          status: 500,
        },
      );
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully!", data }),
      {
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (error) {
    console.error("Edge Function Error:", error);
    return new Response(
      JSON.stringify({
        error: {
          type: "NETWORK_ERROR",
          message: error.message || "An unexpected error occurred.",
        },
      }),
      {
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        status: 500,
      },
    );
  }
});