import React from 'react';
import { MapPin, Headphones, PackageCheck, MessageCircle } from 'lucide-react';
import { WHY_CHOOSE_US, WhyChooseUsItem } from '../data/shopData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-blue-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-blue-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-blue-400" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-emerald-400" />;
      default:
        return <PackageCheck className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Local Lahore Retail
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Why Choose Fadi’s Tech Shop?
          </h2>
          <p className="text-sm text-slate-400 mt-2 leading-relaxed">
            We are dedicated to providing accessible electronics accessories, friendly service, and effortless WhatsApp communication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item: WhyChooseUsItem) => (
            <div
              key={item.id}
              className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wide mb-1">
                  {item.highlight}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
