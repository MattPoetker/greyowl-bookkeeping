"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-64 bg-brand-navy p-6 shadow-xl">
        <button
          className="mb-8 text-white"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const isGetStarted = link.label === "Get Started";
            return isGetStarted ? (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-brand-sage px-5 py-2 text-center font-semibold text-brand-navy"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium ${
                  isActive ? "text-brand-sage" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
