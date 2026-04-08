import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Tax Preparation Document Checklist",
  description:
    "Everything you need to gather before your personal tax appointment with Grey Owl Bookkeeping.",
};

const sections = [
  {
    title: "Basic Information",
    color: "bg-brand-lavender/10",
    accent: "border-brand-lavender/30",
    items: [
      "Full legal name",
      "Date of birth",
      "Current address",
      "Social Insurance Number",
      "Phone number and email address",
    ],
  },
  {
    title: "Family Information",
    subtitle: "if applicable",
    color: "bg-brand-pink/8",
    accent: "border-brand-pink/25",
    items: [
      "Spouse's name, SIN, and date of birth",
      "Names and dates of birth of any dependents",
    ],
  },
  {
    title: "Income Slips",
    color: "bg-brand-sage/8",
    accent: "border-brand-sage/25",
    items: [
      "T4 – Employment income",
      "T4A – Pension, contract, or other income",
      "T5 – Investment income",
      "T3 – Trust income",
      "T4RSP or T4RIF",
      "T5008 – Investment sales",
      "Any other tax slips received",
    ],
  },
  {
    title: "Additional Income",
    subtitle: "if applicable",
    color: "bg-brand-yellow/10",
    accent: "border-brand-yellow/30",
    items: [
      "Self-employment or contract income",
      "Rental income",
      "Investment or cryptocurrency trading",
      "Foreign income",
    ],
  },
  {
    title: "Deductions and Credits",
    subtitle: "if applicable",
    color: "bg-brand-lavender/10",
    accent: "border-brand-lavender/30",
    items: [
      "RRSP contribution receipts",
      "Tuition slips (T2202)",
      "Medical expenses",
      "Charitable donation receipts",
      "Childcare expense receipts",
      "Union or professional dues",
      "Moving expenses",
      "Home office expenses (if self-employed)",
    ],
  },
  {
    title: "Other Information",
    color: "bg-brand-pink/8",
    accent: "border-brand-pink/25",
    items: [
      "Your most recent CRA Notice of Assessment",
      "Direct deposit information with CRA (if not already set up)",
      "Details of any major life changes during the year (marriage, separation, new child, moving provinces, etc.)",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-gradient-to-br from-brand-yellow/15 via-brand-eggshell to-brand-lavender-light pb-16 pt-36 sm:pt-44">
        <div className="animate-float-slow absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-sage opacity-[0.08] blur-[70px]" />
        <div
          className="absolute -bottom-1 left-0 right-0 h-16 bg-brand-eggshell"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="animate-entrance mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              Be Prepared
            </span>
            <h1 className="animate-entrance animate-entrance-delay-1 font-heading text-4xl font-800 leading-tight text-brand-navy sm:text-5xl">
              Tax Preparation
              <br />Document Checklist
            </h1>
            <p className="animate-entrance animate-entrance-delay-2 mx-auto mt-5 max-w-lg text-[17px] text-brand-navy/45">
              Gather these documents before your appointment and we&apos;ll
              take care of the rest. Don&apos;t worry if you&apos;re missing
              something — we&apos;ll guide you through it.
            </p>
            <div className="animate-entrance animate-entrance-delay-3 mt-6">
              <a
                href="/images/tax-checklist.pdf"
                download="Grey-Owl-Tax-Checklist.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download as PDF
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Checklist */}
      <section className="bg-brand-eggshell py-20">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
                <div
                  className={`rounded-2xl border ${section.accent} ${section.color} p-7`}
                >
                  <h2 className="font-heading text-xl font-700 text-brand-navy">
                    {section.title}
                    {section.subtitle && (
                      <span className="ml-2 text-sm font-400 text-brand-navy/35">
                        ({section.subtitle})
                      </span>
                    )}
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] text-brand-navy/60"
                      >
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-brand-navy/10 bg-white">
                          <span className="h-2 w-2 rounded-sm" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
