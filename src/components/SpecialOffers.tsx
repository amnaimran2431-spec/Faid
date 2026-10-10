import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { SPECIAL_DEALS, SpecialDeal, getDealWhatsAppLink } from '../data/shopData';

export const SpecialOffers: React.FC = () => {
  return (
    <section id="special-deals" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Bundles & Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Smart Gadgets. Smarter Choices.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Curated accessories and daily tech combinations at Fadi’s Tech Shop. Special package offers can be tailored on demand via WhatsApp.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECIAL_DEALS.map((deal: SpecialDeal) => (
            <div
              key={deal.id}
              className="relative flex flex-col justify-between bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 shadow-xl shadow-blue-950/20 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold text-blue-400">
                    {deal.badge}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Combo Package
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {deal.title}
                </h3>

                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {deal.subtitle}
                </p>

                {/* Items included */}
                <div className="mt-4 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1 uppercase tracking-wider">
                    Package Includes:
                  </span>
                  <p className="text-xs font-medium text-slate-200">
                    {deal.itemsIncluded}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xl font-extrabold text-white tabular-nums">
                      PKR {deal.samplePricePKR.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 line-through ml-2 tabular-nums">
                      PKR {deal.originalPricePKR.toLocaleString()}
                    </span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">
                      Sample bundle price · Editable by shop
                    </span>
                  </div>
                </div>

                <a
                  href={getDealWhatsAppLink(deal.title, deal.samplePricePKR)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding customized bundle requests */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl text-xs text-slate-400">
          Looking for a custom combination for your phone model or workspace? Message us directly on WhatsApp with your requirements and we will check available stock for you.
        </div>
      </div>
    </section>
  );
};
