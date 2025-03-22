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
            "name": "Iscritti YouTube Reali e Italiane",
            "description": "Compra Iscritti YouTube reali e italiani al 100%, a partire da solo 0,53 €. Incrementa la tua popolarità senza pensieri con iscritti qualità top. Prova ora!",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "0.53",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://glowlikes.it/comprare-iscritti-youtube"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "16",
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
                  "name": "Luca"
                },
                "reviewBody": "In passato ho comprato visualizzazioni e like, ma niente follower, non mi sono mai fidato. Per curiosità ne ho ordinati 500 da GlowLikes e devo ammettere che sono rimasto colpito dalla loro qualità. Sembrano veri! 👍👍"
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
                  "name": "Johnny_x76"
                },
                "reviewBody": "Bella raga! Finalmente un sito che vende roba seria e non le solite porcherie che si trovano in giro! 1000 iscritti YouTube (di ottima qualità) arrivati in meno di mezza giornata. Sto già programmando il prossimo ordine!"
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
                  "name": "Enrico"
                },
                "reviewBody": "Buongiorno, se può essere di aiuto a qualcun altro volevo confermare che questa agenzia rispetta tutte le condizioni di vendita che propone. Ottima qualità e tempi di consegna decisamente veloci 👏."
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
                  "name": "Giada93"
                },
                "reviewBody": "L’altro giorno ho fatto un ordine ma, controllando, notavo che la situazione era rimasta invariata. Ho contattato lo Staff e mi ha risposto che c’erano i server in aggiornamento. Poco male, hanno rimediato nel giro di un paio d’ore con 20 follower YouTube extra."
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
                  "name": "Maverick"
                },
                "reviewBody": "Di solito lavoro in modo organico, però ogni tanto qualche follower YouTube ci sta tutto. Niente di che, ne ho comprati 100. Beh, sicuramente di ottima qualità e in grado di ingannare anche l’occhio più attento 😉."
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
                  "name": "Andrea"
                },
                "reviewBody": "Per quelli che sono i miei standard si potrebbe fare di meglio. Nulla da dire sulla qualità e sui tempi di consegna. Secondo me, però, il prezzo è un po’ altino. Do 3 stelle, in attesa che i costi diventino più competitivi."
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
                  "name": "Vale Social"
                },
                "reviewBody": "Non ero convinta… ho sempre pensato che comprare iscritti non fosse buono per l’algoritmo. Però devo dire che GlowLikes mi ha fatto cambiare idea. Servizio veloce e iscritti che sembrano reali. Ottimo per dare una spintarella al mio nuovo canale!"
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
                  "name": "MrTech88"
                },
                "reviewBody": "Super professionali! Avevo bisogno di 500 iscritti per un nuovo canale e loro hanno fatto il lavoro in tempi record. Risultato? Primo video con oltre 2,000 views 🔥🔥. Consigliatissimi per chi lavora nel digitale."
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
                  "name": "Carmelo"
                },
                "reviewBody": " Devo essere sincera: quando ho visto che l’ordine tardava un pochino, stavo già scrivendo una recensione negativa 😅. Poi però mi hanno ricontattata subito e hanno risolto il problema e inviato iscritti extra."
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
                  "name": "Z3N_Gamer"
                },
                "reviewBody": "Amo quando le cose funzionano senza intoppi. Ordinati 1000 iscritti per il mio canale gaming e in 8 ore erano già tutti lì. Complimenti a GlowLikes 💪"
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
                  "name": "LolloY"
                },
                "reviewBody": "Mah… nel complesso bene, ma secondo me c’è ancora margine di miglioramento sui tempi. Però il servizio clienti è stato top e mi hanno pure omaggiato di qualche follower extra."
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
                  "name": "Sara & Marco"
                },
                "reviewBody": "Abbiamo testato diversi servizi ma GlowLikes ha una marcia in più. Ottima comunicazione, velocità e soprattutto iscritti che non scompaiono il giorno seguente…"
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
                  "name": "Manu K"
                },
                "reviewBody": "Tutto perfetto, ma... ci starebbe un piccolo omaggio per i clienti affezionati 😉. Ho già fatto tre ordini e ogni volta servizio impeccabile. Se abbassate un pochino i prezzi vi sposo!"
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
                  "name": "Il Diario Web"
                },
                "reviewBody": "Soddisfatto al 90%. Ho preso like e iscritti per il canale di un mio cliente e il boost iniziale è stato ottimo. Solo una cosa: se aggiungeste un’opzione per la consegna più lenta, sarebbe perfetto!"
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
                  "name": "Edoardo"
                },
                "reviewBody": "Dovevo presentare un report ai miei sponsor e il mio engagement era bassino... Ho ordinato like views e iscritti e nel giro di poche ore i numeri sono migliorati. Nessuno si è accorto di nulla 😉"
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
                  "name": "Fra"
                },
                "reviewBody": "Sono nel marketing da anni e raramente mi sbilancio così: questi ragazzi sanno cosa fanno! Consigliati."
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
            <span className="mb-2 text-center whitespace-normal md:whitespace-nowrap">Comprare iscritti YouTube:</span>
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
          Vuoi acquistare iscritti YouTube? Bene, ma è importante farlo nel modo corretto. Noi di GlowLikes offriamo iscritti YouTube 100% reali e da profili italiani, a prezzi più che accessibili. Acquista subito iscritti in modo sicuro, discreto e anonimo tramite la nostra agenzia.
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
              A partire da 0.53 €
            </span>
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            
            <span className="font-semibold">4.8</span>
            <span className="text-white mx-1">•</span>
            <span className="text-white">
              <a href="#testimonials" onClick={handleScrollToTestimonials}>16 recensioni</a>
            </span>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;