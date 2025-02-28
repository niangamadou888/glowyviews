import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16" id='faq'>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
        Domande Frequenti
      </h2>
      <div className="space-y-6">
        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 0 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(0)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 0 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
              1. Dopo quanto vedrò le mie visualizzazioni YouTube salire?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 0 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 0 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Tutto dipende da pacchetto che hai comprato. Ovviamente, se si tratta di poche centinaia, <strong>riusciamo a consegnare l'ordine in poche ore</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Per i pacchetti più ampi, invece, <strong>ci prendiamo alcuni giorni lavorativi</strong>. Da un lato, questo arco temporale ci è necessario per poter preparare materialmente gli account che, poi, effettueranno le visualizzazioni vere e proprie.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Dall'altro, invece, <strong>"diluire" i grossi pacchetti nel tempo</strong>  è anche il modo migliore per simulare una reale crescita organica.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Quindi, mal che vada, vedrai <strong>consegnate tutte le visualizzazioni entro 4-5 giorni</strong> lavorativi.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Nell'ipotesi in cui ci fossero esigenze particolari da parte tua, <strong>non esitare a contattare il nostro Staff</strong> per trovare insieme la soluzione migliore.
            </p>
          </div>
        </div>

        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 1 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(1)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 1 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
              2. I miei iscritti si accorgeranno delle visualizzazioni YouTube acquistate?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 1 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 1 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Assolutamente no, i nostri servizi sono così discreti che le <strong>interazioni da noi acquistate vengono scambiate come acquisite in modo organico</strong>, sia dai crawler della piattaforma, che dai tuoi iscritti.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Detto ciò, <strong>questo accade quando si fanno le "cose fatte bene"</strong>. Cosa intendiamo?
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Beh, se hai il canale aperto di recente e pochi video caricati, un <strong>improvviso e repentino aumento di visualizzazioni potrebbe sì creare sospetti</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
              Ecco perché è fondamentale <strong>comprare visualizzazioni YouTube</strong> in modo corretto, ossia un po' alla volta, in modo che le interazioni acquisite risultino ottenute in modo "genuino" e non come conseguenza di una strategia di Social Media Marketing.
            </p>
          </div>
        </div>

        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 2 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(2)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 2 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
              3. Davvero da voi posso comprare visualizzazioni YouTube reali?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 2 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 2 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Certo che sì, <strong>il nostro Staff tecnico è sempre al lavoro per creare interazioni reali</strong> e che non hanno nulla di diverso rispetto alla visualizzazione o al like ricevuto da un utente “in carne ed ossa”, realmente interessato ai tuoi contenuti.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            A tal proposito, ti consigliamo di <strong>diffidare da tutti quei venditori che propongono interazioni social non reali</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            In questo modo, difatti, <strong>rischi solo che i crawler rilevino delle attività sospette</strong> e, nei casi più gravi, sospendere e pure eliminare il tuo canale.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Comunque sia, <strong>rivolgendoti a noi non avrai nulla da temere</strong> perché prendiamo tutte le precauzioni possibili in tal senso.

            </p>
          </div>
        </div>


        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 3 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(3)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 3 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            4. Devo fornire i miei codici di accesso una volta acquistato il servizio?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 3 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 3 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Assolutamente no! <strong>Eroghiamo i nostri servizi chiedendo solo ed esclusivamente l'URL</strong> del video pubblico.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Basta e avanza, perché non ci serve altro. Ne approfittiamo per aprire una breve parentesi a riguardo, <strong>mettendoti in allerta da alcuni pericoli in cui puoi imbatterti</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Purtroppo, <strong>i cosiddetti “pacchi” sono sempre dietro l'angolo</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Ad esempio, ci sono dei <strong>truffatori che, utilizzando proprio la scusa dell'erogazione di un servizio di Social Media Marketing</strong>, chiedono i codici personali ai malcapitati.

            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Al massimo, <strong>richiediamo il tuo indirizzo e-mail in fase di registrazione</strong> su cui, tra l'altro, ti arriveranno le conferme d'ordine e il rispettivo numero univoco.
            </p>
          </div>
        </div>
        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 4 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(4)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 4 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            5. Comprare visualizzazioni YouTube è sicuro?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 4 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 4 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Certo che sì, dal momento che <strong>è una pratica legale al 100%</strong>, quindi non si infrange alcuna legge. Non solo, <strong>comprare views YouTube da noi di glowlikes</strong> è sicuro perché siamo una realtà seria, operante nella piena legalità e in grado di fornire ai nostri utenti ogni garanzia commerciale possibile.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Per certi versi, <strong>si tratta di una pratica sicura anche perché, grazie a tutte le precauzioni che prendiamo</strong> nell'erogazione dei nostri servizi, né i tuoi follower, né i crawler di YouTube sono in grado di risalire all'origine delle interazioni stesse.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Di conseguenza, <strong>eviti pure possibili penalizzazioni del canale per “spam”</strong> o pratica non consentita dalla “policy”.
            </p>
          </div>
        </div>
        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 5 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(5)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 5 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            6. Come incrementare le visualizzazioni anche in modo organico?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 5 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 5 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Lo scopo di ogni YouTuber dovrebbe essere proprio questo, ossia <strong>incrementare le visualizzazioni in modo organico</strong> e “crescere” come creator in modo “genuino”.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Come si raggiunge, quindi, questo obiettivo? Beh, <strong>prima di tutto devi pubblicare video di qualità</strong> e, fin qui, nulla ci piove.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Tu, <strong>perderesti mai del tempo per guardare dei pessimi video</strong>, sia sotto il profilo dell'editing, che dei contenuti? Ovvio che no, ma tieni presente che questo vale per tutti.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Un'altra cosa che dovresti fare sarebbe quella di <strong>redigere un piano editoriale, in modo da mettere “nero su bianco” tutte le tue idee</strong> e, al tempo stesso, dare regolarità alle tue pubblicazioni.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Per quanto possano essere ben fatti, <strong>pubblicare video ad “ogni morte del papa” non ti porta alcun beneficio</strong>, anzi.
            </p>
          </div>
        </div>

        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 6 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(6)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 6 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            7. Come faccio a riconoscere le agenzie di Social Marketing davvero affidabili?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 6 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 6 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Per <strong>riconoscere le agenzie di Social Media Marketing davvero affidabili</strong> devi dare uno sguardo ai prezzi dei servizi.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Infatti, <strong>quando sono troppo bassi, significa che, sotto, c'è qualcosa</strong> che non va. Insomma, immagina di imbatterti nell'annuncio di una Ferrari in vendita a 10mila euro. Secondo te, c'è da fidarsi?
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Per carità, siamo tutti d'accordo che, al giorno d'oggi, <strong>il costo della vita sia davvero alto e che, quindi, dobbiamo risparmiare</strong> il più possibile.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Al tempo stesso, però, se necessiti di un servizio di qualità, <strong>devi comunque tenere conto che non si può scendere sotto ad una certa soglia</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Diffida sempre, dunque, da quelle offerte che <strong>promettono interazioni social troppo economiche</strong>.
            </p>
          </div>
        </div>

        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 7 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(7)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 7 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            8. Bisogna, per forza, comprare visualizzazioni YouTube?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 7 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 7 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Ovvio che no, <strong>comprare views YouTube non è mica un obbligo</strong> o, comunque, una tecnica di Social Media Marketing da attuare per forza.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Se il tuo canale e i tuoi video stanno andando alla grande, <strong>allora significa che stai già raggiungendo i tuoi traguardi in modo “genuino”</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            In parallelo, poi, c'è un'altra questione. Infatti, <strong>può essere che, nel tuo caso specifico, tu abbia più bisogno di</strong> <a href="https://glowlikes.it/comprare-like-youtube/" className='mystyle'>comprare Like YouTube</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            A grandi linee, prima di intraprendere una qualsivoglia strategia di Social Media Marketing, <strong>devi analizzare dettagliatamente la tua situazione</strong> e mettere in atto quella che realmente può dare i risultati migliori.
            </p>
          </div>
        </div>

        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 8 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(8)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 8 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            9. Cosa succede una volta acquistate le visualizzazioni YouTube?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 8 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 8 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Una volta <strong>comprate le views YouTube, nelle ore (o nei giorni) successive le vedrai crescere</strong>, conteggiate dal rispettivo contatore.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Con il tempo, poi, noterai un altro fenomeno. Difatti, i tuoi <strong>contenuti cominceranno ad essere – pian piano – sempre più visibili</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Li vedrai <strong>apparire in posizioni più favorevoli all'interno dei risultati di ricerca</strong>, così come li vedrai più spesso tra i risultati correlati.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Tuttavia, tieni presente che <strong>ciò non accade dall'oggi al domani</strong>, pertanto devi essere disposto a portare un minimo di pazienza.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Se, poi, migliori anche la tua attività di creator, <strong>vedrai che i numeri saliranno, mentre i tempi si accorceranno</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Insomma, devi lavorare su più fronti, <strong>dal “puro” marketing, alla “sostanza” che caratterizza i tuoi video</strong>.
            </p>
          </div>
        </div>

        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 9 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(9)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 9 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            10. Diventerò più popolare dopo aver comprato visualizzazioni YouTube?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 9 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 9 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Se <strong>compri visualizzazioni YouTube reali ed ialiane in modo mirato</strong>, nel giro di poco tempo vedrai la tua popolarità aumentare.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Perché si verifica tutto ciò? I crawler della piattaforma social sfruttano complessi algoritmi che, in linea di massima, <strong>tendono a premiare i canali più “attivi”</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Con “attivi”, <strong>intendiamo contenuti di qualità e pubblicati con costanza</strong>, seguendo un piano editoriale redatto con tutti i crismi.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Non solo, l'attività di un canale è <strong>data proprio anche dalle interazioni social ricevute</strong>. Per certi versi, più alti sono i numeri dei tuoi contatori, più verrai “premiato” dai crawler di YouTube.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Attenzione, però, <strong>non basta comprare views YouTube “una tantum”</strong> e aspettare passivamente, “tirando i remi in barca”.
            </p>
          </div>
        </div>

        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 10 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(10)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 10 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            11. Ho comprato views YouTube ma non le vedo conteggiate: cosa faccio?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 10 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 10 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Mantieni “calma e sangue freddo” perché <strong>noi di glowlikes non lasciamo mai soli i nostri clienti!</strong> Guarda, l'ipotesi descritta dalla domanda è davvero remota.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Dal nostro “debutto” ad oggi, <strong>sarà successo – sì e no – un paio di volte</strong> al massimo.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Chiarito questo, qualora non riscontrassi la “consegna” del tuo ordine, <strong>contatta subito il nostro centro assistenza</strong> clienti.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            A seguito dell'acquisto, <strong>ricevi in automatico una e-mail di conferma, in cui, tra le varie cose, è riportato il codice</strong> stesso dell'ordine da te piazzato.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            <strong>Includilo nella tua richiesta d'aiuto, così potremo risalire al problema</strong> in men che non si dica e provvedere alla “consegna” delle visualizzazioni YouTube da te acquistate.
            </p>
          </div>
        </div>

        <div 
          className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
            transition-all duration-300 cursor-pointer
            ${openIndex === 11 ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
            group`}
          onClick={() => handleToggle(11)}
        >
          <div className="flex justify-between items-center">
            <h3 className={`text-[22px] font-semibold text-primary ${openIndex === 11 ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
            12. Posso comprare visualizzazioni YouTube in qualsiasi momento?
            </h3>
            <span className={`transform transition-transform duration-300 ${openIndex === 11 ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
          <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === 11 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Nonostante <strong>ogni ordine viene elaborato e supervisionato da un nostro collaboratore</strong> umano e “in carne ed ossa”, il nostro store online è aperto 24 ore su 24, 7 giorni su 7.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Di conseguenza, puoi <strong>comprare views YouTube italiane e reali in qualsiasi momento</strong>, semplicemente connettendoti alla nostra piattaforma ed entrando nella tua area riservata.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            A proposito, se hai determinate scadenze da rispettare, <strong>consigliamo di effettuare gli ordini all'inizio della settimana</strong> in quanto, nel “week end”, il nostro Staff non lavora.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Lo stesso, chiaramente, <strong>vale anche per le altre festività</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
            Per il resto, non c'è alcun problema, sei libero di <strong>comprare visualizzazioni YouTube ogni qualvolta</strong> tu ne abbia bisogno.
            </p>
          </div>
        </div>









      </div>
    </section>
  );
};

export default FAQ;
