import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$900",
    description: "For small brochure & portfolio sites",
    features: ["3–5 pages", "Contact form", "Mobile-first design", "Basic speed optimization", "1 round of revisions"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,500",
    description: "For lead-gen & growing businesses",
    features: ["5–10 pages", "Lead-gen sections & opt-in forms", "Basic on-page SEO", "Speed optimization", "2 rounds of revisions"],
    popular: true,
  },
  {
    name: "Pro + CMS",
    price: "$2,500",
    description: "Advanced features & content management",
    features: ["CMS integration", "Blog / portfolio / testimonials", "Advanced sections", "Conversion optimization", "Priority support"],
    popular: false,
  },
];

const PricingTeaser = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeader
          badge="Pricing"
          title="Websites starting at $900"
          description="Simple, transparent pricing for Orange County businesses."
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                pkg.popular
                  ? "border-primary shadow-lg shadow-primary/10 bg-background"
                  : "border-border bg-background hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-xl font-bold text-foreground">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{pkg.description}</p>
              <div className="mt-4">
                <span className="text-xs text-muted-foreground">Starting at</span>
                <div className="text-3xl font-heading font-bold text-foreground">{pkg.price}</div>
              </div>
              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block mt-6">
                <Button variant={pkg.popular ? "hero" : "outline"} className="w-full">
                  Get a Free Mockup
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/pricing">
            <Button variant="link">Compare Packages →</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
