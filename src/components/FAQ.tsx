const FAQ = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
        Domande Frequenti
      </h2>
      <div className="space-y-12">
        <div 
          className="bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
            group"
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary group-hover:text-glow transition-all duration-300">
            1. Dopo quanto vedrò le mie visualizzazioni YouTube salire?
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Tutto dipende da pacchetto che hai comprato. Ovviamente, se si tratta di poche centinaia, riusciamo a consegnare l'ordine entro poche ore.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Per i pacchetti più ampi, invece, ci prendiamo alcuni giorni lavorativi. Da un lato, questo arco temporale ci è necessario per poter preparare materialmente gli account che, poi, effettueranno le visualizzazioni vere e proprie.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Dall'altro, invece, "diluire" i grossi pacchetti nel tempo è anche il modo migliore per simulare una reale crescita organica.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Quindi, mal che vada, vedrai consegnate tutte le visualizzazioni entro 4-5 giorni lavorativi.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Nell'ipotesi in cui ci fossero esigenze particolari da parte tua, non esitare a contattare il nostro Staff per trovare insieme la soluzione migliore.
            </p>
          </div>
        </div>

        <div 
          className="bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
            group"
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary group-hover:text-glow transition-all duration-300">
            2. I miei iscritti si accorgeranno delle visualizzazioni YouTube acquistate?
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Assolutamente no, i nostri servizi sono così discreti che le interazioni da noi acquistate vengono scambiate come acquisite in modo organico, sia dai crawler della piattaforma, che dai tuoi iscritti.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Detto ciò, questo accade quando si fanno le "cose fatte bene". Cosa intendiamo?
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Beh, se hai il canale aperto di recente e pochi video caricati, un improvviso e repentino aumento di visualizzazioni potrebbe sì creare sospetti.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Ecco perché è fondamentale comprare visualizzazioni YouTube in modo corretto, ossia un po' alla volta, in modo che le interazioni acquisite risultino ottenute in modo "genuino" e non come conseguenza di una strategia di Social Media Marketing.
            </p>
          </div>
        </div>

        <div 
          className="bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]
            group"
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary group-hover:text-glow transition-all duration-300">
            3. Davvero da voi posso comprare visualizzazioni YouTube reali?
          </h3>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Certo che sì, il nostro Staff tecnico è sempre al lavoro per creare interazioni reali e che non hanno nulla di diverso rispetto alla visualizzazione o al like ricevuto da un utente "in carne ed ossa", realmente interessato ai tuoi contenuti.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              A tal proposito, ti consigliamo di diffidare da tutti quei venditori che propongono interazioni social non reali.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              In questo modo, difatti, rischi solo che i crawler rilevino delle attività sospette e, nei casi più gravi, sospendere e pure eliminare il tuo canale.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Comunque sia, rivolgendoti a noi non avrai nulla da temere perché prendiamo tutte le precauzioni possibili in tal senso.
            </p>
          </div>
        </div>

        {/* Add the rest of the FAQ questions in similar fashion... */}
        
      </div>
    </section>
  );
};

export default FAQ;
