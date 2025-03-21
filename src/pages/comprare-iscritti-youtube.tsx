import { Helmet } from "react-helmet-async";
import Features from "@/comprare-iscritti-youtube/Features";
import Hero from "@/comprare-iscritti-youtube/Hero";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import CTA from "@/youtube-views-components/CTA";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Testimonials from "@/comprare-iscritti-youtube/Testiomonials";
import FinalConsiderations from "@/comprare-iscritti-youtube/FinalConsiderations";
import BuySteps from "@/comprare-iscritti-youtube/BuySteps";
import WhyBuyViews from "@/comprare-iscritti-youtube/WhyBuyViews";
import DoveComprare from "@/comprare-iscritti-youtube/DoveComprare";
import YouTubeViewsInfo from "@/comprare-iscritti-youtube/YouTubeViewsInfo";
import OtherText from "@/comprare-iscritti-youtube/OtherText";
import FinalConsiderations2 from "@/comprare-iscritti-youtube/FinalConsiderations2";

const ComprareIscritti = () => {
  return (
    <>
      <Helmet>
        <title>
          Comprare Iscritti YouTube - 100% reali e italiani - Solo 0,53 €
        </title>
        <meta
          name="description"
          content="Compra Iscritti YouTube reali e italiani al 100%, a partire da solo 0,53 €. Incrementa la tua popolarità senza pensieri con iscritti qualità top. Prova ora!"
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
        <FinalConsiderations2/>
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

export default ComprareIscritti;
