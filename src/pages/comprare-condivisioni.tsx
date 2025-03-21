import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import CTA from "@/youtube-views-components/CTA";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Hero from "@/comprare-condivisioni/Hero";
import Features from "@/comprare-condivisioni/Features";
import Testimonials from "@/comprare-condivisioni/Testiomonials";
import FinalConsiderations from "@/comprare-condivisioni/FinalConsiderations";
import WhyBuyViews from "@/comprare-condivisioni/WhyBuyViews";
import DoveComprare from "@/comprare-condivisioni/DoveComprare";
import YouTubeViewsInfo from "@/comprare-condivisioni/YouTubeViewsInfo";
import OtherText from "@/comprare-condivisioni/OtherText";

const ComprareCondivisioni = () => {
  return (
    <>
      <Helmet>
        <title>
        Comprare condivisioni YouTube - 100% reali e italiane - Solo 0,41 €
        </title>
        <meta
          name="description"
          content="Compra Condivisioni YouTube reali e italiane al 100%, a partire da solo 0,41 €. Incrementa la tua popolarità senza pensieri con interazioni di qualità. Prova ora!"
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
        <OtherText/>
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

export default ComprareCondivisioni;
