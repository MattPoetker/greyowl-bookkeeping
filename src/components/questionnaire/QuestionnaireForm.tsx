"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  questionnaireSchema,
  type QuestionnaireData,
  STEP_TITLES,
} from "@/lib/questionnaire-schema";
import StepIndicator from "./StepIndicator";
import BusinessInfoStep from "./steps/BusinessInfoStep";
import CurrentStateStep from "./steps/CurrentStateStep";
import ServicesStep from "./steps/ServicesStep";
import GoalsStep from "./steps/GoalsStep";
import OperationsStep from "./steps/OperationsStep";
import FutureStep from "./steps/FutureStep";
import Button from "@/components/shared/Button";

const stepFields: (keyof QuestionnaireData)[][] = [
  ["businessDescription", "businessStructure", "currentSystems", "currentChallenges"],
  ["booksUpToDate", "bankAccounts", "reportFrequency"],
  ["managesPayroll", "hasAccountant", "accountantDetails", "servicesNeeded"],
  ["goals", "budgetRange", "monthlyTransactions"],
  ["multipleRevenueStreams", "documentStorage", "previousBookkeeper", "previousExperience"],
  ["growthPlans", "openToNewSoftware", "contactName", "contactEmail", "contactPhone", "preferredContact"],
];

export default function QuestionnaireForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<QuestionnaireData>({
    resolver: zodResolver(questionnaireSchema),
    mode: "onBlur",
  });

  const isLastStep = currentStep === STEP_TITLES.length - 1;

  async function handleNext() {
    const valid = await trigger(stepFields[currentStep]);
    if (valid) {
      setCurrentStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handleBack() {
    setCurrentStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(data: QuestionnaireData) {
    setSubmitting(true);
    setSubmitError("");

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      const subject = encodeURIComponent("New Client Questionnaire Submission");
      const body = encodeURIComponent(
        Object.entries(data)
          .filter(([, v]) => v && (!Array.isArray(v) || v.length > 0))
          .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
          .join("\n\n")
      );
      window.location.href = `mailto:hello@greyowlbookkeeping.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-brand-navy/[0.06] bg-white p-10 text-center shadow-[0_8px_40px_rgba(33,32,76,0.06)] sm:p-12">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-sage/15">
          <svg className="h-8 w-8 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="font-heading text-2xl font-800 text-brand-navy">
          Thank you!
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/55">
          We&apos;ve received your questionnaire. Heather will review your
          information and reach out within 1-2 business days to discuss next
          steps.
        </p>
        <div className="mt-8">
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <StepIndicator currentStep={currentStep} />

      <div className="rounded-3xl border border-brand-navy/[0.06] bg-white p-7 shadow-[0_4px_24px_rgba(33,32,76,0.04)] sm:p-10">
        <div
          key={currentStep}
          style={{ animation: "fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {currentStep === 0 && (
            <BusinessInfoStep register={register} errors={errors} />
          )}
          {currentStep === 1 && (
            <CurrentStateStep register={register} errors={errors} />
          )}
          {currentStep === 2 && (
            <ServicesStep register={register} errors={errors} />
          )}
          {currentStep === 3 && (
            <GoalsStep register={register} errors={errors} />
          )}
          {currentStep === 4 && (
            <OperationsStep register={register} errors={errors} />
          )}
          {currentStep === 5 && (
            <FutureStep register={register} errors={errors} />
          )}
        </div>

        {submitError && (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {submitError}
          </p>
        )}

        <div className="mt-10 flex items-center justify-between border-t border-brand-navy/[0.06] pt-6">
          {currentStep > 0 ? (
            <Button variant="ghost" onClick={handleBack}>
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back
            </Button>
          ) : (
            <div />
          )}

          {isLastStep ? (
            <Button type="submit" disabled={submitting} size="lg">
              {submitting ? "Submitting..." : "Submit Questionnaire"}
              {!submitting && (
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next Step
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
