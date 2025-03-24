import { Helmet } from "react-helmet-async";
import BackToTopButton from "@/youtube-views-components/BackToTopButton";
import FloatingButton from "@/youtube-views-components/FloatingButton";
import Footer from "@/youtube-views-components/Footer";
import Navigation from "@/youtube-views-components/Navigation";
import Testimonials from "@/recensioni/Testimonials";
import CTA from "@/recensioni/CTA";

const Recensioni = () => {
  return (
    <>
      <Helmet>
        <title>
        Rcensioni
        </title>
        <meta
          name="description"
          content="Rcensioni"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main className="min-h-screen bg-background flex flex-col mt-12">
        <Navigation />
        <Testimonials/>
        <CTA />
        <FloatingButton />
        <BackToTopButton />
        <Footer />
      </main>
    </>
  );
};

export default Recensioni;
