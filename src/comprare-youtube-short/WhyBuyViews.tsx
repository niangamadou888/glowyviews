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
              Comprare Visualizzazioni e Like YouTube Shorts: S.M.M. senza confini!
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
              Pensa che, fino a circa 15 anni fa, il <strong>ocial Media Marketing (abbreviato “S.M.M.”) era una disciplina pressoché sconosciuta.</strong>S
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Insomma, le prime piattaforme avevano fatto il loro debutto suscitando, però, <strong>maggiore interesse nelle fasce di popolazioni più giovani.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Nonostante ciò, pian piano la diffusione dei social ha preso piede, sino ad arrivare ai giorni nostri, in cui <strong>non è più una novità avviare un business proprio grazie al “Tubo”.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              C'è <strong>chi lo usa per accrescere la propria visibilità</strong> e, in sostanza, farsi pubblicità su larga senza costi diretti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Al tempo stesso, però, <strong>c'è anche chi guadagna in modo diretto da YouTube</strong>, ovvero aderendo al programma di partnership grazie a cui monetizzare i proprio contenuti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Chiariti questi aspetti generali, probabilmente avrai <strong>già sentito del commercio di like, follower e altre “canoniche”</strong> interazioni.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Tuttavia, solo poche agenzie (proprio come la nostra) consentono pure di <strong>comprare visualizzazioni e like YouTube Shorts</strong>, data la novità di questo formato video.
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
              Comprare Visualizzazioni e Like YouTube Shorts: il nuovo formato di tendenza
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
              Non serve certo essere degli esperti di Social Media Marketing per notare che, da qualche anno a questa parte, <strong>YouTube consente il caricamento dei cosiddetti “Shorts”</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Si tratta, per l'appunto, di <strong>video brevi, della durata massima di 60 secondi</strong> e che presentano il formato verticale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Si tratta di una vera e propria categoria a parte, dal momento che <strong>vengono mostrati in un'apposita sezione delle home-page.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Inoltre, anche la loro visualizzazione in successione appare diversa. Con i video normali, infatti, <strong>per cambiare contenuto è necessario cliccare (o fare tap) su uno dei video</strong> correlati mostrati sulla destra, piuttosto che “skippare” grazie al bottone presente sul lettore, subito in parte a “Play/Pausa”.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Con gli Shorts, invece, <strong>è sufficiente “scrollare” verso il basso o l'alto e, ad ogni “scollata” ne apparirà uno nuovo</strong> “suggerito” dall'algoritmo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Detto ciò, si tratta di un formato video molto apprezzato dai giovani e dai giovanissimi, proprio perché <strong>più ben disposti nei confronti di contenuti brevi e “condensati”.</strong>
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
              Perché considerare anche il comprare Visualizzazioni e Like YouTube Shorts
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
              Probabilmente, ti starai chiedendo perché comprare <strong>comprare visualizzazioni e like YouTube Shorts</strong> se il tuo target non ne va particolarmente “pazzo”.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Beh, grazie ad essi <strong>potresti raggiungere una diversa fascia di utenti</strong> che, però, può essere interessata ai tuoi contenuti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Ad esempio, mettiamo caso che ti occupi di libri e letteratura, un nicchia in cui l'età media è “altina”. Per quanto siano pochi, <strong>con gli Shorts potresti, ad esempio, “intercettare” qualche giovane.</strong>

              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Come si suol dire, <strong>meglio un follower in più che in meno!</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Non solo, <strong>gli Shorts ti permettono pure di “condensare” argomenti complessi</strong> e confezionare una sorta di “assaggino” con cui spingere gli utenti a seguire le dirette, piuttosto che a vedere dei video medio-lunghi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Per via della loro stessa natura, <strong>gli algoritmi che regolano la visibilità degli Shorts “viaggiano” molto più veloci</strong>, pertanto, nel giro di poco tempo, potrebbe essere che il tuo appaia subito prima (o subito dopo) ad uno Shorts che sta andando virale.
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
