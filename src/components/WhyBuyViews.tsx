import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhyBuyViews = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Why Buy Views */}
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-glow mb-12">
          Comprare Visualizzazioni YouTube: per quale motivo?
        </h2>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nel caso ti stessi chiedendo perché convenga comprare Views YouTube, la risposta è davvero semplice.
            In parole povere, servono per "amicarsi" i crawler della piattaforma stessa, ossia i "bot" che determinano la visibilità di ciascun canale e dei suoi rispettivi contenuti.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Per certi versi, il mondo della rete non funziona in modo poi così diverso dalla "realtà" offline.
            Infatti, il meccanismo della vendita (e quindi anche del guadagno del venditore) è sempre lo stesso.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Su "X" persone che vengono a conoscenza di una determinata offerta, una data percentuale decide di effettuare l'acquisto. Di conseguenza, più si amplia questo "bacino", maggiori saranno anche i guadagni finali.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-glow mb-12">
          Tutti i vantaggi del comprare Visualizzazioni YouTube
        </h2>
        <Card className="bg-secondary/50 backdrop-blur-sm border-primary/20">
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Essenzialmente, comprare views YouTube porta un grande vantaggio, ovvero il poter pianificare il proprio business.
              Siamo tutti d'accordo sul fatto che lo scopo sarebbe quello di ottenere tale tipo di interazioni social in modo organico.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Purtroppo, però, i canali aperti da poco potrebbero riscontrare non poche difficoltà nell'emergere.
              Infatti, i crawler del social network in questione tendono a "premiare" con maggiore visibilità proprio i canali già ben movimentati a livello di interazioni da parte del pubblico.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Which Videos */}
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-glow mb-12">
          Per quali video si possono comprare Visualizzazioni YouTube?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-secondary/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Video Standard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Da noi di Social X puoi comprare visualizzazioni YouTube italiane e reali per qualsiasi tipo di video. Non importa quale sia il topic trattato, così come non ha alcuna importanza lo stile, la grafica o qualsiasi altro parametro tecnico.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Shorts YouTube</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nell'altra sezione del nostro sito, puoi comprare visualizzazioni e like agli Shorts YouTube. Se sei interessato ai servizi relativi a questo specifico formato, visita la sezione dedicata.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How to Buy */}
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-glow mb-12">
          Come comprare Visualizzazioni YouTube italiane e reali
        </h2>
        <div className="grid gap-6">
          <ol className="list-decimal list-inside space-y-4 text-lg text-muted-foreground">
            <li className="pl-4">Crea la tua area personale iscrivendoti a SocialX e recati nella sezione delle offerte commerciali.</li>
            <li className="pl-4">Passa al vaglio tutti i pacchetti proposti per trovare quello più adatto alle tue esigenze e budget.</li>
            <li className="pl-4">Seleziona il pacchetto e fornisci l'URL del video in formato desktop (https://youtube.com/tuovideo).</li>
            <li className="pl-4">Procedi con il pagamento scegliendo tra carte, bonifici, PayPal e altri metodi disponibili.</li>
            <li className="pl-4">Attendi l'elaborazione dell'ordine da parte del nostro Staff e monitora il contatore delle visualizzazioni.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyViews;