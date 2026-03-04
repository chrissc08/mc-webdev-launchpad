import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FinalCTA = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-tight max-w-2xl text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight">
          Want a free mockup of your business website?
        </h2>
        <p className="mt-4 text-secondary-foreground/70">
          Fill out the form below and we'll design a demo of your site — no commitment.
        </p>

        {submitted ? (
          <div className="mt-8 p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="font-heading text-xl font-bold">Request received!</h3>
            <p className="mt-2 text-secondary-foreground/70">
              We'll be in touch within 24 hours with your free mockup concept.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your name" required className="bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40" />
              <Input placeholder="Business name" required className="bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="Email" required className="bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40" />
              <Input type="tel" placeholder="Phone (optional)" className="bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40" />
            </div>
            <Input placeholder="Current website URL (optional)" className="bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40" />
            <Textarea placeholder="Tell us about your business and goals..." rows={4} className="bg-secondary-foreground/5 border-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/40" />
            <div className="text-center pt-2">
              <Button variant="hero" size="xl" type="submit">
                Send My Free Mockup Request
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default FinalCTA;
