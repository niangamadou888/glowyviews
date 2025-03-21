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
              Il motivo che spinge tanti creator a comprare commenti YouTube
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
              Tanti creator prendono in considerazione l'idea di <strong>comprare commenti YouTube italiani e reali al fine di “rompere” gli schemi che regolano l'<a href="https://it.wikipedia.org/wiki/Crawler" className="mystyle">attività dei crawler</a> della piattaforma.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Permettici di spiegare meglio. Innanzitutto, non serve certo essere degli esperti per notare che <strong>alcuni video godono di una visibilità maggiore</strong> rispetto ad altri.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Insomma, come mai, a fronte di una ricerca, <strong>appaiono determinati contenuti nelle prime posizioni</strong> e non altri?</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Ovviamente, i <strong>crawler compiono una sorta di “cernita” in tal senso</strong>, visto che, data la mole di video caricati, sarebbe impossibile mostrare tutti quelli relativi a determinate “parole chiave” ricercate.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Quindi, sorge spontanea una domanda. <strong>Cos'è che permette ad un video di raggiungere i primi posti di una ricerca</strong>, oppure venir suggerito come contenuto correlato?</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              In linea di massima, la <strong>“discriminante” è rappresentata proprio dalle interazioni social</strong> ricevute.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Ecco perché i creator che non ne hanno molte <strong>prendono in considerazione l'ipotesi di comprare commenti YouTube.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Per certi versi, questo serve proprio a dare un “segnale” ai crawler, del tipo: <strong>“Ehilà, ci sono anch'io con i miei video!”.</strong>
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
              Posso comprare commenti YouTube anche per i miei video?
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
              <strong>I nostri servizi sono rivolti a tutti i creator,</strong> senza alcuna discriminazione. Quindi, puoi tranquillamente <strong>comprare commenti YouTube italiani e reali anche per i tuoi video!</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Insomma, poco importa di cosa ti occupi, quale sia il tuo stile, così come gli obiettivi che vuoi raggiungere.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Difatti, <strong>sono anni che collaboriamo con le realtà più disparate.</strong> Dalle grandi aziende ben strutturate, fino al freelancer che porta avanti un piccolo business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Detto ciò, l'unica cosa davvero importante, è <strong>che il video (o i video) in questione sia pubblico, perché, altrimenti, difficilmente potremmo “recapitarti”</strong> i commenti da comprati.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Inoltre, tieni presente che questo <strong>specifico servizio è destinato ai soli video “classici”, cioè non è applicabile agli Shorts</strong>, ma nemmeno ai messaggi postati tramite la sezione “Community”.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              In tal senso, puoi <strong>tranquillamente considerare di <a href="https://glowlikes.it/comprare-visualizzazioni-e-like-youtube-shorts/" className="mystyle">comprare like e visualizzazioni per YouTube Shorts</a>,</strong> dato che vendiamo anche questo genere di interazioni.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Per il resto, non c'è alcun problema e, tra poco, ti spiegheremo pure <strong>come effettuare il tuo primo ordine.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Prima, però, rispondiamo ad un'altra importantissima domanda. <strong>Comprare commenti YouTube è legale? Ecco come stanno davvero le cose!</strong>
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
              Comprare commenti YouTube è vietato dalla policy del social: che fare?
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
              Come già anticipato, <strong>comprare commenti YouTube viene giudicata come pratica non ammessa dalla “policy”</strong> della piattaforma.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Potrebbe essere un bel problema, ma non ci riguarda! Infatti, ci serviamo dei migliori mezzi tecnologici per produrre e “consegnare” delle interazioni che passano – effettivamente – come “genuine”.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Grazie a ciò, dunque, non devi nemmeno preoccuparti di tale aspetto. Anzi, per essere precisi, c'è un dettaglio a cui prestare attenzione, ovvero la tempistica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Sebbene sia <strong>impossibile risalire al fatto che tu abbia acquistato dei commenti YouTube da noi</strong>, un improvviso e anomalo incremento di questi ultimi potrebbe destare dei sospetti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Quindi, quello che possiamo consigliarti è proprio questo, <strong>ossia elaborare una strategia da portare avanti nel tempo, in modo che tutto fili “liscio come l'olio”</strong>, senza intoppi di sorta.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Per i commenti, certamente, ma <strong>anche nel caso volessi <a href="https://glowlikes.it/comprare-iscritti-youtube/" className="mystyle">comprare iscritti YouTube</a>, commenti e/o qualsiasi altra interazione.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Se non sai da che parte iniziare, andiamo subito al prossimo sottoparagrafo in cui ti diamo <strong>alcune indicazioni di carattere generale.</strong>
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
