import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";

export default function CTABanner() {
  return (
    <section className="bg-brand-navy py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Take Bookkeeping Off Your Plate?
          </h2>
          <p className="mt-4 text-lg text-brand-lavender">
            Fill out our quick questionnaire and let&apos;s find the perfect
            bookkeeping solution for your business.
          </p>
          <div className="mt-8">
            <Button href="/questionnaire" variant="secondary" size="lg">
              Start Your Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
