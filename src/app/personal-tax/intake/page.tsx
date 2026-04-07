import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import TaxIntakeForm from "@/components/questionnaire/TaxIntakeForm";

export const metadata: Metadata = {
  title: "Personal Tax Intake",
  description:
    "Quick intake form for personal tax clients. Tell us a bit about yourself and we'll get you started.",
};

export default function TaxIntakePage() {
  return (
    <>
      <section className="relative -mt-[72px] overflow-hidden bg-gradient-to-br from-brand-yellow/15 via-brand-eggshell to-brand-lavender-light pb-12 pt-36 sm:pt-44">
        <div className="animate-float-slow absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-yellow opacity-[0.1] blur-[80px]" />
        <div
          className="absolute -bottom-1 left-0 right-0 h-16 bg-brand-eggshell"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="animate-entrance mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              Personal Tax
            </span>
            <h1 className="animate-entrance animate-entrance-delay-1 font-heading text-4xl font-800 leading-tight text-brand-navy sm:text-5xl">
              Tax Intake Form
            </h1>
            <p className="animate-entrance animate-entrance-delay-2 mx-auto mt-5 max-w-lg text-[17px] text-brand-navy/45">
              Tell us a bit about yourself so we can prepare for your tax filing.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-eggshell py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <TaxIntakeForm />
            <p className="mt-10 text-center text-xs text-brand-navy/25">
              Your information is kept confidential and will only be used to
              prepare for your tax filing.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
