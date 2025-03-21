import { Helmet } from 'react-helmet-async';
import { Button } from "@/youtube-views-components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
import "lord-icon-element";
import qualityIcon from "../assets/icons/wired-flat-489-rocket-space-hover-flying.json";
import { Star } from "lucide-react";
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
            "name": "Like YouTube Reali e Italiane",
            "description": "Compra like YouTube reali e italiani al 100%, a partire da solo 0,49 €. Incrementa la tua popolarità senza pensieri con like di alta qualità. Prova ora!",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "0.49",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://glowlikes.it/comprare-like-youtube"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.5",
              "reviewCount": "12",
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
                  "name": "Francesco"
                },
                "reviewBody": "Chi lavora sui social sa benissimo quanto sia importante affidarsi ad un’ottima agenzia di SMM. Con GlowLikes mi sono trovato da dio! 20mila like recapitati in mezza giornata e niente cali! Grazie davvero 🙏"
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
                  "name": "Luka_34"
                },
                "reviewBody": "Lo ammetto senza problemi: questa non è la prima agenzia che provo. A differenza delle altre, però, questa mantiene le promesse e non ti fa trovare brutte sorprese 💪. Ho già effettuato 2 ordini e la prossima settimana vado con la terza buttata di like YouTube."
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
                  "name": "Anthony"
                },
                "reviewBody": "5000 Mi Piace YouTube ad un costo accettabile. L’unica pecca? Ho dovuto contattare lo staff perché ne mancavano circa 200. Fortunatamente, l’assistenza mi ha risolto il problema alla svelta. Non il top del top, ma comunque un’agenzia valida."
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
                  "name": "Marta"
                },
                "reviewBody": "Ho già provato a comprare Mi Piace YouTube, prendendo “bidoni”. GlowLikes, però, lavora con la massima professionalità. Come mi sono trovata con l’ultimo ordine? Benissimo! Ne farò altri? Certamente! 😉"
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
                  "name": "Davis"
                },
                "reviewBody": "Un servizio nella norma, tutto sommato. Nulla di speciale. Ammetto che i Mi Piace YouTube sono di ottima qualità perché non causano cali. Ad ogni modo, trovo che siano un po’ caretti data la media di mercato."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "3",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "author": {
                  "@type": "Person",
                  "name": "Pablo"
                },
                "reviewBody": "Riconosco la buona volontà di GlowLikes, però non sono super soddisfatto del servizio. La qualità è buona, ma i tempi di consegna sono troppo lunghi. C’erano problemi con il server, quindi ho dovuto sollecitare lo Staff."
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
                  "name": "Michael"
                },
                "reviewBody": "Non posso che lasciare il massimo! I like YouTube che ho comprato sono arrivati precisi e puntuali. Sicuramente tornerò per ordinare ancora, anche per gli altri miei social. Ottimo anche il contatore che mi permette di monitorare l’ordine in tempo reale."
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
                  "name": "Nik"
                },
                "reviewBody": "Soddisfatto ma si poteva fare di meglio. Su 10mila like comprati ne mancavano una ventina. Vabbè, poco male, dato che cmq me li hanno consegnati dopo aver contattato l’assistenza. Magari un po’ più di attenzione ai dettagli."
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
                  "name": "Leo Vlog"
                },
                "reviewBody": " Non pensavo potessero fare la differenza, ma quei 100 like che ho acquistato hanno dato una bella spinta al mio video. Investimento ripagato alla grande!"
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
                  "name": "A Tutto Chiara"
                },
                "reviewBody": "Like arrivati in tempi rapidi e ben distribuiti, niente di strano nello Studio di YouTube. Servizio utile per migliorare la reputazione dei contenuti all’inizio, quando il video è ancora poco conosciuto. Sicuramente tornerò a usarli!"
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
                  "name": "Andrea Rinaldi"
                },
                "reviewBody": "Ordine da 500 like su un trailer del mio corto indipendente. Tutto liscio e senza scossoni, anzi, ho notato anche un piccolo aumento organico subito dopo. Forse effetto placebo? Chi lo sa, ma funziona :D"
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
                  "name": "MarikaVibes"
                },
                "reviewBody": "Tutto bene ma... mi aspettavo un po’ più di rapidità. Like arrivati, ma la consegna ha richiesto un giorno e mezzo. Nulla di grave, però me lo aspettavo più veloce. "
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
            <span className="mb-2 text-center whitespace-normal md:whitespace-nowrap">Comprare Like YouTube:</span>
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
          Vuoi acquistare Like YouTube? Bene, ma è importante farlo nel modo corretto. Noi di GlowLikes offriamo Like YouTube 100% reali e da profili italiani, a prezzi più che accessibili. Acquista subito like in modo sicuro, discreto e anonimo tramite la nostra agenzia.
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
          <span className="px-3 mx-3 py-1 text-sm font-semibold bg-gradient-to-r from-primary/20 to-primary/10 rounded-md border border-primary/30 shadow-sm">
              A partire da 0,49 €
            </span>
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.5</span>
            <span className="text-white mx-1">•</span>
            <span className="text-white">
              <a href="#testimonials" onClick={handleScrollToTestimonials}>12 recensioni</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;