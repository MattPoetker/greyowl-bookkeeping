import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-lavender py-20 sm:py-28 lg:py-36">
      {/* Decorative blobs */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-pink opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-sage opacity-10 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your Books, <span className="text-brand-sage">Handled.</span>
            <br />
            Your Business, <span className="text-brand-yellow">Empowered.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Education-first bookkeeping for non-profits and small businesses.
            We don&apos;t just manage your finances — we help you understand
            them, so you can make confident decisions and grow.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/questionnaire" size="lg">
              Get Started Today
            </Button>
            <Button href="#services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
              Our Services
            </Button>
          </div>
          <p className="mt-6 text-sm text-brand-sage">
            Save up to $3,000/year with our proprietary software
          </p>
        </div>
      </Container>
    </section>
  );
}
