import React, { useState } from 'react';
import { ArrowRight, ThumbsUp, Users, Eye, Clock, UserPlus, MessageCircle, Share2 } from 'lucide-react';

const CTA = () => {
  const [activeButton, setActiveButton] = useState(null);
  
  const buttons = [
    { text: 'Compra Visualizzazioni YouTube', icon: <Eye size={20} /> },
    { text: 'Compra Iscritti YouTube', icon: <UserPlus size={20} /> },
    { text: 'Compra Likes YouTube', icon: <ThumbsUp size={20} /> },
    { text: 'Compra Ore Di Visualizzazione YouTube', icon: <Clock size={20} /> },
    { text: 'Compra Commenti YouTube', icon: <MessageCircle size={20} /> },
    { text: 'Compra Condivisioni YouTube', icon: <Share2 size={20} /> },
    { text: 'Compra Spettatori Diretta YouTube', icon: <Users size={20} /> }
  ];
  
  return (
    <div className="relative w-full min-h-[720px] flex items-center justify-center px-4 py-24 sm:py-16">
      {/** Top fade in - reduced thickness **/}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-700 to-[#1b1e2c] z-20" />
      {/** Bottom fade out - reduced thickness **/}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-purple-700 to-[#1b1e2c] z-20" />
      <div
        className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400"
        style={{
          width: '100vw',
          left: '50%',
          transform: 'translateX(-50%)',
          clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white max-w-xl">
          <h2 className="text-5xl font-bold mb-6">Unisciti Ora</h2>
          <p className="mb-6">
            Vuoi più iscritti, like e visualizzazioni? Con <span className="font-semibold">GlowLikes</span> ottieni crescita autentica su YouTube, Instagram, TikTok e altre piattaforme, sempre al miglior prezzo.
          </p>
          <p className="mb-6">
            Siamo esperti da anni nella crescita social sicura ed efficace. Unisciti a migliaia di clienti soddisfatti e inizia oggi stesso!
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full max-w-sm">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="group relative bg-white text-purple-700 py-3 px-6 rounded-lg transition-all font-semibold shadow-lg overflow-hidden"
              onMouseEnter={() => setActiveButton(index)}
              onMouseLeave={() => setActiveButton(null)}
              style={{
                transform: activeButton === index ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              <div className="flex items-center">
                <span
                  className={`transition-all duration-300 mr-2 ${
                    activeButton === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 absolute'
                  }`}
                >
                  {button.icon}
                </span>
                <span 
                  className="text-left transition-all duration-300"
                  style={{
                    transform: activeButton === index ? 'translateX(28px)' : 'translateX(0)',
                  }}
                >
                  {button.text}
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 h-1 bg-purple-500 transform transition-all duration-300"
                style={{
                  width: activeButton === index ? '100%' : '0%',
                  opacity: activeButton === index ? 1 : 0
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTA;