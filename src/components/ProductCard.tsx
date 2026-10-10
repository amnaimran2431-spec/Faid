import React, { useState } from 'react';
import { MessageCircle, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product, getProductWhatsAppLink } from '../data/shopData';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false), 1600;
    }, 1600);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(getProductWhatsAppLink(product.name, product.samplePricePKR), '_blank');
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300 cursor-pointer"
    >
      {/* Product Image Box */}
      <div className="relative aspect-4/3 w-full bg-slate-950/70 overflow-hidden flex items-center justify-center">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center p-4 text-center">
            <span className="text-xs text-slate-400 font-medium">{product.name}</span>
          </div>
        )}

        {/* Overlay hover actions */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-blue-600 transition-colors shadow-md"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={handleAddToCart}
            className={`p-2.5 rounded-full text-white transition-colors shadow-md ${
              justAdded ? 'bg-emerald-600' : 'bg-slate-900/90 hover:bg-blue-600'
            }`}
            title="Add to Cart"
          >
            {justAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>

        {/* Sale Tag if offered */}
        {product.isSale && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-md shadow-sm">
            Featured Offer
          </div>
        )}
      </div>

      {/* Content Box */}
      <div className="flex flex-col flex-1 p-5">
        {/* Unboxed category metadata */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1.5 font-medium">
          <span>{product.categoryLabel}</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-emerald-400 text-[11px]">In Stock</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Short description */}
        <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed flex-1">
          {product.shortDesc}
        </p>

        {/* Price Row */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-baseline justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white tabular-nums tracking-tight">
                PKR {product.samplePricePKR.toLocaleString()}
              </span>
              {product.originalPricePKR && (
                <span className="text-xs text-slate-500 line-through tabular-nums">
                  PKR {product.originalPricePKR.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-400 block">Sample price · Editable by shop</span>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <button
            onClick={handleWhatsAppOrder}
            className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm shadow-emerald-950/40 cursor-pointer whitespace-nowrap"
            title="Order directly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
