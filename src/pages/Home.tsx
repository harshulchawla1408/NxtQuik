import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import HeroAnimation from "@/components/HeroAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ArrowRight, Globe, Smartphone, Cloud, Code2, BrainCircuit, Megaphone,
  Star, Users, Zap, Shield, ChevronRight, Rocket, PenTool, BarChart3,
  Building2, ShoppingCart, GraduationCap, HeartPulse, Plane,
  MessageSquare, ChevronDown,
} from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo-nxtquik.jpg";
import { useState } from "react";

const stats = [
  { label: "Projects Delivered", value: 25, suffix: "+" },
  { label: "Happy Clients", value: 15, suffix: "+" },
  { label: "Team Members", value: 10, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
];

const services = [
  { icon: Globe, title: "Web Development", desc: "Modern, responsive websites that convert visitors into customers." },
  { icon: Smartphone, title: "App Development", desc: "Native & cross-platform mobile apps for iOS and Android." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure and digital transformation." },
  { icon: Code2, title: "Custom Software", desc: "Tailored software solutions for your unique business needs." },
  { icon: BrainCircuit, title: "Tech Consulting", desc: "Expert guidance on technology strategy and implementation." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven marketing strategies that drive growth." },
];

const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "We deliver projects on time without compromising quality." },
  { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security and 99.9% uptime guaranteed." },
  { icon: Users, title: "Dedicated Team", desc: "A passionate team committed to your project's success." },
  { icon: Star, title: "Premium Quality", desc: "Every pixel, every line of code — crafted to perfection." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We dive deep into your business goals, challenges, and vision to craft the perfect strategy." },
  { step: "02", title: "Design", desc: "Our team creates stunning, user-centric designs that align with your brand identity." },
  { step: "03", title: "Develop", desc: "We build with cutting-edge technologies, ensuring performance, scalability, and security." },
  { step: "04", title: "Deploy & Scale", desc: "Launch with confidence and scale seamlessly as your business grows." },
];

const industries = [
  { icon: Building2, name: "Real Estate" },
  { icon: ShoppingCart, name: "E-Commerce" },
  { icon: GraduationCap, name: "Education" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Plane, name: "Travel" },
  { icon: BarChart3, name: "FinTech" },
  { icon: PenTool, name: "Creative" },
  { icon: Rocket, name: "Startups" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "CEO, TechVentures", text: "NxtQuik transformed our digital presence completely. Their team delivered beyond our expectations." },
  { name: "Priya Sharma", role: "Founder, StyleCraft", text: "Incredible attention to detail and outstanding creativity. Highly recommend their services!" },
  { name: "Amit Singh", role: "Director, GrowthHub", text: "Professional, reliable, and innovative. NxtQuik is our go-to technology partner." },
];

const techPreview = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase",
  "PostgreSQL", "Vercel", "Firebase", "Docker", "Figma", "Cloudflare",
];

const faqs = [
  { q: "What services does NxtQuik offer?", a: "We offer web development, app development, custom software, cloud solutions, digital marketing, branding, graphic design, and creative content services including wedding videography and photography." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity. A standard website takes 2-4 weeks, while complex applications may take 2-3 months. We always provide detailed timelines during the discovery phase." },
  { q: "Do you offer ongoing support?", a: "Yes! We provide post-launch support, maintenance, and optimization services to ensure your digital products continue to perform at their best." },
  { q: "What is your pricing model?", a: "We offer flexible pricing based on project scope — fixed-price for well-defined projects and time & material for evolving requirements. Schedule a meeting for a custom quote." },
];

const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCountUp(value, 2000, true, isVisible);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{count}{suffix}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-2xl overflow-hidden gradient-border">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left">
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-6 px-6" : "max-h-0"}`}>
        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const HomePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative">
      <HeroAnimation />
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We blend cutting-edge technology with artistic creativity to deliver outstanding digital experiences for brands worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 text-base glow-blue hover:scale-105 transition-transform">
              <Link to="/contact">Start a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all">
              <Link to="/projects">View Our Work <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => <StatCounter key={s.label} {...s} />)}
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* Services Preview */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="max-w-xl mx-auto text-muted-foreground">End-to-end digital solutions tailored to help your business thrive.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="glass rounded-2xl border-0 hover:glow-blue hover:-translate-y-1 transition-all duration-300 group cursor-default gradient-border">
              <CardContent className="p-7">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="rounded-full px-8 border-border/50 hover:border-primary/30">
            <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>

    {/* Our Process */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Our <span className="gradient-text">Process</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              <div className="glass rounded-2xl p-7 h-full gradient-border hover:glow-purple transition-all duration-300">
                <span className="text-5xl font-black gradient-text opacity-30 block mb-3">{p.step}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                  <ArrowRight className="h-5 w-5 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Tech Stack Preview */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Technology</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Our <span className="gradient-text">Tech Stack</span></h2>
          <p className="max-w-xl mx-auto text-muted-foreground">We use the best tools and technologies to build world-class products.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {techPreview.map((t) => (
            <span key={t} className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground border border-border/30 hover:glow-blue hover:border-primary/30 transition-all duration-300 cursor-default">
              {t}
            </span>
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="outline" className="rounded-full px-8 border-border/50 hover:border-primary/30">
            <Link to="/tech-stack">Explore Tech Stack <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>

    {/* Why Choose Us */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Why NxtQuik</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Why Choose <span className="gradient-text">Us</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((item) => (
            <Card key={item.title} className="glass rounded-2xl border-0 text-center hover:glow-purple transition-all duration-300 group gradient-border">
              <CardContent className="p-7">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Industries */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Industries</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Industries We <span className="gradient-text">Serve</span></h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div key={ind.name} className="glass rounded-2xl p-6 text-center hover:glow-cyan hover:-translate-y-1 transition-all duration-300 group gradient-border cursor-default">
              <ind.icon className="h-8 w-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-foreground">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Testimonials */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">What Clients <span className="gradient-text">Say</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="glass rounded-2xl border-0 gradient-border">
              <CardContent className="p-7">
                <MessageSquare className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* FAQ */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f) => <FAQItem key={f.q} {...f} />)}
        </div>
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 blur-[80px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">
            Ready to <span className="gradient-text">Build</span> Something Amazing?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 relative z-10">
            Let's bring your ideas to life. Schedule a free consultation with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button asChild size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 glow-blue hover:scale-105 transition-transform">
              <Link to="/contact">Schedule a Meeting</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border/50">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </Layout>
);

export default HomePage;
