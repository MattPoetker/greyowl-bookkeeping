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

// Fields required per step for partial validation
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
      // Fallback: open mailto
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
      <div className="mx-auto max-w-lg rounded-2xl bg-brand-sage/10 p-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-sage/20">
          <svg className="h-8 w-8 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-heading text-2xl font-bold text-brand-navy">
          Thank You!
        </h2>
        <p className="mt-3 text-brand-navy/70">
          We&apos;ve received your questionnaire. Heather will review your
          information and reach out within 1–2 business days to discuss next
          steps.
        </p>
        <div className="mt-6">
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <StepIndicator currentStep={currentStep} />

      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-sm sm:p-8">
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

        {submitError && (
          <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {submitError}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">
          {currentStep > 0 ? (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div />
          )}

          {isLastStep ? (
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Questionnaire"}
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next Step
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
