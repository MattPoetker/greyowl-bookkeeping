import Image from "next/image";
import ReviewIcon from "./ReviewIcon";
import { TONES, type Tone } from "./tones";

const SECTIONS: { tone: Tone; items: React.ReactNode[] }[] = [
  {
    tone: "good",
    items: [
      "Sales recorded consistently every month",
      "Payroll run on time, every pay period",
      "Business and personal accounts kept separate",
    ],
  },
  {
    tone: "attention",
    items: [
      <>
        <span className="marker">43 uncategorized transactions</span> since
        June
      </>,
      "$6,420 in invoices unpaid for 90+ days",
      "Receipts missing for most card purchases",
    ],
  },
  {
    tone: "flag",
    items: [
      <>
        Chequing <Circled>not reconciled since March</Circled>
      </>,
      "GST/HST filed for Q2 doesn't match your books",
    ],
  },
  {
    tone: "fix",
    items: [
      "Reconcile chequing, April through August",
      "Clear out the uncategorized transactions",
      "Follow up on the three overdue invoices",
    ],
  },
];

export default function ReportPreview({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-brand-navy/[0.06] bg-white text-left shadow-[0_24px_60px_rgba(33,32,76,0.12)] ${className}`}
    >
      <div className="h-1.5 rounded-t-2xl bg-gradient-to-r from-brand-lavender via-brand-pink to-brand-sage" />

      <div className={compact ? "p-5 sm:p-6" : "p-6 sm:p-9"}>
        {/* Letterhead */}
        <div className="flex items-center justify-between gap-4 border-b border-dashed border-brand-navy/10 pb-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/owl-logo.svg"
              alt=""
              width={compact ? 28 : 36}
              height={compact ? 28 : 36}
            />
            <div>
              <p className="font-heading text-sm font-700 leading-tight text-brand-navy">
                Bookkeeping Review
              </p>
              <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-brand-navy/40">
                Grey Owl Bookkeeping
              </p>
            </div>
          </div>
          <div className="hidden whitespace-nowrap text-right text-[11px] leading-snug text-brand-navy/45 sm:block">
            <p>
              {compact ? "For" : "Prepared for"}{" "}
              <span className="font-semibold text-brand-navy/70">Sample Co.</span>
            </p>
            {!compact && <p>30-minute review</p>}
          </div>
        </div>

        {/* Sections */}
        <div className={`mt-5 ${compact ? "space-y-4" : "space-y-6"}`}>
          {SECTIONS.map((section) => {
            const tone = TONES[section.tone];
            const items = compact
              ? section.items.slice(0, section.tone === "fix" ? 3 : 1)
              : section.items;

            return (
              <div key={section.tone} className={`border-l-[3px] pl-4 ${tone.bar}`}>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-navy/55">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-md ${tone.chip} ${tone.iconColor}`}
                  >
                    <ReviewIcon name={tone.icon} className="h-3 w-3" strokeWidth={2.2} />
                  </span>
                  {tone.label}
                </p>

                {section.tone === "fix" ? (
                  <ol className={`mt-2.5 space-y-1.5 ${compact ? "text-[13px]" : "text-sm"} text-brand-navy/75`}>
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border border-brand-navy/15 font-heading text-[10px] font-700 text-brand-navy">
                          {j + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className={`mt-2.5 space-y-1.5 ${compact ? "text-[13px]" : "text-sm"} text-brand-navy/75`}>
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy/25" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {!compact && (
          <div className="mt-7 border-t border-dashed border-brand-navy/10 pt-5">
            <p className="font-heading text-lg italic text-brand-navy/80">
              &mdash; Heather
            </p>
            <p className="mt-2 text-xs leading-relaxed text-brand-navy/50">
              <span className="font-semibold text-brand-navy/70">P.S.</span>{" "}
              If you&apos;d rather not tackle this list yourself, this is exactly
              the kind of work Grey Owl can take off your plate.
            </p>
          </div>
        )}
      </div>

      {/* Sample sticker */}
      <span className="absolute -right-2 -top-3 rotate-[8deg] rounded-md bg-brand-coral px-2.5 py-1 text-[10px] font-700 uppercase tracking-[0.25em] text-white shadow-[0_4px_12px_rgba(181,74,66,0.25)]">
        Sample
      </span>
    </div>
  );
}

function Circled({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative ml-1.5 inline-block whitespace-nowrap">
      {children}
      <svg
        className="pointer-events-none absolute -left-3 -top-2 h-[calc(100%+1rem)] w-[calc(100%+1.75rem)] overflow-visible text-brand-coral-dark"
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="scribble"
          pathLength={1}
          d="M18 8C42 2 92 2 110 11C121 19 106 34 68 36C34 38 6 33 5 22C4 13 20 6 46 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
