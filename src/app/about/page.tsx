import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "About Heather",
  description:
    "Meet Heather, the founder of Grey Owl Bookkeeping. Education-first bookkeeping for small businesses and non-profits.",
};

const values = [
  {
    title: "Education-First",
    description:
      "We believe you should understand your numbers, not just hand them off. Every interaction is a learning opportunity.",
    bg: "bg-brand-lavender/10",
    accent: "bg-brand-lavender/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Technology-Forward",
    description:
      "We leverage modern tools and our proprietary software to streamline your processes — saving you time and up to $3,000/year.",
    bg: "bg-brand-sage/8",
    accent: "bg-brand-sage/15",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: "Personal Touch",
    description:
      "You're never just a number. We take the time to understand your unique situation and tailor our approach to your needs.",
    bg: "bg-brand-pink/8",
    accent: "bg-brand-pink/15",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. We'll always be upfront about costs so you can plan with confidence.",
    bg: "bg-brand-yellow/10",
    accent: "bg-brand-yellow/20",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-brand-navy pb-24 pt-40 sm:pt-48">
        <div className="animate-float-slow absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-lavender opacity-[0.06] blur-[80px]" />
        <div
          className="absolute -bottom-1 left-0 right-0 h-20 bg-brand-cream"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-entrance mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              Our Story
            </span>
            <h1 className="animate-entrance animate-entrance-delay-1 font-heading text-4xl font-800 leading-tight text-white sm:text-5xl lg:text-6xl">
              About Grey Owl
            </h1>
            <p className="animate-entrance animate-entrance-delay-2 mx-auto mt-5 max-w-lg text-lg text-white/50">
              Wisdom, guidance, and clarity for your finances.
            </p>
          </div>
        </Container>
      </section>

      {/* Heather's Story */}
      <section className="bg-brand-cream py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Photo placeholder */}
            <ScrollReveal>
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-4 rounded-3xl border border-brand-sage/20" />
                <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-brand-sage/10" />
                <div className="relative flex aspect-[4/5] items-center justify-center rounded-2xl bg-brand-lavender/15">
                  <svg
                    className="h-20 w-20 text-brand-navy/15"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
              </div>
            </ScrollReveal>

            {/* Bio */}
            <ScrollReveal delay={1}>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
                Meet the Founder
              </span>
              <h2 className="font-heading text-3xl font-800 text-brand-navy sm:text-4xl">
                Meet Heather
              </h2>
              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-brand-navy/60">
                <p>
                  Heather founded Grey Owl Bookkeeping with a simple mission: to
                  help small business owners and non-profit leaders take control
                  of their finances without the stress and confusion.
                </p>
                <p>
                  With years of experience working with organizations of all
                  sizes, Heather noticed a pattern — business owners weren&apos;t
                  just looking for someone to &ldquo;do the books.&rdquo; They
                  wanted to understand their numbers, feel confident in their
                  financial decisions, and have a trusted partner by their side.
                </p>
                <p>
                  That&apos;s exactly what Grey Owl delivers. Named after the owl —
                  a symbol of wisdom and guidance — this practice is built on the
                  belief that knowledge is power, especially when it comes to
                  your money.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            tag="How We Work"
            title="Our approach to your finances"
            subtitle="Every decision we make is guided by these core principles."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div
                  className={`group rounded-2xl ${value.bg} border border-brand-navy/[0.04] p-8 transition-all duration-500 hover:shadow-[0_4px_24px_rgba(33,32,76,0.06)]`}
                >
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${value.accent} text-brand-navy transition-transform duration-300 group-hover:scale-110`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-700 text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-brand-navy/55">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-cream py-24">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lavender opacity-[0.06] blur-[80px]" />
        <Container className="relative">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-brand-navy/[0.06] bg-brand-navy p-12 text-center shadow-[0_20px_60px_rgba(33,32,76,0.15)] sm:p-16">
              <h2 className="font-heading text-3xl font-800 text-white sm:text-4xl">
                Ready to work together?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[17px] text-white/50">
                Let&apos;s start with a conversation about your business and how
                we can help.
              </p>
              <div className="mt-8">
                <Button href="/questionnaire" variant="secondary" size="lg">
                  Fill Out Our Questionnaire
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
