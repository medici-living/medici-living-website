import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/data/content";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled
          ? "bg-[#0C0C0C]/90 border-b border-[#262626]/60"
          : "bg-transparent"
      }`}
      data-testid="site-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link
          to="/"
          className="font-serif text-2xl tracking-[0.15em] text-[#F2F0E6] hover:text-[#C5A059] transition-colors"
          data-testid="nav-logo-link"
        >
          {BRAND.short}
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className={({ isActive }) =>
                `font-sans text-xs uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? "text-[#C5A059]"
                    : "text-[#F2F0E6] hover:text-[#C5A059]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/consultation"
            data-testid="nav-consultation-btn"
            className="bg-[#C5A059] text-[#0C0C0C] hover:bg-[#A88B4B] px-6 py-3 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 rounded-sm"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="lg:hidden text-[#F2F0E6] hover:text-[#C5A059] transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          data-testid="nav-menu-toggle"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden bg-[#0C0C0C] border-t border-[#262626]"
          data-testid="mobile-menu"
        >
          <nav className="flex flex-col px-6 py-8 gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-sans text-sm uppercase tracking-[0.2em] ${
                    isActive ? "text-[#C5A059]" : "text-[#F2F0E6]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/consultation"
              data-testid="mobile-consultation-btn"
              className="bg-[#C5A059] text-[#0C0C0C] px-6 py-4 font-sans text-xs tracking-[0.2em] uppercase text-center mt-4"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
