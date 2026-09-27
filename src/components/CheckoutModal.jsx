import React, { useState } from 'react';
import { X, CheckCircle2, Lock, CreditCard } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, onClearCart, onShowToast }) {
  const [step, setStep] = useState('form'); // 'form' | 'success'
  const [formData, setFormData] = useState({
    name: 'Gaurav Agangwani',
    email: 'gaurav@archivedcloset.com',
    address: '108 Archival Avenue, Streetwear District',
    city: 'New York',
    zip: '10001',
    cardNumber: '•••• •••• •••• 4242'
  });

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.5 }
    });

    setStep('success');
    onClearCart();
    if (onShowToast) {
      onShowToast('ORDER PLACED SUCCESSFULLY! WELCOME TO THE ARCHIVE.');
    }
  };

  return (
    <div className="fixed inset-0 z-[3200] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-[#141414] text-[#F5F5F0] rounded-3xl border border-[#2A2A2A] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden p-6 md:p-10">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-[#A52A2A] text-white font-display text-lg rounded-full flex items-center justify-center border border-white/20 shadow-md hover:scale-110 active:scale-95 transition-all"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#164BFF] text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full">
                SECURE 256-BIT CHECKOUT
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-[#F5F5F0] mb-4">
              COMPLETE YOUR ORDER
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs font-bold text-[#8A8A8A] mb-1">FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-2.5 font-mono text-xs text-[#F5F5F0]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-bold text-[#8A8A8A] mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-2.5 font-mono text-xs text-[#F5F5F0]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-[#8A8A8A] mb-1">SHIPPING ADDRESS</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-2.5 font-mono text-xs text-[#F5F5F0]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs font-bold text-[#8A8A8A] mb-1">CITY</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-2.5 font-mono text-xs text-[#F5F5F0]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-bold text-[#8A8A8A] mb-1">ZIP / POSTAL</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-2.5 font-mono text-xs text-[#F5F5F0]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-[#8A8A8A] mb-1">PAYMENT DETAILS</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A8A8A]" />
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl p-2.5 pl-10 font-mono text-xs text-[#F5F5F0]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#164BFF] hover:bg-[#D95B24] text-white py-3.5 rounded-full font-mono text-sm font-bold tracking-wider border border-white/10 shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Lock className="w-4 h-4" />
                  <span>PAY NOW • ${subtotal.toFixed(2)}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-[#164BFF] text-white rounded-full flex items-center justify-center border border-white/20 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h2 className="font-display text-3xl text-[#F5F5F0]">
              THANK YOU FOR YOUR ORDER!
            </h2>
            <p className="font-mono text-xs text-[#8A8A8A] max-w-md">
              Order #AC-94021 confirmed. A confirmation tracking email has been dispatched to <span className="font-bold text-[#164BFF]">{formData.email}</span>.
            </p>

            <button
              onClick={onClose}
              className="mt-4 bg-[#164BFF] text-white px-8 py-3 rounded-full font-mono text-xs border border-white/10 hover:bg-[#D95B24] transition-colors"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
