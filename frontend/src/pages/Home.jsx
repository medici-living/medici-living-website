import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BRAND, SERVICES, PILLARS, PROCESS } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/Primitives";

const HERO_IMG =
  "https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzgxNzA2NTA2fDA&ixlib=rb-4.1.0&q=85";

const PHILOSOPHY_IMG =
  "https://images.pexels.com/photos/20418771/pexels-photo-20418771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Home() {
  return (
    <div data-testid="home-page" className="relative">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        data-testid="hero-section"
      >
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/70 via-[#0C0C0C]/40 to-[#0C0C0C]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 md:pb-32 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-overline mb-8"
          >
            London &nbsp;·&nbsp; Lincolnshire
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-[10rem] tracking-tighter leading-[0.95] text-[#F2F0E6] max-w-5xl"
          >
            Considered<br />
            renovations<br />
            <span className="italic text-[#C5A059]">for rental yield.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-[#A3A095]"
          >
            {BRAND.name} delivers temporary and permanent renovations for
            rental flats and Airbnbs — engineered to elevate guest experience,
            command higher rates, and protect long-term capital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              to="/consultation"
              data-testid="hero-consultation-btn"
              className="group inline-flex items-center bg-[#C5A059] text-[#0C0C0C] hover:bg-[#A88B4B] px-10 py-5 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 rounded-sm"
            >
              Book a Free Consultation
              <ArrowRight
                size={16}
                className="ml-3 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/portfolio"
              data-testid="hero-portfolio-btn"
              className="inline-flex items-center border border-[#C5A059]/60 text-[#F2F0E6] hover:bg-[#C5A059] hover:text-[#0C0C0C] px-10 py-5 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 rounded-sm"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY / INTRO */}
      <section className="py-24 md:py-40 relative z-10" data-testid="philosophy-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          <Reveal className="md:col-span-7">
            <p className="text-overline mb-6">Our Philosophy</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl tracking-tight leading-[1.05] text-[#F2F0E6]">
              We build interiors that pay rent —{" "}
              <span className="italic text-[#C5A059]">handsomely.</span>
            </h2>
            <p className="mt-10 font-sans text-base sm:text-lg leading-relaxed text-[#A3A095] max-w-xl">
              Every Medici project begins with one question: what will this
              property earn after we leave? We then specify materials,
              furniture, and finishes that compound that figure — visit after
              visit, season after season.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={PHILOSOPHY_IMG}
                alt="Refined living space"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-24 md:py-32 bg-[#0C0C0C]" data-testid="services-teaser">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionHeading
              overline="Two Disciplines"
              title="Temporary staging. Permanent reinvention."
              subtitle="Whichever you need, we deliver with the same eye — hotel-grade finishes, intelligent specification, and a respect for your turnover calendar."
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  to="/services"
                  className="group block relative h-[480px] overflow-hidden border border-[#262626] hover:border-[#C5A059]/60 transition-colors"
                  data-testid={`service-card-${s.slug}`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                    <p className="text-overline mb-4">{s.sub}</p>
                    <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-[#F2F0E6] leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-6 font-sans text-sm text-[#A3A095] max-w-md">
                      {s.description}
                    </p>
                    <div className="mt-8 inline-flex items-center text-[#C5A059] font-sans text-xs uppercase tracking-[0.2em]">
                      Explore
                      <ArrowUpRight
                        size={16}
                        className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MEDICI PILLARS */}
      <section
        className="py-24 md:py-32 border-t border-[#262626]"
        data-testid="pillars-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-6">Why Medici</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mt-12">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <p className="font-serif text-5xl text-[#C5A059] mb-6">
                  {p.n}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#F2F0E6] mb-4">
                  {p.title}
                </h3>
                <p className="font-sans text-[#A3A095] leading-relaxed">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS PULL QUOTE */}
      <section
        className="py-24 md:py-40 border-t border-[#262626]"
        data-testid="partnerships-feature"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-10">Partnerships</p>
            <blockquote className="font-serif italic text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#F2F0E6]">
              &ldquo;Medici Living is currently accepting its first referral
              partnerships with Lincolnshire letting agents. Get in touch to
              discuss how we can add value to your landlord portfolio.&rdquo;
            </blockquote>
            <Link
              to="/consultation"
              data-testid="home-partnerships-cta"
              className="group inline-flex items-center mt-12 text-[#C5A059] hover:text-[#A88B4B] font-sans text-xs uppercase tracking-[0.2em] underline underline-offset-4"
            >
              Discuss a partnership
              <ArrowRight
                size={14}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]"
        data-testid="process-section"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionHeading
              overline="The Process"
              title="From first conversation to final keys."
              subtitle="Four phases. One point of contact. Zero guesswork."
            />
          </Reveal>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="border-t border-[#C5A059] pt-6">
                  <p className="font-serif text-3xl text-[#C5A059] mb-3">
                    {p.n}
                  </p>
                  <h4 className="font-serif text-xl md:text-2xl text-[#F2F0E6] tracking-tight mb-3">
                    {p.title}
                  </h4>
                  <p className="font-sans text-sm text-[#A3A095] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 border-t border-[#262626]" data-testid="final-cta">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="bg-[#141414] border border-[#262626] p-12 md:p-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-8">
                <p className="text-overline mb-6">Free Consultation</p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#F2F0E6]">
                  Let&apos;s look at your property together.
                </h2>
                <p className="mt-6 font-sans text-[#A3A095] leading-relaxed max-w-xl">
                  No fee, no pressure — a frank conversation about positioning,
                  scope, and what your property could earn after Medici.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/consultation"
                  data-testid="final-cta-btn"
                  className="group inline-flex items-center bg-[#C5A059] text-[#0C0C0C] hover:bg-[#A88B4B] px-10 py-5 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 rounded-sm"
                >
                  Book Consultation
                  <ArrowRight
                    size={16}
                    className="ml-3 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
