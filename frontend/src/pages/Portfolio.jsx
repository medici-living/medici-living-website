import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO } from "@/data/content";
import { Reveal } from "@/components/Primitives";

export default function Portfolio() {
  return (
    <div data-testid="portfolio-page" className="relative">
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-8">Portfolio</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl tracking-tighter leading-[0.95] text-[#F2F0E6] max-w-4xl">
              Our approach,<br />
              <span className="italic text-[#C5A059]">in practice.</span>
            </h1>
            <p className="mt-10 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-[#A3A095]">
              A selection of design concepts and interior directions that
              reflect the Medici Living standard. Project portfolio updated as
              commissions complete.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-24 md:pb-32" data-testid="portfolio-gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[340px]">
            {PORTFOLIO.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className={item.span}
              >
                <div
                  className="group relative h-full overflow-hidden border border-[#262626] hover:border-[#C5A059]/60 transition-colors"
                  data-testid={`portfolio-item-${i}`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/40 via-transparent to-transparent" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]" data-testid="portfolio-cta">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-overline mb-6">Your Property, Next</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F2F0E6]">
              Have a property in mind?
            </h2>
            <p className="mt-6 font-sans text-[#A3A095] max-w-xl mx-auto leading-relaxed">
              Let us walk it together — and tell you frankly what we&apos;d do.
            </p>
            <Link
              to="/consultation"
              data-testid="portfolio-final-cta-btn"
              className="group inline-flex items-center mt-10 bg-[#C5A059] text-[#0C0C0C] hover:bg-[#A88B4B] px-10 py-5 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 rounded-sm"
            >
              Book a Free Consultation
              <ArrowRight
                size={16}
                className="ml-3 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
