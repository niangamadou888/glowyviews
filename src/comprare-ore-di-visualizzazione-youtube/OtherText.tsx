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
    title: "Perché i creator decidono di comprare ore di visualizzazione YouTube",
    content: [
      'I creator decidono di **comprare ore di visualizzazione YouTube** non tanto per farsi “belli” con gli amici, quanto per un motivo piuttosto pratico.',
      'Come già saprai, **la piattaforma offre una programma di partnership**, tale per cui gli Youtuber ricevono una percentuale in base alle visualizzazioni realizzate.',
      'Questo, però, non **è un “processo” automatico. Prima di tutto, **è il creator stesso che deve richiedere esplicitamente la monetizzazione.**',
      'In aggiunta, occorre anche che vengano rispettati determinati parametri. Tra questi, **c"è l"aver “accumulato” almeno 4000 ore di visualizzazione totale negli ultimi 12 mesi** solari.',
      'Ora, capisci come mai ci sono così tanti utenti che vogliono **comprare ore di visualizzazione YouTube?**',
      'Immagina di voler attivare la monetizzazione ma, per tutta una serie di fattori, di **non riuscire a raggiungere la maledetta soglia delle 4000 ore** di video guardati.',
      'Esatto, tutto ciò che pubblicheresti **non ti frutterebbe nemmeno 1 centesimo.**',
      'Ora che appare più evidente la motivazione di fondo che alimenta questo mercato, starai sicuramente pensando **se anche tu puoi usufruire di tale servizio**, giusto? Allora vai subito al prossimo paragrafo per conoscere la risposta.'
    ],
    image: {
      src: "/Comprare Views YouTube_dopo quanto tempo arrivano_ no background.png",
      alt: "Comprare Views YouTube_dopo quanto tempo arrivano",
    },
  },
  {
    title: "Puoi comprare ore di visualizzazione YouTube, basta non farsi beccare",
    content: [
      "La soluzione al problema di cui sopra è proprio questa, ovvero **puoi tranquillamente comprare ore di visualizzazione YouTube, basta non farsi intercettare dai crawler.**",
      "In che modo, dunque? Beh, questo è il nostro “pane quotidiano”. In virtù di ciò, **sfruttiamo i migliori sistemi informatici tali per cui ogni interazione acquistata verrà, poi, “consegnata”, da un account reale**, ovvero dotato di un suo proprio indirizzo IP.",
      "Ecco perché le **nostre ore di visualizzazione, così come i commenti, i like e via dicendo non vengono considerate come “spam”** o simili.",
      "A questo punto, però, entri “in gioco” anche tu. Per quanto possiamo fornirti tutte le garanzie del caso, consigliamo di **comprare ore di visualizzazione YouTube in modo “graduale”**, al fine di simulare la loro acquisizione come un processo puramente organico.",
      'Per certi versi, **uno dei “segreti” del Social Media Marketing è proprio questo, ossia la pazienza** e procedere passo dopo passo.'
    ],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "I costi relativi al comprare ore di visualizzazione YouTube",
    content: [
      "**Comprare ore di visualizzazione YouTube è da considerarsi come un vero e proprio investimento** che, in media, va dai 50-60 euro a salire.",
      "Chiaramente, l'importo è determinato dal numero di visualizzazioni, così come anche della loro durata.",
      "Comunque sia, **la decisione finale la prendi sempre tu**, quindi controlla bene il budget, in modo da non “sforare” e, dunque, ritrovarti senza i fondi per proseguire con il tuo business.",
      "Inoltre, nel caso avessi ancora dubbi riguardo il servizio in questione, **puoi sempre effettuare l'ordine minimo per “metterci alla prova”.**",
      "In caso contrario, se hai già le idee chiare in merito alla strategia da seguire, allora puoi **anche optare per un ordine bello “corposo”** particolarmente indicato a tutti coloro che hanno il proprio canale YouTube “in stallo”.",
      'Ci stai già pensando su, vero? Allora, andiamo subito al prossimo paragrafo in cui ti spieghiamo **come effettuare il tuo primo ordine!**',
    ],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "Perché (non) ha senso comprare ore di visualizzazione YouTube",
    content: [
    "Adesso, è giunto il momento di **rispondere alla domanda provocatoria** che abbiamo usato anche come titolo.",
    "Il **Social Media Marketing va inteso come una serie di tecniche atte a migliorare** le performance di una pagina e/o di un canale.",
    "Le stesse, dunque, non potranno mai “sostituire” il tuo lavoro di creator.",
    "In parole povere, **se i tuoi contenuti non sono il massimo, puoi comprare ore di visualizzazione YouTube** “come se piovesse” ma, a lungo andare, ciò si rivelerebbe solo una grande perdita di tempo e di denaro.",
    "Giusto per farti un esempio pratico, **puoi anche studiarti tutte le tecniche e tattiche del mondo calcistico.**",
    "Tuttavia, **se non ti alleni, non diventerai mai un grande campione**! Ecco, con il Social Media Marketing è, più o meno, la stessa cosa.",
    "Detto ciò, non starai mica pensando di **basare tutta la tua attività di Youtuber sulle ore di visualizzazione da acquistare,** vero?",
    "Beh, nel prossimo paragrafo ti spieghiamo proprio come mai non sia una soluzione a lungo termine."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Non puoi comprare ore di visualizzazione YouTube per sempre!",
    content: [
    "Non puoi **comprare ore di visualizzazione YouTube** per sempre perché ci rimetteresti solo i tuoi soldi.",
    "Infatti, il **compenso che ti riconosce il social network è, comunque, inferiore al prezzo di vendita.**",
    "Ora, capisci il “perché” della domanda provocatoria di cui abbiamo parlato nel precedente paragrafo?",
    "Per certi versi, siamo quasi “costretti” a rivelare questi fatti.",
    "**Sappiamo benissimo quanto sia facile lasciarsi “prendere la mano”** con gli acquisti delle interazioni social.",
    "Proprio per questo, la nostra mission è quella di **aiutare i nostri clienti a 360° e non solo vendere loro dei semplici pacchetti,** tanto per guadagnare.",
    "Dalla nostra parte, poi, **abbiamo tutti i nostri clienti che, grazie ai nostri servizi e consigli, sono finalmente riusciti a raggiungere tutti gli obiettivi** che si erano prefissati.",
    "Il nostro è un metodo più che testato, quindi, se ha funzionato per loro, sicuramente funzionerà anche per te."
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Comprare ore di visualizzazione YouTube: occhio ai venditori",
    content: [
    "Prima di lasciarci, **vorremmo chiarire anche alcuni “aspetti” collaterali**, diciamo così.",
    "Non vuoi **comprare ore di visualizzazione YouTube** da noi di GlowLikes?",
    "Ovviamente, questo ci dispiacerebbe assai ma, in fin dei conti, sei libero di fare ciò che vuoi.",
    "Siccome teniamo davvero alla tua situazione, sappi che **c'è il rischio concreto di imbattersi in realtà poco serie.**",
    "**C'è chi vende interazioni social di “scarso valore”** cioè realizzate con sistemi informatici che presentano dei “pattern” facilmente individuabili dalla piattaforma.",
    "Di conseguenza, rivolgerti a questo tipo di venditori **aumenterebbe solamente le probabilità di beccarsi un blocco per “spam”** o, comunque, pratica non contemplata dalla “policy” di utilizzo.",
    "In altri casi, invece, **rischi di subire una truffa bella e buona.**",
    "Purtroppo, **ci sono delle “finte” agenzie di Social Media Marketing** che, con il pretesto di erogare interazioni social, si fanno “consegnare” dai clienti le credenziali di accesso al canale.",
    "Le **realtà serie e competenti come la nostra non richiedono mai e poi mai i codici personali, ma solo gli URL pubblici**, proprio come specificato nel tutorial di poco fa."
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
