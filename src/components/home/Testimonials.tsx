import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="bg-brand-lavender/10 py-20">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from business owners and non-profit leaders who trust Grey Owl."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border-l-4 border-brand-pink bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-brand-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-sm leading-relaxed text-brand-navy/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-brand-navy">
                  {testimonial.name}
                </p>
                <p className="text-xs text-brand-navy/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
