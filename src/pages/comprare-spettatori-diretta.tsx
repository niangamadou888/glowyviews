import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import CTA from "@/youtube-views-components/CTA";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Hero from "@/comprare-spetattori-diretta/Hero";
import Features from "@/comprare-spetattori-diretta/Features";
import Testimonials from "@/comprare-spetattori-diretta/Testiomonials";

const ComprareSpetattoriDiretta = () => {
  return (
    <>
      <Helmet>
        <title>
        Comprare Spettatori Diretta YouTube - 100% reali e italiani - Solo 0,53 €
        </title>
        <meta
          name="description"
          content="Compra Spettatori Diretta YouTube reali e italiani al 100%, a partire da solo 0,53 €. Incrementa la tua popolarità senza pensieri con spettatori di qualità. Prova ora!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main className="min-h-screen">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <Features />
        <Testimonials/>
        <CTA />
        <FloatingButton />
        <BackToTopButton />
        <Footer />
      </main>
    </>
  );
};

export default ComprareSpetattoriDiretta;
