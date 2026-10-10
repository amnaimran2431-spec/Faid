import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Check,
} from 'lucide-react';
import { STORE_INFO, getMainWhatsAppInquiryLink } from '../data/shopData';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onSearchClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchClick,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { totalCount, setIsCartOpen, lastAddedId } = useCart();

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
        {/* Top utility alert bar */}
        <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 border-b border-slate-800/40 text-xs py-1.5 px-4 text-slate-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 truncate">
              <span className="flex items-center gap-1.5 text-blue-400 font-medium">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">G1 Market, Johar Town, Lahore</span>
              </span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-slate-400 hidden sm:inline truncate">
                Direct WhatsApp Ordering Available
              </span>
            </div>
            <div className="flex items-center gap-4 shrink-0 text-slate-300">
              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="hover:text-blue-400 transition-colors flex items-center gap-1 text-xs"
                title="Call Store"
              >
                <Phone className="w-3 h-3" />
                <span>{STORE_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-18">
            {/* Zone 1: Brand wordmark */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className="flex items-center gap-2.5 text-slate-100 hover:text-white group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                  <span className="font-extrabold text-white text-base tracking-tighter">FTS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white leading-tight">
                    Fadi’s Tech Shop
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal tracking-wide">
                    Johar Town · Lahore
                  </span>
                </div>
              </a>
            </div>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
              <button
                onClick={() => handleNavClick('home')}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('products')}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                All Products
              </button>
              <button
                onClick={() => handleNavClick('categories')}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Categories
              </button>
              <button
                onClick={() => handleNavClick('special-deals')}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 text-blue-400 hover:text-blue-300"
              >
                Special Deals
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Search, Cart, WhatsApp CTA */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Search Toggle / Input */}
              <div className="relative">
                {showSearchInput ? (
                  <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 shadow-inner">
                    <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="text"
                      placeholder="Search tech..."
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      className="bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none w-32 sm:w-48"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        setShowSearchInput(false);
                        onSearchChange('');
                      }}
                      className="text-slate-400 hover:text-slate-200 ml-1 p-0.5"
                      title="Close search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowSearchInput(true);
                      onSearchClick();
                    }}
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
                    title="Search products"
                    aria-label="Search products"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`relative p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border transition-all ${
                  lastAddedId ? 'border-emerald-500 bg-emerald-950/40' : 'border-slate-800'
                }`}
                title="Open Shopping Cart"
                aria-label={`Shopping cart with ${totalCount} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white font-bold text-[10px] min-w-5 h-5 px-1 rounded-full flex items-center justify-center ring-2 ring-slate-950 tabular-nums">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Order Button */}
              <a
                href={getMainWhatsAppInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-950/50 transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>WhatsApp Order</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('products')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                All Products
              </button>
              <button
                onClick={() => handleNavClick('categories')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                Categories
              </button>
              <button
                onClick={() => handleNavClick('special-deals')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-blue-400 font-semibold"
              >
                Special Deals
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
              >
                Contact & Location
              </button>
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={getMainWhatsAppInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {STORE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2 px-4 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call Store ({STORE_INFO.phoneDisplay})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
