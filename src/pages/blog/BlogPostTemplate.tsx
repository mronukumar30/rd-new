import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock, Crown, MessageCircle, Phone } from "lucide-react";
import { COMPANY_DETAILS } from "../../constants";

const GOLD = "#DC2626";
const GOLD_LIGHT = "#EF4444";

interface BlogPostProps {
  title: string;
  metaDescription: string;
  canonicalPath: string;
  heroImage: string;
  date: string;
  readTime: string;
  author?: string;
  children: React.ReactNode;
}

export default function BlogPostTemplate(props: BlogPostProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const author = props.author || "Phil";

  return (
    <>
      <Helmet>
        <title>{props.title} | RD Valeting</title>
        <meta name="description" content={props.metaDescription} />
        <link rel="canonical" href={`https://www.rdvaleting.co.uk${props.canonicalPath}`} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.metaDescription} />
        <meta property="og:url" content={`https://www.rdvaleting.co.uk${props.canonicalPath}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://www.rdvaleting.co.uk${props.heroImage}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": props.title,
          "image": `https://www.rdvaleting.co.uk${props.heroImage}`,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "RD Valeting",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.rdvaleting.co.uk/logo.png"
            }
          },
          "datePublished": "2026-08-08"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rdvaleting.co.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.rdvaleting.co.uk/blog" },
            { "@type": "ListItem", "position": 3, "name": props.title, "item": `https://www.rdvaleting.co.uk${props.canonicalPath}` }
          ]
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 bg-black min-h-[50vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black z-10" />
          <img src={props.heroImage} alt="" className="w-full h-full object-cover opacity-30" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto w-full text-center">
          <nav className="mb-8 flex justify-center" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]">
              <li><Link to="/" className="text-white/50 hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li><Link to="/blog" className="text-white/50 hover:text-white transition-colors">Blog</Link></li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {props.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-widest text-white/60">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" style={{ color: GOLD }} /> {props.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" style={{ color: GOLD }} /> {props.readTime}</span>
              <span className="flex items-center gap-2" style={{ color: GOLD_LIGHT }}>By {author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6 md:px-12" style={{ background: '#F5F0E8' }}>
        <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-[#0A0A0A] prose-p:text-[#5A5040] prose-a:text-[#DC2626] prose-a:no-underline hover:prose-a:underline prose-li:text-[#5A5040] prose-strong:text-[#2A2018]">
          {props.children}
        </article>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-20 pt-16" style={{ borderTop: '1px solid #DDD5C5' }}>
          <div className="p-10 rounded-[32px] text-center" style={{ background: '#0A0A0A' }}>
            <Crown className="w-8 h-8 mx-auto mb-6" style={{ color: GOLD }} />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for the King Standard?</h3>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              If you want professional detailing results from experts who treat your car like royalty, get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY_DETAILS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all text-black inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})` }}
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
              <a
                href={COMPANY_DETAILS.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all inline-flex items-center gap-3 text-white w-full sm:w-auto justify-center"
                style={{ border: `1px solid rgba(220,38,38,0.5)` }}
              >
                Book Online <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
