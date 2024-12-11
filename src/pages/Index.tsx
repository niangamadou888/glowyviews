import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Navigation from "@/components/Navigation";
import WhyBuyViews from "@/components/WhyBuyViews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <WhyBuyViews />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;