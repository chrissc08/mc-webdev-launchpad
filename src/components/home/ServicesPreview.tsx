import SectionHeader from "@/components/shared/SectionHeader";
import { Palette, Code2, LayoutGrid, Search, Gauge, Settings } from "lucide-react";

const services = [
  { icon: Palette, title: "Custom Web Design", desc: "Unique designs tailored to your brand and audience." },
  { icon: Code2, title: "Development", desc: "Clean HTML/CSS/JS code. React optional." },
  { icon: LayoutGrid, title: "CMS Integration", desc: "Easily update content without touching code." },
  { icon: Search, title: "Basic SEO Setup", desc: "On-page optimization to get found locally." },
  { icon: Gauge, title: "Speed Optimization", desc: "Fast load times that keep visitors engaged." },
  { icon: Settings, title: "Maintenance & Updates", desc: "Ongoing support to keep your site running." },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <SectionHeader
          badge="Services"
          title="Everything you need to look legit online"
          description="From design to launch and beyond — we handle it all."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="group p-6 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors mb-4">
                <svc.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{svc.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
