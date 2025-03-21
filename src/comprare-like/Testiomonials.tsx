import { useState, useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReCAPTCHA from "react-google-recaptcha";

interface Review {
  id: number;
  stars: number;
  text: string;
  name: string;
  row: 'first' | 'second' | 'third';  // Updated to include 'third'
}

const reviews: Review[] = [
  {
    id: 1,
    stars: 5,
    text: "Chi lavora sui social sa benissimo quanto sia importante affidarsi ad un’ottima agenzia di SMM. Con GlowLikes mi sono trovato da dio! 20mila like recapitati in mezza giornata e niente cali! Grazie davvero 🙏",
    name: "Francesco",
    row: 'first'
  },
  {
    id: 2,
    stars: 5,
    text: "Lo ammetto senza problemi: questa non è la prima agenzia che provo. A differenza delle altre, però, questa mantiene le promesse e non ti fa trovare brutte sorprese 💪. Ho già effettuato 2 ordini e la prossima settimana vado con la terza buttata di like YouTube.",
    name: "Luke_34",
    row: 'first'
  },
  {
    id: 3,
    stars: 4,
    text: "5000 Mi Piace YouTube ad un costo accettabile. L’unica pecca? Ho dovuto contattare lo staff perché ne mancavano circa 200. Fortunatamente, l’assistenza mi ha risolto il problema alla svelta. Non il top del top, ma comunque un’agenzia valida.",
    name: "Anthony",
    row: 'first'
  },
  {
    id: 4,
    stars: 5,
    text: "Ho già provato a comprare Mi Piace YouTube, prendendo “bidoni”. GlowLikes, però, lavora con la massima professionalità. Come mi sono trovata con l’ultimo ordine? Benissimo! Ne farò altri? Certamente! 😉",
    name: "Marta",
    row: 'second'
  },
  {
    id: 5,
    stars: 4,
    text: "Un servizio nella norma, tutto sommato. Nulla di speciale. Ammetto che i Mi Piace YouTube sono di ottima qualità perché non causano cali. Ad ogni modo, trovo che siano un po’ caretti data la media di mercato.",
    name: "Davis",
    row: 'second'
  },
  {
    id: 6,
    stars: 3,
    text: "Riconosco la buona volontà di GlowLikes, però non sono super soddisfatto del servizio. La qualità è buona, ma i tempi di consegna sono troppo lunghi. C’erano problemi con il server, quindi ho dovuto sollecitare lo Staff.",
    name: "Pablo",
    row: 'second'
  },
  {
    id: 7,
    stars: 5,
    text: "Non posso che lasciare il massimo! I like YouTube che ho comprato sono arrivati precisi e puntuali. Sicuramente tornerò per ordinare ancora, anche per gli altri miei social. Ottimo anche il contatore che mi permette di monitorare l’ordine in tempo reale.",
    name: "Michael",
    row: 'third'
  },
  {
    id: 8,
    stars: 4,
    text: "Soddisfatto ma si poteva fare di meglio. Su 10mila like comprati ne mancavano una ventina. Vabbè, poco male, dato che cmq me li hanno consegnati dopo aver contattato l’assistenza. Magari un po’ più di attenzione ai dettagli.",
    name: "Nik",
    row: 'third'
  },
  {
    id: 9,
    stars: 5,
    text: "Non pensavo potessero fare la differenza, ma quei 100 like che ho acquistato hanno dato una bella spinta al mio video. Investimento ripagato alla grande!",
    name: "Leo Vlog",
    row: 'third'
  },
  {
    id: 10,
    stars: 5,
    text: "Like arrivati in tempi rapidi e ben distribuiti, niente di strano nello Studio di YouTube. Servizio utile per migliorare la reputazione dei contenuti all’inizio, quando il video è ancora poco conosciuto. Sicuramente tornerò a usarli!",
    name: "A Tutto Chiara",
    row: 'first'
  },
  {
    id: 11,
    stars: 5,
    text: "Ordine da 500 like su un trailer del mio corto indipendente. Tutto liscio e senza scossoni, anzi, ho notato anche un piccolo aumento organico subito dopo. Forse effetto placebo? Chi lo sa, ma funziona :D",
    name: "Andrea Rinaldi",
    row: 'second'
  },
  {
    id: 12,
    stars: 4,
    text: "Tutto bene ma... mi aspettavo un po’ più di rapidità. Like arrivati, ma la consegna ha richiesto un giorno e mezzo. Nulla di grave, però me lo aspettavo più veloce.",
    name: "MarikaVibes",
    row: 'third'
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
            <div className="bg-[#262937] p-4 sm:p-5 rounded-xl border border-[#333333] h-[240px] sm:h-[255px] flex flex-col mx-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30">
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
              <p className="text-primary text-white font-medium text-center mt-auto text-sm sm:text-base">
                - {review.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
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
    <section className="w-full bg-hsl(var(--background)) relative overflow-hidden" id='testimonials'>
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-center mb-6 text-white">
            Cosa Dicono I Nostri Clienti
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
            
            {/* First row - moves left */}
            <TestimonialRow 
              reviews={reviews.filter(r => r.row === 'first')} 
              direction="left" 
            />
            
            {/* Second row - moves right */}
            <TestimonialRow 
              reviews={reviews.filter(r => r.row === 'second')} 
              direction="right" 
            />
            
            {/* Third row - moves left */}
            <TestimonialRow 
              reviews={reviews.filter(r => r.row === 'third')} 
              direction="left" 
            />
          </div>
        </div>

        {/* Write Review Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/80 transition-colors duration-300 font-medium"
          >
            Scrivi Una Recensione
          </button>
        </div>

        {/* Modal for Review Form */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#262937] p-8 rounded-xl max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-white text-2xl"
                aria-label="Close form"
              >
                &times;
              </button>

              <h3 className="text-2xl font-semibold mb-4 text-white">Scrivi Una Recensione</h3>
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Il tuo nome..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-md text-black"
                    aria-label="Your name"
                  />
                </div>

                {/* Rating Input */}
                <div className="mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={index < rating ? 'text-primary cursor-pointer' : 'text-gray-400 cursor-pointer'}
                        size={24}
                        onClick={() => setRating(index + 1)}
                        aria-label={`Rate ${index + 1} stars`}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text Input */}
                <div className="mb-4">
                  <textarea
                    placeholder="Scrivi Una Recensione..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full p-3 border rounded-md text-black"
                    rows={4}
                    aria-label="Your review"
                  />
                </div>

                {/* CAPTCHA */}
                <div className="mb-4">
                  <ReCAPTCHA
                    sitekey="6LfNVNsqAAAAAF7SXwMAwz4V4Oh7ziha-nl5rKpy"
                    onChange={handleCaptchaChange}
                  />
                </div>

                {/* Error or Confirmation Message */}
                {errorMessage && <div className="text-red-500 mb-4" role="alert">{errorMessage}</div>}
                {confirmationMessage && <div className="text-green-500 mb-4" role="alert">{confirmationMessage}</div>}

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/80 transition-colors"
                >
                  Invia Recensione
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;