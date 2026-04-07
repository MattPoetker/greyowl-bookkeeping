import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuestionnaireData, BUDGET_RANGES } from "@/lib/questionnaire-schema";
import FormField, { inputStyles, selectStyles } from "../FormField";

export default function GoalsStep({
  register,
  errors,
}: {
  register: UseFormRegister<QuestionnaireData>;
  errors: FieldErrors<QuestionnaireData>;
}) {
  return (
    <div>
      <h2 className="mb-6 font-heading text-2xl font-bold text-brand-navy">
        Goals & Budget
      </h2>

      <FormField
        label="What are your goals for working with a bookkeeper? What would success look like to you?"
        error={errors.goals}
        optional
      >
        <textarea
          {...register("goals")}
          rows={4}
          className={inputStyles}
          placeholder="E.g., I want to stop worrying about my books and focus on growing the business..."
        />
      </FormField>

      <FormField
        label="Do you have a budget in mind for bookkeeping services?"
        error={errors.budgetRange}
        optional
      >
        <select {...register("budgetRange")} className={selectStyles}>
          <option value="">Select a range...</option>
          {BUDGET_RANGES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        label="Approximately how many transactions do you process monthly?"
        error={errors.monthlyTransactions}
        optional
      >
        <select {...register("monthlyTransactions")} className={selectStyles}>
          <option value="">Select...</option>
          <option value="0-50">Less than 50</option>
          <option value="50-100">50 – 100</option>
          <option value="100-250">100 – 250</option>
          <option value="250-500">250 – 500</option>
          <option value="500+">500+</option>
          <option value="not-sure">Not sure</option>
        </select>
      </FormField>
    </div>
  );
}
