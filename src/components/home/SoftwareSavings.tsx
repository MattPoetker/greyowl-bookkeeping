import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function SoftwareSavings() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 lg:py-32">
      {/* Organic background shapes */}
      <div className="animate-pulse-soft absolute -left-20 top-0 h-80 w-80 rounded-full bg-brand-sage opacity-[0.06] blur-[80px]" />
      <div className="animate-pulse-soft absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-brand-lavender opacity-[0.06] blur-[60px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              Exclusive Savings
            </span>
            <h2 className="font-heading text-3xl font-800 leading-tight text-white sm:text-4xl lg:text-5xl">
              Save up to{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-yellow">$3,000</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-brand-yellow/10" />
              </span>{" "}
              per year
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/50">
              Stop overpaying for bookkeeping software. Our proprietary tools
              replace expensive subscriptions like QuickBooks — giving you
              everything you need at a fraction of the cost.
            </p>
            <div className="mt-8">
              <Button href="/questionnaire" variant="secondary" size="lg">
                See How Much You&apos;ll Save
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-white/[0.04]" />

              <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
                <div className="text-center">
                  <p className="font-heading text-6xl font-900 text-white sm:text-7xl">
                    $3<span className="text-brand-sage">,</span>000
                  </p>
                  <p className="mt-2 text-sm tracking-wide text-white/40">
                    average annual savings
                  </p>
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <ul className="space-y-4">
                  {[
                    "No expensive subscriptions",
                    "All-in-one solution",
                    "Full support & training included",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[15px] text-white/60"
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-sage/20">
                        <svg
                          className="h-3 w-3 text-brand-sage"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
