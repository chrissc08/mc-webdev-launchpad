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

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Want one like this?</p>
          <a href="/contact" className="inline-block">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              Get a Free Mockup
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
