import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";

const filters = ["All", "Barbershops", "Auto", "Restaurants", "Trades", "Other"];

const projects = [
  { title: "Hudson Valley Barbershop", industry: "Barbershops", summary: "Modern booking site that tripled appointments", tags: ["Design", "Development", "SEO"], image: "https://images.unsplash.com/photo-1585747860019-8629e8b2fae1?w=600&h=400&fit=crop" },
  { title: "OC Towing & Recovery", industry: "Auto", summary: "24/7 towing service site with lead capture", tags: ["Design", "Lead Gen", "Speed"], image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop" },
  { title: "Bella's Italian Kitchen", industry: "Restaurants", summary: "Restaurant site with online ordering integration", tags: ["Design", "CMS", "SEO"], image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" },
  { title: "Warwick Plumbing Co.", industry: "Trades", summary: "Professional site generating 5x more quote requests", tags: ["Design", "Forms", "SEO"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" },
  { title: "Monroe Auto Detailing", industry: "Auto", summary: "Sleek showcase site with booking integration", tags: ["Design", "Development"], image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=400&fit=crop" },
  { title: "Greenwood Landscaping", industry: "Trades", summary: "Portfolio-driven site with seasonal service pages", tags: ["Design", "CMS", "Portfolio"], image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&h=400&fit=crop" },
];

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.industry === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container-tight">
            <SectionHeader
              badge="Portfolio"
              title="Our work speaks for itself"
              description="Real websites for real Orange County businesses."
            />

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === f
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div key={p.title} className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.industry}</span>
                    <h3 className="font-heading text-lg font-bold text-foreground mt-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.summary}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-accent text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="inline-block mt-4 text-sm font-semibold text-primary hover:underline">
                      View Project →
                    </Link>
                  </div>
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

export default WorkPage;
