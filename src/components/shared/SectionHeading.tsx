export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2
        className={`font-heading text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-brand-navy"}`}
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 rounded-full bg-brand-sage ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${align === "center" ? "mx-auto" : ""} ${light ? "text-brand-lavender" : "text-brand-navy/70"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
