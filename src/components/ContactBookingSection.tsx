import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Car,
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  Sparkles,
  MessageCircle,
  Check,
  ShieldCheck,
  Droplets,
  Zap,
  ArrowRight,
  Info,
  CheckCircle2,
  Copy,
  ExternalLink,
} from "lucide-react";
import { COMPANY_DETAILS, SERVICES, ADDON_PACKAGES, ADDON_EXTRAS } from "../constants";

const RED = "#DC2626";
const RED_LIGHT = "#EF4444";
const BORDER_COLOR = "#DDD5C5";
const CREAM_BG = "#EDE8DF";

interface BookingPackage {
  id: string;
  name: string;
  priceNum: number;
  priceDisplay: string;
  duration: string;
  badge?: string;
  subtitle: string;
  includes: string[];
}

const PACKAGES_LIST: BookingPackage[] = [
  {
    id: "full-valet",
    name: "Full Valet Package",
    priceNum: 70,
    priceDisplay: "From £70",
    duration: "3–4 hrs",
    badge: "Most Popular",
    subtitle: "Complete deep reset — safe 3-bucket wash, carpet shampoo, seat steam/leather clean & 4-month sealant.",
    includes: [
      "Snow foam pre-wash & safe hand contact wash",
      "Door shuts, wheel arches & tar removed",
      "Interior deep vacuum & upholstery shampooed / leather cleaned",
      "Glass cleaned streak-free & spray sealant applied",
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance Plan",
    priceNum: 50,
    priceDisplay: "From £50",
    duration: "1.5–2 hrs",
    badge: "Best Value",
    subtitle: "Regular upkeep every 2–4 weeks to keep your car sharp and protection topped up.",
    includes: [
      "Snow foam & 2-bucket safe contact wash",
      "Wheels, arches & tyres dressed",
      "Interior vacuum & dashboard wiped",
      "3-month spray sealant & fresh scent",
    ],
  },
  {
    id: "deep-clean",
    name: "Deep Clean Package",
    priceNum: 120,
    priceDisplay: "From £120",
    duration: "4–5 hrs",
    badge: "Full Reset",
    subtitle: "For cars needing rescuing — hot wet vac extraction, pet hair/stain removal & decontamination.",
    includes: [
      "Hot water wet extraction on seats & carpets",
      "Pet hair removal & steam blast in all crevices",
      "Exterior decontamination & fallout remover",
      "Leather conditioner & full interior dressing",
    ],
  },
  {
    id: "winter-protection",
    name: "Winter Protection Package",
    priceNum: 60,
    priceDisplay: "£60",
    duration: "2–2.5 hrs",
    badge: "Seasonal",
    subtitle: "Shield paint, wheels, and glass against winter road grime, salt, and harsh moisture.",
    includes: [
      "Full decontamination & arch blast",
      "6-month heavy-duty paint sealant",
      "Windscreen rain repellent & wheel sealant",
      "Safe 3-bucket contact wash & interior freshener",
    ],
  },
  {
    id: "new-car-protection",
    name: "New Car Protection Package",
    priceNum: 250,
    priceDisplay: "From £250",
    duration: "3–4 hrs",
    badge: "2-Yr Ceramic",
    subtitle: "Lock in that showroom factory finish with genuine 2-year ceramic coating on paint & glass.",
    includes: [
      "Full paint decontamination & safe wash",
      "2-Year Ceramic coating on paintwork & glass",
      "Interior fabric sealed or leather protected",
      "Spotless pure water finish — zero tap required",
    ],
  },
  {
    id: "custom",
    name: "Custom / Not Sure",
    priceNum: 0,
    priceDisplay: "Quote on inspection",
    duration: "Flexible",
    subtitle: "Not sure what your car needs? Tell Rhys the details and he will recommend the perfect package.",
    includes: [
      "Free friendly advice directly from Rhys",
      "Tailored quote to suit your vehicle's condition",
      "No obligation to book",
    ],
  },
];

const VEHICLE_CATEGORIES = [
  { id: "hatchback", label: "Hatchback / Small" },
  { id: "saloon", label: "Saloon / Estate" },
  { id: "suv", label: "4x4 / SUV" },
  { id: "prestige", label: "Prestige / Sports" },
  { id: "van", label: "Van / Commercial" },
];

const TIME_WINDOWS = [
  { id: "morning", label: "Morning", sub: "8:00 AM – 12:00 PM" },
  { id: "afternoon", label: "Afternoon", sub: "12:00 PM – 4:00 PM" },
  { id: "late", label: "Late Afternoon", sub: "4:00 PM – 7:00 PM" },
  { id: "flexible", label: "Flexible / ASAP", sub: "Any available slot" },
];

const ADDON_OPTIONS = [
  {
    id: "glass-ceramic",
    name: "2-Year Glass Ceramic Coating",
    priceNum: 40,
    priceDisplay: "+£40",
    desc: "Hydrophobic rain repellent — rainwater sheets off glass at speed for clear visibility",
  },
  {
    id: "convertible-roof",
    name: "Convertible Roof Deep Clean",
    priceNum: 40,
    priceDisplay: "+£40",
    desc: "Remove moss, algae & dirt from fabric roof and restore water repellency",
  },
  {
    id: "engine-bay",
    name: "Engine Bay Cleaned & Dressed",
    priceNum: 50,
    priceDisplay: "+£50",
    desc: "Remove road grime & oil film, dress all plastics and hoses to satin finish",
  },
  {
    id: "pet-hair",
    name: "Heavy Pet Hair / Sand Treatment",
    priceNum: 20,
    priceDisplay: "+£20",
    desc: "Specialised rubber brushing & high-powered extraction for stubborn fibres",
  },
];

export default function ContactBookingSection() {
  // Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vehicleCategory, setVehicleCategory] = useState("Saloon / Estate");
  const [selectedPackageId, setSelectedPackageId] = useState<string>("full-valet");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split("T")[0];

  const [preferredDate, setPreferredDate] = useState(defaultDateStr);
  const [timeWindow, setTimeWindow] = useState("Morning (8:00 AM – 12:00 PM)");
  const [notes, setNotes] = useState("");

  // Validation & UI state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copied, setCopied] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  // Selected package object
  const selectedPkg = useMemo(() => {
    return PACKAGES_LIST.find((p) => p.id === selectedPackageId) || PACKAGES_LIST[0];
  }, [selectedPackageId]);

  // Calculate estimated total price
  const estimatedTotal = useMemo(() => {
    if (selectedPkg.id === "custom") {
      return "Quote on inspection";
    }
    const addonSum = selectedAddons.reduce((acc, addonId) => {
      const item = ADDON_OPTIONS.find((a) => a.id === addonId);
      return acc + (item ? item.priceNum : 0);
    }, 0);

    const total = selectedPkg.priceNum + addonSum;
    return `From £${total}`;
  }, [selectedPkg, selectedAddons]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your name";
    }
    if (!vehicle.trim()) {
      newErrors.vehicle = "Please enter your car make & model (e.g. BMW 3 Series)";
    }
    if (!postcode.trim()) {
      newErrors.postcode = "Please enter your postcode or town (e.g. SN1 2AB)";
    }
    if (!phone.trim() || phone.replace(/\s+/g, "").length < 9) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Compile formatted WhatsApp message
  const compileWhatsAppText = () => {
    const chosenAddons = selectedAddons
      .map((id) => {
        const item = ADDON_OPTIONS.find((a) => a.id === id);
        return item ? `+ ${item.name} (${item.priceDisplay})` : "";
      })
      .filter(Boolean);

    const addonsText = chosenAddons.length > 0 ? chosenAddons.join("\n  ") : "None";

    return (
      `🚗 *NEW BOOKING ENQUIRY — RD VALETING*\n\n` +
      `👤 *Customer Details:*\n` +
      `• Name: ${fullName.trim()}\n` +
      `• Mobile / WhatsApp: ${phone.trim()}\n` +
      `• Location / Postcode: ${postcode.trim().toUpperCase()}\n\n` +
      `🚙 *Vehicle:*\n` +
      `• Vehicle: ${vehicle.trim()} (${vehicleCategory})\n\n` +
      `✨ *Package & Services Needed:*\n` +
      `• Package: ${selectedPkg.name} (${selectedPkg.priceDisplay})\n` +
      `• Duration: ${selectedPkg.duration}\n` +
      `• Optional Add-ons:\n  ${addonsText}\n` +
      `• Estimated Price: *${estimatedTotal}*\n\n` +
      `📅 *Preferred Timing:*\n` +
      `• Date: ${preferredDate}\n` +
      `• Arrival Window: ${timeWindow}\n` +
      (notes.trim() ? `\n📝 *Notes / Special Requests:*\n• ${notes.trim()}\n` : "") +
      `\n💬 Hi Rhys, I would like to book this appointment with RD Valeting. Please let me know if this slot is available!`
    );
  };

  const getWhatsAppUrl = () => {
    const text = compileWhatsAppText();
    return `https://wa.me/447393682365?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
    } else {
      // Scroll to top of form smoothly to show errors
      const el = document.getElementById("booking-form-card");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const copyDetailsToClipboard = () => {
    const text = compileWhatsAppText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      style={{ background: "#F5F0E8" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${RED}, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-[11px] font-mono uppercase tracking-[0.25em] font-bold text-white shadow-sm"
            style={{ background: `linear-gradient(135deg, ${RED}, ${RED_LIGHT})` }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Direct WhatsApp Booking &amp; Quote
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6"
            style={{ color: "#0A0A0A" }}
          >
            Book Your Valet in Seconds. <br className="hidden sm:block" />
            <span
              className="italic font-serif font-light"
              style={{ color: RED }}
            >
              We Come Directly to You.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed text-[#6E6455] max-w-2xl mx-auto"
          >
            Fill in your vehicle, postcode, and package below to send a complete, pre-priced booking enquiry straight to Rhys on WhatsApp. No endless questions or back-and-forth.
          </motion.p>
        </div>

        {/* Main Grid: Form (Left 7 cols) & Live Booking Summary / Contact Card (Right 5 cols) */}
        <div
          id="booking-form-card"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* ── LEFT COLUMN: The Interactive Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 md:p-10 border shadow-xl"
            style={{
              borderColor: BORDER_COLOR,
              boxShadow: "0 20px 60px rgba(10,10,10,0.06)",
            }}
          >
            <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
              {/* Step 1: Customer Details */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: RED }}
                  >
                    1
                  </span>
                  <h3 className="text-lg font-bold text-[#0A0A0A] tracking-tight">
                    Your Details &amp; Location
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: "" });
                        }}
                        placeholder="e.g. Rhys or John Smith"
                        className={`w-full px-4 py-3.5 pl-10 rounded-2xl bg-[#F5F0E8]/50 border text-sm text-[#0A0A0A] placeholder:text-[#A09585] focus:outline-none focus:ring-2 transition-all font-medium ${
                          errors.fullName
                            ? "border-red-500 focus:ring-red-500"
                            : "border-[#DDD5C5] focus:ring-red-600 focus:border-red-600"
                        }`}
                      />
                      <User className="w-4 h-4 text-[#8A8070] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 font-semibold mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5">
                      Mobile / WhatsApp <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        placeholder="e.g. 07393 682 365"
                        className={`w-full px-4 py-3.5 pl-10 rounded-2xl bg-[#F5F0E8]/50 border text-sm text-[#0A0A0A] placeholder:text-[#A09585] focus:outline-none focus:ring-2 transition-all font-medium ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-500"
                            : "border-[#DDD5C5] focus:ring-red-600 focus:border-red-600"
                        }`}
                      />
                      <Phone className="w-4 h-4 text-[#8A8070] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 font-semibold mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Postcode / Area */}
                <div className="mt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5">
                    Driveway Postcode or Area <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => {
                        setPostcode(e.target.value);
                        if (errors.postcode) setErrors({ ...errors, postcode: "" });
                      }}
                      placeholder="e.g. SN1 2AB, Swindon, Chippenham, Marlborough"
                      className={`w-full px-4 py-3.5 pl-10 rounded-2xl bg-[#F5F0E8]/50 border text-sm text-[#0A0A0A] placeholder:text-[#A09585] focus:outline-none focus:ring-2 transition-all font-medium ${
                        errors.postcode
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#DDD5C5] focus:ring-red-600 focus:border-red-600"
                      }`}
                    />
                    <MapPin className="w-4 h-4 text-[#8A8070] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.postcode && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1">
                      {errors.postcode}
                    </p>
                  )}
                  <p className="text-[11px] text-[#7A6E5F] mt-1.5 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>
                      We bring our own 100% spotless pure water. Just a standard 13A socket needed!
                    </span>
                  </p>
                </div>
              </div>

              {/* Step 2: Vehicle Details */}
              <div className="pt-2 border-t border-[#EDE8DF]">
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: RED }}
                  >
                    2
                  </span>
                  <h3 className="text-lg font-bold text-[#0A0A0A] tracking-tight">
                    Vehicle Details
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5">
                      Vehicle Make &amp; Model <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={vehicle}
                        onChange={(e) => {
                          setVehicle(e.target.value);
                          if (errors.vehicle) setErrors({ ...errors, vehicle: "" });
                        }}
                        placeholder="e.g. BMW 3 Series, Golf R, Range Rover, Tesla Model Y"
                        className={`w-full px-4 py-3.5 pl-10 rounded-2xl bg-[#F5F0E8]/50 border text-sm text-[#0A0A0A] placeholder:text-[#A09585] focus:outline-none focus:ring-2 transition-all font-medium ${
                          errors.vehicle
                            ? "border-red-500 focus:ring-red-500"
                            : "border-[#DDD5C5] focus:ring-red-600 focus:border-red-600"
                        }`}
                      />
                      <Car className="w-4 h-4 text-[#8A8070] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.vehicle && (
                      <p className="text-[11px] text-red-600 font-semibold mt-1">
                        {errors.vehicle}
                      </p>
                    )}
                  </div>

                  {/* Vehicle Size Quick Select */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#8A8070] mb-2">
                      Vehicle Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {VEHICLE_CATEGORIES.map((cat) => {
                        const isSelected = vehicleCategory === cat.label;
                        return (
                          <button
                            type="button"
                            key={cat.id}
                            onClick={() => setVehicleCategory(cat.label)}
                            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                              isSelected
                                ? "bg-[#0A0A0A] text-white shadow-sm"
                                : "bg-[#F5F0E8] text-[#5A5040] hover:bg-[#EDE8DF]"
                            }`}
                          >
                            {cat.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Package Selection ("What does it need") */}
              <div className="pt-2 border-t border-[#EDE8DF]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: RED }}
                    >
                      3
                    </span>
                    <h3 className="text-lg font-bold text-[#0A0A0A] tracking-tight">
                      What does it need? (Select Package)
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold" style={{ color: RED }}>
                    Prices shown upfront
                  </span>
                </div>

                {/* Package Cards Selector */}
                <div className="space-y-3">
                  {PACKAGES_LIST.map((pkg) => {
                    const isSelected = selectedPackageId === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`p-4 sm:p-4.5 rounded-2xl border-2 transition-all cursor-pointer relative ${
                          isSelected
                            ? "border-red-600 bg-red-50/20 shadow-md"
                            : "border-[#DDD5C5] bg-white hover:border-[#B5AA96]"
                        }`}
                        style={isSelected ? { borderColor: RED } : {}}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-sm sm:text-base text-[#0A0A0A] truncate">
                                {pkg.name}
                              </h4>
                              {pkg.badge && (
                                <span
                                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                                  style={{ background: RED }}
                                >
                                  {pkg.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#7A6E5F] leading-snug line-clamp-2 mb-2">
                              {pkg.subtitle}
                            </p>
                            <div className="flex items-center gap-3 text-[11px] text-[#8A8070] font-mono">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-[#A09585]" />
                                {pkg.duration}
                              </span>
                            </div>
                          </div>

                          <div className="text-right shrink-0 flex flex-col items-end">
                            <span
                              className="text-base sm:text-lg font-black tracking-tight"
                              style={{ color: RED }}
                            >
                              {pkg.priceDisplay}
                            </span>
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center mt-2 border transition-all ${
                                isSelected
                                  ? "bg-red-600 border-red-600 text-white"
                                  : "border-[#DDD5C5] bg-white text-transparent"
                              }`}
                            >
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Optional Add-ons */}
                <div className="mt-5 p-4 rounded-2xl bg-[#F5F0E8]/70 border border-[#DDD5C5]">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2.5">
                    Optional Add-ons &amp; Extras
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ADDON_OPTIONS.map((addon) => {
                      const isChecked = selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                            isChecked
                              ? "bg-white border-red-500 shadow-sm"
                              : "bg-white/80 border-[#DDD5C5] hover:border-zinc-400"
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <p className="text-xs font-bold text-[#0A0A0A] truncate">
                              {addon.name}
                            </p>
                            <span
                              className="text-[11px] font-bold font-mono"
                              style={{ color: RED }}
                            >
                              {addon.priceDisplay}
                            </span>
                          </div>
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all ${
                              isChecked
                                ? "bg-red-600 border-red-600 text-white"
                                : "border-zinc-300 bg-white"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 4: Preferred Date & Rough Time */}
              <div className="pt-2 border-t border-[#EDE8DF]">
                <div className="flex items-center gap-2.5 mb-4">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: RED }}
                  >
                    4
                  </span>
                  <h3 className="text-lg font-bold text-[#0A0A0A] tracking-tight">
                    Rough Date &amp; Preferred Time
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3.5 pl-10 rounded-2xl bg-[#F5F0E8]/50 border border-[#DDD5C5] text-sm text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                      />
                      <Calendar className="w-4 h-4 text-[#8A8070] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5">
                      Arrival Time Window
                    </label>
                    <select
                      value={timeWindow}
                      onChange={(e) => setTimeWindow(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F5F0E8]/50 border border-[#DDD5C5] text-sm text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium"
                    >
                      {TIME_WINDOWS.map((w) => (
                        <option key={w.id} value={`${w.label} (${w.sub})`}>
                          {w.label} ({w.sub})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="mt-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-1.5">
                    Additional Notes / Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Any dog hair, spilled drinks, or specific areas you'd like extra focus on? Driveway has outside tap/power socket available."
                    className="w-full px-4 py-3 rounded-2xl bg-[#F5F0E8]/50 border border-[#DDD5C5] text-sm text-[#0A0A0A] placeholder:text-[#A09585] focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 font-medium resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full font-bold uppercase tracking-wider text-sm text-white shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D]"
                  style={{
                    boxShadow: "0 10px 30px rgba(37, 211, 102, 0.35)",
                  }}
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Send Booking to Rhys on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
                <p className="text-center text-[11px] text-[#7A6E5F] mt-2.5">
                  ⚡ Instantly opens WhatsApp with all your vehicle and package details pre-filled.
                </p>
              </div>
            </form>
          </motion.div>

          {/* ── RIGHT COLUMN: Live Summary & Direct Contact Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
          >
            {/* Live Pricing Summary Box */}
            <div
              className="rounded-[32px] p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(220,38,38,0.3)",
                boxShadow: "0 25px 70px rgba(10,10,10,0.35)",
              }}
            >
              {/* Subtle top glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-25 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${RED}, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 block mb-1">
                      Booking Summary
                    </span>
                    <h4 className="text-xl font-black text-white tracking-tight">
                      {selectedPkg.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-0.5">
                      Estimated
                    </span>
                    <span
                      className="text-2xl font-black tracking-tight"
                      style={{ color: RED_LIGHT }}
                    >
                      {estimatedTotal}
                    </span>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-3 text-xs mb-6">
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-white/60">Vehicle:</span>
                    <span className="font-semibold text-white truncate max-w-[200px]">
                      {vehicle.trim() || "Not specified yet"} ({vehicleCategory})
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-white/60">Driveway Area:</span>
                    <span className="font-semibold text-white truncate max-w-[200px]">
                      {postcode.trim().toUpperCase() || "Not specified yet"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-white/60">Date &amp; Slot:</span>
                    <span className="font-semibold text-white">
                      {preferredDate} · {timeWindow.split(" ")[0]}
                    </span>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="pt-2 border-t border-white/10">
                      <span className="text-white/60 block mb-1.5">Add-ons selected:</span>
                      <div className="space-y-1">
                        {selectedAddons.map((id) => {
                          const item = ADDON_OPTIONS.find((a) => a.id === id);
                          if (!item) return null;
                          return (
                            <div
                              key={id}
                              className="flex items-center justify-between text-[11px] text-white/90 pl-2 border-l border-red-500"
                            >
                              <span>{item.name}</span>
                              <span className="font-mono text-red-400 font-bold">
                                {item.priceDisplay}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Key Package Perks */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-2">
                    Package Inclusions
                  </span>
                  <ul className="space-y-1.5 text-xs text-white/80">
                    {selectedPkg.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: RED_LIGHT }}
                        />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!validate()) {
                        e.preventDefault();
                        const el = document.getElementById("booking-form-card");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full py-3.5 px-5 rounded-full font-bold uppercase tracking-wider text-xs text-white flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <button
                    type="button"
                    onClick={copyDetailsToClipboard}
                    className="w-full py-3 px-5 rounded-full font-bold uppercase tracking-wider text-xs text-white/80 hover:text-white border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Message Text</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Contact & Guarantee Badges Card */}
            <div
              className="p-6 rounded-[28px] border space-y-4"
              style={{
                background: CREAM_BG,
                borderColor: BORDER_COLOR,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
                  style={{ background: RED }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8070] block">
                    Prefer to speak on the phone?
                  </span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="text-base font-bold text-[#0A0A0A] hover:underline"
                  >
                    Call Rhys on {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#DDD5C5] grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#5A5040]">
                  <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="font-semibold">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 text-[#5A5040]">
                  <Droplets className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold">Pure Water Onboard</span>
                </div>
                <div className="flex items-center gap-2 text-[#5A5040]">
                  <Zap className="w-4 h-4 text-yellow-600 shrink-0" />
                  <span className="font-semibold">Driveway Mobile</span>
                </div>
                <div className="flex items-center gap-2 text-[#5A5040]">
                  <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="font-semibold">5★ Google Rated</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
