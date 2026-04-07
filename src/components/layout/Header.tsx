"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <OwlIcon />
          <span className="font-heading text-xl font-bold text-white">
            Grey Owl Bookkeeping
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const isGetStarted = link.label === "Get Started";
            return isGetStarted ? (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-brand-sage px-5 py-2 font-semibold text-brand-navy transition-opacity hover:opacity-90"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-sage"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function OwlIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="text-brand-sage"
    >
      <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.2" />
      <circle cx="12" cy="14" r="3" fill="currentColor" />
      <circle cx="20" cy="14" r="3" fill="currentColor" />
      <circle cx="12" cy="13.5" r="1.5" fill="#21204c" />
      <circle cx="20" cy="13.5" r="1.5" fill="#21204c" />
      <path
        d="M14 20 L16 22 L18 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8 L12 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 8 L20 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
