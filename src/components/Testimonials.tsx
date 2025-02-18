import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

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
];

const Testimonials = () => {

  return (
    <section className="w-full bg-hsl(var(--background)) relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-[#262937] p-6 rounded-xl border border-[#333333] hover:border-primary transition-colors duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < review.stars ? "text-primary" : "text-gray-600"}
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic leading-relaxed">&quot;{review.text}&quot;</p>
              <p className="text-primary font-medium">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;