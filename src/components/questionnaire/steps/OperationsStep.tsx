import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuestionnaireData } from "@/lib/questionnaire-schema";
import FormField, { inputStyles } from "../FormField";

export default function OperationsStep({
  register,
  errors,
}: {
  register: UseFormRegister<QuestionnaireData>;
  errors: FieldErrors<QuestionnaireData>;
}) {
  return (
    <div>
      <h2 className="mb-2 font-heading text-2xl font-700 text-brand-navy">
        Operations
      </h2>
      <p className="mb-8 text-sm text-brand-navy/40">Help us understand how your business runs day to day.</p>

      <FormField
        label="Do you have multiple revenue streams or locations?"
        error={errors.multipleRevenueStreams}
        optional
      >
        <select {...register("multipleRevenueStreams")} className={inputStyles}>
          <option value="">Select...</option>
          <option value="single">Single revenue stream, single location</option>
          <option value="multiple-streams">Multiple revenue streams</option>
          <option value="multiple-locations">Multiple locations</option>
          <option value="both">Multiple streams and locations</option>
        </select>
      </FormField>

      <FormField
        label="How are you currently storing and sharing receipts or financial documents?"
        error={errors.documentStorage}
        optional
      >
        <input
          {...register("documentStorage")}
          className={inputStyles}
          placeholder="E.g., shoebox, email, Google Drive, accounting software..."
        />
      </FormField>

      <FormField
        label="Have you worked with a bookkeeper before?"
        error={errors.previousBookkeeper}
        optional
      >
        <select {...register("previousBookkeeper")} className={inputStyles}>
          <option value="">Select...</option>
          <option value="no">No, this would be my first time</option>
          <option value="yes-good">Yes, and it was a good experience</option>
          <option value="yes-bad">Yes, but it didn&apos;t work out</option>
        </select>
      </FormField>

      <FormField
        label="If you've worked with a bookkeeper before, what did you like or dislike about the experience?"
        error={errors.previousExperience}
        optional
      >
        <textarea
          {...register("previousExperience")}
          rows={3}
          className={inputStyles}
          placeholder="Tell us what worked and what didn't..."
        />
      </FormField>
    </div>
  );
}
