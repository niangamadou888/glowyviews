import { useState, useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReCAPTCHA from "react-google-recaptcha";

interface Review {
  id: number;
  stars: number;
  text: string;
  name: string;
  row: number;
  service: {
    name: string;
    url: string;
  };
}

const reviews: Review[] = [
  {
    id: 1,
    stars: 5,
    text: "In questi mesi ho provato diverse agenzie… alcune offrivano ottimi prodotti ma a prezzi assurdi, mentre altre avevo prezzi stracciati ma vendevano bot. Qui finalmente ho trovato il giusto rapporto/qualità prezzo e un servizio di prim’ordine.",
    name: "Marco",
    row: 1,
    service: {
      name: "Visualizzazioni YouTube",
      url: "/comprare-visualizzazioni-youtube"
    }
  },
  {
    id: 2,
    stars: 5,
    text: "Ad alcuni miei amici è andata male con il SMM… un calo dietro l’altro! Ecco perché ho aspettato tanto a provare… cmq, qui in GlowLikes ho comprato qualche migliaio di follower e dopo una settimana non c’è stato alcun calo. Vediamo come andrà con il prossimo ordine 👍👌",
    name: "Alberto",
    row: 1,
    service: {
      name: "Follower Instagram",
      url: "/comprare-follower-instagram"
    }
  },
  {
    id: 3,
    stars: 5,
    text: "Migliore agenzia si sempre!!🔝 Ormai sono cliente fisso da parecchi mesi perché qui in GlowLikes trovo sia qualità che convenienza! 🤑🤑 Per non parlare dei tempi di consegna… ordini la mattina e all’ora di pranzo arriva tutto puntuale come un orologio svizzero!!! ⏱️🇨🇭",
    name: "Andrea",
    row: 1,
    service: {
      name: "Visualizzazioni TikTok",
      url: "/comprare-visualizzazioni-tiktok"
    }
  },
  {
    id: 4,
    stars: 5,
    text: "Buongiorno, ho deciso di lasciare anche la mia recensione. Gestisco molte pagine social e qui mi trovo benissimo perché lo store online è estremamente fornito. Qualsiasi cosa cerco, qui la trovo ad un prezzo e condizioni davvero interessanti.",
    name: "Mario",
    row: 1,
    service: {
      name: "Like YouTube",
      url: "/comprare-like-youtube"
    }
  },
  {
    id: 5,
    stars: 5,
    text: "Di GlowLikes mi piace la loro trasparenza. Al giorno d’oggi non è una cosa così scontata! Grazie alla mia sezione personale posso monitorare tutti i miei ordini in tempo reale. Una volta c’è stato un piccolo disguido, ma l’assistenza lo ha risolto alla velocità della luce.",
    name: "Silvio",
    row: 2,
    service: {
      name: "Condivisioni Instagram",
      url: "/comprare-condivisioni-instagram"
    }
  },
  {
    id: 6,
    stars: 5,
    text: "Ho fatto 3 ordini di prova ed è sempre andata benissimo!! 😍😍 tantissime interazioni di qualità a prezzi super onesti! 💪 arriva tutto nel giro di poche ore e non ci sono quei fastidiosi cali… è ovvio che non utilizzino bot, quindi un altro punto a loro favore! ✌️",
    name: "Marta",
    row: 2,
    service: {
      name: "Ascolti Spotify",
      url: "/comprare-ascolti-spotify"
    }
  },
  {
    id: 7,
    stars: 4,
    text: "È andata bene? Sì dai… Poteva andare meglio? Probabilmente… avevo comprato parecchi commenti TikTok e in effetti sono arrivati… quasi tutti però. Ne mancavano qualche decina… Ho aperto un ticket e con mia grande sorpresa l’assistenza mi ha consegnato subito ciò che mancava…",
    name: "Davide",
    row: 2,
    service: {
      name: "Commenti TikTok",
      url: "/comprare-commenti-tiktok"
    }
  },
  {
    id: 8,
    stars: 5,
    text: "In assoluto uno dei migliori store online per chi lavora con target Italia! 🇮🇹 Credetemi, non ha senso spendere per interazioni social generiche.. 😮‍💨 sarebbero soldi buttati! Qui invece hai la garanzia che ogni centesimo speso darà i suoi frutti (e lo confermo)",
    name: "Christian",
    row: 2,
    service: {
      name: "Voti Sondaggio",
      url: "/comprare-voti-sondaggio-x"
    }
  },
  {
    id: 9,
    stars: 5,
    text: "Sono rimasto davvero stupito dalla qualità… del servizio, ma anche dei membri gruppo Facebook! Avevo ordinato quelli italiani e in effetti sono proprio quelli che ho ricevuto! Purtroppo con altre agenzie non è andata così bene… per fortuna ho trovato GlowLikes 😉",
    name: "Mauro",
    row: 3,
    service: {
      name: "Membri Gruppo Facebook",
      url: "/comprare-membri-gruppo-facebook"
    }
  },
  {
    id: 10,
    stars: 5,
    text: "Grazie ragazzi! Come sempre vi siete superati! 👆👆 Mi ero presa all’ultimo e mi servivano dei follower alla svelta… fatto l’ordine ieri sera e stamattina c’erano già tutti, nessuno escluso!! Non so davvero come farei senza di voi, grazie ancora per quello che fate!! 🙏🙏",
    name: "Giada",
    row: 3,
    service: {
      name: "Follower LinkedIn",
      url: "/comprare-follower-linkedin"
    }
  },
  {
    id: 11,
    stars: 5,
    text: "Non sapendo cosa aspettarmi mi son fidato… e ho fatto benissimo! Ho ricevuto i prodotti ordinati nel giro di pochissime ore. Dopo un rapido controllo ho visto che era tutto ok, quindi buono a sapersi per il prossimo ordine… almeno vado sul sicuro!",
    name: "Jack",
    row: 3,
    service: {
      name: "Like Instagram",
      url: "/comprare-like-instagram"
    }
  },
  {
    id: 12,
    stars: 5,
    text: "Fatto l’ordine l’altro ieri. Ho aspettato a scrivere la recensione per vedere come andava… è facile promettere zero cali e poi non mantenere. Riconosco che i ragazzi di GlowLikes sono davvero onesti perchè hanno mantenuto la parola in pieno 👍",
    name: "Martin",
    row: 3,
    service: {
      name: "Visualizzazioni X",
      url: "/comprare-visualizzazioni-x"
    }
  },
  {
    id: 13,
    stars: 5,
    text: "Fantastico! Ciò che apprezzo di più di GlowLikes è la velocità con cui consegnano gli ordini! 🚀🚀 Dalle altre parti vanno sempre avanti per le lunghe… ti tocca organizzarti con giorni di anticipo! Qui invece è questione di qualche ora. Top come sempre  🔝👍",
    name: "Alex",
    row: 4,
    service: {
      name: "Amici Facebook",
      url: "/comprare-amici-facebook"
    }
  },
  {
    id: 14,
    stars: 5,
    text: "Preciso che non sono molto pratico con queste cose… è la mia prima volta! Comunque direi che è andata benone visto che ho fatto il mio primo ordine in un paio di minuti! Pagamenti crittografati e nessuna richiesta di dati personali.",
    name: "Roberto",
    row: 4,
    service: {
      name: "Condivisioni LinkedIn",
      url: "/comprare-condivisioni-linkedin"
    }
  },
  {
    id: 15,
    stars: 4,
    text: "Avevo espressamente richiesto membri Telegram italiani ma ce n’erano tipo 20 o 30 chiaramente internazionali. Ho contattato lo Staff assistenza a cui ho spiegato il problema. Si sono scusati e me li hanno cambiati nel giro di un paio d’ore.",
    name: "Max",
    row: 4,
    service: {
      name: "Membri Telegram",
      url: "/comprare-membri-telegram"
    }
  },
  {
    id: 16,
    stars: 5,
    text: "Lavoro come Social Media Manager per diverse società, quindi non posso fare a meno di un partner come GlowLikes 💪💪 Qui dentro c’è una vastissima scelta di prodotti di altissima qualità che ti vengono consegnati alla svelta… A presto con il prossimo ordine!! 🙋‍♀️🙋‍♀️",
    name: "Jessica",
    row: 4,
    service: {
      name: "Recensioni Facebook",
      url: "/comprare-recensioni-facebook"
    }
  },
  {
    id: 17,
    stars: 5,
    text: "Beh ottimo servizio per chi cerca servizi geo-targettizzati. Ad esempio io lavoro molto con l’Italia, quindi le solite interazioni generiche sono solo uno spreco di soldi… per non parlare di quelli che ti rifilano i bot! Per fortuna non è il caso di GlowLikes.",
    name: "Rick",
    row: 5,
    service: {
      name: "Voti Sondaggio Telegram",
      url: "/comprare-voti-sondaggio-telegram"
    }
  },
  {
    id: 18,
    stars: 5,
    text: "Non pensavo che la qualità dei follower TikTok reali fosse così alta.. praticamente impossibili da distinguere da quelli 100% organici 😮😮 Ho controllato tutti gli ordini fatti e anche quest'ultimo è andato bene come sempre. Consideratemi un nuovo cliente fisso!! 👍👍",
    name: "Paolo",
    row: 5,
    service: {
      name: "Follower TikTok",
      url: "/comprare-follower-tiktok"
    }
  },
  {
    id: 19,
    stars: 5,
    text: "Anch’io ero spaventato dai cali… insomma che senso ha comprare questi servizi se tanto poi dopo ti vengono rimossi? Con GlowLikes non è successo nulla del genere. Che sia stata solo fortuna? Ho fatto solo 2 ordini al momento, ma credo che anche i prossimi andranno bene.",
    name: "Ray",
    row: 5,
    service: {
      name: "Spettatori Diretta Instagram",
      url: "/comprare-spettatori-diretta-instagram"
    }
  },
  {
    id: 20,
    stars: 5,
    text: "Da quando ho scoperto GlowLikes non vado più da nessun’altra parte! Difficile trovare prezzi così convenienti per dei servizi di qualità superiore. Ormai sono già al mio settimo ordine e ogni volta non ho nulla da dire, se non grazie!!! 🙏🙏",
    name: "Jeff",
    row: 5,
    service: {
      name: "Condivisioni YouTube",
      url: "/comprare-condivisioni-youtube"
    }
  },
  {
    id: 21,
    stars: 5,
    text: "Sicuramente la rapidità è uno dei punti forti di GlowLikes! Fino ad ora non mi hanno mai delusa e sono sempre stati puntualissimi! 👍⏱️⏱️ Nulla da dire nemmeno sulla qualità, visto che è una delle migliori agenzie italiane di Social Media Marketing.🇮🇹",
    name: "Giada",
    row: 6,
    service: {
      name: "Visite al Profilo Instagram",
      url: "/comprare-visite-al-profilo-instagram"
    }
  },
  {
    id: 22,
    stars: 5,
    text: "Lavoro al 90% in modo puramente organico, però ogni tanto comprare qualche interazione ci sta 😅😅 Dopo l’ultimo acquisto ho notato che il mio profilo ha avuto un bel boost e nessun calo ancora registrato… non compro tantissimo ma quando lo faccio vengo sempre qui!👍",
    name: "Enrico",
    row: 6,
    service: {
      name: "Commenti-TikTok",
      url: "/comprare-commenti-tik-tok"
    }
  },
  {
    id: 23,
    stars: 5,
    text: "Top!!! Come sempre del resto 🔝🔝 Ho fatto diverse prove confrontando varie agenzie tra loro… la vincitrice? GlowLikes chiaramente 😎 Su 4 ordini non c’è mai stato alcun problema o brutta sorpresa. Ottimi anche i prezzi, davvero onesti 👍🙏",
    name: "Robert",
    row: 6,
    service: {
      name: "Like Telegram",
      url: "/comprare-like-telegram"
    }
  },
  {
    id: 24,
    stars: 5,
    text: "Concordo anch’io con moltissime delle recensioni. Sono cliente da 3 mesi e mi sono sempre trovato bene. Il sito è facile da navigare e non ci sono criticità sul fronte della sicurezza. Molto pratico il contatore presente nell’area personale con cui tracciare gli ordini.",
    name: "Paul",
    row: 6,
    service: {
      name: "Commenti Facebook",
      url: "/comprare-commenti-facebook"
    }
  },
  {
    id: 25,
    stars: 4,
    text: "Avevo fatto un ordine ma la consegna non si completava… per carità, mancavano una ventina di like però dato che li ho pagati… Ho sentito l’assistenza e mi hanno spiegato che era in corso un aggiornamento server. Ciò che mancava è arrivato qualche ora più tardi.",
    name: "Igor",
    row: 7,
    service: {
      name: "Like LinkedIn",
      url: "/comprare-like-linkedin"
    }
  },
  {
    id: 26,
    stars: 5,
    text: "Super puntuali!! Pensavo che le consegne in poche ore fosse solo uno slogan… invece è stato proprio così! Ho visto arrivare le prime interazioni comprate già dopo qualche minuto, mentre le ultime sono arrivate entro qualche oretta!",
    name: "Fabri",
    row: 7,
    service: {
      name: "Visite al Profilo Instagram",
      url: "/comprare-visite-al-profilo-instagram"
    }
  },
  {
    id: 27,
    stars: 5,
    text: "Un mio caro amico mi ha consigliato di provare GlowLikes. Non finirò mai di ringraziarlo! 🙏🙏 Le mie ultime esperienze con il SMM sono andate male ma qui mi sto rifacendo alla grande. I prezzi sono molto convenienti e anche il servizio è impeccabile 👍✌️",
    name: "Luke",
    row: 7,
    service: {
      name: "Follower Spotify",
      url: "/comprare-follower-spotify"
    }
  },
  {
    id: 28,
    stars: 5,
    text: "Questa agenzia non è assolutamente una truffa. Nessuna richiesta di dati personali e i pagamenti sono protetti. Inoltre con l’area personale riesco a tenere tutti i miei ordini sotto controllo. Un motivo in più per lasciare perdere altre realtà decisamente poco serie.",
    name: "Aldo",
    row: 7,
    service: {
      name: "Spettatori Diretta Facebook",
      url: "/comprare-spettatori-diretta-facebook"
    }
  },
  {
    id: 29,
    stars: 5,
    text: "Fino a poco tempo fa rimbalzavo da un’agenzia all’altra… 🏓 Ho tante pagine social e per me è sempre stato difficile trovare un unico punto di riferimento per tutte le mie esigenze. Con GlowLikes è cambiato tutto! 🌈🌈 Nel loro store non manca nulla e trovo sempre tutto ciò che mi serve! 😎😎",
    name: "Chris",
    row: 8,
    service: {
      name: "Condivisioni Telegram",
      url: "/comprare-condivisioni-telegram"
    }
  },
  {
    id: 30,
    stars: 4,
    text: "Ieri dovevo piazzare un ordine ma non riuscivo ad entrare nella mia area personale. Provato più volte ma nulla. Il giorno dopo sono riuscito e già che c’ero ho chiesto spiegazioni all’assistenza. Era in corso un aggiornamento server, ecco il motivo del disservizio.",
    name: "Yuri",
    row: 8,
    service: {
      name: "Commenti YouTube",
      url: "/comprare-commenti-youtube"
    }
  },
  {
    id: 31,
    stars: 5,
    text: "Grandi raga! Lo dico davvero… siete la migliore agenzia che abbia mai trovato! Puntuali, qualità reale e grande varietà di scelta! Insomma, qualsiasi cosa mi serve la trovo sicuramente qui e ad un prezzo stra invitante. A presto con i nuovi ordini!",
    name: "Federico",
    row: 8,
    service: {
      name: "Iscritti Telegram",
      url: "/comprare-iscritti-telegram"
    }
  },
  {
    id: 32,
    stars: 5,
    text: "È andata super bene come sempre 👍👍 Con il mio ultimo ordine di commenti Facebook ho notato che sono arrivati davvero in fretta e privi di difetti di trascrizione. Adesso sto aspettando anche le altre consegne, ma sono stra certa che andrà tutto bene come sempre! 😉😉",
    name: "Ylenia",
    row: 8,
    service: {
      name: "Commenti Facebook",
      url: "/comprare-commenti-facebook"
    }
  },
  {
    id: 33,
    stars: 5,
    text: "Mi vien male se penso a tutti i soldi che ho buttato nel cesso comprando servizi SMM generici… Fino ad ora solo qui ho trovato quelli italiani e di alta qualità… e devo ammettere che fanno un effetto della Madonna! 😮😮 Inoltre sono ad un prezzo più che conveniente! Tornerò ancora senz’altro! 👍",
    name: "Otis",
    row: 9,
    service: {
      name: "Like su LinkedIn",
      url: "/comprare-like-su-linkedin"
    }
  },
  {
    id: 34,
    stars: 4,
    text: "Purtroppo c’è stato un piccolo disguido per cui si sono scordati di consegnarmi 35 condivisioni su oltre 600mila già acquistate… Pensavo di lasciar perdere ma ho cmq deciso di aprire un ticket! Tuttavia mi ha fatto davvero piacere che me le abbiano restituite scusandosi del disservizio.",
    name: "Michael",
    row: 9,
    service: {
      name: "Condivisioni YouTube",
      url: "/comprare-condivisioni-youtube"
    }
  },
  {
    id: 35,
    stars: 5,
    text: "La soddisfazione più grande?? Vedere il tuo profilo crescere senza registrare cali! Prima compravo e puntualmente mi ritrovavo allo stesso punto di partenza… che spreco! 😭😭 Qui invece vado sul sicuro perché ogni euro speso è un euro investito!! 🤑💶",
    name: "Francesco",
    row: 9,
    service: {
      name: "Reazioni Facebook",
      url: "/comprare-reazioni-facebook"
    }
  },
  {
    id: 36,
    stars: 5,
    text: "All’inizio non sapevo se fidarmi o no… i tempi di consegna ultra veloci possono nascondere delle insidie. Avevo provato alcune agenzie che mi avevano dato solo interazioni pacco… Qui però è tutta un’altra storia! Ho controllato l’ordine e i follower erano davvero di ottima qualità.",
    name: "Raffa",
    row: 9,
    service: {
      name: "Follower X",
      url: "/comprare-follower-x"
    }
  },
  {
    id: 37,
    stars: 5,
    text: "Soddisfatto e direi pure sopra alle aspettative! Questa agenzia ha diversi punti di forza, a cominciare dal servizio sempre impeccabile che non ti causa i soliti cali. Per non parlare della rapidità di consegna. A mio avviso è una delle più veloci del panorama italiano.",
    name: "Gabriel",
    row: 10,
    service: {
      name: "Like su TikTok",
      url: "/comprare-like-su-tiktok"
    }
  },
  {
    id: 38,
    stars: 5,
    text: "Wow! 😮 non credevo mi sarei trovato così bene! Prima ero sempre in ansia dopo ogni ordine… arriva o mi hanno paccato? Quanto ci metterà? Saranno i soliti bot del cavolo? 🤯🤯 Su GlowLikes ho già fatto 4 ordini e non ci sono state brutte sorprese 👍💪",
    name: "Alessio",
    row: 10,
    service: {
      name: "Membri Telegram",
      url: "/comprare-membri-telegram"
    }
  },
  {
    id: 39,
    stars: 4,
    text: "Nel mio caso non è andata benissimo… cmq nulla di grave o irrimediabile. Almeno ho avuto modo di testare l’assistenza! Nell’ultimo ordine di iscritti YouTube italiani ne ho trovato 10-15 di generici internazionali. Ho chiesto se me li potevano cambiare e l’hanno fatto al momento.",
    name: "Herman",
    row: 10,
    service: {
      name: "Iscritti YouTube",
      url: "/comprare-iscritti-youtube"
    }
  },
  {
    id: 40,
    stars: 5,
    text: "Faccio passare sempre un po’ di tempo prima di lasciare una recensione, così posso farmi un’idea più concreta in merito al servizio. Allora per quanto riguarda i cali non ce ne sono stati, nemmeno dopo 10 giorni e la pagina sta andando sempre meglio.",
    name: "Jeff",
    row: 10,
    service: {
      name: "Collegamenti LinkedIn",
      url: "/comprare-collegamenti-linkedin"
    }
  },
  {
    id: 41,
    stars: 5,
    text: "Solo GlowLikes ti salva anche se ti sei preso all’ultimo! 😅😅 Dovevo promuovere urgentemente un prodotto via social e ho deciso di pompare i post con qualche like. Non ci credo ancora che me li abbiano consegnati tutti nel giro di una sola notte!🚀😮💪",
    name: "Salvo",
    row: 11,
    service: {
      name: "Like Facebook",
      url: "/comprare-like-facebook"
    }
  },
  {
    id: 42,
    stars: 5,
    text: "Attenti in giro per il web perché ci sono ancora agenzie che ti rifilano interazioni prodotte dai bot… super sgamo! Una di queste mi ha fatto andare in shadow ban per una settimana, non dico altro. Ora mi fido solo di GlowLikes e di nessun altro.",
    name: "Nicola",
    row: 11,
    service: {
      name: "Commenti Instagram",
      url: "/comprare-commenti-instagram"
    }
  },
  {
    id: 43,
    stars: 5,
    text: "Ora si che ci siamo!! 👍👍 Senza dubbio uno dei servizi più veloci che abbia mai provato. Ovviamente intendo veloci con un’ottima qualità visto che è pieno di siti che ti vendono bot. Controllo sempre ogni ordini e GlowLikes è sempre stata onesta e trasparente.👌",
    name: "Flavio",
    row: 11,
    service: {
      name: "Condivisioni TikTok",
      url: "/comprare-condivisioni-tiktok"
    }
  },
  {
    id: 44,
    stars: 5,
    text: "Davvero complimenti per i follower italiani! Sono davvero impressionanti perché sembrano veri! In effetti lavorare con le interazioni geo-targettizzate è tutta un’altra cosa. I risultati si vedono e non ci si deve preoccupare dei cali o di altre penalizzazioni.",
    name: "Barbara",
    row: 11,
    service: {
      name: "Follower X",
      url: "/comprare-follower-x"
    }
  },
  {
    id: 45,
    stars: 4,
    text: "Siccome c’è stato un problema con l’ordine ho aperto un ticket per il rimborso. L’assistenza mi ha risposto subito offrendomi il rimborso oppure il cambio dei prodotti difettosi, diciamo così. Ho scelto la seconda e almeno hanno provveduto nel giro di pochissimo.",
    name: "George",
    row: 12,
    service: {
      name: "Follower Telegram",
      url: "/comprare-follower-telegram"
    }
  },
  {
    id: 46,
    stars: 5,
    text: "Il segreto per non beccarsi cali? Affidarsi ad un’agenzia seria e competente come GlowLikes! I loro prodotti hanno decisamente una marcia in più e fino ad oggi non mi hanno mai dati problemi. A quanto pare dalle recensioni non sono l’unica 🤣🤣",
    name: "Jennifer",
    row: 12,
    service: {
      name: "Ore di Visualizzazione YouTube",
      url: "/comprare-ore-visualizzazione-youtube"
    }
  },
  {
    id: 47,
    stars: 5,
    text: "Su 7 ordini mi è sempre andata di lusso. Il servizio è stato erogato piuttosto velocemente (di media poche ore) e i prezzi sono davvero interessanti. Sono prodotti di alta qualità e non credo che in giro si riesca a trovare di meglio. A presto con altri ordini!",
    name: "Mattia",
    row: 12,
    service: {
      name: "Spettatori Diretta Facebook",
      url: "/comprare-spettatori-diretta-facebook"
    }
  },
  {
    id: 48,
    stars: 5,
    text: "In passato sono stato vittima di alcune truffe e non è stato facile fidarmi di nuovo. Tuttavia sono contento di averlo fatto perché con GlowLikes mi trovo davvero bene. Sono ragazzi super seri che lavorano per la soddisfazione del cliente, offrendo ottimi servizi a prezzi OK.",
    name: "Giacomo",
    row: 12,
    service: {
      name: "Visualizzazioni LinkedIn",
      url: "/comprare-visualizzazioni-linkedin"
    }
  }
,
{
  id: 49,
  stars: 5,
  text: "Settimana scorsa ho piazzato ben 4 ordini contemporaneamente! Li ho monitorati tutti uno ad uno e l’agenzia ha mantenuto sempre una puntualità fuori dal comune. Dato un rapido controllo anche alla qualità e confermo che i miei ordini avevano tutte le caratteristiche che avevo richiesto.",
  name: "Kevin",
  row: 13,
  service: {
    name: "Ascoltatori Mensili Spotify",
    url: "/comprare-ascoltatori-mensili-spotify"
  }
},
{
  id: 50,
  stars: 5,
  text: "Ok!!! 🆗🆗 Mi ritengo del tutto soddisfatto, servizio da 💯e lode. Avevo richiesto delle condivisioni italiane e così è stato! Di media le altre agenzie non mantengono sempre la parola… Neanche a dirlo, sono già al lavoro per programmare i prossimi ordini 👍👌",
  name: "Samu",
  row: 13,
  service: {
    name: "Condivisioni Telegram",
    url: "/comprare-condivisioni-telegram"
  }
},
{
  id: 51,
  stars: 5,
  text: "Ho un canale YouTube aperto da poco, ma con le visualizzazioni YouTube che ho acquistato l’altro ieri ho subito notato un miglioramento delle performance. In futuro tornerò senz’altro per dei nuovi ordini!",
  name: "Silvio",
  row: 13,
  service: {
    name: "Visualizzazioni YouTube",
    url: "/comprare-visualizzazioni-youtube"
  }
},
{
  id: 52,
  stars: 5,
  text: "Buongiorno, se può essere di aiuto a qualcun altro volevo confermare che questa agenzia rispetta tutte le condizioni di vendita che propone. Ottima qualità e tempi di consegna decisamente veloci 👏.",
  name: "Enrico",
  row: 13,
  service: {
    name: "Commenti Instagram",
    url: "/comprare-commenti-instagram"
  }
}
,
{
  id: 53,
  stars: 5,
  text: "Il problema dell’Italia è che non abbiamo molte agenzie di Social Media Marketing serie… GlowLikes è l’eccezione che conferma la regola 👨‍🏫 In pratica sono gli unici che non causano cali. 5000 like TikTok acquistati 2 settimane fa e sono ancora tutti lì 😎",
  name: "Luca",
  row: 14,
  service: {
    name: "Like su TikTok",
    url: "/comprare-like-tiktok"
  }
},
{
  id: 54,
  stars: 5,
  text: "Credevo fosse più difficile, lo ammetto! 😅 Vabbè, cmq sono entrata nello store, ho piazzato l’ordine di 4000 voti sondaggio Telegram e l’ho monitorato grazie al contatore della mia area personale. Tutto perfetto! 😉👍",
  name: "Luisa",
  row: 14,
  service: {
    name: "Voti Sondaggio Telegram",
    url: "/comprare-voti-sondaggio-telegram"
  }
},
{
  id: 55,
  stars: 5,
  text: "Da tempo non facevo altro che puntare alla quantità… sbagliando! Infatti mi sono beccato alcuni cali che potevo risparmiarmi… Ecco perché ho deciso di comprare 10mila follower Spotify italiani pagandoli un pelino di più",
  name: "Matt",
  row: 14,
  service: {
    name: "Follower Spotify",
    url: "/comprare-follower-spotify"
  }
},
{
  id: 56,
  stars: 4,
  text: "Nonostante il piccolo problema che ho avuto devo cmq riconoscere la buona volontà dello staff. Allora… 70mila visualizzazioni X ma ne mancavano 100. Non ho voluto lasciar perdere, così ho scritto all’assistenza che ha provveduto in poche ore.",
  name: "Tiziano",
  row: 14,
  service: {
    name: "Visualizzazioni X",
    url: "/comprare-visualizzazioni-x"
  }
}
,
{
  id: 57,
  stars: 5,
  text: "Non sapendo cosa aspettarmi ho comprato 20 recensioni Facebook così…giusto per provare. Direi che è andata benone!! 😁👍 a differenza di altri non hanno fatto errori di trascrizione con quelle che avevo fornito io!👌✌️",
  name: "Ray",
  row: 15,
  service: {
    name: "Recensioni Facebook",
    url: "/comprare-recensioni-facebook"
  }
},
{
  id: 58,
  stars: 4,
  text: "Forse ho avuto sfiga io perché nel mio primo ordine da 15mila collegamenti LinkedIn ne mancavano all’appello 50 😭😭 Per carità mica una cosa grave.. cmq ho chiesto spiegazioni all’assistenza. Si sono scusati e me le hanno fatte avere subito ✌️",
  name: "Mary",
  row: 15,
  service: {
    name: "Collegamenti LinkedIn",
    url: "/comprare-collegamenti-linkedin"
  }
},
{
  id: 59,
  stars: 5,
  text: "Di solito lavoro in modo organico, però ogni tanto qualche follower YouTube ci sta tutto. Niente di che, ne ho comprati 100. Beh, sicuramente di ottima qualità e in grado di ingannare anche l’occhio più attento 😉.",
  name: "Maverick",
  row: 15,
  service: {
    name: "Iscritti YouTube",
    url: "/comprare-iscritti-youtube"
  }
},
{
  id: 60,
  stars: 5,
  text: "Ciao a tutti! Mi sono trovato benissimo con il mio primo ordine da 20mila like. Lavoro bene anche in organico, però ogni tanto non si può fare a meno di un bel boost. Quando ho bisogno vengo qui e ordino stando più che tranquillo.",
  name: "Alvise",
  row: 15,
  service: {
    name: "Like Instagram",
    url: "/comprare-like-instagram"
  }
}
,
{
  id: 61,
  stars: 5,
  text: "Ottimi prezzi davvero! .. e lo dice uno che è sempre con il budget contato 😔💸 Ho comprato 1000 follower TikTok reali e li ho pagati molto meno rispetto a quanto me li faceva il vecchio fornitore. Se ne avrò ancora bisogno torno senz’altro 👋👋",
  name: "Gianluca",
  row: 16,
  service: {
    name: "Follower TikTok",
    url: "/comprare-follower-tiktok"
  }
},
{
  id: 62,
  stars: 5,
  text: "Ho cambiato circa 7 agenzie prima di trovare questa… Consegne in ritardo e cali erano sempre una costante. Per fortuna che GlowLikes è ad un livello superiore.🔝🔝 Ho ricevuto 10mila follower Telegram in 4 ore, quindi impossibile essere più veloci 😉",
  name: "Jessie",
  row: 16,
  service: {
    name: "Follower Telegram",
    url: "/comprare-follower-telegram"
  }
},
{
  id: 63,
  stars: 5,
  text: "I migliori ascolti Spotify che abbia mai comprato! Ero preoccupato per i cali ma… per fortuna non ci sono stati! Ottima anche la velocità di consegna. Non pensavo riuscissero a consegnarmi l’ordine nel giro di un pomeriggio!",
  name: "Jeff",
  row: 16,
  service: {
    name: "Ascolti Spotify",
    url: "/comprare-ascolti-spotify"
  }
},
{
  id: 64,
  stars: 5,
  text: "Facendo 2 conti, conviene spendere qualcosa in più ma almeno avere interazioni di qualità. Nel mio caso ho comprato 15mila like X reali da profili reali e sono rimasto stupito. Qualità, ma anche velocità! Arrivati nel giro di qualche ora!",
  name: "Trevis",
  row: 16,
  service: {
    name: "Like X",
    url: "/comprare-like-x"
  }
}
,
{
  id: 65,
  stars: 4,
  text: "Sì non posso lamentarmi più di tanto anche con gli ultimi 4000 spettatori diretta Facebook che ho comprato… purtroppo 20 non sono mai arrivati. Sono già d’accordo con l’assistenza che me li mette via per la prossima diretta.",
  name: "Francesca",
  row: 17,
  service: {
    name: "Spettatori Diretta Facebook",
    url: "/comprare-spettatori-diretta-facebook"
  }
},
{
  id: 66,
  stars: 5,
  text: "Interazioni social impeccabili come sempre 🔝🔝 Qualche mese fa mi ero rivolto ad un’altra agenzia, ma con me ha fatto davvero un pessimo lavoro 😭 Un calo dietro l’altro… Per fortuna che ho risolto comprando qui 150mila views LinkedIn.👍",
  name: "Roberto",
  row: 17,
  service: {
    name: "Visualizzazioni LinkedIn",
    url: "/comprare-visualizzazioni-linkedin"
  }
},
{
  id: 67,
  stars: 5,
  text: "Ho conosciuto GlowLikes per caso e devo dire che è stata una bella sorpresa. Sono anni che bazzico in questo settore e non è facile trovare agenzie serie e competenti. 3000 ore di visualizzazioni arrivate in un solo pomeriggio 🔝🔝",
  name: "Rick",
  row: 17,
  service: {
    name: "Ore di Visualizzazione YouTube",
    url: "/comprare-ore-di-visualizzazione-youtube"
  }
},
{
  id: 68,
  stars: 5,
  text: "L’offerta per le 10mila views Instagram non è male… comprate ieri sera e stamattina ce le avevo già tutte. Sono le prime volte che acquisto…però lo rifarò senz’altro! Il mio profilo si sta risollevando… e finora zero cali.",
  name: "Victor",
  row: 17,
  service: {
    name: "Visualizzazioni Instagram",
    url: "/comprare-visualizzazioni-instagram"
  }
}
,
{
  id: 69,
  stars: 5,
  text: "Ho cambiato parecchie agenzie, ma dopo aver trovato GlowLikes non vado da nessun’altra parte! Impossibile pagare di meno 15mila visualizzazioni TikTok provenienti da account reali ed italiani 🇮🇹👍",
  name: "Christian",
  row: 18,
  service: {
    name: "Visualizzazioni TikTok",
    url: "/comprare-visualizzazioni-tiktok"
  }
},
{
  id: 70,
  stars: 5,
  text: "Ho seguito il consiglio di una mia amica e devo ammettere che ho fatto bene! 👌👌 Grazie agli ultimi 4000 membri Telegram che ho ordinato il mio canale sta finalmente decollando! 🍾 Tornerò sicuramente! ✌️",
  name: "Greta",
  row: 18,
  service: {
    name: "Membri Telegram",
    url: "/comprare-membri-telegram"
  }
},
{
  id: 71,
  stars: 5,
  text: "Nel complesso sono molto soddisfatto perché ho sempre fatto fatica a trovare follower Spotify italiani. Qui li ho trovati senza problemi e persino ad un prezzo più che conveniente. Nuovo ordine già settimana prossima!",
  name: "Brian",
  row: 18,
  service: {
    name: "Follower Spotify",
    url: "/comprare-follower-spotify"
  }
},
{
  id: 72,
  stars: 4,
  text: "Non saprei… nel mio caso c’è stato un piccolo problema con la consegna. Dei miei 50mila voti sondaggio X ne mancavano 25-26. Appunto niente di ché. Almeno è stata l’occasione per testare il servizio di assistenze che devo dire è super reattivo.",
  name: "Josh",
  row: 18,
  service: {
    name: "Voti Sondaggio X",
    url: "/comprare-voti-sondaggio-x"
  }
}
,
{
  id: 73,
  stars: 5,
  text: "Wow! 😲 Per curiosità ho fatto una prova e devo ammettere che sono stati velocissimi! In mezza giornata avevo già le mie 70mila reazioni Facebook! 👏👏 Terrò buona questa agenzia anche per i miei prossimi acquisti (a brevissimo).",
  name: "Paul",
  row: 19,
  service: {
    name: "Reazioni Facebook",
    url: "/comprare-reazioni-facebook"
  }
},
{
  id: 74,
  stars: 5,
  text: "Di solito non lascio recensioni…ma oggi faccio un’eccezione! Mi servivano urgentemente 10mila like LinkedIn così ho piazzato l’ordine. Pensavo ci mettessero un giorno o giù di lì…invece dopo poche ore c’erano già tutte!!! 🚀🚀🥲",
  name: "Matteo",
  row: 19,
  service: {
    name: "Like su LinkedIn",
    url: "/comprare-like-linkedin"
  }
},
{
  id: 75,
  stars: 5,
  text: "Un mio amico mi ha consigliato GlowLikes, così ho deciso di comprare 50 commenti YouTube per testare il servizio. Molto più conveniente e puntuale di quello degli altri miei fornitori. Tornerò senz’altro.",
  name: "Claudio",
  row: 19,
  service: {
    name: "Commenti YouTube",
    url: "/comprare-commenti-youtube"
  }
},
{
  id: 76,
  stars: 5,
  text: "Perfetto per chi parte da zero e non sa dove sbattere la testa 😆 In passato mi hanno fregata, ma con GlowLikes è filato tutto liscio come l’olio. 1000 follower Instagram di ottima qualità arrivati alla svelta 🙏",
  name: "Jennifer",
  row: 19,
  service: {
    name: "Follower Instagram",
    url: "/comprare-follower-instagram"
  }
}
,
{
  id: 77,
  stars: 5,
  text: "Ho fatto un po’ di ricerche e in effetti si possono trovare salvataggi TikTok a meno. Però sono di scarsa qualità, quindi sarebbero cmq soldi buttati. In definitiva, GlowLikes è lo store con il miglior rapporto qualità/prezzo.",
  name: "Jerry_87",
  row: 20,
  service: {
    name: "Salvataggi TikTok",
    url: "/comprare-salvataggi-tiktok"
  }
},
{
  id: 78,
  stars: 3,
  text: "Per caso anche a qualcun altro è successo di non riuscire ad entrare nell’area personale? Ieri volevo comprare 10mila views Telegram ma il sito non andava. Ho contattato lo staff, si sono scusati per dei lavori di manutenzione (mi hanno regalato 20 views in omaggio cmq).",
  name: "Steven",
  row: 20,
  service: {
    name: "Visualizzazioni Telegram",
    url: "/comprare-visualizzazioni-telegram"
  }
},
{
  id: 79,
  stars: 5,
  text: "Al di là della puntualità devo ammettere che il sito è davvero semplice da usare. Non avevo mai comprato nulla, ma per piazzare l’ordine da 40mila save Spotify ci ho messo sì e no 2 minuti. Ottimo anche il contatore per monitorare la consegna.",
  name: "Giovanni",
  row: 20,
  service: {
    name: "Save Spotify",
    url: "/comprare-save-spotify"
  }
},
{
  id: 80,
  stars: 5,
  text: "Trovo che sia un’agenzia perfetta per tutte le esigenze. Ho fatto un maxi ordine da 700mila condivisioni X ma il prossimo sarà più contenuto. In ogni caso, il rapporto qualità/prezzo è il migliore che si possa trovare. 💶💶",
  name: "Clara",
  row: 20,
  service: {
    name: "Condivisioni X",
    url: "/comprare-condivisioni-x"
  }
}
,
{
  id: 81,
  stars: 5,
  text: "Allora, preciso subito che non sono un esperto di Social Media Marketing quindi non vorrei sembrare troppo entusiasta. Ho comprato 6000 follower Facebook italiani ed è filato tutto liscio come l’olio, nel senso che erano così e sono arrivati quasi subito.",
  name: "Dave",
  row: 21,
  service: {
    name: "Follower Facebook",
    url: "/comprare-follower-facebook"
  }
},
{
  id: 82,
  stars: 5,
  text: "Non sapevo se comprare o no… non posso rischiare dei cali nella situazione in cui sono! Mi sono fidato acquistando 5000 condivisioni LinkedIn italiane e reali e ho fatto stra bene! Sono passati circa 10 giorni e nessun calo!!!",
  name: "Jason",
  row: 21,
  service: {
    name: "Condivisioni LinkedIn",
    url: "/comprare-condivisioni-linkedin"
  }
},
{
  id: 83,
  stars: 4,
  text: "Soddisfatto ma si poteva fare di meglio. Su 10mila like comprati ne mancavano una ventina. Vabbè, poco male, dato che cmq me li hanno consegnati dopo aver contattato l’assistenza. Magari un po’ più di attenzione ai dettagli.",
  name: "Nik",
  row: 21,
  service: {
    name: "Like YouTube",
    url: "/comprare-like-youtube"
  }
},
{
  id: 84,
  stars: 5,
  text: "🚀🚀 cliente fisso da 6 mesi! Sta volta è il turno di 2000 voti sondaggio Instagram comprati 10 minuti fa. Non guardo nemmeno, il contatore, tanto so che me li consegneranno velocemente come sempre 🏎️ 💪",
  name: "Marco",
  row: 21,
  service: {
    name: "Voti Sondaggio Instagram",
    url: "/comprare-voti-sondaggio-instagram"
  }
}
,
{
  id: 85,
  stars: 5,
  text: "Da quando ho conosciuto GlowLikes gli altri siti nemmeno li considero! Qui posso sempre contare su professionalità e competenza. Ho comprato 50mila condivisioni TikTok e la consegna è stata rapida come sempre 🚀💪",
  name: "Mattia",
  row: 22,
  service: {
    name: "Condivisioni TikTok",
    url: "/comprare-condivisioni-tiktok"
  }
},
{
  id: 86,
  stars: 5,
  text: "Grazie ragazzi, sempre al top! 🔝🙏 Mi sa che con l’ultimo ordine da 6000 iscritti Telegram vi siete superati! 3 ore per la consegna sono un vero e proprio record. L’ideale per chi cerca un’agenzia reattiva e pronta a venire incontro alle tue esigenze 🫶👏",
  name: "Giulia94",
  row: 22,
  service: {
    name: "Iscritti Telegram",
    url: "/comprare-iscritti-telegram"
  }
},
{
  id: 87,
  stars: 5,
  text: "Bene come gli altri 3 ordini già fatti per altri social! Mi mancavano gli ascoltatori mensili Spotify italiani che sono abbastanza difficili da trovare in giro 😞😞 Qui invece li ho trovati ed ad un prezzo eccezionale. Figata! ✌️✌️",
  name: "Walter",
  row: 22,
  service: {
    name: "Ascoltatori Mensili Spotify",
    url: "/comprare-ascoltatori-mensili-spotify"
  }
},
{
  id: 88,
  stars: 5,
  text: "Raga, se avete fretta qui potete andare tranquilli. Ho fatto io stessa la prova. Ieri mattina ho ordinato 500mila follower X reali. La metà sono arrivati dopo poche ore, mentre le altre verso l’ora di cena. Spero sarà sempre così 👍👍",
  name: "Cinzia",
  row: 22,
  service: {
    name: "Follower X",
    url: "/comprare-follower-x"
  }
}
,
{
  id: 89,
  stars: 4,
  text: "Nel mio caso c’è stato un piccolo problema… cioè nulla di grave però secondo me è giusto segnalarlo. In pratica è successo che avevo comprato 8000 like Facebook ma c’erano tipo 20 che mancavano. Però riconosco che l’assistenza ha risolto tutto alla svelta.",
  name: "Brad",
  row: 23,
  service: {
    name: "Like Facebook",
    url: "/comprare-like-facebook"
  }
},
{
  id: 90,
  stars: 5,
  text: "Che prezzi! Lavoro solo ed esclusivamente con target italiano, quindi non posso fare a meno dei follower LinkedIn italiani, meglio se reali. Qui li ho trovati (dalle altre parti sono solo una truffa) e con un rapporto qualità/prezzo imbattibile! 👍👍",
  name: "Erik",
  row: 23,
  service: {
    name: "Follower LinkedIn",
    url: "/comprare-follower-linkedin"
  }
},
{
  id: 91,
  stars: 5,
  text: "All’altezza delle aspettative… sito abbastanza semplice da usare, prezzi nella norma e puntualità. Ho già fatto un paio di ordini e mi sono sempre trovato bene… Anch’io zero cali, quindi direi ottimo per il momento.",
  name: "Jacopo",
  row: 23,
  service: {
    name: "Spettatori Diretta YouTube",
    url: "/comprare-spettatori-diretta-youtube"
  }
},
{
  id: 92,
  stars: 5,
  text: "In quest’ultimo anno ho già fatto 6 ordini! Nessun ripensamento e per questo ho appena ordinato altre 20mila condivisioni Instagram. Grazie a GlowLikes sono riuscita a monetizzare il profilo, quindi non potrei essere più felice! ❤️",
  name: "Giorgia",
  row: 23,
  service: {
    name: "Condivisioni Instagram",
    url: "/comprare-condivisioni-instagram"
  }
}
,
{
  id: 93,
  stars: 5,
  text: "Per quella che è la mia esperienza, meglio spendere qualcosa in più, come ho fatto io comprando 2000 commenti TikTok italiani. Stanno facendo la loro bella figura perché i miei follower stanno reagendo positivamente 👍",
  name: "Jay",
  row: 24,
  service: {
    name: "Commenti TikTok",
    url: "/comprare-commenti-tiktok"
  }
},
{
  id: 94,
  stars: 5,
  text: "Concordo anch’io, ultimamente tutti i social ci vanno giù pesanti le interazioni prodotte da bot. Tuttavia, con gli ultimi 7000 like Telegram non ho avuto alcun problema e i risultati si vedono! Grazie ancora per il vostro lavoro 🙏",
  name: "Luis",
  row: 24,
  service: {
    name: "Like Telegram",
    url: "/comprare-like-telegram"
  }
},
{
  id: 95,
  stars: 5,
  text: "Ho girato diversi siti prima di trovare GlowLikes. Cosa ne penso? Di sicuro è quello che offre il miglior rapporto qualità/prezzo, in special modo per quanto riguarda gli ascolti Spotify targettizzati Italia.",
  name: "Greg",
  row: 24,
  service: {
    name: "Ascolti Spotify",
    url: "/comprare-ascolti-spotify"
  }
},
{
  id: 96,
  stars: 5,
  text: "Altre 500mila views X in arrivoooo!! Ho già fatto diversi ordini fino ad ora e GlowLikes non mi ha mai deluso. Dico sul serio! Rapporto qualità/prezzo imbattibile e una velocità di consegna senza pari. Senz’altro una delle agenzie più veloci.",
  name: "Corrado",
  row: 24,
  service: {
    name: "Visualizzazioni X",
    url: "/comprare-visualizzazioni-x"
  }
}
,
{
  id: 97,
  stars: 5,
  text: "Niente truffe niente inganni! Confermo, questa è un’agenzia seria che offre solo servizi pro. 1000 membri gruppo Facebook italiani secondo me a un prezzo moooolto interessante. Sto già pensando a cos’altro posso comprare 🤔🤔",
  name: "Christian",
  row: 25,
  service: {
    name: "Membri Gruppo Facebook",
    url: "/comprare-membri-gruppo-facebook"
  }
},
{
  id: 98,
  stars: 5,
  text: "Proprio oggi ho ordinato 10mila collegamenti LinkedIn e non mi aspettavo arrivassero così in fretta. Diciamo una mattinata, o poco meno. Sono rimasto stupito anche dal fatto di non aver registrato dei cali, nemmeno minimi.",
  name: "Marco",
  row: 25,
  service: {
    name: "Collegamenti LinkedIn",
    url: "/comprare-collegamenti-linkedin"
  }
},
{
  id: 99,
  stars: 4,
  text: "Ho ordinato 5000 visualizzazioni, peccato però che ne mancavano una cinquantina. Ho contattato lo Staff e nel giro di pochissimo tempo mi sono arrivate anche quelle che mancavano. Tutto sommato un buon servizio.",
  name: "Jack84",
  row: 25,
  service: {
    name: "Visualizzazioni YouTube",
    url: "/comprare-visualizzazioni-youtube"
  }
},
{
  id: 100,
  stars: 5,
  text: "Lo confesso, all’inizio ero scettico! Pensavo fosse un bidone e invece mi sbagliavo di grosso… Ho fatto un ordine di 7000 visite al profilo Instagram e non c’è stato alcun problema. Velocità e professionalità 🔝🔝",
  name: "Nicola",
  row: 25,
  service: {
    name: "Visite al Profilo Instagram",
    url: "/comprare-visite-al-profilo-instagram"
  }
}
,
{
  id: 101,
  stars: 5,
  text: "Sono soddisfatto? Assolutamente sì! Sì può fare di meglio? … forse sì ma mi accontento più che volentieri! Di sicuro questi 60mila mi piace sono i migliori che abbia mai comprato. No cali, prezzo conveniente e consegna super rapida!",
  name: "Fede",
  row: 26,
  service: {
    name: "Like su TikTok",
    url: "/comprare-like-su-tiktok"
  }
},
{
  id: 102,
  stars: 5,
  text: "Ottimo lavoro come sempre! Raga, se vi serve un fornitore serio andate pure tranquilli con GlowLikes. Tanto per dire, ho ordinato 8000 condivisioni Telegram in mattinata e adesso che è ora di pranzo ci sono già tutte. Assurdo! 😲😲",
  name: "Robert",
  row: 26,
  service: {
    name: "Condivisioni Telegram",
    url: "/comprare-condivisioni-telegram"
  }
},
{
  id: 103,
  stars: 5,
  text: "Indubbiamente GlowLikes è l’agenzia rivelazione di quest’anno! Prezzi stracciati ma save Spotify di tutto rispetto. Fino ad ora sono gli unici che non mi hanno causato cali. Sto già pensando al prossimo ordine…",
  name: "Luke",
  row: 26,
  service: {
    name: "Save Spotify",
    url: "/comprare-save-spotify"
  }
},
{
  id: 104,
  stars: 4,
  text: "Di nuovo qui dopo l’ultima esperienza più che positiva! 👍 Stavolta ho ordinato 5000 mila like X perché non potevo permettermi di più… cmq sia è stato un buon investimento visto che sto già notando un miglioramento delle performance del mio profilo 😉",
  name: "Maxim",
  row: 26,
  service: {
    name: "Like X",
    url: "/comprare-like-x"
  }
}
,
{
  id: 105,
  stars: 4,
  text: "Beh rispetto alle altre agenzie questa sicuramente ha una marcia in più… purtroppo però c’è stato un intoppo con il mio ordine visto che 50 su 3000 amici Facebook italiani erano di quelli generici.. per fortuna che l’assistenza me li ha cambiati subito!!",
  name: "Dennis",
  row: 27,
  service: {
    name: "Amici Facebook",
    url: "/comprare-amici-facebook"
  }
},
{
  id: 106,
  stars: 5,
  text: "Impeccabili come sempre. Da quando ho scoperto GlowLikes le altre agenzie nemmeno le calcolo… Chi è che può consegnare 10mila visualizzazioni LinkedIn in una sola mattinata?? Nessuno credo…Ecco perché mi trovo così bene.",
  name: "Nathan",
  row: 27,
  service: {
    name: "Visualizzazioni LinkedIn",
    url: "/comprare-visualizzazioni-linkedin"
  }
}

  
  
  
];

// Add these near the other state declarations at the top of the component
const TestimonialRow = ({ reviews, direction }: { reviews: Review[], direction: 'left' | 'right' }) => {
  const [isPaused, setIsPaused] = useState(false);

  const handleInteractionStart = () => {
    setIsPaused(true);
  };

  const handleInteractionEnd = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="flex gap-4 mb-8 overflow-hidden relative touch-pan-y"
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onTouchCancel={handleInteractionEnd}
    >
      <div 
        className={`flex gap-4 ${
          direction === 'left' 
            ? 'animate-scroll-left' 
            : 'animate-scroll-right'
        }`}
        style={{ 
          animationPlayState: isPaused ? 'paused' : 'running',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        {[...reviews, ...reviews].map((review, idx) => (
          <div 
            key={`${review.id}-${idx}`}
            className="w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0"
          >
            <div className="bg-[#262937] p-4 sm:p-5 rounded-xl border border-[#333333] h-[280px] sm:h-[295px] flex flex-col mx-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30">
              <div className="flex justify-center mb-3 sm:mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={starIndex < review.stars ? "text-primary" : "text-gray-600"}
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 italic leading-relaxed text-center flex-grow text-sm sm:text-base">
                &quot;{review.text}&quot;
              </p>
              <div className="mt-auto text-center">
                <a 
                  href={review.service.url}
                  className="text-primary hover:text-primary/80 transition-colors text-sm mb-2 inline-block"
                >
                  {review.service.name}
                </a>
                <p className="text-white font-medium text-sm sm:text-base">
                  - {review.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  // Add this with other state declarations at the top
  const [visibleRows, setVisibleRows] = useState(6);
  const maxRows = 27;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [name, setName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout>();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const itemsPerView = windowWidth < 768 ? 1 : 3;
  const [isInView, setIsInView] = useState(false);
  const ratingRef = useRef<HTMLDivElement>(null);

  // Add this useEffect after your other useEffect hooks
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 }
    );

    if (ratingRef.current) {
      observer.observe(ratingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Only start auto-rotation if there are enough reviews
    if (reviews.length > itemsPerView) {
      startAutoRotation();
    }

    return () => {
      // Cleanup
      window.removeEventListener('resize', handleResize);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [itemsPerView]);

  const startAutoRotation = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => {
        // If we're at the last possible index, reset to 0
        if (prev >= reviews.length - itemsPerView) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
  };

  const stopAutoRotation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const slideNext = () => {
    stopAutoRotation();
    setCurrentIndex(prev => {
      // If we're at the last possible index, reset to 0
      if (prev >= reviews.length - itemsPerView) {
        return 0;
      }
      return prev + 1;
    });
    startAutoRotation();
  };

  const slidePrev = () => {
    stopAutoRotation();
    setCurrentIndex(prev => {
      // If we're at the first index, go to the last possible index
      if (prev === 0) {
        return reviews.length - itemsPerView;
      }
      return prev - 1;
    });
    startAutoRotation();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled and CAPTCHA is verified
    if (!rating || !reviewText || !name || !captchaVerified) {
      setErrorMessage('Errore: per favore, compila tutti i campi.');
      setConfirmationMessage('');
    } else {
      setErrorMessage('');
      setConfirmationMessage('La tua recensione è stata inviata e verrà approvata entro 24-48 ore.');
      
      // Reset form fields
      setRating(0);
      setReviewText('');
      setName('');
      setCaptchaVerified(false);
      
      // Close modal after a delay
      setTimeout(() => {
        setIsModalOpen(false);
        setConfirmationMessage('');
      }, 2000);
    }
  };

  

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  // Calculate average rating
  const avgRating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;
  const totalReviews = reviews.length;

  // Maximum possible index based on items per view
  const maxIndex = Math.max(0, reviews.length - itemsPerView);
  
  // Calculate the slide width percentage based on items per view
  const slideWidth = 100 / itemsPerView;
  


  return (
    <section className="flex-1 py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-white glow">
          Recensioni GlowLikes
          </h2>
          
          {/* Average Rating Display */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center" ref={ratingRef}>
              <div className="text-4xl mb-1 font-bold text-white">
                {avgRating.toFixed(1)} <span className="text-white text-[16px] font-normal">
                  ({totalReviews} {totalReviews === 1 ? 'Recensione' : 'Recensioni'})
                </span>
              </div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="relative">
                    <FaStar
                      className={`transform transition-all duration-300 ${
                        index < Math.round(avgRating) 
                          ? "text-[#FFD700] opacity-0" 
                          : "text-gray-600"
                      }`}
                      size={20}
                    />
                    {index < Math.round(avgRating) && (
                      <FaStar
                        className="absolute top-0 left-0"
                        style={{
                          color: '#FFD700',
                          animation: isInView ? `starEntrance 2.4s ease-out ${index * 0.2}s forwards` : 'none',
                          filter: 'drop-shadow(0 0 4px #FFD700)',
                          WebkitTextStroke: '1px #FFA500',
                        }}
                        size={20}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Replace the existing slider with two rows */}
        <div className="relative mt-16">
          <div className="max-w-[90%] xl:max-w-[1400px] 2xl:max-w-[1300px] mx-auto overflow-hidden">
            {/* Updated fade effect containers with specific 2xl breakpoint styles */}
            <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background/90 via-background/50 to-transparent z-10 2xl:w-60 2xl:bg-gradient-to-r 2xl:from-background 2xl:via-background/80 2xl:to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background/90 via-background/50 to-transparent z-10 2xl:w-60 2xl:bg-gradient-to-l 2xl:from-background 2xl:via-background/80 2xl:to-transparent" />
            
            {Array.from({ length: visibleRows }, (_, index) => (
            <TestimonialRow 
              key={index + 1}
              reviews={reviews.filter(r => r.row === index + 1)} 
              direction={index % 2 === 0 ? "left" : "right"} 
            />
          ))}


{visibleRows < maxRows && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleRows(prev => Math.min(prev + 3, maxRows))}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
              >
                Mostra Altre Recensioni
              </button>
            </div>
          )}
          </div>
        </div>

        {/* Add Review Form Section */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="max-w-2xl mx-auto bg-[#262937] p-8 rounded-xl border border-[#333333] hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8 glow">
            Lascia una Recensione
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rating Selection */}
            <div className="flex flex-col items-center gap-3">
              <label className="text-gray-300 text-sm font-medium">Il Tuo Voto</label>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-all duration-200 hover:scale-110"
                  >
                    <FaStar
                      className={star <= rating ? "text-primary filter drop-shadow-glow" : "text-gray-600"}
                      size={28}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div>
              <label htmlFor="review" className="block text-gray-300 text-sm font-medium mb-2">
                La Tua Recensione
              </label>
              <textarea
                id="review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1b23] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                rows={4}
                placeholder="Scrivi la tua recensione qui..."
              />
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                Il Tuo Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1b23] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                placeholder="Inserisci il tuo nome"
              />
            </div>

            {/* ReCAPTCHA */}
            <div className="flex justify-center">
              <div className="transform transition-all duration-200 hover:scale-[1.02]">
                <ReCAPTCHA
                  sitekey="6LfNVNsqAAAAAF7SXwMAwz4V4Oh7ziha-nl5rKpy"
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>
            </div>

            {/* Error and Success Messages */}
            {errorMessage && (
              <p className="text-red-500 text-center text-sm bg-red-500/10 py-2 px-4 rounded-lg">{errorMessage}</p>
            )}
            {confirmationMessage && (
              <p className="text-green-500 text-center text-sm bg-green-500/10 py-2 px-4 rounded-lg">{confirmationMessage}</p>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                Invia Recensione
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;