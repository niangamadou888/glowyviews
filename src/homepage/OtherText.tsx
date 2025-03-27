import { motion, useScroll, useSpring, MotionValue } from "framer-motion";
import React from "react";
import { useRef } from "react";

// Add service labels configuration
import {
  FaYoutube,
  FaInstagram,
  FaSpotify,
  FaFacebook,
  FaTiktok,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


type ServiceConfig = {
  label: string;
  link: string;
  icon?: React.ComponentType<{ size?: number }>;  // Add size prop type
  color?: string;
};

const SERVICE_LABELS: { [key: string]: ServiceConfig[] } = {
  "Tutti i servizi della nostra Agenzia": [
    { label: "Youtube", link: "", icon: FaYoutube, color: "#FF0000" },
    { label: "Instagram", link: "", icon: FaInstagram, color: "#E4405F" },
    { label: "Spotify", link: "", icon: FaSpotify, color: "#1DB954" },
    { label: "X", link: "", icon: BsTwitterX, color: "#FFFFFF" },
    { label: "Facebook", link: "", icon: FaFacebook, color: "#1877F2" },
    { label: "TikTok", link: "", icon: FaTiktok, color: "#9C27B0" },
    { label: "Telegram", link: "", icon: FaTelegram, color: "#0088cc" },
    { label: "LinkedIn", link: "", icon: FaLinkedin, color: "#0A66C2" },
  ],
  "YouTube": [
    { label: "Visualizzazioni YouTube", link: "/comprare-visualizzazioni-youtube" },
    { label: "Iscritti YouTube", link: "/comprare-iscritti-youtube" },
    { label: "Ore di Visualizzazione YouTube", link: "/comprare-ore-di-visualizzazione-youtube" },
    { label: "Like YouTube", link: "/comprare-like-youtube" },
    { label: "Commenti YouTube", link: "/comprare-commenti-youtube" },
    { label: "Spettatori Diretta YouTube", link: "/comprare-spettatori-diretta-youtube" },
    { label: "Visualizzazioni e Like YouTube Shorts", link: "/comprare-visualizzazioni-e-like-youtube-shorts" },
    { label: "Condivisioni YouTube", link: "/comprare-condivisioni-youtube" },
  ],
  "Instagram": [
    { label: "Follower Instagram", link: "https://glowlikes.it/comprare-follower-instagram" },
    { label: "Like Instagram", link: "https://glowlikes.it/comprare-like-instagram/" },
    { label: "Visualizzazioni Instagram", link: "https://glowlikes.it/comprare-visualizzazioni-instagram/" },
    { label: "Commenti Instagram", link: "https://glowlikes.it/comprare-commenti-instagram/" },
    { label: "Voti Sondaggio Instagram", link: "https://glowlikes.it/comprare-voti-sondaggio-instagram/" },
    { label: "Condivisioni Instagram", link: "https://glowlikes.it/comprare-condivisioni-instagram/" },
    { label: "Visite al Profilo Instagram", link: "https://glowlikes.it/comprare-visite-al-profilo-instagram/" },
    { label: "Spettatori Diretta Instagram", link: "https://glowlikes.it/comprare-spettatori-diretta-instagram/" },
    { label: "Views Storie Instagram", link: "https://glowlikes.it/comprare-views-storie-instagram/" },
  ],
  "TikTok": [
    { label: "Follower TikTok", link: "https://glowlikes.it/comprare-follower-tiktok/" },
    { label: "Visualizzazioni TikTok", link: "https://glowlikes.it/comprare-visualizzazioni-tiktok/" },
    { label: "Like su TikTok", link: "https://glowlikes.it/comprare-like-su-tiktok/" },
    { label: "Commenti TikTok", link: "https://glowlikes.it/comprare-commenti-tiktok/" },
    { label: "Condivisioni TikTok", link: "https://glowlikes.it/comprare-condivisioni-tiktok/" },
    { label: "Salvataggi TikTok", link: "https://glowlikes.it/comprare-salvataggi-tiktok/" }
  ],
  "Telegram": [
    { label: "Follower Telegram", link: "https://glowlikes.it/comprare-follower-telegram/" },
    { label: "Iscritti Telegram", link: "https://glowlikes.it/comprare-iscritti-telegram/" },
    { label: "Membri Telegram", link: "https://glowlikes.it/comprare-membri-telegram/" },
    { label: "Voti Sondaggio Telegram", link: "https://glowlikes.it/comprare-voti-sondaggio-telegram/" },
    { label: "Visualizzazioni Telegram", link: "https://glowlikes.it/comprare-visualizzazioni-telegram/" },
    { label: "Like Telegram", link: "https://glowlikes.it/comprare-like-telegram/" },
    { label: "Condivisioni Telegram", link: "https://glowlikes.it/comprare-condivisioni-telegram/" },
  ],
  "Spotify": [
    { label: "Ascolti Spotify", link: "https://glowlikes.it/comprare-ascolti-spotify/" },
    { label: "Follower Spotify", link: "https://glowlikes.it/comprare-follower-spotify/" },
    { label: "Ascoltatori mensili Spotify", link: "https://glowlikes.it/comprare-ascoltatori-mensili-spotify/" },
    { label: "Save Spotify", link: "https://glowlikes.it/comprare-save-spotify/" }
  ],
  "X (ex Twitter)": [
    { label: "Follower X", link: "https://glowlikes.it/comprare-follower-x/" },
    { label: "Like X", link: "https://glowlikes.it/comprare-like-x/" },
    { label: "Voti Sondaggio X", link: "https://glowlikes.it/comprare-voti-sondaggio-x/" },
    { label: "Visualizzazioni X", link: "https://glowlikes.it/comprare-visualizzazioni-x/" },
    { label: "Condivisioni X", link: "https://glowlikes.it/comprare-condivisioni-x/" },
  ],
  "LinkedIn": [
    { label: "Follower LinkedIn", link: "https://glowlikes.it/comprare-follower-linkedin/" },
    { label: "Like su LinkedIn", link: "https://glowlikes.it/comprare-like-su-linkedin/" },
    { label: "Condivisioni LinkedIn", link: "https://glowlikes.it/comprare-condivisioni-linkedin/" },
    { label: "Visualizzazioni LinkedIn", link: "https://glowlikes.it/comprare-visualizzazioni-linkedin/" },
    { label: "Collegamenti LinkedIn", link: "https://glowlikes.it/comprare-collegamenti-linkedin/" },
  ],
  "Facebook": [
    { label: "Like Facebook", link: "https://glowlikes.it/comprare-like-facebook/" },
    { label: "Follower Facebook", link: "https://glowlikes.it/comprare-follower-facebook/" },
    { label: "Reazioni Facebook", link: "https://glowlikes.it/comprare-reazioni-facebook/" },
    { label: "Membri Gruppo Facebook", link: "https://glowlikes.it/comprare-membri-gruppo-facebook/" },
    { label: "Commenti Facebook", link: "https://glowlikes.it/comprare-commenti-facebook/" },
    { label: "Amici Facebook", link: "https://glowlikes.it/comprare-amici-facebook/" },
    { label: "Condivisioni Facebook", link: "https://glowlikes.it/comprare-condivisioni-facebook/" },
    { label: "Recensioni Facebook", link: "https://glowlikes.it/comprare-recensioni-facebook/" },
    { label: "Visualizzazioni Facebook", link: "https://glowlikes.it/comprare-visualizzazioni-facebook/" },
    { label: "Spettatori Diretta Facebook", link: "https://glowlikes.it/comprare-spettatori-diretta-facebook/" },
  ],
};

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
      'Come vedi, **copriamo con successo le maggiori piattaforme** attualmente utilizzate in Italia (e non solo, ovviamente).',
      'Che tu ne utilizzi solo una, piuttosto che un paio o persino tutte, non importa. Da noi di GlowLikes **trovi tutti gli strumenti necessari per far crescere qualsiasi pagina** in tutta sicurezza.',
      'Inoltre, offriamo diversi tipi di personalizzazione, **a cominciare dall"area geografica di provenienza** (Italia o internazionali) e dalla tipologia (da noi ci sono pure interazioni prodotte da account reali verificati).',
      
    ],
    image: {
      src: "/Comprare Views YouTube_dopo quanto tempo arrivano_ no background.png",
      alt: "Comprare Views YouTube_dopo quanto tempo arrivano",
    },
  },
  {
    title: "YouTube",
    content: [
      "**YouTube è una delle piattaforme più utilizzate in Italia.** Attualmente supera i 50 milioni di utenti mensili e i suoi programmi di monetizzazione sono tra i più ambiti.",
      "Noi di GlowLikes ti diamo la possibilità di **incrementare drasticamente la media delle interazioni organiche**, ma anche di raggiungere i requisiti richiesti per accedere al programma di partnership grazie a cui monetizzare i tuoi contenuti."
    ],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "Instagram",
    content: [
    "**Sfrondare su Instagram come influencer partendo da zero?** È difficile ma, al tempo stesso, è più che fattibile.",
    "In special modo se ti avvali dei nostri servizi con cui **otterrai visibilità e autorevolezza in tempi rapidi.** Siamo tutti d'accordo che i suoi algoritmi siano piuttosto “severi”.",
    "Tuttavia, dopo mesi e mesi di monitoraggio, abbiamo constatato che **i nostri servizi non vengono mai individuati.** Con GlowLikes di pure addio ai cali e allo Shadow Ban!"
  ],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "TikTok",
    content: [
    "**TikTok è letteralmente “esploso” nel giro di pochissimo tempo,** specialmente qui in Italia. Nonostante sia uno dei social network più “giovani”, nel giro di una manciata di anni è riuscito a raggiungere la quota di oltre 20 milioni di utenti mensili.",
    "Uno dei suoi punti di forza? **La “viralità” improvvisa che possono acquisire determinati video!** “Cavalca” gli algoritmi e diventa popolare grazie alle nostre interazioni social efficaci e di altissima qualità."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Telegram",
    content: [
    "Nonostante sia un social network “di nicchia”, **anche Telegram sta vivendo la sua “epoca d'oro”.** Da semplice app di messaggistica, è divenuta presto una piattaforma in cui condividere liberamente diverse tipologie di contenuti.",
    "Nell'ultimo periodo, poi, **ha lanciato il suo programma di monetizzazione** e ulteriori servizi ancora, come la propria personale criptovaluta e il servizio wallet."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Spotify",
    content: [
    "Sei un artista? Allora **sai benissimo quanto difficile sia promuoversi** al giorno d'oggiò, specie quando si parte zero e senza alcun aiuto da parte di manager, etichette discografiche e via dicendo.",
    "Ecco perché abbiamo **deciso di includere anche i servizi destinati a Spotify.** Vogliamo dare a tutti l'opportunità di crescere e di acquisire la popolarità che meritano.",
    "Anche in questo caso, chiaramente, **puoi contare sulle nostre interazioni social geo-targettizzate,** pensate appositamente per il nostro mercato italiano."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "X (ex Twitter)",
    content: [
    "Dopo l'ultimo cambio di gestione, **X (il social inizialmente conosciuto come “Twitter”) si sta distinguendo dalle altre piattaforme** per via della grande libertà di espressione garantita ai rispettivi utenti.",
    "Non importa quale sia la tua nicchia, in questo social media **puoi tranquillamente trattare persino i topic più “spinosi”.**",
    "Detto ciò, **la nuova amministrazione ha dichiarato guerra ai bot**: senza dubbio, un motivo in più per scegliere le nostre interazioni impossibili da rilevare."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Facebook",
    content: [
    "Per quanto venga chiamato “il social dei boomer”, **Facebook continua ad essere molto utilizzato,** anche dai giovani e dai giovanissimi (sebbene non sia la parte maggioritaria).",
    "Tra l'altro, **oggigiorno fa parte del medesimo gruppo Meta** che possiede anche Instagram, quindi puoi contare su un unico account con cui gestire in modo centralizzato le pubblicazioni su entrambe le piattaforme.",
    "Nel caso te lo stessi chiedendo, sì! Grazie alle nostre interazioni social top quality, **puoi raggiungere i requisiti richiesti ed avviare il programma di monetizzazione.**"
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "LinkedIn",
    content: [
    "**Al giorno d'oggiò non puoi non avere un account LinkedIn!** Poco importa che tu sia un lavoratore dipendente, piuttosto che un libero professionista (anche freelancer) o il titolare di un'attività.",
    "Il tuo account professionale **otrebbe aprirti nuove ed interessanti opportunità,** a patto che risulti visibile.",
    "Stai cercando lavoro o hai bisogno di trovare collaboratori? **Espandi la tua rete di contatti ed incrementa la tua autorevolezza grazie ai nostri servizi mirati** che eroghiamo nel giro di qualche ora."
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

  // Add platform-specific gradient backgrounds
  const getGradientColors = (title: string) => {
    switch (title) {
      case "YouTube":
        return "from-red-900/20 to-red-800/20";
      case "Instagram":
        return "from-pink-600/20 to-purple-600/20";
      case "TikTok":
        return "from-gray-900/20 to-black/20";
      case "Telegram":
        return "from-blue-900/20 to-cyan-800/20";
      case "Spotify":
        return "from-green-900/20 to-emerald-800/20";
      case "X (ex Twitter)":
        return "from-gray-900/20 to-slate-800/20";
      case "Facebook":
        return "from-blue-800/20 to-indigo-700/20";
      case "LinkedIn":
        return "from-blue-900/20 to-sky-800/20";
      default:
        return "from-purple-900/20 to-indigo-900/20";
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative backdrop-blur-xl bg-gradient-to-r ${getGradientColors(section.title)} 
                 rounded-2xl p-8 border border-white/10 shadow-xl`}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-300 
                   bg-clip-text text-transparent text-center"
      >
        {section.title}
      </motion.h2>

      {SERVICE_LABELS[section.title] && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SERVICE_LABELS[section.title].map((service, idx) => (
            <a
              key={idx}
              href={service.link}
              className="group relative overflow-hidden rounded-xl min-h-[50px] 
                       p-px transition-all duration-300 hover:scale-[1.02] shadow-none flex items-stretch"
              style={{
                '--hover-color': service.color || '#6366f1'
              } as React.CSSProperties}
            >
              <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 bg-[var(--hover-color)] blur-[180px] group-hover:blur-[250px]" />
                <div className="absolute inset-0 bg-gradient-radial from-[var(--hover-color)] via-[var(--hover-color)] to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[var(--hover-color)]/70 blur-3xl group-hover:blur-[7xl]" />
              </div>
              <div className="absolute inset-0 rounded-xl opacity-75 group-hover:opacity-100 transition-all duration-300
                   bg-gradient-to-r from-[var(--hover-color)]/90 to-[var(--hover-color)]/90 blur-3xl" />
              <div className="relative rounded-xl bg-black/20 px-3 py-2.5 transition-all duration-300
                 group-hover:bg-[var(--hover-color)]/50 flex flex-col items-center justify-center gap-1.5 w-full
                 border-2 border-[var(--hover-color)]/80 group-hover:border-[var(--hover-color)] 
                 group-hover:shadow-[0_0_60px_rgba(var(--hover-color),0.8),inset_0_0_30px_rgba(var(--hover-color),0.6)] 
                 backdrop-blur-sm">
                {service.icon && (
                  <div className="text-[var(--hover-color)] transition-colors">
                    {React.createElement(service.icon, {
                      size: 20
                    })}
                  </div>
                )}
                <span className="block text-xs sm:text-sm font-medium text-[var(--hover-color)] text-center transition-colors">
                  {service.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className={`flex-1 space-y-6 ${!isEven ? "md:order-2" : ""}`}>
          {section.content.map((paragraph, idx) => {
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            const rendered = parts.map((part, i) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={i} className="text-purple-300">{part.slice(2, -2)}</strong>;
              }
              return part;
            });

            return (
              <p key={idx} className="text-lg text-white/80 leading-relaxed">
                {rendered}
              </p>
            );
          })}
        </div>

        <div className={`flex-1 ${!isEven ? "md:order-1" : ""}`}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl 
                          blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="relative rounded-xl w-full object-cover shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OtherText = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-[#1b1e2c] to-purple-900/20">
      <div className="space-y-16">
        {SECTIONS.map((section, index) => (
          <ContentSection
            key={index}
            section={section}
            index={index}
            progress={new MotionValue()}
          />
        ))}
      </div>
    </section>
  );
};

export default OtherText;
