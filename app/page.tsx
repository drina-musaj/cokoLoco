import HeroSection from "@/components/HeroSection";
import Mood from "@/components/Mood";
import Attention from "@/components/Attention";
import Activity from "@/components/Activity";
import Treats from "@/components/Treats";
import CareSummary from "@/components/CareSummary";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Attention />
      <Mood />
      <Activity />
      <Treats />
      <CareSummary />
    </main>
  );
}