import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/MCWebDev_logo.png";

const navItems = [
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-44 px-4 sm:px-10 lg:px-16">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 -ml-2">
          <img src={logo} alt="Hudson Valley WebDev" className="h-44 w-auto" />
        </Link>

        {/* Desktop Nav with Mountain Range */}
        <div className="hidden md:flex items-center relative">
          {/* Mountain range SVG behind nav */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 500 100"
            preserveAspectRatio="xMidYMax slice"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="mountain-grad-1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--navy))" stopOpacity="0.07" />
                <stop offset="100%" stopColor="hsl(var(--navy))" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="mountain-grad-2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="mountain-grad-3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--navy))" stopOpacity="0.04" />
                <stop offset="100%" stopColor="hsl(var(--navy))" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            {/* Back range */}
            <polygon
              points="0,100 40,45 80,65 130,30 180,55 220,25 270,50 310,35 360,60 400,20 440,50 500,40 500,100"
              fill="url(#mountain-grad-3)"
            />
            {/* Mid range */}
            <polygon
              points="0,100 30,60 70,75 120,40 170,62 210,35 260,58 300,42 350,65 390,30 430,55 470,45 500,55 500,100"
              fill="url(#mountain-grad-2)"
            />
            {/* Front range - matches logo's angular peaks */}
            <polygon
              points="0,100 20,70 60,82 100,50 150,70 190,45 240,68 280,52 330,72 370,40 410,62 450,55 500,65 500,100"
              fill="url(#mountain-grad-1)"
            />
          </svg>

          <nav className="relative z-10 flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="nav-cta" size="sm">Get a Free Mockup</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-44 bg-background z-40 flex flex-col">
          <nav className="flex flex-col items-center justify-center flex-1 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-heading font-semibold transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button variant="hero" size="lg">Get a Free Mockup</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
