import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import SoftwareSavings from "@/components/home/SoftwareSavings";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SoftwareSavings />
      <Testimonials />
      <CTABanner />
    </>
  );
}
