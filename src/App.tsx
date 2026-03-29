/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Car, 
  Shield, 
  Sparkles, 
  Droplets, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
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
  ExternalLink
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "./lib/utils";
import { SERVICES, TESTIMONIALS, ACCREDITATIONS, GALLERY_MEDIA, COMPANY_DETAILS } from "./constants";
import InteractiveBentoGallery from "./components/ui/interactive-bento-gallery";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Reviews */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-2xl overflow-hidden p-1">
              <img src="https://d375139ucebi94.cloudfront.net/region2/gb/178812/logo/f3696f57d4df44d28e90dc2ff97b06-dj-valeting-logo-35ad111d8b724c37a33a8f1138c08a-booksy.jpeg" alt="DJ Valeting Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-tighter text-white">DJ VALETING</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Pills */}
        <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 p-1.5 rounded-full">
          {["Home", "Services", "Experience", "Gallery", "About"].map((item) => (
            <a 
              key={item} 
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`} 
              className={cn(
                "px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
                item === "Home" 
                  ? "bg-white text-black shadow-lg" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href={COMPANY_DETAILS.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-white text-black rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
          >
            Book a Call
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
            className="absolute top-full left-6 right-6 mt-4 bg-black/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px] flex flex-col gap-6 md:hidden overflow-hidden z-50 shadow-2xl"
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
              href={COMPANY_DETAILS.bookingUrl}
              className="mt-4 w-full py-5 bg-white text-black rounded-full text-center font-bold uppercase tracking-widest"
            >
              Book Now
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
      {/* High-End Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Warm golden-hour cinematic overlay matching reference photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/40 z-10" />
        {/* Warm amber cinematic tint layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-transparent to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          src="/cinematic-hero.png" 
          alt="Cinematic luxury car detailing — black supercar being professionally washed" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-30 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between py-32">
        {/* Top Spacer for Navbar */}
        <div className="hidden md:block h-12" />

        {/* Main Content Area */}
        <div className="flex flex-col items-start gap-8 md:gap-12">
          {/* Headline Group */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-[100px] font-bold leading-[0.9] tracking-tighter text-white mb-6">
                Where Perfection{' '}<br /> 
                <span className="text-white/60 italic font-serif font-light">Becomes a Standard</span>
              </h1>
              <p className="text-base md:text-lg text-white/60 max-w-lg font-light leading-relaxed mb-8">
                Northern Ireland's most trusted name in ceramic protection and paint correction. Every vehicle treated as if it were our own.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <a 
                  href="#booking"
                  className="group relative px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-4 hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.15)] w-fit"
                >
                  Book an Appointment
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
                <a href="https://wa.me/447741316721" target="_blank" className="flex items-center gap-3 text-white/50 hover:text-white transition-all group">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.2em]">Call or WhatsApp</span>
                    <span className="text-sm font-bold tracking-widest text-white">+44 7741 316721</span>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Trust Card (Middle Left) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="w-full max-w-[320px]"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-5 rounded-[24px] shadow-2xl group hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Accredited & Certified</h4>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />)}
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed mb-3">
                Officially approved by XPEL &amp; Gtechniq. Your warranty is protected. The application is flawless.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">4.9 / 5 Rating</span>
                <ArrowRight className="w-3 h-3 text-white/60 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Navigation & Info */}
        <div className="w-full">
          {/* Category Pills (Floating above the bottom bar) */}
          <div className="hidden md:flex justify-end mb-6">
            <div className="flex flex-wrap justify-end gap-2">
              {["Ceramic Coating", "Paint Correction", "Interior Detail"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + (i * 0.1) }}
                  className="px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/80 hover:bg-white/20 cursor-default transition-all"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Bottom Bar Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Slogan */}
            <div className="order-3 md:order-1">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
                Your Car • Our Science
              </span>
            </div>

            {/* Center: Pagination */}
            <div className="order-1 md:order-2 flex items-center gap-6">
              <button className="text-[9px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Preview</button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">01</span>
                <span className="text-white/40">/</span>
                <span className="text-xs font-bold text-white/60">08</span>
              </div>
              <button className="text-[9px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm">Next</button>
            </div>

            {/* Right: Scroll Indicator */}
            <div className="order-2 md:order-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 flex items-center gap-3"
              >
                <div className="w-10 h-[1px] bg-white/20" />
                Scroll for More
              </motion.div>
            </div>
          </div>

          {/* Progress Line */}
          <div className="mt-6 w-full h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-1/4 h-full bg-white/40"
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
    { id: 1, x: "25%", y: "45%", title: "Paint Correction", desc: "Removing 99% of surface defects." },
    { id: 2, x: "55%", y: "55%", title: "Ceramic Coating", desc: "9H hardness for ultimate protection." },
    { id: 3, x: "70%", y: "40%", title: "Wheel Protection", desc: "Heat resistant ceramic shielding." },
    { id: 4, x: "45%", y: "35%", title: "Glass Coating", desc: "Extreme water repellency." },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div style={{ y: yText }} className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted mb-4">The Difference</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Built For Those<br /> Who Notice Everything</h3>
          </div>
          <div className="flex gap-12">
            <div className="text-center">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">5yr+</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted">Ceramic Life</p>
            </div>
          </div>
        </motion.div>

        {/* Interactive Car Image (BMW) */}
        <div className="relative mb-24 rounded-[48px] overflow-hidden bg-black p-6 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
          <motion.img 
            style={{ scale: scaleCar }}
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1600" 
            alt="BMW Detailing Experience" 
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
              <div className="w-2 h-2 bg-white rounded-full z-10" />
              
              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-full mb-4 w-48 p-4 bg-black text-white rounded-2xl shadow-2xl z-20 pointer-events-none"
                  >
                    <p className="font-bold text-sm mb-1">{spot.title}</p>
                    <p className="text-[10px] text-white/60 leading-relaxed">{spot.desc}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black" />
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
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Accredited Specialists</h4>
              <p className="text-muted leading-relaxed mb-8">
                Genuine accreditation isn't bought — it's earned. We are officially certified by the world's leading paint protection manufacturers, which means your warranty is fully protected and every application meets the brand's highest installation standards.
              </p>
              <div className="flex gap-4 items-center flex-wrap">
                <span className="px-5 py-2.5 bg-black text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md">XPEL</span>
                <span className="px-5 py-2.5 bg-black text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md">Gtechniq</span>
                <span className="text-[10px] text-muted tracking-widest uppercase font-mono">Certified Installers</span>
              </div>
            </div>
            <div className="w-full md:w-64 aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600" alt="Master Detailing Shine" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
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
              <Sparkles className="w-8 h-8 text-yellow-400 mb-6 group-hover:text-white transition-colors duration-500" />
              <h4 className="text-2xl font-bold mb-4 text-white">The Signature <br /> Guarantee</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                If you aren't completely blown away by the results, we'll keep working until you are. No questions asked. No invoice until you're smiling.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">Trusted by 500+ Owners</span>
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Protection That Lasts. <br className="hidden md:block" /> Results That Last Longer.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-white rounded-[48px] overflow-hidden border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] transition-all duration-700 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-12 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold text-[#475569] uppercase tracking-[0.2em]">{service.price}</span>
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight text-[#0F172A]">{service.title}</h4>
                  <p className="text-[#475569] text-base leading-relaxed mb-8 font-light">
                    {service.benefit}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {["Premium Products", "Expert Application", "Full Warranty", "Studio Finish"].map(item => (
                      <div key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#475569]">
                        <div className="w-1.5 h-1.5 rounded-full bg-black/30" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <a 
                  href="#booking" 
                  className="inline-flex items-center gap-3 text-sm font-bold group/link uppercase tracking-widest border-b border-black/10 pb-2 w-fit hover:border-black transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-sm"
                >
                  Inquire Now
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-200" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
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
    <section id="booking" className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted mb-4">Consultation</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Tell Us About Your Car.<br className="hidden md:block" /> We'll Do the Rest.</h3>
        </div>

        <div className="bg-secondary rounded-[48px] p-8 md:p-16 border border-border relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/5">
            <motion.div 
              className="h-full bg-black"
              initial={{ width: "25%" }}
              animate={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          <div className="flex justify-between mb-12">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
                step >= i ? "bg-black text-white shadow-lg" : "bg-black/5 text-muted"
              )}>
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
                  <h4 className="text-3xl font-bold flex items-center gap-3">
                    <Car className="w-8 h-8" />
                    What do you drive?
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Sedan", "SUV", "Exotic", "Classic"].map(type => (
                      <button 
                        key={type}
                        onClick={() => { setFormData({...formData, carType: type}); nextStep(); }}
                        className={cn(
                          "p-6 rounded-3xl border-2 transition-all text-center font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
                          formData.carType === type ? "border-black bg-black text-white" : "border-black/5 hover:border-black/20"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <h4 className="text-3xl font-bold flex items-center gap-3">
                    <Sparkles className="w-8 h-8" />
                    Select a service
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SERVICES.map(s => (
                      <button 
                        key={s.id}
                        onClick={() => { setFormData({...formData, service: s.title}); nextStep(); }}
                        className={cn(
                          "p-6 rounded-3xl border-2 transition-all text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
                          formData.service === s.title ? "border-black bg-black text-white" : "border-black/5 hover:border-black/20"
                        )}
                      >
                        <span className="font-bold">{s.title}</span>
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <h4 className="text-3xl font-bold flex items-center gap-3">
                    <Calendar className="w-8 h-8" />
                    Preferred timeframe?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["ASAP", "Next Week", "Next Month"].map(time => (
                      <button 
                        key={time}
                        onClick={() => { setFormData({...formData, date: time}); nextStep(); }}
                        className={cn(
                          "p-6 rounded-3xl border-2 transition-all text-center font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
                          formData.date === time ? "border-black bg-black text-white" : "border-black/5 hover:border-black/20"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <h4 className="text-3xl font-bold flex items-center gap-3">
                    <User className="w-8 h-8" />
                    Final details
                  </h4>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-5 rounded-2xl bg-white border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:border-transparent transition-all"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-5 rounded-2xl bg-white border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:border-transparent transition-all"
                    />
                    <button className="w-full py-5 bg-black text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-black/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2">
                      Request Quote
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 pt-8 border-t border-black/5 flex items-center justify-between">
            <button 
              onClick={prevStep}
              className={cn("text-sm font-bold text-muted hover:text-black transition-colors", step === 1 && "opacity-0 pointer-events-none")}
            >
              Back
            </button>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-muted">Prefer to talk?</span>
              <a 
                href={COMPANY_DETAILS.whatsapp}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-xs font-bold hover:bg-green-600 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">Real Cars. Real Owners.<br className="hidden md:block" /> Real Results.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] bg-secondary border border-border flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-black text-black" />)}
                </div>
                <p className="text-lg font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted">{t.car}</p>
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
    <section id="gallery" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 px-4">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">The Gallery</h3>
          </div>
          <a href="https://www.instagram.com/djvaleting7/" target="_blank" className="flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black">
            Follow on Instagram @djvaleting7
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <InteractiveBentoGallery 
          mediaItems={GALLERY_MEDIA}
          title="Studio Showcase"
          description="Drag and explore our recent transformations"
        />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="about" className="py-24 px-6 md:px-12 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-2xl overflow-hidden p-1">
                <img src="https://d375139ucebi94.cloudfront.net/region2/gb/178812/logo/f3696f57d4df44d28e90dc2ff97b06-dj-valeting-logo-35ad111d8b724c37a33a8f1138c08a-booksy.jpeg" alt="DJ Valeting Logo" className="w-full h-full object-cover rounded-lg" />
              </div>
              <span className="font-bold text-xl tracking-tight">DJ VALETING</span>
            </div>
            <p className="text-muted text-lg leading-relaxed mb-12 max-w-md">
              Coalisland's most obsessive detailing studio. We don't just clean cars — we protect, restore, and elevate them. Every vehicle is treated as if it belongs to us.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-black" />
                <p className="text-sm font-medium">{COMPANY_DETAILS.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-black" />
                <p className="text-sm font-medium">{COMPANY_DETAILS.phone}</p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-black" />
                <p className="text-sm font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h5 className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Navigation</h5>
              <ul className="space-y-4">
                {["Services", "Experience", "Gallery", "About"].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm font-bold hover:text-muted transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-xs font-mono uppercase tracking-[0.3em] text-muted">Connect</h5>
              <ul className="space-y-4">
                <li><a href="https://www.instagram.com/djvaleting7/" target="_blank" className="text-sm font-bold flex items-center gap-2 hover:text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"><Instagram className="w-4 h-4" /> Instagram</a></li>
                <li><a href="#" className="text-sm font-bold flex items-center gap-2 hover:text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"><Facebook className="w-4 h-4" /> Facebook</a></li>
                <li><a href={COMPANY_DETAILS.bookingUrl} target="_blank" className="text-sm font-bold flex items-center gap-2 hover:text-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black"><ExternalLink className="w-4 h-4" /> Book Online</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted">
            © 2026 DJ Valeting. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-muted hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-muted hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
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
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-green-600 transition-all group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-xs font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-border">
          Chat with us
        </span>
      </a>
    </div>
  );
}
