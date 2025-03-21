import { motion } from "framer-motion";

const WhyBuyViews = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative space-y-24">
        {/* First Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
        >
          <div className="flex-1 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Tipologie di video per cui si possono comprare Like YouTube
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                    alt="Comprare Visualizzazioni YouTube_per quale motivo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
              Uno dei nostri punti di forza è proprio questo, <strong>da noi puoi comprare Mi Piace YouTube per qualsiasi tipologia di video!</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Difatti,  <strong>ogni giorno lavoriamo con decine e decine di realtà diverse</strong> che operano nelle nicchie di mercato più disparate, talvolta anche trasversalmente.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Le uniche 2 questioni che solleviamo, però, sono di natura prettamente tecnica. Possiamo <strong>“recapitare” le nostre interazioni solo a video pubblici.</strong></p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Pertanto, se i tuoi dovessero avere delle restrizioni, assicurati di toglierle, prima di effettuare l'ordine.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Comunque sia, questo è un dettaglio che riprenderemo più avanti, nella sezione in cui spieghiamo <strong>come acquistare dal nostro store online.</strong></p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              L'altra questione, riguarda il formato. Il <strong>servizio che ti stiamo proponendo è valido per i video “tradizionali”, giusto per intenderci.</strong></p>
              <p>
              <strong>Se, invece, fossi intenzionato a <a href="https://glowlikes.it/comprare-visualizzazioni-e-like-youtube-shorts/" className="mystyle">comprare Like YouTube Shorts</a>, allora vai pure alla sezione dedicata</strong> e segui le nostre indicazioni per procedere.
Adesso, però, torniamo a noi e proseguiamo con la guida.

              </p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                alt="Comprare Visualizzazioni YouTube_per quale motivo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: window.innerWidth > 768 ? 0.4 : 0,
            ease: "easeOut",
            willChange: "transform, opacity"
          }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
          style={{ 
            transform: "translateZ(0)",
            willChange: "transform"
          }}
        >
          <div className="flex-1 md:order-2 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Le casistiche in cui conviene comprare Like YouTube
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Perche_comprare_Visualizzazioni_YouTube_da_noi_su_glowlikes_no_background.png"
                    alt="Perché comprare Visualizzazioni YouTube da noi su glowlikes"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
              In linea di massima, consigliamo di <strong>comprare Mi Piace YouTube nelle seguenti circostanze:</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              <strong>Canale aperto da poco:</strong> è vero, non possiamo conoscere il funzionamento dei crawler di YouTube alla perfezione, visto che è coperto da segreto industriale. Al tempo stesso, però, sappiamo di per certo che, a ricevere più visibilità, sono i canali più “movimentati”, sotto il profilo delle interazioni. Ecco perché quelli aperti da poco tendono ad essere penalizzati in tal senso. <strong>Comprare Like YouTube</strong> serve proprio a questo, ovvero dare un segnale ai crawler in modo che indicizzino meglio il proprio canale e i propri contenuti
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              <strong>“Stallo” prolungato:</strong> è quella situazione tale per cui il canale ha già dei “numeri” ma, non crescendo (o crescendo troppo lentamente), <strong>tende a venir “sorpassato” dai competitor un “pelino” più movimentati.</strong> In questo caso, invece, <strong>comprare Mi Piace YouTube</strong> serve a non perdere dei traguardi già ottenuti con fatica nel corso del tempo.
              </p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 md:order-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Perche_comprare_Visualizzazioni_YouTube_da_noi_su_glowlikes_no_background.png"
                alt="Perché comprare Visualizzazioni YouTube da noi su glowlikes"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* First Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
        >
          <div className="flex-1 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Le truffe nascoste dietro al comprare Like YouTube
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                    alt="Comprare Visualizzazioni YouTube_per quale motivo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
              Probabilmente non ci hai mai fatto caso, ma noi, come le altre agenzie che operano nel settore, <strong>non chiediamo mai i codici di accesso al canale.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Attenzione, <strong>purtroppo i servizi di Social Media Marketing vengono utilizzati come “esche”</strong> per sottrarre dati o denaro in modo illecito.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Infatti, <strong>per erogare il nostro servizio ci serve solo l'URL nel formato descritto </strong>in precedenza, nella sezione dedicata al tutorial.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Dopodiché, stop! Non ci serve altro, <strong>nemmeno nel caso tu voglia <a href="https://glowlikes.it/comprare-visualizzazioni-youtube/" className="mystyle">comprare visualizzazioni YouTube</a>, spettatori delle dirette e qualsiasi altra interazione</strong> social.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Detto ciò, è vero che i truffatori vengono presto scoperti ma, almeno, <strong>ti abbiamo avvisato e, nel caso non volessi scegliere il nostro servizio</strong> (peccato, siamo tra i migliori d'Italia!), almeno non rischi che qualcuno possa “hackerarti” il canale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Quindi, diffida sempre da chi, una volta piazzato l'ordine, dovesse <strong>ricontattarti chiedendoti user-name e password del canale.</strong>
              </p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                alt="Comprare Visualizzazioni YouTube_per quale motivo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default WhyBuyViews;
