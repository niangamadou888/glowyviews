import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Navigation from "@/components/Navigation";
import WhyBuyViews from "@/components/WhyBuyViews";
import BuySteps from "@/components/BuySteps";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <WhyBuyViews />
      <BuySteps />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;