import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Crown } from "lucide-react";

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#E2C97A";

const BLOG_POSTS = [
  {
    id: "is-ceramic-coating-worth-it",
    title: "Is Ceramic Coating Worth It? A Detailer's Honest Guide",
    excerpt: "Everything you need to know about ceramic coating your car. We break down the costs, benefits, longevity, and whether it's the right choice for your vehicle.",
    image: "/king-of-detailing-hero.webp",
    date: "Aug 8, 2026",
    readTime: "8 min read"
  },
  {
    id: "car-detailing-cost-uk",
    title: "How Much Does Car Detailing Cost in the UK (2026 Guide)",
    excerpt: "A transparent breakdown of car detailing prices in the UK. Discover what goes into the cost and why premium detailing is priced the way it is.",
    image: "/bmw-535d-interior-detailing-luton.webp",
    date: "Aug 8, 2026",
    readTime: "6 min read"
  },
  {
    id: "car-detailing-vs-valeting",
    title: "Car Detailing vs Car Valeting: What's the Difference?",
    excerpt: "Understand the key differences between a standard car valet and professional car detailing. Learn about the tools, techniques, and the superior results detailing provides.",
    image: "/bmw-535d-deep-clean-luton.webp",
    date: "Aug 8, 2026",
    readTime: "5 min read"
  },
  {
    id: "how-often-to-detail-car",
    title: "How Often Should You Detail Your Car?",
    excerpt: "A complete guide on detailing frequency. From seasonal prep to regular maintenance, find out the ideal schedule to keep your car looking factory-fresh year-round.",
    image: "/car-detailing-luton-service.webp",
    date: "Aug 8, 2026",
    readTime: "4 min read"
  }
];

export default function BlogIndexPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Car Detailing Blog | Tips, Guides & Advice | King of Detailing</title>
        <meta name="description" content="Expert car detailing tips, guides, and advice from King of Detailing. Learn about ceramic coatings, paint correction, maintenance, and more." />
        <link rel="canonical" href="https://www.kingofdetailinguk.com/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.kingofdetailinguk.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.kingofdetailinguk.com/blog" }
          ]
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-black pt-40 pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black z-10" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 50%)', zIndex: 11 }} />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]">
              <li><Link to="/" className="text-white/50 hover:text-white transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li style={{ color: GOLD }}>Blog</li>
            </ol>
          </nav>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}>
              <Crown className="w-3.5 h-3.5" style={{ color: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: GOLD_LIGHT }}>
                Knowledge & Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.05]">
              The King's Journal
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-xl font-light leading-relaxed">
              Expert advice, deep-dive guides, and professional insights into the world of premium car care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 md:px-12" style={{ background: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {BLOG_POSTS.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group flex flex-col rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-white"
                style={{ border: '1px solid #DDD5C5', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}
              >
                <Link to={`/blog/${post.id}`} className="block aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-[#8A8070]">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#8A8070]/30" />
                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-bold mb-4 tracking-tight transition-colors group-hover:text-[#C9A84C]" style={{ color: '#0A0A0A' }}>
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm leading-relaxed mb-8 font-light flex-1" style={{ color: '#5A5040' }}>
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest pb-2 transition-all duration-200 hover:gap-3 w-fit"
                    style={{ color: GOLD, borderBottom: `1px solid rgba(201,168,76,0.3)` }}
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
