import { motion } from "framer-motion";

const YouTubeViewsInfo = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 overflow-hidden">
  {/* Background Effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

  {/* Animated Glow */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-primary/10 blur-3xl animate-pulse" />
  </div>
      <div className="relative space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut",
            willChange: "transform, opacity"
          }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
          style={{ 
            transform: "translateZ(0)",
            willChange: "transform"
          }}
        >
          {/* Content Section */}
          <div className="flex-1 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Comprare condivisioni YouTube è sicuro? Ecco come stanno le cose
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Tutti i vantaggi del comprare Visualizzazioni YouTube no background.png"
                    alt="Tutti i vantaggi del comprare Visualizzazioni YouTube"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
              Chiariamo subito un altro aspetto decisamente controverso.{" "}
                <strong>
                Comprare condivisioni YouTube è sicuro?
                </strong><br />
              </p>
              <p className="text-lg text-muted-foreground ">
              Se osserviamo la situazione sotto un profilo puramente legale,{" "}
                <strong>
                sì, fare Social Media Marketing in questo modo non comporta alcun problema 
                </strong>nei confronti delle autorità, sia nazionali, che internazionali.
           
              </p>
              <p className="text-lg text-muted-foreground">
              Insomma {" "}
                <strong>
                nessuno potrebbe denunciarti per aver comprato delle interazioni
                </strong>{" "}
                social! <br />
                Al tempo stesso, però, va riconosciuto che{" "}
                <strong>
                  {" "}
                  si tratta di una pratica espressamente vietata dai termini e condizioni dello stesso YouTube.
                </strong>
              </p>

              <p className="text-lg text-muted-foreground">
              Senza fare troppi giri di parole, è possibilissimo <strong> comprare condivisioni YouTube senza rischiare penalizzazioni, </strong> a patto, però, di procedere nel modo corretto.
              </p>

              <p className="text-lg text-muted-foreground">
              Nella prossima sezione della guida{" "}
                <strong>
                troverai proprio i nostri consigli per muoverti in tal senso.
                </strong>
              </p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Tutti i vantaggi del comprare Visualizzazioni YouTube no background.png"
                alt="Tutti i vantaggi del comprare Visualizzazioni YouTube"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut",
            willChange: "transform, opacity"
          }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
          style={{ 
            transform: "translateZ(0)",
            willChange: "transform"
          }}
        >
          {/* Content Section */}
          <div className="flex-1 md:order-2 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Come comprare condivisioni YouTube senza pare: segui questo tutorial
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Per quali video si possono comprare Visualizzazioni YouTube_ no background.png"
                    alt="Per quali video si possono comprare Visualizzazioni YouTube?"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
              Hai finalmente deciso di{" "}
                <strong>
                comprare condivisioni YouTube? 
                </strong>
                Benissimo, ma ricordati di seguire queste indicazioni: <br />
              </p>
              <p className="text-lg text-muted-foreground">
                <ol>
                  <li>
                    <strong>
                      1. Scegli condivisioni italiane e reali
                    </strong>
                  </li>
                  <li>
                    <strong>
                      2. Effettua degli acquisti congrui alla tua situazione
                    </strong>
                  </li>
                  <li>
                    <strong>
                      3. Spingi di più il lavoro organico
                    </strong>
                  </li>
                </ol>
              </p>
              <p className="text-lg text-muted-foreground">
              Come per tutte le cose, affinché si riescano a raggiungere determinati risultati{" "}
                <strong>
                è necessario procedere con un minimo di “testa”
                </strong>
                , come si suol dire. <br />
                In parole povere, solo così riesci ad{" "}
                <strong>
                ottenere il massimo dal tuo investimento 
                </strong>
                senza rischiare possibili penalizzazioni da parte della piattaforma, ovvero cancellazione delle interazioni ritenute “sospette” e il temutissimo “Shadow-Ban”.
              </p>

              <p className="text-lg text-muted-foreground">
              Fai molta attenzione a ciò che leggerai, dato che{" "}
                <strong>può tornarti utile anche nel caso volessi <a href="https://glowlikes.it/comprare-iscritti-youtube/" className="mystyle">comprare iscritti YouTube</a>, ore di visualizzazione e altro ancora.</strong>.
              </p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 md:order-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Per quali video si possono comprare Visualizzazioni YouTube_ no background.png"
                alt="Per quali video si possono comprare Visualizzazioni YouTube?"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeViewsInfo;