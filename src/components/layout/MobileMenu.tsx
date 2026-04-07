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

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: "fadeIn 0.2s ease" }}
      />

      {/* Panel */}
      <div
        className="fixed right-0 top-0 flex h-full w-72 flex-col bg-brand-navy p-8 shadow-2xl"
        style={{ animation: "fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <button
          className="mb-10 self-end rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg
            className="h-5 w-5"
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

        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const isGetStarted = link.label === "Get Started";
            return isGetStarted ? (
              <Link
                key={link.href}
                href={link.href}
                className="mt-4 rounded-full bg-brand-sage px-6 py-3 text-center font-semibold text-brand-navy shadow-[0_2px_12px_rgba(200,206,142,0.3)] transition-all duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 font-heading text-lg font-500 transition-colors ${
                  isActive
                    ? "bg-white/10 text-brand-sage"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="text-xs text-white/30">
            Grey Owl Bookkeeping
          </p>
        </div>
      </div>
    </div>
  );
}
