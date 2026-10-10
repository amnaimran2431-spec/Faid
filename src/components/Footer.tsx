import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ArrowUp,
  ShieldAlert,
} from 'lucide-react';
import { STORE_INFO, CATEGORIES, getMainWhatsAppInquiryLink } from '../data/shopData';

interface FooterProps {
  onSelectCategory: (catId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Summary Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                FTS
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Fadi’s Tech Shop
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your destination for mobile accessories, chargers, earbuds, smartwatches, and computer gadgets in Johar Town, Lahore. Visit our store or order conveniently through WhatsApp.
            </p>

            <div className="pt-2">
              <a
                href={getMainWhatsAppInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white font-medium text-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {STORE_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('categories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('special-deals')}
                  className="hover:text-white transition-colors cursor-pointer text-blue-400 hover:text-blue-300"
                >
                  Special Deals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Store Location
                </button>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      handleNavClick('products');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left truncate w-full"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Store Details
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.addressFull}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {STORE_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{STORE_INFO.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog disclaimer notice */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed">
          <p>
            * Catalog Notice: Product prices, bundles, and item specs listed on this website represent sample retail data that can be dynamically updated by the shop owner. Please confirm actual real-time stock availability and final prices directly with Fadi’s Tech Shop via WhatsApp or phone before visit or purchase.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400">
            © {currentYear} {STORE_INFO.name}. All rights reserved. Johar Town, Lahore, Pakistan.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
