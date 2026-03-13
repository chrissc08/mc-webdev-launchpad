import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/shared/SectionHeader";

const projects = [
  { title: "Prestige Towing", industry: "Auto", summary: "24/7 Commercial Towing & Recovery website built for Sullivan County's trusted towing experts", tags: ["Design", "Development", "SEO"], image: "/src/assets/prestige-towing.jpg", url: "https://prestige-towing.com" },
];

const WorkPage = () => {

  return (
    <>
      <Header />
      <main className="pt-48">
        <section className="section-padding">
          <div className="container-tight">
            <SectionHeader
              badge="Portfolio"
              title="Our work speaks for itself"
              description="Real websites for real Hudson Valley businesses."
            />

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-lg transition-all duration-300 block">
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
