import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { useSEO, getSiteUrl, breadcrumbs } from "@/lib/seo";

const SUCCESS_MESSAGE =
  "Thank you for reaching out to NxtQuik. We've received your enquiry and will get back to you shortly.";

async function submitEnquiry(data: Record<string, string>) {
  const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL as string | undefined;

  // 1. If webhook configured, send to webhook
  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        to: site.email,
        timestamp: new Date().toISOString(),
      }),
    });
    if (!res.ok) throw new Error("Webhook failed");
    return;
  }

  // 2. Default static direct delivery to nxtquik@gmail.com
  const res = await fetch("https://formsubmit.co/ajax/nxtquik@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data["name"],
      email: data["email"],
      phone: data["phone"] || "Not provided",
      company: data["company"] || "Not provided",
      service: data["service"] || "General enquiry",
      message: data["message"],
      _subject: `New Project Enquiry — NxtQuik (${data["name"]}${data["service"] ? ` · ${data["service"]}` : ""})`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!res.ok) {
    throw new Error("Could not send enquiry");
  }
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const siteUrl = getSiteUrl();

  useSEO({
    title: "Contact NxtQuik — Start a Project | Web, Software & Growth",
    description:
      "Get in touch with NxtQuik. Email nxtquik@gmail.com, call +91 94786 69360, or submit your project brief for custom web, mobile, software or growth solutions.",
    path: "/contact",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          name: "Contact NxtQuik",
          url: `${siteUrl}/contact`,
          description:
            "Start a technology, software, cloud or digital growth project with NxtQuik.",
          mainEntity: {
            "@type": "Organization",
            name: "NxtQuik",
            email: site.email,
            telephone: site.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Patiala",
              addressRegion: "Punjab",
              addressCountry: "IN",
            },
          },
        },
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    },
  });

  return (
    <div>
      <Nav />
      <main>
        <section className="surface-navy relative overflow-hidden">
          <div className="rule-grid absolute inset-0 opacity-25" aria-hidden />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-36 md:px-8 md:pb-28 md:pt-44 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow text-[color-mix(in_oklab,var(--cyan)_85%,white)]">Contact</p>
              <h1 className="mt-5 text-4xl font-semibold md:text-6xl">Let's Build What's Next.</h1>
              <p className="mt-6 max-w-lg text-lg text-navy-muted">
                Have a digital product to build, a business to transform or a growth problem to
                solve? Tell us where you are today and where you need to be next.
              </p>

              <dl className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 size-5 text-[color-mix(in_oklab,var(--cyan)_85%,white)]" />
                  <div>
                    <dt className="eyebrow text-navy-muted">Phone</dt>
                    <dd className="mt-1">
                      <a className="text-lg hover:underline" href={site.phoneHref}>
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 size-5 text-[color-mix(in_oklab,var(--cyan)_85%,white)]" />
                  <div>
                    <dt className="eyebrow text-navy-muted">Email</dt>
                    <dd className="mt-1">
                      <a className="text-lg hover:underline" href={`mailto:${site.email}`}>
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 size-5 text-[color-mix(in_oklab,var(--cyan)_85%,white)]" />
                  <div>
                    <dt className="eyebrow text-navy-muted">Office</dt>
                    <dd className="mt-1 text-lg">{site.office}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10 flex gap-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-base btn-onnavy !px-5 !py-2.5 !text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-base btn-onnavy !px-5 !py-2.5 !text-sm"
                >
                  Instagram
                </a>
              </div>
              <p className="mt-10 text-sm text-navy-muted">
                Founder: <span className="text-navy-foreground">{site.founder}</span>
              </p>
            </div>

            <Reveal>
              <div
                id="consultation"
                className="scroll-mt-28 rounded-2xl border border-border bg-background p-8 text-foreground md:p-10"
              >
                <h2 className="text-2xl font-semibold">Start a project</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share a few details and we'll come back with next steps.
                </p>

                {sent ? (
                  <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-foreground">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold">Enquiry Received</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {SUCCESS_MESSAGE}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSent(false)}
                          className="btn-base btn-outline mt-6 !px-4 !py-2 !text-xs"
                        >
                          Send another message
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form
                    className="mt-8 space-y-5"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const fd = Object.fromEntries(new FormData(form)) as Record<string, string>;

                      // Client-side validation
                      const name = fd["name"]?.trim() || "";
                      const email = fd["email"]?.trim() || "";
                      const message = fd["message"]?.trim() || "";

                      if (name.length < 2) {
                        toast.error("Please enter your name.");
                        return;
                      }

                      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                        toast.error("Please enter a valid email address.");
                        return;
                      }

                      if (message.length < 5) {
                        toast.error("Please enter a short message about your project.");
                        return;
                      }

                      setSending(true);
                      try {
                        await submitEnquiry(fd);
                        setSent(true);
                        form.reset();
                        toast.success(SUCCESS_MESSAGE);
                      } catch {
                        toast.error(
                          `Couldn't send right now. Please email us directly at ${site.email}.`,
                        );
                      } finally {
                        setSending(false);
                      }
                    }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Your Name *" name="name" required placeholder="Shubham" />
                      <Field
                        label="Email Address *"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        placeholder="+91 94786 69360"
                      />
                      <Field
                        label="Company / Organisation"
                        name="company"
                        placeholder="Company Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="text-sm font-medium">
                        What service are you interested in?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Something else">Something else</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium">
                        Project Brief / Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        minLength={5}
                        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us where you are today, what you're building, and your target timeline."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-base btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {sending ? "Sending enquiry…" : "Send enquiry"}{" "}
                      <ArrowRight className="size-4" />
                    </button>
                    <p className="text-center text-xs text-muted-foreground">
                      We respond directly within one business day. Your data is kept strictly
                      confidential.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
