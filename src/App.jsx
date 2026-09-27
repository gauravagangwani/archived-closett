import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Hero from './components/Hero';
import TeaserModal from './components/TeaserModal';
import LatestDrops from './components/LatestDrops';
import QuickViewModal from './components/QuickViewModal';
import LookbookSlider from './components/LookbookSlider';
import MarqueeText from './components/MarqueeText';
import Socials from './components/Socials';
import NewsletterModal from './components/NewsletterModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  // Modal & Drawer State Controls
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFilmOpen, setIsFilmOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Filter & Toast State
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [toastMessage, setToastMessage] = useState('');

  // Cart State (Pre-populated with 1 item for instant wow factor!)
  const [cartItems, setCartItems] = useState([
    {
      id: 'archived-hoodie-la',
      name: 'Los Angeles Heavyweight Graphic Hoodie',
      price: 45,
      image: '/images/hoodie.jpg',
      size: 'L',
      quantity: 1
    }
  ]);

  // Smooth Scrolling (Lenis) & Newsletter Timer
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setIsNewsletterOpen(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  // Show Toast Helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  // Cart Handler Functions
  const handleAddToCart = (product) => {
    const size = product.size || 'M';
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id && item.size === size);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, size, quantity: 1 }];
    });

    showToast(`ADDED ${product.name.toUpperCase()} TO CART!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id && item.size === size ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id, size) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToDrops = () => {
    const el = document.getElementById('drops');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F0] relative font-body selection:bg-[#164BFF] selection:text-white">
      
      {/* Dynamic Cursor Effect */}
      <CustomCursor />

      {/* Top Fixed Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        onNavigate={(cat) => {
          setSelectedCategory(cat);
          scrollToDrops();
        }}
      />

      {/* Full-Screen Navigation Menu Drawer */}
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenFilm={() => setIsFilmOpen(true)}
        onFilterCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToDrops();
        }}
      />

      {/* Hero Section */}
      <Hero
        onOpenFilm={() => setIsFilmOpen(true)}
        onExploreClick={scrollToDrops}
      />

      {/* Latest Drops Section */}
      <LatestDrops
        onAddToCart={handleAddToCart}
        onQuickView={(prod) => setQuickViewProduct(prod)}
        selectedCategory={selectedCategory}
        onFilterCategory={setSelectedCategory}
      />

      {/* Lookbook Showcase Slider */}
      <LookbookSlider
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          scrollToDrops();
        }}
      />

      {/* Manifesto Marquee Text */}
      <MarqueeText />

      {/* Socials & Community Section */}
      <Socials />

      {/* Page Footer */}
      <Footer onShowToast={showToast} />

      {/* --- Modals & Overlay Drawers --- */}

      {/* Fullscreen Video Teaser Modal */}
      <TeaserModal
        isOpen={isFilmOpen}
        onClose={() => setIsFilmOpen(false)}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Newsletter Pop-up Modal */}
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
        onShowToast={showToast}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onStartCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onClearCart={handleClearCart}
        onShowToast={showToast}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}
