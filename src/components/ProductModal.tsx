import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  ShoppingBag,
  Check,
  CheckCircle2,
  Info,
  ShieldCheck,
  Plus,
  Minus,
} from 'lucide-react';
import { Product, getProductWhatsAppLink } from '../data/shopData';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1800);
  };

  const handleWhatsApp = () => {
    const totalPKR = product.samplePricePKR * quantity;
    const itemText = quantity > 1 ? `${quantity}x ${product.name}` : product.name;
    const link = getProductWhatsAppLink(itemText, totalPKR);
    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Media Column */}
          <div className="relative bg-slate-950 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-800">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 md:max-h-96 w-full object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
            {product.isSale && (
              <div className="absolute top-6 left-6 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                Featured Deal
              </div>
            )}
          </div>

          {/* Product Info Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
                <span>{product.categoryLabel}</span>
                <span className="text-slate-600">·</span>
                <span className="text-emerald-400">Available in Lahore</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white tracking-tight leading-snug">
                {product.name}
              </h2>

              {/* Price Banner */}
              <div className="mt-4 p-3 bg-slate-950/80 border border-slate-800 rounded-xl">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-white tabular-nums">
                    PKR {product.samplePricePKR.toLocaleString()}
                  </span>
                  {product.originalPricePKR && (
                    <span className="text-sm text-slate-500 line-through tabular-nums">
                      PKR {product.originalPricePKR.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-400">
                  <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Sample retail price. Subject to final confirmation by shop owner.</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Key Specs */}
              <div className="mt-5 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Product Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Purchase & Quantity Actions */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">Quantity</span>
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:text-white text-slate-400 rounded transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-sm font-semibold tabular-nums text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:text-white text-slate-400 rounded transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400">
                Store location: Shop No. 41, Chaudhry Plaza, G1 Market, Johar Town, Lahore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
