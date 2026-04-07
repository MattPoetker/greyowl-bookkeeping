import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
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
    "bg-brand-navy text-white hover:bg-brand-navy-light",
  secondary:
    "bg-brand-sage text-brand-navy hover:opacity-90",
  outline:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
  const styles = `inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

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
