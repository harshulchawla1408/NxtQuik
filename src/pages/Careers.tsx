import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Heart, Coffee, ArrowRight } from "lucide-react";

const perks = [
  { icon: Rocket, title: "Growth Opportunities", desc: "Work on real projects with cutting-edge tech and grow your skills." },
  { icon: Heart, title: "Creative Freedom", desc: "We encourage innovation and creative problem-solving." },
  { icon: Coffee, title: "Flexible Culture", desc: "Remote-friendly, flexible hours, and a supportive team." },
];

const openings = [
  { title: "Frontend Developer", type: "Full-Time / Intern", desc: "Build modern, responsive UI with React and Tailwind." },
  { title: "Backend Developer", type: "Full-Time / Intern", desc: "Design scalable APIs with Node.js and databases." },
  { title: "Graphic Designer", type: "Full-Time / Freelance", desc: "Create stunning visual designs for brands and digital media." },
  { title: "Video Editor", type: "Freelance", desc: "Edit professional videos for events, marketing, and social media." },
];

const CareersPage = () => (
  <Layout>
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Careers</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
            Join the <span className="gradient-text">NxtQuik</span> Team
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're always looking for passionate, creative minds to help us build the future. If you love technology and creativity, we'd love to hear from you.
          </p>
        </div>
      </div>
    </section>

    <SectionWrapper>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {perks.map((p) => (
            <Card key={p.title} className="glass rounded-2xl border-0 text-center gradient-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <p.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Open <span className="gradient-text">Positions</span>
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {openings.map((o) => (
            <Card key={o.title} className="glass rounded-2xl border-0 gradient-border hover:glow-blue transition-all">
              <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{o.title}</h3>
                  <p className="text-sm text-muted-foreground">{o.desc}</p>
                  <span className="text-xs text-primary mt-1 inline-block">{o.type}</span>
                </div>
                <Button asChild variant="outline" className="rounded-full border-border/50 hover:border-primary/30 shrink-0">
                  <Link to="/contact">Apply <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  </Layout>
);

export default CareersPage;
