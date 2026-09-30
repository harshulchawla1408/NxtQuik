import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CtaSection() {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div className="rule-grid absolute inset-0 opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold md:text-6xl">Let's Build What's Next.</h2>
          <p className="mt-6 max-w-xl text-lg text-navy-muted">
            Have a digital product to build, a business to transform or a growth problem to solve?
            Let's talk.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-base btn-primary">
              Start a Project <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" hash="consultation" className="btn-base btn-onnavy">
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
