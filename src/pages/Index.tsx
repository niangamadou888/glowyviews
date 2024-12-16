import { useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import FAQIntro from "@/components/FAQIntro";
import FinalConsiderations from "@/components/FinalConsiderations";
import Navigation from "@/components/Navigation";
import WhyBuyViews from "@/components/WhyBuyViews";
import BuySteps from "@/components/BuySteps";
import Footer from "@/components/Footer";
import OtherText from "@/components/OtherText";
import FloatingButton from "@/components/FloatingButton";
import BackToTopButton from "@/components/BackToTopButton";
import YouTubeViewsInfo from "@/components/YouTubeViewsInfo";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div className="reveal-on-scroll">
        <Features />
      </div>
      <div className="reveal-on-scroll">
        <WhyBuyViews />
      </div>
      <div className="reveal-on-scroll">
        <YouTubeViewsInfo />
      </div>
      <div className="reveal-on-scroll">
        <BuySteps />
      </div>
      <div className="reveal-on-scroll">
        <OtherText />
      </div>
      <div className="reveal-on-scroll">
        <FAQIntro />
      </div>
      <div className="reveal-on-scroll">
        <FAQ />
      </div>
      <div className="reveal-on-scroll">
        <FinalConsiderations />
      </div>
      <FloatingButton />
      <BackToTopButton />
      <Footer />
    </main>
  );
};

export default Index;