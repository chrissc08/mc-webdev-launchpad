import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "$900",
    desc: "For small brochure / portfolio sites",
    features: [
      "3–5 pages",
      "Custom responsive design",
      "Contact form",
      "Mobile-first build",
      "Basic speed optimization",
      "1 round of revisions",
      "SEO basics (meta tags + headings)",
    ],
    missing: ["CMS integration", "Lead-gen sections", "Blog setup", "Priority support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$1,500",
    desc: "For lead-gen & growing businesses",
    features: [
      "5–10 pages",
      "Custom responsive design",
      "Lead-gen sections & opt-in forms",
      "Quote request / booking forms",
      "On-page SEO setup",
      "Speed optimization",
      "2 rounds of revisions",
      "Google Analytics setup",
    ],
    missing: ["CMS integration", "Blog setup"],
    popular: true,
  },
  {
    name: "Pro + CMS",
    price: "$2,500",
    desc: "Advanced features & content management",
    features: [
      "Everything in Growth",
      "CMS integration (blog, portfolio, testimonials)",
      "Advanced page sections",
      "Conversion optimization",
      "Local schema markup",
      "3 rounds of revisions",
      "Priority support",
    ],
    missing: [],
    popular: false,
  },
];

const addons = [
  "Extra pages — $100–$200/page",
  "Copywriting — Starting at $300",
  "Branding / logo refresh — Starting at $400",
  "Monthly maintenance plan — $99/month",
  "Booking integrations (Booksy, Calendly, etc.) — $150–$300",
];

const PricingPage = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container-tight">
            <SectionHeader
              badge="Pricing"
              title="Simple pricing for Orange County businesses"
              description="Most sites start at $900. Final pricing depends on pages + features."
            />

            <div className="grid sm:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl p-6 border flex flex-col ${
                    pkg.popular
                      ? "border-primary shadow-lg shadow-primary/10 bg-background"
                      : "border-border bg-background"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pkg.desc}</p>
                  <div className="mt-4">
                    <span className="text-xs text-muted-foreground">Starting at</span>
                    <div className="text-3xl font-heading font-bold text-foreground">{pkg.price}</div>
                  </div>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                    {pkg.missing.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground/40 line-through">
                        <Check size={16} className="mt-0.5 shrink-0 opacity-30" />
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

            {/* Add-ons */}
            <div className="mt-16 max-w-2xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-6">Add-ons</h3>
              <ul className="space-y-3">
                {addons.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground italic">
              Starting prices shown. Final quote depends on scope and integrations.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
