import { z } from "zod";

export const questionnaireSchema = z.object({
  // Step 1: About Your Business
  businessDescription: z
    .string()
    .min(1, "Please tell us about your business"),
  businessStructure: z.string().min(1, "Please select your business structure"),
  currentSystems: z.string().optional(),
  currentChallenges: z.string().optional(),

  // Step 2: Current Situation
  booksUpToDate: z.string().min(1, "Please select an option"),
  bankAccounts: z.string().optional(),
  reportFrequency: z.string().min(1, "Please select your preferred frequency"),

  // Step 3: Services & Support
  managesPayroll: z.string().optional(),
  payrollMethod: z.string().optional(),
  hasAccountant: z.string().optional(),
  accountantDetails: z.string().optional(),
  servicesNeeded: z.array(z.string()).optional(),

  // Step 4: Goals & Budget
  goals: z.string().optional(),
  budgetRange: z.string().optional(),
  monthlyTransactions: z.string().optional(),

  // Step 5: Operations
  multipleRevenueStreams: z.string().optional(),
  documentStorage: z.string().optional(),
  previousBookkeeper: z.string().optional(),
  previousExperience: z.string().optional(),

  // Step 6: Future & Contact
  growthPlans: z.string().optional(),
  openToNewSoftware: z.string().optional(),
  contactName: z.string().min(1, "Please enter your name"),
  contactEmail: z.string().email("Please enter a valid email address"),
  contactPhone: z.string().optional(),
  preferredContact: z.string().optional(),
});

export type QuestionnaireData = z.infer<typeof questionnaireSchema>;

export const BUSINESS_STRUCTURES = [
  "Sole Proprietor",
  "LLC",
  "S-Corporation",
  "C-Corporation",
  "Partnership",
  "Non-Profit",
  "Other",
] as const;

export const REPORT_FREQUENCIES = [
  "Monthly",
  "Quarterly",
  "Annually",
  "Not sure — help me decide",
] as const;

export const BUDGET_RANGES = [
  "Less than $500/month",
  "$500 – $1,000/month",
  "$1,000 – $2,000/month",
  "$2,000+/month",
  "Not sure yet",
] as const;

export const SERVICES_OPTIONS = [
  "Invoicing",
  "Bill Pay",
  "Budgeting",
  "Cleanup / Catch-Up",
  "Payroll",
  "Tax Preparation",
  "Financial Reporting",
  "Software Setup",
  "Other",
] as const;

export const STEP_TITLES = [
  "About Your Business",
  "Current Situation",
  "Services & Support",
  "Goals & Budget",
  "Operations",
  "Future & Contact",
] as const;
