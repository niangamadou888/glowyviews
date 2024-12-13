import { useState, useEffect, useRef } from "react";
import { faqQuestions } from "../data/faqData";
import FAQContent from "./FAQContent";
import FAQDots from "./FAQDots";

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!sectionRef.current || isScrolling) return;

      event.preventDefault();

      setIsScrolling(true);
      
      if (event.deltaY > 0) {
        setCurrentIndex(prev => 
          prev < faqQuestions.length - 1 ? prev + 1 : prev
        );
      } else {
        setCurrentIndex(prev => 
          prev > 0 ? prev - 1 : prev
        );
      }

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a new timeout
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 500); // Adjust this value to control scroll sensitivity
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  return (
    <section 
      ref={sectionRef}
      className="w-full max-w-6xl mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center reveal-on-scroll"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow animate-glow">
        Domande Frequenti
      </h2>
      <div 
        className="relative w-full transition-all duration-500 ease-in-out"
        style={{ height: '500px' }}
      >
        <FAQContent 
          title={faqQuestions[currentIndex].title}
          content={faqQuestions[currentIndex].content}
        />
      </div>
      <FAQDots 
        total={faqQuestions.length}
        currentIndex={currentIndex}
        onChange={setCurrentIndex}
      />
    </section>
  );
};

export default FAQ;