import CoinPricing from "@/components/Home/CoinPricing";
import CTASection from "@/components/Home/CTASection";
import Hero from "@/components/Home/Hero";
import TopInstructors from "@/components/Home/TopInstructor";
import WorkStep from "@/components/Home/WorkStep";

export default function Home() {
  return (
    <div className="min-h-screen px-5 ">
      <Hero />
      <WorkStep />
      <TopInstructors />
      <CoinPricing />
      <CTASection />
    </div>
  );
}
