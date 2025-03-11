import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import React from 'react';

const Privacy: React.FC = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col mt-12">
            <Navigation />
            <div className="flex-1 py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl" />
                <div className="relative max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-center mb-8 text-white glow">
                            PRIVACY POLICY
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300 text-left">
                        <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                        I - INFORMAZIONI RELATIVE ALLA PRIVACY POLICY DEL SITO
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Informazioni generali relative al sito
                            </h4>
                            <p>
                            1. In questa sezione trovi tutte le informazioni relative alle modalità di gestione del sito <a href="https://glowlikes.it" className='mystyle'>glowlikes.it</a> in riferimento al trattamento dei dati degli utenti che lo visitano e lo usano.
                            </p>
                            <p>
                            2. La presente informativa viene resa anche ai fini dell'articolo 13 del Reg. UE 2016/679 (GDPR – General Data Protection Regulation).
                            </p>
                            <p>
                            3. Il presente documento è riferito al solo GlowLikes e non ad ulteriori siti web eventualmente consultabili dall'utente cliccando i link esterni presenti al suo interno.
                            </p>
                            <p>
                            4. Il sito internet GlowLikes e i relativi servizi proposti si rivolgono a utenti maggiori di 18 anni, ai sensi dell'art. 8, par. 1 Reg. UE 2016/679 e dell’art. 2-quinquies del D.Lgs. n. 196/2003. 
                            </p>

                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            II – I SOGGETTI COINVOLTI NEL TRATTAMENTO DEI DATI
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Titolare dei dati
                            </h4>
                            <p>
                                1. Relativamente al presente sito web, il titolare del trattamento è GlowLikes in persona del suo legale rappresentante “pro tempore”, contattabile all'indirizzo: <a href="mailto:supporto@glowlikes.it" className='mystyle'>supporto@glowlikes.it</a> .
                            </p>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            2. Responsabile del trattamento dati
                            </h4>
                            <p>
                                1. Il responsabile del trattamento è la persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che tratta dati personali per conto del titolare del trattamento.
                            </p>
                            <p>
                                2. Ai sensi dell'articolo 28 del regolamento UE n. 2016/679 il titolare può nominare uno o più responsabili del trattamento dei dati del presente sito.
                            </p>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            3. Luogo di trattamento dei dati
                            </h4>
                            <p>
                                1. I dati personali sono registrati e custoditi su database elettronici di proprietà del titolare e il trattamento dei dati generato dall'utilizzo di GlowLikes avviene presso la sede legale/operativa del titolare stesso, sita in Corso Buenos Aires, 16/K, 20129 Milano (Italia).
                            </p>

                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            III - DATI TRATTATI
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Tipi di dati trattati e modalità 	di trattamento dei dati
                            </h4>
                            <p>
                                1. GlowLikes si avvale di log files nei quali vengono conservate informazioni raccolte in maniera automatizzata.
                            </p>
                            <p>
                                2. Tali informazioni sono trattate in forma automatizzata e raccolte in forma esclusivamente aggregata al fine di elaborare informazioni statistiche anonime.
                            </p>
                            <p>
                                3. In aggiunta ai dati di cui al precedente comma 1., possono essere raccolti dal presente sito anche i seguenti dati personali:
                                <ul>
                                    <li>
                                    indirizzo e-mail (in caso di richiesta informazione e/o di iscrizione);
                                    </li>
                                    <li>
                                    Nome e Cognome dell’utente (in caso di richiesta informazione e/o di iscrizione);
                                    </li>
                                    <li>
                                    contatto telefonico e ulteriori dati personali forniti volontariamente dall’utente;
                                    </li>
                                    <li>
                                    indirizzo IP per motivi di sicurezza.
                                    </li>
                                </ul>
                            </p>
                            <p>
                                4. I dati personali di cui al precedente comma saranno trattati per mezzo delle operazioni indicate all’art. 4 n. 2) GDPR.
                            </p>
                            <p>
                                5. Le informazioni di cui al comma 1. possono essere utilizzate per l’accertamento di responsabilità in caso di commissione di reati informatici ai danni del presente 		sito.
                            </p>
                            <p>
                                6. A fini di sicurezza le informazioni e i dati registrati automaticamente possono essere impiegati per bloccare tentativi di danneggiamento al sito.
                            </p>
                            <p>
                                7. Le informazioni che gli utenti del sito riterranno di rendere pubbliche tramite i servizi e gli strumenti messi a loro disposizione sono fornite dall'utente consapevolmente e volontariamente, esentando il presente sito da qualsiasi responsabilità.
                            </p>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            2. Finalità del trattamento e periodo di conservazione dei dati
                            </h4>
                            <p>
                                1. Dati personali di cui al precedente comma 3. raccolti dal sito sono utilizzati per le seguenti finalità:
                                <ul>
                                    <li>
                                        creazione della propria area personale da parte dell'utente;
                                    </li>
                                    <li>
                                    erogazione dei servizi di Social Media Marketing (ovvero interazioni social di varia natura e destinate a diverse piattaforme) messi in vendita tramite questo sito;
                                    </li>
                                    <li>
                                    adempimento di obblighi imposti dalla normativa vigente (contabili, fiscali, ecc).
                                    </li>
                                </ul>
                            </p>
                            <p>
                                2. La conservazione dei dati sarà effettuata per il periodo strettamente necessario al raggiungimento delle finalità sopra indicate.
                            </p>
                            <p>
                                3. In caso di trattamento dei dati personali basato sul consenso dell’utente, GlowLikes può conservare i dati personali sino alla revoca del detto consenso.
                            </p>
                            <p>
                                4. I dati utilizzati a fini di sicurezza sono conservati per il tempo strettamente necessario al raggiungimento di tale fine e comunque cancellati entro 60 giorni.
                            </p>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            3. Base giuridica delle operazioni del trattamento
                            </h4>
                            <p>
                            La base giuridica del trattamento dati personali indicati già citato comma 3. è l’esecuzione di un contratto, ovvero l'erogazione dei servizi di Social Media Marketing (interazioni social di varia natura).
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            IV. DIRITTI DELL’UTENTE
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Diritti dell’interessato
                            </h4>
                            <p>
                                1. L’utente può esercitare tutti i diritti riconosciuti dal GDPR.
                            </p>
                            <p>
                                2. Le richieste possono essere indirizzate al titolare del trattamento, senza formalità o, in alternativa, utilizzando il modello previsto dal Garante per la Protezione dei Dati Personali, o inviando una mail all'indirizzo: <a href="mailto:supporto@glowlikes.it">supporto@glowlikes.it </a>
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            V – NATURA DEL CONSENSO
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Natura del Consenso
                            </h4>
                            <p>
                                1. Il conferimento dei dati personali è obbligatorio per l'adempimento delle finalità precedentemente descritte. L'eventuale rifiuto di fornire tali dati comporta l'impossibilità per il titolare di fornire i rispettivi servizi.
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            VI - TRASFERIMENTO DATI A PAESI EXTRA UE
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Trasferimento dei dati dell’interessato verso paesi extra UE
                            </h4>
                            <p>
                                1. Il presente sito potrebbe condividere alcuni dei dati raccolti con servizi localizzati al di fuori dell'area dell'Unione Europea, verso il territorio Statunitense.
                            </p>
                            <p>
                                2. Non verranno mai trasferiti dati a Paesi terzi che non rispettino le condizioni previste dagli artt. 45 e ss. del Reg. UE 2016/679.
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            VII - SICUREZZA DATI FORNITI
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Misure di sicurezza dei dati personali adottate
                            </h4>
                            <p>
                                1. Il presente sito tratta i dati degli utenti in maniera lecita e rispettosa del GDPR nonché della vigente normativa italiana (D.Lgs. n. 196/2003 e successive modifiche o integrazioni).
                            </p>
                            <p>
                                2. Oltre al titolare potrebbero avere accesso ai dati trattati categorie di persone autorizzate al trattamento dei dati personali coinvolte nell'organizzazione e nella gestione del sito.
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            VIII - COOKIES
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Tipo di cookies
                            </h4>
                            <p>
                            1. Il sito GlowLikes utilizza cookies che hanno la funzione di rendere l'esperienza di navigazione dell'utente più facile ed intuitiva.
                            </p>
                            <p>
                            2. Un cookie consiste in un ridotto insieme di dati trasferiti al browser utilizzato dell'utente da un server web.
                            </p>
                            <p>
                            3. I cookies potrebbero registrare informazioni personali e gli eventuali dati che permettono l’identificazione dell’interessato possono venire memorizzati.
                            </p>
                            <p>
                            4. Negli articoli successivi vengono descritte le singole tipologie di cookies che possono essere trasmesse da un sito internet, con indicazione di quelle di cui il sito fa uso.
                            </p>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            2. Cookies tecnici
                            </h4>
                            <p>
                            1. I cookies tecnici permettono la navigazione nel sito e facilitano l'accesso e la fruizione in sicurezza dello stesso da parte dell'utente. Sono necessari alla trasmissione di comunicazioni su rete elettronica.
                            </p>
                            <p>
                            2. Le impostazioni per gestire o disattivare i cookies possono variare a seconda del browser.
                            </p>
                            <p>
                            3. I cookies che vengono inseriti nel browser e ritrasmessi mediante il servizio di Google Analytics (raccolti per volontà del titolare del sito in forma totalmente anonimizzata) oppure altri dotati di simili funzioni sono da considerarsi di tipo tecnico quando utilizzati a fini di ottimizzazione del sito direttamente dal titolare dello stesso.
                            </p>
                            <p>
                            4. Il sito può installare nel browser utilizzato dall’utente cookies di sessione, che permettono l'accesso dell’utente e la sua permanenza nell'area riservata del sito come utente autenticato.
                            </p>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            3. Cookies di terze parti
                            </h4>
                            <p>
                            1. In base alla provenienza i cookies si distinguono tra quelli direttamente inviati al browser utilizzato dall’utente dal sito che si sta visitando e quelli predisposti da terze parti.
                            </p>
                            <p>
                            2. Potranno essere installati cookies di terze parti di tipo analitico: essi sono impiegati per rilevare informazioni sul comportamento degli utenti sul sito. La rilevazione avviene in forma anonima, al fine di monitorare le prestazioni e migliorare l'usabilità del sito.
                            </p>
                            <p>
                            3. L'utilizzo di questi cookies è disciplinato dalle regole predisposte dalle terze parti medesime.
                            </p>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            4. Supporto nella configurazione del browser utilizzato dall’utente
                            </h4>
                            <p>
                            1. L'utente può gestire i cookies attraverso le impostazioni del browser utilizzato.
                            </p>
                            <p>
                            2. Per ricevere ulteriori informazioni e ottenere supporto sul punto è possibile visitare la pagina specifica dei principali browser disponibili:
                            <ul>
                                <li>
                                Internet Explorer ed Edge: <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" className='mystyle'>https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies</a>
                                </li>
                                <li>
                                Firefox: <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" className='mystyle'>https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie</a>
                                </li>
                                <li>
                                Safari: <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" className='mystyle'>https://support.apple.com/it-it/guide/safari/sfri11471/mac</a>
                                </li>
                                <li>
                                Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=it" className='mystyle'>https://support.google.com/accounts/answer/61416?hl=it</a>
                                </li>
                            </ul>
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            IX. COPYRIGHT
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Copyright
                            </h4>
                            <p>
                            1. Tutti i testi, le componenti grafiche sono protetti dalle leggi internazionali sul diritto d'autore.
                            </p>
                            <p>
                            2. Nessuno dei contenuti di cui al comma precedente può essere copiato, modificato o rivenduto, in tutto o in parte, per fini di lucro o per trarne utilità di qualsivoglia tipo.
                            </p>
                            <p>
                            3. Le immagini non di proprietà di GlowLikes provengono da banche dati pubbliche.
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            X. FRUIZIONE DEL SITO DA PARTE DEGLI UTENTI
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Contenuti presenti sul sito ed esonero di responsabilità
                            </h4>
                            <p>
                            1. L'amministrazione non assume alcuna responsabilità per eventuali malfunzionamenti del sito né per i danni - di qualsiasi natura - che possano derivare agli utenti a causa dell’accesso al medesimo sito.
                            </p>
                            <p>
                            2. L'amministrazione si riserva il diritto di modificare i contenuti del sito in qualsiasi momento e senza alcun preavviso, nonché di modificare la presente privacy policy ai sensi del successivo articolo.
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6 text-left">
                            XI. MODIFICHE AL PRESENTE DOCUMENTO
                            </h3>
                            <h4 className="text-xl font-bold text-white glow mt-12 mb-6 text-left">
                            1. Modifiche alla privacy policy del sito <a href="https://glowlikes.it/" className='mystyle'>glowlikes.it</a>
                            </h4>
                            <p>
                            1. La presente privacy policy può essere soggetta a modifiche o aggiornamenti.
                            </p>
                            <p>
                            2. La presente privacy policy è stata redatta in data 20 febbraio 2025 e aggiornata successivamente alle ultime disposizioni normative in materia.
                            </p>



                            <p className="text-sm text-gray-400 mt-12">
                                Ultimo aggiornamento: 25 febbraio 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Privacy;