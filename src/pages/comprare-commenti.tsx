import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import CTA from "@/youtube-views-components/CTA";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Hero from "@/comprare-commenti/Hero";
import Features from "@/comprare-commenti/Features";
import Testimonials from "@/comprare-commenti/Testiomonials";

const ComprareCommenti = () => {
  return (
    <>
      <Helmet>
        <title>
        Comprare Commenti YouTube - 100% reali e italiani - Solo 0,61 €
        </title>
        <meta
          name="description"
          content="Compra Commenti YouTube reali e italiani al 100%, a partire da solo 0,61 €. Incrementa la tua popolarità senza pensieri con Commenti di  qualità. Prova ora!"
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

export default ComprareCommenti;
