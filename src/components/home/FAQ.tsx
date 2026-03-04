import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: 'What do I get for "starting at $900"?', a: "Our Starter package includes a 3–5 page mobile-first website with a contact form, speed optimization, and clean, responsive design. Perfect for brochure-style sites." },
  { q: "How does the free mockup work?", a: "Tell us about your business, and we'll design an interactive demo of your site. You can see it, click through it, and request changes — all before committing." },
  { q: "How long does a website take?", a: "Most projects take 1–3 weeks from approved mockup to launch, depending on the scope and number of pages." },
  { q: "Can you connect booking or contact forms?", a: "Absolutely. We can integrate tools like Calendly, Booksy, or custom contact/quote request forms that send leads directly to your email." },
  { q: "What is CMS integration?", a: "CMS (Content Management System) lets you update your site's content — like blog posts, portfolio items, or testimonials — without needing a developer." },
  { q: "Do you do SEO?", a: "We include basic on-page SEO setup: meta tags, page titles, heading structure, image optimization, and local schema markup." },
  { q: "Do I own the website?", a: "Yes. You own all the code, content, and design assets we create for you." },
  { q: "What if I need changes after launch?", a: "We offer optional maintenance plans for ongoing updates. Or, if it's a simple change, just reach out and we'll handle it." },
];

const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <SectionHeader
          badge="FAQ"
          title="Common questions"
          description="Everything you need to know before getting started."
        />

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
