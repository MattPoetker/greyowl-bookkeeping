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
      <h2 className="mb-2 font-heading text-2xl font-700 text-brand-navy">
        Services & support
      </h2>
      <p className="mb-8 text-sm text-brand-navy/40">What kind of help are you looking for?</p>

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
              className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-brand-navy/[0.06] bg-brand-cream/30 p-3 text-sm text-brand-navy/70 transition-all duration-200 has-[:checked]:border-brand-sage/40 has-[:checked]:bg-brand-sage/[0.06] has-[:checked]:text-brand-navy"
            >
              <input
                type="checkbox"
                value={service}
                {...register("servicesNeeded")}
                className="rounded border-brand-navy/15 text-brand-sage focus:ring-brand-sage/30"
              />
              {service}
            </label>
          ))}
        </div>
      </FormField>
    </div>
  );
}
