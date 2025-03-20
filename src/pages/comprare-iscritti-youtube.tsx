import { Helmet } from 'react-helmet-async';
import Features from "@/comprare-iscritti-youtube/Features";
import Hero from "@/comprare-iscritti-youtube/Hero";
import Testimonials from "@/comprare-iscritti-youtube/Testiomonials";
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

const ComprareIscritti = () => {
  return (
    <>
      <Helmet>
        <title>Comprare Iscritti YouTube - 100% reali e italiani - Solo 0,53 €</title>
        <meta
          name="description"
          content="Compra Iscritti YouTube reali e italiani al 100%, a partire da solo 0,53 €. Incrementa la tua popolarità senza pensieri con iscritti qualità top. Prova ora!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/comprare-iscritti-youtube" />
      </Helmet>
      <main className="min-h-screen">
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <Features />
        <WhyBuyViews />
        <DoveComprare />
        <YouTubeViewsInfo />
        <BuySteps />
        <OtherText />
        <FAQIntro />
        <FAQ />
        <FinalConsiderations />
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