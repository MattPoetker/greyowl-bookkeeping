"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField, { inputStyles, selectStyles } from "./FormField";
import Button from "@/components/shared/Button";

const taxIntakeSchema = z.object({
  fullName: z.string().min(1, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  dateOfBirth: z.string().optional(),
  address: z.string().optional(),
  employmentStatus: z.string().min(1, "Please select your employment status"),
  hasSpouse: z.string().optional(),
  hasDependents: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type TaxIntakeData = z.infer<typeof taxIntakeSchema>;

export default function TaxIntakeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaxIntakeData>({
    resolver: zodResolver(taxIntakeSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: TaxIntakeData) {
    setSubmitting(true);
    setSubmitError("");

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      const subject = encodeURIComponent("New Personal Tax Intake");
      const body = encodeURIComponent(
        Object.entries(data)
          .filter(([, v]) => v)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n\n")
      );
      window.location.href = `mailto:info@greyowlbookkeeping.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "personal-tax-intake" }),
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
      <div className="rounded-3xl border border-brand-lavender/20 bg-white p-10 text-center shadow-[0_8px_40px_rgba(212,194,239,0.1)] sm:p-12">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-sage/15">
          <svg className="h-8 w-8 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="font-heading text-2xl font-800 text-brand-navy">
          Thank you!
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/50">
          We&apos;ve received your intake form. Heather will be in touch within
          1-2 business days to discuss your tax filing.
        </p>
        <div className="mt-8">
          <Button href="/" variant="outline">Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-brand-lavender/20 bg-white p-7 shadow-[0_4px_24px_rgba(212,194,239,0.06)] sm:p-10"
    >
      <h2 className="mb-2 font-heading text-2xl font-700 text-brand-navy">
        Your information
      </h2>
      <p className="mb-8 text-sm text-brand-navy/35">
        Just the basics — we&apos;ll collect documents and details later.
      </p>

      <div className="grid gap-x-6 sm:grid-cols-2">
        <FormField label="Full Name" error={errors.fullName}>
          <input {...register("fullName")} className={inputStyles} placeholder="Your full legal name" />
        </FormField>

        <FormField label="Email Address" error={errors.email}>
          <input {...register("email")} type="email" className={inputStyles} placeholder="you@example.com" />
        </FormField>

        <FormField label="Phone Number" error={errors.phone} optional>
          <input {...register("phone")} type="tel" className={inputStyles} placeholder="(555) 123-4567" />
        </FormField>

        <FormField label="Date of Birth" error={errors.dateOfBirth} optional>
          <input {...register("dateOfBirth")} type="date" className={inputStyles} />
        </FormField>
      </div>

      <FormField label="Current Address" error={errors.address} optional>
        <input {...register("address")} className={inputStyles} placeholder="Street address, city, province, postal code" />
      </FormField>

      <FormField label="Employment Status" error={errors.employmentStatus}>
        <select {...register("employmentStatus")} className={selectStyles}>
          <option value="">Select...</option>
          <option value="employed">Employed (T4 income)</option>
          <option value="self-employed">Self-Employed / Contractor</option>
          <option value="both">Both employed and self-employed</option>
          <option value="retired">Retired</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </select>
      </FormField>

      <div className="grid gap-x-6 sm:grid-cols-2">
        <FormField label="Do you have a spouse or common-law partner?" error={errors.hasSpouse} optional>
          <select {...register("hasSpouse")} className={selectStyles}>
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </FormField>

        <FormField label="Do you have any dependents?" error={errors.hasDependents} optional>
          <select {...register("hasDependents")} className={selectStyles}>
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </FormField>
      </div>

      <FormField label="Anything else we should know?" error={errors.additionalNotes} optional>
        <textarea
          {...register("additionalNotes")}
          rows={3}
          className={inputStyles}
          placeholder="E.g., first time filing, have rental income, moved provinces..."
        />
      </FormField>

      {submitError && (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {submitError}
        </p>
      )}

      <div className="mt-8 flex justify-end">
        <Button type="submit" disabled={submitting} size="lg">
          {submitting ? "Submitting..." : "Submit Intake Form"}
          {!submitting && (
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </Button>
      </div>
    </form>
  );
}
