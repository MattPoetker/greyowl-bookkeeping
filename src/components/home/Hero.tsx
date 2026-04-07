import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative -mt-[72px] overflow-hidden bg-brand-navy pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
      {/* Layered organic blobs */}
      <div className="animate-float-slow absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-brand-lavender opacity-[0.07] blur-[100px]" />
      <div className="animate-float-slower absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-pink opacity-[0.06] blur-[80px]" />
      <div className="animate-float absolute left-1/3 top-1/4 h-[300px] w-[300px] rounded-full bg-brand-sage opacity-[0.05] blur-[60px]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Bottom wave */}
      <div
        className="absolute -bottom-1 left-0 right-0 h-20 bg-brand-cream"
        style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text content */}
          <div className="max-w-2xl">
            <div className="animate-entrance mb-6 inline-flex items-center gap-2 rounded-full border border-brand-sage/20 bg-brand-sage/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-sage" />
              <span className="text-xs font-medium tracking-wide text-brand-sage">
                Save up to $3,000/year on bookkeeping software
              </span>
            </div>

            <h1 className="animate-entrance animate-entrance-delay-1 font-heading text-4xl font-800 leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Your Books,{" "}
              <span className="relative inline-block text-brand-sage">
                Handled
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M0 7 Q50 0 100 4 Q150 8 200 2" stroke="#c8ce8e" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
                </svg>
              </span>
              .
              <br />
              Your Business,{" "}
              <span className="text-brand-yellow">Empowered</span>.
            </h1>

            <p className="animate-entrance animate-entrance-delay-2 mt-7 max-w-lg text-lg leading-relaxed text-white/60">
              Education-first bookkeeping for non-profits and small businesses.
              We don&apos;t just manage your finances — we help you understand
              them, so you can make confident decisions and grow.
            </p>

            <div className="animate-entrance animate-entrance-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/questionnaire" variant="secondary" size="lg">
                Get Started Today
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                href="#services"
                variant="ghost"
                size="lg"
                className="text-white/70 hover:bg-white/5 hover:text-white"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Decorative element — floating cards */}
          <div className="hidden lg:block">
            <div className="relative h-[420px]">
              {/* Card 1 */}
              <div className="animate-entrance animate-entrance-delay-2 animate-float absolute left-4 top-8 w-56 rounded-2xl border border-white/[0.06] bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-brand-sage/20 p-1.5">
                    <svg className="h-full w-full text-brand-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-white/50">Monthly Report</span>
                </div>
                <p className="text-2xl font-heading font-700 text-white">$12,847</p>
                <p className="mt-0.5 text-xs text-brand-sage">+18% from last month</p>
              </div>

              {/* Card 2 */}
              <div className="animate-entrance animate-entrance-delay-3 animate-float-slow absolute right-0 top-32 w-52 rounded-2xl border border-white/[0.06] bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-sage" />
                  <span className="text-xs font-medium text-white/50">Books Status</span>
                </div>
                <p className="font-heading text-lg font-600 text-brand-sage">Up to Date</p>
                <p className="mt-1 text-xs text-white/30">Last reconciled today</p>
              </div>

              {/* Card 3 */}
              <div className="animate-entrance animate-entrance-delay-4 animate-float-slower absolute bottom-4 left-12 w-60 rounded-2xl border border-white/[0.06] bg-white/[0.04] p-5 backdrop-blur-sm">
                <p className="text-xs font-medium text-white/50">Annual Savings</p>
                <p className="mt-1 font-heading text-3xl font-800 text-brand-yellow">$3,000</p>
                <p className="mt-1 text-xs text-white/40">with our proprietary software</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
