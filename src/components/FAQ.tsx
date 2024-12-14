import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "1. Dopo quanto vedrò le mie visualizzazioni YouTube salire?",
      answers: [
        "Tutto dipende da pacchetto che hai comprato. Ovviamente, se si tratta di poche centinaia, riusciamo a consegnare l'ordine in poche ore.",
        "Per i pacchetti più ampi, invece, ci prendiamo alcuni giorni lavorativi. Da un lato, questo arco temporale ci è necessario per poter preparare materialmente gli account che, poi, effettueranno le visualizzazioni vere e proprie.",
        "Dall'altro, invece, \"diluire\" i grossi pacchetti nel tempo è anche il modo migliore per simulare una reale crescita organica.",
        "Quindi, mal che vada, vedrai consegnate tutte le visualizzazioni entro 4-5 giorni lavorativi.",
        "Nell'ipotesi in cui ci fossero esigenze particolari da parte tua, non esitare a contattare il nostro Staff per trovare insieme la soluzione migliore."
      ]
    },
    {
      question: "2. I miei iscritti si accorgeranno delle visualizzazioni YouTube acquistate?",
      answers: [
        "Assolutamente no, i nostri servizi sono così discreti che le interazioni da noi acquistate vengono scambiate come acquisite in modo organico, sia dai crawler della piattaforma, che dai tuoi iscritti.",
        "Detto ciò, questo accade quando si fanno le \"cose fatte bene\". Cosa intendiamo?",
        "Beh, se hai il canale aperto di recente e pochi video caricati, un improvviso e repentino aumento di visualizzazioni potrebbe sì creare sospetti.",
        "Ecco perché è fondamentale comprare visualizzazioni YouTube in modo corretto, ossia un po' alla volta, in modo che le interazioni acquisite risultino ottenute in modo \"genuino\" e non come conseguenza di una strategia di Social Media Marketing."
      ]
    },
    {
      question: "3. Davvero da voi posso comprare visualizzazioni YouTube reali?",
      answers: [
        "Sì, le visualizzazioni YouTube che vendiamo sono reali al 100%. Questo significa che provengono da account reali, gestiti da persone vere.",
        "Non utilizziamo bot o software automatici, ma solo account verificati che interagiscono con i tuoi contenuti in modo naturale.",
        "Questo approccio garantisce che le visualizzazioni siano di alta qualità e contribuiscano positivamente alla crescita del tuo canale."
      ]
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
        Domande Frequenti
      </h2>
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className={`bg-secondary/50 rounded-lg p-8 backdrop-blur-sm border border-primary/20 
              transition-all duration-300 cursor-pointer
              ${openIndex === index ? 'border-glow shadow-[0_0_30px_rgba(147,51,234,0.3)]' : 'hover:border-glow hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]'}
              group`}
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className={`text-2xl font-semibold text-primary ${openIndex === index ? 'text-glow' : 'group-hover:text-glow'} transition-all duration-300`}>
                {item.question}
              </h3>
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
            <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {item.answers.map((answer, answerIndex) => (
                <p key={answerIndex} className="text-muted-foreground leading-relaxed group-hover:text-white transition-all duration-300">
                  {answer}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
