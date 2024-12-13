import { useState, useEffect, useRef } from "react";

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const questions = [
    {
      title: "1. Dopo quanto vedrò le mie visualizzazioni YouTube salire?",
      content: [
        `Tutto dipende da pacchetto che hai comprato. Ovviamente, se si tratta di poche centinaia, riusciamo a consegnare l'ordine entro poche ore.`,
        `Per i pacchetti più ampi, invece, ci prendiamo alcuni giorni lavorativi. Da un lato, questo arco temporale ci è necessario per poter preparare materialmente gli account che, poi, effettueranno le visualizzazioni vere e proprie.`,
        `Dall'altro, invece, "diluire" i grossi pacchetti nel tempo è anche il modo migliore per simulare una reale crescita organica.`,
        `Quindi, mal che vada, vedrai consegnate tutte le visualizzazioni entro 4-5 giorni lavorativi.`,
        `Nell'ipotesi in cui ci fossero esigenze particolari da parte tua, non esitare a contattare il nostro Staff per trovare insieme la soluzione migliore.`
      ]
    },
    {
      title: "2. I miei iscritti si accorgeranno delle visualizzazioni YouTube acquistate?",
      content: [
        `Assolutamente no, i nostri servizi sono così discreti che le interazioni da noi acquistate vengono scambiate come acquisite in modo organico, sia dai crawler della piattaforma, che dai tuoi iscritti.`,
        `Detto ciò, questo accade quando si fanno le "cose fatte bene". Cosa intendiamo?`,
        `Beh, se hai il canale aperto di recente e pochi video caricati, un improvviso e repentino aumento di visualizzazioni potrebbe sì creare sospetti.`,
        `Ecco perché è fondamentale comprare visualizzazioni YouTube in modo corretto, ossia un po' alla volta, in modo che le interazioni acquisite risultino ottenute in modo "genuino" e non come conseguenza di una strategia di Social Media Marketing.`
      ]
    },
    {
      title: "3. Davvero da voi posso comprare visualizzazioni YouTube reali?",
      content: [
        `Certo che sì, il nostro Staff tecnico è sempre al lavoro per creare interazioni reali e che non hanno nulla di diverso rispetto alla visualizzazione o al like ricevuto da un utente "in carne ed ossa", realmente interessato ai tuoi contenuti.`,
        `A tal proposito, ti consigliamo di diffidare da tutti quei venditori che propongono interazioni social non reali.`,
        `In questo modo, difatti, rischi solo che i crawler rilevino delle attività sospette e, nei casi più gravi, sospendere e pure eliminare il tuo canale.`,
        `Comunque sia, rivolgendoti a noi non avrai nulla da temere perché prendiamo tutte le precauzioni possibili in tal senso.`
      ]
    },
    {
      title: "4. Devo fornire i miei codici di accesso una volta acquistato il servizio?",
      content: [
        `Assolutamente no! Eroghiamo i nostri servizi chiedendo solo ed esclusivamente l'URL del video pubblico.`,
        `Basta e avanza, perché non ci serve altro. Ne approfittiamo per aprire una breve parentesi a riguardo, mettendoti in allerta da alcuni pericoli in cui puoi imbatterti.`,
        `Purtroppo, i cosiddetti "pacchi" sono sempre dietro l'angolo.`,
        `Ad esempio, ci sono dei truffatori che, utilizzando proprio la scusa dell'erogazione di un servizio di Social Media Marketing, chiedono i codici personali ai malcapitati.`,
        `Al massimo, richiediamo il tuo indirizzo e-mail in fase di registrazione su cui, tra l'altro, ti arriveranno le conferme d'ordine e il rispettivo numero univoco.`
      ]
    },
    {
      title: "5. Comprare visualizzazioni YouTube è sicuro?",
      content: [
        `Certo che sì, dal momento che è una pratica legale al 100%, quindi non si infrange alcuna legge. Non solo, comprare views YouTube da noi di SocialX è sicuro perché siamo una realtà seria, operante nella piena legalità e in grado di fornire ai nostri utenti ogni garanzia commerciale possibile.`,
        `Per certi versi, si tratta di una pratica sicura anche perché, grazie a tutte le precauzioni che prendiamo nell'erogazione dei nostri servizi, né i tuoi follower, né i crawler di YouTube sono in grado di risalire all'origine delle interazioni stesse.`,
        `Di conseguenza, eviti pure possibili penalizzazioni del canale per "spam" o pratica non consentita dalla "policy".`
      ]
    },
    {
      title: "6. Come incrementare le visualizzazioni anche in modo organico?",
      content: [
        `Lo scopo di ogni YouTuber dovrebbe essere proprio questo, ossia incrementare le visualizzazioni in modo organico e "crescere" come creator in modo "genuino".`,
        `Come si raggiunge, quindi, questo obiettivo? Beh, prima di tutto devi pubblicare video di qualità e, fin qui, nulla ci piove.`,
        `Tu, perderesti mai del tempo per guardare dei pessimi video, sia sotto il profilo dell'editing, che dei contenuti? Ovvio che no, ma tieni presente che questo vale per tutti.`,
        `Un'altra cosa che dovresti fare sarebbe quella di redigere un piano editoriale, in modo da mettere "nero su bianco" tutte le tue idee e, al tempo stesso, dare regolarità alle tue pubblicazioni.`,
        `Per quanto possano essere ben fatti, pubblicare video ad "ogni morte del papa" non ti porta alcun beneficio, anzi.`
      ]
    },
    {
      title: "7. Come faccio a riconoscere le agenzie di Social Marketing davvero affidabili?",
      content: [
        `Per riconoscere le agenzie di Social Media Marketing davvero affidabili devi dare uno sguardo ai prezzi dei servizi.`,
        `Infatti, quando sono troppo bassi, significa che, sotto, c'è qualcosa che non va. Insomma, immagina di imbatterti nell'annuncio di una Ferrari in vendita a 10mila euro. Secondo te, c'è da fidarsi?`,
        `Per carità, siamo tutti d'accordo che, al giorno d'oggi, il costo della vita sia davvero alto e che, quindi, dobbiamo risparmiare il più possibile.`,
        `Al tempo stesso, però, se necessiti di un servizio di qualità, devi comunque tenere conto che non si può scendere sotto ad una certa soglia.`,
        `Diffida sempre, dunque, da quelle offerte che promettono interazioni social troppo economiche.`
      ]
    },
    {
      title: "8. Bisogna, per forza, comprare visualizzazioni YouTube?",
      content: [
        `Ovvio che no, comprare views YouTube non è mica un obbligo o, comunque, una tecnica di Social Media Marketing da attuare per forza.`,
        `Se il tuo canale e i tuoi video stanno andando alla grande, allora significa che stai già raggiungendo i tuoi traguardi in modo "genuino".`,
        `In parallelo, poi, c'è un'altra questione. Infatti, può essere che, nel tuo caso specifico, tu abbia più bisogno di comprare Like YouTube.`,
        `A grandi linee, prima di intraprendere una qualsivoglia strategia di Social Media Marketing, devi analizzare dettagliatamente la tua situazione e mettere in atto quella che realmente può dare i risultati migliori.`
      ]
    },
    {
      title: "9. Cosa succede una volta acquistate le visualizzazioni YouTube?",
      content: [
        `Una volta comprate le views YouTube, nelle ore (o nei giorni) successive le vedrai crescere, conteggiate dal rispettivo contatore.`,
        `Con il tempo, poi, noterai un altro fenomeno. Difatti, i tuoi contenuti cominceranno ad essere – pian piano – sempre più visibili.`,
        `Li vedrai apparire in posizioni più favorevoli all'interno dei risultati di ricerca, così come li vedrai più spesso tra i risultati correlati.`,
        `Tuttavia, tieni presente che ciò non accade dall'oggi al domani, pertanto devi essere disposto a portare un minimo di pazienza.`,
        `Se, poi, migliori anche la tua attività di creator, vedrai che i numeri saliranno, mentre i tempi si accorceranno.`,
        `Insomma, devi lavorare su più fronti, dal "puro" marketing, alla "sostanza" che caratterizza i tuoi video.`
      ]
    },
    {
      title: "10. Diventerò più popolare dopo aver comprato visualizzazioni YouTube?",
      content: [
        `Se compri visualizzazioni YouTube reali ed ialiane in modo mirato, nel giro di poco tempo vedrai la tua popolarità aumentare.`,
        `Perché si verifica tutto ciò? I crawler della piattaforma social sfruttano complessi algoritmi che, in linea di massima, tendono a premiare i canali più "attivi".`,
        `Con "attivi", intendiamo contenuti di qualità e pubblicati con costanza, seguendo un piano editoriale redatto con tutti i crismi.`,
        `Non solo, l'attività di un canale è data proprio anche dalle interazioni social ricevute. Per certi versi, più alti sono i numeri dei tuoi contatori, più verrai "premiato" dai crawler di YouTube.`,
        `Attenzione, però, non basta comprare views YouTube "una tantum" e aspettare passivamente, "tirando i remi in barca".`
      ]
    },
    {
      title: "11. Ho comprato views YouTube ma non le vedo conteggiate: cosa faccio?",
      content: [
        `Mantieni "calma e sangue freddo" perché noi di SocialX non lasciamo mai soli i nostri clienti! Guarda, l'ipotesi descritta dalla domanda è davvero remota.`,
        `Dal nostro "debutto" ad oggi, sarà successo – sì e no – un paio di volte al massimo.`,
        `Chiarito questo, qualora non riscontrassi la "consegna" del tuo ordine, contatta subito il nostro centro assistenza clienti.`,
        `A seguito dell'acquisto, ricevi in automatico una e-mail di conferma, in cui, tra le varie cose, è riportato il codice stesso dell'ordine da te piazzato.`,
        `Includilo nella tua richiesta d'aiuto, così potremo risalire al problema in men che non si dica e provvedere alla "consegna" delle visualizzazioni YouTube da te acquistate.`
      ]
    },
    {
      title: "12. Posso comprare visualizzazioni YouTube in qualsiasi momento?",
      content: [
        `Nonostante ogni ordine viene elaborato e supervisionato da un nostro collaboratore umano e "in carne ed ossa", il nostro store online è aperto 24 ore su 24, 7 giorni su 7.`,
        `Di conseguenza, puoi comprare views YouTube italiane e reali in qualsiasi momento, semplicemente connettendoti alla nostra piattaforma ed entrando nella tua area riservata.`,
        `A proposito, se hai determinate scadenze da rispettare, consigliamo di effettuare gli ordini all'inizio della settimana in quanto, nel "week end", il nostro Staff non lavora.`,
        `Lo stesso, chiaramente, vale anche per le altre festività.`,
        `Per il resto, non c'è alcun problema, sei libero di comprare visualizzazioni YouTube ogni qualvolta tu ne abbia bisogno.`
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!sectionRef.current) return;

      // Prevent default scroll behavior
      event.preventDefault();

      // Determine scroll direction
      if (event.deltaY > 0) {
        // Scrolling down
        setCurrentIndex(prev => 
          prev < questions.length - 1 ? prev + 1 : prev
        );
      } else {
        // Scrolling up
        setCurrentIndex(prev => 
          prev > 0 ? prev - 1 : prev
        );
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleScroll);
      }
    };
  }, [questions.length]);

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center reveal-on-scroll"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow animate-glow">
        Domande Frequenti
      </h2>
      <div 
        className="relative w-full transition-all duration-500 ease-in-out"
        style={{ height: '500px' }}
      >
        <div
          key={currentIndex}
          className="absolute top-0 left-0 w-full h-full bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-glow border-primary/20 reveal-on-scroll"
        >
          <h3 className="text-2xl font-semibold mb-6 text-primary text-glow">
            {questions[currentIndex].title}
          </h3>
          <div className="space-y-4">
            {questions[currentIndex].content.map((paragraph, pIndex) => (
              <p 
                key={pIndex} 
                className="text-white leading-relaxed opacity-0 animate-[text-reveal_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${pIndex * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex gap-2">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125 animate-glow' 
                : 'bg-secondary'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;