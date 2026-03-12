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
        <div className="hidden md:flex items-center relative py-2">
          {/* Mountain range SVG behind nav */}
          <svg
            className="absolute -inset-x-8 -inset-y-4 pointer-events-none"
            viewBox="0 0 500 120"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            style={{ width: 'calc(100% + 4rem)', height: 'calc(100% + 2rem)' }}
          >
            <defs>
              <linearGradient id="mountain-grad-1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--navy))" stopOpacity="0.18" />
                <stop offset="100%" stopColor="hsl(var(--navy))" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="mountain-grad-2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
              </linearGradient>
              <linearGradient id="mountain-grad-3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--navy))" stopOpacity="0.12" />
                <stop offset="100%" stopColor="hsl(var(--navy))" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            {/* Back range */}
            <polygon
              points="0,120 40,50 80,70 130,30 180,58 220,20 270,52 310,35 360,62 400,15 440,48 500,38 500,120"
              fill="url(#mountain-grad-3)"
            />
            {/* Mid range */}
            <polygon
              points="0,120 30,62 70,78 120,42 170,65 210,32 260,60 300,44 350,68 390,28 430,56 470,46 500,58 500,120"
              fill="url(#mountain-grad-2)"
            />
            {/* Front range */}
            <polygon
              points="0,120 20,72 60,85 100,52 150,72 190,45 240,70 280,54 330,74 370,40 410,64 450,56 500,68 500,120"
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
