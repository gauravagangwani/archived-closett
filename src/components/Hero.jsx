import React from 'react';
import { ArrowDown } from 'lucide-react';
import DitherVeil from './DitherVeil';

export default function Hero({ onExploreClick }) {
  return (
    <section className="sticky top-0 h-screen bg-[#0B0B0B] text-[#F5F5F0] overflow-hidden flex flex-col justify-end pb-24 px-8 md:px-16 z-0">
      
      {/* Background DitherVeil Animation */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-lighten scale-[1.15] translate-y-[8vh]">
        <DitherVeil
          src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
          pattern="floyd"
          pixelSize={2}
          inkColor="#120f17"
          paperColor="#f4f1ea"
          revealRadius={200}
          softness={0.6}
          linger={1}
          fit="cover"
          rimColor="#a78bfa"
          palette="duotone"
          levels={2}
          contrast={1.15}
          brightness={0}
          rim={0}
          reverse={false}
          wander={false}
          clickBurst
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-30 max-w-7xl mx-auto w-full pointer-events-none">
        
        {/* Huge Main Title */}
        <h1 className="font-display font-bold text-7xl sm:text-8xl md:text-[10rem] leading-[0.85] text-[#F5F5F0]/90 tracking-tighter drop-shadow-lg mb-6">
          Ar<span className="text-[#164BFF]">च</span>ived<br />Closet.
        </h1>
        
        <p className="font-body text-xl md:text-3xl font-medium text-white/80 max-w-xl mb-12 drop-shadow-md">
          Vintage streetwear essentials.
        </p>

        {/* CTA Button */}
        <div className="pointer-events-auto inline-block">
          <button
            onClick={onExploreClick}
            className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 border border-white/20"
          >
            Shop the collection
          </button>
        </div>

      </div>

    </section>
  );
}
