/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import { Product, getMainWhatsAppInquiryLink } from './data/shopData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductsSection } from './components/ProductsSection';
import { SpecialOffers } from './components/SpecialOffers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { StoreLocationContact } from './components/StoreLocationContact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';

function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewingProduct, setViewingProduct] = useState<Product | null>(null);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeaderSearchClick = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Header
        onSearchClick={handleHeaderSearchClick}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Product Categories */}
        <CategoriesSection
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Featured & Filterable Products */}
        <ProductsSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onViewProduct={(product) => setViewingProduct(product)}
        />

        {/* Special Offers Section */}
        <SpecialOffers />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Us */}
        <AboutSection onContactClick={handleContactClick} />

        {/* Store Location & Contact */}
        <StoreLocationContact />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer />

      {/* Product Detail Modal */}
      <ProductModal
        product={viewingProduct}
        onClose={() => setViewingProduct(null)}
      />

      {/* Persistent Floating WhatsApp Quick Button */}
      <a
        href={getMainWhatsAppInquiryLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950/80 hover:scale-108 transition-all flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        title="Chat with Fadi’s Tech Shop on WhatsApp (0308 0911000)"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white/20" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
          Order on WhatsApp
        </span>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <ShopContent />
    </CartProvider>
  );
}
