import { STEP_TITLES } from "@/lib/questionnaire-schema";

export default function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="mb-8">
      {/* Mobile: simple text */}
      <p className="text-center text-sm text-brand-navy/60 sm:hidden">
        Step {currentStep + 1} of {STEP_TITLES.length}:{" "}
        <span className="font-medium text-brand-navy">
          {STEP_TITLES[currentStep]}
        </span>
      </p>

      {/* Desktop: full stepper */}
      <div className="hidden sm:block">
        <div className="flex items-center justify-between">
          {STEP_TITLES.map((title, i) => {
            const isCompleted = i < currentStep;
            const isCurrent = i === currentStep;
            return (
              <div key={title} className="flex flex-1 flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    isCompleted
                      ? "bg-brand-lavender text-brand-navy"
                      : isCurrent
                        ? "bg-brand-sage text-brand-navy"
                        : "bg-brand-lavender/30 text-brand-navy/40"
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
                  className={`mt-1 text-[11px] ${
                    isCurrent
                      ? "font-medium text-brand-navy"
                      : "text-brand-navy/40"
                  }`}
                >
                  {title}
                </span>
              </div>
            );
          })}
        </div>
        {/* Progress bar */}
        <div className="mx-auto mt-2 h-1 w-full max-w-md rounded-full bg-brand-lavender/20">
          <div
            className="h-1 rounded-full bg-brand-sage transition-all duration-300"
            style={{
              width: `${(currentStep / (STEP_TITLES.length - 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
