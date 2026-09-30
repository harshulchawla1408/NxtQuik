import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { useServerFn } from "@tanstack/react-start";
import { sendEnquiry as sendEnquiryFn } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact NxtQuik — Start a Project",
      description:
        "Start a project with NxtQuik. Email nxtquik@gmail.com, call +91 94786 69360, or send your brief through the enquiry form.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const sendEnquiry = useServerFn(sendEnquiryFn);

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
                <form
                  className="mt-8 space-y-5"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const fd = Object.fromEntries(new FormData(form)) as Record<string, string>;
                    setSending(true);
                    try {
                      await sendEnquiry({ data: fd });
                      setSent(true);
                      form.reset();
                      toast.success("Thanks — we'll be in touch shortly.");
                    } catch {
                      toast.error(`Couldn't send right now. Please email us at ${site.email}.`);
                    } finally {
                      setSending(false);
                    }
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Company" name="company" />
                    <div>
                      <label htmlFor="service" className="text-sm font-medium">
                        What do you need?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
                      >
                        {services.map((s) => (
                          <option key={s.slug}>{s.name}</option>
                        ))}
                        <option>Something else</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">
                      Project brief
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
                      placeholder="Where are you today, and what needs to change?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-base btn-primary w-full disabled:opacity-60"
                  >
                    {sending ? "Sending…" : "Send enquiry"} <ArrowRight className="size-4" />
                  </button>
                  {sent && (
                    <p className="text-sm text-muted-foreground">
                      Message received — we usually reply within one business day.
                    </p>
                  )}
                </form>
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm"
      />
    </div>
  );
}
