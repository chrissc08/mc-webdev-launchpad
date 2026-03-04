import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

const projects = [
  { title: "Hudson Valley Barbershop", industry: "Barbershop", result: "3x more bookings within 30 days", image: "https://images.unsplash.com/photo-1585747860019-8629e8b2fae1?w=600&h=400&fit=crop" },
  { title: "OC Towing & Recovery", industry: "Towing", result: "First page on Google for local keywords", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop" },
  { title: "Bella's Italian Kitchen", industry: "Restaurant", result: "Online orders up 150% after launch", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" },
  { title: "Warwick Plumbing Co.", industry: "Trades", result: "5-star credibility, more quote requests", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" },
];

const FeaturedWork = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-tight">
        <SectionHeader
          badge="Featured Work"
          title="Sites that get results"
          description="Real projects for real local businesses."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[3/2] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.industry}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.result}</p>
                <Link to="/work" className="inline-block mt-4 text-sm font-semibold text-primary hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Want one like this?</p>
          <Link to="/contact">
            <Button variant="hero" size="lg">Get a Free Mockup</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
