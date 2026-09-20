import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Cause from "@/components/sections/cause";
import Impact from "@/components/sections/impact";
import Testimonials from "@/components/sections/testimonials";
import Plans from "@/components/sections/plans";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-between">
        <Hero />
        <Testimonials />
        <Cause />
        <Impact />
        <Plans />
        <Footer />
      </main>
    </>
  );
}
