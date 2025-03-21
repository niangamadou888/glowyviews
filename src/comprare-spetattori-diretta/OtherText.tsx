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
    title: "Comprare spettatori diretta YouTube: è sempre necessario?",
    content: [
     "Naturalmente, **comprare spettatori diretta YouTube** non è mica un obbligo, ci mancherebbe altro! Inoltre, non sempre ha senso ricorrere a tale tecnica.",
  "Ad esempio, **se utilizzi “il Tubo” per passione** e non sei interessato a monetizzare i tuoi contenuti, allora sarebbe inutile investire in questi servizi di Social Media Marketing.",
  "Al tempo stesso, ha poco senso **comprare spettatori diretta YouTube** anche se, pur lavorando, hai un canale già ben avviato.",
  "Francamente, ci sono creator che, nonostante il successo, si lasciano prendere la mano e **continuano a comprare interazioni social senza averne bisogno**.",
  "Eh, vedere **i numeri del contatore salire vertiginosamente è una “droga”** a cui tanti fanno fatica a resistere.",
  "Questo, però, è un discorso che affronteremo dettagliatamente più avanti.",
  "Adesso, invece, vogliamo concentrarci nel dare consigli a chi ha effettivamente bisogno di **comprare spettatori diretta YouTube.**",
  "Prima, però, **facciamo luce in merito ad un altro aspetto molto sentito** da chi, per la prima volta, si affaccia a questo mondo.",
  "**È legale comprare interazioni social?** Si rischia qualcosa? Nel prossimo paragrafo ti spieghiamo come stanno davvero le cose."
],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "La nuova tendenza: comprare spettatori diretta YouTube",
    content: [
     "**Comprare spettatori diretta YouTube** non è assolutamente uno scherzo o qualcosa di simile, dal momento che si tratta di una delle tante tecniche di Social Media Marketing messe in atto da moltissimi creator italiani e non solo.",
  "Nel giro di pochi anni, infatti, i social network sono passati dall'essere un “luogo virtuale” destinato solo ed esclusivamente al divertimento, a delle vere e proprie **piattaforme su cui è possibile condurre un business** di tutto rispetto.",
  "Di conseguenza, è sorta la necessità di trovare diversi metodi finalizzati ad **accrescere la propria visibilità senza, però, dover attendere le tempistiche “fisiologiche”** della piattaforma.",
  "Insomma, capisci bene che, se ci sono investimenti di mezzo, **non si possono certo aspettare mesi o, nei casi peggiori, anni,** prima di rientrare con il capitale e iniziare a guadagnare.",
  "Adesso che abbiamo chiarito questo importante aspetto preliminare, non resta altro da fare che esaminare tutti i dettagli a riguardo."
],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "I vantaggi del comprare spettatori diretta YouTube italiani e reali",
    content: [
    "Arrivati a questo punto, ti starai sicuramente domandando come mai convenga **comprare spettatori diretta YouTube italiani e reali** e non quelli cosiddetti “generici”.",
  "Essenzialmente, le interazioni social geo-targettizzate hanno il grande vantaggio di **dare un “segnale diverso” ai crawler** della piattaforma.",
  "In parole povere, se hai aperto un canale con la divisione “YouTube Italia”, se i tuoi contenuti sono in italiano ed espressamente rivolti a questo genere di target, allora **le interazioni provenienti da quest'ultimo vengono considerate più rilevanti.**",
  "Di conseguenza, poi, **i crawler premieranno i tuoi contenuti con una migliore visibilità**, proprio perché considerati più “affini” alle interazioni effettivamente ricevute.",
  "Chiaramente, se la piattaforma ne dovesse **rilevare provenienti da paesi che poco hanno a che fare con il tuo target**, ecco che le cose potrebbero prendere una brutta piega.",
  "A cosa ci stiamo riferendo? Beh, ti è sufficiente leggere quanto spieghiamo nel prossimo paragrafo."
],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Comprare spettatori diretta YouTube risolverà tutti i miei problemi?",
    content: [
    "**Comprare spettatori diretta YouTube reali ed italiani** è sì da considerarsi come una strategia di Social Media Marketing efficiente ma, al tempo stesso, non risolverà – come per “magia” – tutti i tuoi problemi.",
  "In fin dei conti, per avere successo non basta certo la sola fortuna.",
  "Difatti, **ciò che deve sempre venire al primo posto è la qualità dei contenuti** e, più in generale, la qualità della tua attività editoriale nel suo complesso.",
  "Per carità, siamo tutti d'accordo che, sul “Tubo”, ci sia un discreta quantità di personaggi che hanno fatto successo così, quasi per caso, **magari per il semplice fatto di aver ruttato in un momento improbabile.**",
  "Questo, però, è il classico esempio di “meteora”, **ossia un personaggio destinato a finire nel “limbo del web” molto rapidamente.**",
  "Al contrario, gli **YouTuber di successo e che stanno “facendo carriera”, hanno in comune il fatto di produrre contenuti di qualità** e capaci di suscitare interesse da parte del pubblico.",
  "Una parte di loro, poi, decide di **comprare spettatori diretta YouTube** non per sopperire a qualche loro mancanza ma, bensì, raggiungere nuovi obiettivi e traguardi."
],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Comprare spettatori diretta YouTube: cosa fare se l'ordine non arriva?",
    content: [
    "Terminiamo questa guida parlando di un aspetto che, **sebbene accada di rado, può sempre capitare.**",
  "Nel caso dovessi avere problemi con l'ordine, prima di tutto **non farti prendere dal panico.** Non ce n'è davvero bisogno, fidati.",
  "Infatti, devi semplicemente **contattare il nostro centro assistenza clienti.** Come? Sempre dalla tua area personale, vai alla sezione “Contatti” e segui le istruzioni.",
  "Volendo, puoi pure **aprire un ticket direttamente dalla tua area personale.**",
  "Tranquillo, è semplicissimo, ma ci teniamo a dirti che,** mettendo tra i riferimenti anche il numero della conferma d'ordine**, risolveremo il problema ancora più in fretta.",
  "Ad ogni modo, siamo certi che tu ti sia reso ben conto dell'importanza di rivolgersi ad agenzie come la nostra per **comprare spettatori diretta YouTube** e le altre principali interazioni social.",
  "Oltre alla qualità del servizio, **puoi pure contare su un team di esperti sempre pronto ad aiutarti** in caso di difficoltà.",
  "Quindi, ancora una volta, **lascia perdere quei venditori che offrono corposi pacchetti a prezzi stracciati**, sarebbe come buttare i soldi al vento e, in certi casi, rischiare pure la penalizzazione del canale."
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
