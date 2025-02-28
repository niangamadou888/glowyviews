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
  }
];

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

  useEffect(() => {
    // Start the automatic rotation
    startAutoRotation();

    return () => {
      // Cleanup timer on component unmount
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startAutoRotation = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 4000);
  };

  const stopAutoRotation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const slideNext = () => {
    stopAutoRotation();
    setCurrentIndex(prev => (prev + 1) % reviews.length);
    startAutoRotation();
  };

  const slidePrev = () => {
    stopAutoRotation();
    setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
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
      setIsModalOpen(false);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  // Calculate average rating
  const avgRating = reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section className="w-full bg-hsl(var(--background)) relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Cosa Dicono I Nostri Clienti
          </h2>
          
          {/* Average Rating Display */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-1 font-bold text-white font-size">
                {avgRating.toFixed(1)}
              </div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < Math.round(avgRating) ? "text-primary" : "text-gray-600"}
                    size={20}
                  />
                ))}
              </div>
              <div className="text-gray-400">
                {totalReviews} {totalReviews === 1 ? 'Recensioni' : 'Recensioni'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative w-full mx-auto">
          {/* Slider Navigation Buttons */}
          <button 
            onClick={slidePrev}
            className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 z-20 
              text-white/50 hover:text-white transition-colors pb-12 cursor-pointer"
          >
            <IoIosArrowBack size={24} />
          </button>
          
          <button 
            onClick={slideNext}
            className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 z-20 
              text-white/50 hover:text-white transition-colors pb-12 cursor-pointer"
          >
            <IoIosArrowForward size={24} />
          </button>

          {/* Slider Container */}
          <div className="overflow-hidden max-w-[1200px] mx-auto">
            <div 
              ref={sliderRef}
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 33.333)}%)` }}
            >
              <div className="flex">
                {reviews.map((review, index) => (
                  <div 
                    key={review.id} 
                    className="w-full md:w-1/3 flex-shrink-0 px-1 max-w-[400px]"
                  >
                    <div 
                      className={`bg-[#262937] p-5 rounded-xl border transition-all duration-300 ease-in-out relative h-[215px] flex flex-col mx-1
                        ${hoveredIndex === index 
                          ? "border-primary/50 shadow-2xl shadow-primary/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-primary/5 before:to-primary/0 before:animate-glow" 
                          : "border-[#333333] hover:border-primary/40"}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className={`flex justify-center mb-4 transition-all duration-300 ${
                        hoveredIndex === index ? "drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" : ""
                      }`}>
                        {[...Array(5)].map((_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            className={`${starIndex < review.stars ? "text-primary" : "text-gray-600"} ${
                              hoveredIndex === index ? "drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" : ""
                            }`}
                            size={20}
                          />
                        ))}
                      </div>
                      <p className={`text-gray-300 mb-4 italic leading-relaxed text-center flex-grow transition-all duration-300 ${
                        hoveredIndex === index ? "text-primary/90 drop-shadow-[0_0_4px_rgba(var(--primary),0.3)]" : ""
                      }`}>&quot;{review.text}&quot;</p>
                      <p className={`text-primary font-medium text-center mt-auto transition-all duration-300 ${
                        hoveredIndex === index ? "drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" : ""
                      }`}>- {review.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.slice(0, reviews.length - 1).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-md transition-colors duration-300 
                  ${index === currentIndex ? 'bg-primary' : 'bg-gray-600'}`}
                onClick={() => {
                  stopAutoRotation();
                  setCurrentIndex(index);
                  startAutoRotation();
                }}
              />
            ))}
          </div>
        </div>

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
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
      >
        &times;
      </button>

      <h3 className="text-2xl font-semibold mb-4">Scrivi Una Recensione</h3>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="il tuo nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-md text-black"
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
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        {confirmationMessage && <div className="text-green-500 mb-4">{confirmationMessage}</div>}

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/80 transition-colors"
        >
          Submit Review
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
