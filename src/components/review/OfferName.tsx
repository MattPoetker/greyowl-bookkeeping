// The offer's name, styled as a badge wherever the review is promoted.
export default function OfferName({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-sans font-700 tracking-tight text-brand-navy ${className}`}
    >
      <span className="-rotate-2 rounded-lg bg-brand-coral-dark px-2.5 py-0.5 text-white shadow-[0_4px_14px_rgba(181,74,66,0.3)]">
        FREE
      </span>
      Bookkeeping Review
    </span>
  );
}
