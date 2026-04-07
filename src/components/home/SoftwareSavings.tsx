import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

export default function SoftwareSavings() {
  return (
    <section className="bg-brand-sage/20 py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-navy/60">
              Exclusive Savings
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-navy sm:text-4xl">
              Save Up to{" "}
              <span className="text-brand-navy">$3,000</span> Per Year
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-navy/70">
              Stop overpaying for bookkeeping software. Our proprietary tools
              replace expensive subscriptions like QuickBooks — giving you
              everything you need at a fraction of the cost.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-md">
            <div className="text-center">
              <p className="text-5xl font-bold text-brand-navy">$3,000</p>
              <p className="mt-1 text-sm text-brand-navy/60">
                average annual savings
              </p>
            </div>
            <div className="h-px w-full bg-brand-lavender" />
            <ul className="space-y-2 text-left text-sm text-brand-navy/80">
              <li className="flex items-center gap-2">
                <CheckIcon /> No expensive subscriptions
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> All-in-one solution
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon /> Full support included
              </li>
            </ul>
            <Button href="/questionnaire" size="sm">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 text-brand-sage"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
