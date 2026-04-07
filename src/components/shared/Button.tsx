import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variantStyles = {
  primary:
    "bg-brand-navy text-white shadow-[0_4px_20px_rgba(33,32,76,0.25)] hover:shadow-[0_6px_28px_rgba(33,32,76,0.35)] hover:-translate-y-0.5",
  secondary:
    "bg-brand-sage text-brand-navy shadow-[0_4px_16px_rgba(200,206,142,0.4)] hover:shadow-[0_6px_24px_rgba(200,206,142,0.5)] hover:-translate-y-0.5",
  outline:
    "border-2 border-brand-navy/20 text-brand-navy hover:border-brand-navy hover:bg-brand-navy hover:text-white",
  ghost:
    "text-brand-navy hover:bg-brand-navy/5",
};

const sizeStyles = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-[15px]",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300 ease-out ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
