import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="section-padding">
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary">
                  Contact Us
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Request a free mockup
                </h1>
                <p className="mt-4 text-muted-foreground text-lg">
                  Tell us about your business and we'll design a demo of your site — free, no commitment.
                </p>

                {submitted ? (
                  <div className="mt-8 p-8 rounded-2xl bg-accent border border-border text-center">
                    <div className="text-4xl mb-3">🎉</div>
                    <h3 className="font-heading text-xl font-bold text-foreground">Request received!</h3>
                    <p className="mt-2 text-muted-foreground">
                      We'll be in touch within 24 hours with your free mockup concept.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="Your name" required />
                      <Input placeholder="Business name" required />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input type="email" placeholder="Email" required />
                      <Input type="tel" placeholder="Phone (optional)" />
                    </div>
                    <Textarea placeholder="Tell us about your business, goals, and what you're looking for..." rows={5} />
                    <Button variant="hero" size="xl" type="submit" className="w-full sm:w-auto">
                      Send My Free Mockup Request
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <div className="p-8 rounded-2xl bg-accent border border-border h-fit">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-6">Get in touch</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">hello@mcwebdev.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Phone / Text</p>
                        <p className="text-sm text-muted-foreground">(845) 555-0123</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Service Area</p>
                        <p className="text-sm text-muted-foreground">Orange County, NY & surrounding areas</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-foreground mb-2">Prefer to talk?</p>
                    <Button variant="outline" className="w-full">
                      Book a Call
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
