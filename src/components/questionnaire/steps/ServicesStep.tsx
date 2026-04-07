import { UseFormRegister, FieldErrors, FieldError } from "react-hook-form";
import { QuestionnaireData, SERVICES_OPTIONS } from "@/lib/questionnaire-schema";
import FormField, { inputStyles } from "../FormField";

export default function ServicesStep({
  register,
  errors,
}: {
  register: UseFormRegister<QuestionnaireData>;
  errors: FieldErrors<QuestionnaireData>;
}) {
  return (
    <div>
      <h2 className="mb-6 font-heading text-2xl font-bold text-brand-navy">
        Services & Support
      </h2>

      <FormField
        label="Do you manage payroll? If so, how is it currently processed?"
        error={errors.managesPayroll}
        optional
      >
        <select {...register("managesPayroll")} className={inputStyles}>
          <option value="">Select...</option>
          <option value="no">No payroll</option>
          <option value="self">I handle it myself</option>
          <option value="service">Using a payroll service</option>
          <option value="accountant">My accountant handles it</option>
        </select>
      </FormField>

      <FormField
        label="Do you work with an accountant or tax professional?"
        error={errors.hasAccountant}
        optional
      >
        <select {...register("hasAccountant")} className={inputStyles}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="looking">I'm looking for one</option>
        </select>
      </FormField>

      <FormField
        label="If yes, would you like us to collaborate with them?"
        error={errors.accountantDetails}
        optional
      >
        <input
          {...register("accountantDetails")}
          className={inputStyles}
          placeholder="Accountant name or details (optional)..."
        />
      </FormField>

      <FormField
        label="Which services are you looking for?"
        error={errors.servicesNeeded as FieldError | undefined}
        optional
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SERVICES_OPTIONS.map((service) => (
            <label
              key={service}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-brand-lavender/30 p-2.5 text-sm text-brand-navy transition-colors has-[:checked]:border-brand-sage has-[:checked]:bg-brand-sage/10"
            >
              <input
                type="checkbox"
                value={service}
                {...register("servicesNeeded")}
                className="rounded border-brand-lavender text-brand-sage focus:ring-brand-sage"
              />
              {service}
            </label>
          ))}
        </div>
      </FormField>
    </div>
  );
}
