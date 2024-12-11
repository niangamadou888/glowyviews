import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Navigation from "@/components/Navigation";
import WhyBuyViews from "@/components/WhyBuyViews";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <WhyBuyViews />
      <FAQ />
    </main>
  );
};

export default Index;