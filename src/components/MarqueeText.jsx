import React from 'react';
import { Flame } from 'lucide-react';

export default function MarqueeText() {
  const WORDS = [
    "WE", "CURATE", "RARE", "CLOTHING", "&", "VINTAGE", "PIECES", "THAT", "TELL", "A", "STORY.", 
    "WE", "ARE", "THE", "HOUSE", "OF", "ARCHIVED", "GRAILS."
  ];

  return (
    <section className="relative bg-[#0B0B0B] text-[#F5F5F0] py-24 px-6 md:px-16 overflow-hidden flex flex-col items-center justify-center border-t border-[#1C1C1C]">
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 bg-[#141414] text-[#8A8A8A] px-4 py-1.5 rounded-full font-mono text-xs font-bold border border-[#2A2A2A] mb-8">
          <Flame className="w-4 h-4 text-[#D95B24]" />
          <span>MANIFESTO • ARचIVED CLOSET</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 font-display text-3xl sm:text-5xl md:text-7xl tracking-tight uppercase leading-none text-[#8A8A8A]">
          {WORDS.map((word, index) => (
            <span
              key={index}
              className={`transition-all duration-300 hover:scale-110 cursor-pointer ${
                index % 3 === 0 ? 'hover:text-[#164BFF]' : 
                index % 4 === 0 ? 'hover:text-[#D95B24]' : 'hover:text-white'
              }`}
            >
              {word}
            </span>
          ))}
        </div>

      </div>

      {/* Repeating Marquee Ticker Stripe */}
      <div className="w-full overflow-hidden bg-[#141414] text-[#8A8A8A] py-3 mt-16 border-t border-b border-[#2A2A2A]">
        <div className="animate-marquee whitespace-nowrap flex gap-8 font-mono text-xs tracking-widest uppercase">
          <span>★ ARचIVED CLOSET</span>
          <span>★ DESIGNED TO DISRUPT</span>
          <span>★ WORLDWIDE EXPRESS SHIPPING</span>
          <span>★ 100% AUTHENTIC VINTAGE</span>
          <span>★ EST. 2026</span>
          <span>★ ARचIVED CLOSET</span>
          <span>★ DESIGNED TO DISRUPT</span>
          <span>★ WORLDWIDE EXPRESS SHIPPING</span>
          <span>★ 100% AUTHENTIC VINTAGE</span>
        </div>
      </div>

    </section>
  );
}
