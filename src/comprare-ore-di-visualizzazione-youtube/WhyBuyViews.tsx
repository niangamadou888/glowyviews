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
              Davvero si possono comprare ore di visualizzazione YouTube?
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
              Per quanto ti possa sembrare assurdo, <strong>sì, è davvero possibile comprare ore di visualizzazione YouTube.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Anzi, per dirla tutta, non sono le uniche interazioni social attorno alle quali si è sviluppato un fiorente mercato. Difatti, <strong>è possibile anche acquistare like, commenti, iscritti e molto altro.</strong> Perché tutto questo?</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Beh, con il passare del tempo, i <strong>social network hanno subito un drastico cambio di utilizzo.</strong></p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              All'inizio, venivano <strong>usati da una ristretta percentuale di popolazione, solitamente con il solo scopo di <a href="https://www.treccani.it/vocabolario/ricerca/ammazzare-il-tempo/" className="mystyle">“ammazzare il tempo”</a>.</strong></p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Oggigiorno, invece, sono molto più diffusi e, spesso, <strong>utilizzati anche nell'ambito di una vera e propria attività lavorativa.</strong></p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Non a caso, la <strong>figura dei cosiddetti “Youtuber” è divenuta un lavoro a tutti gli effetti,</strong> tanto che richiede pure l'apertura di una regolare partita IVA.</p>
              <p>
              Chiarite le dinamiche di carattere generale, ora <strong>viene da chiedersi come mai sia sorta la necessità di comprare ore di visualizzazione YouTube</strong> quando, in realtà, la loro acquisizione dovrebbe essere uno degli obiettivi della propria attività social.
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
              Comprare ore di visualizzazione YouTube: se lo faccio finisco nei casini?
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
              Proseguiamo la nostra guida rassicurandoti sul fatto che <strong>comprare ore di visualizzazione YouTube non ti metterà nei casini</strong>, dal momento che non vi è nulla di illegale in tutto ciò.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Insomma, se ci sono così tante agenzie come la nostra è proprio per questo motivo, ovvero <strong>si tratta di un regolare servizio di Social Media Marketing.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Volendo essere precisi, <strong>ve ne sono anche tanti altri, come, ad esempio, il <a href="https://glowlikes.it/comprare-like-youtube/" className="mystyle">comprare Like YouTube</a>, piuttosto che i commenti.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Appurato il fatto che <strong>acquistare servizi di Social Media Marketing è perfettamente legale</strong>, dobbiamo fare un'ulteriore riflessione.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Sebbene non ci siano problemi nei confronti delle istituzioni giudiziarie, <strong>potresti comunque correre dei rischi sul piano della “policy” di YouTube</strong> stesso.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Difatti, la piattaforma <strong>penalizza tutti quei canali che si avvalgono di interazioni social fittizie</strong>, aventi lo scopo di alterare artificialmente il conteggio dei vari parametri.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Poco male, dal momento che <strong>noi di GlowLikes sappiamo come muoverci per evitare tutto ciò</strong> ai nostri clienti.
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
              Comprare ore di visualizzazione YouTube e non solo su GlowLikes!
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
              Come già brevemente accennato, da <strong>noi di GlowLikes offriamo una miriade di servizi diversi.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Ad esempio, <a href="https://glowlikes.it/comprare-commenti-youtube/" className="mystyle">comprare commenti YouTube</a> <strong>può essere considerata come una valida “strategia di supporto”.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Non a caso, i <strong>parametri utilizzati dai crawler della piattaforma per ordinare i risultati di ricerca</strong> e quindi, determinare la visibilità di un video (o di un canale) sono diversi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              In un certo senso, <strong>YouTube fa una sorta di “media” di tutte le interazioni social</strong> che si ricevono. Ecco perché suggeriamo di agire su più fronti diversi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Volendo, da noi puoi <a href="https://glowlikes.it/comprare-iscritti-youtube/" className="mystyle">comprare anche iscritti YouTube</a> <strong>che, senz'altro, ti daranno un valido aiuto nello scavalcare i tuoi competitor.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Di conseguenza, non farti problemi, visto che, una volta iscritto, <strong>potrai accedere a tutti i servizi presenti in vendita</strong> sul nostro store online.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Chiaramente, potrai acquistarli in modo automatizzato, semplicemente scegliendo l'offerta più in linea con i tuoi obiettivi e seguendo le istruzioni per l'erogazione.
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
