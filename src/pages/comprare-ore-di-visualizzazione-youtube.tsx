import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Hero from "@/comprare-ore-di-visualizzazione-youtube/Hero";
import Features from "@/comprare-ore-di-visualizzazione-youtube/Features";
import Testimonials from "@/comprare-ore-di-visualizzazione-youtube/Testiomonials";
import FinalConsiderations from "@/comprare-ore-di-visualizzazione-youtube/FinalConsiderations";
import BuySteps from "@/comprare-ore-di-visualizzazione-youtube/BuySteps";
import WhyBuyViews from "@/comprare-ore-di-visualizzazione-youtube/WhyBuyViews";
import DoveComprare from "@/comprare-ore-di-visualizzazione-youtube/DoveComprare";
import YouTubeViewsInfo from "@/comprare-ore-di-visualizzazione-youtube/YouTubeViewsInfo";
import OtherText from "@/comprare-ore-di-visualizzazione-youtube/OtherText";
import CTA from "@/comprare-ore-di-visualizzazione-youtube/CTA";

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
        <WhyBuyViews/>
        <DoveComprare/>
        <YouTubeViewsInfo/>
        <BuySteps/>
        <OtherText/>
        <FinalConsiderations/>
        <Testimonials />
        <CTA />
        <FloatingButton />
        <BackToTopButton />
        <Footer />
      </main>
    </>
  );
};

export default ComprareOre;
