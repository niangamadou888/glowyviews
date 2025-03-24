import { Helmet } from 'react-helmet-async';
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Hero from '@/homepage/Hero';
import Features from '@/homepage/Features';
import CTA from '@/homepage/CTA';
import FAQIntro from '@/homepage/FAQIntro';
import FAQ from '@/homepage/FAQ';
import BuySteps from '@/homepage/BuySteps';
import WhyBuyViews from '@/homepage/WhyBuyViews';
import YouTubeViewsInfo from '@/homepage/YouTubeViewsInfo';
import DoveComprare from '@/homepage/DoveComprare';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Acquista Follower e Like per Instagram, TikTok e YouTube e molto altro. Consegnati in pochi minuti!</title>
        <meta
          name="description"
          content="Non accontentarti di interazioni bot. GlowLikes ti offre follower, like e visualizzazioni da utenti reali, consegnati all'istante. Ai prezzi più bassi sul mercato."
        />
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
        <FAQIntro/>
        <FAQ/>
        <CTA />
        <FloatingButton />
        <BackToTopButton />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;