import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Please provide a valid email address").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(160).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(5, "Please provide a brief message").max(5000),
});

const TO = "nxtquik@gmail.com";

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const resendKey = process.env["RESEND_API_KEY"];
    const webhookUrl = process.env["CONTACT_WEBHOOK_URL"];
    const timestamp = new Date().toISOString();

    const subject = `New Project Enquiry — NxtQuik (${data.name}${data.service ? ` · ${data.service}` : ""})`;

    const text = [
      `=========================================`,
      `  NEW PROJECT ENQUIRY — NXTQUIK`,
      `=========================================`,
      ``,
      `Submitted: ${timestamp}`,
      `Name:      ${data.name}`,
      `Email:     ${data.email}`,
      `Phone:     ${data.phone || "Not provided"}`,
      `Company:   ${data.company || "Not provided"}`,
      `Service:   ${data.service || "General enquiry"}`,
      ``,
      `-----------------------------------------`,
      `Project Brief / Message:`,
      `-----------------------------------------`,
      data.message,
      ``,
      `=========================================`,
    ].join("\n");

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0f172a; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #0f172a; font-size: 20px; font-weight: 700;">New Project Enquiry — NxtQuik</h2>
          <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Received via nxtquik.com on ${timestamp}</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 600;">Name:</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Phone:</td>
            <td style="padding: 8px 0; color: #0f172a;">${data.phone ? `<a href="tel:${data.phone}" style="color: #0f172a; text-decoration: none;">${data.phone}</a>` : "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Company:</td>
            <td style="padding: 8px 0; color: #0f172a;">${data.company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Service:</td>
            <td style="padding: 8px 0; color: #2563eb; font-weight: 600;">${data.service || "General enquiry"}</td>
          </tr>
        </table>

        <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
          <h3 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Project Brief:</h3>
          <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1e293b;">${data.message}</p>
        </div>

        <p style="margin: 0; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 16px;">
          NxtQuik · Technology for What's Next · Patiala, Punjab, India
        </p>
      </div>
    `;

    // 1. Deliver via Resend if API key is provided
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NxtQuik Website <enquiries@nxtquik.com>",
          to: [TO],
          reply_to: data.email,
          subject,
          text,
          html,
        }),
      });

      if (!res.ok) {
        // If custom domain is not yet verified on Resend, retry using onboarding@resend.dev sandbox address
        const fallbackRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "NxtQuik <onboarding@resend.dev>",
            to: [TO],
            reply_to: data.email,
            subject,
            text,
            html,
          }),
        });

        if (!fallbackRes.ok) {
          const t = await fallbackRes.text();
          console.error(`Resend email delivery failed: ${t}`);
          throw new Error("Could not send enquiry email");
        }
      }
      return { ok: true };
    }

    // 2. Deliver via Webhook if configured
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          to: TO,
          timestamp,
          ...data,
        }),
      });
      if (!res.ok) {
        const t = await res.text();
        console.error(`Webhook delivery failed [${res.status}]: ${t}`);
        throw new Error("Could not forward enquiry to webhook");
      }
      return { ok: true };
    }

    // 3. Fallback: Log to server stdout (safe for local development and non-configured environments)
    console.log(`[Contact Enquiry Received] ${subject}\n${text}`);
    return { ok: true };
  });
