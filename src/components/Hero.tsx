import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { STORE_INFO, getMainWhatsAppInquiryLink, heroShowcaseImg } from '../data/shopData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0A1128] to-slate-950 pt-10 pb-20 sm:pt-16 sm:pb-28">
      {/* Subtle ambient electric blue glow accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-10 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Location & Trust Kicker (clean unboxed text) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5 text-blue-400">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Shop No. 41, Chaudhry Plaza</span>
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>G1 Market, Johar Town, Lahore</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-300">Electronics & Gadgets</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
              Upgrade Your World with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-indigo-300">
                Smarter Tech.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Discover everyday tech essentials, stylish accessories, and smart gadgets at Fadi’s Tech Shop, Lahore.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getMainWhatsAppInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-900/40 transition-all whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust highlights strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-200">Local Physical Store</span>
                  <span className="text-slate-400 text-[11px]">Johar Town, Lahore</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-200">Direct WhatsApp</span>
                  <span className="text-slate-400 text-[11px]">0308 0911000</span>
                </div>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-6 h-6 rounded-md bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-200">Daily Gadgets</span>
                  <span className="text-slate-400 text-[11px]">Cases, Audio, Chargers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-900 shadow-2xl shadow-blue-950/40 group">
              <img
                src={heroShowcaseImg}
                alt="Modern electronics and tech gadgets showcased at Fadi's Tech Shop"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* In-image store location badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-semibold text-white">Visit Fadi’s Tech Shop</p>
                  <p className="text-slate-400 text-[11px] truncate">
                    Chaudhry Plaza, G1 Market, Lahore
                  </p>
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white font-medium text-[11px] whitespace-nowrap transition-colors"
                >
                  View Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
