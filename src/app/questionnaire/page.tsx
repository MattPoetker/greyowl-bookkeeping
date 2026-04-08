import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import QuestionnaireForm from "@/components/questionnaire/QuestionnaireForm";

export const metadata: Metadata = {
  title: "Client Questionnaire",
  description:
    "Tell us about your business so we can tailor our bookkeeping services to your needs. Quick, easy, and confidential.",
  openGraph: {
    title: "Get Started | Grey Owl Bookkeeping",
    description:
      "Fill out our quick questionnaire and let us prepare a tailored bookkeeping solution for your business.",
  },
};

export default function QuestionnairePage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-gradient-to-br from-brand-lavender-light via-brand-eggshell to-brand-pink-light pb-12 pt-36 sm:pt-44">
        <div className="animate-float-slow absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-sage opacity-[0.08] blur-[80px]" />
        <div
          className="absolute -bottom-1 left-0 right-0 h-16 bg-brand-eggshell"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="animate-entrance mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              Let&apos;s Connect
            </span>
            <h1 className="animate-entrance animate-entrance-delay-1 font-heading text-4xl font-800 leading-tight text-brand-navy sm:text-5xl">
              Tell us about your business
            </h1>
            <p className="animate-entrance animate-entrance-delay-2 mx-auto mt-5 max-w-lg text-[17px] text-brand-navy/45">
              Take a few minutes to share your needs and goals.
              This helps us prepare a tailored solution just for you.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-eggshell py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <QuestionnaireForm />
            <p className="mt-10 text-center text-xs text-brand-navy/25">
              Your information is kept confidential and will only be used to
              prepare for our initial consultation.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
