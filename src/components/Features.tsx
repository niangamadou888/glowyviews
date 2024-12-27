import { Card } from "@/components/ui/card";
import 'lord-icon-element';
import { AlertTriangle } from "lucide-react";
import { useEffect, useRef } from 'react';
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

  // Create an array of refs for each feature
  const playerRefs = useRef<Array<Player | null>>(features.map(() => null));

  useEffect(() => {
    // Play all animations when component mounts
    playerRefs.current.forEach((ref) => {
      ref?.playFromBeginning();
    });
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          I Nostri Servizi
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground pb-6">
          Se stai cercando di acquistare visualizzazioni YouTube, e' importante farlo nel modo giusto. Noi di SocialX offriamo Visualizzazioni YouTube 100% reali e da profili italiani, a prezzi accessibili. Acquista subito visualizzazioni in modo sicuro e confidenziale tramite la nostra piattaforma.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-secondary/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <Player
                ref={(el) => (playerRefs.current[index] = el)}
                icon={feature.icon || feature.iconUrl}
                size={48}
                onComplete={() => playerRefs.current[index]?.playFromBeginning()}
              />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

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