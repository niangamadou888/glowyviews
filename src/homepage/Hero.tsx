import { Helmet } from 'react-helmet-async';
import { Button } from "@/youtube-views-components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
import "lord-icon-element";
import { Star, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import icon2 from "../assets/icons/wired-outline-458-goal-target-hover-hit.json";
import icon3 from "../assets/icons/wired-flat-457-shield-security-hover-pinch.json";
import icon5 from "../assets/icons/wired-flat-2601-speed-hover-pinch.json";
import qualityIcon from "../assets/icons/wired-flat-489-rocket-space-hover-flying.json";
import icon7 from "../assets/icons/wired-flat-1368-best-seller-hover-pinch.json";
import iconLogin from "../assets/icons/wired-outline-2129-login-hover-pinch.json";
import iconRegister from "../assets/icons/wired-outline-307-avatar-icon-calm-plus-hover-click.json";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const playerRef = useRef<Player | null>(null);

  const labelIcons = [icon5, icon3, icon7, icon2];

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

  const labels = ["Consefna instantanea", "100% Sicuro", "Prezzi imbattibili", "Marketing italiano "];
  const playerRefs = useRef<Array<Player | null>>(labels.map(() => null));

  useEffect(() => {
    playerRefs.current.forEach((ref) => {
      ref?.playFromBeginning();
    });
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Acquista Follower e Like per Instagram, TikTok e YouTube e molto altro. Consegnati in pochi minuti!",
            "description": "Non accontentarti di interazioni bot. GlowLikes ti offre follower, like e visualizzazioni da utenti reali, consegnati all'istante. Ai prezzi più bassi sul mercato.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "0.32",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://glowlikes.it/"
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
      <div className="relative pt-16 sm:pt-0  min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-500/30 animate-pulse" />
        </div>

        {/* Main content */}
        <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-32 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}>
          <h1 className="text-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight inline-flex items-center justify-center">
              Acquista Follower e Like per Instagram, TikTok e YouTube e molto altro. <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">Consegnati in pochi minuti!</span>
              <div className="ml-2">
                <Player ref={playerRef} icon={qualityIcon} size={60} onComplete={() => playerRef.current?.playFromBeginning()} />
              </div>
            </span>
          </h1>

          {/* Feature labels */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 mb-6 sm:mb-8">
            {labels.map((label, index) => (
              <span
                key={index}
                className="px-4 sm:px-6 py-2 text-sm sm:text-base font-medium bg-white/10 backdrop-blur-xl 
                rounded-xl border border-white/20 text-white 
                shadow-[0_0_30px_rgba(124,58,237,0.2)] 
                hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] 
                hover:border-purple-500/50 
                hover:scale-105 
                transition-all duration-300 flex items-center"
                onMouseEnter={() => playerRefs.current[index]?.playFromBeginning()}
                onMouseLeave={() => playerRefs.current[index]?.pause()}
              >
                <div className="inline-flex items-center mr-2 scale-75 sm:scale-100">
                  <Player
                    ref={(el) => (playerRefs.current[index] = el)}
                    icon={labelIcons[index]}
                    size={24}
                  />
                </div>
                {label}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
          Non accontentarti di interazioni bot. GlowLikes ti offre follower, like e visualizzazioni da utenti reali, consegnati all'istante. Ai prezzi più bassi sul mercato.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Link to="https://app.glowlikes.it/">
              <Button 
                size="lg" 
                className="glow bg-primary hover:bg-primary/90 text-white text-[20px] md:animate-[bounce_2s_ease-in-out_infinite] flex items-center gap-2"
                style={{ transform: 'translateZ(0)' }}
              >
                  <Player icon={iconRegister} size={28} />
                Iscriviti gratis
              </Button>
            </Link>
            <Link to="https://app.glowlikes.it/">
              <Button 
                size="lg" 
                className="glow bg-primary hover:bg-primary/90 text-white text-[20px] md:animate-[bounce_1s_ease-in-out_infinite] flex items-center gap-2"
                style={{ transform: 'translateZ(0)' }}
              >
                <Player icon={iconLogin} size={28} />
                Accedi
              </Button>
            </Link>
          </div>

          {/* Rating Section */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-white/90">
            <span className="px-3 mx-3 py-2 mt-4 sm:mt-0 text-sm font-semibold bg-gradient-to-r from-primary/20 to-primary/10 rounded-md border border-primary/30 shadow-sm flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              A partire da 0,32 € <span className="text-white/70 font-normal ml-2">
            per 1000
              </span>
            </span>
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="font-semibold ml-1">4.8</span>
              <span className="text-white mx-1">•</span>
              <span className="text-white/70 font-normal">
                <a href="/recensioni">100+ recensioni</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;