import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleClick = (href: string) => {
    setOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="text-xl font-bold tracking-tight font-[Space_Grotesk]">
          <span className="text-gradient">Portfolio</span><span className="text-foreground"></span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleClick(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[hsl(262_83%_58%)] after:to-[hsl(198_93%_55%)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <Button
          className="hidden md:inline-flex bg-gradient-to-r from-[hsl(262_83%_58%)] to-[hsl(198_93%_55%)] hover:from-[hsl(262_83%_50%)] hover:to-[hsl(198_93%_45%)] text-primary-foreground"
          size="sm"
          onClick={() => handleClick("#contact")}
        >
          Get in Touch
        </Button>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <Button
            className="mt-4 w-full bg-gradient-to-r from-[hsl(262_83%_58%)] to-[hsl(198_93%_55%)] text-primary-foreground"
            size="sm"
            onClick={() => handleClick("#contact")}
          >
            Get in Touch
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
