import Image from "next/image";
import ReviewIcon from "./ReviewIcon";
import { TONES, TONE_ORDER, type Tone } from "./tones";

// Tallies match the sample report in ReportPreview.
const TALLIES: Record<Tone, { count: number; label: string }> = {
  good: { count: 3, label: "looking good" },
  attention: { count: 3, label: "need attention" },
  flag: { count: 2, label: "red flags" },
  fix: { count: 3, label: "fixes, in order" },
};

export default function InboxPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Report peeking out from behind the email */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-10 h-[88%] w-[85%] rotate-[6deg] rounded-2xl border border-brand-navy/[0.06] bg-white shadow-[0_16px_40px_rgba(33,32,76,0.08)] sm:-right-8"
      >
        <div className="h-1.5 rounded-t-2xl bg-gradient-to-r from-brand-lavender via-brand-pink to-brand-sage" />
        <div className="space-y-5 p-6">
          {TONE_ORDER.map((tone) => (
            <div key={tone} className={`space-y-2 border-l-[3px] pl-3 ${TONES[tone].bar}`}>
              <div className="h-2 w-1/3 rounded-full bg-brand-navy/10" />
              <div className="h-2 w-5/6 rounded-full bg-brand-navy/[0.05]" />
              <div className="h-2 w-2/3 rounded-full bg-brand-navy/[0.05]" />
            </div>
          ))}
        </div>
      </div>

      {/* Email */}
      <div className="relative overflow-hidden rounded-3xl border border-brand-lavender/30 bg-white shadow-[0_24px_60px_rgba(33,32,76,0.14)]">
        <div className="flex items-center gap-2 border-b border-brand-navy/[0.06] bg-brand-eggshell px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow-deep" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-sage" />
          <span className="ml-3 flex items-center gap-1.5 text-xs font-medium text-brand-navy/45">
            <ReviewIcon name="inbox" className="h-3.5 w-3.5" />
            Inbox
          </span>
        </div>

        <div className="px-5 pt-5 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/heather-headshot.jpeg"
              alt=""
              width={40}
              height={40}
              loading="eager"
              className="h-10 w-10 rounded-full object-cover object-top"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate text-sm font-semibold text-brand-navy">
                  Heather Klassen
                </p>
                <p className="flex-shrink-0 text-[11px] text-brand-navy/35">9:41 AM</p>
              </div>
              <p className="text-xs text-brand-navy/40">to you</p>
            </div>
          </div>

          <p className="mt-4 font-heading text-lg font-700 leading-snug text-brand-navy">
            Your Bookkeeping Review: 2 red flags, 3 fixes
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-brand-navy/55">
            Hi Sam, I spent some time in your books this morning. Good news
            first, then the bits that need your attention&hellip;
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 p-5 sm:p-6">
          {TONE_ORDER.map((tone) => (
            <div key={tone} className={`rounded-2xl p-3.5 ${TONES[tone].soft}`}>
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-lg ${TONES[tone].chip} ${TONES[tone].iconColor}`}
                >
                  <ReviewIcon name={TONES[tone].icon} className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="font-heading text-2xl font-800 text-brand-navy">
                  {TALLIES[tone].count}
                </span>
              </div>
              <p className="mt-1.5 text-xs font-medium text-brand-navy/55">
                {TALLIES[tone].label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-dashed border-brand-navy/10 px-5 py-3 text-xs text-brand-navy/40 sm:px-6">
          <ReviewIcon name="arrowDown" className="h-3.5 w-3.5" />
          Your full one-page report is below
        </div>
      </div>

      {/* Floating chips */}
      <div className="animate-float absolute -top-5 left-2 flex items-center gap-2 rounded-full border border-brand-lavender/30 bg-white px-4 py-2 text-xs font-semibold text-brand-navy shadow-[0_8px_24px_rgba(212,194,239,0.35)] sm:-left-8">
        <ReviewIcon name="clock" className="h-4 w-4 text-brand-navy/50" />
        30-minute review
      </div>
      <div className="animate-float-slow absolute -bottom-5 left-4 flex items-center gap-2 rounded-full border border-brand-coral/30 bg-white px-4 py-2 text-xs font-semibold text-brand-navy shadow-[0_8px_24px_rgba(242,163,155,0.3)] sm:-left-10">
        <ReviewIcon name="flag" className="h-4 w-4 text-brand-coral-dark" />
        Red flags caught early
      </div>
    </div>
  );
}
