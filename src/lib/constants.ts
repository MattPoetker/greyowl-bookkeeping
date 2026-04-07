export const SITE_NAME = "Grey Owl Bookkeeping";
export const SITE_DESCRIPTION =
  "Stress-free bookkeeping for small businesses and non-profits. Save on QuickBooks with our Pro Advisor discounts.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/personal-tax", label: "Personal Tax" },
  { href: "/questionnaire", label: "Get Started" },
] as const;

export const SERVICES = [
  {
    title: "Bookkeeping",
    description:
      "Accurate, timely bookkeeping so you always know where your business stands financially.",
    icon: "book",
  },
  {
    title: "Payroll",
    description:
      "Reliable payroll processing to keep your team paid on time, every time.",
    icon: "users",
  },
  {
    title: "Tax Preparation",
    description:
      "Expert personal tax prep for individuals — no surprises, just savings.",
    icon: "calculator",
  },
  {
    title: "Cleanup & Catch-Up",
    description:
      "Behind on your books? We'll get everything organized and up to date.",
    icon: "refresh",
  },
  {
    title: "Budgeting & Forecasting",
    description:
      "Plan ahead with clear financial projections and actionable budgets.",
    icon: "chart",
  },
  {
    title: "Software Setup",
    description:
      "We'll set up and optimize your QuickBooks — and save you money with our Pro Advisor discounts.",
    icon: "monitor",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Executive Director, Bright Futures Non-Profit",
    quote:
      "Heather transformed our financial chaos into clarity. For the first time in years, our board has confidence in our numbers. She didn't just do our books — she taught us how to read them.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Owner, Johnson's Landscaping",
    quote:
      "I was drowning in receipts and spreadsheets. Heather took it all off my plate and even saved us money on software. Now I can focus on growing my business instead of worrying about the books.",
    rating: 5,
  },
  {
    name: "Linda Chen",
    role: "Founder, Chen's Bakery & Cafe",
    quote:
      "What I love most is that Heather actually explains things. I finally understand my P&L and feel empowered to make better decisions for my business. Worth every penny.",
    rating: 5,
  },
] as const;
