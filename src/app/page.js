import Hero from "@/components/sections/hero";
import Cause from "@/components/sections/cause";
import Impact from "@/components/sections/impact";
import Plans from "@/components/sections/plans";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Hero />
      <Cause />
      <Impact />
      <Plans />
      <Footer />
    </main>
  );
}
