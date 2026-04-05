import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe, Smartphone, Cloud, Code2, BrainCircuit, Megaphone, Share2,
  Video, Camera, Palette, PenTool, ArrowRight, Rocket, BarChart3,
} from "lucide-react";

const itServices = [
  { icon: Globe, title: "Web Development", desc: "Modern responsive websites and web applications built with cutting-edge frameworks." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform mobile apps for iOS and Android." },
  { icon: Cloud, title: "Cloud Solutions & Digital Transformation", desc: "Scalable cloud infrastructure and seamless digital transformation strategies." },
  { icon: Code2, title: "Custom Software Development", desc: "Tailored software solutions designed for your unique business processes." },
  { icon: BrainCircuit, title: "Tech Consulting", desc: "Expert guidance on technology strategy, architecture, and implementation." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven marketing campaigns that maximize ROI and drive growth." },
  { icon: Share2, title: "Social Media Management", desc: "Strategic social media presence that builds community and engagement." },
  { icon: Palette, title: "Branding & Identity", desc: "Complete brand identity design including logos, guidelines, and visual systems." },
];

const contentServices = [
  { icon: Video, title: "Wedding & Event Videography", desc: "Cinematic videography that captures your special moments beautifully." },
  { icon: Camera, title: "Photography & Visual Storytelling", desc: "Professional photography that tells your brand's visual story." },
  { icon: PenTool, title: "Graphic Design", desc: "Stunning visual designs that leave lasting impressions." },
  { icon: BarChart3, title: "Social Media Content", desc: "Engaging content that grows your social media presence organically." },
];

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Card className="glass rounded-2xl border-0 hover:glow-blue hover:-translate-y-1 transition-all duration-300 group gradient-border">
    <CardContent className="p-7">
      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const ServicesPage = () => (
  <Layout>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">What We Do</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From powerful IT solutions to captivating creative content — we deliver end-to-end services that drive growth.
          </p>
        </div>
      </div>
    </section>

    <SectionWrapper>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8"><span className="gradient-text">IT Solutions</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {itServices.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8"><span className="gradient-text">Content Creation</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contentServices.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container mx-auto px-4 text-center">
        <div className="glass-strong rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 gradient-bg" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a <span className="gradient-text">Custom Solution</span>?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">Every business is unique. Tell us what you need and we'll craft the perfect solution.</p>
          <Button asChild size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 glow-blue hover:scale-105 transition-transform">
            <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  </Layout>
);

export default ServicesPage;
