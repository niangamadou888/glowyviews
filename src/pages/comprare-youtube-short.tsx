import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import CTA from "@/youtube-views-components/CTA";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Hero from "@/comprare-youtube-short/Hero";
import Features from "@/comprare-youtube-short/Features";
import Testimonials from "@/comprare-youtube-short/Testiomonials";
import FinalConsiderations from "@/comprare-youtube-short/FinalConsiderations";
import BuySteps from "@/comprare-youtube-short/BuySteps";

const ComprareYoutubeShort = () => {
  return (
    <>
      <Helmet>
        <title>
        Comprare Visualizzazioni e Like YouTube Shorts - 100% reali e italiane - Solo 0,43 €
        </title>
        <meta
          name="description"
          content="Compra Visualizzazioni e Like YouTube Shorts reali e italiani al 100%, a partire da solo 0,43 €. Incrementa la tua popolarità senza pensieri con interazioni di qualità. Prova ora!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main className="min-h-screen">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <Features />
        <BuySteps/>
        <FinalConsiderations/>
        <Testimonials/>
        <CTA />
        <FloatingButton />
        <BackToTopButton />
        <Footer />
      </main>
    </>
  );
};

export default ComprareYoutubeShort;
