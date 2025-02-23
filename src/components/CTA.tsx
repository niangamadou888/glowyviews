import React from 'react';

const CTA = () => {
  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center px-4 py-24 sm:py-16">
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400"
        style={{
          width: '100vw',
          left: '50%',
          transform: 'translateX(-50%)',
          clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-white max-w-xl">
          <h2 className="text-5xl font-bold mb-6">Join Now</h2>
          <p className="mb-6">
            <span className="font-semibold">Affordable Quality Engagement</span> Views4You
            offer real subscribers, followers, likes, views, and
            watch hours at highly competitive prices,
            ensuring that our rates remain as good as or
            lower than other providers.
          </p>
          <p className="mb-6">
            For a long time, we've been experts in honest
            and effective YouTube, Instagram, TikTok, and
            other social media platforms growth. Join our
            community of satisfied customers today!
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-sm">
          <button className="bg-white text-purple-700 py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg">
            Buy YouTube Views
          </button>
          <button className="bg-white text-purple-700 py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg">
            Buy YouTube Subscribers
          </button>
          <button className="bg-white text-purple-700 py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg">
            Buy Instagram Followers
          </button>
          <button className="bg-white text-purple-700 py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg">
            Buy Instagram Likes
          </button>
          <button className="bg-white text-purple-700 py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg">
            Buy TikTok Followers
          </button>
          <button className="bg-white text-purple-700 py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg">
            Buy TikTok Likes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;