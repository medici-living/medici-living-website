import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, PILLARS } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/Primitives";

export default function Services() {
  return (
    <div data-testid="services-page" className="relative">
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-8">Services</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl tracking-tighter leading-[0.95] text-[#F2F0E6] max-w-4xl">
              Two services.<br />
              <span className="italic text-[#C5A059]">One standard.</span>
            </h1>
            <p className="mt-10 max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-[#A3A095]">
              From a three-day cosmetic restage to a sixteen-week
              full-flat reinvention — both delivered with the same hotel-grade
              specification and editorial sensibility.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      {SERVICES.map((s, i) => (
        <section
          key={s.slug}
          className={`py-24 md:py-32 ${i % 2 === 0 ? "" : "bg-[#0C0C0C]"} border-t border-[#262626]`}
          data-testid={`service-detail-${s.slug}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <Reveal
              className={`md:col-span-6 ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal
              delay={0.1}
              className={`md:col-span-6 ${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}
            >
              <p className="text-overline mb-6">
                {String(i + 1).padStart(2, "0")} · {s.sub}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight leading-tight text-[#F2F0E6]">
                {s.title}
              </h2>
              <p className="mt-8 font-sans text-base sm:text-lg leading-relaxed text-[#A3A095]">
                {s.description}
              </p>
              <ul className="mt-10 space-y-4">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-4 font-sans text-[#F2F0E6]"
                  >
                    <Check
                      size={18}
                      className="text-[#C5A059] mt-1 flex-shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/consultation"
                data-testid={`service-cta-${s.slug}`}
                className="group inline-flex items-center mt-12 text-[#C5A059] hover:text-[#A88B4B] font-sans text-xs uppercase tracking-[0.2em] underline underline-offset-4"
              >
                Enquire about this service
                <ArrowRight
                  size={14}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      {/* WHY MEDICI PILLARS */}
      <section
        className="py-24 md:py-32 border-t border-[#262626]"
        data-testid="services-pillars"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionHeading
              overline="Why Medici"
              title="Specification you cannot buy on the high street."
              subtitle="Every project is calibrated for the realities of the UK rental market — durability, photographability, and yield."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-20">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="border-t border-[#C5A059] pt-6">
                  <p className="font-serif text-4xl text-[#C5A059] mb-4">
                    {p.n}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#F2F0E6] mb-4">
                    {p.title}
                  </h3>
                  <p className="font-sans text-[#A3A095] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]" data-testid="services-cta">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-overline mb-6">Begin</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F2F0E6]">
              Ready to start a conversation?
            </h2>
            <Link
              to="/consultation"
              data-testid="services-final-cta-btn"
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
