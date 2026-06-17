import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { BOROUGHS, SERVICES, BRAND, PILLARS } from "@/data/content";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Reveal, SectionHeading } from "@/components/Primitives";

export default function Borough() {
  const { slug } = useParams();
  const borough = BOROUGHS.find((b) => b.slug === slug);

  if (!borough) {
    return <Navigate to="/" replace />;
  }

  return (
    <div data-testid={`borough-page-${borough.slug}`} className="relative">
      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-end overflow-hidden"
        data-testid="borough-hero"
      >
        <div className="absolute inset-0">
          <img
            src={borough.image}
            alt={borough.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/70 via-[#0C0C0C]/50 to-[#0C0C0C]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-16 md:pb-24 w-full">
          <Reveal>
            <p className="text-overline mb-8">{borough.region}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl tracking-tighter leading-[0.95] text-[#F2F0E6]">
              Luxury renovations<br />
              in <span className="italic text-[#C5A059]">{borough.name}.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-[#A3A095]">
              {borough.blurb}
            </p>
          </Reveal>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section
        className="py-24 md:py-32 border-t border-[#262626]"
        data-testid="borough-context"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5">
            <p className="text-overline mb-4">Local Stock</p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight text-[#F2F0E6]">
              Properties we typically renovate in {borough.name}.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="font-serif text-2xl md:text-3xl text-[#F2F0E6] leading-snug">
              {borough.style}
            </p>
            <p className="mt-8 font-sans text-[#A3A095] leading-relaxed text-base sm:text-lg">
              Our approach in {borough.name} is calibrated to the local rental
              and short-let market. Whether you let nightly, monthly, or
              long-term, we specify materials and design choices that
              respect the architecture and reward the holding period.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES MINI */}
      <section
        className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]"
        data-testid="borough-services"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionHeading
              overline="Two Ways We Help"
              title={`Renovation services for ${borough.name} properties.`}
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  to="/services"
                  className="group block relative h-[420px] overflow-hidden border border-[#262626] hover:border-[#C5A059]/60 transition-colors"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <p className="text-overline mb-3">{s.sub}</p>
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#F2F0E6]">
                      {s.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section
        className="py-24 md:py-32 border-t border-[#262626]"
        data-testid="borough-pillars"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-6">Why Landlords in {borough.name} Choose Medici</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mt-12">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <p className="font-serif text-4xl text-[#C5A059] mb-4">
                  {p.n}
                </p>
                <h4 className="font-serif text-xl md:text-2xl text-[#F2F0E6] tracking-tight mb-3">
                  {p.title}
                </h4>
                <p className="font-sans text-[#A3A095] leading-relaxed">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section
        className="py-24 md:py-32 bg-[#0C0C0C] border-t border-[#262626]"
        data-testid="borough-consultation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-overline mb-6">Free Consultation</p>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight text-[#F2F0E6]">
                Have a property<br />in {borough.name}?
              </h2>
              <p className="mt-6 font-sans text-[#A3A095] leading-relaxed">
                Tell us about it. We&apos;ll respond within one business day
                with availability for a complimentary visit or video
                walkthrough.
              </p>
              <ul className="mt-10 space-y-5">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#C5A059]" />
                  <a
                    href={BRAND.phoneHref}
                    className="font-sans text-[#F2F0E6] hover:text-[#C5A059] transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#C5A059]" />
                  <a
                    href={BRAND.emailHref}
                    className="font-sans text-[#F2F0E6] hover:text-[#C5A059] transition-colors break-all"
                  >
                    {BRAND.email}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="bg-[#141414] border border-[#262626] p-8 md:p-12">
              <ConsultationForm defaultBorough={borough.name} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OTHER AREAS */}
      <section
        className="py-24 md:py-32 border-t border-[#262626]"
        data-testid="borough-other-areas"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <p className="text-overline mb-6">Other Areas We Serve</p>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#F2F0E6] mb-12">
              Across London &amp; Lincolnshire.
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {BOROUGHS.filter((b) => b.slug !== borough.slug).map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.04}>
                <Link
                  to={`/areas/${b.slug}`}
                  className="group block border border-[#262626] hover:border-[#C5A059]/60 p-6 transition-colors"
                  data-testid={`borough-link-${b.slug}`}
                >
                  <p className="font-serif text-xl text-[#F2F0E6] group-hover:text-[#C5A059] transition-colors">
                    {b.name}
                  </p>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#737373] mt-2 inline-flex items-center">
                    {b.region}
                    <ArrowRight
                      size={12}
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    />
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
