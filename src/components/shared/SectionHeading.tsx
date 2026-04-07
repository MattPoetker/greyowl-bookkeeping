import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
  tag,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  tag?: string;
}) {
  return (
    <ScrollReveal
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {tag && (
        <span
          className={`mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-brand-sage" : "text-brand-sage"}`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-700 leading-tight sm:text-4xl lg:text-[2.75rem] ${light ? "text-white" : "text-brand-navy"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-[17px] leading-relaxed ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-brand-navy/60"}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
