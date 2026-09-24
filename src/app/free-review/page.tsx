import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal from "@/components/shared/ScrollReveal";
import InboxPreview from "@/components/review/InboxPreview";
import OfferName from "@/components/review/OfferName";
import ReportPreview from "@/components/review/ReportPreview";
import ReviewIcon, { type IconName } from "@/components/review/ReviewIcon";
import ReviewRequestForm from "@/components/review/ReviewRequestForm";
import { TONES, type Tone } from "@/components/review/tones";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FREE Bookkeeping Review",
  description:
    "Get a FREE Bookkeeping Review from Heather Klassen: a one-page report on what's working, what needs attention, any red flags, and the three fixes to make first. No cost, no sales call.",
  openGraph: {
    title: "FREE Bookkeeping Review | Grey Owl Bookkeeping",
    description:
      "Are your books actually right? Find out in one page. A free 30-minute review of your books and a plain-English report with your three next steps.",
    images: [
      {
        url: "/images/heather-headshot.jpeg",
        width: 800,
        height: 1000,
        alt: "Heather Klassen, founder of Grey Owl Bookkeeping",
      },
    ],
  },
};

const promises: { icon: IconName; label: string }[] = [
  { icon: "gift", label: "No cost" },
  { icon: "shield", label: "No obligation" },
  { icon: "phoneOff", label: "No sales call" },
];

const benefits: { tone: Tone; body: React.ReactNode }[] = [
  {
    tone: "good",
    body: (
      <>
        The parts of your books that are solid, so you know what to{" "}
        <em>leave alone</em>.
      </>
    ),
  },
  {
    tone: "attention",
    body: (
      <>
        Small issues to tidy up <em>before</em> they turn into big ones.
      </>
    ),
  },
  {
    tone: "flag",
    body: "The things that could cost you with CRA, your bank, or your board.",
  },
  {
    tone: "fix",
    body: (
      <>
        Not a 40-item to-do list. The three things to do <em>right now</em>,
        in order.
      </>
    ),
  },
];

const quotes = [
  {
    ...TESTIMONIALS[0],
    excerpt:
      "Heather is responsive, knowledgeable, and always willing to explain things in simple terms.",
  },
  {
    ...TESTIMONIALS[1],
    excerpt:
      "If you're looking for a bookkeeper who really understands the numbers and cares about her clients, I highly recommend Heather.",
  },
];

const credentials: { icon: IconName; label: string }[] = [
  { icon: "clock", label: "10+ years of experience" },
  { icon: "shield", label: "QuickBooks Pro Advisor" },
  { icon: "users", label: "Small businesses & non-profits" },
];

const painPoints: { quote: string; icon: IconName; bg: string; tilt: string }[] = [
  {
    quote: "I think my books are right… I hope?",
    icon: "question",
    bg: "bg-brand-lavender-light",
    tilt: "-rotate-1",
  },
  {
    quote: "I haven't reconciled the bank since spring.",
    icon: "bank",
    bg: "bg-brand-yellow-light",
    tilt: "rotate-1",
  },
  {
    quote: "Tax time is a scramble. Every. Single. Year.",
    icon: "calendar",
    bg: "bg-brand-pink-light",
    tilt: "-rotate-[0.5deg]",
  },
  {
    quote: "Did we actually remit GST/HST last quarter?",
    icon: "receipt",
    bg: "bg-brand-coral-light",
    tilt: "rotate-[0.5deg]",
  },
  {
    quote: "The board asked a question I couldn't answer.",
    icon: "users",
    bg: "bg-brand-sage-light",
    tilt: "-rotate-1",
  },
  {
    quote: "I'm making decisions on gut feel, not numbers.",
    icon: "scale",
    bg: "bg-brand-lavender-light",
    tilt: "rotate-1",
  },
];

// Handwritten notes beside the sample report, positioned next to the section they describe.
const marginNotes: { tone: Tone; text: string; side: "left" | "right"; top: string }[] = [
  { tone: "good", text: "Credit where it's due", side: "left", top: "top-[14%]" },
  { tone: "attention", text: "Small now. Big later.", side: "right", top: "top-[34%]" },
  { tone: "flag", text: "Caught before tax time", side: "left", top: "top-[54%]" },
  { tone: "fix", text: "Just three. In order.", side: "right", top: "top-[72%]" },
];

const steps: { icon: IconName; tag: string; title: string; body: string; bg: string }[] = [
  {
    icon: "pencil",
    tag: "2 minutes",
    title: "Tell us about your business",
    body: "A short form: who you are, where you keep your books, and what's keeping you up at night.",
    bg: "bg-brand-lavender/30",
  },
  {
    icon: "search",
    tag: "30 minutes",
    title: "Heather takes a look",
    body: "Heather reviews your books with read-only access. Nothing gets changed, nothing gets moved.",
    bg: "bg-brand-pink/30",
  },
  {
    icon: "inbox",
    tag: "1 page",
    title: "Your report lands in your inbox",
    body: "What's working, what's not, the red flags, and your three next steps. All in plain English.",
    bg: "bg-brand-sage/30",
  },
];

const checks: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "bank",
    title: "Bank & credit card reconciliations",
    body: "Do your books actually match what's in the bank?",
  },
  {
    icon: "question",
    title: "Uncategorized transactions",
    body: "The “I'll deal with it later” pile, and how big it's gotten.",
  },
  {
    icon: "receipt",
    title: "GST/HST",
    body: "What you've collected versus what's been filed and remitted.",
  },
  {
    icon: "users",
    title: "Payroll remittances",
    body: "Source deductions sent to CRA on time and in full.",
  },
  {
    icon: "banknotes",
    title: "Unpaid invoices",
    body: "Who owes you money, and how long they've owed it.",
  },
  {
    icon: "document",
    title: "Bills & payables",
    body: "What you owe, and whether anything is slipping.",
  },
  {
    icon: "transfer",
    title: "Personal vs. business",
    body: "Personal spending mixed in where it shouldn't be.",
  },
  {
    icon: "calendar",
    title: "Year-end readiness",
    body: "Whether your accountant gets clean books, or sends a cleanup bill.",
  },
];

const nextSteps = [
  "Send the form",
  "Heather emails you how to share your books",
  "Your one-page report arrives",
];

const faqs = [
  {
    question: "Is it really free?",
    answer:
      "Yes. No cost, no credit card, no catch. It's the easiest way for you to see how Heather works, and for her to see whether Grey Owl is a good fit for your business.",
  },
  {
    question: "What do I need to share?",
    answer:
      "Nothing yet. After you send your request, Heather will email you simple instructions. Usually that's read-only access to your bookkeeping software, or a few standard reports like your profit & loss, balance sheet, and recent bank statements.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Yes. Your information is kept confidential and used only to prepare your review. Read-only access means nothing in your books gets changed.",
  },
  {
    question: "My books are a mess. Should I still ask?",
    answer:
      "Especially then. There's no judgment here. Messy books are exactly what this review is for, and the messier things are, the more useful your three fixes will be.",
  },
  {
    question: "Will you try to sell me something?",
    answer:
      "Your report ends with one short note: if you'd rather not tackle the fixes yourself, Grey Owl can take them off your plate. That's it. No sales call, no pushy follow-ups.",
  },
];

function CtaButton({ size = "xl" }: { size?: "lg" | "xl" }) {
  return (
    <Button href="#request" size={size}>
      Find My Red Flags
      <ReviewIcon name="arrowRight" className="ml-2 h-5 w-5" strokeWidth={2} />
    </Button>
  );
}

export default function FreeReviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative -mt-[72px] overflow-hidden bg-gradient-to-b from-brand-lavender-light via-brand-pink-light/60 to-brand-eggshell pt-36 sm:pt-44">
        <div className="animate-float-slow absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-brand-pink opacity-[0.18] blur-[100px]" />
        <div className="animate-float-slower absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-lavender opacity-[0.25] blur-[90px]" />
        <div className="animate-float absolute bottom-20 right-1/4 h-[260px] w-[260px] rounded-full bg-brand-yellow opacity-[0.25] blur-[70px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(33,32,76,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-entrance">
              <OfferName className="text-2xl sm:text-3xl lg:text-4xl" />
            </div>

            <h1 className="animate-entrance animate-entrance-delay-1 mt-8 font-heading text-[2.75rem] font-800 leading-[1.05] tracking-tight text-balance text-brand-navy sm:text-6xl lg:text-7xl">
              Are your books{" "}
              <span className="relative inline-block italic text-brand-coral-dark">
                actually right?
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 7 Q50 0 100 4 Q150 8 200 2" stroke="#c8ce8e" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
                </svg>
              </span>
            </h1>

            <p className="animate-entrance animate-entrance-delay-2 mt-7 font-heading text-xl italic text-brand-navy/60 sm:text-2xl">
              Find out in one page, in plain English.
            </p>

            <div className="animate-entrance animate-entrance-delay-3 mt-10">
              <CtaButton />
            </div>

            <ul className="animate-entrance animate-entrance-delay-4 mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {promises.map((promise) => (
                <li key={promise.label} className="flex items-center gap-2 text-sm font-medium text-brand-navy/55">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-brand-navy/60 shadow-[0_2px_8px_rgba(212,194,239,0.3)]">
                    <ReviewIcon name={promise.icon} className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  {promise.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl items-end gap-12 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* Heather, anchored to the bottom of the hero */}
            <div className="animate-entrance animate-entrance-delay-4 relative order-2 mx-auto w-full max-w-[22rem] lg:order-1 lg:max-w-[26rem]">
              <div className="overflow-hidden rounded-t-[13rem] border-x-[10px] border-t-[10px] border-white/70 bg-brand-lavender/30 shadow-[0_-12px_60px_rgba(212,194,239,0.45)]">
                <Image
                  src="/images/heather-headshot.jpeg"
                  alt="Heather Klassen, founder of Grey Owl Bookkeeping"
                  width={400}
                  height={500}
                  priority
                  className="aspect-[4/5] w-full object-cover object-top lg:aspect-[7/10]"
                />
              </div>

              <div className="animate-float absolute -right-2 top-24 rounded-2xl border border-brand-sage/30 bg-white px-4 py-3 shadow-[0_8px_32px_rgba(200,206,142,0.3)] sm:-right-10">
                <p className="font-heading text-2xl font-800 leading-none text-brand-navy">10+</p>
                <p className="mt-1 text-[11px] font-medium text-brand-navy/45">years of experience</p>
              </div>
              <div className="animate-float-slow absolute -left-2 bottom-24 flex items-center gap-2 rounded-2xl border border-brand-lavender/30 bg-white px-4 py-3 shadow-[0_8px_32px_rgba(212,194,239,0.35)] sm:-left-12">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-sage/20">
                  <ReviewIcon name="shield" className="h-4 w-4 text-brand-navy/60" />
                </span>
                <div className="text-left">
                  <p className="text-xs font-semibold text-brand-navy">QuickBooks</p>
                  <p className="text-[11px] text-brand-navy/45">Pro Advisor</p>
                </div>
              </div>
            </div>

            {/* What you'll get */}
            <div className="animate-entrance animate-entrance-delay-3 order-1 self-center lg:order-2 lg:pb-16">
              <div className="overflow-hidden rounded-3xl border border-brand-lavender/30 bg-white shadow-[0_24px_60px_rgba(33,32,76,0.1)]">
                <p className="bg-brand-lavender-light px-7 py-4 text-center font-heading text-lg font-700 text-brand-navy">
                  What you&apos;ll get in your FREE Bookkeeping Review:
                </p>
                <div className="p-7 sm:p-8">
                  <p className="text-[15px] leading-relaxed text-brand-navy/55">
                    Heather spends 30 focused minutes in your books, then emails
                    you one page covering:
                  </p>
                  <ul className="mt-6 space-y-5">
                    {benefits.map((benefit) => {
                      const tone = TONES[benefit.tone];
                      return (
                        <li key={benefit.tone} className="flex gap-4">
                          <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${tone.chip} ${tone.iconColor}`}>
                            <ReviewIcon name={tone.icon} className="h-5 w-5" strokeWidth={1.8} />
                          </span>
                          <div>
                            <p className="font-heading text-lg font-700 leading-tight text-brand-navy">
                              {tone.label}
                            </p>
                            <p className="mt-1 text-[15px] leading-relaxed text-brand-navy/60">
                              {benefit.body}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex items-center justify-center gap-3 border-t border-dashed border-brand-navy/10 px-7 py-4">
                  <Image src="/images/owl-logo.svg" alt="" width={26} height={26} />
                  <p className="text-xs text-brand-navy/50">
                    Reviewed personally by{" "}
                    <span className="font-semibold text-brand-navy/70">Heather Klassen</span>,
                    not a checklist app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust band */}
      <section className="relative overflow-hidden bg-brand-lavender py-20 lg:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-pink opacity-[0.35] blur-[90px]" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white opacity-[0.3] blur-[90px]" />

        <Container className="relative">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-brand-navy/60">
            What clients say about Heather
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
            {quotes.map((quote, i) => (
              <ScrollReveal key={quote.name} delay={i + 1}>
                <figure className="h-full rounded-2xl border border-white/60 bg-white/70 p-7 backdrop-blur-sm">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: quote.rating }).map((_, j) => (
                      <svg key={j} className="h-4 w-4 text-brand-yellow-deep" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="font-heading text-xl italic leading-snug text-brand-navy">
                    &ldquo;{quote.excerpt}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-semibold text-brand-navy">{quote.name}</span>
                    <span className="text-brand-navy/50"> &middot; {quote.role}</span>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>

          <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {credentials.map((credential) => (
              <li key={credential.label} className="flex items-center gap-2.5 text-sm font-semibold text-brand-navy/75">
                <ReviewIcon name={credential.icon} className="h-5 w-5 text-brand-navy/55" />
                {credential.label}
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <CtaButton />
          </div>
        </Container>
      </section>

      {/* Sound familiar? */}
      <section className="bg-brand-eggshell py-24 lg:py-32">
        <Container>
          <SectionHeading
            tag="Sound Familiar?"
            title="The thoughts that keep owners up at night"
            subtitle="Almost every business owner we meet has said at least one of these out loud."
          />

          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((pain, i) => (
              <ScrollReveal key={pain.quote} delay={(i % 3) + 1}>
                <figure
                  className={`relative h-full rounded-3xl p-7 transition-transform duration-500 hover:rotate-0 ${pain.bg} ${pain.tilt}`}
                >
                  <ReviewIcon name={pain.icon} className="mb-4 h-6 w-6 text-brand-navy/35" />
                  <blockquote className="font-heading text-xl font-500 italic leading-snug text-brand-navy">
                    &ldquo;{pain.quote}&rdquo;
                  </blockquote>
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-10 h-5 w-5 rotate-45 rounded-sm ${pain.bg}`}
                  />
                </figure>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 flex flex-col items-center gap-6 text-center">
              <p className="max-w-xl font-heading text-2xl font-600 leading-snug text-balance text-brand-navy">
                If even one of these made you wince,{" "}
                <span className="marker whitespace-nowrap">this review is for you.</span>
              </p>
              <CtaButton size="lg" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Sample report */}
      <section id="sample" className="relative scroll-mt-20 overflow-hidden bg-white py-24 lg:py-32">
        <div className="animate-pulse-soft absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-brand-lavender opacity-[0.12] blur-[90px]" />
        <div className="animate-pulse-soft absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-brand-yellow opacity-[0.2] blur-[80px]" />

        <Container className="relative">
          <SectionHeading
            tag="Sample Report"
            title="One page. Four sections. Zero jargon."
            subtitle="Here's a sample of what lands in your inbox. Every report is written by Heather, for your business."
          />

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_minmax(0,34rem)_1fr]">
            {(["left", "right"] as const).map((side) => (
              <div
                key={side}
                className={`relative hidden lg:block ${side === "left" ? "lg:order-1" : "lg:order-3"}`}
              >
                {marginNotes
                  .filter((note) => note.side === side)
                  .map((note) => (
                    <MarginNote key={note.tone} {...note} />
                  ))}
              </div>
            ))}

            <ScrollReveal className="lg:order-2">
              <div className="relative mx-auto max-w-xl">
                <div className="absolute -inset-4 rotate-[-2deg] rounded-3xl border border-brand-lavender/30" />
                <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[2deg] rounded-2xl bg-brand-lavender/15" />
                <ReportPreview className="rotate-[-1deg]" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="mx-auto mt-14 max-w-2xl rounded-2xl border border-dashed border-brand-navy/15 bg-brand-eggshell p-5 text-center text-sm leading-relaxed text-brand-navy/55">
              <span className="font-semibold text-brand-navy">
                And if you&apos;d rather not tackle the list yourself?
              </span>{" "}
              The last line tells you how Grey Owl can take it off your plate.
              No pressure, no follow-up calls.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-brand-eggshell py-24 lg:py-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                tag="How It Works"
                title="Three steps. Almost no effort on your part."
                subtitle="You spend two minutes. Heather does the digging."
                align="left"
              />

              <div className="-mt-4">
                {steps.map((step, i) => (
                  <ScrollReveal key={step.title} delay={i + 1}>
                    <div className={`relative flex gap-5 ${i < steps.length - 1 ? "pb-10" : ""}`}>
                      {i < steps.length - 1 && (
                        <div className="absolute left-7 top-16 h-[calc(100%-4.5rem)] border-l-2 border-dashed border-brand-lavender/60" />
                      )}
                      <div className={`relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-brand-navy ${step.bg}`}>
                        <ReviewIcon name={step.icon} className="h-6 w-6" />
                        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy font-heading text-xs font-700 text-white">
                          {i + 1}
                        </span>
                      </div>
                      <div className="pt-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="font-heading text-xl font-700 text-brand-navy">{step.title}</h3>
                          <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-navy/50 shadow-[0_2px_8px_rgba(212,194,239,0.25)]">
                            {step.tag}
                          </span>
                        </div>
                        <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-brand-navy/55">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={2} className="px-2 sm:px-10 lg:px-6">
              <InboxPreview />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* What Heather looks for */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-pink opacity-[0.1] blur-[80px]" />
        <Container className="relative">
          <SectionHeading
            tag="What Heather Checks"
            title="What Heather looks for"
            subtitle="The places small-business books most often go sideways, and the ones that cost the most when they do."
          />

          <ScrollReveal>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-brand-navy/[0.06] bg-white shadow-[0_20px_60px_rgba(212,194,239,0.25)]">
              <div aria-hidden="true" className="absolute inset-y-0 left-8 w-px bg-brand-coral sm:left-14" />
              <div aria-hidden="true" className="absolute inset-y-0 left-9 w-px bg-brand-coral/40 sm:left-[3.75rem]" />

              <ul className="relative grid gap-x-10 py-6 pl-14 pr-6 sm:grid-cols-2 sm:py-8 sm:pl-24 sm:pr-10">
                {checks.map((check) => (
                  <li key={check.title} className="flex items-start gap-4 border-b border-brand-lavender/40 py-5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-lavender-light text-brand-navy/70">
                      <ReviewIcon name={check.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-[16px] font-700 text-brand-navy">
                        {check.title}
                      </h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-brand-navy/50">
                        {check.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="relative border-t border-dashed border-brand-navy/10 bg-brand-eggshell/80 py-4 pl-14 pr-6 text-sm text-brand-navy/50 sm:pl-24">
                <span className="font-semibold text-brand-navy/70">Anything off?</span>{" "}
                It goes in your report, with a plain-English explanation of why it matters.
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-brand-eggshell py-24 lg:py-32">
        <Container>
          <SectionHeading
            tag="FAQ"
            title="Fair questions, straight answers"
          />
          <div className="mx-auto max-w-2xl space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={Math.min(i + 1, 5)}>
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
                    <p className="text-[15px] leading-relaxed text-brand-navy/55">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Request form */}
      <section
        id="request"
        className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-brand-lavender-light via-brand-eggshell to-brand-pink-light py-24 lg:py-32"
      >
        <div className="animate-float-slow absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-brand-pink opacity-[0.15] blur-[100px]" />
        <div className="animate-float-slower absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-brand-sage opacity-[0.12] blur-[90px]" />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <ScrollReveal className="lg:sticky lg:top-28">
              <OfferName className="text-xl sm:text-2xl" />
              <h2 className="mt-6 font-heading text-3xl font-800 leading-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
                Find your red flags
                <br />
                <span className="text-brand-navy/60">before they find you.</span>
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-brand-navy/55">
                Tell us a little about your business. Heather will reply within
                1-2 business days with how to share your books.
              </p>

              <ol className="mt-8 space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-lavender/40 bg-white font-heading text-sm font-700 text-brand-navy">
                      {i + 1}
                    </span>
                    <span className="text-[15px] font-medium text-brand-navy/70">{step}</span>
                  </li>
                ))}
              </ol>

              <ul className="mt-10 flex flex-wrap gap-3">
                {[
                  { icon: "lock" as const, label: "Confidential" },
                  { icon: "eye" as const, label: "Read-only access" },
                  { icon: "phoneOff" as const, label: "No sales call" },
                ].map((badge) => (
                  <li
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full border border-brand-navy/[0.06] bg-white/70 px-4 py-2 text-xs font-semibold text-brand-navy/60 backdrop-blur-sm"
                  >
                    <ReviewIcon name={badge.icon} className="h-4 w-4 text-brand-navy/45" />
                    {badge.label}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <ReviewRequestForm />
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function MarginNote({
  tone,
  text,
  side,
  top,
}: {
  tone: Tone;
  text: string;
  side: "left" | "right";
  top: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-3 ${top} ${side === "left" ? "right-0 flex-row text-right" : "left-0 flex-row-reverse text-left"}`}
    >
      <div>
        <span className={`mb-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md ${TONES[tone].chip} ${TONES[tone].iconColor}`}>
          <ReviewIcon name={TONES[tone].icon} className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
        <p className="font-heading text-lg italic leading-snug text-brand-navy/70">{text}</p>
      </div>
      <svg
        className={`h-8 w-16 flex-shrink-0 text-brand-navy/30 ${side === "right" ? "-scale-x-100" : ""}`}
        viewBox="0 0 64 32"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 24C18 6 38 4 58 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M50 8L58 14L49 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
