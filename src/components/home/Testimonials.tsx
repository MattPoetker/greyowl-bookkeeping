import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="relative bg-brand-cream py-24 lg:py-32">
      {/* Decorative blob */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-pink opacity-[0.06] blur-[80px]" />

      <Container className="relative">
        <SectionHeading
          tag="Social Proof"
          title="Trusted by business owners who get it"
          subtitle="Don't just take our word for it — hear from real business owners and non-profit leaders."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
              <div className="group relative h-full rounded-2xl border border-brand-navy/[0.06] bg-white p-8 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(33,32,76,0.06)]">
                {/* Quote mark */}
                <div className="quote-mark relative">
                  {/* Stars */}
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <svg
                        key={j}
                        className="h-4 w-4 text-brand-yellow"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-[15px] leading-relaxed text-brand-navy/70">
                    {testimonial.quote}
                  </blockquote>
                </div>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-brand-navy/[0.06] pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-lavender/20 font-heading text-sm font-700 text-brand-navy">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-600 text-brand-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-brand-navy/40">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
