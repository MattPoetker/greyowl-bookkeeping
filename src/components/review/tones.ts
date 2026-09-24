import type { IconName } from "./ReviewIcon";

// The four sections of the one-page review report, in the order they appear.
export type Tone = "good" | "attention" | "flag" | "fix";

export const TONE_ORDER: Tone[] = ["good", "attention", "flag", "fix"];

export const TONES: Record<
  Tone,
  {
    label: string;
    icon: IconName;
    chip: string;
    iconColor: string;
    bar: string;
    soft: string;
  }
> = {
  good: {
    label: "What's looking good",
    icon: "check",
    chip: "bg-brand-sage/30",
    iconColor: "text-brand-navy/70",
    bar: "border-brand-sage",
    soft: "bg-brand-sage-light",
  },
  attention: {
    label: "What needs attention",
    icon: "attention",
    chip: "bg-brand-yellow",
    iconColor: "text-brand-navy/70",
    bar: "border-brand-yellow-deep",
    soft: "bg-brand-yellow-light",
  },
  flag: {
    label: "Red flags",
    icon: "flag",
    chip: "bg-brand-coral-light",
    iconColor: "text-brand-coral-dark",
    bar: "border-brand-coral",
    soft: "bg-brand-coral-light/70",
  },
  fix: {
    label: "Your 3 fixes",
    icon: "wrench",
    chip: "bg-brand-lavender/40",
    iconColor: "text-brand-navy/70",
    bar: "border-brand-lavender",
    soft: "bg-brand-lavender-light",
  },
};
