import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onStartCheckout
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);
  const freeShippingThreshold = 150;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === 'ARCHIVED10') {
      setDiscount(0.10);
      setPromoApplied(true);
    } else {
      alert('Invalid Promo Code! Use code: ARCHIVED10 for 10% OFF');
    }
  };

  return (
    <div className="fixed inset-0 z-[2200] overflow-hidden flex justify-end animate-fadeIn">
      
      {/* Dark Overlay Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      {/* Slide-out Cart Container */}
      <div className="relative w-full max-w-md bg-[#0B0B0B] text-[#F5F5F0] h-full shadow-2xl border-l border-[#2A2A2A] flex flex-col justify-between p-6 overflow-y-auto">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#164BFF]" />
              <h2 className="font-display text-xl text-[#F5F5F0]">
                YOUR CART ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 bg-[#A52A2A] text-white font-display rounded-full flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95 transition-all"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="my-4 bg-[#141414] p-3 rounded-xl border border-[#2A2A2A]">
            <div className="flex items-center justify-between font-mono text-[11px] font-bold text-[#8A8A8A] mb-1.5">
              <span>{subtotal >= freeShippingThreshold ? '🎉 FREE EXPRESS SHIPPING UNLOCKED!' : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} for FREE SHIPPING`}</span>
            </div>
            <div className="w-full bg-[#1C1C1C] h-2 rounded-full overflow-hidden border border-[#2A2A2A]">
              <div
                className="bg-[#164BFF] h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 my-4 space-y-3 overflow-y-auto pr-1">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center justify-center text-[#8A8A8A]">
              <ShoppingBag className="w-14 h-14 text-gray-700 mb-3 animate-bounce" />
              <p className="font-display text-lg text-[#F5F5F0]">YOUR CART IS EMPTY</p>
              <p className="font-mono text-xs mt-1">Explore our latest drops and claim your grails!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="bg-[#141414] p-3 rounded-xl border border-[#2A2A2A] flex items-center gap-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded-lg bg-[#0D0D0D] p-1 border border-[#2A2A2A]"
                />

                <div className="flex-1">
                  <h4 className="font-display text-sm text-[#F5F5F0] leading-tight">
                    {item.name}
                  </h4>
                  <div className="font-mono text-[11px] text-[#8A8A8A] my-0.5">
                    Size: <span className="font-bold text-[#164BFF]">{item.size || 'M'}</span>
                  </div>
                  <div className="font-mono font-bold text-sm text-[#F5F5F0]">
                    ${item.price}.00
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end justify-between h-full gap-2">
                  <button
                    onClick={() => onRemoveItem(item.id, item.size)}
                    className="text-[#8A8A8A] hover:text-[#A52A2A] p-1 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2 bg-[#1C1C1C] rounded-full border border-[#2A2A2A] px-2 py-0.5 font-mono text-xs">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                      className="hover:text-[#D95B24]"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                      className="hover:text-[#164BFF]"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Box */}
        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-[#2A2A2A] space-y-3">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="PROMO CODE (ARCHIVED10)"
                className="flex-1 bg-[#141414] border border-[#2A2A2A] rounded-xl px-3 py-1.5 font-mono text-xs uppercase text-[#F5F5F0]"
              />
              <button
                type="submit"
                className="bg-[#1C1C1C] text-[#F5F5F0] px-4 py-1.5 rounded-xl font-mono text-xs border border-[#2A2A2A] hover:bg-[#164BFF] hover:border-[#164BFF] transition-colors"
              >
                APPLY
              </button>
            </form>
            {promoApplied && (
              <div className="font-mono text-xs text-[#31583F] font-bold flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> 10% ARCHIVED DISCOUNT APPLIED!
              </div>
            )}

            {/* Calculations */}
            <div className="space-y-1 font-mono text-xs text-[#8A8A8A]">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#D95B24]">
                  <span>Discount (10%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-mono font-bold text-lg text-[#F5F5F0] pt-2 border-t border-[#2A2A2A]">
                <span>TOTAL:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onStartCheckout}
              className="w-full bg-[#164BFF] hover:bg-[#D95B24] text-white py-3.5 rounded-full font-mono text-sm font-bold tracking-wider border border-white/10 shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        )}

      </div>

    </div>
  );
}
