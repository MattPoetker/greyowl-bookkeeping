import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function SoftwareSavings() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Decorative blobs */}
      <div className="animate-pulse-soft absolute -left-20 top-0 h-80 w-80 rounded-full bg-brand-sage opacity-[0.08] blur-[80px]" />
      <div className="animate-pulse-soft absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-brand-lavender opacity-[0.1] blur-[60px]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <ScrollReveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              QuickBooks Pro Advisor
            </span>
            <h2 className="font-heading text-3xl font-800 leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Save on{" "}
              <span className="relative inline-block">
                <span className="relative z-10">QuickBooks</span>
                <span className="absolute -bottom-1 left-0 right-0 h-3 rounded-full bg-brand-sage/15" />
              </span>{" "}
              with our discounts
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-brand-navy/50">
              As a certified QuickBooks Pro Advisor, we can offer our clients
              discounted software subscriptions — saving you money on the tools
              you already need. Plus, we&apos;ll set everything up and train you
              so you get the most out of it.
            </p>
            <div className="mt-8">
              <Button href="/questionnaire" size="lg">
                Learn How We Can Help
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-brand-sage/10" />

              <div className="relative rounded-2xl border border-brand-navy/[0.06] bg-brand-eggshell p-8 sm:p-10">
                <div className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-sage/15">
                    <svg className="h-7 w-7 text-brand-navy/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-navy/35">
                    Certified Pro Advisor
                  </p>
                </div>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-brand-navy/[0.06] to-transparent" />

                <ul className="space-y-4">
                  {[
                    "Discounted QuickBooks subscriptions",
                    "Full setup and configuration",
                    "Training so you feel confident",
                    "Ongoing support included",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[15px] text-brand-navy/60"
                    >
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-sage/15">
                        <svg className="h-3 w-3 text-brand-navy/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
