import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Smartphone, Code2, LayoutGrid, MapPin } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Mockup-first process", desc: "See your site before you commit. We design a free demo so there are no surprises." },
  { icon: Smartphone, title: "Mobile-first builds", desc: "Over 60% of traffic is mobile. Every site we build starts with the phone experience." },
  { icon: Code2, title: "Clean, fast code", desc: "No bloated templates. Hand-coded for speed, SEO, and long-term scalability." },
  { icon: LayoutGrid, title: "CMS for easy updates", desc: "Update your own content — blog posts, portfolio, testimonials — without a developer." },
];

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Story */}
        <section className="section-padding">
          <div className="container-tight max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <MapPin size={14} />
              <span>Based in Orange County, NY</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              We help local businesses look legit online
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              MC WebDev was started by a two-person team of recent college graduates with a simple idea: small businesses deserve websites that are just as professional as the big guys — without the big price tag.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We work with barbershops, restaurants, contractors, auto shops, and service businesses across Orange County, NY. Our mockup-first process means you see exactly what you're getting before you spend a dime. No surprises. No jargon. Just clean, fast websites that bring in more customers.
            </p>
          </div>
        </section>

        {/* Why MC WebDev */}
        <section className="section-padding bg-accent">
          <div className="container-tight">
            <SectionHeader
              badge="Why Us"
              title="Why work with MC WebDev?"
              description="We're not a faceless agency. We're your neighbor — building sites that work."
            />
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r) => (
                <div key={r.title} className="p-6 rounded-2xl bg-background border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <r.icon size={24} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding text-center">
          <div className="container-tight max-w-xl">
            <h2 className="font-heading text-3xl font-bold text-foreground">Ready to get started?</h2>
            <p className="mt-4 text-muted-foreground">Get your free mockup — see what your site could look like.</p>
            <Link to="/contact" className="inline-block mt-6">
              <Button variant="hero" size="xl">Get a Free Mockup</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
