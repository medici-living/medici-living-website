import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { BRAND } from "@/data/content";
import { Reveal } from "@/components/Primitives";

export default function Testimonials() {
  return (
    <div data-testid="partnerships-page" className="relative">
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-8">Partnerships</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl tracking-tighter leading-[0.95] text-[#F2F0E6] max-w-4xl">
              Referral<br />
              <span className="italic text-[#C5A059]">
                partnerships.
              </span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* STATEMENT */}
      <section
        className="pb-24 md:pb-32 border-t border-[#262626] pt-16 md:pt-20"
        data-testid="partnerships-statement"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-10">Now Open</p>
            <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-snug text-[#F2F0E6]">
              Medici Living is currently accepting its first referral
              partnerships with Lincolnshire letting agents.
            </blockquote>
            <p className="mt-10 font-sans text-base sm:text-lg leading-relaxed text-[#A3A095] max-w-2xl">
              Get in touch to discuss how we can add value to your landlord
              portfolio — from bespoke temporary staging to full permanent
              renovations, we work discreetly alongside letting agents to help
              landlords position properties at the top of the local market.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-t border-[#C5A059] pt-6">
                <p className="text-overline mb-3">Telephone</p>
                <a
                  href={BRAND.phoneHref}
                  className="font-serif text-xl text-[#F2F0E6] hover:text-[#C5A059] transition-colors inline-flex items-center gap-2"
                  data-testid="partnerships-phone"
                >
                  <Phone size={16} className="text-[#C5A059]" />
                  {BRAND.phone}
                </a>
              </div>
              <div className="border-t border-[#C5A059] pt-6">
                <p className="text-overline mb-3">Email</p>
                <a
                  href={BRAND.emailHref}
                  className="font-serif text-lg text-[#F2F0E6] hover:text-[#C5A059] transition-colors inline-flex items-center gap-2 break-all"
                  data-testid="partnerships-email"
                >
                  <Mail size={16} className="text-[#C5A059] flex-shrink-0" />
                  {BRAND.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]"
        data-testid="partnerships-cta"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-overline mb-6">Get In Touch</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F2F0E6]">
              Start the conversation.
            </h2>
            <Link
              to="/consultation"
              data-testid="partnerships-final-cta-btn"
              className="group inline-flex items-center mt-10 bg-[#C5A059] text-[#0C0C0C] hover:bg-[#A88B4B] px-10 py-5 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 rounded-sm"
            >
              Enquire About a Partnership
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
