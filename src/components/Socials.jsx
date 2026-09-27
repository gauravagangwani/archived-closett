import React from 'react';
import { Camera, Music, Tv, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Socials() {
  const SOCIAL_LINKS = [
    { name: 'INSTAGRAM', icon: Camera, handle: '@archivedcloset', color: '#164BFF', rot: '-3deg' },
    { name: 'TIKTOK', icon: Music, handle: '@archived.closet', color: '#D95B24', rot: '2deg' },
    { name: 'YOUTUBE', icon: Tv, handle: 'Arचived Closet TV', color: '#A52A2A', rot: '-2deg' },
    { name: 'DISCORD', icon: MessageSquare, handle: 'The Archive Club', color: '#31583F', rot: '3deg' },
  ];

  return (
    <section id="social" className="relative bg-[#0B0B0B] text-[#F5F5F0] py-24 px-6 md:px-12 overflow-hidden border-t border-[#1C1C1C]">
      
      {/* Background Watermark Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex flex-col justify-between font-display text-7xl md:text-[10rem] text-[#F5F5F0] leading-none select-none">
        <div>ARचIVED SOCIALS</div>
        <div>JOIN THE MOVEMENT</div>
        <div>STREETWEAR COMMUNITY</div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        <div className="mb-14">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#F5F5F0] tracking-tight">
            JOIN THE MOVEMENT
          </h2>
          <p className="font-body text-[#8A8A8A] text-base max-w-lg mx-auto mt-2">
            Follow our social channels for secret drops, unboxing videos & behind-the-scenes vault previews.
          </p>
        </div>

        {/* 3D Tilted Social Signboards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_LINKS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <a
                key={idx}
                href="#"
                data-cursor="JOIN"
                onClick={(e) => e.preventDefault()}
                className="group relative bg-[#141414] p-6 rounded-2xl border border-[#2A2A2A] shadow-xl hover:border-[#164BFF] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-between gap-4 text-decoration-none"
                style={{ transform: `rotate(${item.rot})` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white border border-white/20 shadow-md group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: item.color }}
                >
                  <IconComp className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="font-display text-lg text-[#F5F5F0] tracking-wider">
                    {item.name}
                  </h3>
                  <p className="font-mono text-xs text-[#8A8A8A] mt-1">
                    {item.handle}
                  </p>
                </div>

                <div className="w-full bg-[#1C1C1C] py-2 rounded-full border border-[#2A2A2A] font-mono text-xs text-[#F5F5F0] flex items-center justify-center gap-1 group-hover:bg-[#164BFF] group-hover:border-[#164BFF] transition-colors">
                  <span>FOLLOW</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

      </div>

    </section>
  );
}
