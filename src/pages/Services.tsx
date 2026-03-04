import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Check } from "lucide-react";

const services = [
  {
    title: "Landing Pages / Brochure Sites",
    desc: "Simple, stunning one-pagers or small sites that give your business instant credibility.",
    bullets: ["1–3 page design", "Contact form", "Mobile-responsive", "Fast load times"],
    timeline: "1–2 weeks",
  },
  {
    title: "Business Websites (5–10 Pages)",
    desc: "Multi-page websites for established businesses that need to showcase services, team, and results.",
    bullets: ["Custom page layouts", "Service pages", "About / team section", "Gallery or portfolio"],
    timeline: "2–3 weeks",
  },
  {
    title: "Lead Gen + Forms",
    desc: "Websites built specifically to capture leads — quote requests, opt-ins, and booking integrations.",
    bullets: ["Quote request forms", "Email capture opt-ins", "Booking tool integrations", "Thank-you / confirmation pages"],
    timeline: "2–3 weeks",
  },
  {
    title: "CMS Integration",
    desc: "Let you update your own blog posts, portfolio items, testimonials, and FAQs without a developer.",
    bullets: ["Blog setup", "Portfolio / project pages", "Testimonials management", "FAQ sections"],
    timeline: "1–2 weeks add-on",
  },
  {
    title: "Basic On-Page SEO Setup",
    desc: "Foundation-level search optimization so you can be found on Google for local searches.",
    bullets: ["Meta tags & titles", "Heading structure", "Image optimization", "Local schema markup"],
    timeline: "Included with every build",
  },
  {
    title: "Speed & Performance Optimization",
    desc: "Fast sites rank better and convert more. We optimize every build for speed.",
    bullets: ["Image compression", "Code minification", "Lazy loading", "Core Web Vitals audit"],
    timeline: "Included with every build",
  },
  {
    title: "Maintenance Plan (Optional)",
    desc: "Ongoing updates, security patches, and small content changes handled for you monthly.",
    bullets: ["Monthly content updates", "Security monitoring", "Uptime checks", "Priority support"],
    timeline: "Monthly retainer",
  },
];

const ServicesPage = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Intro */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-tight">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-primary/20 text-primary text-sm font-medium">
              <MapPin size={14} />
              <span>Serving Orange County, NY businesses</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
              Web design & development that drives results
            </h1>
            <p className="mt-4 text-secondary-foreground/70 max-w-xl text-lg">
              More calls. More bookings. Stronger credibility. We build websites that work as hard as you do.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding">
          <div className="container-tight">
            <div className="space-y-12">
              {services.map((svc, i) => (
                <div key={svc.title} className="grid lg:grid-cols-2 gap-8 items-start p-8 rounded-2xl border border-border hover:border-primary/20 transition-colors">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Service {String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-heading text-2xl font-bold text-foreground mt-2">{svc.title}</h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{svc.desc}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Timeline:</span> {svc.timeline}
                    </p>
                    <Link to="/contact" className="inline-block mt-4">
                      <Button>Request a Quote</Button>
                    </Link>
                  </div>
                  <ul className="space-y-3">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
