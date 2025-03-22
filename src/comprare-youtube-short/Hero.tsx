import { Helmet } from 'react-helmet-async';
import { Button } from "@/youtube-views-components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
import "lord-icon-element";
import qualityIcon from "../assets/icons/wired-flat-489-rocket-space-hover-flying.json";
import { Star, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const playerRef = useRef<Player | null>(null);

  const handleScrollToTestimonials = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('testimonials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    setIsVisible(true);
    playerRef.current?.playFromBeginning();
  }, []);

  const labels = ["Prezzi Bassi", "Utenti Reali", "Senza Cali", "100% Sicuro"];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Visualizzazioni e Like YouTube Shorts Reali e Italiane",
            "description": "Compra Visualizzazioni e Like YouTube Shorts reali e italiani al 100%, a partire da solo 0,43 €. Incrementa la tua popolarità senza pensieri con interazioni di qualità. Prova ora!",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "0.43",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://glowlikes.it/comprare-visualizzazioni-e-like-youtube-shorts"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "5",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Aldo"
      },
      "reviewBody": "Di solito compravo da agenzie estere per via dei prezzi più bassi. Però in caso di problemi era dura interfacciarsi con l’assistenza. Poi ho scoperto questa agenzia italiana e ho deciso di fare una prova con 10mila views che sono arrivate precise."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Erik"
      },
      "reviewBody": "Concordo con le altre recensioni che leggo. È la terza volta compro 20mila like per gli Shorts ed è sempre andata benissimo. Provare altre agenzie? Anche no! Squadra che vince non si cambia! 😎 💪"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Nicola"
      },
      "reviewBody": "Salve a tutti, volevo fare i complimenti ai ragazzi di GlowLikes perché con le loro views e like non ho mai registrato nessun calo! Aspetto non scontato, visto che in passato ho avuto brutte esperienza. Continuate così! 🙏"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Louis"
      },
      "reviewBody": "Non per essere troppo pignolo ma se uno ordina 30mila like a uno short YouTube deve ricevere quel numero esatto. Nel mio caso ne mancavano 10, quindi nulla di grave. Però è una questione di serietà."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": "Giada"
      },
      "reviewBody": "Mi sono trovata benissimo perché ordinare visualizzazioni e like per gli Short YouTube è semplice e super veloce 🚀🚀 I prezzi più che accessibili e una vasta gamma di altri servizi niente male che sto già valutando."
    }
  ]
          })}
        </script>
      </Helmet>
      <div className="relative min-h-[94vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        
        {/* Optimized animated circles */}
        <div className={`absolute transition-all duration-700 ease-out will-change-transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} md:transition-all md:duration-700 hidden md:block`}
             style={{ transform: 'translateZ(0)' }}>
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
        </div>
        
        {/* Optimized content animations */}
        <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center md:transition-all md:duration-700 md:ease-out will-change-transform ${isVisible ? 'opacity-100 md:translate-y-0' : 'opacity-0 md:translate-y-8'}`}
             style={{ transform: 'translateZ(0)' }}>
          
          <h1 className="flex flex-col items-center justify-center text-4xl md:text-6xl font-bold mb-4 text-glow">
            <span className="mb-2 text-center whitespace-normal md:whitespace-nowrap">Comprare Visualizzazioni e Like YouTube Shorts:</span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent inline-flex items-center gap-2 transform hover:scale-105 transition-transform text-center">
              Italiane e Reali
              <Player
                ref={playerRef}
                icon={qualityIcon}
                size={50}
                onComplete={() => playerRef.current?.playFromBeginning()}
              />
            </span>
          </h1>
      
          {/* Micro Labels */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {labels.map((label, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md 
                rounded-full border border-white/20 text-white/90 
                shadow-[0_0_15px_rgba(255,255,255,0.1)] 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] 
                hover:border-white/30 
                hover:scale-105 
                hover:text-white 
                transition-all duration-300 ease-out
                flex items-center gap-2"
              >
                <Star className="w-3.5 h-3.5 text-primary/80" />
                {label}
              </span>
            ))}
          </div>
      
          <div className="flex justify-center mb-8">
          </div>
          
          <p className="text-[18px] md:text-[18px] text-white mb-10 max-w-3xl mx-auto">
          Vuoi acquistare visualizzazioni e like YouTube Shorts? Bene, ma è' importante farlo nel modo corretto. Noi di GlowLikes offriamo visualizzazioni e like YouTube Shorts 100% reali e da profili italiani, a prezzi più che accessibili. Acquista subito visualizzazioni e like YouTube Shorts in modo sicuro, discreto e anonimo tramite la nostra agenzia.
          </p>
      
          {/* Optimized button animation */}
          <Link to="https://app.glowlikes.it/">
            <Button 
              size="lg" 
              className="glow bg-primary hover:bg-primary/90 text-white text-[20px] md:animate-[bounce_2s_ease-in-out_infinite]"
              style={{ transform: 'translateZ(0)' }}
            >
              Inizia Ora
            </Button>
          </Link>
          {/* Rating Section */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-white/90">
          <span className="px-3 mx-3 py-2 mt-4 sm:mt-0 text-sm font-semibold bg-gradient-to-r from-primary/20 to-primary/10 rounded-md border border-primary/30 shadow-sm flex items-center">
          <Tag className="h-4 w-4 mr-1" />
              A partire da 0.43 €
            </span>
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            
            <span className="font-semibold">4.9</span>
            <span className="text-white mx-1">•</span>
            <span className="text-white/70 font-normal">
              <a href="#testimonials" onClick={handleScrollToTestimonials}>8 recensioni</a>
            </span>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;