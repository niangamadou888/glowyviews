import { useState, useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ReCAPTCHA from "react-google-recaptcha";

interface Review {
  id: number;
  stars: number;
  text: string;
  name: string;
}

const reviews: Review[] = [
  {
    id: 1,
    stars: 5,
    text: "Absolutely amazing service! Could not be happier with the results. Highly recommend to anyone looking for quality work.",
    name: "John Smith"
  },
  {
    id: 2,
    stars: 5,
    text: "Professional, timely, and exceeded all expectations. Will definitely use their services again!",
    name: "Sarah Johnson"
  },
  {
    id: 3,
    stars: 4,
    text: "Great experience from start to finish. The team was very responsive and delivered exactly what we needed.",
    name: "Mike Davis"
  },
  {
    id: 4,
    stars: 5,
    text: "Outstanding quality and customer service. The results were better than expected!",
    name: "Emma Wilson"
  },
  {
    id: 5,
    stars: 5,
    text: "Very impressed with the professionalism and quality of work. Would definitely recommend.",
    name: "David Brown"
  },
  {
    id: 6,
    stars: 5,
    text: "The growth in my channel's engagement has been phenomenal. Their service is worth every penny!",
    name: "Alex Turner"
  },
  {
    id: 7,
    stars: 5,
    text: "I was hesitant at first, but the results exceeded my expectations. My subscriber count doubled!",
    name: "Rachel Chen"
  },
  {
    id: 8,
    stars: 4,
    text: "Fast delivery and excellent customer support. They really know what they're doing.",
    name: "Marcus Williams"
  },
  {
    id: 9,
    stars: 5,
    text: "Best investment I've made for my YouTube channel. The organic growth is impressive!",
    name: "Sofia Rodriguez"
  },
  {
    id: 10,
    stars: 5,
    text: "Their service helped me reach monetization requirements in record time. Highly recommended!",
    name: "James Parker"
  }
];

const TestimonialRow = ({ reviews, direction }: { reviews: Review[], direction: 'left' | 'right' }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="flex gap-4 mb-8 overflow-hidden relative touch-pan-y"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div 
        className={`flex gap-4 animate-${direction === 'left' ? 'scroll-left' : 'scroll-right'}`}
        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
      >
        {[...reviews, ...reviews].map((review, idx) => (
          <div 
            key={`${review.id}-${idx}`}
            className="w-[300px] sm:w-[350px] md:w-[400px] flex-shrink-0"
          >
            <div className="bg-[#262937] p-4 sm:p-5 rounded-xl border border-[#333333] h-[200px] sm:h-[215px] flex flex-col mx-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/30">
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
              <p className="text-primary font-medium text-center mt-auto text-sm sm:text-base">
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
    <section className="w-full bg-hsl(var(--background)) relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
      <div className="container mx-auto px-2 md:px-4 pb-8 md:pb-16 relative z-10">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-white">
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
          {/* Fade effect containers */}
          <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#121212] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#121212] to-transparent z-10" />
        
          {/* First row - moves left */}
          <TestimonialRow 
            reviews={reviews.slice(0, Math.ceil(reviews.length/2))} 
            direction="left" 
          />
        
          {/* Second row - moves right */}
          <TestimonialRow 
            reviews={reviews.slice(Math.ceil(reviews.length/2))} 
            direction="right" 
          />
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