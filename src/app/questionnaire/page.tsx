import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import QuestionnaireForm from "@/components/questionnaire/QuestionnaireForm";

export const metadata: Metadata = {
  title: "Client Questionnaire",
  description:
    "Tell us about your business so we can tailor our bookkeeping services to your needs. Quick, easy, and confidential.",
};

export default function QuestionnairePage() {
  return (
    <section className="bg-brand-lavender/5 py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="font-heading text-4xl font-bold text-brand-navy">
              Let&apos;s Get to Know Your Business
            </h1>
            <p className="mt-4 text-lg text-brand-navy/70">
              Take a few minutes to tell us about your business, your needs, and
              your goals. This helps us prepare a tailored solution just for you.
            </p>
          </div>

          <QuestionnaireForm />

          <p className="mt-8 text-center text-xs text-brand-navy/40">
            Your information is kept confidential and will only be used to
            prepare for our initial consultation.
          </p>
        </div>
      </Container>
    </section>
  );
}
