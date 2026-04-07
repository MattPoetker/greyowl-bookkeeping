import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lavender opacity-[0.06] blur-[100px]" />

      <Container className="relative">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-navy/[0.06] bg-brand-navy p-12 text-center shadow-[0_20px_60px_rgba(33,32,76,0.15)] sm:p-16">
            {/* Decorative dots */}
            <div className="absolute left-8 top-8 grid grid-cols-3 gap-2 opacity-20">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-brand-sage" />
              ))}
            </div>

            <h2 className="font-heading text-3xl font-800 leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Ready to take bookkeeping
              <br />
              <span className="text-brand-sage">off your plate?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-white/50">
              Fill out our quick questionnaire and let&apos;s find the perfect
              bookkeeping solution for your business.
            </p>
            <div className="mt-10">
              <Button href="/questionnaire" variant="secondary" size="lg">
                Start Your Free Consultation
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
