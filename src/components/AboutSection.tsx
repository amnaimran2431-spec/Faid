import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ArrowRight, Store } from 'lucide-react';
import { STORE_INFO, getMainWhatsAppInquiryLink, storeInteriorImg } from '../data/shopData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
              <img
                src={storeInteriorImg}
                alt="Fadi's Tech Shop retail store showcase in Lahore"
                className="w-full h-[360px] sm:h-[440px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700/60 text-xs">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <Store className="w-4 h-4 text-blue-400" />
                  <span>Physical Store in Johar Town</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Shop No. 41, Chaudhry Plaza, G1 Market, Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              About Our Store
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Welcome to Fadi’s Tech Shop
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Fadi’s Tech Shop is a local technology retail store in Lahore. Explore tech accessories and everyday gadgets, and contact our team to ask about products and availability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Opening Hours</span>
                </div>
                <p className="text-xs text-slate-400">
                  {STORE_INFO.openingHours}
                </p>
              </div>

              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct WhatsApp</span>
                </div>
                <p className="text-xs text-slate-400">
                  {STORE_INFO.phoneDisplay}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={getMainWhatsAppInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
