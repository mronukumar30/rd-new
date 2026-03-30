/**
 * King of Detailing — Premium Car Care · Luton & Surrounding Areas
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Car, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook,
  MapPin,
  Phone,
  Clock,
  Star,
  MessageCircle,
  ChevronRight,
  CheckCircle2,
  Calendar,
  User,
  Crown,
  Zap,
  Timer,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "./lib/utils";
import { SERVICES, TESTIMONIALS, GALLERY_MEDIA, COMPANY_DETAILS } from "./constants";
import InteractiveBentoGallery from "./components/ui/interactive-bento-gallery";

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#E2C97A";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12",
        isScrolled ? "py-4 bg-black/80 backdrop-blur-2xl border-b border-white/5" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-black overflow-hidden border border-white/10" style={{ boxShadow: `0 0 20px ${GOLD}40` }}>
            <img src="/logo.png" alt="King of Detailing Logo" className="w-full h-full object-contain p-1.5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base md:text-lg tracking-[0.1em] uppercase text-white">King of Detailing</span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium" style={{ color: GOLD }}>Premium Car Care · Luton</span>
          </div>
        </div>

        {/* Desktop Nav Pills */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
          {["Home", "Services", "Experience", "Gallery", "About"].map((item) => (
            <a 
              key={item} 
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`} 
              className={cn(
                "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
                item === "Home" 
                  ? "text-black shadow-lg" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
              style={item === "Home" ? { background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` } : {}}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href={COMPANY_DETAILS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all duration-500 text-black"
            style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, boxShadow: `0 10px 30px rgba(201,168,76,0.3)` }}
          >
            Book Now
          </a>
        </div>

        <button 
          className="md:hidden text-white p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 bg-black/95 backdrop-blur-2xl p-8 rounded-[32px] flex flex-col gap-6 md:hidden overflow-hidden z-50 shadow-2xl"
            style={{ border: `1px solid rgba(201,168,76,0.2)` }}
          >
            {["Home", "Services", "Experience", "Gallery", "About"].map((item) => (
              <a 
                key={item} 
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-all"
              >
                {item}
              </a>
            ))}
            <a 
              href={COMPANY_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-5 rounded-full text-center font-bold uppercase tracking-widest text-black"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}
            >
              Book Now — WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black hero-fade-bottom">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/50 z-10" />
        {/* Subtle gold tint layer */}
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)' }} />
        <motion.img 
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          src="/cinematic-hero.png" 
          alt="King of Detailing — Premium mobile car detailing in Luton and surrounding areas" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-30 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between py-32">
        <div className="hidden md:block h-12" />

        {/* Main Content */}
        <div className="flex flex-col items-start gap-8 md:gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Crown Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <Crown className="w-3.5 h-3.5" style={{ color: GOLD }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: GOLD_LIGHT }}>
                  Premium Mobile Detailing · Luton & Surrounding Areas
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-[90px] font-bold leading-[0.9] tracking-tighter text-white mb-6">
                Your Car.{' '}<br /> 
                <span className="italic font-serif font-light" style={{ color: GOLD_LIGHT }}>Royally Treated.</span>
              </h1>
              <p className="text-base md:text-lg text-white/60 max-w-lg font-light leading-relaxed mb-8">
                Bedfordshire's most meticulous mobile detailing service. Deep cleans, ceramic coatings, paint correction — all at your driveway. Fully insured. Fully mobile.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <a 
                  href={COMPANY_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 rounded-full font-bold flex items-center gap-4 hover:scale-105 transition-all duration-500 w-fit text-black"
                  style={{ 
                    background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, 
                    boxShadow: `0 20px 50px rgba(201,168,76,0.3)` 
                  }}
                >
                  Book via WhatsApp
                  <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
                <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="flex items-center gap-3 text-white/50 hover:text-white transition-all group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:border-white/60 transition-all" style={{ border: '1px solid rgba(201,168,76,0.3)' }}>
                    <Phone className="w-4 h-4" style={{ color: GOLD }} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.2em]">Call Direct</span>
                    <span className="text-sm font-bold tracking-widest text-white">{COMPANY_DETAILS.phone}</span>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Trust Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="w-full max-w-[320px]"
          >
            <div className="p-5 rounded-[24px] shadow-2xl group hover:bg-white/10 transition-all duration-500" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(24px)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.15)' }}>
                  <Shield className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Fully Insured & Mobile</h4>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />)}
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed mb-3">
                We come to you across Bedfordshire and beyond. Mon–Sun, 8am–8pm.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">5★ Rated Service</span>
                <ArrowRight className="w-3 h-3 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="w-full">
          <div className="hidden md:flex justify-end mb-6">
            <div className="flex flex-wrap justify-end gap-2">
              {["Deep Clean", "Ceramic Coating", "Paint Correction", "Fully Mobile"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + (i * 0.1) }}
                  className="px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/80 hover:bg-white/20 cursor-default transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(201,168,76,0.15)' }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="order-3 md:order-1">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
                Your Car · Our Crown
              </span>
            </div>
            <div className="order-1 md:order-2 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">Luton</span>
                <span className="text-white/40">&</span>
                <span className="text-xs font-bold text-white/60">Bedfordshire</span>
              </div>
            </div>
            <div className="order-2 md:order-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 flex items-center gap-3"
              >
                <div className="w-10 h-[1px]" style={{ background: 'rgba(201,168,76,0.3)' }} />
                Scroll for More
              </motion.div>
            </div>
          </div>

          <div className="mt-6 w-full h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-1/4 h-full"
              style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureHighlights = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleCar = useTransform(scrollYProgress, [0, 1], [1.1, 0.95]);

  const hotspots = [
    { id: 1, x: "25%", y: "45%", title: "Paint Correction", desc: "Eliminating swirl marks & light scratches." },
    { id: 2, x: "55%", y: "55%", title: "Ceramic Coating", desc: "12–24 month protection. Self-cleaning surface." },
    { id: 3, x: "70%", y: "40%", title: "Wheel Protection", desc: "Heat resistant ceramic shielding." },
    { id: 4, x: "45%", y: "35%", title: "Glass Coating", desc: "Extreme water repellency on all glass." },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 md:px-12 overflow-hidden" style={{ background: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ y: yText }} className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>The King Difference</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>Built For Those<br />Who Notice Everything</h3>
          </div>
          <div className="flex gap-12">
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#0A0A0A' }}>100%</p>
              <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: GOLD }}>Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#0A0A0A' }}>24mo+</p>
              <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: GOLD }}>Ceramic Life</p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Car Image */}
        <div className="relative mb-24 rounded-[48px] overflow-hidden bg-black p-6 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.3)]" style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
          <motion.img 
            style={{ scale: scaleCar }}
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1600" 
            alt="King of Detailing — Professional car treatment" 
            className="w-full h-auto rounded-3xl shadow-2xl opacity-90"
          />
          
          {hotspots.map((spot) => (
            <div 
              key={spot.id}
              className="hotspot"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <div className="hotspot-pulse" />
              <div className="w-2 h-2 rounded-full z-10" style={{ background: GOLD }} />
              
              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-full mb-4 w-52 p-4 rounded-2xl shadow-2xl z-20 pointer-events-none"
                    style={{ background: '#0A0A0A', border: `1px solid ${GOLD}33` }}
                  >
                    <p className="font-bold text-sm mb-1" style={{ color: GOLD_LIGHT }}>{spot.title}</p>
                    <p className="text-[10px] text-white/60 leading-relaxed">{spot.desc}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent" style={{ borderTopColor: '#0A0A0A' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 bento-card flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: '#0A0A0A' }}>
                <Shield className="w-6 h-6" style={{ color: GOLD }} />
              </div>
              <h4 className="text-2xl font-bold mb-4" style={{ color: '#0A0A0A' }}>Fully Insured & Accredited</h4>
              <p className="leading-relaxed mb-8" style={{ color: '#8A8070' }}>
                Every visit is fully insured for complete peace of mind. We're accredited detailers based in Luton — Bedfordshire's premium choice for mobile car care. From deep cleans to ceramic coatings, every job is treated with the same obsessive attention to detail.
              </p>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md text-black" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}>Fully Insured</span>
                <span className="px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md" style={{ background: '#0A0A0A', color: GOLD_LIGHT }}>Fully Mobile</span>
                <span className="text-[10px] tracking-widest uppercase font-mono" style={{ color: '#8A8070' }}>Luton Based</span>
              </div>
            </div>
            <div className="w-full md:w-64 aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600" alt="King of Detailing shine" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bento-card-dark flex flex-col justify-between group"
          >
            <div>
              <Crown className="w-8 h-8 mb-6 transition-colors duration-500" style={{ color: GOLD }} />
              <h4 className="text-2xl font-bold mb-4 text-white">The King<br />Guarantee</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                If you aren't completely blown away by the results, we'll keep working until you are. No questions asked. No invoice until you're smiling. That's the King standard.
              </p>
            </div>
            <div className="mt-8 pt-8 flex items-center justify-between" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">5★ Every Time</span>
              <CheckCircle2 className="w-5 h-5" style={{ color: GOLD }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12" style={{ background: '#EDE8DF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Packages & Pricing</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>Tailored Packages.<br className="hidden md:block" /> Royal Results.</h3>
          <p className="mt-6 text-base max-w-lg mx-auto leading-relaxed" style={{ color: '#8A8070' }}>
            Every vehicle is different. Every package is comprehensive. Choose your level of care — we handle the rest, at your driveway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col rounded-[48px] overflow-hidden transition-all duration-700 hover:-translate-y-2 cursor-pointer"
              style={{ 
                background: '#F5F0E8', 
                border: '1px solid #DDD5C5', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 30px 70px rgba(201,168,76,0.15)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
                (e.currentTarget as HTMLElement).style.borderColor = '#DDD5C5';
              }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Duration badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ background: 'rgba(10,10,10,0.8)', color: GOLD_LIGHT, backdropFilter: 'blur(12px)' }}>
                  <Timer className="w-3 h-3 inline mr-1" />{service.duration}
                </div>
              </div>
              <div className="p-12 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold" style={{ color: GOLD }}>{service.price}</span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ background: 'rgba(201,168,76,0.1)' }} 
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GOLD; (e.currentTarget as HTMLElement).style.color = '#000'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.1)'; }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: '#0A0A0A' }}>{service.title}</h4>
                  <p className="text-base leading-relaxed mb-6 font-light" style={{ color: '#8A8070' }}>
                    {service.benefit}
                  </p>
                  <p className="text-xs leading-relaxed mb-8 px-4 py-3 rounded-2xl" style={{ color: '#6A6058', background: '#EDE8DF', border: '1px solid #DDD5C5' }}>
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {["Premium Products", "Expert Application", "Fully Insured", "Mobile Service"].map(item => (
                      <div key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#8A8070' }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <a 
                  href={COMPANY_DETAILS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-bold group/link uppercase tracking-widest pb-2 w-fit transition-all duration-200"
                  style={{ color: GOLD, borderBottom: `1px solid rgba(201,168,76,0.3)` }}
                >
                  Book This Package
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Travel Range Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-[32px] text-center"
          style={{ background: '#0A0A0A', border: `1px solid rgba(201,168,76,0.2)` }}
        >
          <MapPin className="w-6 h-6 mx-auto mb-3" style={{ color: GOLD }} />
          <h4 className="font-bold text-white mb-2">We Come to You</h4>
          <p className="text-sm text-white/60">
            {COMPANY_DETAILS.address} · {COMPANY_DETAILS.travelRange}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    carType: "",
    service: "",
    date: "",
    contact: ""
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <section id="booking" className="py-24 px-6 md:px-12" style={{ background: '#F5F0E8' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0.1, y: 20 }}
          whileInView={{ opacity: 0.95, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Consultation</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>Tell Us About Your Car.<br className="hidden md:block" /> We'll Do the Rest.</h3>
        </motion.div>

        <motion.div 
          className="rounded-[48px] p-8 md:p-16 relative overflow-hidden" 
          style={{ background: '#EDE8DF', border: '1px solid #DDD5C5' }}
          initial={{ opacity: 0.1, y: 30 }}
          whileInView={{ opacity: 0.95, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: 'rgba(201,168,76,0.15)' }}>
            <motion.div 
              className="h-full"
              style={{ background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})` }}
              initial={{ width: "25%" }}
              animate={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <div className="flex justify-between mb-12">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all text-sm",
              )}
              style={step >= i ? { background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, color: '#000' } : { background: 'rgba(201,168,76,0.1)', color: '#8A8070' }}
              >
                {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="min-h-[300px]"
            >
              {step === 1 && (
                <div className="space-y-8">
                  <h4 className="text-3xl font-bold flex items-center gap-3" style={{ color: '#0A0A0A' }}>
                    <Car className="w-8 h-8" style={{ color: GOLD }} />
                    What do you drive?
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Sedan", "SUV", "Hatchback", "Prestige"].map(type => (
                      <button 
                        key={type}
                        onClick={() => { setFormData({...formData, carType: type}); nextStep(); }}
                        className="p-6 rounded-3xl border-2 transition-all duration-300 text-center font-bold hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]"
                        style={formData.carType === type 
                          ? { background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, borderColor: GOLD, color: '#000', boxShadow: `0 10px 30px rgba(201,168,76,0.3)` } 
                          : { borderColor: '#DDD5C5', color: '#0A0A0A', background: 'transparent' }
                        }
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <h4 className="text-3xl font-bold flex items-center gap-3" style={{ color: '#0A0A0A' }}>
                    <Sparkles className="w-8 h-8" style={{ color: GOLD }} />
                    Select a package
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => { setFormData({...formData, service: s.title}); nextStep(); }}
                        className="p-6 rounded-3xl border-2 transition-all duration-300 text-left flex justify-between items-center hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]"
                        style={formData.service === s.title 
                          ? { background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, borderColor: GOLD, color: '#000', boxShadow: `0 10px 30px rgba(201,168,76,0.3)` } 
                          : { borderColor: '#DDD5C5', color: '#0A0A0A', background: 'transparent' }
                        }
                      >
                        <div>
                          <span className="font-bold block">{s.title}</span>
                          <span className="text-sm opacity-70">{s.price} · {s.duration}</span>
                        </div>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <h4 className="text-3xl font-bold flex items-center gap-3" style={{ color: '#0A0A0A' }}>
                    <Calendar className="w-8 h-8" style={{ color: GOLD }} />
                    Preferred timeframe?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["ASAP", "This Week", "Next Week"].map(time => (
                      <button 
                        key={time}
                        onClick={() => { setFormData({...formData, date: time}); nextStep(); }}
                        className="p-6 rounded-3xl border-2 transition-all duration-300 text-center font-bold hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]"
                        style={formData.date === time 
                          ? { background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, borderColor: GOLD, color: '#000', boxShadow: `0 10px 30px rgba(201,168,76,0.3)` } 
                          : { borderColor: '#DDD5C5', color: '#0A0A0A', background: 'transparent' }
                        }
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <h4 className="text-3xl font-bold flex items-center gap-3" style={{ color: '#0A0A0A' }}>
                    <User className="w-8 h-8" style={{ color: GOLD }} />
                    Almost done!
                  </h4>
                  <div className="space-y-4">
                    <p className="text-sm leading-relaxed" style={{ color: '#8A8070' }}>
                      You've selected: <strong style={{ color: '#0A0A0A' }}>{formData.service}</strong> for a <strong style={{ color: '#0A0A0A' }}>{formData.carType}</strong> · Timeframe: <strong style={{ color: '#0A0A0A' }}>{formData.date}</strong>
                    </p>
                    <a 
                      href={`${COMPANY_DETAILS.whatsapp}?text=Hi! I'd like to book the ${formData.service} package for my ${formData.carType} - timeframe: ${formData.date}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 text-black transition-all hover:scale-[1.02]"
                      style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, boxShadow: `0 10px 30px rgba(201,168,76,0.3)` }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </a>
                    <a 
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="w-full py-4 rounded-2xl font-bold text-center flex items-center justify-center gap-3 transition-all"
                      style={{ background: '#0A0A0A', color: GOLD_LIGHT }}
                    >
                      <Phone className="w-4 h-4" />
                      Or Call: {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 pt-8 flex items-center justify-between" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
            <button 
              onClick={prevStep}
              className={cn("text-sm font-bold transition-colors", step === 1 && "opacity-0 pointer-events-none")}
              style={{ color: '#8A8070' }}
            >
              Back
            </button>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold" style={{ color: '#8A8070' }}>Prefer to message?</span>
              <a 
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-xs font-bold hover:bg-green-600 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 overflow-hidden" style={{ background: '#F5F0E8' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>Real Cars. Real Owners.<br className="hidden md:block" /> Real Results.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-10 rounded-[40px] flex flex-col justify-between cursor-pointer"
              style={{ background: '#EDE8DF', border: '1px solid #DDD5C5', transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4" style={{ fill: GOLD, color: GOLD }} />)}
                </div>
                <p className="text-lg font-medium leading-relaxed mb-8 italic" style={{ color: '#2A2018' }}>"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#0A0A0A' }}>{t.name}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: GOLD }}>{t.car}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12" style={{ background: '#EDE8DF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 px-4">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>The Gallery</h3>
          </div>
          <div className="flex gap-4">
            <a 
              href={COMPANY_DETAILS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
              style={{ color: '#0A0A0A' }}
            >
              <Instagram className="w-5 h-5" style={{ color: GOLD }} />
              @king.ofdetailing
            </a>
            <a 
              href={COMPANY_DETAILS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
              style={{ color: '#0A0A0A' }}
            >
              <Facebook className="w-5 h-5" style={{ color: GOLD }} />
              Facebook
            </a>
          </div>
        </div>

        <InteractiveBentoGallery 
          mediaItems={GALLERY_MEDIA}
          title="King of Detailing Showcase"
          description="Drag and explore our recent transformations"
        />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="about" className="py-24 px-6 md:px-12" style={{ background: '#0A0A0A', borderTop: `1px solid rgba(201,168,76,0.15)` }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            {/* Brand */}
            <div className="flex items-center gap-5 mb-10">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-black overflow-hidden border-2 border-white/10" style={{ boxShadow: `0 0 30px ${GOLD}50` }}>
                <img src="/logo.png" alt="King of Detailing Logo" className="w-full h-full object-contain p-2" />
              </div>
              <div>
                <span className="font-black text-4xl md:text-5xl tracking-tighter text-white block uppercase leading-none mb-2">KING Detailing</span>
                <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold" style={{ color: GOLD }}>Premium Car Care · Luton</span>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-8 max-w-md font-light italic" style={{ color: 'rgba(255,255,255,0.95)' }}>
              "Beyond cleaning — automotive restoration. We are Bedfordshire's elite mobile detailing specialists, delivering fully insured, studio-grade perfection directly to your driveway across Luton, Herts, Beds, and Bucks."
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5" style={{ color: GOLD }} />
                <p className="text-sm font-medium text-white">{COMPANY_DETAILS.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5" style={{ color: GOLD }} />
                <p className="text-sm font-medium text-white">{COMPANY_DETAILS.hours}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5" style={{ color: GOLD }} />
                <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-sm font-medium text-white hover:text-white transition-colors">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Zap className="w-5 h-5" style={{ color: GOLD }} />
                <p className="text-sm font-medium text-white">{COMPANY_DETAILS.travelRange}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h5 className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: GOLD }}>Navigation</h5>
              <ul className="space-y-4">
                {["Services", "Experience", "Gallery", "About"].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm font-bold text-white/80 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-xs font-mono uppercase tracking-[0.3em]" style={{ color: GOLD }}>Connect</h5>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={COMPANY_DETAILS.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" style={{ color: GOLD }} /> 
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href={COMPANY_DETAILS.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Facebook className="w-4 h-4" style={{ color: GOLD }} />
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href={COMPANY_DETAILS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" style={{ color: GOLD }} />
                    WhatsApp Us
                  </a>
                </li>
                <li>
                  <a 
                    href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                    className="text-sm font-bold flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" style={{ color: GOLD }} />
                    {COMPANY_DETAILS.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-16 pb-8 border-t border-white/5 flex flex-col items-center justify-center">
          <h2 className="text-[12vw] md:text-[8vw] font-black tracking-tighter text-white/5 leading-none select-none">
            KING DETAILING
          </h2>
          <div className="mt-[-4vw] md:mt-[-3vw] text-center">
            <span className="text-sm md:text-base font-bold tracking-[0.5em] text-white uppercase opacity-100">
              KING DETAILING
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:text-black" style={{ '--tw-selection-bg': GOLD, background: '#F5F0E8' } as React.CSSProperties}>
      <Navbar />
      <Hero />
      <FeatureHighlights />
      <Services />
      <BookingFlow />
      <Testimonials />
      <Gallery />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href={COMPANY_DETAILS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group bg-green-500 hover:bg-green-600"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-xs font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap" style={{ border: '1px solid #DDD5C5' }}>
          Message us on WhatsApp
        </span>
      </a>

      {/* Social Floating Buttons */}
      <div className="fixed bottom-28 right-8 z-50 flex flex-col gap-3">
        <a 
          href={COMPANY_DETAILS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all group"
          style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
        >
          <Instagram className="w-5 h-5" />
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap" style={{ border: '1px solid #DDD5C5' }}>
            @king.ofdetailing
          </span>
        </a>
        <a 
          href={COMPANY_DETAILS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all group bg-blue-600 hover:bg-blue-700"
        >
          <Facebook className="w-5 h-5" />
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap" style={{ border: '1px solid #DDD5C5' }}>
            King of Detailing
          </span>
        </a>
      </div>
    </div>
  );
}
