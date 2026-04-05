import { useState } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays, Send, MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const services = [
  "Web Development", "App Development", "Cloud Solutions", "Custom Software",
  "Tech Consulting", "Digital Marketing", "Social Media Management",
  "Wedding & Event Videography", "Photography", "Graphic Design & Branding",
  "Content Creation", "Other",
];

const budgets = ["< $1,000", "$1,000 - $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+", "Not Sure"];

const ContactPage = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const company = data.get("company") as string;
    const service = data.get("service") as string;
    const budget = data.get("budget") as string;
    const message = data.get("message") as string;

    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ACompany: ${company}%0AService: ${service}%0ABudget: ${budget}%0AMessage: ${message}%0AMeeting Date: ${date ? format(date, "PPP") : "Not selected"}%0ATime: ${time || "Not selected"}`;
    window.open(`mailto:nxtquik@gmail.com?subject=New Inquiry from ${name}&body=${body}`, "_self");

    setTimeout(() => {
      setSending(false);
      toast.success("Thank you! We will contact you soon.");
      form.reset();
      setDate(undefined);
      setTime("");
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Get in Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-6">
              Schedule a <span className="gradient-text">Meeting</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to start your project? Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="glass-strong rounded-3xl p-8 md:p-10 gradient-border">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input name="name" placeholder="Your Name" required className="rounded-xl bg-secondary/30 border-border/30 focus:border-primary/50" />
                    <Input name="email" type="email" placeholder="Email Address" required className="rounded-xl bg-secondary/30 border-border/30 focus:border-primary/50" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input name="phone" placeholder="Phone Number" className="rounded-xl bg-secondary/30 border-border/30 focus:border-primary/50" />
                    <Input name="company" placeholder="Company Name" className="rounded-xl bg-secondary/30 border-border/30 focus:border-primary/50" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Select name="service">
                      <SelectTrigger className="rounded-xl bg-secondary/30 border-border/30">
                        <SelectValue placeholder="Service Required" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>

                    <Select name="budget">
                      <SelectTrigger className="rounded-xl bg-secondary/30 border-border/30">
                        <SelectValue placeholder="Budget Range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <Textarea name="message" placeholder="Tell us about your project..." rows={4} className="rounded-xl bg-secondary/30 border-border/30 focus:border-primary/50" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("rounded-xl justify-start bg-secondary/30 border-border/30", !date && "text-muted-foreground")}>
                          <CalendarDays className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
                      </PopoverContent>
                    </Popover>
                    <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="rounded-xl bg-secondary/30 border-border/30" placeholder="Preferred Time" />
                  </div>

                  <Button type="submit" disabled={sending} size="lg" className="w-full gradient-bg text-primary-foreground rounded-xl text-base glow-blue hover:scale-[1.02] transition-transform">
                    <Send className="mr-2 h-5 w-5" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="glass rounded-2xl p-6 gradient-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>#445/7, Sirhindi Bazar, Patiala-147001</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href="tel:+918054486087" className="hover:text-primary transition-colors">80544-86087</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <a href="mailto:nxtquik@gmail.com" className="hover:text-primary transition-colors">nxtquik@gmail.com</a>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-6 gradient-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <a href="https://www.linkedin.com/company/ugcnxtquik/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/30">
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </a>
                  <a href="https://www.instagram.com/nxtquik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/30">
                    <Instagram className="h-5 w-5" /> Instagram
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 gradient-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Response Time</h3>
                <p className="text-sm text-muted-foreground">We typically respond within <span className="text-primary font-semibold">24 hours</span>. For urgent inquiries, call us directly.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default ContactPage;
