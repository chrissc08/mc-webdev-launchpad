import SectionHeader from "@/components/shared/SectionHeader";
import prestigeWork from "@/assets/prestigework.png";


const projects = [
  { title: "Prestige Towing", industry: "Towing & Recovery", result: "Professional website for Sullivan County's leading towing company", image: prestigeWork, url: "https://prestige-towing.com" },
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

        <div className="max-w-xl mx-auto">
          <a href={projects[0].url} target="_blank" rel="noopener noreferrer" className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-lg transition-all duration-300 block">
            <div className="aspect-[3/2] overflow-hidden">
              <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{projects[0].industry}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mt-1">{projects[0].title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{projects[0].result}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-primary group-hover:underline">
                View Site →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
