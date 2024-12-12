import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import FAQIntro from "@/components/FAQIntro";
import FinalConsiderations from "@/components/FinalConsiderations";
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
      <FAQIntro />
      <FAQ />
      <FinalConsiderations />
      <Footer />
    </main>
  );
};

export default Index;