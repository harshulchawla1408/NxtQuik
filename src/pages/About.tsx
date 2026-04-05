import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Target, Instagram, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import founderImg from "@/assets/shubham-sonwal.png";

const values = [
  { icon: Lightbulb, title: "Innovative Approach", desc: "We combine the latest technology with creative strategies to deliver results that set you apart.", color: "text-nxtquik-cyan" },
  { icon: Target, title: "Tailored Solutions", desc: "Every client gets customized services designed around their unique goals and requirements.", color: "text-primary" },
  { icon: Users, title: "Passionate Team", desc: "Dedicated professionals committed to excellence, innovation, and exceeding expectations.", color: "text-accent" },
];

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
            Building the <span className="gradient-text">Future</span>, Today
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            NxtQuik is a creative technology company born from a passion for innovation. We help businesses
            transform their digital presence through cutting-edge IT solutions and compelling creative content.
            As a rapidly growing startup, we are expanding day by day — working with new clients and taking on
            exciting projects continuously.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Our Values</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <Card key={v.title} className="glass rounded-2xl border-0 hover:glow-blue transition-all duration-300 group gradient-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <v.icon className={`h-8 w-8 ${v.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Founder */}
    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="glass-strong rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 gradient-border">
          <div className="relative">
            <img
              src={founderImg}
              alt="Shubham Sonwal – Founder & Vision Lead"
              className="w-52 h-52 rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -inset-3 rounded-2xl bg-primary/10 blur-xl -z-10" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Meet the Founder</span>
            <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-1 text-foreground">Shubham Sonwal</h3>
            <p className="text-sm font-medium text-accent mb-4">Founder & Vision Lead</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Shubham is deeply passionate about technology, development, and digital solutions. He founded
              NxtQuik with a clear mission — to help businesses grow through technology, automation, branding,
              and a strong digital presence. Under his leadership, NxtQuik continues to expand, taking on
              diverse projects and building lasting relationships with clients across industries.
            </p>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <a href="tel:+918847246105" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +91 884 724 6105
              </a>
              <a href="https://www.instagram.com/ssonwal_29/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" /> @ssonwal_29
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>

    {/* CTA */}
    <SectionWrapper>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want to work with <span className="gradient-text">us</span>?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Let's discuss how we can help your business grow.
        </p>
        <Button asChild size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 glow-blue hover:scale-105 transition-transform">
          <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </SectionWrapper>
  </Layout>
);

export default AboutPage;
