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
    name: "Megan Kropp",
    role: "Owner, Sparkling Homes",
    quote:
      "We have been using Grey Owl Bookkeeping for over two years now, and it's been a game-changer for scaling our cleaning business. Heather is amazingly gifted at organizing our books, allowing us to stay on target and move toward our goals. Heather is responsive, knowledgeable, and always willing to explain things in simple terms.",
    rating: 5,
  },
  {
    name: "Robin McMillin",
    role: "Director, Total Freedom Ministries",
    quote:
      "I've had the pleasure to partner with Heather and Grey Owl Bookkeeping for three years now. She is genuinely good at what she does and always has a helpful attitude. If you're looking for a bookkeeper who really understands the numbers and cares about her clients, I highly recommend Heather.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Executive Director, Bright Futures Non-Profit",
    quote:
      "Heather transformed our financial chaos into clarity. For the first time in years, our board has confidence in our numbers. She didn't just do our books — she taught us how to read them.",
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
