import { Link } from "react-router-dom";
import { BRAND, NAV_LINKS, BOROUGHS } from "@/data/content";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-[#0C0C0C] border-t border-[#262626] pt-24 pb-12 relative z-10"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link
          to="/"
          className="block font-serif text-6xl md:text-8xl tracking-[0.05em] text-[#F2F0E6] hover:text-[#C5A059] transition-colors mb-16"
          data-testid="footer-logo"
        >
          MEDICI
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 border-t border-[#262626] pt-16">
          <div>
            <p className="text-overline mb-6">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-sans text-sm text-[#A3A095] hover:text-[#C5A059] transition-colors"
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/consultation"
                  className="font-sans text-sm text-[#A3A095] hover:text-[#C5A059] transition-colors"
                  data-testid="footer-link-consultation"
                >
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-overline mb-6">Services</p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="font-sans text-sm text-[#A3A095] hover:text-[#C5A059] transition-colors"
                >
                  Temporary Staging
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-sans text-sm text-[#A3A095] hover:text-[#C5A059] transition-colors"
                >
                  Permanent Renovations
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="font-sans text-sm text-[#A3A095] hover:text-[#C5A059] transition-colors"
                >
                  Recent Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-overline mb-6">Service Areas</p>
            <ul className="space-y-3">
              {BOROUGHS.slice(0, 6).map((b) => (
                <li key={b.slug}>
                  <Link
                    to={`/areas/${b.slug}`}
                    className="font-sans text-sm text-[#A3A095] hover:text-[#C5A059] transition-colors"
                    data-testid={`footer-borough-${b.slug}`}
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="font-sans text-xs text-[#737373] hover:text-[#C5A059] transition-colors"
                >
                  + All areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-overline mb-6">Enquiries</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="font-sans text-sm text-[#A3A095] hover:text-[#C5A059] transition-colors"
                  data-testid="footer-phone"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.emailHref}
                  className="font-sans text-sm text-[#A3A095] hover:text-[#C5A059] transition-colors break-all"
                  data-testid="footer-email"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <span className="font-sans text-sm text-[#A3A095]">
                  London &amp; Lincolnshire
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-[#262626] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-sans text-xs text-[#737373] tracking-wider">
            © {year} {BRAND.name}. {BRAND.domain}
          </p>
          <p className="font-sans text-xs text-[#737373] tracking-[0.2em] uppercase">
            Considered renovations · United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
};
