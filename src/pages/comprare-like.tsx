import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Hero from "@/comprare-like/Hero";
import Features from "@/comprare-like/Features";
import Testimonials from "@/comprare-like/Testiomonials";
import FinalConsiderations from "@/comprare-like/FinalConsiderations";
import BuySteps from "@/comprare-like/BuySteps";
import WhyBuyViews from "@/comprare-like/WhyBuyViews";
import DoveComprare from "@/comprare-like/DoveComprare";
import YouTubeViewsInfo from "@/comprare-like/YouTubeViewsInfo";
import FinalConsiderations2 from "@/comprare-like/FinalConsiderations2";
import OtherText from "@/comprare-like/OtherText";
import CTA from "@/comprare-like/CTA";

const ComprareLike = () => {
  return (
    <>
      <Helmet>
        <title>
        Comprare Like YouTube - 100% reali e italiani - Solo 0,49 €
        </title>
        <meta
          name="description"
          content="Compra like YouTube reali e italiani al 100%, a partire da solo 0,49 €. Incrementa la tua popolarità senza pensieri con like di alta qualità. Prova ora!"
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
        <Testimonials/>
        <CTA />
        <FloatingButton />
        <BackToTopButton />
        <Footer />
      </main>
    </>
  );
};

export default ComprareLike;
