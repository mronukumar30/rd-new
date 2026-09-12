/**
 * LocationPageTemplate — Reusable template for location landing pages.
 * Each location page targets "car detailing [town]" keywords with unique content.
 * Modelled after ServicePageTemplate.tsx with location-specific sections.
 */

import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Crown,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
  ChevronRight,
  Car,
  Sparkles,
  Navigation,
} from "lucide-react";
import { COMPANY_DETAILS } from "../../constants";
import type { LocationData } from "../../constants/locations";

const GOLD = "#DC2626";
const GOLD_LIGHT = "#EF4444";

const SERVICES_OFFERED = [
  {
    name: "Maintenance Wash",
    path: "/maintenance-clean",
    price: "£50",
    duration: "1.5–2 Hours",
    description: "Regular upkeep to keep your car fresh, shiny and decontaminated.",
    image: "/719890908_2222286848526617_3057517277440017740_n.jpg",
    tag: "Regular Upkeep",
    highlights: ["Safe Exterior Hand Wash", "Wheels & Tyres Cleaned", "Windows Cleaned Inside & Out", "Quick Cabin Tidy"],
  },
  {
    name: "Deep Clean",
    path: "/deep-clean",
    price: "£100",
    duration: "3–4 Hours",
    description: "Full interior & exterior detail. Your car reset to factory-fresh condition.",
    image: "/724453567_1741795673842657_7212829807354336478_n.jpg",
    tag: "Flagship Reset",
    highlights: ["Seats & Carpets Deep Cleaned", "Arch & Wheel Treatment", "Dashboard Rejuvenation", "Glass Polished Inside & Out"],
  },
  {
    name: "Mini Valet",
    path: "/#services",
    price: "£30",
    duration: "1 Hour",
    description: "Our essential freshen-up package for safe, swirl-free regular cleaning.",
    image: "/723830628_27152605947682802_3120737853125552335_n.jpg",
    tag: "Budget Upkeep",
    highlights: ["pH-Neutral Hand Wash", "Wheel Faces Cleaned", "Interior Vacuum", "Dash Wipe Down"],
  },
  {
    name: "Full Valet & Detailing",
    path: "/paint-correction",
    price: "From £150",
    duration: "5–6 Hours",
    description: "The ultimate automotive care experience with decontamination and durable protection.",
    image: "/722908490_1513785427083168_6885942169468714202_n.jpg",
    tag: "Ultimate Care",
    highlights: ["Multi-Stage Decontamination", "Deep Fabric Extraction", "Leather Conditioning", "Durable Sealant Gloss"],
  },
];

interface LocationPageTemplateProps {
  location: LocationData;
}

export default function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": `RD Valeting — ${location.locationName}`,
    "description": `Premium mobile car valeting service in ${location.locationName}, ${location.county}. Maintenance washes, deep cleans, and full valets delivered directly to your driveway.`,
    "url": `https://www.rdvaleting.co.uk/${location.slug}`,
    "telephone": "+447393682365",
    "image": "https://www.rdvaleting.co.uk/logo.webp",
    "priceRange": "£30–£150+",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    "areaServed": {
      "@type": "City",
      "name": location.locationName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": location.county
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.locationName,
      "addressRegion": location.county,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates.lat,
      "longitude": location.coordinates.lng
    },
    "sameAs": [
      COMPANY_DETAILS.instagram,
      COMPANY_DETAILS.facebook
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.rdvaleting.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas",
        "item": "https://www.rdvaleting.co.uk/#areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.locationName,
        "item": `https://www.rdvaleting.co.uk/${location.slug}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{location.title}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={`https://www.rdvaleting.co.uk/${location.slug}`} />
        <meta property="og:title" content={location.title} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:url" content={`https://www.rdvaleting.co.uk/${location.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rdvaleting.co.uk/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${location.heroOverlayOpacity || 'bg-black/[0.38]'} z-10`} />
          <img
            src={location.heroImage || "/gallery-car-detailing-2.webp"}
            alt={`Professional mobile car detailing service in ${location.locationName}, ${location.county} by RD Valeting`}
            className={`w-full h-full object-cover ${location.heroImagePosition || 'object-center'}`}
            width={1920}
            height={1080}
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-40 w-full">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]">
              <li><Link to="/" className="text-white/50 hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><a href="/#areas" className="text-white/50 hover:text-white transition-colors">Areas</a></li>
              <li className="text-white/30">/</li>
              <li style={{ color: GOLD }}>{location.locationName}</li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)' }}
            >
              <MapPin className="w-3.5 h-3.5" style={{ color: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: GOLD_LIGHT }}>
                {location.locationName}, {location.county}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.05]">
              {location.heroTagline}
            </h1>

            <p className="text-base md:text-lg text-white/60 max-w-xl font-light leading-relaxed mb-8">
              {location.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-black" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}>
                <Navigation className="w-4 h-4" /> {location.travelTime}
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white/80" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Shield className="w-4 h-4" style={{ color: GOLD }} /> Fully Insured
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white/80" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Clock className="w-4 h-4" style={{ color: GOLD }} /> Mon–Sun 8am–8pm
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all text-black"
                style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, boxShadow: `0 15px 40px rgba(220,38,38,0.3)` }}
              >
                <MessageCircle className="w-5 h-5" /> Book via WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all text-white"
                style={{ border: '1px solid rgba(220,38,38,0.4)' }}
              >
                <Phone className="w-5 h-5" style={{ color: GOLD }} /> {COMPANY_DETAILS.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Detailing in [Location] */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
              About Our Service
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8" style={{ color: '#0A0A0A' }}>
              {location.introTitle}
            </h3>
            <div className="space-y-4">
              {location.introParagraphs.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed font-light" style={{ color: '#5A5040' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-8 rounded-[32px]" style={{ background: '#0A0A0A' }}>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <MapPin className="w-5 h-5" style={{ color: GOLD }} />
                Local Coverage Highlights
              </h4>
              <ul className="space-y-4">
                {location.localHighlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: GOLD }} />
                    <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Embed */}
            <div className="mt-8 rounded-[24px] overflow-hidden shadow-xl" style={{ border: '1px solid rgba(220,38,38,0.2)' }}>
              <iframe
                src={location.mapsEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`RD Valeting service area — mobile car detailing in ${location.locationName}, ${location.county}`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services We Bring to [Location] — Luxury Redesign */}
      <section className="py-28 px-6 md:px-12 relative overflow-hidden bg-[#0A0A0A]">
        {/* Subtle Ambient Background Elements */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-20 blur-[120px] rounded-full"
          style={{ background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)` }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 shadow-lg"
              style={{ background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.3)' }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: GOLD }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: GOLD_LIGHT }}>
                Exclusively Mobile · Delivered to Your Door
              </span>
            </div>
            
            <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Services We Bring to <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, #FFF 30%, ${GOLD_LIGHT} 100%)` }}>{location.locationName}</span>
            </h3>
            
            <p className="mt-5 text-base md:text-lg max-w-xl mx-auto leading-relaxed text-white/60 font-light">
              Every package meticulously delivered at your doorstep. Professional equipment, premium Garage Therapy formulas, and perfection guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_OFFERED.map((service, i) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group relative flex flex-col rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(180deg, rgba(20,20,20,0.85) 0%, rgba(12,12,12,0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(220, 38, 38, 0.4)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 30px 60px rgba(220, 38, 38, 0.12)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.5)';
                }}
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.name} mobile car detailing in ${location.locationName}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-transparent z-10" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                    <span 
                      className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-md shadow-lg"
                      style={{ background: 'rgba(10,10,10,0.75)', color: GOLD_LIGHT, border: '1px solid rgba(220,38,38,0.3)' }}
                    >
                      {service.tag}
                    </span>
                    <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md text-white/90 shadow-lg" style={{ background: 'rgba(10,10,10,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <Clock className="w-3 h-3" style={{ color: GOLD }} />
                      {service.duration}
                    </span>
                  </div>

                  {/* Price Tag Overlay at Image Bottom */}
                  <div className="absolute bottom-4 left-6 z-20">
                    <div 
                      className="inline-flex items-center px-4 py-1.5 rounded-xl font-extrabold text-sm tracking-wide text-black shadow-xl"
                      style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}
                    >
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-8 flex flex-col justify-between flex-1 relative z-20">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#EF4444] transition-colors flex items-center justify-between">
                      <span>{service.name}</span>
                      <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#DC2626] group-hover:translate-x-1 transition-all duration-300" />
                    </h4>

                    <p className="text-sm text-white/65 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-2 gap-2.5 mb-8 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-white/80 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
                          <span className="truncate">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all duration-300"
                      style={{ color: GOLD_LIGHT }}
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href={COMPANY_DETAILS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(220,38,38,0.3)' }}
                    >
                      <MessageCircle className="w-3.5 h-3.5" style={{ color: GOLD }} />
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in [Location] */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#EDE8DF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
              Why Choose Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>
              Why {location.locationName} Trusts RD Valeting
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {location.whyChooseUs.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-[24px] group hover:-translate-y-1 transition-all"
                style={{ background: '#F5F0E8', border: '1px solid #DDD5C5' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(220,38,38,0.15)' }}>
                  <Star className="w-5 h-5" style={{ color: GOLD }} />
                </div>
                <p className="text-sm font-medium leading-relaxed" style={{ color: '#2A2018' }}>{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Minimal Luxury Editorial */}
      <section className="py-24 px-6 md:px-12 relative" style={{ background: '#F5F0E8' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.35em] mb-4 font-semibold"
              style={{ color: GOLD }}
            >
              How It Works
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5"
              style={{ color: '#0A0A0A' }}
            >
              Mobile Detailing in {location.locationName}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base font-normal max-w-xl mx-auto leading-relaxed"
              style={{ color: '#6A6050' }}
            >
              Three simple steps to a showroom-finish vehicle delivered right to your doorstep.
            </motion.p>
          </div>

          {/* Minimal 3-Step Editorial Track */}
          <div className="relative">
            {/* Minimal Horizontal Connecting Line */}
            <div className="hidden md:block absolute top-[45px] left-[5%] right-[5%] h-[1px] z-0" style={{ background: '#DDD5C5' }}>
              <motion.div 
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full w-full"
                style={{ background: GOLD }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              {[
                {
                  num: "01",
                  subtitle: "01 / CONSULTATION",
                  title: "Get in Touch",
                  desc: `Message us on WhatsApp or call 07393 682 365. Tell us about your vehicle and location in ${location.locationName}, and we'll recommend the ideal package for your vehicle.`,
                  meta: "Instant WhatsApp & Call Quotes"
                },
                {
                  num: "02",
                  subtitle: "02 / MOBILE DISPATCH",
                  title: "We Come to You",
                  desc: `We arrive at your address (${location.travelTime.toLowerCase()}) in our fully equipped mobile studio with onboard water supply, power, and professional products.`,
                  meta: "Self-Powered Van • Zero Water/Power Needed"
                },
                {
                  num: "03",
                  subtitle: "03 / TRANSFORMATION",
                  title: "Showroom Results",
                  desc: `Sit back while every surface of your vehicle is meticulously restored to the RD Valeting standard. We conclude with a joint walkaround inspection to ensure perfection.`,
                  meta: "Multi-Point Inspection • 100% Satisfaction"
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="group relative flex flex-col justify-between"
                >
                  <div>
                    {/* Minimal Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="text-5xl md:text-6xl font-light tracking-tight transition-transform duration-300 group-hover:scale-105 relative z-10 pr-4"
                        style={{ color: GOLD, background: '#F5F0E8' }}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Subtle Divider Line per column */}
                    <div className="w-full h-[1px] mb-6" style={{ background: '#DDD5C5' }} />

                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase font-bold block mb-3" style={{ color: GOLD }}>
                      {step.subtitle}
                    </span>

                    <h4 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#9B7826]" style={{ color: '#0A0A0A' }}>
                      {step.title}
                    </h4>

                    <p className="text-sm leading-relaxed mb-6 font-normal" style={{ color: '#5A5040' }}>
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4" style={{ borderTop: '1px stroke rgba(0,0,0,0.05)' }}>
                    <span className="text-xs font-medium tracking-wide flex items-center gap-2" style={{ color: '#8A7B65' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
                      {step.meta}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Clean Bottom Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <a
              href={COMPANY_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 text-black shadow-md"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}
            >
              <MessageCircle className="w-4 h-4" /> Book Mobile Detailing in {location.locationName}
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#EDE8DF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
              {location.locationName} FAQ
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>
              Common Questions About Car Detailing in {location.locationName}
            </h3>
          </div>
          <div className="space-y-4">
            {location.faqs.map((faq, i) => (
              <details key={i} className="group rounded-[24px] overflow-hidden" style={{ background: '#F5F0E8', border: '1px solid #DDD5C5' }}>
                <summary className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer list-none text-left">
                  <h4 className="text-base md:text-lg font-bold pr-4" style={{ color: '#0A0A0A' }}>{faq.question}</h4>
                  <ChevronRight className="w-5 h-5 shrink-0 transition-transform group-open:rotate-90" style={{ color: GOLD }} />
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="w-full h-[1px] mb-5" style={{ background: 'rgba(220,38,38,0.2)' }} />
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: '#5A5040' }}>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Nearby Areas</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              We Also Cover These Areas Near {location.locationName}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {location.nearbyAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="p-6 rounded-[24px] group hover:-translate-y-2 transition-all duration-300 block text-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(220,38,38,0.15)' }}
              >
                <MapPin className="w-6 h-6 mx-auto mb-3" style={{ color: GOLD }} />
                <h4 className="text-lg font-bold text-white mb-2">{area.name}</h4>
                <span
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all"
                  style={{ color: GOLD_LIGHT }}
                >
                  View Area <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#F5F0E8' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Crown className="w-10 h-10 mx-auto mb-6" style={{ color: GOLD }} />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: '#0A0A0A' }}>
            Ready for Premium Car Detailing in {location.locationName}?
          </h2>
          <p className="text-base mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: '#8A8070' }}>
            We come to you — {location.travelTime.toLowerCase()}. Fully insured. Fully mobile. Book today and experience the RD Valeting difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY_DETAILS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all text-black inline-flex items-center gap-3"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, boxShadow: `0 15px 40px rgba(220,38,38,0.3)` }}
            >
              <MessageCircle className="w-5 h-5" /> Book on WhatsApp
            </a>
            <a
              href={COMPANY_DETAILS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all inline-flex items-center gap-3"
              style={{ border: `2px solid rgba(220,38,38,0.3)`, color: '#0A0A0A' }}
            >
              Book Online <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: GOLD }} />
              <span className="text-xs font-bold text-black/60">{location.locationName} & Beyond</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: GOLD }} />
              <span className="text-xs font-bold text-black/60">Mon–Sun 8am–8pm</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
