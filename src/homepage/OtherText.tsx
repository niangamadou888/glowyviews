import { motion, useScroll, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

interface Section {
  title: string;
  content: string[];
  image: {
    src: string;
    alt: string;
  };
}

const SECTIONS: Section[] = [
  {
    title: "Tutti i servizi della nostra Agenzia",
    content: [
      'Come vedi, copriamo con successo le maggiori piattaforme attualmente utilizzate in Italia (e non solo, ovviamente).',
      'Che tu ne utilizzi solo una, piuttosto che un paio o persino tutte, non importa. Da noi di GlowLikes trovi tutti gli strumenti necessari per far crescere qualsiasi pagina in tutta sicurezza.',
      'Inoltre, offriamo diversi tipi di personalizzazione, a cominciare dall"area geografica di provenienza (Italia o internazionali) e dalla tipologia (da noi ci sono pure interazioni prodotte da account reali verificati).',
      
    ],
    image: {
      src: "/Comprare Views YouTube_dopo quanto tempo arrivano_ no background.png",
      alt: "Comprare Views YouTube_dopo quanto tempo arrivano",
    },
  },
  {
    title: "YouTube",
    content: [
      "YouTube è una delle piattaforme più utilizzate in Italia. Attualmente supera i 50 milioni di utenti mensili e i suoi programmi di monetizzazione sono tra i più ambiti.",
      "Noi di GlowLikes ti diamo la possibilità di incrementare drasticamente la media delle interazioni organiche, ma anche di raggiungere i requisiti richiesti per accedere al programma di partnership grazie a cui monetizzare i tuoi contenuti."
    ],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "Instagram",
    content: [
    "Sfrondare su Instagram come influencer partendo da zero? È difficile ma, al tempo stesso, è più che fattibile.",
    "In special modo se ti avvali dei nostri servizi con cui otterrai visibilità e autorevolezza in tempi rapidi. Siamo tutti d'accordo che i suoi algoritmi siano piuttosto “severi”.",
    "Tuttavia, dopo mesi e mesi di monitoraggio, abbiamo constatato che i nostri servizi non vengono mai individuati. Con GlowLikes di pure addio ai cali e allo Shadow Ban!"
  ],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "TikTok",
    content: [
    "TikTok è letteralmente “esploso” nel giro di pochissimo tempo, specialmente qui in Italia. Nonostante sia uno dei social network più “giovani”, nel giro di una manciata di anni è riuscito a raggiungere la quota di oltre 20 milioni di utenti mensili.",
    "Uno dei suoi punti di forza? La “viralità” improvvisa che possono acquisire determinati video! “Cavalca” gli algoritmi e diventa popolare grazie alle nostre interazioni social efficaci e di altissima qualità."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Telegram",
    content: [
    "Nonostante sia un social network “di nicchia”, anche Telegram sta vivendo la sua “epoca d'oro”. Da semplice app di messaggistica, è divenuta presto una piattaforma in cui condividere liberamente diverse tipologie di contenuti.",
    "Nell'ultimo periodo, poi, ha lanciato il suo programma di monetizzazione e ulteriori servizi ancora, come la propria personale criptovaluta e il servizio wallet."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Spotify",
    content: [
    "Sei un artista? Allora sai benissimo quanto difficile sia promuoversi al giorno d'oggi, specie quando si parte zero e senza alcun aiuto da parte di manager, etichette discografiche e via dicendo.",
    "Ecco perché abbiamo deciso di includere anche i servizi destinati a Spotify. Vogliamo dare a tutti l'opportunità di crescere e di acquisire la popolarità che meritano.",
    "Anche in questo caso, chiaramente, puoi contare sulle nostre interazioni social geo-targettizzate, pensate appositamente per il nostro mercato italiano."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "X (ex Twitter)",
    content: [
    "Dopo l'ultimo cambio di gestione, X (il social inizialmente conosciuto come “Twitter”) si sta distinguendo dalle altre piattaforme per via della grande libertà di espressione garantita ai rispettivi utenti.",
    "Non importa quale sia la tua nicchia, in questo social media puoi tranquillamente trattare persino i topic più “spinosi”.",
    "Detto ciò, la nuova amministrazione ha dichiarato guerra ai bot: senza dubbio, un motivo in più per scegliere le nostre interazioni impossibili da rilevare."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "LinkedIn",
    content: [
    "Al giorno d'oggi non puoi non avere un account LinkedIn! Poco importa che tu sia un lavoratore dipendente, piuttosto che un libero professionista (anche freelancer) o il titolare di un'attività.",
    "Il tuo account professionale potrebbe aprirti nuove ed interessanti opportunità, a patto che risulti visibile.",
    "Stai cercando lavoro o hai bisogno di trovare collaboratori? Espandi la tua rete di contatti ed incrementa la tua autorevolezza grazie ai nostri servizi mirati che eroghiamo nel giro di qualche ora."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
];

const renderContent = (content: string[]) => {
  return content.map((paragraph, idx) => {
    // Convert markdown-style bold to JSX
    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
    const rendered = parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    return (
      <p key={idx} className="text-lg text-white/90 mb-4">
        {rendered}
      </p>
    );
  });
};

const ContentSection = ({
  section,
  index,
  progress,
}: {
  section: Section;
  index: number;
  progress: MotionValue<number>;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Always use useSpring, but configure it differently for mobile
  const smoothSectionProgress = useSpring(sectionProgress, {
    damping: isMobile ? 100 : 20,
    stiffness: isMobile ? 300 : 80,
    mass: isMobile ? 0.1 : 0.2,
    restDelta: isMobile ? 0.01 : 0.001
  });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 1, y: 0 }}
      className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 relative ${
        isEven ? "pl-8" : "pr-8"
      }`}
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform, opacity'
      }}
    >
      {/* Path animation optimization */}
      <div className={`absolute ${isEven ? "left-0" : "right-0"} top-0 h-[104%] w-full`}>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 50 103"
          preserveAspectRatio="none"
          className={`absolute ${isEven ? "left-0" : "right-0"} top-0`}
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          <motion.path
            d={
              typeof window !== "undefined" && window.innerWidth < 768
                ? `M${isEven ? "0" : "50"} 0 L${isEven ? "0" : "50"} 103 L${
                    isEven ? "25" : "25"
                  } 103`
                : `M${isEven ? "0" : "50"} 0 L${isEven ? "0" : "50"} 101 L${
                    isEven ? "25" : "25"
                  } 101`
            }
            fill="none"
            strokeWidth="0.5"
            stroke="url(#gradient)"
            strokeLinecap="round"
            strokeMiterlimit="1"
            strokeLinejoin="round"
            style={{
              opacity: smoothSectionProgress,
              pathLength: smoothSectionProgress,
              transform: 'translateZ(0)',
              willChange: 'opacity, strokeDashoffset'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Content sections with optimized image loading */}
      <div className={`flex-1 ${!isEven ? "md:order-2" : ""}`}>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          {section.title}
        </motion.h2>
        {renderContent(section.content)}
      </div>

      <div className={`flex-1 ${!isEven ? "md:order-1" : ""}`}>
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </motion.div>
  );
};

const OtherText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="space-y-24">
        {SECTIONS.map((section, index) => (
          <ContentSection
            key={index}
            section={section}
            index={index}
            progress={new MotionValue()} // Placeholder since we're not using the global progress anymore
          />
        ))}
      </div>
    </section>
  );
};

export default OtherText;
