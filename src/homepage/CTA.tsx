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
      text: 'Compra Spettatori Diretta YouTube', 
      icon: <Users size={20} />,
      link: '/comprare-spettatori-diretta-youtube/'
    },
    { 
      text: 'Compra Visualizzazioni YouTube Shorts', 
      icon: <FileVideo size={20} />,
      link: '/comprare-visualizzazioni-e-like-youtube-shorts/'
    }
  ];

  return (
    <div className="relative w-full min-h-[720px] flex items-center justify-center px-4 py-32 sm:py-16">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600"
        style={{
          width: '100vw',
          left: '50%',
          transform: 'translateX(-50%)',
          clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)',
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-white max-w-xl backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
            Unisciti Ora
          </h2>
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
              className="group relative bg-white/10 backdrop-blur-md text-white py-4 px-6 rounded-xl font-semibold 
                       border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setActiveButton(index)}
              onMouseLeave={() => setActiveButton(null)}
              style={{
                transform: window.innerWidth > 768 && activeButton === index ? 'scale(1.03)' : 'scale(1)',
                transition: 'all 0.3s ease-out',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-purple-300">{button.icon}</span>
                <span>{button.text}</span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400 to-purple-300 rounded-full"
                style={{
                  transform: `translateX(${activeButton === index ? '0' : '-100%'})`,
                  opacity: 1,
                  transition: 'transform 0.3s ease-in-out',
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