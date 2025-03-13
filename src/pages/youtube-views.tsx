import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import BuySteps from "@/youtube-views-components/BuySteps";
import CTA from "@/youtube-views-components/CTA";
import DoveComprare from "@/youtube-views-components/DoveComprare";
import FAQ from "@/youtube-views-components/FAQ";
import FAQIntro from "@/youtube-views-components/FAQIntro";
import Features from "@/youtube-views-components/Features";
import FinalConsiderations from "@/youtube-views-components/FinalConsiderations";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Hero from "@/youtube-views-components/Hero";
import Navigation from "@/youtube-views-components/Navigation";
import OtherText from "@/youtube-views-components/OtherText";
import Testimonials from "@/youtube-views-components/Testimonials";
import WhyBuyViews from "@/youtube-views-components/WhyBuyViews";
import YouTubeViewsInfo from "@/youtube-views-components/YouTubeViewsInfo";
import { useEffect } from "react";

const YoutubeViews = () => {
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
        <DoveComprare />
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
      <div className="reveal-on-scroll">
        <Testimonials />
      </div>
      <div className="reveal-on-scroll">
        <CTA />
      </div>
      <FloatingButton />
      <BackToTopButton />
      <Footer />
    </main>
  );
};

export default YoutubeViews;