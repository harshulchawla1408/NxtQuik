import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-nxtquik.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-primary/5 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="NxtQuik Logo"
            className="h-10 w-10 rounded-lg object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
          />
          <span className="text-xl font-bold gradient-text">NxtQuik</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4 gradient-bg text-primary-foreground rounded-full px-6 glow-blue hover:scale-105 transition-transform">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-3 rounded-xl font-medium transition-all ${
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 gradient-bg text-primary-foreground rounded-full">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
