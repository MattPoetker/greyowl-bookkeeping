import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Personal Tax Services",
  description:
    "Personal tax preparation and planning with an education-first approach. We teach you as we file — no jargon, no surprises.",
};

const services = [
  "Individual tax return preparation",
  "Tax planning and strategy",
  "Estimated tax payment guidance",
  "Prior year amendments",
  "Tax education and consultation",
  "IRS correspondence support",
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
      "We'll send you a personalized checklist based on your situation, but generally you'll need W-2s, 1099s, mortgage interest statements, charitable donation receipts, and any other income or deduction documents. Don't worry — we'll guide you through it.",
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
  {
    question: "Do you offer year-round tax planning?",
    answer:
      "We do. Tax preparation is just one part of the picture. We can help you plan estimated payments, time deductions, and make strategic decisions throughout the year.",
  },
];

export default function PersonalTaxPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-yellow/20 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold text-brand-navy sm:text-5xl">
              Personal Tax Services
            </h1>
            <p className="mt-4 text-lg text-brand-navy/70">
              Tax preparation with an education-first approach. We teach you as
              we file — no jargon, no surprises.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="What We Offer"
                subtitle="Comprehensive personal tax services designed around you."
                align="left"
              />
              <ul className="space-y-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 text-brand-navy/80"
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-brand-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education callout */}
            <div className="rounded-2xl bg-brand-lavender/20 p-8">
              <h3 className="font-heading text-2xl font-bold text-brand-navy">
                We Believe in Teaching, Not Just Filing
              </h3>
              <p className="mt-4 leading-relaxed text-brand-navy/70">
                Most tax preparers hand you a form to sign and send you on your
                way. We take a different approach. We walk you through every
                section of your return, explain what each number means, and
                answer every question you have.
              </p>
              <p className="mt-3 leading-relaxed text-brand-navy/70">
                Our goal is for you to leave each session feeling more
                knowledgeable and more confident about your financial picture.
                Because when you understand your taxes, you make better
                decisions all year long.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <Container>
          <SectionHeading
            title="Our Process"
            subtitle="A clear, step-by-step experience from start to finish."
          />
          <div className="mx-auto max-w-3xl space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-sage/30 font-heading text-lg font-bold text-brand-navy">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-brand-lavender/10 py-16">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about our personal tax services."
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-brand-navy">
                  {faq.question}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-brand-navy/40 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-brand-navy/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white">
              Ready to Take the Stress Out of Tax Season?
            </h2>
            <p className="mt-4 text-lg text-brand-lavender">
              Fill out our questionnaire and let&apos;s get started on a
              stress-free tax experience.
            </p>
            <div className="mt-8">
              <Button href="/questionnaire" variant="secondary" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
