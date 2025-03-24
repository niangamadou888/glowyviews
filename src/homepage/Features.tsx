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
      className="pt-16 md:pt-32 pb-20 px-6 relative overflow-hidden"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`p-8 backdrop-blur-sm transition-all duration-300 ease-in-out relative
                ${
                  hoveredIndex === index
                    ? "bg-primary/5 border-primary/50 shadow-2xl shadow-primary/30 scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-primary/5 before:to-primary/0 before:animate-glow"
                    : "bg-secondary/50 border-primary/20 hover:border-primary/40"
                }`}
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
              <div
                className={`relative z-10 transition-all duration-300 ${
                  hoveredIndex === index
                    ? "scale-110 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                    : ""
                }`}
              >
                <Player
                  ref={(el) => (playerRefs.current[index] = el)}
                  icon={feature.icon || feature.iconUrl}
                  size={48}
                />
              </div>
              <h3
                className={`relative z-10 text-xl font-semibold mb-4 transition-all duration-300
                ${
                  hoveredIndex === index
                    ? "text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                    : ""
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`relative z-10 transition-all duration-300
                ${
                  hoveredIndex === index
                    ? "text-primary/90 drop-shadow-[0_0_4px_rgba(var(--primary),0.3)]"
                    : "text-muted-foreground"
                }`}
              >
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Features;
