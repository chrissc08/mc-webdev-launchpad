import SectionHeader from "@/components/shared/SectionHeader";
import { FileText, MessageSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "We build a free mockup",
    description: "Tell us about your business and we'll design a demo you can see and interact with — free of charge.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "You request changes",
    description: "Review the mockup and request as many tweaks as you need until it looks and feels right.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "We code & launch",
    description: "Once approved, we build the real site with clean code, fast load times, and go live.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-tight">
        <SectionHeader
          badge="How It Works"
          title="From mockup to launch in 3 steps"
          description="Our process is designed to be fast, transparent, and low-risk."
        />

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative p-6 rounded-2xl bg-background shadow-sm border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <item.icon size={24} />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.step}</span>
              <h3 className="font-heading text-lg font-bold text-foreground mt-2">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
