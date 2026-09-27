import React from 'react';
import { LOOKBOOK_ITEMS } from '../data/products';
import { Award, ArrowRight } from 'lucide-react';

export default function LookbookSlider({ onSelectCategory }) {
  return (
    <section className="relative bg-[#0B0B0B] py-20 px-4 md:px-12 overflow-hidden border-t border-[#1C1C1C]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Certification Emblem Badge Header */}
        <div className="flex flex-col items-center text-center mb-12">
          
          <div className="flex items-center gap-2.5 bg-[#141414] border border-[#2A2A2A] px-5 py-2 rounded-full shadow-xl mb-4">
            <Award className="w-5 h-5 text-[#164BFF]" />
            <span className="font-mono text-xs text-[#F5F5F0] uppercase tracking-wider">
              CERTIFIED BY AR<span className="text-[#164BFF]">च</span>IVED CLOSET ®
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#F5F5F0] tracking-tight">
            GRAB THE ARCHIVE
          </h2>
          <p className="font-body text-[#8A8A8A] text-base max-w-xl mt-2 font-normal">
            Precision-curated luxury streetwear lookbooks built for trendsetters.
          </p>

        </div>

        {/* Horizontal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOOKBOOK_ITEMS.map((item) => (
            <div
              key={item.id}
              data-cursor="LOOK"
              className="group relative bg-[#141414] rounded-2xl border border-[#2A2A2A] overflow-hidden hover:border-[#164BFF] transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111111]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 bg-[#164BFF] text-white px-3 py-1 rounded-full font-mono text-[10px] font-bold border border-white/20">
                  {item.tag}
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-5 bg-[#141414] text-[#F5F5F0] flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-xl tracking-tight text-[#F5F5F0] mb-1 group-hover:text-[#164BFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-[#31583F]">
                    {item.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => onSelectCategory('ALL')}
                  className="mt-4 w-full bg-[#1C1C1C] hover:bg-[#164BFF] text-[#F5F5F0] py-2.5 rounded-full font-mono text-xs tracking-wider border border-[#2A2A2A] flex items-center justify-center gap-2 transition-all"
                >
                  <span>EXPLORE LOOK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
