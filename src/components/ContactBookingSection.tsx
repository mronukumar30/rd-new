import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Phone,
  Star,
  Check,
  Plus,
  ChevronDown,
  ChevronRight,
  Calendar,
  Clock,
} from "lucide-react";
import { COMPANY_DETAILS } from "../constants";

interface BookingPackage {
  id: string;
  name: string;
  priceDisplay: string;
  duration: string;
}

const PACKAGES_LIST: BookingPackage[] = [
  {
    id: "winter-protection",
    name: "Winter Protection Package",
    priceDisplay: "£60",
    duration: "2–2.5 hrs",
  },
  {
    id: "full-valet",
    name: "Full Valet Package",
    priceDisplay: "From £70",
    duration: "3–4 hrs",
  },
  {
    id: "maintenance",
    name: "Maintenance Plan",
    priceDisplay: "From £50",
    duration: "1.5–2 hrs",
  },
  {
    id: "deep-clean",
    name: "Deep Clean Package",
    priceDisplay: "From £120",
    duration: "4–5 hrs",
  },
  {
    id: "new-car-protection",
    name: "New Car Protection Package",
    priceDisplay: "From £250",
    duration: "3–4 hrs",
  },
  {
    id: "custom",
    name: "Custom / Not Sure",
    priceDisplay: "Quote on inspection",
    duration: "Flexible",
  },
];

const ADDON_OPTIONS = [
  {
    id: "glass-ceramic",
    name: "2-Year Glass Ceramic Coating",
    priceDisplay: "+£40",
    desc: "Hydrophobic rain-sheet coating",
  },
  {
    id: "convertible-roof",
    name: "Convertible Roof Deep Clean & Seal",
    priceDisplay: "+£40",
    desc: "Waterproof barrier + moss removal",
  },
  {
    id: "engine-bay",
    name: "Engine Bay Cleaned & Dressed",
    priceDisplay: "+£50",
    desc: "Degreasing + satin finish dressing",
  },
  {
    id: "pet-hair",
    name: "Heavy Pet Hair / Sand Treatment",
    priceDisplay: "+£20",
    desc: "Rubber brush + powered extraction",
  },
];

const TIME_SLOTS = [
  { id: "morning", label: "Morning", sub: "8am – 12pm" },
  { id: "afternoon", label: "Afternoon", sub: "12 – 5pm" },
  { id: "flexible", label: "Flexible", sub: "Any time" },
];

// Underline input component
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <label
        className="block text-[10px] font-mono uppercase tracking-[0.22em] font-bold mb-1.5"
        style={{ color: "#8A8070" }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-[11px] font-medium mt-1" style={{ color: "#DC2626" }}>
          {error}
        </p>
      )}
    </div>
  );
}

// A single underline-style text input
function LineInput({
  type = "text",
  value,
  onChange,
  placeholder,
  hasError,
  min,
}: {
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  hasError?: boolean;
  min?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      className="w-full bg-transparent text-sm font-medium pb-2.5 border-b-2 placeholder:text-[#C0B8A8] text-[#0A0A0A] focus:outline-none transition-colors duration-200"
      style={{
        borderColor: hasError ? "#DC2626" : "#DDD5C5",
      }}
      onFocus={(e) => {
        e.target.style.borderColor = "#DC2626";
      }}
      onBlur={(e) => {
        e.target.style.borderColor = hasError ? "#DC2626" : "#DDD5C5";
      }}
    />
  );
}

export default function ContactBookingSection() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("flexible");
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    "winter-protection"
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [addonsOpen, setAddonsOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const selectedPkg = useMemo(
    () =>
      PACKAGES_LIST.find((p) => p.id === selectedPackageId) || PACKAGES_LIST[0],
    [selectedPackageId]
  );

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const todayStr = new Date().toISOString().split("T")[0];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = "Name required";
    if (!phone.trim()) errs.phone = "Mobile / WhatsApp required";
    if (!postcode.trim()) errs.postcode = "Postcode or town required";
    if (!vehicle.trim()) errs.vehicle = "Car make & model required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const compileWhatsAppText = () => {
    const chosenAddons = selectedAddons
      .map((id) => {
        const item = ADDON_OPTIONS.find((a) => a.id === id);
        return item ? `+ ${item.name} (${item.priceDisplay})` : "";
      })
      .filter(Boolean);
    const addonsText =
      chosenAddons.length > 0 ? chosenAddons.join("\n  ") : "None";

    const timeLabel =
      TIME_SLOTS.find((t) => t.id === preferredTime)?.label || "Flexible";
    const timeSubLabel =
      TIME_SLOTS.find((t) => t.id === preferredTime)?.sub || "Any time";

    const dateText = preferredDate
      ? new Date(preferredDate).toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Date not specified";

    return (
      `🚗 *NEW VALET BOOKING ENQUIRY*\n\n` +
      `👤 *Customer Details:*\n` +
      `• Name: ${fullName.trim()}\n` +
      `• Mobile / WhatsApp: ${phone.trim()}\n` +
      `• Postcode / Town: ${postcode.trim().toUpperCase()}\n\n` +
      `🚙 *Vehicle:*\n` +
      `• Car: ${vehicle.trim()}\n\n` +
      `📅 *Preferred Appointment:*\n` +
      `• Date: ${dateText}\n` +
      `• Time: ${timeLabel} (${timeSubLabel})\n\n` +
      `✨ *Package & Addons:*\n` +
      `• Package: ${selectedPkg.name} (${selectedPkg.priceDisplay} · ${selectedPkg.duration})\n` +
      `• Optional Add-ons:\n  ${addonsText}\n\n` +
      `💬 Hi Rhys, I'd like to book this appointment with RD Valeting. Please confirm availability!`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const text = compileWhatsAppText();
      const url = `https://wa.me/447393682365?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#F5F0E8" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
        {/* ─── LEFT: Form Panel ─── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-20 py-16 lg:py-20"
          style={{ background: "#F5F0E8" }}
        >
          {/* Background large numeral */}
          <div
            className="absolute top-0 right-0 text-[220px] font-black leading-none select-none pointer-events-none"
            style={{ color: "rgba(220,38,38,0.04)", fontFamily: "Outfit, sans-serif" }}
            aria-hidden="true"
          >
            RD
          </div>

          {/* Eyebrow */}
          <p
            className="text-[11px] font-mono uppercase tracking-[0.28em] font-bold mb-5 relative z-10"
            style={{ color: "#DC2626" }}
          >
            Free Enquiry · No Obligation
          </p>

          {/* Heading */}
          <div className="mb-8 relative z-10">
            <h2
              className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tight"
              style={{ color: "#0A0A0A", fontFamily: "Outfit, sans-serif" }}
            >
              Book Your
              <br />
              <em
                className="not-italic"
                style={{
                  color: "#DC2626",
                  fontFamily: "Cormorant Garamond, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Mobile Valet.
              </em>
            </h2>
            <p
              className="text-sm mt-4 leading-relaxed max-w-xs"
              style={{ color: "#6E6455" }}
            >
              Fill in your details below. Rhys personally replies within the
              hour — no call centres, no waiting.
            </p>
          </div>

          {/* ── FORM ── */}
          <form
            onSubmit={handleWhatsAppSubmit}
            className="space-y-7 relative z-10 max-w-md"
          >
            {/* Step 01: Details */}
            <div>
              <p
                className="text-[10px] font-mono uppercase tracking-[0.22em] font-bold mb-4"
                style={{ color: "#B0A898" }}
              >
                01 / Your Details
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                <Field label="Full Name" error={errors.fullName}>
                  <LineInput
                    value={fullName}
                    onChange={(v) => {
                      setFullName(v);
                      if (errors.fullName)
                        setErrors((p) => ({ ...p, fullName: "" }));
                    }}
                    placeholder="e.g. James Smith"
                    hasError={!!errors.fullName}
                  />
                </Field>
                <Field label="Mobile / WhatsApp" error={errors.phone}>
                  <LineInput
                    type="tel"
                    value={phone}
                    onChange={(v) => {
                      setPhone(v);
                      if (errors.phone)
                        setErrors((p) => ({ ...p, phone: "" }));
                    }}
                    placeholder="07xxx xxxxxx"
                    hasError={!!errors.phone}
                  />
                </Field>
                <Field label="Postcode or Town" error={errors.postcode}>
                  <LineInput
                    value={postcode}
                    onChange={(v) => {
                      setPostcode(v);
                      if (errors.postcode)
                        setErrors((p) => ({ ...p, postcode: "" }));
                    }}
                    placeholder="e.g. SN1 or Swindon"
                    hasError={!!errors.postcode}
                  />
                </Field>
                <Field label="Car Make & Model" error={errors.vehicle}>
                  <LineInput
                    value={vehicle}
                    onChange={(v) => {
                      setVehicle(v);
                      if (errors.vehicle)
                        setErrors((p) => ({ ...p, vehicle: "" }));
                    }}
                    placeholder="e.g. Audi A5"
                    hasError={!!errors.vehicle}
                  />
                </Field>
              </div>
            </div>

            {/* Step 02: Date & Time */}
            <div>
              <p
                className="text-[10px] font-mono uppercase tracking-[0.22em] font-bold mb-4"
                style={{ color: "#B0A898" }}
              >
                02 / Preferred Date & Time
              </p>
              <div className="space-y-4">
                {/* Date picker */}
                <Field label="Preferred Date">
                  <div className="relative">
                    <LineInput
                      type="date"
                      value={preferredDate}
                      onChange={setPreferredDate}
                      min={todayStr}
                    />
                    <Calendar
                      className="absolute right-0 bottom-3 pointer-events-none w-4 h-4"
                      style={{ color: "#8A8070" }}
                    />
                  </div>
                </Field>

                {/* Time tiles */}
                <Field label="Preferred Time Window">
                  <div className="flex gap-2 mt-0.5">
                    {TIME_SLOTS.map((slot) => {
                      const active = preferredTime === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setPreferredTime(slot.id)}
                          className="flex-1 py-2.5 px-2 rounded-xl border text-center transition-all duration-200 cursor-pointer"
                          style={{
                            borderColor: active ? "#DC2626" : "#DDD5C5",
                            background: active
                              ? "rgba(220,38,38,0.07)"
                              : "transparent",
                          }}
                        >
                          <p
                            className="text-xs font-bold"
                            style={{
                              color: active ? "#DC2626" : "#0A0A0A",
                            }}
                          >
                            {slot.label}
                          </p>
                          <p
                            className="text-[10px] mt-0.5"
                            style={{ color: "#8A8070" }}
                          >
                            {slot.sub}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </Field>
              </div>
            </div>

            {/* Step 03: Package */}
            <div>
              <p
                className="text-[10px] font-mono uppercase tracking-[0.22em] font-bold mb-4"
                style={{ color: "#B0A898" }}
              >
                03 / Package & Add-ons
              </p>
              <div className="space-y-3">
                {/* Package select */}
                <Field label="Select Package">
                  <div className="relative">
                    <select
                      value={selectedPackageId}
                      onChange={(e) => setSelectedPackageId(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold pb-2.5 border-b-2 text-[#0A0A0A] focus:outline-none transition-colors duration-200 appearance-none pr-6 cursor-pointer"
                      style={{ borderColor: "#DDD5C5" }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#DC2626";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#DDD5C5";
                      }}
                    >
                      {PACKAGES_LIST.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                          {pkg.name} — {pkg.priceDisplay}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="absolute right-0 bottom-3 pointer-events-none w-4 h-4"
                      style={{ color: "#8A8070" }}
                    />
                  </div>
                </Field>

                {/* Add-ons accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setAddonsOpen(!addonsOpen)}
                    className="flex items-center justify-between w-full py-2.5 text-sm font-semibold transition-colors duration-150"
                    style={{ color: "#0A0A0A" }}
                  >
                    <span className="flex items-center gap-2">
                      <Plus
                        className="w-3.5 h-3.5"
                        style={{ color: "#DC2626" }}
                      />
                      Optional Add-ons
                      {selectedAddons.length > 0 && (
                        <span
                          className="text-xs font-mono font-bold"
                          style={{ color: "#DC2626" }}
                        >
                          ({selectedAddons.length})
                        </span>
                      )}
                    </span>
                    {addonsOpen ? (
                      <ChevronDown className="w-4 h-4" style={{ color: "#8A8070" }} />
                    ) : (
                      <ChevronRight className="w-4 h-4" style={{ color: "#8A8070" }} />
                    )}
                  </button>

                  <AnimatePresence>
                    {addonsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-1 space-y-2">
                          {ADDON_OPTIONS.map((addon) => {
                            const isChecked = selectedAddons.includes(addon.id);
                            return (
                              <div
                                key={addon.id}
                                onClick={() => toggleAddon(addon.id)}
                                className="flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all duration-150"
                                style={{
                                  borderColor: isChecked ? "#DC2626" : "#E8E2D8",
                                  background: isChecked
                                    ? "rgba(220,38,38,0.05)"
                                    : "rgba(255,255,255,0.6)",
                                }}
                              >
                                <div>
                                  <p
                                    className="text-xs font-bold"
                                    style={{ color: "#0A0A0A" }}
                                  >
                                    {addon.name}
                                  </p>
                                  <p
                                    className="text-[11px] mt-0.5"
                                    style={{ color: "#8A8070" }}
                                  >
                                    {addon.desc}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2.5 shrink-0 ml-3">
                                  <span
                                    className="text-xs font-mono font-bold"
                                    style={{ color: "#DC2626" }}
                                  >
                                    {addon.priceDisplay}
                                  </span>
                                  <div
                                    className="w-5 h-5 rounded flex items-center justify-center border transition-all"
                                    style={{
                                      borderColor: isChecked ? "#DC2626" : "#C0B8A8",
                                      background: isChecked ? "#DC2626" : "white",
                                      color: "white",
                                    }}
                                  >
                                    {isChecked && (
                                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-1">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: "#25D366",
                  boxShadow: "0 8px 28px rgba(37,211,102,0.30)",
                }}
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>Send Booking to Rhys via WhatsApp</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <p
                className="text-center text-xs mt-2.5"
                style={{ color: "#A09888" }}
              >
                Opens WhatsApp with your details pre-filled. No spam, ever.
              </p>
            </div>
          </form>

          {/* Guarantee strip */}
          <div
            className="mt-10 pt-7 border-t relative z-10 max-w-md"
            style={{ borderColor: "#DDD5C5" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "rgba(220,38,38,0.09)" }}
              >
                <ShieldCheck className="w-5 h-5" style={{ color: "#DC2626" }} />
              </div>
              <div>
                <p
                  className="text-sm font-black tracking-tight"
                  style={{ color: "#0A0A0A" }}
                >
                  100% Satisfaction Guarantee
                </p>
                <p
                  className="text-xs leading-relaxed mt-1"
                  style={{ color: "#6E6455" }}
                >
                  Not happy with any aspect of your valet? Rhys will make it
                  right before leaving — no arguments, no call-backs.
                </p>
              </div>
            </div>

            <div
              className="flex items-center gap-1.5 mt-4"
              style={{ color: "#A09888" }}
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="text-xs">Prefer to call?&nbsp;</span>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="text-xs font-bold transition-colors hover:underline"
                style={{ color: "#0A0A0A" }}
              >
                {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>
        </motion.div>

        {/* ─── RIGHT: Photo Panel ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative min-h-[480px] lg:min-h-full overflow-hidden"
        >
          {/* Background photo */}
          <img
            src="/audi-a5-hero.jpg"
            alt="Rhys Davis valeting an Audi A5 — RD Valeting Swindon"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />

          {/* Dark gradients */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.08) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 60%)",
            }}
          />

          {/* ── Guarantee Seal (top-right) ── */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
            <div
              className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center"
              style={{
                border: "2px solid rgba(255,255,255,0.9)",
                borderRadius: "50%",
              }}
            >
              {/* Outer ring dashes */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "1px dashed rgba(255,255,255,0.45)",
                  transform: "scale(1.1)",
                }}
              />
              {/* Inner content */}
              <div className="text-center px-1">
                <p
                  className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] leading-none"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  100%
                </p>
                <p
                  className="text-[13px] sm:text-[15px] font-black leading-tight my-0.5"
                  style={{ color: "white" }}
                >
                  Satis-
                  <br />
                  faction
                </p>
                <p
                  className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] leading-none"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Guarantee
                </p>
              </div>
            </div>
          </div>

          {/* ── 5 stars top-left ── */}
          <div
            className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span
              className="text-xs font-semibold"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              5.0 Rated
            </span>
          </div>

          {/* ── Bottom overlay ── */}
          <div className="absolute bottom-0 left-0 right-0 px-7 sm:px-10 pb-8 sm:pb-10">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Fully Insured", "Mobile to You", "Owner Operated", "Pure Water Rinse"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    {badge}
                  </span>
                )
              )}
            </div>

            {/* Name & title */}
            <div>
              <p
                className="text-[11px] font-mono uppercase tracking-[0.22em] mb-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Owner & Master Detailer
              </p>
              <p
                className="text-4xl sm:text-5xl font-black tracking-tight leading-none"
                style={{ color: "white", fontFamily: "Outfit, sans-serif" }}
              >
                Rhys Davis
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                RD Valeting · Swindon & Wiltshire
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
