import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Users, Lock, TrendingUp, Eye, AlertTriangle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "VISUALIZZAZIONI ALTA QUALITA' VS REALI",
      description: "Le visualizzazioni di alta qualità provengono da account del tutto simili a quelli 'genuini'. Quelle reali, invece, provengono da account verificati.",
      icon: Eye
    },
    {
      title: "VISUALIZZAZIONI ITALIANE",
      description: "Aumenta il grado di rilevanza tra il tuo canale e il tuo target. Inoltre, non vengono rilevate dagli algoritmi.",
      icon: Users
    },
    {
      title: "CONSEGNA RAPIDA",
      description: "Se hai effettuato un ordine con noi, riceverai le visualizzazioni comprate nel giro di un paio d'ore.",
      icon: Clock
    },
    {
      title: "SUPPORTO DEDICATO 24/7",
      description: "In caso di problemi, puoi sempre contare sul nostro Staff, sempre pronto ad aiutarti.",
      icon: CheckCircle
    },
    {
      title: "PAGAMENTI SICURI",
      description: "Ci serviamo dei sistemi crittografici più avanzati per rendere i nostri pagamenti a prova di attacco 'hacker'.",
      icon: Shield
    },
    {
      title: "NESSUNA RICHIESTA DI CREDENZIALI",
      description: "Comprare visualizzazioni YouTube da SocialX è estremamente sicuro perché non richiediamo password o altri codici personali.",
      icon: Lock
    },
    {
      title: "CRESCITA ORGANICA A RISCHIO ZERO",
      description: "Comprare visualizzazioni YouTube su SocialX ti permette di crescere in modo organico e di non subire alcuna penalizzazione dalla piattaforma.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow">
          I Nostri Servizi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 bg-secondary/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <feature.icon className="w-12 h-12 text-primary mb-6" />
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