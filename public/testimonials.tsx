'use client'

import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  { body: "ViewsProvider skyrocketed my channel's growth! Incredible results!", name: "TechEnthusiastGamer", rating: 5 },
  { body: "I was skeptical at first, but the results speak for themselves. Highly recommended!", name: "FitnessFanatic101", rating: 5 },
  { body: "The boost in views and subscribers has been phenomenal. Thank you, ViewsProvider!", name: "CookingWithPassion", rating: 5 },
  { body: "Best service I've used for growing my YouTube channel. Fast and reliable!", name: "TravelVloggerPro", rating: 5 },
  { body: "Saw a significant increase in engagement after using their services. Worth every penny!", name: "MusicMaestro", rating: 4 },
  { body: "ViewsProvider helped me reach my first 100K subscribers. Couldn't be happier!", name: "DIYCraftsAndMore", rating: 5 },
  { body: "The customer support team is fantastic. They answered all my questions promptly.", name: "ScienceExplorer", rating: 5 },
  { body: "My gaming channel took off thanks to ViewsProvider. Highly recommend for fellow gamers!", name: "EpicGamerGirl", rating: 5 },
  { body: "I've tried other services, but ViewsProvider delivers the best quality views and engagement.", name: "BeautyGuruSecrets", rating: 4 },
  { body: "The watch time boost helped me reach monetization requirements quickly. Thank you!", name: "FinanceTipsDaily", rating: 5 },
  { body: "ViewsProvider's services are a game-changer for small YouTubers like me.", name: "PetLoverAdventures", rating: 5 },
  { body: "I appreciate the natural growth pattern. It doesn't look suspicious at all!", name: "HistoryBuff101", rating: 5 },
]

export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear from our satisfied customers
          </p>
        </div>

        <div className="relative mt-16">
          {/* Fade effect containers */}
          <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          {/* First row - moves left */}
          <TestimonialRow testimonials={testimonials.slice(0, 4)} direction="left" />

          {/* Second row - moves right */}
          <TestimonialRow testimonials={testimonials.slice(4, 8)} direction="right" />

          {/* Third row - moves left */}
          <TestimonialRow testimonials={testimonials.slice(8, 12)} direction="left" />
        </div>
      </div>
    </div>
  )
}

function TestimonialRow({ testimonials, direction }: { testimonials: typeof testimonials, direction: 'left' | 'right' }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="flex gap-4 mb-4 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`flex gap-4 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'} ${isHovered ? 'pause-animation' : ''}`}
      >
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <TestimonialCard key={idx} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="w-80 flex-shrink-0 rounded-2xl bg-gray-50 p-8">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
          />
        ))}
      </div>
      <p className="text-gray-900">{testimonial.body}</p>
      <div className="mt-6">
        <p className="font-semibold text-gray-900">{testimonial.name}</p>
      </div>
    </div>
  )
}

