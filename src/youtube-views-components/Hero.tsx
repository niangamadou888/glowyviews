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
            "name": "Visualizzazioni YouTube Reali e Italiane",
            "description": "Compra visualizzazioni YouTube reali e italiane al 100%, partendo da solo 0,52 €. Incrementa la tua popolarità senza pensieri con visualizzazioni top quality.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "0.52",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://glowlikes.it/comprare-visualizzazioni-youtube"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
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
                  "name": "Marco"
                },
                "reviewBody": "Ho comprato 2000 visualizzazioni YouTube e sono rimasto stupito dalla qualita'. Nessun calo, consegna rapida e tutto questo nonostante i prezzi bassi, che mi rendevano un po' diffidente inizialmente."
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
                  "name": "Gianni"
                },
                "reviewBody": "Ho provato diverse agenzie, ma erano tutte piuttosto lente. Invece, le visualizzazioni YouTube che ho comprato qui mi sono arrivate nel giro di poche ore e nella quantità esatta che avevo ordinato. Top!"
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
                  "name": "Chris"
                },
                "reviewBody": "Salve, volevo raccontare la mia esperienza. Ho acquistato 10mila visualizzazioni TikTok per il profilo della mia attività e il servizio ha superato le mie aspettative. Tempi di consegna super veloci e nessuna perdita di interazioni. Consigliato!"
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
                  "name": "Jack84"
                },
                "reviewBody": "Ho ordinato 5000 visualizzazioni, peccato però che ne mancavano una cinquantina. Ho contattato lo Staff e nel giro di pochissimo tempo mi sono arrivate anche quelle che mancavano. Tutto sommato un buon servizio."
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
                  "name": "Alessia"
                },
                "reviewBody": "All’inizio era scettica perché non avevo mai acquistato servizi del genere. Mi sono fidata, ho acquistato 3000 visualizzazioni YouTube e sono arrivate nei tempi previsti. Da oggi GlowLikes sarà il mio fornitore ufficiale!"
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
                  "name": "Carlos"
                },
                "reviewBody": "Peccato per i prezzi 😔 se fossero un po’ più bassi avrei comprato sicuramente più views YouTube. Sono d’accordo che la qualità si paga, ma credo si potrebbe fare di meglio in termini di rapporto qualità/prezzo."
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
                  "name": "Silvio"
                },
                "reviewBody": "Ho un canale YouTube aperto da poco, ma con le visualizzazioni YouTube che ho acquistato l’altro ieri ho subito notato un miglioramento delle performance. In futuro tornerò senz’altro per dei nuovi ordini!"
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
                  "name": "Antonio Roma"
                },
                "reviewBody": "Ho provato visualizzazioni da altri siti prima, ma per me quelle di GlowViews sono le migliori. Rapide, economiche e senza cali. Inoltre supporto rapido quando serve 🙂"
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
                  "name": "Gio Gaming"
                },
                "reviewBody": "Uso le views italiane da google ads, partono un po dopo ma a parte questo, ottima qualità. Ricevo anche like e iscritti!"
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
                  "name": "Simone Di Luca"
                },
                "reviewBody": "Visualizzazioni YuoTube che finalmente sono senza cali e rapide. Tuttavia una volta l’ordine non è partito e ho dovuto aspettare 12 ore perché si sbloccasse. "
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
                  "name": "Cronache Milano"
                },
                "reviewBody": "Uso GlowLikes per tutti i nuovi video, servizio sempre eccellente. Views e likes che partono quasi subito e da utenti italiani reali. I miei video poi continuano a ottenere views per diversi giorni."
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
                  "name": "Samu"
                },
                "reviewBody": "Comprato 1,000 visualizzazioni, consegna senza problemi e con un generoso extra. Consigliati!"
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
            <span className="mb-2 text-center whitespace-normal md:whitespace-nowrap">Comprare Visualizzazioni YouTube:</span>
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
          Se stai cercando di acquistare visualizzazioni YouTube, e' importante farlo nel modo giusto. Noi di glowlikes offriamo Visualizzazioni YouTube 100% reali e da profili italiani, a prezzi accessibili. Acquista subito visualizzazioni in modo sicuro e confidenziale tramite la nostra piattaforma.
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
            <span className="px-3 mx-3 py-2 mt-4 text-sm font-semibold bg-gradient-to-r from-primary/20 to-primary/10 rounded-md border border-primary/30 shadow-sm flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              A partire da 0,52 €
            </span>
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-semibold ml-1">4.7</span>
              <span className="text-white mx-1">•</span>
              <span className="text-white/70 font-normal">
                <a href="#testimonials" onClick={handleScrollToTestimonials}>12 recensioni</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;