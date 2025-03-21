import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import CTA from "@/youtube-views-components/CTA";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Hero from "@/comprare-ore-di-visualizzazione-youtube/Hero";
import Features from "@/comprare-ore-di-visualizzazione-youtube/Features";
import Testimonials from "@/comprare-ore-di-visualizzazione-youtube/Testiomonials";
import FinalConsiderations from "@/comprare-ore-di-visualizzazione-youtube/FinalConsiderations";

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
