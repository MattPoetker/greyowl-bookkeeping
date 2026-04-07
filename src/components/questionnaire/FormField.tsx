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
      <label className="mb-2 block text-sm font-medium text-brand-navy/70">
        {label}
        {optional && (
          <span className="ml-1.5 text-xs font-normal text-brand-navy/25">
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
  "w-full rounded-xl border border-brand-lavender/30 bg-brand-eggshell/50 px-4 py-3 text-[15px] text-brand-navy placeholder:text-brand-navy/20 focus:border-brand-lavender focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-lavender/20 transition-all duration-200";

export const selectStyles =
  "w-full rounded-xl border border-brand-lavender/30 bg-brand-eggshell/50 px-4 py-3 text-[15px] text-brand-navy focus:border-brand-lavender focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-lavender/20 transition-all duration-200";
