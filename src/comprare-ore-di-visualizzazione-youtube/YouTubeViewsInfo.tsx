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
              Perché comprare ore di visualizzazione YouTube qui su GlowLikes
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
                I cosiddetti <strong>“pacchi” e “bidoni” sono sempre dietro l'angolo e il Social Media Marketing non fa eccezione</strong> in tal senso.
              </p>
              <p className="text-lg text-muted-foreground ">
              È da qui che nasce l'esigenza di rivolgersi a solide realtà, proprio come GlowLikes. Infatti, tutti i nostri servizi sono garantiti a norma di legge, quindi <strong>ti viene riconosciuto il diritto di recesso</strong>, ma anche quello di rimborso.
              </p>
              <p className="text-lg text-muted-foreground">
              Inoltre, sul nostro sito <strong>trovi anche tanti utili consigli, “condensati” in guide pratiche</strong>, proprio come questa che stai leggendo.</p>

              <p className="text-lg text-muted-foreground">
              Senza tenere conto del fatto che, qualora avessi delle esigenze particolari, <strong>puoi scriverci senza problemi e, insieme, troveremo la soluzione più adatta a te.</strong>
              </p>
              <p className="text-lg text-muted-foreground">
              Infine, rivolgersi ad un'agenzia di <strong>Social Media Marketing che opera in modo “limpido e cristallino”</strong> comporta pure una gran bella comodità.
              </p>
              <p className="text-lg text-muted-foreground">
              In questo modo, infatti, <strong>hai un solo punto riferimento per tutte le diverse strategie</strong> che deciderai di intraprendere.
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
              Comprare ore di visualizzazione YouTube: cosa fare in caso di problemi con l'ordine
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
              Perché <strong>comprare ore di visualizzazione YouTube</strong> da noi su GlowLikes? Semplice, forniamo anche un servizio di assistenza di prim'ordine!
              </p>
              <p className="text-lg text-muted-foreground">
              È vero, <strong>capita davvero di rado che sorgano dei problemi</strong> nell'erogazione dei nostri servizi. In fin dei conti, però, siamo tutti esseri umani, quindi gli inconvenienti possono sempre capitare.
              </p>
              <p className="text-lg text-muted-foreground">
              Comunque sia, non c'è nulla di cui preoccuparsi, visto che <strong>il nostro servizio di assistenza clienti è sempre in prima linea</strong> per risolvere eventuali disservizi.
              </p>

              <p className="text-lg text-muted-foreground">
              <strong>Tutto ciò che devi fare è servirti del form contatti</strong> e spiegare, per sommi capi, quale sia il problema in questione.</p>


              <p className="text-lg text-muted-foreground">
              Per una celere risoluzione, poi, <strong>ti invitiamo a scrivere anche il numero di ordine,</strong> in modo che il nostro Staff lo possa ricercare rapidamente all'interno dei nostri sistemi.</p>
              
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