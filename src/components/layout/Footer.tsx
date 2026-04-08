import Link from "next/link";
import Container from "@/components/shared/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-lavender/15 pb-8 pt-20">
      {/* Background blobs */}
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-brand-pink opacity-[0.08] blur-3xl" />
      <div className="absolute -left-20 top-1/2 h-48 w-48 rounded-full bg-brand-sage opacity-[0.06] blur-3xl" />

      <Container className="relative">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-700 text-brand-navy">
              Grey Owl
            </h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-brand-navy/45">
              Education-first bookkeeping for small businesses and non-profits.
              We don&apos;t just do your books — we help you understand them.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink
                href="https://www.facebook.com/greyowlbookkeeping"
                label="Facebook"
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              />
              <SocialLink
                href="https://www.instagram.com/greyowl_bookkeeping"
                label="Instagram"
                d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm3.5-6.5a1 1 0 110-2 1 1 0 010 2z"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/40">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-navy/45 transition-colors duration-300 hover:text-brand-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/40">
              Get in Touch
            </h4>
            <a
              href="mailto:info@greyowlbookkeeping.com"
              className="text-sm text-brand-navy/45 transition-colors duration-300 hover:text-brand-navy"
            >
              info@greyowlbookkeeping.com
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand-navy/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-brand-navy/25">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-brand-navy/15">
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-navy/[0.08] text-brand-navy/30 transition-all duration-300 hover:border-brand-lavender hover:text-brand-navy"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </a>
  );
}
