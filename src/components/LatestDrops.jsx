import React from 'react';
import { PRODUCTS } from '../data/products';
import { ShoppingBag, Eye, Star, Sparkles, Tag } from 'lucide-react';

export default function LatestDrops({ onAddToCart, onQuickView, selectedCategory, onFilterCategory }) {
  const categories = ['ALL', 'Hoodies', 'Jackets', 'T-Shirts', 'Denim'];

  const filteredProducts = selectedCategory === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="drops" className="relative z-10 bg-[#0B0B0B] text-[#F5F5F0] py-24 px-4 md:px-12 overflow-hidden border-t border-[#1C1C1C]">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Reference Style: DESIGNED TO DISRUPT) */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#141414] text-[#164BFF] px-4 py-1.5 rounded-full font-mono text-xs font-bold border border-[#2A2A2A] mb-4">
            <Sparkles className="w-4 h-4 text-[#D95B24]" />
            <span>CURATED ARCHIVAL CATALOG</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#F5F5F0] tracking-tight">
            DESIGNED TO DISRUPT
          </h2>
          <p className="font-body text-base md:text-lg text-[#8A8A8A] max-w-2xl mx-auto mt-3 font-normal leading-relaxed uppercase tracking-wider">
            LUXURY STAPLES FOR THE MODERN DISRUPTOR. PRECISION-TAILORED PIECES THAT BREAK CONVENTION AND REDEFINE PRESENCE. THIS ISN'T JUST FASHION—IT'S A STATEMENT.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onFilterCategory(cat)}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 border ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-[#164BFF] text-white border-[#164BFF] shadow-[0_0_15px_rgba(22,75,255,0.4)] scale-105'
                  : 'bg-[#141414] text-[#8A8A8A] border-[#2A2A2A] hover:border-[#164BFF] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              data-cursor="GRAIL"
              className="archived-card group flex flex-col justify-between"
            >
              {/* Product Badge Header */}
              <div className="relative p-4 pb-0 flex items-center justify-between z-10">
                <span
                  className="badge-stitched font-mono text-white text-[10px] font-bold"
                  style={{ backgroundColor: product.badgeColor }}
                >
                  <Tag className="w-3 h-3" />
                  {product.badge}
                </span>

                <div className="flex items-center gap-1 bg-[#1A1A1A] px-2 py-0.5 rounded-full border border-[#2A2A2A] font-mono text-[10px] font-bold text-[#F5F5F0]">
                  <Star className="w-3 h-3 text-[#D95B24] fill-current" />
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* Image Container with Zoom & Quick View */}
              <div className="relative aspect-square p-4 overflow-hidden flex items-center justify-center bg-[#111111]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Hover Quick View Overlay Button */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => onQuickView(product)}
                    className="bg-[#164BFF] hover:bg-white text-white hover:text-black px-4 py-2 rounded-full font-display text-xs tracking-wider border border-white/20 shadow-xl flex items-center gap-1.5 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>QUICK VIEW</span>
                  </button>
                </div>
              </div>

              {/* Product Info Footer */}
              <div className="p-5 bg-[#141414] border-t border-[#2A2A2A] flex flex-col gap-2">
                
                <div>
                  <h3 className="font-display text-lg text-[#F5F5F0] leading-tight group-hover:text-[#164BFF] transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-mono text-[11px] text-[#8A8A8A] mt-1 line-clamp-1">
                    {product.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#2A2A2A]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono font-bold text-lg text-[#F5F5F0]">
                      ${product.price}.00
                    </span>
                    {product.originalPrice && (
                      <span className="font-mono text-xs text-[#555555] line-through">
                        ${product.originalPrice}.00
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#164BFF] hover:bg-[#D95B24] text-white p-2.5 rounded-full border border-white/20 transition-all transform hover:scale-110 active:scale-95"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
