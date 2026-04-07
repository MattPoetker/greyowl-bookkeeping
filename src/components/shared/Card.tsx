export default function Card({
  children,
  accentColor = "brand-lavender",
  className = "",
}: {
  children: React.ReactNode;
  accentColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border-t-4 border-${accentColor} bg-white p-6 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
