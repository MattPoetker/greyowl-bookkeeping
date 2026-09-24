"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField, { inputStyles, selectStyles } from "@/components/questionnaire/FormField";
import Button from "@/components/shared/Button";
import ReviewIcon from "./ReviewIcon";

const reviewRequestSchema = z.object({
  fullName: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  businessName: z.string().min(1, "Please enter your business or organization name"),
  organizationType: z.string().min(1, "Please select an option"),
  bookkeepingSoftware: z.string().min(1, "Please select an option"),
  biggestWorry: z.string().optional(),
  phone: z.string().optional(),
});

type ReviewRequestData = z.infer<typeof reviewRequestSchema>;

export default function ReviewRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewRequestData>({
    resolver: zodResolver(reviewRequestSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: ReviewRequestData) {
    setSubmitting(true);
    setSubmitError("");

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      const subject = encodeURIComponent("New FREE Bookkeeping Review Request");
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
        body: JSON.stringify({ ...data, formType: "free-books-review" }),
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
      <div className="rounded-3xl border border-brand-lavender/20 bg-white p-10 text-center shadow-[0_8px_40px_rgba(212,194,239,0.15)] sm:p-12">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-sage/20">
          <ReviewIcon name="check" className="h-8 w-8 text-brand-navy" />
        </div>
        <h3 className="font-heading text-2xl font-800 text-brand-navy">
          You&apos;re on the list!
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/55">
          Heather will email you within 1-2 business days with simple
          instructions for sharing your books. Keep an eye on your inbox (and
          your spam folder, just in case).
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative rounded-3xl border border-brand-lavender/20 bg-white p-7 shadow-[0_8px_40px_rgba(212,194,239,0.15)] sm:p-10"
    >
      <div className="mb-8 flex items-start gap-4">
        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-coral-light text-brand-coral-dark">
          <ReviewIcon name="flag" className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-heading text-2xl font-700 text-brand-navy">
            Claim your FREE Bookkeeping Review
          </h3>
          <p className="mt-1 text-sm text-brand-navy/40">
            Takes about 2 minutes. No documents needed yet.
          </p>
        </div>
      </div>

      <div className="grid gap-x-6 sm:grid-cols-2">
        <FormField label="Your Name" error={errors.fullName}>
          <input {...register("fullName")} className={inputStyles} placeholder="First and last name" />
        </FormField>

        <FormField label="Email Address" error={errors.email}>
          <input {...register("email")} type="email" className={inputStyles} placeholder="you@example.com" />
        </FormField>
      </div>

      <FormField label="Business or Organization Name" error={errors.businessName}>
        <input {...register("businessName")} className={inputStyles} placeholder="E.g., Maple Street Bakery" />
      </FormField>

      <div className="grid gap-x-6 sm:grid-cols-2">
        <FormField label="What kind of organization?" error={errors.organizationType}>
          <select {...register("organizationType")} className={selectStyles}>
            <option value="">Select...</option>
            <option value="small-business">Small business</option>
            <option value="non-profit">Non-profit or charity</option>
            <option value="self-employed">Self-employed / sole proprietor</option>
            <option value="other">Other</option>
          </select>
        </FormField>

        <FormField label="Where do you keep your books?" error={errors.bookkeepingSoftware}>
          <select {...register("bookkeepingSoftware")} className={selectStyles}>
            <option value="">Select...</option>
            <option value="quickbooks-online">QuickBooks Online</option>
            <option value="quickbooks-desktop">QuickBooks Desktop</option>
            <option value="xero">Xero</option>
            <option value="wave">Wave</option>
            <option value="spreadsheets">Spreadsheets</option>
            <option value="nothing-yet">Nothing yet (it&apos;s a shoebox)</option>
            <option value="other">Other / not sure</option>
          </select>
        </FormField>
      </div>

      <FormField label="What's worrying you most about your books?" error={errors.biggestWorry} optional>
        <textarea
          {...register("biggestWorry")}
          rows={3}
          className={inputStyles}
          placeholder="E.g., haven't reconciled in months, not sure GST/HST is right, board meeting coming up..."
        />
      </FormField>

      <FormField label="Phone Number" error={errors.phone} optional>
        <input {...register("phone")} type="tel" className={inputStyles} placeholder="(555) 123-4567" />
      </FormField>

      {submitError && (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {submitError}
        </p>
      )}

      <div className="mt-8 flex flex-col items-stretch gap-4 border-t border-brand-navy/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-brand-navy/40">
          Free. No obligation. No sales call.
        </p>
        <Button type="submit" disabled={submitting} size="lg">
          {submitting ? "Sending..." : "Find My Red Flags"}
          {!submitting && <ReviewIcon name="arrowRight" className="ml-2 h-4 w-4" strokeWidth={2} />}
        </Button>
      </div>
    </form>
  );
}
