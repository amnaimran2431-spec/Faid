import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
  ShieldAlert,
  MapPin,
  Store,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_INFO, getCartCheckoutWhatsAppLink } from '../data/shopData';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
    totalCount,
    totalAmountPKR,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [fulfillmentMethod, setFulfillmentMethod] = useState<'pickup' | 'delivery'>('pickup');

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    const deliveryText =
      fulfillmentMethod === 'pickup'
        ? `Store Pickup at ${STORE_INFO.addressShort}`
        : 'Home Delivery in Lahore';

    const orderItems = items.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      pricePKR: item.product.samplePricePKR,
    }));

    const url = getCartCheckoutWhatsAppLink(
      orderItems,
      totalAmountPKR,
      customerName,
      deliveryText
    );

    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 text-slate-100 flex flex-col shadow-2xl">
          {/* Drawer Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Your Shopping Cart</h3>
                <span className="text-xs text-slate-400">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-500 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-semibold text-slate-200">Your cart is empty</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Discover electronics accessories, chargers, earbuds, and gadgets at Fadi’s Tech Shop.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                  <span className="text-xs text-slate-400 font-medium">Selected Gadgets</span>
                  <button
                    onClick={clearCart}
                    className="text-xs text-rose-400 hover:text-rose-300 font-medium transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg shrink-0 border border-slate-800"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <h5 className="text-xs font-semibold text-slate-100 truncate">
                            {item.product.name}
                          </h5>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-slate-500 hover:text-rose-400 p-0.5 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-xs font-bold text-white tabular-nums">
                          PKR {(item.product.samplePricePKR * item.quantity).toLocaleString()}
                        </div>

                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-md p-0.5">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 text-slate-400 hover:text-white"
                              title="Decrease"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-semibold tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 text-slate-400 hover:text-white"
                              title="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-[10px] text-slate-400">
                            PKR {item.product.samplePricePKR.toLocaleString()} each
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fulfillment and Customer details form */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <label className="block text-xs font-medium text-slate-300">
                    Your Name (Optional for WhatsApp order)
                    <input
                      type="text"
                      placeholder="e.g. Usman Ali"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </label>

                  <div>
                    <span className="block text-xs font-medium text-slate-300 mb-1.5">
                      Fulfillment Preference
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setFulfillmentMethod('pickup')}
                        className={`p-2 rounded-lg border text-left transition-colors flex items-center gap-1.5 ${
                          fulfillmentMethod === 'pickup'
                            ? 'bg-blue-950/60 border-blue-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Store className="w-3.5 h-3.5 shrink-0 text-blue-400" />
                        <span className="truncate">Store Pickup (Johar Town)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFulfillmentMethod('delivery')}
                        className={`p-2 rounded-lg border text-left transition-colors flex items-center gap-1.5 ${
                          fulfillmentMethod === 'delivery'
                            ? 'bg-blue-950/60 border-blue-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-blue-400" />
                        <span className="truncate">Lahore Delivery</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-slate-950/80 space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Catalog Estimated Subtotal</span>
                  <span className="tabular-nums font-medium text-slate-300">
                    PKR {totalAmountPKR.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-base font-bold text-white">
                  <span>Total Order (PKR)</span>
                  <span className="text-xl tabular-nums text-blue-400">
                    PKR {totalAmountPKR.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-[11px] text-slate-400 leading-relaxed">
                <span>
                  WhatsApp is the primary purchase flow. Tapping below opens WhatsApp with your itemized order to confirm live inventory with Fadi’s Tech Shop.
                </span>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Send Order via WhatsApp</span>
              </button>

              <p className="text-center text-[10px] text-slate-400">
                Official Shop WhatsApp: {STORE_INFO.phoneDisplay}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
