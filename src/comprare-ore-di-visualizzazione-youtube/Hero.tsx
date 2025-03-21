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
            "name": "Ore di Visualizzazione YouTube Reali e Italiane",
            "description": "Compra Ore di Visualizzazione YouTube reali e italiane al 100%, a partire da solo 0,47 €. Incrementa la tua popolarità senza pensieri con interazioni top qualità. Prova ora!",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "0.47",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://glowlikes.it/comprare-ore-di-visualizzazione-youtube"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "9",
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
                  "name": "Adriano"
                },
                "reviewBody": "Sono sempre stato convinto che la chiave di tutto è e rimane il lavoro organico. Tuttavia, il mio canale stava andando a picco, così ho comprato un po’ di ore di visualizzazione YouTube per smuovere le acque. Vediamo come va."
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
                  "name": "Rick"
                },
                "reviewBody": "Ho conosciuto GlowLikes per caso e devo dire che è stata una bella sorpresa. Sono anni che bazzico in questo settore e non è facile trovare agenzie serie e competenti. 3000 ore di visualizzazioni arrivate in un solo pomeriggio 🔝🔝"
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
                  "name": "Martin"
                },
                "reviewBody": "Ore di visualizzazione YouTube ad un prezzo più che vantaggioso 😉! Ne ho ordinate 5000 e sono arrivate prima del previsto. Tra l’altro non ho riscontrato nessun calo, quindi significa che sono davvero ottime interazioni 👍."
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
                  "name": "Irina"
                },
                "reviewBody": "Ottimo servizio anche per chi vive all’estero! 😍😍 Ero convinta che la distanza potesse essere un problema. Era solo una mia paranoia, visto che ho ricevuto 6000 ore di visualizzazioni YouTube secondo i tempi dichiarati."
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
                  "name": "Alex92"
                },
                "reviewBody": "Ciao gente! Se può essere d’aiuto lascio anche la mia recensione. Nel complesso è un servizio di tutto rispetto, però consiglierei di velocizzare i tempi di consegna, dato che ho dovuto aspettare quasi 1 giorni intero per 7000 ore di visualizzazione."
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
                  "name": "Giova Official"
                },
                "reviewBody": "Avevo bisogno di un boost rapido per raggiungere le 4000 ore e sbloccare la monetizzazione… Beh, missione compiuta! Ho preso 4500 ore da GlowLikes e sono arrivate spalmate su pochi giorni. Ora finalmente ho l’AdSense attivo 🤑 Grazie ragazzi!"
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
                  "name": "Veronica"
                },
                "reviewBody": "Ammetto che ero titubante… avevo paura di penalizzazioni da YouTube. Invece è andato tutto liscio, nessuna anomalia e le ore sono stabili e il canale monetizzato. "
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
                  "name": "SimoneYT"
                },
                "reviewBody": "Ho testato GlowLikes per curiosità: 2000 ore acquistate e arrivate nei tempi. Nulla da dire sulla qualità, ma forse si potrebbe lavorare un po’ meglio sull’assistenza clienti, che in chat ha risposto dopo quasi un giorno."
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
                  "name": "AlessandroFX"
                },
                "reviewBody": " Finalmente qualcuno che mantiene le promesse! Ero stanco di servizi che promettono ore di visualizzazione e poi serve contattare diverse volte per ricordare che mancano ore. GlowLikes invece ha inviato tutte le ore e più al primo tentativo!"
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
            <span className="mb-2 text-center whitespace-normal md:whitespace-nowrap">Comprare Ore di Visualizzazione YouTube:</span>
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
          Vuoi acquistare ore di visualizzazione YouTube? Bene, ma è importante farlo nel modo corretto. Noi di GlowLikes offriamo ore di visualizzazione YouTube 100% reali e da profili italiani, a prezzi più che accessibili. Acquista subito ore di visualizzazione in modo sicuro, discreto e anonimo tramite la nostra agenzia.
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
              A partire da 0.47 €
            </span>
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.6</span>
            <span className="text-white mx-1">•</span>
            <span className="text-white">
              <a href="#testimonials" onClick={handleScrollToTestimonials}>9 recensioni</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;