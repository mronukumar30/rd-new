import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Shield,
  ThumbsUp,
  Zap,
  Quote,
  MapPin,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { cn } from "../lib/utils";
import { COMPANY_DETAILS } from "../constants";

interface TransformationCard {
  id: string;
  category: string;
  tag: string;
  title: string;
  vehicle: string;
  service: string;
  location: string;
  duration: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  highlights: string[];
  metrics: { label: string; value: string; unit?: string }[];
  seoKeywords: string[];
}

const TRANSFORMATIONS: TransformationCard[] = [
  {
    id: "paint-correction",
    category: "Paint Correction",
    tag: "Most Popular",
    title: "Swirl Mark & Scratch Elimination",
    vehicle: "Mercedes-Benz E-Class AMG Line",
    service: "Stage 2 Paint Correction + Ceramic Shield",
    location: "Swindon, Wiltshire",
    duration: "8 Hours",
    description: "Severe circular swirl marks, spiderweb scratches, and oxidised clear coat completely eradicated under professional LED detailing lights leaving a crystal-clear, deep liquid-mirror reflection that exceeds showroom standards.",
    beforeImg: "/transformations/paint_before.jpg",
    afterImg: "/transformations/paint_after.jpg",
    highlights: [
      "95%+ Swirl & Scratch Defect Removal",
      "Liquid-Gloss Mirror Reflection Restored",
      "3-Year Gtechniq Ceramic Coating Applied",
      "Full Paint Depth Gauge Analysis",
    ],
    metrics: [
      { label: "Defects Removed", value: "95", unit: "%+" },
      { label: "Gloss Boost", value: "+40", unit: "%" },
      { label: "Protection", value: "3", unit: "Yrs" },
    ],
    seoKeywords: ["paint correction Swindon", "swirl mark removal Wiltshire", "ceramic coating Swindon"],
  },
  {
    id: "alloy-wheels",
    category: "Wheel & Brake Detail",
    tag: "Deep Clean",
    title: "Baked Brake Dust & Tar Restoration",
    vehicle: "Porsche 911 Carrera GTS",
    service: "Wheel Arch & Deep Alloy Decontamination",
    location: "Cirencester, Wiltshire",
    duration: "4 Hours",
    description: "Months of baked-on metallic brake dust, road tar, and iron fallout safely dissolved using non-acidic chemistry, followed by barrel deep cleaning, caliper restoration, and rich satin tyre dressing.",
    beforeImg: "/transformations/wheel_before.jpg",
    afterImg: "/transformations/wheel_after.jpg",
    highlights: [
      "Non-Acidic Iron Fallout Dissolution",
      "Inner Barrel & Brake Caliper Restored",
      "Hydrophobic Wheel Sealant Applied",
      "Satin OEM Tyre Dressing Finish",
    ],
    metrics: [
      { label: "Brake Dust", value: "100", unit: "% Gone" },
      { label: "Calipers", value: "Factory", unit: "Clean" },
      { label: "Tyre Finish", value: "Satin", unit: "OEM" },
    ],
    seoKeywords: ["alloy wheel cleaning Swindon", "brake dust removal Wiltshire", "mobile wheel detail"],
  },
  {
    id: "interior-leather",
    category: "Interior Deep Clean",
    tag: "Premium Detail",
    title: "Leather Cockpit & Deep Extraction",
    vehicle: "Porsche 911 Carrera Cockpit",
    service: "Interior Deep Extraction & Leather Care",
    location: "Swindon, Wiltshire",
    duration: "5 Hours",
    description: "Greasy, shiny, oil-stained driver leather seat and crumb-filled perforations steam extracted and nourished back to sterile OEM matte perfection. Antibacterial treatment leaves cabin hygienically clean and odour-free.",
    beforeImg: "/transformations/interior_before.jpg",
    afterImg: "/transformations/interior_after.jpg",
    highlights: [
      "OEM Matte Leather Restored — Zero Greasy Shine",
      "Crevice Steam Extraction & Deep Vacuum",
      "Antibacterial Disinfection & Conditioning",
      "Odour Elimination Treatment",
    ],
    metrics: [
      { label: "Leather Feel", value: "Matte", unit: "OEM" },
      { label: "Bacteria", value: "100", unit: "% Gone" },
      { label: "Crevices", value: "Spot-", unit: "less" },
    ],
    seoKeywords: ["interior car detail Swindon", "leather seat cleaning Wiltshire", "mobile interior valet"],
  },
  {
    id: "exterior-decon",
    category: "Full Exterior Valet",
    tag: "Full Reset",
    title: "Road Grime & Winter Salt Reset",
    vehicle: "Audi RS6 Avant Quattro",
    service: "Full Mobile Deep Clean Valet",
    location: "Wootton Bassett, Wiltshire",
    duration: "4 Hours",
    description: "Caked-on country road mud, grit, and winter salt stripped using pre-wash snow foam, multi-bucket contact wash, and high-gloss protective sealant — a complete exterior decontamination with zero paint marring.",
    beforeImg: "/transformations/exterior_before.jpg",
    afterImg: "/transformations/exterior_after.jpg",
    highlights: [
      "Touchless Snow Foam Pre-Wash",
      "Safe Two-Bucket Grit Guard Contact Wash",
      "Showroom Gloss Sealant & Glass Treatment",
      "Tyre & Trim Dressing Applied",
    ],
    metrics: [
      { label: "Road Salt & Mud", value: "100", unit: "% Gone" },
      { label: "Paint Safety", value: "Zero", unit: "Swirls" },
      { label: "Beading", value: "Active", unit: "Hydro" },
    ],
    seoKeywords: ["exterior car valet Swindon", "mobile car wash Wiltshire", "full car valet near me"],
  },
];

function BeforeAfterSlider({ item }: { item: TransformationCard }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    handlePointerMove(e.clientX);
  };
  const handlePointerMoveEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handlePointerMove(e.clientX);
  };
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMoveEvent}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none group bg-neutral-900"
      aria-label={`Before and after comparison for ${item.title}`}
    >
      <img src={item.afterImg} alt={`After ${item.service} — ${item.vehicle} | RD Valeting Swindon`} className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable={false} loading="lazy" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src={item.beforeImg} alt={`Before ${item.service} — ${item.vehicle} | RD Valeting Swindon`} className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none" draggable={false} loading="lazy" />
      </div>
      <div className={cn("absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 pointer-events-none transition-opacity", sliderPos < 12 ? "opacity-20" : "opacity-100")}>
        <span className="w-2 h-2 rounded-full bg-red-500" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Before</span>
      </div>
      <div className={cn("absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 pointer-events-none transition-opacity", sliderPos > 88 ? "opacity-20" : "opacity-100")}>
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-[10px] font-bold uppercase tracking-wider">After</span>
      </div>
      <div className="absolute top-0 bottom-0 z-30 pointer-events-none" style={{ left: `${sliderPos}%` }}>
        <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.9),0_0_20px_rgba(239,43,45,0.5)]" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black/90 border-2 border-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <div className="flex items-center gap-0.5 text-white text-[9px] font-bold"><span>?</span><span className="w-px h-3 bg-white/50 mx-0.5" /><span>?</span></div>
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/80 text-[9px] uppercase font-mono tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">Drag to compare</div>
    </div>
  );
}

function TransformCard({ item, index }: { item: TransformationCard; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-gray-100 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] transition-all duration-500"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[#EF2B2D] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">{item.tag}</div>
      <div className="p-3 pb-0"><BeforeAfterSlider item={item} /></div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#EF2B2D]">{item.category}</span>
          <span className="flex items-center gap-1 text-[10px] text-gray-400 font-medium"><MapPin className="w-3 h-3" />{item.location}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight mb-1 leading-snug" itemProp="name">{item.title}</h3>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-gray-500 font-medium">{item.vehicle}</span>
          <span className="w-px h-3 bg-gray-200" />
          <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="w-3 h-3" /> {item.duration}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4" itemProp="description">{item.description}</p>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {item.metrics.map((m, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-2.5 text-center">
              <p className="text-sm font-extrabold text-gray-900 leading-tight">{m.value}<span className="text-[10px] font-semibold text-[#EF2B2D] ml-0.5">{m.unit}</span></p>
              <p className="text-[9px] text-gray-400 uppercase font-mono tracking-wider mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1.5 mb-5">
          {item.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#EF2B2D] flex-shrink-0 mt-0.5" />
              <span className="text-xs text-gray-700 font-medium">{h}</span>
            </div>
          ))}
        </div>
        <a href={COMPANY_DETAILS.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#EF2B2D] hover:bg-[#d92224] text-white text-sm font-bold transition-all duration-300 shadow-[0_6px_20px_rgba(239,43,45,0.3)] hover:shadow-[0_10px_28px_rgba(239,43,45,0.45)] group/btn" aria-label={`Book ${item.service} with RD Valeting`}>
          <span>Book This Service</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

function TestimonialStrip() {
  const [active, setActive] = useState(0);
  const reviews = [
    { name: "James R.", car: "Porsche 911 Owner", text: "Absolutely fantastic full valet by Rhys. The car looks better than when I bought it — spotless inside and out with amazing attention to detail. Friendly, professional service. Would highly recommend RD Valeting to anyone.", stars: 5 },
    { name: "Amanda S.", car: "Audi A4 Owner", text: "Excellent valet done on my car by Rhys. Looks brand new and smells amazing! A highly thorough and professional job. Definitely recommend to anyone who values their vehicle.", stars: 5 },
    { name: "Margaret & John", car: "Mercedes E-Class Owners", text: "Rhys was great — very careful and left our pride and joy looking like new. Prompt arrival, polite demeanor and an astonishing standard of work. Superb mobile valeting service.", stars: 5 },
    { name: "Paul B.", car: "Porsche Boxster S Owner", text: "Did a brilliant job on my treasured Boxster S. I would have no hesitation in recommending him. Great job, great price, great service — looking forward to the next valet!", stars: 5 },
  ];
  return (
    <div className="relative bg-gray-950 rounded-3xl overflow-hidden p-6 sm:p-8 h-full flex flex-col justify-between">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#EF2B2D]/10 rounded-full blur-3xl" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EF2B2D] mb-1">Verified Customer Reviews</p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">What Clients Say After Their Detail</h3>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
            <span className="ml-2 text-sm font-bold text-white">5.0</span>
            <span className="text-xs text-gray-400 ml-1">Google</span>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="flex-1" itemScope itemType="https://schema.org/Review">
            <Quote className="w-8 h-8 text-[#EF2B2D]/30 mb-2" />
            <blockquote className="text-sm sm:text-base text-gray-300 leading-relaxed italic mb-5" itemProp="reviewBody">"{reviews[active].text}"</blockquote>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EF2B2D]/20 border border-[#EF2B2D]/30 flex items-center justify-center text-[#EF2B2D] font-bold text-sm flex-shrink-0">{reviews[active].name[0]}</div>
              <div><p className="text-sm font-bold text-white" itemProp="author">{reviews[active].name}</p><p className="text-xs text-gray-400">{reviews[active].car}</p></div>
              <div className="ml-auto flex items-center gap-0.5">{[...Array(reviews[active].stars)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={cn("rounded-full transition-all duration-300", active === i ? "w-6 h-2 bg-[#EF2B2D]" : "w-2 h-2 bg-white/20 hover:bg-white/40")} aria-label={`Review ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AuthorityBar() {
  const badges = [
    { icon: BadgeCheck, title: "Fully Insured & Professional", sub: "Comprehensive public liability insurance on every job" },
    { icon: Shield, title: "100% Satisfaction Guarantee", sub: "Not happy? We return and fix it — free of charge" },
    { icon: ThumbsUp, title: "5-Star Rated on Google", sub: "150+ verified reviews from real local clients" },
    { icon: Zap, title: "Premium-Grade Products Only", sub: "Gtechniq, Koch Chemie & Meguiar's professional range" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {badges.map((b, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }} className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group">
          <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors"><b.icon className="w-5 h-5 text-[#EF2B2D]" /></div>
          <div><p className="text-sm font-bold text-gray-900 leading-snug mb-0.5">{b.title}</p><p className="text-xs text-gray-500 leading-relaxed">{b.sub}</p></div>
        </motion.div>
      ))}
    </div>
  );
}

export default function BeforeAfterShowcase() {
  useEffect(() => {
    TRANSFORMATIONS.forEach((t) => {
      const a = new window.Image(); a.src = t.beforeImg;
      const b = new window.Image(); b.src = t.afterImg;
    });
  }, []);

  const TRUST_STATS = [
    { value: "150+", label: "Transformations", icon: Award },
    { value: "5.0?", label: "Google Rating", icon: Star },
    { value: "100%", label: "Satisfaction Guarantee", icon: Shield },
    { value: "Mobile", label: "We Come to You", icon: MapPin },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 overflow-hidden bg-[#F8F8F8]"
      aria-label="Before and after car detailing results by RD Valeting Swindon"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(239,43,45,0.04),transparent)]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,#999 39px,#999 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,#999 39px,#999 40px)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-xs font-bold uppercase tracking-[0.22em] text-[#EF2B2D] mb-3">
            Real Results · Zero Filters · Zero Compromise
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight" itemProp="name">
            The Proof Is In The{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#EF2B2D]">Reflection.</span>
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#EF2B2D]/30 rounded-full" />
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.16 }} className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto" itemProp="description">
            Swindon & Wiltshire's most trusted mobile car detailing service. Drag each slider to see the exact transformation — real vehicles, real results, no retouching.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.24 }} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6">
            {TRUST_STATS.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <s.icon className="w-3.5 h-3.5 text-[#EF2B2D]" />
                <span className="text-xs font-semibold text-gray-700">{s.value} <span className="text-gray-400 font-normal">{s.label}</span></span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Transformation Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
          {TRANSFORMATIONS.map((item, index) => (
            <React.Fragment key={item.id}><TransformCard item={item} index={index} /></React.Fragment>
          ))}
        </div>

        {/* Authority Bar */}
        <div className="mb-10"><AuthorityBar /></div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3"><TestimonialStrip /></div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-2 bg-[#EF2B2D] rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-12 -translate-x-6" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1.5 mb-4">
                <Zap className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Free Quote · No Obligation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">Ready to See This Result on Your Car?</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">We come straight to your driveway across Swindon, Wiltshire & surrounding areas. Get a personalised quote in under 60 seconds.</p>
              <div className="space-y-2.5 mb-6">
                {["Message us on WhatsApp — instant reply", "We confirm your date, time & location", "We arrive & deliver showroom results"].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/20 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-xs text-white/90 font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 space-y-3">
              <a href={COMPANY_DETAILS.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-[#EF2B2D] font-bold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg group" aria-label="Book a mobile car detail with RD Valeting">
                <span>Book Your Detail Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-sm font-semibold transition-colors border border-white/20" aria-label={`Call RD Valeting on ${COMPANY_DETAILS.phone}`}>
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hidden SEO Schema Nodes */}
        <div className="hidden" aria-hidden="true" itemProp="areaServed">
          Swindon, Wiltshire, Cirencester, Marlborough, Royal Wootton Bassett, Chippenham, Devizes, Trowbridge
        </div>
        <div className="hidden" aria-hidden="true" itemProp="hasOfferCatalog">
          Mobile car detailing, paint correction Swindon, ceramic coating Wiltshire, alloy wheel cleaning, interior deep clean, full valet Swindon
        </div>
      </div>
    </section>
  );
}



