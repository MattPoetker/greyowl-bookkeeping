"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-[0_2px_20px_rgba(212,194,239,0.25)] backdrop-blur-md"
          : "bg-brand-lavender-light/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <OwlLogo />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-700 leading-tight text-brand-navy">
              Grey Owl
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand-navy/40">
              Bookkeeping
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const isGetStarted = link.label === "Get Started";
            return isGetStarted ? (
              <Link
                key={link.href}
                href={link.href}
                className="ml-4 rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(33,32,76,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(33,32,76,0.3)]"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-brand-navy"
                    : "text-brand-navy/50 hover:text-brand-navy"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-brand-sage" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="relative h-10 w-10 rounded-lg text-brand-navy transition-colors hover:bg-brand-lavender/20 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="absolute left-2.5 top-3 h-0.5 w-5 rounded-full bg-current transition-transform" />
          <span className="absolute left-2.5 top-[18px] h-0.5 w-3.5 rounded-full bg-current" />
          <span className="absolute bottom-3 left-2.5 h-0.5 w-5 rounded-full bg-current transition-transform" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function OwlLogo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className="transition-transform duration-300 group-hover:scale-105"
    >
      {/* Body */}
      <ellipse cx="20" cy="22" rx="12" ry="14" fill="#d4c2ef" opacity="0.35" />
      <ellipse cx="20" cy="22" rx="10" ry="12" fill="#d4c2ef" opacity="0.25" />

      {/* Ear tufts */}
      <path d="M10 10 L14 16 L8 15Z" fill="#c8ce8e" opacity="0.5" />
      <path d="M30 10 L26 16 L32 15Z" fill="#c8ce8e" opacity="0.5" />

      {/* Eyes */}
      <circle cx="15" cy="19" r="4.5" fill="#d4c2ef" opacity="0.5" />
      <circle cx="25" cy="19" r="4.5" fill="#d4c2ef" opacity="0.5" />
      <circle cx="15" cy="19" r="2.5" fill="#21204c" />
      <circle cx="25" cy="19" r="2.5" fill="#21204c" />
      <circle cx="16" cy="18" r="0.8" fill="white" opacity="0.8" />
      <circle cx="26" cy="18" r="0.8" fill="white" opacity="0.8" />

      {/* Beak */}
      <path d="M18 24 L20 27 L22 24" fill="#c8ce8e" opacity="0.7" />

      {/* Chest */}
      <ellipse cx="20" cy="30" rx="5" ry="4" fill="#f3c0f2" opacity="0.12" />
    </svg>
  );
}
