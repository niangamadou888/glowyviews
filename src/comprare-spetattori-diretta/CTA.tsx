import { useState } from 'react';
import { ThumbsUp, Users, Eye, Clock, UserPlus, MessageCircle, Share2, FileVideo } from 'lucide-react';

const CTA = () => {
  const [activeButton, setActiveButton] = useState(null);
  const buttons = [
    { 
      text: 'Compra Visualizzazioni YouTube', 
      icon: <Eye size={20} />,
      link: '/comprare-visualizzazioni-youtube/'
    },
    { 
      text: 'Compra Iscritti YouTube', 
      icon: <UserPlus size={20} />,
      link: '/comprare-iscritti-youtube/'
    },
    { 
      text: 'Compra Likes YouTube', 
      icon: <ThumbsUp size={20} />,
      link: '/comprare-like-youtube/'
    },
    { 
      text: 'Compra Ore Di Visualizzazione YouTube', 
      icon: <Clock size={20} />,
      link: '/comprare-ore-di-visualizzazione-youtube/'
    },
    { 
      text: 'Compra Commenti YouTube', 
      icon: <MessageCircle size={20} />,
      link: '/comprare-commenti-youtube/'
    },
    { 
      text: 'Compra Condivisioni YouTube', 
      icon: <Share2 size={20} />,
      link: '/comprare-condivisioni-youtube/'
    },
    { 
      text: 'Compra Visualizzazioni YouTube Shorts', 
      icon: <FileVideo size={20} />,
      link: '/comprare-visualizzazioni-e-like-youtube-shorts/'
    }
  ];

  return (
    <div className="relative w-full min-h-[720px] flex items-center justify-center px-4 py-32 sm:py-16">
      {/*** Top fade in - reduced thickness ***/}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-700 to-[#1b1e2c] z-20" />
      {/*** Bottom fade out - reduced thickness ***/}
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
            <a 
              key={index}
              href={button.link}
              className="group relative bg-white text-purple-700 py-4 px-6 rounded-lg font-semibold shadow-lg overflow-hidden no-underline block"
              onMouseEnter={() => setActiveButton(index)}
              onMouseLeave={() => setActiveButton(null)}
              style={{
                transform: window.innerWidth > 768 && activeButton === index ? 'scale(1.02)' : 'scale(1)',
                transition: window.innerWidth > 768 ? 'transform 0.2s ease-out' : 'none',
                willChange: window.innerWidth > 768 ? 'transform' : 'auto',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <div className="flex items-center relative h-6"
                   style={{ transform: 'translateZ(0)' }}>
                <span
                  className="md:absolute left-0 transition-all duration-200 ease-out flex items-center mr-2 md:mr-0"
                  style={{
                    opacity: window.innerWidth > 768 ? (activeButton === index ? 1 : 0) : 1,
                    transform: window.innerWidth > 768 ? `translateX(${activeButton === index ? '0' : '-8px'})` : 'none',
                    visibility: window.innerWidth > 768 ? (activeButton === index ? 'visible' : 'hidden') : 'visible',
                    willChange: window.innerWidth > 768 ? 'transform, opacity' : 'auto'
                  }}
                >
                  {button.icon}
                </span>
                <span
                  className="transition-all duration-200 ease-out flex items-center"
                  style={{
                    transform: window.innerWidth > 768 ? `translateX(${activeButton === index ? '28px' : '0'})` : 'none',
                    willChange: window.innerWidth > 768 ? 'transform' : 'auto'
                  }}
                >
                  {button.text}
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 h-1 bg-purple-500 hidden md:block"
                style={{
                  width: activeButton === index ? '100%' : '0%',
                  opacity: activeButton === index ? 1 : 0,
                  transition: 'all 0.2s ease-out',
                  willChange: 'width, opacity'
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTA;