import SectionHeader from "@/components/shared/SectionHeader";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike R.",
    business: "Hudson Valley Barbershop",
    quote: "MC WebDev took our outdated site and turned it into a booking machine. We tripled our appointments in the first month.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    business: "OC Towing & Recovery",
    quote: "Professional, fast, and they actually understood what a small business needs. Our site finally looks as good as our service.",
    rating: 5,
  },
  {
    name: "Anthony D.",
    business: "Warwick Plumbing Co.",
    quote: "The mockup-first process was great. I could see exactly what I was getting before committing. Highly recommend.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-accent">
      <div className="container-tight">
        <SectionHeader
          badge="Testimonials"
          title="What our clients say"
          description="Real feedback from Orange County businesses."
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-background border border-border">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
