import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Personal Tax Services",
  description:
    "Personal tax preparation and planning with an education-first approach. We teach you as we file — no jargon, no surprises.",
};

const services = [
  "Personal tax return preparation",
  "Tax planning and strategy for individuals and families",
  "Prior-year return reviews and amendments (T1 adjustments)",
  "Support with CRA inquiries and correspondence",
  "Tax education and consultation for understanding your personal return",
];

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start with a conversation about your situation, goals, and any concerns. No jargon — just plain talk.",
  },
  {
    number: "02",
    title: "Document Gathering",
    description:
      "We'll give you a clear checklist and help you organize everything. No more scrambling at tax time.",
  },
  {
    number: "03",
    title: "Preparation",
    description:
      "We prepare your return with care, maximizing deductions and ensuring accuracy every step of the way.",
  },
  {
    number: "04",
    title: "Review Together",
    description:
      "We walk through your return with you, explaining each section so you understand exactly what you're filing.",
  },
  {
    number: "05",
    title: "Filing",
    description:
      "Once you're confident and comfortable, we file your return and keep copies organized for your records.",
  },
];

const faqs = [
  {
    question: "What documents do I need to bring?",
    answer:
      "We've put together a comprehensive checklist covering everything from T4s and T5s to RRSP receipts and medical expenses. You can download it below — and don't worry, we'll walk you through it if anything is unclear.",
    hasChecklist: true,
  },
  {
    question: "How much does personal tax preparation cost?",
    answer:
      "Our pricing depends on the complexity of your return. We'll always give you a clear estimate upfront before any work begins. No hidden fees, no surprises.",
  },
  {
    question: "Can you help if I'm behind on filing?",
    answer:
      "Absolutely. We regularly help clients who are behind on their taxes. We'll work through prior years methodically and help you get caught up without judgment.",
  },
  {
    question: "Will you teach me about my taxes?",
    answer:
      "Yes! Education is at the core of what we do. We'll walk you through your return, explain deductions and credits, and help you understand how to make better financial decisions going forward.",
  },
];

export default function PersonalTaxPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-gradient-to-br from-brand-yellow/20 via-brand-eggshell to-brand-lavender-light pb-24 pt-40 sm:pt-48">
        <div className="animate-float-slow absolute -left-20 top-20 h-80 w-80 rounded-full bg-brand-yellow opacity-[0.12] blur-[80px]" />
        <div
          className="absolute -bottom-1 left-0 right-0 h-20 bg-brand-eggshell"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-entrance mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              For Individuals
            </span>
            <h1 className="animate-entrance animate-entrance-delay-1 font-heading text-4xl font-800 leading-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Personal Tax Services
            </h1>
            <p className="animate-entrance animate-entrance-delay-2 mx-auto mt-5 max-w-lg text-lg text-brand-navy/45">
              Tax preparation with an education-first approach. We teach you as
              we file — no jargon, no surprises.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="bg-brand-eggshell py-24">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <SectionHeading
                tag="Services"
                title="What we offer"
                subtitle="Comprehensive personal tax services designed around you."
                align="left"
              />
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-[15px] text-brand-navy/60">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-sage/15">
                      <svg className="h-3.5 w-3.5 text-brand-navy/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl border border-brand-lavender/15" />
                <div className="relative rounded-2xl border border-brand-navy/[0.04] bg-white p-8 shadow-[0_4px_24px_rgba(212,194,239,0.08)] sm:p-10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lavender/15">
                    <svg className="h-6 w-6 text-brand-navy/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-700 text-brand-navy">
                    We believe in teaching,
                    <br />not just filing
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/50">
                    Most tax preparers hand you a form to sign and send you on your
                    way. We take a different approach. We walk you through every
                    section of your return, explain what each number means, and
                    answer every question you have.
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/50">
                    Our goal is for you to leave each session feeling more
                    knowledgeable and more confident about your financial picture.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            tag="How It Works"
            title="A clear path from start to finish"
            subtitle="No mysteries, no confusion. Here's exactly what to expect."
          />
          <div className="mx-auto max-w-2xl">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
                <div className="group relative flex gap-6 pb-10 last:pb-0">
                  {i < steps.length - 1 && (
                    <div className="absolute left-[23px] top-14 h-[calc(100%-44px)] w-px bg-gradient-to-b from-brand-lavender/30 to-brand-lavender/5" />
                  )}
                  <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-brand-lavender/20 bg-brand-lavender/10 font-heading text-sm font-700 text-brand-navy transition-all duration-300 group-hover:bg-brand-lavender/20 group-hover:shadow-[0_4px_16px_rgba(212,194,239,0.2)]">
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading text-lg font-700 text-brand-navy">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-brand-navy/50">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-brand-eggshell py-24">
        <Container>
          <SectionHeading
            tag="FAQ"
            title="Common questions, clear answers"
            subtitle="Everything you want to know about our personal tax services."
          />
          <div className="mx-auto max-w-2xl space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <details className="group rounded-2xl border border-brand-lavender/20 bg-white transition-shadow duration-300 open:shadow-[0_4px_20px_rgba(212,194,239,0.1)]">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-heading text-[15px] font-600 text-brand-navy">
                    {faq.question}
                    <span className="ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-brand-navy/10 transition-all duration-300 group-open:rotate-45 group-open:bg-brand-navy group-open:text-white">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-brand-lavender/10 px-6 pb-6 pt-4">
                    <p className="text-[15px] leading-relaxed text-brand-navy/50">
                      {faq.answer}
                    </p>
                    {faq.hasChecklist && (
                      <a
                        href="/images/tax-checklist.pdf"
                        download="Grey-Owl-Tax-Checklist.pdf"
                        className="mt-4 inline-flex items-center gap-2 rounded-xl border border-brand-sage/20 bg-brand-sage/8 px-5 py-2.5 text-sm font-semibold text-brand-navy transition-all duration-300 hover:bg-brand-sage/15"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Download Tax Checklist (PDF)
                      </a>
                    )}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>

          {/* Tax intake CTA */}
          <ScrollReveal>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-brand-pink/20 bg-brand-pink-light/30 p-8 text-center">
              <h3 className="font-heading text-xl font-700 text-brand-navy">
                Ready to file your personal taxes?
              </h3>
              <p className="mt-2 text-[15px] text-brand-navy/45">
                Fill out our quick intake form and we&apos;ll get you started.
              </p>
              <div className="mt-5">
                <Button href="/personal-tax/intake" size="md">
                  Start Tax Intake Form
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-eggshell py-24">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-yellow opacity-[0.08] blur-[80px]" />
        <Container className="relative">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl rounded-3xl border border-brand-lavender/25 bg-gradient-to-br from-brand-yellow/10 via-brand-eggshell to-brand-lavender-light p-12 text-center shadow-[0_20px_60px_rgba(212,194,239,0.12)] sm:p-16">
              <h2 className="font-heading text-3xl font-800 text-brand-navy sm:text-4xl">
                Ready to take the stress
                <br />
                <span className="text-brand-navy/55">out of tax season?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[17px] text-brand-navy/45">
                Fill out our questionnaire and let&apos;s get started on a
                stress-free tax experience.
              </p>
              <div className="mt-8">
                <Button href="/personal-tax/intake" size="lg">
                  Get Started
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
