import { Card } from "@/components/ui/card";
import 'lord-icon-element';
import { AlertTriangle } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import { Player } from '@lordicon/react';
import growthIcon from '../assets/icons/wired-flat-12-layers-hover-slide.json';
import icon1 from '../assets/icons/wired-flat-760-review-hover-pinch.json';
import icon2 from '../assets/icons/wired-flat-2129-login-hover-pinch.json';
import icon3 from '../assets/icons/wired-flat-457-shield-security-hover-pinch.json';
import icon4 from '../assets/icons/wired-flat-981-consultation-hover-conversation.json';
import icon5 from '../assets/icons/wired-flat-2601-speed-hover-pinch.json';
import icon6 from '../assets/icons/wired-flat-955-demand-hover-click.json';
import icon7 from '../assets/icons/wired-flat-1368-best-seller-hover-pinch.json';

const Features = () => {
  const features = [
    {
      title: "VISUALIZZAZIONI ALTA QUALITA' VS REALI",
      description: "Le visualizzazioni di alta qualità provengono da account del tutto simili a quelli 'genuini'. Quelle reali, invece, provengono da account verificati.",
      iconUrl: icon7
    },
    {
      title: "VISUALIZZAZIONI ITALIANE",
      description: "Aumenta il grado di rilevanza tra il tuo canale e il tuo target. Inoltre, non vengono rilevate dagli algoritmi.",
      iconUrl: icon6
    },
    {
      title: "CONSEGNA RAPIDA",
      description: "Se hai effettuato un ordine con noi, riceverai le visualizzazioni comprate nel giro di un paio d'ore.",
      iconUrl: icon5
    },
    {
      title: "SUPPORTO DEDICATO 24/7",
      description: "In caso di problemi, puoi sempre contare sul nostro Staff, sempre pronto ad aiutarti.",
      iconUrl: icon4
    },
    {
      title: "PAGAMENTI SICURI",
      description: "Ci serviamo dei sistemi crittografici più avanzati per rendere i nostri pagamenti a prova di attacco 'hacker'.",
      iconUrl: icon3
    },
    {
      title: "NESSUNA RICHIESTA DI CREDENZIALI",
      description: "Comprare visualizzazioni YouTube da SocialX è estremamente sicuro perché non richiediamo password o altri codici personali.",
      iconUrl: icon2
    },
    {
      title: "CRESCITA ORGANICA A RISCHIO ZERO",
      description: "Comprare visualizzazioni YouTube su SocialX ti permette di crescere in modo organico e di non subire alcuna penalizzazione dalla piattaforma.",
      icon: growthIcon
    },
    {
      title: "PERCHE' COMPRARE VISUALIZZAZIONI DI ALTA QUALITA'",
      description: "Con le visualizzazioni YouTube di alta qualità nessuno noterà la tua strategia, nemmeno i tuoi reali follower.",
      iconUrl: icon1
    }
  ];

  const playerRefs = useRef<Array<Player | null>>(features.map(() => null));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    playerRefs.current.forEach((ref) => {
      ref?.playFromBeginning();
    });
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`p-8 backdrop-blur-sm transition-all duration-300 ease-in-out relative
                ${hoveredIndex === index 
                  ? 'bg-primary/5 border-primary/50 shadow-2xl shadow-primary/30 scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-primary/5 before:to-primary/0 before:animate-glow' 
                  : 'bg-secondary/50 border-primary/20 hover:border-primary/40'}`}
              onMouseEnter={() => {
                setHoveredIndex(index);
                playerRefs.current[index]?.playFromBeginning();
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative z-10 transition-all duration-300 ${hoveredIndex === index ? 'scale-110 drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]' : ''}`}>
                <Player
                  ref={(el) => (playerRefs.current[index] = el)}
                  icon={feature.icon || feature.iconUrl}
                  size={48}
                  //onComplete={() => playerRefs.current[index]?.playFromBeginning()}
                />
              </div>
              <h3 className={`relative z-10 text-xl font-semibold mb-4 transition-all duration-300
                ${hoveredIndex === index ? 'text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]' : ''}`}>
                {feature.title}
              </h3>
              <p className={`relative z-10 transition-all duration-300
                ${hoveredIndex === index ? 'text-primary/90 drop-shadow-[0_0_4px_rgba(var(--primary),0.3)]' : 'text-muted-foreground'}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
        <p className=" mt-16">
        Se hai necessità di <strong>comprare visualizzazioni YouTube italiane e reali</strong>, sappi che sei nel posto giusto ma, prima di farlo, vorremmo che leggessi i nostri consigli. <br />
        </p>
        <p className=" mt-3">
        Infatti, è una pratica che – se condotta nel modo giusto – può dare ottime soddisfazioni in relazione alla <strong>crescita organica del tuo canale</strong>. <br />
        </p>
        <p className=" mt-3">
        Nei paragrafi a seguire, dunque, troverai le indicazioni per far fruttare il tuo investimento sin da subito.
        </p>

        <Card className="mt-16 p-8 bg-destructive/10 border-destructive/20">
          <div className="flex items-start gap-6">
            <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-4">AVVERTENZE</h3>
              <p className="text-muted-foreground">
                Per tracciare e verificare la consegna dell'ordine, sconsigliamo di effettuare acquisti presso altre agenzie per almeno 48 ore.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-x-1/2" />
    </section>
  );
};

export default Features;