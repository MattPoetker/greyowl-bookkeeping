import { STEP_TITLES } from "@/lib/questionnaire-schema";

export default function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="mb-8">
      {/* Mobile */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between rounded-xl bg-white/60 px-4 py-3 border border-brand-navy/[0.06]">
          <span className="text-xs text-brand-navy/40">
            Step {currentStep + 1}/{STEP_TITLES.length}
          </span>
          <span className="font-heading text-sm font-600 text-brand-navy">
            {STEP_TITLES[currentStep]}
          </span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-brand-navy/[0.06]">
          <div
            className="h-full rounded-full bg-brand-sage transition-all duration-500 ease-out"
            style={{
              width: `${((currentStep + 1) / STEP_TITLES.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:block">
        <div className="flex items-start justify-between">
          {STEP_TITLES.map((title, i) => {
            const isCompleted = i < currentStep;
            const isCurrent = i === currentStep;
            return (
              <div key={title} className="flex flex-1 flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold transition-all duration-300 ${
                    isCompleted
                      ? "bg-brand-sage/20 text-brand-navy shadow-[0_2px_8px_rgba(200,206,142,0.2)]"
                      : isCurrent
                        ? "bg-brand-navy text-white shadow-[0_4px_16px_rgba(33,32,76,0.2)]"
                        : "border border-brand-navy/[0.08] bg-white text-brand-navy/25"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={`mt-2 text-center text-[11px] leading-tight transition-colors duration-300 ${
                    isCurrent
                      ? "font-semibold text-brand-navy"
                      : isCompleted
                        ? "text-brand-navy/50"
                        : "text-brand-navy/25"
                  }`}
                >
                  {title}
                </span>
              </div>
            );
          })}
        </div>
        {/* Progress bar */}
        <div className="mx-auto mt-4 h-0.5 w-full max-w-md overflow-hidden rounded-full bg-brand-navy/[0.06]">
          <div
            className="h-full rounded-full bg-brand-sage transition-all duration-500 ease-out"
            style={{
              width: `${(currentStep / (STEP_TITLES.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
