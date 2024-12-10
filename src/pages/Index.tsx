import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FAQ />
    </main>
  );
};

export default Index;