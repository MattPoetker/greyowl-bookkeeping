import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuestionnaireData, REPORT_FREQUENCIES } from "@/lib/questionnaire-schema";
import FormField, { inputStyles, selectStyles } from "../FormField";

export default function CurrentStateStep({
  register,
  errors,
}: {
  register: UseFormRegister<QuestionnaireData>;
  errors: FieldErrors<QuestionnaireData>;
}) {
  return (
    <div>
      <h2 className="mb-6 font-heading text-2xl font-bold text-brand-navy">
        Your Current Situation
      </h2>

      <FormField
        label="Are your books up to date? If not, how far behind are they?"
        error={errors.booksUpToDate}
      >
        <select {...register("booksUpToDate")} className={selectStyles}>
          <option value="">Select...</option>
          <option value="up-to-date">Yes, fully up to date</option>
          <option value="1-3-months">Behind by 1–3 months</option>
          <option value="3-6-months">Behind by 3–6 months</option>
          <option value="6-12-months">Behind by 6–12 months</option>
          <option value="more-than-year">Behind by more than a year</option>
          <option value="not-sure">Not sure</option>
        </select>
      </FormField>

      <FormField
        label="Do you have a business bank account and/or credit cards that need to be reconciled regularly?"
        error={errors.bankAccounts}
        optional
      >
        <textarea
          {...register("bankAccounts")}
          rows={2}
          className={inputStyles}
          placeholder="E.g., 2 checking accounts and 1 business credit card..."
        />
      </FormField>

      <FormField
        label="How often would you like reports or financial updates?"
        error={errors.reportFrequency}
      >
        <select {...register("reportFrequency")} className={selectStyles}>
          <option value="">Select frequency...</option>
          {REPORT_FREQUENCIES.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </FormField>
    </div>
  );
}
