import React, { useState } from 'react';
import { X, ShoppingBag, Star, CheckCircle, ShieldCheck, Truck } from 'lucide-react';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'M');

  return (
    <div className="fixed inset-0 z-[2500] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-[#141414] text-[#F5F5F0] rounded-3xl border border-[#2A2A2A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#A52A2A] text-white rounded-full flex items-center justify-center border border-white/20 font-display text-lg shadow-md hover:scale-110 active:scale-95 transition-all"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 bg-[#0D0D0D] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#2A2A2A]">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-80 md:max-h-96 object-contain transform hover:scale-105 transition-transform"
          />
        </div>

        {/* Right: Product Specs */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#164BFF] text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full">
                {product.category}
              </span>
              <div className="flex items-center gap-1 font-mono text-xs text-[#8A8A8A]">
                <Star className="w-3.5 h-3.5 text-[#D95B24] fill-current" />
                <span>{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-[#F5F5F0] leading-tight mb-2">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-mono font-bold text-3xl text-[#F5F5F0]">${product.price}.00</span>
              {product.originalPrice && (
                <span className="font-mono text-base text-[#555555] line-through">${product.originalPrice}.00</span>
              )}
            </div>

            <p className="font-body text-[#8A8A8A] text-sm mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && (
              <div className="mb-6">
                <label className="block font-mono text-xs text-[#8A8A8A] mb-2 uppercase tracking-wider">
                  SELECT SIZE:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 rounded-xl font-mono text-xs font-bold border transition-all ${
                        selectedSize === size
                          ? 'bg-[#164BFF] text-white border-[#164BFF] shadow-[0_0_10px_rgba(22,75,255,0.5)] scale-105'
                          : 'bg-[#1C1C1C] text-[#8A8A8A] border-[#2A2A2A] hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Details Bullet List */}
            <div className="space-y-2 mb-6">
              {product.details?.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 font-mono text-xs text-[#8A8A8A]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#31583F]" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Add to Cart CTA */}
          <div className="pt-4 border-t border-[#2A2A2A] flex flex-col gap-3">
            <button
              onClick={() => {
                onAddToCart({ ...product, size: selectedSize });
                onClose();
              }}
              className="w-full bg-[#164BFF] hover:bg-[#D95B24] text-white py-3.5 rounded-full font-mono text-sm font-bold tracking-wider border border-white/10 shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ADD TO CART • ${product.price}.00</span>
            </button>

            <div className="flex items-center justify-around font-mono text-[10px] text-[#8A8A8A] pt-2">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#164BFF]" />
                <span>100% Authentic</span>
              </div>
              <div className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#D95B24]" />
                <span>Fast Worldwide Shipping</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
