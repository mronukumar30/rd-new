/**
 * ServicePageTemplate — Reusable template for individual service pages.
 * Each service page targets specific keywords and has its own SEO meta tags.
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
  Timer,
  ChevronRight,
} from "lucide-react";
import { COMPANY_DETAILS } from "../../constants";

const GOLD = "#DC2626";
const GOLD_LIGHT = "#EF4444";

interface ServiceFAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  // SEO
  title: string;
  metaDescription: string;
  canonicalPath: string;
  // Content
  serviceName: string;
  heroTagline: string;
  heroDescription: string;
  price: string;
  duration: string;
  heroImage: string;
  heroImageAlt: string;
  heroImagePosition?: string;
  // Body
  whatIsTitle: string;
  whatIsContent: string[];
  whatsIncluded: string[];
  benefits: string[];
  idealFor: string[];
  processSteps: { title: string; desc: string }[];
  // FAQ
  faqs: ServiceFAQ[];
  // Schema
  schemaDescription: string;
  schemaMinPrice: string;
  // Related services
  relatedServices: { name: string; path: string; price: string }[];
}

export default function ServicePageTemplate(props: ServicePageProps) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.metaDescription} />
        <link rel="canonical" href={`https://www.rdvaleting.co.uk${props.canonicalPath}`} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.metaDescription} />
        <meta property="og:url" content={`https://www.rdvaleting.co.uk${props.canonicalPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.rdvaleting.co.uk/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": props.serviceName,
          "description": props.schemaDescription,
          "provider": {
            "@type": "AutoRepair",
            "name": "RD Valeting",
            "url": "https://www.rdvaleting.co.uk/",
            "telephone": "+447393682365",
            "areaServed": ["Swindon", "Wiltshire", "Gloucestershire", "Somerset", "Berkshire"]
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "GBP",
            "price": props.schemaMinPrice,
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": props.schemaMinPrice,
              "priceCurrency": "GBP"
            }
          },
          "areaServed": [
            { "@type": "City", "name": "Swindon" },
            { "@type": "AdministrativeArea", "name": "Wiltshire" },
            { "@type": "AdministrativeArea", "name": "Gloucestershire" },
            { "@type": "AdministrativeArea", "name": "Berkshire" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
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
              "name": "Services",
              "item": "https://www.rdvaleting.co.uk/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": props.serviceName,
              "item": `https://www.rdvaleting.co.uk${props.canonicalPath}`
            }
          ]
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)' }} />
          <img
            src={props.heroImage}
            alt={props.heroImageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: props.heroImagePosition || 'center' }}
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
              <li><a href="/#services" className="text-white/50 hover:text-white transition-colors">Services</a></li>
              <li className="text-white/30">/</li>
              <li style={{ color: GOLD }}>{props.serviceName}</li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)' }}>
              <Crown className="w-3.5 h-3.5" style={{ color: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: GOLD_LIGHT }}>
                RD Valeting · {props.serviceName}
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.05]">
              {props.heroTagline}
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-xl font-light leading-relaxed mb-8">
              {props.heroDescription}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-5 py-2.5 rounded-full text-sm font-bold text-black" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}>
                {props.price}
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white/80" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Timer className="w-4 h-4" style={{ color: GOLD }} /> {props.duration}
              </span>
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white/80" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <Shield className="w-4 h-4" style={{ color: GOLD }} /> Fully Insured
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/447393682365?text=${encodeURIComponent(`Hi Rhys, I would like to book a ${props.serviceName} car model : `)}`}
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

      {/* What Is This Service */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>{props.whatIsTitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8" style={{ color: '#0A0A0A' }}>
              What's Included in Our {props.serviceName}
            </h3>
            <div className="space-y-4">
              {props.whatIsContent.map((paragraph, i) => (
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
                <CheckCircle2 className="w-5 h-5" style={{ color: GOLD }} />
                Everything Included
              </h4>
              <ul className="space-y-4">
                {props.whatsIncluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: GOLD }} />
                    <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#EDE8DF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Why Choose This Package</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>
              The RD Valeting Difference
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.benefits.map((benefit, i) => (
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
                <p className="text-sm font-medium leading-relaxed" style={{ color: '#2A2018' }}>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Our Process</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              How Your {props.serviceName} Works
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {props.processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-[24px] relative"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(220,38,38,0.15)' }}
              >
                <span className="text-6xl font-black italic text-white/5 absolute top-4 right-6">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#F5F0E8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Perfect For</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-12" style={{ color: '#0A0A0A' }}>
            Who Is This Package For?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {props.idealFor.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl text-left" style={{ background: '#EDE8DF', border: '1px solid #DDD5C5' }}>
                <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: GOLD }} />
                <span className="text-sm font-medium" style={{ color: '#2A2018' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#EDE8DF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>{props.serviceName} FAQ</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#0A0A0A' }}>
              Common Questions About Our {props.serviceName}
            </h3>
          </div>
          <div className="space-y-4">
            {props.faqs.map((faq, i) => (
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

      {/* Related Services */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>Explore More</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Other Packages You Might Like
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {props.relatedServices.map((svc) => (
              <Link
                key={svc.path}
                to={svc.path}
                className="p-8 rounded-[24px] group hover:-translate-y-2 transition-all duration-300 block"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(220,38,38,0.15)' }}
              >
                <h4 className="text-xl font-bold text-white mb-2">{svc.name}</h4>
                <p className="text-lg font-bold mb-4" style={{ color: GOLD }}>{svc.price}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all" style={{ color: GOLD_LIGHT }}>
                  View Package <ArrowRight className="w-3 h-3" />
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
            Ready to Book Your {props.serviceName}?
          </h2>
          <p className="text-base mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: '#8A8070' }}>
            We come to you — anywhere in Swindon, Wiltshire, and surrounding areas. Fully insured. Fully mobile. Book today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/447393682365?text=${encodeURIComponent(`Hi Rhys, I would like to book a ${props.serviceName} car model : `)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all text-white inline-flex items-center gap-3"
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
              <span className="text-xs font-bold text-black/60">Swindon, Wiltshire & Beyond</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: GOLD }} />
              <span className="text-xs font-bold text-black/60">Mon–Sun 8am–7pm</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
