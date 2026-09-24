import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";
import OfferName from "@/components/review/OfferName";
import ReportPreview from "@/components/review/ReportPreview";
import ReviewIcon from "@/components/review/ReviewIcon";
import { TONES, type Tone } from "@/components/review/tones";

const reportParts: { tone: Tone; label: string }[] = [
  { tone: "good", label: "What's working" },
  { tone: "attention", label: "What needs attention" },
  { tone: "flag", label: "Red flags to deal with now" },
  { tone: "fix", label: "The 3 fixes to make first" },
];

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-brand-eggshell py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lavender opacity-[0.1] blur-[100px]" />

      <Container className="relative">
        <ScrollReveal>
          <div className="mx-auto grid max-w-5xl items-center gap-14 overflow-hidden rounded-3xl border border-brand-lavender/25 bg-gradient-to-br from-brand-lavender/15 via-brand-pink-light/30 to-brand-eggshell p-8 shadow-[0_20px_60px_rgba(212,194,239,0.15)] sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
            <div>
              <OfferName className="mb-6 text-xl sm:text-2xl" />

              <h2 className="font-heading text-3xl font-800 leading-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
                Are your books actually right?
                <br />
                <span className="text-brand-navy/60">Find out in one page.</span>
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-brand-navy/50">
                Heather will spend 30 minutes going through your books, then
                email you a one-page report in plain English:
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {reportParts.map((part) => {
                  const tone = TONES[part.tone];
                  return (
                    <li key={part.tone} className="flex items-center gap-3 text-[15px] font-medium text-brand-navy/70">
                      <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${tone.chip} ${tone.iconColor}`}>
                        <ReviewIcon name={tone.icon} className="h-4 w-4" strokeWidth={2} />
                      </span>
                      {part.label}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10">
                <Button href="/free-review" size="lg">
                  Find My Red Flags
                  <ReviewIcon name="arrowRight" className="ml-2 h-4 w-4" strokeWidth={2} />
                </Button>
              </div>
              <p className="mt-4 text-xs text-brand-navy/40">
                No cost, no obligation, no sales call. Just straight answers
                from a QuickBooks Pro Advisor.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-sm pt-4 lg:max-w-none">
              <ReportPreview compact className="rotate-[2deg]" />
              <div className="animate-float absolute -top-2 left-0 flex items-center gap-2 rounded-full border border-brand-lavender/30 bg-white px-4 py-2 text-xs font-semibold text-brand-navy shadow-[0_8px_24px_rgba(212,194,239,0.35)] sm:-left-6">
                <ReviewIcon name="clock" className="h-4 w-4 text-brand-navy/50" />
                30-minute review
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
