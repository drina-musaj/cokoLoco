import HeroSection from "@/components/HeroSection";
import Mood from "@/components/Mood"
import Attention from "@/components/Attention";
import Treats from "@/components/Treats";

export default function Home() {
  return (
   <main>
      <HeroSection />
      <Mood />
      <Attention />
      <Treats />
    </main>
  );
}
