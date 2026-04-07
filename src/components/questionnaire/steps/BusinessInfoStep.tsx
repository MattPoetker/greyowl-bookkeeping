import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuestionnaireData, BUSINESS_STRUCTURES } from "@/lib/questionnaire-schema";
import FormField, { inputStyles, selectStyles } from "../FormField";

export default function BusinessInfoStep({
  register,
  errors,
}: {
  register: UseFormRegister<QuestionnaireData>;
  errors: FieldErrors<QuestionnaireData>;
}) {
  return (
    <div>
      <h2 className="mb-2 font-heading text-2xl font-700 text-brand-navy">
        Tell us about your business
      </h2>
      <p className="mb-8 text-sm text-brand-navy/40">Help us understand your business so we can tailor our services.</p>

      <FormField
        label="What does your business do, how long have you been operating, and what is your current structure?"
        error={errors.businessDescription}
      >
        <textarea
          {...register("businessDescription")}
          rows={4}
          className={inputStyles}
          placeholder="E.g., We're a 5-year-old landscaping company structured as an LLC..."
        />
      </FormField>

      <FormField
        label="Business Structure"
        error={errors.businessStructure}
      >
        <select {...register("businessStructure")} className={selectStyles}>
          <option value="">Select your structure...</option>
          {BUSINESS_STRUCTURES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        label="What accounting or bookkeeping systems are you currently using?"
        error={errors.currentSystems}
        optional
      >
        <input
          {...register("currentSystems")}
          className={inputStyles}
          placeholder="E.g., QuickBooks, Excel, none..."
        />
      </FormField>

      <FormField
        label="How are you currently managing your books, and what challenges have you encountered?"
        error={errors.currentChallenges}
        optional
      >
        <textarea
          {...register("currentChallenges")}
          rows={3}
          className={inputStyles}
          placeholder="Tell us about your current process and any pain points..."
        />
      </FormField>
    </div>
  );
}
