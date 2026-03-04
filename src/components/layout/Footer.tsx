import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Strip */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container-tight section-padding !py-12 text-center">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            Ready to get started?
          </h3>
          <p className="text-secondary-foreground/70 mb-6 max-w-md mx-auto">
            Get a free mockup of your website — no commitment required.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">Get a Free Mockup</Button>
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container-tight px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-xl font-bold tracking-tight">
              MC<span className="text-primary">WebDev</span>
            </Link>
            <p className="mt-3 text-sm text-secondary-foreground/60 leading-relaxed">
              High-converting websites for local businesses in Orange County, NY.
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-sm text-secondary-foreground/60">
              <MapPin size={14} />
              <span>Serving Orange County, NY</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-secondary-foreground/50">Pages</h4>
            <ul className="space-y-2 text-sm">
              {["Services", "Work", "Pricing", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-secondary-foreground/50">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Custom Web Design</li>
              <li>Development</li>
              <li>CMS Integration</li>
              <li>SEO Setup</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-secondary-foreground/50">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>hello@mcwebdev.com</li>
              <li>(845) 555-0123</li>
              <li>Orange County, NY</li>
            </ul>
            {/* Social placeholder */}
            <div className="flex gap-3 mt-4">
              {["FB", "IG", "LI"].map((s) => (
                <div key={s} className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-xs text-secondary-foreground/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} MC WebDev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
