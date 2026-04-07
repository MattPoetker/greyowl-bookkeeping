import Link from "next/link";
import Container from "@/components/shared/Container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-navy py-12 text-white/80">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              {SITE_NAME}
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-lavender">
              Education-first bookkeeping for small businesses and non-profits.
              We don&apos;t just do your books — we help you understand them.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-sage">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-sage">
              Connect
            </h4>
            <div className="flex gap-4">
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
            <p className="mt-4 text-sm">
              <a
                href="mailto:hello@greyowlbookkeeping.com"
                className="transition-colors hover:text-white"
              >
                hello@greyowlbookkeeping.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
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
      className="text-white/60 transition-colors hover:text-brand-sage"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </a>
  );
}
