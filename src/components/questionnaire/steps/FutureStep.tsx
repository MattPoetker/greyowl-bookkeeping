import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuestionnaireData } from "@/lib/questionnaire-schema";
import FormField, { inputStyles } from "../FormField";

export default function FutureStep({
  register,
  errors,
}: {
  register: UseFormRegister<QuestionnaireData>;
  errors: FieldErrors<QuestionnaireData>;
}) {
  return (
    <div>
      <h2 className="mb-6 font-heading text-2xl font-bold text-brand-navy">
        Future Plans & Contact Info
      </h2>

      <FormField
        label="Are you planning to grow your business in the next year? Any big changes coming?"
        error={errors.growthPlans}
        optional
      >
        <textarea
          {...register("growthPlans")}
          rows={2}
          className={inputStyles}
          placeholder="E.g., planning to hire 3 new employees, opening a second location..."
        />
      </FormField>

      <FormField
        label="Are you open to using new software or tools if it helps streamline your process?"
        error={errors.openToNewSoftware}
        optional
      >
        <select {...register("openToNewSoftware")} className={inputStyles}>
          <option value="">Select...</option>
          <option value="yes">Yes, absolutely</option>
          <option value="maybe">Maybe, if it makes sense</option>
          <option value="no">I'd prefer to stick with what I have</option>
        </select>
      </FormField>

      <div className="mt-8 rounded-xl bg-brand-lavender/10 p-6">
        <h3 className="mb-4 font-semibold text-brand-navy">
          How can we reach you?
        </h3>

        <FormField label="Your Name" error={errors.contactName}>
          <input
            {...register("contactName")}
            className={inputStyles}
            placeholder="Full name"
          />
        </FormField>

        <FormField label="Email Address" error={errors.contactEmail}>
          <input
            {...register("contactEmail")}
            type="email"
            className={inputStyles}
            placeholder="you@example.com"
          />
        </FormField>

        <FormField
          label="Phone Number"
          error={errors.contactPhone}
          optional
        >
          <input
            {...register("contactPhone")}
            type="tel"
            className={inputStyles}
            placeholder="(555) 123-4567"
          />
        </FormField>

        <FormField
          label="Preferred Contact Method"
          error={errors.preferredContact}
          optional
        >
          <select {...register("preferredContact")} className={inputStyles}>
            <option value="">Select...</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="text">Text Message</option>
            <option value="any">Any of the above</option>
          </select>
        </FormField>
      </div>
    </div>
  );
}
