import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { Reveal } from "@/components/Primitives";

export default function Testimonials() {
  return (
    <div data-testid="testimonials-page" className="relative">
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-8">Testimonials</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl tracking-tighter leading-[0.95] text-[#F2F0E6] max-w-4xl">
              In the<br />
              <span className="italic text-[#C5A059]">
                words of our clients.
              </span>
            </h1>
            <p className="mt-10 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-[#A3A095]">
              We are quietly proud of the relationships we&apos;ve built with
              landlords, investors, and superhosts across London and
              Lincolnshire.
            </p>
          </Reveal>
        </div>
      </section>

      {/* QUOTES */}
      <section
        className="pb-24 md:pb-32 border-t border-[#262626] pt-16 md:pt-20"
        data-testid="testimonial-list"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.05}>
              <div
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${i % 2 === 1 ? "md:ml-12" : ""}`}
                data-testid={`testimonial-${i}`}
              >
                <div className="md:col-span-1">
                  <Quote
                    size={36}
                    className="text-[#C5A059]"
                    strokeWidth={1}
                  />
                </div>
                <div className="md:col-span-11">
                  <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-snug text-[#F2F0E6]">
                    {t.quote}
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="block w-12 h-px bg-[#C5A059]" />
                    <p className="font-sans text-sm text-[#C5A059] uppercase tracking-[0.2em]">
                      {t.author}, {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]" data-testid="testimonials-cta">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-overline mb-6">Become Our Next Client</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F2F0E6]">
              Your property&apos;s story starts here.
            </h2>
            <Link
              to="/consultation"
              data-testid="testimonials-final-cta-btn"
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
