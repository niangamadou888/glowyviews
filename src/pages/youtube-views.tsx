import { Helmet } from 'react-helmet-async';
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import BuySteps from "@/youtube-views-components/BuySteps";
import CTA from "@/youtube-views-components/CTA";
import DoveComprare from "@/youtube-views-components/DoveComprare";
import FAQ from "@/youtube-views-components/FAQ";
import FAQIntro from "@/youtube-views-components/FAQIntro";
import Features from "@/youtube-views-components/Features";
import FinalConsiderations from "@/youtube-views-components/FinalConsiderations";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Hero from "@/youtube-views-components/Hero";
import Navigation from "@/youtube-views-components/Navigation";
import OtherText from "@/youtube-views-components/OtherText";
import Testimonials from "@/youtube-views-components/Testimonials";
import WhyBuyViews from "@/youtube-views-components/WhyBuyViews";
import YouTubeViewsInfo from "@/youtube-views-components/YouTubeViewsInfo";

const YoutubeViews = () => {
  return (
    <>
      <Helmet>
        <title>Comprare Visualizzazioni YouTube - 100% reali e italiane - Solo 0,52 €</title>
        <meta
          name="description"
          content="Compra visualizzazioni YouTube reali e italiane al 100%, partendo da solo 0,52 €. Incrementa la tua popolarità senza pensieri con visualizzazioni top quality. Prova ora!"
        />
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

export default YoutubeViews;