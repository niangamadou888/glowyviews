import Footer from '@/youtube-views-components/Footer';
import Navigation from '@/youtube-views-components/Navigation';
import React from 'react';

const Rimborso: React.FC = () => {
    return (
        <main className="min-h-screen bg-background flex flex-col mt-12">
            <Navigation />
            <div className="flex-1 py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl" />
                <div className="relative max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-center mb-8 text-white glow">
                            Garanzia e Rimborso
                        </h2>
                        <div className="space-y-6 text-lg text-gray-300 text-left">
                            <p>
                                Garantiamo sempre il numero di interazioni social raggiunte dopo l'incremento. Al momento dell'acquisto riceverai un'email che riporta il link della pagina/profilo social fornito dal cliente/fruitore stesso e il conteggio iniziale dei followers.
                            </p>
                            <p>
                                Contestualmente, nell'area personale che il cliente/fruitore crea all'interno di <a href="https://glowlikes.it/" className="mystyle">glowlikes.it</a> è presente un contatore che monitora in tempo reale la consegna delle interazioni acquistate.
                            </p>
                            <p>
                                Offriamo un <strong className="text-white">rimborso parziale</strong> – soggetto ad una commissione del 5% della somma – qualora la richiesta venga effettuata quando l'ordine è già in fase di lavorazione.
                            </p>
                            <p>
                                GlowLikes rimborsa anche eventuali fondi presenti nel saldo dell'account personale del cliente/fruitore, a patto che questo risulti pari o superiore a 5,00 €.
                            </p>
                            <h3 className="text-2xl font-bold text-white glow mt-12 mb-6">
                                Diritto di Recesso
                            </h3>
                            <p>
                                In qualità di consumatore, il cliente/fruitore ha diritto di esercitare la facoltà di recesso chiedendo la restituzione completa del versato prima che il servizio venga erogato. Per far ciò deve necessariamente inviare una mail a <a href="mailto:supporto@glowlikes.it" className="mystyle">supporto@glowlikes.it</a>.
                            </p>
                            <p className="text-sm text-gray-400 mt-12">
                                Documento aggiornato il 25 febbraio 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Rimborso;