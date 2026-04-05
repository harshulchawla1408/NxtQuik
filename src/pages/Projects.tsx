import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Astrousers",
    desc: "A modern digital platform built with cutting-edge technologies for seamless user experiences.",
    gradient: "from-primary to-accent",
    tags: ["React", "Node.js", "UI/UX", "Full Stack"],
  },
  {
    name: "Gabru Looks",
    desc: "Creative branding and content strategy that elevated the brand's online presence significantly.",
    gradient: "from-accent to-nxtquik-cyan",
    tags: ["Branding", "Content", "Social Media", "Photography"],
  },
  {
    name: "Scalvea",
    desc: "End-to-end digital transformation including web development, branding, and marketing strategy.",
    gradient: "from-nxtquik-cyan to-primary",
    tags: ["Web Dev", "Marketing", "Branding", "Tailwind"],
  },
  {
    name: "More Coming Soon",
    desc: "We are continuously working on exciting new projects. Stay tuned for updates!",
    gradient: "from-primary/50 to-accent/50",
    tags: ["In Progress"],
  },
];

const ProjectsPage = () => (
  <Layout>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nxtquik-cyan/5 blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">Our <span className="gradient-text">Projects</span></h1>
          <p className="text-lg text-muted-foreground leading-relaxed">A glimpse at some of the brands and businesses we've helped grow.</p>
        </div>
      </div>
    </section>

    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.name} className="glass rounded-2xl border-0 overflow-hidden hover:glow-blue hover:-translate-y-1 transition-all duration-300 group gradient-border">
              <div className={`h-52 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                <span className="text-3xl font-bold text-primary-foreground drop-shadow-lg">{p.name}</span>
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {p.name !== "More Coming Soon" && <ExternalLink className="h-8 w-8 text-primary-foreground" />}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground border border-border/50">{tag}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a <span className="gradient-text">project idea</span>?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Let's turn your vision into reality.</p>
        <Button asChild size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 glow-blue hover:scale-105 transition-transform">
          <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </SectionWrapper>
  </Layout>
);

export default ProjectsPage;
