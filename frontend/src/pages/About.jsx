import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Primitives";

const ABOUT_IMG =
  "https://images.pexels.com/photos/20418771/pexels-photo-20418771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const VALUES = [
  {
    title: "Discretion",
    body: "We work for private landlords, family offices, and overseas investors. Confidentiality is our default.",
  },
  {
    title: "Precision",
    body: "Fixed scope. Fixed fees. Weekly reports. We tell you what we're doing — and then we do it.",
  },
  {
    title: "Restraint",
    body: "Luxury isn't loud. We specify quiet, considered materials that age beautifully and photograph well.",
  },
  {
    title: "Yield-First",
    body: "Aesthetics serve a purpose. Every brief begins with a conversation about what the property should earn.",
  },
];

export default function About() {
  return (
    <div data-testid="about-page" className="relative">
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-8">About</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl tracking-tighter leading-[0.95] text-[#F2F0E6] max-w-4xl">
              The studio<br />
              <span className="italic text-[#C5A059]">behind Medici.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section
        className="py-16 md:py-24 border-t border-[#262626]"
        data-testid="about-story"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <Reveal className="md:col-span-5 md:sticky md:top-32">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={ABOUT_IMG}
                alt="Medici Living interior"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 space-y-8">
            <p className="text-overline">Our Story</p>
            <p className="font-serif text-2xl md:text-3xl leading-snug tracking-tight text-[#F2F0E6]">
              Medici Living was founded on a simple observation —{" "}
              <span className="italic text-[#C5A059]">
                the rental property market is starved of serious design.
              </span>
            </p>
            <p className="font-sans text-[#A3A095] text-base sm:text-lg leading-relaxed">
              For decades, UK landlords have been served either by high-street
              contractors with no design literacy or by interior studios with no
              interest in turnover, yield, or photography for a booking
              platform. We were built to close that gap.
            </p>
            <p className="font-sans text-[#A3A095] text-base sm:text-lg leading-relaxed">
              Our team combines architectural background, hotel-grade interior
              design experience, and a deep, working knowledge of the
              short-let and long-let markets in London and Lincolnshire. We
              speak the language of materials and the language of revenue —
              fluently, in both directions.
            </p>
            <p className="font-sans text-[#A3A095] text-base sm:text-lg leading-relaxed">
              Medici Living is now accepting its first briefs across Mayfair,
              Kensington, Chelsea, Notting Hill, Shoreditch, Lincoln, and
              Stamford — with a particular focus on referral partnerships
              alongside Lincolnshire letting agents. We prefer to work by
              introduction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]"
        data-testid="about-values"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionHeading
              overline="What We Believe"
              title="Four values that shape every project."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-20">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="border-t border-[#262626] pt-8">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#F2F0E6] mb-4">
                    {v.title}
                  </h3>
                  <p className="font-sans text-[#A3A095] leading-relaxed text-base sm:text-lg">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-[#262626]" data-testid="about-cta">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-overline mb-6">Begin a conversation</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F2F0E6]">
              Let&apos;s talk about your property.
            </h2>
            <Link
              to="/consultation"
              data-testid="about-final-cta-btn"
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
