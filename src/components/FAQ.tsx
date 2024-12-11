const FAQ = () => {
  const faqs = [
    {
      question: "Come funziona il servizio?",
      answer: "Il nostro servizio fornisce visualizzazioni YouTube reali e italiane attraverso un processo sicuro e naturale che rispetta le linee guida di YouTube."
    },
    {
      question: "Le visualizzazioni sono sicure?",
      answer: "Sì, utilizziamo solo metodi sicuri e conformi alle politiche di YouTube per garantire visualizzazioni reali da utenti italiani."
    },
    {
      question: "Quanto tempo ci vuole per vedere i risultati?",
      answer: "I risultati iniziano a essere visibili entro 24-48 ore dall'attivazione del servizio, con una distribuzione graduale e naturale."
    },
    {
      question: "Posso acquistare visualizzazioni per qualsiasi video?",
      answer: "Sì, il servizio è disponibile per qualsiasi video YouTube, purché rispetti le linee guida della piattaforma."
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-glow">Domande Frequenti</h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-secondary/50 rounded-lg p-6 backdrop-blur-sm border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;