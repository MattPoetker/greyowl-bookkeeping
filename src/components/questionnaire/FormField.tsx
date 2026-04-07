import { type FieldError } from "react-hook-form";

export default function FormField({
  label,
  error,
  children,
  optional = false,
}: {
  label: string;
  error?: FieldError;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <div className="mb-5">
      <label className="mb-1.5 block text-sm font-medium text-brand-navy">
        {label}
        {optional && (
          <span className="ml-1 text-xs font-normal text-brand-navy/40">
            (optional)
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
}

export const inputStyles =
  "w-full rounded-xl border border-brand-lavender/50 bg-white px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/30 focus:border-brand-sage focus:outline-none focus:ring-2 focus:ring-brand-sage/30 transition-colors";

export const selectStyles =
  "w-full rounded-xl border border-brand-lavender/50 bg-white px-4 py-2.5 text-sm text-brand-navy focus:border-brand-sage focus:outline-none focus:ring-2 focus:ring-brand-sage/30 transition-colors";
