import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  Navigation,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { STORE_INFO, buildWhatsAppLink, getMainWhatsAppInquiryLink } from '../data/shopData';

export const StoreLocationContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'Product Availability',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number (e.g., 0308 1234567)';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write your question or inquiry';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = `Assalam-o-Alaikum! My name is ${formData.name.trim()} (${formData.phone.trim()}).
Inquiry Topic: ${formData.subject}
Message: ${formData.message.trim()}`;

    const url = buildWhatsAppLink(msg);
    window.open(url, '_blank');
    setSubmittedStatus('success');
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', subject: 'Product Availability', message: '' });
    setSubmittedStatus('idle');
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Visit or Message Us
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Store Location & Contact
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Reach out via phone, direct WhatsApp chat, or visit our retail shop in Johar Town, Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Store Location Card & Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Store Address</h3>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                    {STORE_INFO.addressFull}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Landmark: G1 Market, Johar Town, Lahore.
                  </p>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Call Store</span>
                </a>

                <a
                  href={getMainWhatsAppInquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm shadow-emerald-950/40 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm shadow-blue-950/40 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Store Hours & Quick Info */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Business Hours</span>
                    <span className="text-slate-400">{STORE_INFO.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Phone / WhatsApp</span>
                    <span className="text-slate-400">{STORE_INFO.phoneDisplay}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Stylized Map Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 p-6 flex flex-col justify-between min-h-[180px]">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-blue-400">Google Maps Navigation</span>
                  <h4 className="text-sm font-bold text-white">Find Fadi’s Tech Shop in Johar Town</h4>
                  <p className="text-xs text-slate-400 max-w-sm">
                    Open Google Maps directly on your smartphone or browser for turn-by-turn driving & walking directions.
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">31.4697° N, 74.2728° E</span>
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white">Send an Inquiry</h3>
            <p className="text-xs text-slate-400 mt-1 mb-6">
              Have questions about accessory compatibility, price verification, or store visits? Fill out this quick form.
            </p>

            {submittedStatus === 'success' ? (
              <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">WhatsApp Chat Opened!</h4>
                  <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been formatted and opened directly in WhatsApp to chat with Fadi’s Tech Shop team.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ali Raza"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number (WhatsApp) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 0308 0911000"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Product Availability">Product Availability & Stock</option>
                    <option value="Mobile Accessories Inquiry">Mobile Accessories (Cases / Cables)</option>
                    <option value="Audio & Earbuds">Wireless Earbuds & Headphones</option>
                    <option value="Store Visit & Location">Store Visit / Directions in Johar Town</option>
                    <option value="Bulk Order">Custom Order / Bundle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please specify which model, item, or question you have..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full bg-slate-950 border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>Send Inquiry to Official WhatsApp (0308 0911000)</span>
                  </button>
                  <p className="text-center text-[10px] text-slate-500 mt-2">
                    Inquiries are dispatched directly to Fadi’s Tech Shop on WhatsApp for fast response.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
