import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 24, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ overline, title, subtitle, align = "left" }) => (
  <div
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {overline && <p className="text-overline mb-6">{overline}</p>}
    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-[#F2F0E6]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-6 font-sans text-base sm:text-lg leading-relaxed text-[#A3A095] max-w-2xl">
        {subtitle}
      </p>
    )}
  </div>
);
