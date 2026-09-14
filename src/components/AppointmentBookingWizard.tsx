import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Car,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { COMPANY_DETAILS } from "../constants";

const RED = "#DC2626";
const RED_LIGHT = "#EF4444";

interface BookingState {
  carType: string;
  service: string;
  postcode: string;
  fullname: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
}

const CAR_TYPES = [
  {
    id: "exotic",
    name: "Exotic / Supercar",
    examples: "Porsche, Ferrari, Aston Martin",
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-10 stroke-current fill-none" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M5,32 L20,32 C23,28 27,28 30,32 L90,32 C93,28 97,28 100,32 L115,32 C118,32 119,30 117,28 L110,21 C108,19 104,18 101,18 L88,18 C83,18 75,13 70,11 L48,11 C40,11 32,15 28,18 L10,24 C7,26 5,29 5,32 Z" />
        <circle cx="25" cy="32" r="5" className="fill-white dark:fill-zinc-800" strokeWidth="1.8" />
        <circle cx="95" cy="32" r="5" className="fill-white dark:fill-zinc-800" strokeWidth="1.8" />
        <path d="M52,14 L68,14 L65,19 L48,19 Z" strokeWidth="1.2" />
        <path d="M38,19 L45,19 L42,23 L34,23 Z" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: "luxury",
    name: "Luxury / Premium",
    examples: "BMW, Audi, Mercedes, Lexus",
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-10 stroke-current fill-none" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M5,30 L18,30 C21,26 26,26 29,30 L91,30 C94,26 99,26 102,30 L115,30 C117,30 118,28 117,26 L112,18 C110,15 106,14 102,14 L75,14 C72,14 65,9 60,9 L38,9 C33,9 25,14 22,15 L8,20 C6,21 5,23 5,26 Z" />
        <circle cx="23.5" cy="30" r="5" className="fill-white dark:fill-zinc-800" strokeWidth="1.8" />
        <circle cx="96.5" cy="30" r="5" className="fill-white dark:fill-zinc-800" strokeWidth="1.8" />
        <path d="M42,12 L58,12 L56,19 L40,19 Z" strokeWidth="1.2" />
        <path d="M62,12 L75,12 L73,19 L60,19 Z" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: "standard",
    name: "Standard Car",
    examples: "Hatchback, Saloon, Estate",
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-10 stroke-current fill-none" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M6,31 L18,31 C21,27 25,27 28,31 L92,31 C95,27 99,27 102,31 L114,31 C116,31 117,29 116,27 L111,21 C110,19 108,18 106,18 L90,18 C87,18 78,11 72,11 L40,11 C35,11 26,16 23,17 L9,22 C7,23 6,25 6,27 Z" />
        <circle cx="23" cy="31" r="5" className="fill-white dark:fill-zinc-800" strokeWidth="1.8" />
        <circle cx="97" cy="31" r="5" className="fill-white dark:fill-zinc-800" strokeWidth="1.8" />
        <path d="M44,14 L70,14 L67,20 L41,20 Z" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: "suv",
    name: "SUV / 4x4 / Van",
    examples: "Range Rover, X5, Defender, Commercial",
    svg: (
      <svg viewBox="0 0 120 40" className="w-full h-10 stroke-current fill-none" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M5,31 L18,31 C21,27 25,27 28,31 L92,31 C95,27 99,27 102,31 L114,31 C116,31 117,29 117,27 L114,14 C113,11 110,10 107,10 L48,10 C42,10 32,15 28,17 L9,22 C7,23 5,25 5,27 Z" />
        <circle cx="23" cy="31" r="5" className="fill-white dark:fill-zinc-800" strokeWidth="1.8" />
        <circle cx="97" cy="31" r="5" className="fill-white dark:fill-zinc-800" strokeWidth="1.8" />
        <path d="M45,13 L75,13 L75,20 L42,20 Z" strokeWidth="1.2" />
        <path d="M79,13 L106,13 C108,13 109,14 109,16 L108,20 L79,20 Z" strokeWidth="1.2" />
      </svg>
    ),
  },
];

const PACKAGES = [
  { name: "Maintenance Plan — From £50", val: "Maintenance Plan (From £50)", desc: "Regular upkeep every 2–4 weeks · Snow foam, safe 2-bucket wash, sealant, tyre dressing & air freshener (1.5–2 hrs)" },
  { name: "Winter Protection Package — £60", val: "Winter Protection Package (£60)", desc: "Seasonal defence · 3-bucket wash, arch blast, decon & tar removal, rain repellent, wheel sealant & 6-month sealant (£60)" },
  { name: "Full Valet Package — From £70", val: "Full Valet Package (From £70)", desc: "Comprehensive reset · 3-bucket safe wash, shampoo carpets, steam/leather seats, tar removal & 4-month sealant (3–4 hrs)" },
  { name: "New Car Protection Package — From £100", val: "New Car Protection Package (From £100)", desc: "Showroom preservation · Safe wash, decon, interior vacuum & seal/leather treat, 1-yr ceramic on paint & glass (From £100)" },
  { name: "Deep Clean Package — From £120", val: "Deep Clean Package (From £120)", desc: "Full restoration · Wet vac extraction, pet hair & stains removed, steam interior, decontamination & air blast (4–5 hrs)" },
];

const TIME_SLOTS = [
  { id: "morning", name: "Morning", hours: "8:00 AM – 12:00 PM" },
  { id: "afternoon", name: "Afternoon", hours: "12:00 PM – 4:00 PM" },
  { id: "late", name: "Late Afternoon", hours: "4:00 PM – 7:00 PM" },
];

export default function AppointmentBookingWizard() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  // Default date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split("T")[0];

  const [booking, setBooking] = useState<BookingState>({
    carType: "Exotic / Supercar",
    service: "Maintenance Wash (£50)",
    postcode: "",
    fullname: "",
    email: "",
    phone: "",
    date: defaultDateStr,
    timeSlot: "Morning (8:00 AM – 12:00 PM)",
  });

  const validateStep1 = () => {
    const errs: { [k: string]: string } = {};
    if (!booking.service) errs.service = "Please select a service package";
    if (!booking.postcode.trim()) errs.postcode = "Please enter your postcode or town";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: { [k: string]: string } = {};
    if (!booking.fullname.trim()) errs.fullname = "Please enter your full name";
    if (!booking.email.trim() || !booking.email.includes("@")) errs.email = "Please enter a valid email address";
    if (!booking.phone.trim() || booking.phone.length < 9) errs.phone = "Please enter a valid phone number";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: { [k: string]: string } = {};
    if (!booking.date) errs.date = "Please select a preferred date";
    if (!booking.timeSlot) errs.timeSlot = "Please select a time slot";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => (s - 1) as any);
  };

  const resetForm = () => {
    setBooking({
      carType: "Exotic / Supercar",
      service: "Maintenance Wash (£50)",
      postcode: "",
      fullname: "",
      email: "",
      phone: "",
      date: defaultDateStr,
      timeSlot: "Morning (8:00 AM – 12:00 PM)",
    });
    setStep(1);
    setErrors({});
  };

  // Generate WhatsApp message
  const generateWhatsAppUrl = () => {
    const text = `Hello Rhys, I would like to book a mobile valeting appointment with RD Valeting:
• Service: ${booking.service}
• Vehicle: ${booking.carType}
• Location/Postcode: ${booking.postcode}
• Name: ${booking.fullname}
• Phone: ${booking.phone}
• Email: ${booking.email}
• Preferred Date: ${booking.date}
• Preferred Slot: ${booking.timeSlot}

Please let me know if this slot is available. Thank you!`;
    return `https://wa.me/447393682365?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="appointment" className="py-24 px-6 md:px-12 relative overflow-hidden" style={{ background: "#EDE8DF" }}>
      {/* Background glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${RED}, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] font-bold block mb-3" style={{ color: RED }}>
            ONLINE BOOKING SYSTEM
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ color: "#0A0A0A" }}>
            Book Your Mobile Valet. <br className="hidden md:block" />
            <span className="italic font-serif font-light" style={{ color: RED }}>
              We Come To You.
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#7A6E5F" }}>
            Select your vehicle, pick a package, and schedule your appointment in 60 seconds. Direct confirmation with Rhys on WhatsApp.
          </p>
        </div>

        {/* Main Card */}
        <div
          className="rounded-[36px] overflow-hidden shadow-2xl border transition-all"
          style={{
            background: "#F5F0E8",
            borderColor: "#DDD5C5",
            boxShadow: "0 25px 70px rgba(10,10,10,0.08)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Column */}
            <div
              className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between"
              style={{
                background: "#0A0A0A",
                borderRight: "1px solid rgba(220,38,38,0.2)",
              }}
            >
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 text-[10px] font-bold uppercase tracking-widest text-white"
                  style={{ background: `linear-gradient(135deg, ${RED}, ${RED_LIGHT})` }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Instant Confirmation
                </div>
                <h3 className="text-3xl font-black italic tracking-tight text-white mb-4 uppercase leading-snug">
                  Your car looked after. <br />
                  <span style={{ color: RED_LIGHT }}>Properly.</span>
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-8">
                  No queues. No dropping off your vehicle. Rhys arrives with full onboard equipment, premium products, and five years of meticulous detailing experience.
                </p>

                <div className="space-y-5 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(220,38,38,0.15)", border: `1px solid rgba(220,38,38,0.3)` }}>
                      <Car className="w-4 h-4" style={{ color: RED_LIGHT }} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white leading-tight">100% Mobile Service</h5>
                      <p className="text-xs text-white/50 mt-0.5">We come right to your driveway or office</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(220,38,38,0.15)", border: `1px solid rgba(220,38,38,0.3)` }}>
                      <ShieldCheck className="w-4 h-4" style={{ color: RED_LIGHT }} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white leading-tight">Fully Insured & Certified</h5>
                      <p className="text-xs text-white/50 mt-0.5">Complete peace of mind for prestige & daily cars</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(220,38,38,0.15)", border: `1px solid rgba(220,38,38,0.3)` }}>
                      <MapPin className="w-4 h-4" style={{ color: RED_LIGHT }} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white leading-tight">Swindon & Surrounding</h5>
                      <p className="text-xs text-white/50 mt-0.5">Wiltshire, Cotswolds & nationwide for full details</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">Direct Line</span>
                  <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-sm font-bold text-white hover:underline">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">Google Rating</span>
                  <span className="text-sm font-bold text-yellow-500">★ 4.9 / 5 (57+ Reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Form Wizard Column */}
            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between">
              {/* Stepper Tabs (hidden on success step 4) */}
              {step < 4 && (
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-[#DDD5C5]">
                  {[
                    { num: 1, label: "Your Vehicle" },
                    { num: 2, label: "Your Details" },
                    { num: 3, label: "Preferred Time" },
                  ].map((s) => (
                    <div key={s.num} className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                          step === s.num
                            ? "text-white shadow-lg scale-110"
                            : step > s.num
                            ? "bg-zinc-800 text-white"
                            : "bg-[#DDD5C5] text-[#7A6E5F]"
                        }`}
                        style={step === s.num ? { background: `linear-gradient(135deg, ${RED}, ${RED_LIGHT})` } : {}}
                      >
                        {step > s.num ? "✓" : s.num}
                      </div>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${
                          step === s.num ? "text-black" : "text-[#8A8070]"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Form Content Steps */}
              <div className="min-h-[420px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {/* STEP 1: Your Vehicle & Service */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div>
                        <h4 className="text-xl font-bold text-[#0A0A0A] mb-1">What vehicle do you drive?</h4>
                        <p className="text-xs text-[#8A8070]">Select the category that best matches your car.</p>
                      </div>

                      {/* Car Grid Selector */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {CAR_TYPES.map((c) => {
                          const isSelected = booking.carType === c.name;
                          return (
                            <div
                              key={c.id}
                              onClick={() => setBooking({ ...booking, carType: c.name })}
                              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                                isSelected
                                  ? "border-red-600 bg-white shadow-md"
                                  : "border-[#DDD5C5] bg-[#EDE8DF]/60 hover:border-zinc-400"
                              }`}
                              style={isSelected ? { borderColor: RED } : {}}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className={`${isSelected ? "text-red-600" : "text-zinc-600"}`}>{c.svg}</div>
                                {isSelected && (
                                  <div
                                    className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                                    style={{ background: RED }}
                                  >
                                    ✓
                                  </div>
                                )}
                              </div>
                              <div>
                                <h5 className="font-bold text-sm text-[#0A0A0A]">{c.name}</h5>
                                <p className="text-[10px] font-mono text-[#8A8070] truncate">{c.examples}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Service & Postcode Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                            Select Package *
                          </label>
                          <select
                            value={booking.service}
                            onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#DDD5C5] text-sm font-semibold text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm"
                          >
                            {PACKAGES.map((pkg) => (
                              <option key={pkg.name} value={pkg.val}>
                                {pkg.name}
                              </option>
                            ))}
                          </select>
                          {errors.service && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.service}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                            Driveway Postcode / Area *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={booking.postcode}
                              placeholder="e.g. SN1 2AB or Swindon"
                              onChange={(e) => setBooking({ ...booking, postcode: e.target.value })}
                              className="w-full px-4 py-3.5 pl-10 rounded-2xl bg-white border border-[#DDD5C5] text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm font-medium"
                            />
                            <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          </div>
                          {errors.postcode && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.postcode}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Your Details */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-xl font-bold text-[#0A0A0A] mb-1">Tell us about yourself</h4>
                        <p className="text-xs text-[#8A8070]">Rhys will contact you directly to confirm your booking.</p>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                            Full Name *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={booking.fullname}
                              placeholder="John Smith"
                              onChange={(e) => setBooking({ ...booking, fullname: e.target.value })}
                              className="w-full px-4 py-3.5 pl-10 rounded-2xl bg-white border border-[#DDD5C5] text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm font-medium"
                            />
                            <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          </div>
                          {errors.fullname && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.fullname}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                            Mobile Phone Number *
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              value={booking.phone}
                              placeholder="e.g. 07393 682 365"
                              onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                              className="w-full px-4 py-3.5 pl-10 rounded-2xl bg-white border border-[#DDD5C5] text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm font-medium"
                            />
                            <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          </div>
                          {errors.phone && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              value={booking.email}
                              placeholder="john@example.co.uk"
                              onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                              className="w-full px-4 py-3.5 pl-10 rounded-2xl bg-white border border-[#DDD5C5] text-sm text-[#0A0A0A] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm font-medium"
                            />
                            <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          </div>
                          {errors.email && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.email}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Preferred Date & Time */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-xl font-bold text-[#0A0A0A] mb-1">When would you like us to come?</h4>
                        <p className="text-xs text-[#8A8070]">Select a preferred date and arrival window.</p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-2">
                            Preferred Date *
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              min={new Date().toISOString().split("T")[0]}
                              value={booking.date}
                              onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                              className="w-full px-4 py-3.5 pl-10 rounded-2xl bg-white border border-[#DDD5C5] text-sm text-[#0A0A0A] focus:outline-none focus:ring-2 focus:ring-red-600 shadow-sm font-medium"
                            />
                            <Calendar className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          </div>
                          {errors.date && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.date}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#0A0A0A] mb-3">
                            Preferred Arrival Window *
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {TIME_SLOTS.map((slot) => {
                              const isSelected = booking.timeSlot.includes(slot.name);
                              return (
                                <div
                                  key={slot.id}
                                  onClick={() => setBooking({ ...booking, timeSlot: `${slot.name} (${slot.hours})` })}
                                  className={`p-4 rounded-2xl border-2 text-center cursor-pointer transition-all ${
                                    isSelected
                                      ? "border-red-600 bg-white shadow-md"
                                      : "border-[#DDD5C5] bg-[#EDE8DF]/60 hover:border-zinc-400"
                                  }`}
                                  style={isSelected ? { borderColor: RED } : {}}
                                >
                                  <Clock className={`w-4 h-4 mx-auto mb-1.5 ${isSelected ? "text-red-600" : "text-zinc-500"}`} />
                                  <h6 className="font-bold text-sm text-[#0A0A0A]">{slot.name}</h6>
                                  <p className="text-[10px] font-mono text-[#8A8070] mt-0.5">{slot.hours}</p>
                                </div>
                              );
                            })}
                          </div>
                          {errors.timeSlot && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.timeSlot}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: Success & WhatsApp Summary */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-6"
                    >
                      <div
                        className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white mb-5 shadow-xl"
                        style={{ background: `linear-gradient(135deg, ${RED}, ${RED_LIGHT})` }}
                      >
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-2">Almost Done! 🚀</h4>
                      <p className="text-sm text-[#7A6E5F] max-w-md mx-auto mb-6">
                        Thank you, <strong className="text-black">{booking.fullname}</strong>! Your booking summary is ready for your{" "}
                        <strong className="text-black">{booking.carType}</strong>.
                      </p>

                      {/* Summary Box */}
                      <div
                        className="p-6 rounded-2xl text-left max-w-md mx-auto mb-6 space-y-2.5 text-xs border"
                        style={{ background: "#EDE8DF", borderColor: "#DDD5C5" }}
                      >
                        <div className="flex justify-between pb-2 border-b border-[#DDD5C5]">
                          <span className="text-[#8A8070] font-medium">Selected Service:</span>
                          <span className="font-bold text-[#0A0A0A]">{booking.service}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-[#DDD5C5]">
                          <span className="text-[#8A8070] font-medium">Vehicle Category:</span>
                          <span className="font-bold text-[#0A0A0A]">{booking.carType}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-[#DDD5C5]">
                          <span className="text-[#8A8070] font-medium">Postcode / Area:</span>
                          <span className="font-bold text-[#0A0A0A]">{booking.postcode}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-[#DDD5C5]">
                          <span className="text-[#8A8070] font-medium">Preferred Date:</span>
                          <span className="font-bold text-[#0A0A0A]">{booking.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8A8070] font-medium">Arrival Slot:</span>
                          <span className="font-bold text-[#0A0A0A]">{booking.timeSlot}</span>
                        </div>
                      </div>

                      <p className="text-xs font-bold mb-6" style={{ color: RED }}>
                        ⚡ Tap the button below to send this directly to Rhys on WhatsApp for immediate confirmation!
                      </p>

                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                          href={generateWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs text-white shadow-xl hover:scale-105 transition-all inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D]"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Confirm via WhatsApp
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <button
                          onClick={resetForm}
                          className="px-6 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-zinc-200 border border-[#DDD5C5] text-[#0A0A0A]"
                        >
                          Book Another Vehicle
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Navigation Buttons (Step 1-3) */}
                {step < 4 && (
                  <div className="flex items-center justify-between pt-8 border-t border-[#DDD5C5] mt-8">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border border-[#DDD5C5] hover:bg-white transition-all inline-flex items-center gap-2 text-[#0A0A0A]"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${RED}, ${RED_LIGHT})` }}
                    >
                      {step === 3 ? "Review Booking" : "Continue"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
