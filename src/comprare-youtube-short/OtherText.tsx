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
    title: "È pericoloso comprare Visualizzazioni e Like YouTube Shorts",
    content: [
     "Prima di proseguire, vogliamo “mettere le mani” avanti **parlando di un aspetto che preoccupa qualche creator.**",
  "È pericoloso **comprare visualizzazioni e like YouTube Shorts**? Insomma, si rischia qualcosa?",
  "Assolutamente no, dal momento che il **mercato della compravendita di interazioni social è perfettamente legale.**",
  "Tra l'altro, non vi è nemmeno un “valore soglia”. Pertanto, **sei libero di comprare un “pugno” di interazioni**, così come diverse migliaia.",
  "Inoltre, effettuando i tuoi acquisti presso agenzie specializzate come la nostra, **puoi stare tranquillo anche sul fronte dei pagamenti.**",
  "Sfruttiamo i **migliori sistemi crittografici per proteggere i dati sensibili dei nostri utenti** da ogni possibile attacco ai loro danni.",
  "Senza contare che, **noi di GlowLikes, offriamo pure un servizio di assistenza clienti impeccabile**, tale per cui ogni possibile problema viene risolto in poche ore dalla sua segnalazione.",
  "Chiarito il fatto che non vi è alcun rischio di natura giudiziaria relativo al **comprare visualizzazioni e like YouTube Shorts**, ora vediamo insieme un altro aspetto delicato.",
  "Infatti, sebbene perfettamente legale, la **compravendita di interazioni social non è ammessa dalla “policy” dello stesso YouTube.**"
],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "Comprare Visualizzazioni e Like YouTube Shorts Vs “policy” della piattaforma",
    content: [
     "Sì, **comprare visualizzazioni e like YouTube Shorts** è una pratica palesemente in contrasto con la “policy” di YouTube.",
  "Dunque, come comportarsi? Beh, in realtà anche qui **c'è davvero di cui preoccuparsi.**",
  "Il “Tubo”, difatti, penalizza solo quei profili di cui riesce ad individuare “pattern” e schemi sospetti.",
  "In tal senso, **noi di GlowLikes ci avvaliamo di sofisticati sistemi informatici**, tali per cui le interazioni che vediamo sono indistinguibili da quelle ottenute “genuinamente” dal tuo pubblico.",
  "Quindi, come recita il detto: **“Occhio non vede, cuore non duole”.**",
  "In parallelo, poi, abbiamo impostato le **tempistiche di consegna proprio in base all'entità del pacchetto** acquistato.",
  "Insomma, se compri qualche centinaio di **visualizzazioni e like YouTube Shorts** te le consegnamo tranquillamente nel giro di poche ore.",
  "Al contrario, **per quelli che ne comprendono migliaia ci “teniamo larghi”**, effettuando l'erogazione in pochi giorni lavorativi.",
  "Questo, chiaramente, **per simulare una reale ed effettiva crescita organica**, indispensabile per accrescere il proprio grado di visibilità."
],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "Perché comprare Visualizzazioni e Like YouTube Shorts solo da agenzie riconosciute",
    content: [
    "**Comprare visualizzazioni e like YouTube Shorts** solo presso agenzie riconosciute è il sistema migliore per non incorrere in possibili penalizzazioni da parte dei crawler.",
  "Infatti, solo queste realtà adottano tutte le precauzioni del caso, ovvero si avvalgono di apposite reti informatiche grazie a cui creare, per l'appunto, interazioni social impossibili da distinguere da quelle ottenute in modo organico.",
  "Ma c'è di più! Solo **chi opera in questo settore da anni ha ben chiaro come avviene l'attività di crawling** e, di conseguenza, decidere delle tempistiche di consegna che non destino sospetto.",
  "Insomma, **“gira e rigira”, il meccanismo di fondo è sempre lo stesso.**",
  "Se stai cercando un servizio di qualità, devi rivolgerti a chi effettivamente in grado di erogarlo.",
  "Mettiamo caso che tu abbia un **problema con l'impianto GPL** della tua automobile.",
  "Che fai? **La porti da un'officina specializzata, oppure gliela affidi al “cuggggggino”** del tuo amico?",
  "Ecco, di base, nel Social Media Marketing le cose funzionano allo stesso identico modo."
],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Comprare Visualizzazioni e Like YouTube Shorts sul web: occhio ai “bidoni”!",
    content: [
    "Prima di avviarci alle conclusioni, ci preme **metterti in guardia da alcune criticità** che, purtroppo, sono sempre dietro l'angolo.",
  "Siamo sicuri tu abbia già capito che **il Social Media Marketing non è “fuffa”**, ma una vera e propria disciplina nata da specifiche esigenze di mercato, in cui operano realtà serie come la nostra che, tutti i giorni, si “fanno il mazzo” per soddisfare le esigenze dei propri clienti.",
  "Al tempo stesso, però, **non mancano i “furbastri”.**",
  "Tra questi, troviamo venditori “improvvisati” che erogano sì interazioni social ma che, data la loro scarsissima qualità, finirebbero per farti penalizzare il profilo.",
  "In aggiunta a questi, **troviamo pure i classici truffatori** che, nel caso specifico, si avvalgono della scusa del Social Media Marketing per richiedere dati sensibili.",
  "Al contrario, **noi di GlowLikes non richiediamo mai alcun codice di accesso,** in quanto, per procedere con l'erogazione, ci è sufficiente l'URL pubblico del video."
],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Perché comprare Visualizzazioni e Like YouTube Shorts italiani e reali non è sufficiente",
    content: [
    "Nel corso degli anni, **abbiamo aiutato davvero tante realtà a concretizzare i loro obiettivi.**",
  "Da un lato, noi abbiamo messo a loro disposizione le migliori tecniche di Social Media Marketing, così come interazioni social di altissima qualità.",
  "Dall'altro, però, **il “grosso” lo hanno fatto proprio loro,** postando con regolarità e precisione “chirurgica” ottimi contenuti, in grado di suscitare un reale interesse ed apprezzamento da parte del pubblico.",
  "Quello che stiamo cercando di dirti è che **il Social Media Marketing “funziona”, certamente, ma non fa i miracoli.**",
  "Di conseguenza, se pensi che sia sufficiente **comprare visualizzazioni e like YouTube Shorts italiani e reali** per diventare virali e guadagnare ottime cifre nel giro di una settimana, sappi che ti stai sbagliando.",
  "Quindi, nell'ipotesi in cui dovessi ancora affrontare determinati aspetti, **ti suggeriamo di migliorare la qualità audio-video dei tuoi contenuti**, ma anche di sfruttare un accurato piano editoriale per sapere sempre quando pubblicare e con che frequenza."
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
