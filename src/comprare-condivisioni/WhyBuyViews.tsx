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
              Comprare condivisioni YouTube al posto del lavoro organico? Non proprio!
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
              Ormai sempre più creator parlano di {" "}
                <strong>comprare condivisioni YouTube... </strong>ma di cosa si tratta davvero? Molto semplicemente, è una manovra di Social Media Marketing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              In pratica,{" "}
                <strong>
                sono un'insieme di tecniche finalizzate a promuovere la propria attività
                </strong>
                sui social, in questo caso il canale YouTube.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Detto ciò, bisogna riconoscere che, in merito,{" "}
                <strong>
                  c'è ancora parecchia confusione
                </strong>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Infatti, alcuni creator e influencer <strong> tendono a considerare questo genere di cose come una sorta di “manovra sostitutiva”</strong> nei confronti del lavoro organico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Insomma, comprando interazioni{" "}
                <strong>
                è davvero possibile risparmiare la fatica “farsi il mazzo”? 
                </strong>
                Assolutamente no!
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
               
                <strong>
                Comprare condivisioni YouTube funziona, 
                </strong>
                a patto che, però, ci sia come base un buon lavoro organico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              In caso contrario,{" "}
                <strong>
                qualsiasi iniziativa di Social Media Marketing si rivelerebbe del tutto inutile.
                </strong>
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
              Tutti i vantaggi del comprare condivisioni YouTube
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
                <strong>
                Comprare condivisioni YouTube
                </strong>{" "}
                nel modo giusto, ti permette di ottenere tutta una serie di vantaggi, ossia:
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                <ol>
                  <li>
                    <strong>1. Aumento della popolarità nello stesso YouTube</strong>
                  </li>
                  <li>
                    <strong>2. Miglior posizionamento SEO</strong>
                  </li>
                  <li>
                    <strong>3. Crescita organica più rapida</strong>
                  </li>
                </ol>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              In via preliminare, notiamo subito come il {" "}
                <strong>
                comprare condivisioni YouTube
                </strong>{" "}
                porti a molteplici vantaggi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Ecco perché, prima di mettere in atto una strategia in tal senso,{" "}
                <strong>è di fondamentale importanza chiedersi quali obiettivi si vogliono raggiungere.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Questo,{" "}
                <strong>
                anche in virtù della “situazione di partenza”. 
                </strong>
                Insomma, ci sono influencer e creator che partono da zero, così come ci sono quelli già ben avviati.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              C'è chi decide di {" "}
                <strong>
                acquistare interazioni social per acquisire un minimo di visibilità, 
                </strong> così come c'è chi lo fa per raggiungere dei nuovi importanti  traguardi.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Ovviamente, questo meccanismo vale per qualsiasi altra strategia di SMM,{" "}
                <strong>
                cioè anche quando si decide di <a href="https://glowlikes.it/comprare-like-youtube/" className="mystyle">comprare like YouTube</a>, visualizzazioni ecc. 
                </strong> 
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
              Aumento della popolarità nello stesso YouTube
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
              Il primo motivo che spinge tanti creator e influencer a {" "}
                <strong>comprare condivisioni YouTube </strong>consiste proprio nell'aumentare la propria popolarità all'interno della stessa piattaforma.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              In che senso? Beh,{" "}
                <strong>
                la risposta è molto semplice.
                </strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Non occorre certo essere degli informatici per sapere che{" "}
                <strong>
                l'intera attività della piattaforma è regolata dai tanto chiacchierati algoritmi.
                </strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Certamente <strong> il loro funzionamento è un qualcosa di estremamente complesso</strong> e che, per ragioni di tipo industriale, non può essere conosciuto nei minimi dettagli, ad esclusione dello Staff tecnico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Tuttavia, ciò che sappiamo con certezza è che{" "}
                <strong>
                questi algoritmi tendono ad assegnare maggiore visibilità
                </strong>
                proprio a quei canali (e, quindi, anche ai loro contenuti) che vantano un numero maggiore di interazioni social.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
               
                <strong>
                Comprare condivisioni YouTube funziona, 
                </strong>
                a patto che, però, ci sia come base un buon lavoro organico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Per farla breve, più condivisioni, like e visualizzazioni ricevi, più sono alte le possibilità di{" "}
                <strong>
                collocarti in cima ai risultati di un'eventuale ricerca o di apparire in primo piano nei feed 
                </strong>degli utenti.
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
              Miglior posizionamento SEO
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
              Non solo,
                <strong>
                 Comprare condivisioni YouTube
                </strong>{" "}
                è anche un ottimo modo per migliorare il proprio posizionamento all'interno dei motori di ricerca esterni.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Insomma, condurre tali strategie di Social Media Marketing significa, a tutti gli effetti,
              <strong> sfruttare la SEO a proprio vantaggio.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              A maggior ragione, se queste condivisioni vengono{" "}
                <strong>
                fatte in piattaforme come Reddit, Tumblr, Pinterest e via dicendo.
                </strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Quando un utente digita determinate parole chiave nella barra di un motore di ricerca, tra i risultati può benissimo{" "}
                <strong>comparire una di queste pagine al cui interno c'è, per l'appunto, un tuo video YouTube condiviso.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Così facendo, dunque,{" "}
                <strong>
                hai molte più possibilità di attrarre nuovi potenziali follower  
                </strong>
                che, per tutta una serie di ragioni, ancora non ti conoscono.
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
              Crescita organica più rapida
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
              Per concludere la prima parte di questa guida,{" "}
                <strong>comprare condivisioni YouTube </strong>è, a tutti gli effetti, un modo per velocizzare il processo di crescita organica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                <strong>
                Le condivisioni aumentano la tua popolarità e visibilità, 
                </strong>
                sia all'interno della stessa piattaforma, che fuori, proprio come abbiamo visto al precedente paragrafo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Se i tuoi contenuti sono di qualità,{" "}
                <strong>
                non ci vorrà molto affinché qualcuno decida di iscriversi al tuo canale, 
                </strong>piuttosto che interagire tramite like o commenti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Giusto per fare un paragone, queste tecniche di Social Media Marketing <strong> sono da considerarsi come una “scintilla” pronta a far esplodere la tua visibilità. </strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Tuttavia,{" "}
                <strong>
                 è necessario che vi sia del “combustibile” 
                </strong>
                (cioè la tua attività di creator), altrimenti la scintilla sarebbe del tutto inutile.
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
