"use client";

import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

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

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-navy/50"
        onClick={onClose}
        style={{ animation: "fadeIn 0.2s ease" }}
      />

      {/* Panel */}
      <div
        className="absolute right-0 top-0 flex h-full w-72 flex-col bg-[#f5f0ff] p-8 shadow-2xl"
        style={{ animation: "fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <button
          className="mb-10 self-end rounded-lg p-2 text-brand-navy/40 transition-colors hover:bg-brand-lavender/10 hover:text-brand-navy"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                className="mt-4 rounded-full bg-brand-navy px-6 py-3 text-center font-semibold text-white shadow-[0_2px_12px_rgba(33,32,76,0.2)]"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-3 font-heading text-lg font-500 transition-colors ${
                  isActive
                    ? "bg-brand-lavender/15 text-brand-navy"
                    : "text-brand-navy/50 hover:bg-brand-lavender/10 hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-brand-lavender/20 pt-6">
          <p className="text-xs text-brand-navy/25">
            Grey Owl Bookkeeping
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
