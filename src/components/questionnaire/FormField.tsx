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
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-brand-navy/80">
        {label}
        {optional && (
          <span className="ml-1.5 text-xs font-normal text-brand-navy/30">
            optional
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error.message}</p>
      )}
    </div>
  );
}

export const inputStyles =
  "w-full rounded-xl border border-brand-navy/[0.08] bg-brand-cream/50 px-4 py-3 text-[15px] text-brand-navy placeholder:text-brand-navy/25 focus:border-brand-sage focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-sage/20 transition-all duration-200";

export const selectStyles =
  "w-full rounded-xl border border-brand-navy/[0.08] bg-brand-cream/50 px-4 py-3 text-[15px] text-brand-navy focus:border-brand-sage focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-sage/20 transition-all duration-200";
