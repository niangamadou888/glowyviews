import { Card } from "@/youtube-views-components/ui/card";
import "lord-icon-element";
import { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
import icon2 from "../assets/icons/wired-flat-2129-login-hover-pinch.json";
import icon3 from "../assets/icons/wired-flat-457-shield-security-hover-pinch.json";
import icon4 from "../assets/icons/wired-flat-981-consultation-hover-conversation.json";
import icon5 from "../assets/icons/wired-flat-2601-speed-hover-pinch.json";
import icon6 from "../assets/icons/wired-flat-955-demand-hover-click.json";
import icon7 from "../assets/icons/wired-flat-1368-best-seller-hover-pinch.json";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "SERVIZI GEO-TARGETTIZZATI ",
      description:
        "Incrementa la tua crescita organica grazie ai nostri servizi pensati appositamente per l’Italia.",
      iconUrl: icon7,
    },
    {
      title: "CONSEGNE SUPER VELOCI",
      description:
        "Elaboriamo i tuoi ordini così velocemente che la consegna dei prodotti impiega solo poche ore.",
      iconUrl: icon6,
    },
    {
      title: "PREZZI IMBATTIBILI",
      description:
        "Attualmente siamo l’unica agenzia italiana che offre il miglior rapporto qualità/prezzo.",
      iconUrl: icon5,
    },
    {
      title: "ASSISTENZA 24/7",
      description:
        "In caso di problemi con i tuoi ordini, non temere. Puoi rivolgerti alla nostra assistenza in ogni momento.",
      iconUrl: icon4,
    },
    {
      title: "ESPERIENZA PLURIENNALE",
      description:
        "I servizi che ti offriamo sono il frutto di anni di studi e di esperienza nel Social Media Marketing.",
      iconUrl: icon3,
    },
    {
      title: "SICUREZZA A 360°",
      description:
        "Pagamenti crittografati, nessuna richiesta di credenziali e prodotti imbattibili che non fanno registrare cali.",
      iconUrl: icon2,
    }
  ];

  const playerRefs = useRef<Array<Player | null>>(features.map(() => null));
  const cardRefs = useRef<Array<HTMLDivElement | null>>(
    features.map(() => null)
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isAvvertenzeVisible, setIsAvvertenzeVisible] = useState(false);
  const avvertenzeRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Set up intersection observer for mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index === -1) return;

          if (entry.isIntersecting) {
            setHoveredIndex(index);
            // Removed animation playback for mobile
          } else {
            setHoveredIndex(null);
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  // Initial animation - only for desktop
  useEffect(() => {
    if (!isMobile) {
      playerRefs.current.forEach((ref) => {
        ref?.playFromBeginning();
      });
    }
  }, [isMobile]);

  // Set up intersection observer for AVVERTENZE section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAvvertenzeVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (avvertenzeRef.current) {
      observer.observe(avvertenzeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initial animation
  useEffect(() => {
    playerRefs.current.forEach((ref) => {
      ref?.playFromBeginning();
    });
  }, []);

  return (
    <section
      className="py-20 px-4 md:px-8 relative bg-gradient-to-b from-background to-background/80"
      id="features"
    >
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-24 group mb-10"
        >
          <div className="flex-1 relative p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl w-full">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 text-glow hover:animate-glow">
              Perché i nostri Like, Follower e Views sono i migliori
              </h2>

              {/* Mobile image section */}
              <div className="md:hidden mb-6 sm:mb-8">
                <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                    alt="Comprare Visualizzazioni YouTube_per quale motivo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Arrivati a questo punto, siamo sicuri che <strong> stai pensando: “Non siete mica gli unici, in giro ci sono anche altre agenzie... perché dovrei scegliere voi?”.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Assolutamente sì, al momento c'è una buona dose di offerta, ma... <strong> non sempre è tutto oro ciò che luccica! </strong> </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Prima di tutto, <strong> bisogna vedere cosa offrono e a che prezzo. </strong> In secondo luogo, poi, anche la qualità del servizio nel suo complesso ha la sua importanza.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Quindi, ecco i <strong> nostri punti forza che ci rendono unici </strong> in tutto e per tutto:</p>
            </div>
          </div>

          {/* Desktop image section */}
          <div className="flex-1 md:block">
            <div className="relative p-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl ring-1 ring-white/10 bg-black/20 backdrop-blur-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/30 animate-gradient" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary"></h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Benvenuto nel nostro store online in cui troverai <strong>Like, Follower, Views</strong> e molti altri servizi ancora per i tuoi canali social su <strong>YouTube, Instagram, TikTok, Facebook, Telegram, Spotify, X e LinkedIn.</strong>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Siamo l'agenzia italiana numero 1 specializzata nella fornitura di <strong>interazioni social di alta qualità e specificatamente ideate per il nostro mercato nazionale.</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group p-8 rounded-2xl border-none transition-all duration-500 ease-out
                ${
                  hoveredIndex === index
                    ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent transform -translate-y-2"
                    : "bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
                }
                backdrop-blur-lg hover:shadow-xl hover:shadow-primary/20`}
              onMouseEnter={() => {
                if (!isMobile) {
                  setHoveredIndex(index);
                  playerRefs.current[index]?.playFromBeginning();
                }
              }}
              onMouseLeave={() => {
                if (!isMobile) {
                  setHoveredIndex(null);
                }
              }}
            >
              <div className="flex flex-col space-y-6">
                <div
                  className={`relative transition-transform duration-300 group-hover:scale-110
                    ${hoveredIndex === index ? "animate-float" : ""}`}
                >
                  <Player
                    ref={(el) => (playerRefs.current[index] = el)}
                    icon={feature.icon || feature.iconUrl}
                    size={64}
                  />
                </div>
                <div className="space-y-4">
                  <h3
                    className={`text-2xl font-bold tracking-tight transition-colors duration-300
                      ${
                        hoveredIndex === index
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`leading-relaxed transition-colors duration-300
                      ${
                        hoveredIndex === index
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Updated decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2" />
      </div>
    </section>
  );
};

export default Features;
