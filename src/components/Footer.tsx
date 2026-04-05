import { MapPin, Phone, Mail, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-nxtquik.jpg";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const Footer = () => (
  <footer className="relative border-t border-border/50 bg-card/30 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="NxtQuik" className="h-10 w-10 rounded-lg object-cover" />
            <span className="text-xl font-bold gradient-text">NxtQuik</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Innovative IT Solutions & Creative Content Services — helping businesses grow through technology and creativity.
          </p>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/ugcnxtquik/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:glow-blue transition-all hover:scale-110">
              <Linkedin className="h-4 w-4 text-muted-foreground" />
            </a>
            <a href="https://www.instagram.com/nxtquik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:glow-purple transition-all hover:scale-110">
              <Instagram className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2.5">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              #445/7, Sirhindi Bazar, Patiala-147001
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+918054486087" className="hover:text-primary transition-colors">80544-86087</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:nxtquik@gmail.com" className="hover:text-primary transition-colors">nxtquik@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 pt-6 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} NxtQuik. All rights reserved.</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:glow-blue transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
