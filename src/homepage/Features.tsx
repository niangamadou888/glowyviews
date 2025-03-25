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
      <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            Benvenuto nel nostro store online in cui troverai <strong>Like, Follower, Views</strong> e molti altri servizi ancora per i tuoi canali social su <strong>YouTube, Instagram, TikTok, Facebook, Telegram, Spotify, X e LinkedIn.</strong>
            <br />
            Siamo l'agenzia italiana numero 1 specializzata nella fornitura di <strong>interazioni social di alta qualità e specificatamente ideate per il nostro mercato nazionale.</strong>
          </p>

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
