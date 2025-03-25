import { useState, useEffect } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Add schema markup
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "È legale comprare like YouTube, Facebook, ecc.?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tutto dipende da pacchetto che hai comprato. Per poche centinaia di visualizzazioni, riusciamo a consegnare l'ordine in poche ore. Per i pacchetti più ampi, ci prendiamo alcuni giorni lavorativi per simulare una reale crescita organica.Quindi, mal che vada, vedrai consegnate tutte le visualizzazioni entro 4-5 giorni lavorativi.Nell'ipotesi in cui ci fossero esigenze particolari da parte tua, non esitare a contattare il nostro Staff per trovare insieme la soluzione migliore."
          }
        },
        {
          "@type": "Question",
          "name": "I miei iscritti si accorgeranno delle visualizzazioni YouTube acquistate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Assolutamente no, i nostri servizi sono così discreti che le interazioni da noi acquistate vengono scambiate come acquisite in modo organico, sia dai crawler della piattaforma, che dai tuoi iscritti. Detto ciò, questo accade quando si fanno le cose fatte bene. Cosa intendiamo? Beh, se hai il canale aperto di recente e pochi video caricati, un improvviso e repentino aumento di visualizzazioni potrebbe sì creare sospetti. Ecco perché è fondamentale comprare visualizzazioni YouTube in modo corretto, ossia un po' alla volta, in modo che le interazioni acquisite risultino ottenute in modo genuino e non come conseguenza di una strategia di Social Media Marketing."
          }
        },
        {
          "@type": "Question",
          "name": "Davvero da voi posco comprare visualizzazioni YouTube reali?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Certo che sì, il nostro Staff tecnico è sempre al lavoro per creare interazioni reali e che non hanno nulla di diverso rispetto alla visualizzazione o al like ricevuto da un utente “in carne ed ossa”, realmente interessato ai tuoi contenuti. A tal proposito, ti consigliamo di diffidare da tutti quei venditori che propongono interazioni social non reali. In questo modo, difatti, rischi solo che i crawler rilevino delle attività sospette e, nei casi più gravi, sospendere e pure eliminare il tuo canale. Comunque sia, rivolgendoti a noi non avrai nulla da temere perché prendiamo tutte le precauzioni possibili in tal senso."
          }
        },
        {
          "@type": "Question",
          "name": "Devo fornire i miei codici di accesso una volta acquistato il servizio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Assolutamente no! Eroghiamo i nostri servizi chiedendo solo ed esclusivamente l'URL del video pubblico. Basta e avanza, perché non ci serve altro. Ne approfittiamo per aprire una breve parentesi a riguardo, mettendoti in allerta da alcuni pericoli in cui puoi imbatterti. Purtroppo, i cosiddetti “pacchi” sono sempre dietro l'angolo. Ad esempio, ci sono dei truffatori che, utilizzando proprio la scusa dell'erogazione di un servizio di Social Media Marketing, chiedono i codici personali ai malcapitati. Al massimo, richiediamo il tuo indirizzo e-mail in fase di registrazione su cui, tra l'altro, ti arriveranno le conferme d'ordine e il rispettivo numero univoco."
          }
        },
        {
          "@type": "Question",
          "name": "Comprare visualizzazioni YouTube è sicuro?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Certo che sì, dal momento che è una pratica legale al 100%, quindi non si infrange alcuna legge. Non solo, comprare views YouTube da noi di glowlikes è sicuro perché siamo una realtà seria, operante nella piena legalità e in grado di fornire ai nostri utenti ogni garanzia commerciale possibile. Per certi versi, si tratta di una pratica sicura anche perché, grazie a tutte le precauzioni che prendiamo nell'erogazione dei nostri servizi, né i tuoi follower, né i crawler di YouTube sono in grado di risalire all'origine delle interazioni stesse. Di conseguenza, eviti pure possibili penalizzazioni del canale per “spam” o pratica non consentita dalla “policy”."
          }
        },
        {
          "@type": "Question",
          "name": "Come incrementare le visualizzazioni anche in modo organico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lo scopo di ogni YouTuber dovrebbe essere proprio questo, ossia incrementare le visualizzazioni in modo organico e “crescere” come creator in modo “genuino”. Come si raggiunge, quindi, questo obiettivo? Beh, prima di tutto devi pubblicare video di qualità e, fin qui, nulla ci piove. Tu, perderesti mai del tempo per guardare dei pessimi video, sia sotto il profilo dell'editing, che dei contenuti? Ovvio che no, ma tieni presente che questo vale per tutti. Un'altra cosa che dovresti fare sarebbe quella di redigere un piano editoriale, in modo da mettere “nero su bianco” tutte le tue idee e, al tempo stesso, dare regolarità alle tue pubblicazioni. Per quanto possano essere ben fatti, pubblicare video ad “ogni morte del papa” non ti porta alcun beneficio, anzi."
          }
        },
        {
          "@type": "Question",
          "name": "Come faccio a riconoscere le agenzie di Social Marketing davvero affidabili?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per riconoscere le agenzie di Social Media Marketing davvero affidabili devi dare uno sguardo ai prezzi dei servizi. Infatti, quando sono troppo bassi, significa che, sotto, c'è qualcosa che non va. Insomma, immagina di imbatterti nell'annuncio di una Ferrari in vendita a 10mila euro. Secondo te, c'è da fidarsi? Per carità, siamo tutti d'accordo che, al giorno d'oggi, il costo della vita sia davvero alto e che, quindi, dobbiamo risparmiare il più possibile. Al tempo stesso, però, se necessiti di un servizio di qualità, devi comunque tenere conto che non si può scendere sotto ad una certa soglia. Diffida sempre, dunque, da quelle offerte che promettono interazioni social troppo economiche."
          }
        },
        {
          "@type": "Question",
          "name": "Bisogna, per forza, comprare visualizzazioni YouTube?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ovvio che no, comprare views YouTube non è mica un obbligo o, comunque, una tecnica di Social Media Marketing da attuare per forza. Se il tuo canale e i tuoi video stanno andando alla grande, allora significa che stai già raggiungendo i tuoi traguardi in modo “genuino”. In parallelo, poi, c'è un'altra questione. Infatti, può essere che, nel tuo caso specifico, tu abbia più bisogno di comprare Like YouTube. A grandi linee, prima di intraprendere una qualsivoglia strategia di Social Media Marketing, devi analizzare dettagliatamente la tua situazione e mettere in atto quella che realmente può dare i risultati migliori."
          }
        },
        {
          "@type": "Question",
          "name": "Cosa succede una volta acquistate le visualizzazioni YouTube?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Una volta comprate le views YouTube, nelle ore (o nei giorni) successive le vedrai crescere, conteggiate dal rispettivo contatore. Con il tempo, poi, noterai un altro fenomeno. Difatti, i tuoi contenuti cominceranno ad essere – pian piano – sempre più visibili. Li vedrai apparire in posizioni più favorevoli all'interno dei risultati di ricerca, così come li vedrai più spesso tra i risultati correlati. Tuttavia, tieni presente che ciò non accade dall'oggi al domani, pertanto devi essere disposto a portare un minimo di pazienza. Se, poi, migliori anche la tua attività di creator, vedrai che i numeri saliranno, mentre i tempi si accorceranno. Insomma, devi lavorare su più fronti, dal “puro” marketing, alla “sostanza” che caratterizza i tuoi video."
          }
        },
        {
          "@type": "Question",
          "name": "Diventerò più popolare dopo aver comprato visualizzazioni YouTube?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Se compri visualizzazioni YouTube reali e italiane in modo mirato, nel giro di poco tempo vedrai la tua popolarità aumentare. Perché si verifica tutto ciò? I crawler della piattaforma social sfruttano complessi algoritmi che, in linea di massima, tendendo a premiare i canali più “attivi”. Con “attivi”, intendiamo contenuti di qualità e pubblicati con costanza, seguendo un piano editoriale redatto con tutti i crismi. Non solo, l'attività di un canale è data proprio anche dalle interazioni social ricevute. Per certi versi, più alti sono i numeri dei tuoi contatori, più verrai “premiato” dai crawler di YouTube. Attenzione, però, non basta comprare views YouTube “una tantum” e aspettare passivamente, “tirando i remi in barca”."
          }
        },
        {
          "@type": "Question",
          "name": "Ho comprato views YouTube ma non le vedo conteggiate: cosa faccio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mantieni “calma e sangue freddo” perché noi di glowlikes non lasciamo mai soli i nostri clienti! Guarda, l'ipotesi descritta dalla domanda è davvero remota. Dal nostro “debutto” ad oggi, sarà successo – sì e no – un paio di volte al massimo. Chiarito questo, qualora non riscontrassi la “consegna” del tuo ordine, contatta subito il nostro centro assistenza clienti. A seguito dell'acquisto, ricevi in automatico una e-mail di conferma, in cui, tra le varie cose, è riportato il codice stesso dell'ordine da te piazzato. Includilo nella tua richiesta d'aiuto, così potremo risalire al problema in men che non si dica e provvedere alla “consegna” delle visualizzazioni YouTube da te acquistate."
          }
        },
        {
          "@type": "Question",
          "name": "Posso comprare visualizzazioni YouTube in qualsiasi momento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nonostante ogni ordine venga elaborato e supervisionato da un nostro collaboratore umano e “in carne ed ossa”, il nostro store online è aperto 24 ore su 24, 7 giorni su 7. Di conseguenza, puoi comprare views YouTube italiane e reali in qualsiasi momento, semplicemente connettendoti alla nostra piattaforma ed entrando nella tua area riservata. A proposito, se hai determinate scadenze da rispettare, consigliamo di effettuare gli ordini all'inizio della settimana in quanto, nel “week end”, il nostro Staff non lavora. Lo stesso, chiaramente, vale anche per le altre festività. Per il resto, non c'è alcun problema, sei libero di comprare visualizzazioni YouTube ogni qualvolta tu ne abbia bisogno."
          }
        }
      ]
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-24" id='faq'>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-primary/80 to-purple-500 bg-clip-text text-transparent">
        Domande Frequenti
      </h2>
      <div className="space-y-4">
        {/* Example of one FAQ item - repeat pattern for others */}
        <div 
          className={`bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-xl p-6 
            backdrop-blur-lg border-l-4 transition-all duration-500 ease-in-out cursor-pointer
            ${openIndex === 0 ? 'border-l-primary shadow-lg' : 'border-l-transparent hover:border-l-primary/50'}
            group`}
          onClick={() => handleToggle(0)}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className={`text-xl md:text-2xl font-medium 
              ${openIndex === 0 ? 'text-primary' : 'text-white/90'} 
              group-hover:text-primary transition-colors duration-300`}>
              1. È legale comprare like YouTube, Facebook, ecc.?
            </h3>
            <span className={`text-primary text-2xl transition-transform duration-500 
              ${openIndex === 0 ? 'rotate-45' : ''}`}>
              +
            </span>
          </div>
          <div className={`grid transition-all duration-500 ease-in-out
            ${openIndex === 0 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
            <p className="text-white/70 leading-relaxed">
              Sì, a dispetto di quello che puoi leggere in rete, <strong>acquistare interazioni social è un'attività perfettamente legale.</strong>.
              </p>
              <p className="text-white/70 leading-relaxed">
              <strong><a href="https://glowlikes.it/comprare-like-facebook/">Comprare like Facebook</a>, YouTube e via dicendo non comporta alcun tipo di problema, </strong> né da parte delle autorità italiane, né da quelle internazionali.
            </p>
              {/* Rest of the answer content */}
            </div>
          </div>
        </div>

        <div 
          className={`bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-xl p-6 
            backdrop-blur-lg border-l-4 transition-all duration-500 ease-in-out cursor-pointer
            ${openIndex === 1 ? 'border-l-primary shadow-lg' : 'border-l-transparent hover:border-l-primary/50'}
            group`}
          onClick={() => handleToggle(1)}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className={`text-xl md:text-2xl font-medium 
              ${openIndex === 1 ? 'text-primary' : 'text-white/90'} 
              group-hover:text-primary transition-colors duration-300`}>
              2. Quanto costa mediamente comprare visualizzazioni Instagram, piuttosto che TikTok o quant'altro?
            </h3>
            <span className={`text-primary text-2xl transition-transform duration-500 
              ${openIndex === 1 ? 'rotate-45' : ''}`}>
              +
            </span>
          </div>
          <div className={`grid transition-all duration-500 ease-in-out
            ${openIndex === 1 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="text-white/70 leading-relaxed">
              Nel nostro store online, <strong>puoi <a href="https://glowlikes.it/comprare-visualizzazioni-tiktok/">comprare visualizzazioni TikTok</a>, piuttosto che per Instagram o altri social media a partire da 0,43 €.</strong>
            </p>
            <p className="text-white/70 leading-relaxed">
            In pratica, stiamo parlando di un investimento che è alla portata di chiunque. Naturalmente, il  <strong> prezzo unitario scende man mano che si aumentano le quantità.</strong>
            </p>
            </div>
          </div>
        </div>

        <div 
          className={`bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-xl p-6 
            backdrop-blur-lg border-l-4 transition-all duration-500 ease-in-out cursor-pointer
            ${openIndex === 2 ? 'border-l-primary shadow-lg' : 'border-l-transparent hover:border-l-primary/50'}
            group`}
          onClick={() => handleToggle(2)}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className={`text-xl md:text-2xl font-medium 
              ${openIndex === 2 ? 'text-primary' : 'text-white/90'} 
              group-hover:text-primary transition-colors duration-300`}>
              3. Come comprare interazioni social senza rischiare cali o penalizzazioni?
            </h3>
            <span className={`text-primary text-2xl transition-transform duration-500 
              ${openIndex === 2 ? 'rotate-45' : ''}`}>
              +
            </span>
          </div>
          <div className={`grid transition-all duration-500 ease-in-out
            ${openIndex === 2 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="text-white/70 leading-relaxed">
              Con le nostre interazioni social puoi stare tranquillo, visto che <strong> sono di altissima qualità e non vengono quasi mai rilevate dagli algoritmi </strong> delle piattaforme.
            </p>
            <p className="text-white/70 leading-relaxed">
            Nonostante ciò, per eliminare ogni possibile rischio, ti consigliamo di <strong> elaborare una strategia che “ricalchi” la tua crescita organica </strong> e di evitare quantità eccessive, del tutto incompatibili con la tua reale situazione.
            </p>
            </div>
          </div>
        </div>

        <div 
          className={`bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-xl p-6 
            backdrop-blur-lg border-l-4 transition-all duration-500 ease-in-out cursor-pointer
            ${openIndex === 3 ? 'border-l-primary shadow-lg' : 'border-l-transparent hover:border-l-primary/50'}
            group`}
          onClick={() => handleToggle(3)}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className={`text-xl md:text-2xl font-medium 
              ${openIndex === 3 ? 'text-primary' : 'text-white/90'} 
              group-hover:text-primary transition-colors duration-300`}>
              4. Cosa faccio se ho un problema con l'ordine?
            </h3>
            <span className={`text-primary text-2xl transition-transform duration-500 
              ${openIndex === 3 ? 'rotate-45' : ''}`}>
              +
            </span>
          </div>
          <div className={`grid transition-all duration-500 ease-in-out
            ${openIndex === 3 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="text-white/70 leading-relaxed">
              Prima di tutto, <strong> mantieni la calma, non c'è nulla di cui preoccuparsi! </strong> Se noti che c'è un problema, apri pure un ticket direttamente dalla tua area personale.
            </p>
            <p className="text-white/70 leading-relaxed">
            Inoltre, <strong> comunicaci il numero univoco, così come giorno ed orario dell'ordine. </strong> Dopodiché, saremo noi a pensare a tutto il resto, fino alla completa risoluzione che ti comunicheremo nel giro di pochissimo tempo.
            </p>
            </div>
          </div>
        </div>

        <div 
          className={`bg-gradient-to-r from-secondary/30 to-secondary/50 rounded-xl p-6 
            backdrop-blur-lg border-l-4 transition-all duration-500 ease-in-out cursor-pointer
            ${openIndex === 4 ? 'border-l-primary shadow-lg' : 'border-l-transparent hover:border-l-primary/50'}
            group`}
          onClick={() => handleToggle(4)}
        >
          <div className="flex justify-between items-center gap-4">
            <h3 className={`text-xl md:text-2xl font-medium 
              ${openIndex === 4 ? 'text-primary' : 'text-white/90'} 
              group-hover:text-primary transition-colors duration-300`}>
              5. Posso chiedere il rimborso se qualcosa non va come previsto?
            </h3>
            <span className={`text-primary text-2xl transition-transform duration-500 
              ${openIndex === 4 ? 'rotate-45' : ''}`}>
              +
            </span>
          </div>
          <div className={`grid transition-all duration-500 ease-in-out
            ${openIndex === 4 ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="text-white/70 leading-relaxed">
              Certo,  <strong> offriamo ai nostri clienti tutte le garanzie del caso, </strong> sebbene siamo perfettamente consapevoli che i nostri servizi sono sempre erogati in modo eccellente.
            </p>
            <p className="text-white/70 leading-relaxed">
            Ad ogni modo,  <strong> tutto ciò che devi fare è contattarci </strong> – sempre tramite la tua area personale, non prima di aver letto i termini della politica di rimborso che trovi nella rispettiva pagina.
            </p>
            </div>
          </div>
        </div>

        {/* ... Repeat the same pattern for other FAQ items ... */}
      </div>
    </section>
  );
};

export default FAQ;
