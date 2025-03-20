import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import BuySteps from "@/youtube-views-components/BuySteps";
import CTA from "@/youtube-views-components/CTA";
import DoveComprare from "@/youtube-views-components/DoveComprare";
import FAQ from "@/youtube-views-components/FAQ";
import FAQIntro from "@/youtube-views-components/FAQIntro";
import FinalConsiderations from "@/youtube-views-components/FinalConsiderations";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import OtherText from "@/youtube-views-components/OtherText";
import WhyBuyViews from "@/youtube-views-components/WhyBuyViews";
import YouTubeViewsInfo from "@/youtube-views-components/YouTubeViewsInfo";
import Hero from "@/comprare-ore-di-visualizzazione-youtube/Hero";
import Features from "@/comprare-ore-di-visualizzazione-youtube/Features";
import Testimonials from "@/comprare-ore-di-visualizzazione-youtube/Testiomonials";

const ComprareOre = () => {
  return (
    <>
      <Helmet>
        <title>
          Comprare Ore di Visualizzazione YouTube - 100% reali e italiane - Solo
          0,47 €
        </title>
        <meta
          name="description"
          content="Compra Ore di Visualizzazione YouTube reali e italiane al 100%, a partire da solo 0,47 €. Incrementa la tua popolarità senza pensieri con interazioni top qualità. Prova ora!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main className="min-h-screen">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <Features />
        <CTA />
        <FloatingButton />
        <BackToTopButton />
        <Footer />
      </main>
    </>
  );
};

export default ComprareOre;
