import React from 'react';
import {
  Headphones,
  Volume2,
  Zap,
  Watch,
  Smartphone,
  Laptop,
  Gamepad2,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { CATEGORIES, ProductCategory } from '../data/shopData';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategory: string;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  selectedCategory,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Headphones':
        return <Headphones className="w-5 h-5" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Watch':
        return <Watch className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Smartphone className="w-5 h-5" />;
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-24 bg-slate-900/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Browse by Department
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Product Categories
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              Explore essential hardware, mobile accessories, audio, and gadgets available at our Lahore store.
            </p>
          </div>
          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>View All Departments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat: ProductCategory) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group text-left relative flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-950/60 ring-1 ring-blue-500'
                    : 'bg-slate-900/80 hover:bg-slate-800/90 border-slate-800 hover:border-slate-700 shadow-md'
                }`}
              >
                {/* Background image subtle gradient preview */}
                <div className="flex items-start justify-between w-full mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                    }`}
                  >
                    {getIcon(cat.iconName)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-300 tabular-nums">
                    {cat.itemCount}+ Items
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-100 group-hover:text-white text-base leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-blue-400 group-hover:text-blue-300">
                  <span>Browse catalog</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
