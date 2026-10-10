/**
 * Centralized data and configuration for Fadi's Tech Shop
 * Easy for shop owner to edit business information, pricing, and catalog.
 */

import heroShowcaseImg from '../assets/images/hero_tech_showcase_1791617636882.jpg';
import storeInteriorImg from '../assets/images/store_interior_lahore_1791617651055.jpg';
import audioCategoryImg from '../assets/images/category_audio_earbuds_1791617662904.jpg';
import smartwatchChargingImg from '../assets/images/category_smartwatch_charging_1791617672641.jpg';

export interface StoreInfo {
  name: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsAppNumber: string;
  addressFull: string;
  addressShort: string;
  city: string;
  postalCode: string;
  googleMapsUrl: string;
  currency: string;
  openingHours: string;
  businessType: string;
  aboutDescription: string;
}

export const STORE_INFO: StoreInfo = {
  name: "Fadi’s Tech Shop",
  phoneDisplay: "0308 0911000",
  phoneRaw: "+923080911000",
  whatsAppNumber: "923080911000",
  addressFull: "Shop No. 41, Chaudhry Plaza, G1 Market, Johar Town, Block G-1, Phase 1, Lahore, 54000, Pakistan",
  addressShort: "Shop No. 41, Chaudhry Plaza, G1 Market, Johar Town, Lahore",
  city: "Lahore",
  postalCode: "54000",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Shop+41+Chaudhry+Plaza+G1+Market+Johar+Town+Lahore",
  currency: "PKR",
  openingHours: "Mon - Sun: 11:00 AM – 11:00 PM",
  businessType: "Electronics, mobile accessories, computer accessories, and tech gadgets",
  aboutDescription:
    "Fadi’s Tech Shop is a local technology retail store in Lahore. Explore tech accessories and everyday gadgets, and contact our team to ask about products and availability.",
};

export interface ProductCategory {
  id: string;
  name: string;
  itemCount: number;
  description: string;
  image: string;
  iconName: string;
}

export const CATEGORIES: ProductCategory[] = [
  {
    id: "wireless-earbuds",
    name: "Wireless Earbuds",
    itemCount: 8,
    description: "True wireless stereo earbuds with active noise cancellation & clear sound.",
    image: audioCategoryImg,
    iconName: "Headphones",
  },
  {
    id: "headphones-speakers",
    name: "Headphones & Speakers",
    itemCount: 6,
    description: "Bass-boosted wireless over-ear headphones and portable bluetooth speakers.",
    image: audioCategoryImg,
    iconName: "Volume2",
  },
  {
    id: "chargers-cables",
    name: "Chargers & Cables",
    itemCount: 12,
    description: "Fast GaN wall adapters, high-speed USB-C cables, and safe power cords.",
    image: smartwatchChargingImg,
    iconName: "Zap",
  },
  {
    id: "smartwatches",
    name: "Smartwatches",
    itemCount: 7,
    description: "Fitness trackers, AMOLED displays, and sleek smart wristwatches.",
    image: smartwatchChargingImg,
    iconName: "Watch",
  },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    itemCount: 15,
    description: "Protective cases, magnetic car holders, stands, and screen guards.",
    image: heroShowcaseImg,
    iconName: "Smartphone",
  },
  {
    id: "computer-accessories",
    name: "Computer Accessories",
    itemCount: 10,
    description: "Ergonomic mice, multi-port USB-C hubs, webcams, and desk accessories.",
    image: heroShowcaseImg,
    iconName: "Laptop",
  },
  {
    id: "gaming-accessories",
    name: "Gaming Accessories",
    itemCount: 6,
    description: "RGB mechanical keyboards, gaming mouse pads, and precision peripherals.",
    image: heroShowcaseImg,
    iconName: "Gamepad2",
  },
  {
    id: "smart-gadgets",
    name: "Smart Gadgets",
    itemCount: 9,
    description: "Smart LED light bars, ambient desk gadgets, and daily productivity tools.",
    image: heroShowcaseImg,
    iconName: "Cpu",
  },
];

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  samplePricePKR: number;
  originalPricePKR?: number;
  isSale?: boolean;
  image: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Wireless Bluetooth Earbuds",
    category: "wireless-earbuds",
    categoryLabel: "Wireless Earbuds",
    samplePricePKR: 4500,
    originalPricePKR: 5200,
    isSale: true,
    image: audioCategoryImg,
    shortDesc: "Crisp HD audio with ambient noise reduction and 28-hour total battery life.",
    fullDesc:
      "Engineered for daily commutes and workouts. Features touch controls, instant pairing via Bluetooth 5.3, IPX5 sweat resistance, and a compact charging case with LED battery indicator.",
    specs: [
      "Bluetooth 5.3 connectivity (10m range)",
      "28 hours combined playback with charging case",
      "Touch gesture volume and track controls",
      "IPX5 splash & sweat resistant",
      "Type-C fast recharging",
    ],
    inStock: true,
  },
  {
    id: "p2",
    name: "Premium Bluetooth Headphones",
    category: "headphones-speakers",
    categoryLabel: "Headphones & Speakers",
    samplePricePKR: 7800,
    originalPricePKR: 8900,
    isSale: true,
    image: audioCategoryImg,
    shortDesc: "Over-ear cushioned wireless headphones with punchy bass and 40h playtime.",
    fullDesc:
      "Comfortable memory-foam earcups provide natural passive isolation while custom 40mm dynamic drivers deliver rich, deep acoustics. Includes 3.5mm backup audio cable and built-in microphone for phone calls.",
    specs: [
      "40mm High-Definition dynamic drivers",
      "Up to 40 hours wireless playtime",
      "Built-in HD microphone for crystal-clear calls",
      "Foldable travel design with protein leather earcups",
      "Dual connection: Bluetooth 5.2 or 3.5mm AUX",
    ],
    inStock: true,
  },
  {
    id: "p3",
    name: "Fast Charging Adapter (65W GaN)",
    category: "chargers-cables",
    categoryLabel: "Chargers & Cables",
    samplePricePKR: 3200,
    image: smartwatchChargingImg,
    shortDesc: "Dual-port (USB-C + USB-A) fast GaN wall charger with thermal safety chip.",
    fullDesc:
      "Compact GaN technology allows maximum 65W power delivery in a pocket-sized form factor. Safely charges laptops, tablets, iPhones, and Android smartphones at top speed with multi-layer surge protection.",
    specs: [
      "Gallium Nitride (GaN) cooling efficiency",
      "65W Power Delivery (PD) + Quick Charge 3.0",
      "Dual ports: 1x USB-C + 1x USB-A output",
      "Built-in over-voltage and thermal safeguards",
      "Compatible with iPhone, Samsung, Xiaomi, and MacBooks",
    ],
    inStock: true,
  },
  {
    id: "p4",
    name: "USB-C Fast Charging Cable (100W)",
    category: "chargers-cables",
    categoryLabel: "Chargers & Cables",
    samplePricePKR: 950,
    image: smartwatchChargingImg,
    shortDesc: "Durable braided nylon 1.2m cable supporting up to 100W PD and 480Mbps data transfer.",
    fullDesc:
      "Reinforced zinc-alloy connectors and high-density braided ballistic nylon jacket ensure resistance to bending, fraying, and pet damage. Equipped with an E-marker chip for smart current delivery.",
    specs: [
      "100W (20V/5A) Power Delivery support",
      "High-density double-braided nylon jacket",
      "Built-in E-Marker smart power chip",
      "1.2 Meter convenient desktop / bedside length",
      "Tested for 15,000+ bend lifecycle",
    ],
    inStock: true,
  },
  {
    id: "p5",
    name: "Smartwatch with AMOLED Display",
    category: "smartwatches",
    categoryLabel: "Smartwatches",
    samplePricePKR: 8500,
    originalPricePKR: 9800,
    isSale: true,
    image: smartwatchChargingImg,
    shortDesc: "Vibrant full-touch AMOLED display, heart rate tracking, and Bluetooth calling.",
    fullDesc:
      "Sleek aerospace alloy casing with interchangeable silicone strap. Offers all-day fitness tracking, multi-sport modes, sleep monitor, and seamless sync with iOS & Android smartphones for WhatsApp message alerts and calls.",
    specs: [
      "1.96-inch Crisp AMOLED screen with Always-On display",
      "Bluetooth calling with integrated mic & speaker",
      "Heart rate, SpO2 blood oxygen, and step tracking",
      "IP68 dust and water resistance",
      "7 to 10 days standard battery life",
    ],
    inStock: true,
  },
  {
    id: "p6",
    name: "Wireless Silent Optical Mouse",
    category: "computer-accessories",
    categoryLabel: "Computer Accessories",
    samplePricePKR: 2100,
    image: heroShowcaseImg,
    shortDesc: "Ergonomic slim mouse with dual-mode (Bluetooth 5.0 + 2.4GHz USB) and quiet clicks.",
    fullDesc:
      "Smooth glide pads, adjustable DPI toggle (800-1200-1600), and rechargeable lithium battery with auto-sleep power saving. Works effortlessly with Windows, Mac, iPads, and Android smart TVs.",
    specs: [
      "Dual mode: 2.4GHz wireless dongle & Bluetooth 5.0",
      "90% noise-reduced silent click switches",
      "Built-in rechargeable battery via Type-C",
      "3-level adjustable DPI sensor (800/1200/1600)",
      "Ultra-slim pocket friendly travel profile",
    ],
    inStock: true,
  },
  {
    id: "p7",
    name: "Mechanical Gaming Keyboard",
    category: "gaming-accessories",
    categoryLabel: "Gaming Accessories",
    samplePricePKR: 6200,
    image: heroShowcaseImg,
    shortDesc: "Tactile brown switches with customizable RGB lighting and detachable cable.",
    fullDesc:
      "Designed for fast typing and competitive gaming. Features double-shot ABS keycaps that never fade, durable metal top plate, full N-key rollover anti-ghosting, and multiple backlighting animation modes.",
    specs: [
      "Tactile responsive switches rated for 50M clicks",
      "Customizable per-key RGB backlighting presets",
      "100% Anti-ghosting with full N-key rollover",
      "Detachable USB Type-C braided cable",
      "Non-slip ergonomic rubberized feet with angle tilt",
    ],
    inStock: true,
  },
  {
    id: "p8",
    name: "Portable Bluetooth Speaker",
    category: "headphones-speakers",
    categoryLabel: "Headphones & Speakers",
    samplePricePKR: 3900,
    image: audioCategoryImg,
    shortDesc: "Rugged waterproof 360-degree cylindrical speaker with deep bass radiator.",
    fullDesc:
      "Compact outdoor-ready speaker with tactile rubber controls and woven carry strap. Offers rich stereo sound, IPX6 water resistance, and up to 12 hours of continuous music on a single charge.",
    specs: [
      "12W Dual drivers with dual passive bass radiators",
      "IPX6 water-resistant fabric mesh exterior",
      "Up to 12 hours playtime on single charge",
      "Built-in microphone for speakerphone calls",
      "Supports MicroSD card, AUX, and Bluetooth 5.3",
    ],
    inStock: true,
  },
  {
    id: "p9",
    name: "Magnetic Car Phone Mount",
    category: "mobile-accessories",
    categoryLabel: "Mobile Accessories",
    samplePricePKR: 1750,
    image: heroShowcaseImg,
    shortDesc: "Heavy-duty MagSafe-compatible 360° air-vent phone holder with strong N52 magnets.",
    fullDesc:
      "Clamps securely to any car air vent louvre with an anti-slip steel hook. Features 16 powerful neodymium magnets to keep your phone completely steady even on bumpy city roads in Lahore.",
    specs: [
      "16x N52 Industrial neodymium magnets",
      "360-degree rotatable metal ball joint",
      "Anti-drop twist-lock vent clip mechanism",
      "Compatible with iPhone MagSafe and all Android phones via metal ring",
      "One-handed quick snap and release",
    ],
    inStock: true,
  },
  {
    id: "p10",
    name: "Multi-Port USB-C Hub 7-in-1",
    category: "computer-accessories",
    categoryLabel: "Computer Accessories",
    samplePricePKR: 4400,
    image: heroShowcaseImg,
    shortDesc: "Aluminum expansion dock: 4K HDMI, 100W PD charging, 3x USB 3.0, and SD/TF card reader.",
    fullDesc:
      "Sleek brushed aluminum chassis matches modern MacBooks and Dell XPS laptops. Plug and play with no drivers needed. Perfect for connecting external monitors, flash drives, and memory cards simultaneously.",
    specs: [
      "HDMI port supporting 4K UHD @ 30Hz",
      "100W USB-C Power Delivery pass-through port",
      "3x High-speed USB 3.0 ports (5Gbps)",
      "SD and MicroSD / TF dual card slots",
      "Anodized aluminum heat dissipation shell",
    ],
    inStock: true,
  },
  {
    id: "p11",
    name: "Screen Protector & Armor Case Combo",
    category: "mobile-accessories",
    categoryLabel: "Mobile Accessories",
    samplePricePKR: 1500,
    image: heroShowcaseImg,
    shortDesc: "9H tempered glass guard paired with shockproof anti-yellowing clear protective case.",
    fullDesc:
      "Complete 360-degree defense for your smartphone. Raised camera bezels, reinforced air-cushion corner bumpers, and oleophobic smudge-resistant tempered glass for silky smooth touch response.",
    specs: [
      "9H Hardness shatterproof tempered glass",
      "Shock-absorbing TPU bumper corners",
      "Crystal clear anti-yellowing optical backplate",
      "Precise laser cutouts for mic, speakers & ports",
      "Available for major iPhone and Samsung Galaxy models",
    ],
    inStock: true,
  },
  {
    id: "p12",
    name: "Smart RGB Ambient Desk Light Bar",
    category: "smart-gadgets",
    categoryLabel: "Smart Gadgets",
    samplePricePKR: 3600,
    image: heroShowcaseImg,
    shortDesc: "Music-syncing sound reactive LED ambient light with app and remote controls.",
    fullDesc:
      "Level up your desk or TV setup with 32 dynamic color modes and built-in acoustic sensor that pulses to your music beats and game audio. USB powered with sturdy vertical and horizontal mount bases.",
    specs: [
      "Sound-activated dynamic music rhythm sync",
      "32 Colorful LED lamp beads with 8 display modes",
      "Noise-filtering intelligent acoustic algorithm",
      "Dual placement: vertical stand or horizontal lay",
      "USB 5V plug-and-play power input",
    ],
    inStock: true,
  },
];

export interface SpecialDeal {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  itemsIncluded: string;
  samplePricePKR: number;
  originalPricePKR: number;
  tagline: string;
}

export const SPECIAL_DEALS: SpecialDeal[] = [
  {
    id: "deal-1",
    badge: "Most Popular Combo",
    title: "Commuter Fast-Power Bundle",
    subtitle: "Everything you need for full-speed charging on the go in Lahore.",
    itemsIncluded: "65W GaN Fast Charger + 100W Braided USB-C Cable",
    samplePricePKR: 3850,
    originalPricePKR: 4150,
    tagline: "Save on everyday essentials",
  },
  {
    id: "deal-2",
    badge: "Audio & Fitness",
    title: "Active Lifestyle Duo",
    subtitle: "High quality audio paired with daily fitness and health metrics.",
    itemsIncluded: "Wireless Bluetooth Earbuds + Smartwatch AMOLED",
    samplePricePKR: 12200,
    originalPricePKR: 13700,
    tagline: "Great for fitness lovers",
  },
  {
    id: "deal-3",
    badge: "Work & Desk Setup",
    title: "Productivity Desk Essentials",
    subtitle: "Clear the clutter with silent dual-mode wireless controls and ports.",
    itemsIncluded: "Wireless Silent Mouse + 7-in-1 Multi-Port USB-C Hub",
    samplePricePKR: 5950,
    originalPricePKR: 6500,
    tagline: "Recommended for laptop users",
  },
];

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "w1",
    title: "Convenient Local Shopping",
    description: "Centrally situated in Johar Town, Lahore at Shop No. 41, Chaudhry Plaza, G1 Market for easy in-person visits.",
    highlight: "Johar Town, Lahore",
    iconName: "MapPin",
  },
  {
    id: "w2",
    title: "Helpful Customer Support",
    description: "Friendly guidance to match the right accessories, cables, and gadgets to your specific phone or laptop model.",
    highlight: "Direct Assistance",
    iconName: "Headphones",
  },
  {
    id: "w3",
    title: "A Variety of Tech Accessories",
    description: "Curated range covering mobile cases, chargers, audio, smartwatches, keyboards, and computer peripherals.",
    highlight: "Wide Selection",
    iconName: "PackageCheck",
  },
  {
    id: "w4",
    title: "Easy WhatsApp Ordering",
    description: "Simply tap to connect directly with the shop team on WhatsApp to confirm availability, reserve items, or ask questions.",
    highlight: "Fast Response",
    iconName: "MessageCircle",
  },
];

/**
 * Generates an encoded WhatsApp link to +92 308 0911000
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

export function getMainWhatsAppInquiryLink(): string {
  return buildWhatsAppLink("Assalam-o-Alaikum! I would like to know more about Fadi’s Tech Shop products.");
}

export function getProductWhatsAppLink(productName: string, pricePKR: number): string {
  return buildWhatsAppLink(
    `Assalam-o-Alaikum! I am interested in ${productName}, listed at PKR ${pricePKR.toLocaleString()}. Please confirm availability and details.`
  );
}

export function getDealWhatsAppLink(dealTitle: string, pricePKR: number): string {
  return buildWhatsAppLink(
    `Assalam-o-Alaikum! I am interested in the special offer "${dealTitle}", listed at PKR ${pricePKR.toLocaleString()}. Please share details and availability.`
  );
}

export function getCartCheckoutWhatsAppLink(
  items: Array<{ name: string; quantity: number; pricePKR: number }>,
  totalPKR: number,
  customerName?: string,
  deliveryMethod?: string
): string {
  const itemsText = items
    .map((item) => `• ${item.quantity}x ${item.name} (PKR ${(item.pricePKR * item.quantity).toLocaleString()})`)
    .join("\n");

  const customerLine = customerName && customerName.trim() ? `\nCustomer Name: ${customerName.trim()}` : "";
  const deliveryLine = deliveryMethod ? `\nPreference: ${deliveryMethod}` : "";

  const text = `Assalam-o-Alaikum Fadi's Tech Shop! I would like to order the following items:
${itemsText}

Total Amount: PKR ${totalPKR.toLocaleString()}${customerLine}${deliveryLine}

Please confirm stock availability and pickup/delivery details. Thank you!`;

  return buildWhatsAppLink(text);
}

export { heroShowcaseImg, storeInteriorImg, audioCategoryImg, smartwatchChargingImg };
