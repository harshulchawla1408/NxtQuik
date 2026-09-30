import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1).max(5000),
});

const TO = "nxtquik@gmail.com";

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const resendKey = process.env["RESEND_API_KEY"];
    const webhookUrl = process.env["CONTACT_WEBHOOK_URL"];

    const subject = `New enquiry: ${data.name}${data.service ? ` — ${data.service}` : ""}`;
    const text = [
      `New enquiry from the NxtQuik website`,
      ``,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "-"}`,
      `Service: ${data.service || "-"}`,
      ``,
      `Project brief:`,
      data.message,
    ].join("\n");

    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NxtQuik Contact <onboarding@resend.dev>",
          to: [TO],
          reply_to: data.email,
          subject,
          text,
        }),
      });
      if (!res.ok) {
        const t = await res.text();
        console.error(`Resend email failed [${res.status}]: ${t}`);
        throw new Error("Could not send enquiry");
      }
      return { ok: true };
    }

    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, to: TO, ...data }),
      });
      if (!res.ok) {
        const t = await res.text();
        console.error(`Webhook send failed [${res.status}]: ${t}`);
        throw new Error("Could not send enquiry");
      }
      return { ok: true };
    }

    // Default standalone / local logging fallback
    console.log(`[Contact Enquiry Received] ${subject}\n${text}`);
    return { ok: true };
  });
