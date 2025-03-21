import { Card } from "@/youtube-views-components/ui/card";
import "lord-icon-element";
import { AlertTriangle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
import growthIcon from "../assets/icons/wired-flat-12-layers-hover-slide.json";
import icon1 from "../assets/icons/wired-flat-760-review-hover-pinch.json";
import icon2 from "../assets/icons/wired-flat-2129-login-hover-pinch.json";
import icon3 from "../assets/icons/wired-flat-457-shield-security-hover-pinch.json";
import icon4 from "../assets/icons/wired-flat-981-consultation-hover-conversation.json";
import icon5 from "../assets/icons/wired-flat-2601-speed-hover-pinch.json";
import icon6 from "../assets/icons/wired-flat-955-demand-hover-click.json";
import icon7 from "../assets/icons/wired-flat-1368-best-seller-hover-pinch.json";

const Features = () => {
  const features = [
    {
      title: "CONSEGNA SUPER RAPIDA",
      description:
        "Se hai effettuato un ordine con noi, riceverai gli acquisti comprati nel giro di un paio d’ore.",
      iconUrl: icon7,
    },
    {
      title: "ORE DI VISUALIZZAZIONE ITALIANE",
      description:
        "Aumentano il grado di rilevanza tra il tuo canale e il tuo target. Inoltre, non vengono rilevate dagli algoritmi.",
      iconUrl: icon6,
    },
    {
      title: "ORE DI VISUALIZZAZIONE ALTA QUALITA’ Vs ORE DI VISUALIZZAZIONE REALI",
      description:
        "Le ore di visualizzazione di alta qualità provengono da account del tutto simili a quelli “genuini”. Quelle reali, invece, provengono da account verificati.",
      iconUrl: icon5,
    },
    {
      title: "SUPPORTO DEDICATO 24/7",
      description:
        "In caso di problemi, puoi sempre contare sul nostro Staff, raggiungibile tramite modulo di contatto, email, o apertura del ticket tramite la propria area personale.",
      iconUrl: icon4,
    },
    {
      title: "PAGAMENTI SICURI",
      description:
        "Ci serviamo dei sistemi crittografici più avanzati per rendere i nostri pagamenti a prova di attacco 'hacker'.",
      iconUrl: icon3,
    },
    {
      title: "NESSUNA RICHIESTA DI CREDENZIALI",
      description:
        "Comprare ore di visualizzazione YouTube da GlowLikes è estremamente sicuro perché non richiediamo password o altri codici personali.",
      iconUrl: icon2,
    },
    {
      title: "PERCHE’ COMPRARE ORE DI VISUALIZZAZIONE DI ALTA QUALITA’’",
      description:
        "Con le ore di visualizzazione YouTube di alta qualità nessuno noterà la tua strategia, nemmeno i tuoi reali follower.",
      icon: icon1,
    },
    {
      title: "CRESCITA ORGANICA A RISCHIO ZERO",
      description:
        "Comprare ore di visualizzazione YouTube su GlowLikes ti permette di crescere in modo organico e di non subire alcuna penalizzazione dalla piattaforma.",
      iconUrl: growthIcon,
    },
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
        <div className="mt-16" ref={avvertenzeRef}>
          <Card className="p-8 bg-destructive/10 border-destructive/20 relative">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                className={`stroke-red-600 fill-none ${isAvvertenzeVisible ? 'animate-border-draw' : ''}`}
                strokeWidth="3"
                rx="8"
                style={{
                  strokeDasharray: '400%',
                  strokeDashoffset: '-400%',
                  filter: 'drop-shadow(0 0 4px rgb(220 38 38))',
                }}
              />
            </svg>
            <div className="flex items-start gap-6 relative z-10">
              <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-4">AVVERTENZE</h3>
                <p className="text-muted-foreground">
                Comprare ore di visualizzazione YouTube su GlowLikes ti permette di crescere in modo organico e di non subire alcuna penalizzazione dalla piattaforma.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <p className="mt-16">
        Alcuni potrebbero sorridere all'idea di 
          <strong> comprare ore di visualizzazione YouTube </strong>perché, superficialmente, potrebbe apparire come un qualcosa da “sfigati”.<br />
        </p>
        <p className="mt-3">
        Può anche essere (in alcuni casi “patologici”) ma, date le numerose aziende che lavorano nel settore, 
          <strong> le cose stanno in modo ben diverso.</strong><br />
        </p>
        <p className="mt-3">
        No, non si tratta di un basso “espediente” ma, al contrario, 
          <strong> di una tecnica di Social Media Marketing </strong> di cui parleremo proprio in questa guida. <br />
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Features;
