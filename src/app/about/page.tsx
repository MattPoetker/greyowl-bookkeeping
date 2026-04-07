import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

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
    color: "bg-brand-lavender/20",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Technology-Forward",
    description:
      "We leverage modern tools and our proprietary software to streamline your processes — saving you time and up to $3,000/year.",
    color: "bg-brand-sage/20",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: "Personal Touch",
    description:
      "You're never just a number. We take the time to understand your unique situation and tailor our approach to your needs.",
    color: "bg-brand-pink/20",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. We'll always be upfront about costs so you can plan with confidence.",
    color: "bg-brand-yellow/20",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
      <section className="bg-brand-lavender/20 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-brand-navy sm:text-5xl">
              About Grey Owl Bookkeeping
            </h1>
            <p className="mt-4 text-lg text-brand-navy/70">
              Wisdom, guidance, and clarity for your finances.
            </p>
          </div>
        </Container>
      </section>

      {/* Heather's Story */}
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-80 w-80 items-center justify-center rounded-2xl bg-brand-lavender/30">
                <svg className="h-24 w-24 text-brand-navy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-navy">
                Meet Heather
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-brand-sage" />
              <div className="mt-6 space-y-4 text-brand-navy/80 leading-relaxed">
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
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            title="Our Approach"
            subtitle="Every decision we make is guided by these core principles."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className={`rounded-2xl ${value.color} p-6`}
              >
                <div className="mb-3 text-brand-navy">{value.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-brand-navy">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-navy/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white">
              Ready to Work Together?
            </h2>
            <p className="mt-4 text-lg text-brand-lavender">
              Let&apos;s start with a conversation about your business and how
              we can help.
            </p>
            <div className="mt-8">
              <Button href="/questionnaire" variant="secondary" size="lg">
                Fill Out Our Questionnaire
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
