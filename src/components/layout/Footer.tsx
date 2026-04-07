import Link from "next/link";
import Container from "@/components/shared/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy pb-8 pt-20">
      {/* Decorative top curve */}
      <div className="absolute -top-1 left-0 right-0 h-16 bg-brand-cream" style={{ clipPath: "ellipse(55% 100% at 50% 0%)" }} />

      {/* Background blobs */}
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-brand-lavender opacity-[0.04] blur-3xl" />
      <div className="absolute -left-20 top-1/2 h-48 w-48 rounded-full bg-brand-sage opacity-[0.04] blur-3xl" />

      <Container className="relative">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-700 text-white">
              Grey Owl
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/50">
              Education-first bookkeeping for small businesses and non-profits.
              We don&apos;t just do your books — we help you understand them.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink
                href="#"
                label="Facebook"
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              />
              <SocialLink
                href="#"
                label="Instagram"
                d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a1 1 0 110-2 1 1 0 010 2z"
              />
              <SocialLink
                href="#"
                label="LinkedIn"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
              Get in Touch
            </h4>
            <a
              href="mailto:hello@greyowlbookkeeping.com"
              className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
            >
              hello@greyowlbookkeeping.com
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Wisdom. Guidance. Clarity.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  d,
}: {
  href: string;
  label: string;
  d: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/40 transition-all duration-300 hover:border-brand-sage/30 hover:text-brand-sage"
    >
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </a>
  );
}
