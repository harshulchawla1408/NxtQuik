import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark, Mark } from "./Brand";
import { nav } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`light fixed inset-x-0 top-0 z-50 border-b bg-background transition-shadow duration-500 ${
        scrolled ? "border-border shadow-[var(--shadow-soft)]" : "border-border/60"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8"
      >
        <Link to="/" aria-label="NxtQuik home" className="logo-anim group shrink-0">
          <Wordmark className="hidden h-12 md:h-14 transition-transform duration-500 group-hover:scale-105 sm:block" />
          <Mark
            transparent
            className="h-12 transition-transform duration-500 group-hover:scale-105 sm:hidden"
          />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact" className="btn-base btn-primary !px-5 !py-2.5 !text-sm">
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-lg text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-base btn-primary mt-6 w-full"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
