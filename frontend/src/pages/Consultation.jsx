import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND } from "@/data/content";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Reveal } from "@/components/Primitives";

export default function Consultation() {
  return (
    <div data-testid="consultation-page" className="relative">
      {/* HERO */}
      <section className="pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-8">Free Consultation</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl tracking-tighter leading-[0.95] text-[#F2F0E6] max-w-4xl">
              Let&apos;s discuss<br />
              <span className="italic text-[#C5A059]">your property.</span>
            </h1>
            <p className="mt-10 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-[#A3A095]">
              Share the details below and a senior member of the Medici team
              will be in touch within one business day. No obligation,
              complete discretion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SPLIT — CONTACT + FORM */}
      <section
        className="pb-32 md:pb-40 border-t border-[#262626] pt-16 md:pt-24"
        data-testid="consultation-main"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Contact column */}
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <p className="text-overline mb-6">Direct Contact</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#F2F0E6] leading-snug">
              Prefer to speak<br />directly?
            </h2>
            <p className="mt-6 font-sans text-[#A3A095] leading-relaxed">
              For urgent or sensitive enquiries, you&apos;re welcome to reach us
              by phone or email at your convenience.
            </p>

            <ul className="mt-12 space-y-8">
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-overline mb-2">Telephone</p>
                  <a
                    href={BRAND.phoneHref}
                    className="font-serif text-xl text-[#F2F0E6] hover:text-[#C5A059] transition-colors"
                    data-testid="consultation-phone"
                  >
                    {BRAND.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-overline mb-2">Email</p>
                  <a
                    href={BRAND.emailHref}
                    className="font-serif text-lg text-[#F2F0E6] hover:text-[#C5A059] transition-colors break-all"
                    data-testid="consultation-email"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#C5A059] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-overline mb-2">Service Areas</p>
                  <p className="font-serif text-lg text-[#F2F0E6]">
                    London &amp; Lincolnshire
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.15} className="lg:col-span-8">
            <div className="bg-[#141414] border border-[#262626] p-8 md:p-12">
              <p className="text-overline mb-6">Enquiry Form</p>
              <h3 className="font-serif text-2xl md:text-3xl text-[#F2F0E6] tracking-tight mb-10">
                Tell us about your property.
              </h3>
              <ConsultationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
