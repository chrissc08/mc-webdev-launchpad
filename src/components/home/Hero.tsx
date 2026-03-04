import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, Smartphone, Search, RefreshCw } from "lucide-react";
import heroImage from "@/assets/hero-mockup.jpg";

const trustBadges = [
  { icon: Zap, label: "Fast Delivery" },
  { icon: Smartphone, label: "Mobile-First" },
  { icon: Search, label: "SEO-Ready" },
  { icon: RefreshCw, label: "Unlimited Revisions" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="container-tight px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <MapPin size={14} />
              <span>Serving Orange County, NY</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight">
              High-converting websites for Orange County, NY businesses.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Mobile-first. Fast load times. Built to turn visitors into calls and bookings.
            </p>

            <p className="mt-3 text-sm text-muted-foreground">
              Mockup-first process • Clear pricing • Fast turnaround
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">Get a Free Mockup</Button>
              </Link>
              <Link to="/work">
                <Button variant="hero-outline" size="xl">See Work</Button>
              </Link>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-sm font-semibold text-foreground">
              Starting at <span className="text-primary text-lg font-bold">$900</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Website mockup on multiple devices"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 p-4 rounded-xl bg-accent">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <badge.icon size={20} />
              </div>
              <span className="text-sm font-semibold text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Social proof line */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Built for barbershops, towing, auto shops, restaurants, contractors & more.
        </p>
      </div>
    </section>
  );
};

export default Hero;
