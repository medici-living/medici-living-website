import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/content";
import { Reveal } from "@/components/Primitives";

export default function FAQ() {
  return (
    <div data-testid="faq-page" className="relative">
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-8">FAQ</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl tracking-tighter leading-[0.95] text-[#F2F0E6] max-w-4xl">
              Frequently<br />
              <span className="italic text-[#C5A059]">considered.</span>
            </h1>
            <p className="mt-10 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-[#A3A095]">
              A handful of the most common questions we&apos;re asked at first
              consultation. Anything else? We&apos;d rather discuss it
              directly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ACCORDION */}
      <section
        className="pb-24 md:pb-32 border-t border-[#262626] pt-16"
        data-testid="faq-accordion-section"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              data-testid="faq-accordion"
            >
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-[#262626] last:border-b-0"
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="font-serif text-xl md:text-2xl tracking-tight text-[#F2F0E6] hover:text-[#C5A059] hover:no-underline py-8 transition-colors data-[state=open]:text-[#C5A059]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-[#A3A095] text-base leading-relaxed pb-8 pr-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]" data-testid="faq-cta">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <p className="text-overline mb-6">Still curious?</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F2F0E6]">
              We&apos;d rather answer it in person.
            </h2>
            <Link
              to="/consultation"
              data-testid="faq-final-cta-btn"
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
