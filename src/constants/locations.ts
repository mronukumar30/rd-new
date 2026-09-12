/**
 * Location data for 10 core service areas across Swindon, Wiltshire & surrounding regions.
 * Each location has unique content tailored to local driving conditions and RD Valeting services.
 */

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface NearbyArea {
  name: string;
  path: string;
}

export interface LocationData {
  // SEO
  slug: string;
  title: string;
  metaDescription: string;
  // Location info
  locationName: string;
  county: string;
  region: string;
  coordinates: { lat: number; lng: number };
  travelTime: string;
  distanceFromBase: string;
  // Content
  heroTagline: string;
  heroSubtitle: string;
  heroImage?: string;
  heroImagePosition?: string;
  heroOverlayOpacity?: string;
  introTitle: string;
  introParagraphs: string[];
  localHighlights: string[];
  whyChooseUs: string[];
  faqs: LocationFAQ[];
  nearbyAreas: NearbyArea[];
  // Google Maps embed URL
  mapsEmbedUrl: string;
}

export const LOCATIONS: LocationData[] = [
  // 1. Swindon (Home Base)
  {
    slug: "mobile-car-detailing-swindon",
    title: "Mobile Car Valeting in Swindon | RD Valeting",
    metaDescription: "Swindon's trusted mobile car valeting & detailing service. Mini valets from £30, maintenance washes £50, deep cleans £100. We come to your driveway. Fully insured. Book today.",
    heroImage: "/723456333_1027111233340868_6744532048742945277_n.jpg",
    locationName: "Swindon",
    county: "Wiltshire",
    region: "Wiltshire",
    coordinates: { lat: 51.5558, lng: -1.7797 },
    travelTime: "Based right here in Swindon — zero travel charge",
    distanceFromBase: "0 miles — our home base",
    heroTagline: "Swindon's Premier Mobile Car Valeting & Detailing",
    heroSubtitle: "We're proud to call Swindon our home. RD Valeting delivers high-standard, meticulous car care directly to your driveway across Old Town, North Swindon, Wroughton, and beyond — zero travel charges, no hassle, just immaculate showroom results.",
    introTitle: "Swindon's Trusted Choice for Mobile Valeting",
    introParagraphs: [
      "RD Valeting is based in Swindon and built around a simple promise: exceptional standards, honest pricing, and genuine reliability. From residential driveways in Old Town and Lawn to the newer estates of Priory Vale, Shaw, and Redhouse, we know Swindon inside out.",
      "Daily commutes along the M4, the A419, and Great Western Way expose your car to heavy road film, brake fallout, and harsh seasonal grime. Our tailored valeting packages are engineered to eliminate bonded dirt, restore high-gloss reflections, and keep your vehicle decontaminated all year round.",
      "You never need to drop your car off at a hand car wash or wait around in industrial estates. Rhys arrives on time with a fully self-contained mobile valeting unit, complete with professional-grade chemicals, ultra-soft microfibres, and high-pressure detailing gear.",
      "As our home base, all Swindon postcodes (SN1 through SN26) receive our fastest booking availability and zero travel supplements. Choose from our £30 Mini Valet, £50 Maintenance Wash, £100 Deep Clean, or comprehensive Full Valet & Detailing."
    ],
    localHighlights: [
      "Based in Swindon — zero travel charges across all Swindon postcodes",
      "Covering Old Town, Lawn, Wroughton, Haydon Wick, Shaw, Peatmoor & Redhouse",
      "Combating M4 corridor road grit, industrial fallout & Wiltshire winter grime",
      "Priority same-week booking for SN1 through SN26 postcodes",
      "5-star rated across Swindon with 100% verified customer satisfaction"
    ],
    whyChooseUs: [
      "Swindon is our home base — fast, friendly, punctual mobile service",
      "Zero travel fees anywhere in Swindon and immediate surrounds",
      "Direct personal service from Rhys — owner operated, no inexperienced sub-contractors",
      "Full public liability insurance for total peace of mind on your driveway",
      "Safe, swirl-free two-bucket wash methods and pH-balanced chemicals",
      "Transparent, fixed package pricing with no hidden add-on costs"
    ],
    faqs: [
      {
        question: "How much does mobile car valeting cost in Swindon?",
        answer: "Our valeting packages in Swindon start at just £30 for our Mini Valet freshen-up, £50 for our popular Maintenance Wash, £100 for a thorough interior & exterior Deep Clean, and from £150 for our Full Valet & Detailing package. As Swindon is our home base, there is zero travel fee."
      },
      {
        question: "Which areas of Swindon do you cover?",
        answer: "We cover all areas of Swindon without exception, including Old Town, Wroughton, Coate, Lawn, Shaw, Sparcells, Peatmoor, Haydon Wick, Priory Vale, Abbey Meads, Stratton St Margaret, and Covingham (SN1 through SN26)."
      },
      {
        question: "Do I need to supply water or electricity?",
        answer: "Our mobile van is equipped to work efficiently on your driveway. An outdoor domestic tap or standard socket is appreciated if easily accessible, but we can accommodate arrangements based on your property layout. Let us know when booking!"
      },
      {
        question: "How do I book an appointment with Rhys in Swindon?",
        answer: "Booking takes under 60 seconds — use our 3-step online booking wizard on this website, send Rhys a direct WhatsApp message at 07393 682 365, or give us a call. We operate 7 days a week, 8:00 AM to 7:00 PM."
      }
    ],
    nearbyAreas: [
      { name: "Royal Wootton Bassett", path: "/car-detailing-royal-wootton-bassett" },
      { name: "Marlborough", path: "/car-detailing-marlborough" },
      { name: "Cirencester", path: "/car-detailing-cirencester" },
      { name: "Chippenham", path: "/car-detailing-chippenham" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39760!2d-1.7797!3d51.5558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871444f6f70e8cb%3A0x6a1a729e2c668ef0!2sSwindon!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 2. Marlborough
  {
    slug: "car-detailing-marlborough",
    title: "Mobile Car Valeting in Marlborough | RD Valeting",
    metaDescription: "Professional mobile car valeting & detailing in Marlborough, Wiltshire. Mini valets from £30, maintenance washes £50, deep cleans £100. We come to your home. Book today.",
    heroImage: "/719890908_2222286848526617_3057517277440017740_n.jpg",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.45]",
    locationName: "Marlborough",
    county: "Wiltshire",
    region: "Wiltshire",
    coordinates: { lat: 51.4210, lng: -1.7300 },
    travelTime: "~20 minutes south from our Swindon base via A346",
    distanceFromBase: "~12 miles south of Swindon",
    heroTagline: "Marlborough's Trusted Mobile Car Valeting Specialist",
    heroSubtitle: "Bringing showroom gloss and meticulous interior rejuvenation directly to your home in Marlborough. From Savernake Forest estates to the historic High Street, RD Valeting delivers premier care to your doorstep.",
    introTitle: "Marlborough's High-Standard Mobile Detailing",
    introParagraphs: [
      "Marlborough is famed for its wide Georgian High Street, renowned College, and historic charm. Residents in Marlborough take genuine pride in their vehicles, and RD Valeting provides the dependable, high-touch mobile service to keep them spotless.",
      "Rural Wiltshire country lanes, agricultural debris, and heavy tree pollen from surrounding ancient woodlands like Savernake Forest present constant paintwork challenges. Standard washes often leave stubborn road film or light scratches; our safe contact methods ensure a swirl-free, radiant finish.",
      "Just 20 minutes down the A346 from our Swindon base, we travel regularly to private residences throughout Marlborough, Manton, Mildenhall, and Ogbourne St George.",
      "From regular maintenance washes to deep interior shampooing and paint protection, Rhys takes personal care of every detail so your car looks and smells showroom fresh."
    ],
    localHighlights: [
      "Serving all Marlborough SN8 postcodes, Manton, Mildenhall & the Ogbournes",
      "Combating rural lane mud, Savernake tree sap & road salt",
      "Specialising in prestige SUVs, family estates, and luxury sports cars",
      "Easy, stress-free appointment times 7 days a week",
      "Fully self-contained mobile valeting setup"
    ],
    whyChooseUs: [
      "Just 20 minutes from our Swindon base for prompt, reliable arrivals",
      "Safe, swirl-free wash techniques tailored for delicate clear coats",
      "Full interior sanitisation, steam cleaning, and fabric extraction",
      "Owner-operated care with Rhys personally attending every booking",
      "Fully insured with comprehensive public liability coverage"
    ],
    faqs: [
      {
        question: "Do you travel out to Marlborough and surrounding villages?",
        answer: "Yes, we visit Marlborough weekly! We cover Marlborough town centre, Manton, Mildenhall, Ramsbury, and all surrounding SN8 villages with quick response times."
      },
      {
        question: "How much is a car detail in Marlborough?",
        answer: "Our prices start from £30 for a Mini Valet, £50 for our Maintenance Wash, and £100 for an intensive Deep Clean. We provide transparent, honest pricing with no surprises."
      },
      {
        question: "Can you detail my car while I'm at work or home?",
        answer: "Yes! The beauty of our mobile service is total convenience. We come directly to your driveway or workplace so you can carry on with your day while we transform your vehicle."
      }
    ],
    nearbyAreas: [
      { name: "Swindon", path: "/mobile-car-detailing-swindon" },
      { name: "Royal Wootton Bassett", path: "/car-detailing-royal-wootton-bassett" },
      { name: "Newbury", path: "/car-detailing-newbury" },
      { name: "Chippenham", path: "/car-detailing-chippenham" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39800!2d-1.7300!3d51.4210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48714cf5f16298ef%3A0xd64f1bc667104b28!2sMarlborough!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 3. Cirencester
  {
    slug: "car-detailing-cirencester",
    title: "Mobile Car Valeting in Cirencester | RD Valeting",
    metaDescription: "Capital of the Cotswolds mobile car valeting & detailing. Mini valets from £30, maintenance washes £50, deep cleans £100. We come to your home in Cirencester. Book today.",
    heroImage: "/724453567_1741795673842657_7212829807354336478_n.jpg",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Cirencester",
    county: "Gloucestershire",
    region: "Cotswolds",
    coordinates: { lat: 51.7176, lng: -1.9680 },
    travelTime: "~25 minutes north from our Swindon base via A419",
    distanceFromBase: "~15 miles north of Swindon",
    heroTagline: "Cotswolds Mobile Car Valeting & Detailing",
    heroSubtitle: "Serving the historic Capital of the Cotswolds with studio-grade mobile valeting. Protecting your vehicle from rural limestone dust and country road grime, right on your driveway in Cirencester.",
    introTitle: "Cirencester's Go-To Mobile Car Care",
    introParagraphs: [
      "Nestled in the heart of the Gloucestershire Cotswolds, Cirencester is renowned for its historic architecture, vibrant community, and stunning rural borders. Maintaining a pristine vehicle in the Cotswolds requires specialist care due to fine limestone dust and muddy country lanes.",
      "RD Valeting travels up the dual carriageway A419 from Swindon in under 25 minutes, providing Cirencester drivers with an elite mobile valeting service that eliminates the hassle of automated or roadside car washes.",
      "Whether you reside near Cirencester Park, Stratton, Chesterton, or nearby villages such as South Cerney and Siddington, our fully equipped van delivers pH-neutral snow foams, thorough wheel decontamination, and deep interior extraction directly to your door.",
      "We treat every vehicle — from practical 4x4s and daily commuters to classic and performance marques — with uncompromising attention to detail."
    ],
    localHighlights: [
      "Covering Cirencester (GL7), Stratton, Chesterton, Watermoor & South Cerney",
      "Combating Cotswold stone dust, mud spatter, and agricultural grime",
      "Fast 25-minute journey straight up the A419",
      "Specialist interior decontamination for countryside and pet owners",
      "100% 5-star feedback from local Gloucestershire clients"
    ],
    whyChooseUs: [
      "Convenient home or workplace visits across Cirencester",
      "Safe multi-stage wash process prevents clear coat marring",
      "Thorough decontamination that removes iron fallout and tar",
      "Clear, honest pricing: £30 Mini Valet, £50 Maintenance, £100 Deep Clean",
      "Fully insured with owner Rhys personally handling your vehicle"
    ],
    faqs: [
      {
        question: "Do you service Cirencester and surrounding Cotswold villages?",
        answer: "Yes! We regularly travel up the A419 to Cirencester, South Cerney, Siddington, Kemble, and neighbouring villages throughout the GL7 postcode area."
      },
      {
        question: "Can you remove stubborn rural mud and pet hair?",
        answer: "Absolutely. Our Deep Clean package (£100) includes high-suction vacuuming, deep carpet shampooing, steam extraction, and complete interior restoration designed specifically to tackle Cotswold mud and pet hair."
      },
      {
        question: "How long does a deep clean take?",
        answer: "A standard Deep Clean takes approximately 3 to 4 hours depending on the size and initial condition of your vehicle. We never rush, ensuring showroom-level results."
      }
    ],
    nearbyAreas: [
      { name: "Swindon", path: "/mobile-car-detailing-swindon" },
      { name: "Royal Wootton Bassett", path: "/car-detailing-royal-wootton-bassett" },
      { name: "Chippenham", path: "/car-detailing-chippenham" },
      { name: "Oxford", path: "/car-detailing-oxford" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39680!2d-1.9680!3d51.7176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713f0c3a812891%3A0xc48083a2d216503c!2sCirencester!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 4. Chippenham
  {
    slug: "car-detailing-chippenham",
    title: "Mobile Car Valeting in Chippenham | RD Valeting",
    metaDescription: "Professional mobile car valeting & detailing in Chippenham, Wiltshire. Mini valets from £30, maintenance washes £50, deep cleans £100. We come to you. Book today.",
    heroImage: "/723830628_27152605947682802_3120737853125552335_n.jpg",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Chippenham",
    county: "Wiltshire",
    region: "Wiltshire",
    coordinates: { lat: 51.4585, lng: -2.1158 },
    travelTime: "~25–30 minutes west via M4 / A420",
    distanceFromBase: "~18 miles west of Swindon",
    heroTagline: "Expert Mobile Car Valeting in Chippenham",
    heroSubtitle: "Convenient, high-standard mobile car detailing for Chippenham residents. We bring the studio to your driveway in Cepen Park, Pewsham, Monkton Park, and surrounding Wiltshire villages.",
    introTitle: "Chippenham's Trusted Mobile Valeting Service",
    introParagraphs: [
      "Chippenham is one of Wiltshire's most vibrant and rapidly expanding market towns. Situated along the River Avon with rapid links to the M4 corridor, local motorists face heavy motorway grime and stop-and-start commuter wear.",
      "RD Valeting makes caring for your vehicle simple. You don't have to sacrifice your weekend queuing at a car wash or settle for harsh chemical washes that strip waxes and cause paint swirl marks.",
      "Rhys travels directly to your driveway across Chippenham, Cepen Park North & South, Pewsham, and nearby areas like Corsham and Lacock. We arrive fully equipped with premium detailing solutions that protect your paintwork and restore deep interior freshness.",
      "Enjoy transparent pricing and dependable punctuality. Book your £30 Mini Valet, £50 Maintenance Wash, or £100 Deep Clean online in under a minute."
    ],
    localHighlights: [
      "Covering all Chippenham SN14 & SN15 postcodes, Pewsham, Cepen Park & Monkton Park",
      "Quick access along the M4 corridor from Swindon",
      "Protection against motorway spray, industrial fallout, and winter road salts",
      "Weekend and evening appointment availability 7 days a week",
      "Full interior wet-vac extraction and leather conditioning"
    ],
    whyChooseUs: [
      "Reliable arrival with real-time updates directly from Rhys",
      "Safe, swirl-free two-bucket hand washing",
      "Complete interior rejuvenation: seats, carpets, vents, and plastics",
      "Fully insured with £2M+ liability coverage",
      "No hidden fees or unexpected extras"
    ],
    faqs: [
      {
        question: "Do you cover all of Chippenham?",
        answer: "Yes, we cover Chippenham town centre, Pewsham, Cepen Park, Monkton Park, Hardenhuish, and out towards Corsham and Calne."
      },
      {
        question: "What is included in the £50 Maintenance Wash?",
        answer: "Our £50 Maintenance Wash includes a pre-wash snow foam, safe hand wash, wheel & tyre deep clean, spray sealant, interior vacuum, wipe down of dash and console, and crystal-clear glass inside and out."
      },
      {
        question: "Can I book on the weekend in Chippenham?",
        answer: "Yes, RD Valeting operates 7 days a week, from 8:00 AM to 7:00 PM, including Saturdays and Sundays."
      }
    ],
    nearbyAreas: [
      { name: "Swindon", path: "/mobile-car-detailing-swindon" },
      { name: "Royal Wootton Bassett", path: "/car-detailing-royal-wootton-bassett" },
      { name: "Bath", path: "/car-detailing-bath" },
      { name: "Marlborough", path: "/car-detailing-marlborough" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39780!2d-2.1158!3d51.4585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871790408ea69cb%3A0x67396658933b91a!2sChippenham!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 5. Royal Wootton Bassett
  {
    slug: "car-detailing-royal-wootton-bassett",
    title: "Mobile Car Valeting in Royal Wootton Bassett | RD Valeting",
    metaDescription: "Premium mobile car valeting in Royal Wootton Bassett. Mini valets from £30, maintenance washes £50, deep cleans £100. Right on Swindon's doorstep with zero travel fees. Book now.",
    heroImage: "/718919623_896324679727402_6846985472856402868_n.jpg",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.45]",
    locationName: "Royal Wootton Bassett",
    county: "Wiltshire",
    region: "Wiltshire",
    coordinates: { lat: 51.5414, lng: -1.9056 },
    travelTime: "Just 10–12 minutes west from our Swindon base",
    distanceFromBase: "~6 miles west of Swindon",
    heroTagline: "Royal Wootton Bassett's Local Mobile Valeter",
    heroSubtitle: "Located right next door to our home base, Royal Wootton Bassett residents enjoy rapid booking times and zero travel charges. We bring showroom valeting straight to your driveway.",
    introTitle: "Royal Wootton Bassett's Premier Mobile Car Care",
    introParagraphs: [
      "Royal Wootton Bassett is one of our most frequent and cherished stops. Situated just 6 miles west of central Swindon along the A3102, we are practically around the corner.",
      "Whether you reside near the historic High Street, Woodshaw, Noremarsh, or Hook, you benefit from priority booking and prompt arrival with no travel charges whatsoever.",
      "Road salt from winter gritting along the M4 junction and country lane dust can quickly degrade your vehicle's gloss and leave clear coats feeling gritty. Our decontamination and safe wash processes gently lift bonded contaminants to leave paintwork slick and protected.",
      "Rhys takes personal pride in serving local Wootton Bassett families and business professionals, ensuring your vehicle receives the same thorough attention to detail as our own."
    ],
    localHighlights: [
      "Only 10 minutes from our base — fastest response time in Wiltshire",
      "Covering all SN4 postcodes: Woodshaw, Noremarsh, Hook & High Street",
      "Zero travel surcharge for all Royal Wootton Bassett bookings",
      "Regular scheduled maintenance cleans available every 2 to 4 weeks",
      "Full decontamination including iron fallout and tar removal"
    ],
    whyChooseUs: [
      "Practically neighbours — rapid availability and punctual service",
      "Personal care from business owner Rhys",
      "High-grade detailing products that protect your vehicle's resale value",
      "Full public liability insurance for complete driveway protection",
      "Transparent pricing: £30 Mini Valet, £50 Maintenance, £100 Deep Clean"
    ],
    faqs: [
      {
        question: "How quickly can you get to Royal Wootton Bassett?",
        answer: "As we are based right next door in Swindon, Royal Wootton Bassett is one of our primary locations. Same-week and often next-day appointments are readily available."
      },
      {
        question: "Is there any travel charge for Royal Wootton Bassett?",
        answer: "None at all! Royal Wootton Bassett falls within our immediate home territory (SN4), meaning zero travel charges on every package."
      },
      {
        question: "How do I book for my driveway in Wootton Bassett?",
        answer: "You can book directly via WhatsApp with Rhys at 07393 682 365 or select your date and service using our online 3-step booking wizard on this page."
      }
    ],
    nearbyAreas: [
      { name: "Swindon", path: "/mobile-car-detailing-swindon" },
      { name: "Cirencester", path: "/car-detailing-cirencester" },
      { name: "Chippenham", path: "/car-detailing-chippenham" },
      { name: "Marlborough", path: "/car-detailing-marlborough" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39770!2d-1.9056!3d51.5414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487140e7df6ef5bf%3A0x6b4430e32b704c7b!2sRoyal%20Wootton%20Bassett!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 6. Bath
  {
    slug: "car-detailing-bath",
    title: "Mobile Car Valeting in Bath | RD Valeting",
    metaDescription: "Prestige mobile car valeting & detailing in Bath, Somerset. Deep cleans, maintenance washes & paint protection. We travel to your driveway. Book with Rhys today.",
    heroImage: "/gallery-car-detailing-1.webp",
    heroImagePosition: "object-center",
    heroOverlayOpacity: "bg-black/[0.45]",
    locationName: "Bath",
    county: "Somerset",
    region: "Somerset",
    coordinates: { lat: 51.3811, lng: -2.3590 },
    travelTime: "~45 minutes southwest from Swindon via M4 & A46",
    distanceFromBase: "~30 miles southwest of Swindon",
    heroTagline: "Prestige Mobile Car Detailing in Bath",
    heroSubtitle: "Meticulous vehicle detailing delivered to your Georgian driveway in Bath. From Lansdown and Widcombe to Bathwick and Combe Down, RD Valeting provides unmatched care for discerning vehicle owners.",
    introTitle: "Bath's Premier Mobile Detailing Experience",
    introParagraphs: [
      "The UNESCO World Heritage City of Bath is world-famous for its Georgian architecture, prestigious residential quarters, and discerning car owners. At RD Valeting, we provide the caliber of mobile car care that matches this exceptional setting.",
      "Bath's hilly topography, limestone masonry dust, and heavy city traffic demand safe, gentle, yet deeply effective cleaning techniques. We employ pH-balanced cleansers, soft lamb's wool wash mitts, and warm-air drying to protect clear coats from unsightly swirl marks and scratches.",
      "We travel straight down the M4 and A46 to private homes across Lansdown, Widcombe, Bathwick, Bathampton, and Combe Down. We arrive fully equipped to detail your vehicle on your driveway while you relax at home.",
      "From intensive £100 Deep Cleans that reset leather and carpets to showroom condition, to full valets and detailing from £150, Rhys delivers bespoke craftsmanship on every booking."
    ],
    localHighlights: [
      "Serving Bath BA1 & BA2: Lansdown, Widcombe, Bathwick, Combe Down & Bathampton",
      "Specialising in prestige marques: Porsche, Range Rover, BMW, Mercedes, Audi",
      "Tackling Bath stone dust, road film, and interior leather conditioning",
      "Convenient at-home appointments without disrupting your schedule",
      "Fully insured with £2M liability coverage"
    ],
    whyChooseUs: [
      "Elite mobile detailing brought directly to your home in Bath",
      "Personal service from Rhys with obsessive attention to detail",
      "Safe contact methods to keep delicate luxury clear coats swirl-free",
      "Comprehensive interior steam sanitisation and leather care",
      "Transparent package rates with clear communication throughout"
    ],
    faqs: [
      {
        question: "Do you travel to Bath for detailing appointments?",
        answer: "Yes! Bath is a regular service destination for RD Valeting. We travel via the M4/A46 for Deep Clean and Full Valet bookings throughout Bath and surrounding Somerset villages."
      },
      {
        question: "How do you care for fine leather interiors?",
        answer: "We use dedicated pH-neutral leather cleaners and horsehair brushes to gently lift grime from the grain, followed by a premium matte leather conditioner that prevents drying and cracking without leaving an oily residue."
      },
      {
        question: "How do I schedule a visit to Bath?",
        answer: "Simply book through our online booking wizard on this page or WhatsApp Rhys on 07393 682 365 with your Bath postcode and preferred date."
      }
    ],
    nearbyAreas: [
      { name: "Chippenham", path: "/car-detailing-chippenham" },
      { name: "Swindon", path: "/mobile-car-detailing-swindon" },
      { name: "Royal Wootton Bassett", path: "/car-detailing-royal-wootton-bassett" },
      { name: "Marlborough", path: "/car-detailing-marlborough" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39830!2d-2.3590!3d51.3811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871811a7a01289b%3A0xd64f1bc667104b28!2sBath!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 7. Newbury
  {
    slug: "car-detailing-newbury",
    title: "Mobile Car Valeting in Newbury | RD Valeting",
    metaDescription: "Professional mobile car valeting & detailing in Newbury, Berkshire. Deep cleans, maintenance washes & interior sanitisation on your driveway. Fully insured. Book today.",
    heroImage: "/723456333_1027111233340868_6744532048742945277_n.jpg",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.45]",
    locationName: "Newbury",
    county: "Berkshire",
    region: "Berkshire",
    coordinates: { lat: 51.4014, lng: -1.3231 },
    travelTime: "~30–35 minutes east via M4 / A34",
    distanceFromBase: "~25 miles east of Swindon",
    heroTagline: "Premier Mobile Car Detailing in Newbury",
    heroSubtitle: "Top-tier mobile valeting delivered straight to your home or office in Newbury. Serving Donnington, Greenham, Wash Common, and Thatcham with reliable, showroom-grade care.",
    introTitle: "Newbury's Trusted Mobile Valeting Specialist",
    introParagraphs: [
      "Newbury combines historic Berkshire charm with a thriving corporate community along the M4 innovation corridor. Drivers in Newbury demand high vehicle standards, whether preparing for executive commutes or weekend drives through the North Wessex Downs.",
      "RD Valeting connects directly via the M4 to deliver full mobile detailing across Newbury, Donnington, Speen, Wash Common, Greenham, and Thatcham.",
      "Country lane mud, agricultural runoff, and heavy motorway road spray take a heavy toll on Berkshire vehicles. Our multi-stage exterior decontamination strips away stubborn grit, while our interior detailing restores a clean, fresh, factory atmosphere.",
      "With Rhys attending every booking personally, you receive honest advice, unmatched punctuality, and a finish you will be proud to show off."
    ],
    localHighlights: [
      "Serving Newbury (RG14), Greenham, Wash Common, Donnington & Thatcham",
      "Direct 30-minute access via the M4 corridor",
      "Tackling Berkshire Downs mud, road salt, and tree sap",
      "Convenient driveway service for busy professionals and families",
      "High-power hot-water extraction and steam decontamination"
    ],
    whyChooseUs: [
      "Prompt, courteous mobile service directly to your location",
      "Expertise with all vehicle types from daily drivers to luxury performance cars",
      "Full public liability insurance for total protection",
      "Safe, scratch-free hand washing methods",
      "Clear, upfront prices: £30 Mini Valet, £50 Maintenance, £100 Deep Clean"
    ],
    faqs: [
      {
        question: "Do you travel to Newbury and Thatcham?",
        answer: "Yes, we regularly take bookings across Newbury, Thatcham, Greenham, and surrounding Berkshire villages."
      },
      {
        question: "What is included in the Deep Clean (£100) in Newbury?",
        answer: "The £100 Deep Clean is our complete reset: snow foam, thorough hand wash, wheel & arch decontamination, gloss sealant, full interior vacuum, wet-vac shampoo on upholstery and carpets, dash & trim conditioning, and streak-free windows."
      },
      {
        question: "How do I book an appointment for my Newbury home?",
        answer: "You can book in under a minute using our online appointment form or message Rhys directly on WhatsApp at 07393 682 365."
      }
    ],
    nearbyAreas: [
      { name: "Marlborough", path: "/car-detailing-marlborough" },
      { name: "Swindon", path: "/mobile-car-detailing-swindon" },
      { name: "Reading", path: "/car-detailing-reading" },
      { name: "Oxford", path: "/car-detailing-oxford" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39810!2d-1.3231!3d51.4014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876a3e14fb1e687%3A0xc48083a2d216503c!2sNewbury!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 8. Oxford
  {
    slug: "car-detailing-oxford",
    title: "Mobile Car Valeting in Oxford | RD Valeting",
    metaDescription: "Professional mobile car valeting & detailing across Oxford, Oxfordshire. Mini valets from £30, maintenance washes £50, deep cleans £100. We come to you. Book today.",
    heroImage: "/719890908_2222286848526617_3057517277440017740_n.jpg",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Oxford",
    county: "Oxfordshire",
    region: "Oxfordshire",
    coordinates: { lat: 51.7520, lng: -1.2577 },
    travelTime: "~35–40 minutes northeast from Swindon via A420",
    distanceFromBase: "~30 miles northeast of Swindon",
    heroTagline: "Oxford's Premier Mobile Car Valeting Service",
    heroSubtitle: "Bringing showroom detailing to your driveway in the City of Dreaming Spires. Serving Summertown, Headington, Cumnor, and Botley with pristine, hassle-free valeting.",
    introTitle: "Oxford's Dependable Mobile Car Care",
    introParagraphs: [
      "Oxford is a city of historic elegance, world-class academia, and thriving technology parks. Navigating narrow city roads and busy arterial routes like the A420 and A34 exposes vehicles to heavy brake fallout, urban grime, and tree sap.",
      "RD Valeting travels straight up the A420 from Swindon in under 40 minutes, bringing our self-contained mobile studio directly to residential driveways across Headington, Summertown, Cumnor, Botley, and North Oxford.",
      "We eliminate the need to leave your car in public car parks or settle for rushed automated washes that leave swirl marks on delicate paint. We treat every vehicle with high-grade snow foam, safe two-bucket washing, and deep interior extraction.",
      "Whether you need regular maintenance for your daily commute or a deep clean reset before an event, Rhys delivers flawless results with complete punctuality."
    ],
    localHighlights: [
      "Serving Oxford OX1, OX2, OX3 & OX4: Summertown, Headington, Cumnor & Botley",
      "Direct, fast route via A420 from Swindon",
      "Combating urban pollution, tree sap, and A34 commuter road film",
      "Safe on all luxury paint finishes and ceramic coatings",
      "Convenient home or workplace visits 7 days a week"
    ],
    whyChooseUs: [
      "We travel straight to your driveway — zero travel hassle for you",
      "Personalised care from owner Rhys with guaranteed high standards",
      "Full interior deep cleaning: stain removal, steam sanitisation, and leather care",
      "Fully insured with comprehensive public liability cover",
      "Honest, fixed rates: £30 Mini Valet, £50 Maintenance, £100 Deep Clean"
    ],
    faqs: [
      {
        question: "Do you travel to Oxford and surrounding Oxfordshire villages?",
        answer: "Yes! We travel up the A420 regularly to service clients in Oxford, Cumnor, Botley, Headington, Summertown, and surrounding areas."
      },
      {
        question: "Can you detail my car at my office in Oxford?",
        answer: "Yes, as long as there is an authorised parking space or driveway where we can position our van safely, we can detail your vehicle while you work."
      },
      {
        question: "How do I secure an Oxford appointment?",
        answer: "Use our online 3-step appointment booking wizard on this page, or send a quick WhatsApp message to Rhys at 07393 682 365."
      }
    ],
    nearbyAreas: [
      { name: "Swindon", path: "/mobile-car-detailing-swindon" },
      { name: "Cirencester", path: "/car-detailing-cirencester" },
      { name: "Newbury", path: "/car-detailing-newbury" },
      { name: "Reading", path: "/car-detailing-reading" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39670!2d-1.2577!3d51.7520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd64f1bc667104b28!2sOxford!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 9. Reading
  {
    slug: "car-detailing-reading",
    title: "Mobile Car Valeting in Reading | RD Valeting",
    metaDescription: "Professional mobile car valeting & detailing across Reading, Berkshire. Deep cleans, maintenance washes & paint protection. We travel to your driveway. Book today.",
    heroImage: "/724453567_1741795673842657_7212829807354336478_n.jpg",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.45]",
    locationName: "Reading",
    county: "Berkshire",
    region: "Berkshire",
    coordinates: { lat: 51.4543, lng: -0.9781 },
    travelTime: "~45–50 minutes east via M4",
    distanceFromBase: "~40 miles east of Swindon",
    heroTagline: "Reading's High-Quality Mobile Car Valeting",
    heroSubtitle: "Serving the Thames Valley with premier mobile valeting. Bringing showroom-grade cleans and interior decontamination straight to your driveway in Caversham, Earley, and Tilehurst.",
    introTitle: "Reading's Professional Mobile Detailing Service",
    introParagraphs: [
      "Reading is the bustling commercial powerhouse of the Thames Valley. With high commuter traffic along the M4 corridor, vehicles in Reading face constant exposure to road spray, diesel particulate fallout, and harsh winter gritting.",
      "RD Valeting offers a premium alternative to local automated car washes. We travel directly to your home across Caversham, Earley, Calcot, Tilehurst, and Woodley, equipped with everything needed to restore your vehicle to immaculate showroom condition.",
      "Our safe washing protocols protect your clear coat from the swirl marks and fine scratches created by mechanical car washes. Inside, our wet-vac extraction and steam sanitisation remove ground-in dirt, pet hair, and stale odours.",
      "Experience the ultimate convenience of top-tier mobile detailing without lifting a finger. Book online or contact Rhys directly on WhatsApp."
    ],
    localHighlights: [
      "Covering Reading RG1, RG2, RG4, RG6, Caversham, Earley, Tilehurst & Calcot",
      "Direct 45-minute route straight down the M4 corridor",
      "Protection against heavy Thames Valley commuter grime and industrial fallout",
      "Comprehensive interior shampooing, stain removal, and trim restoration",
      "Full public liability coverage for complete driveway safety"
    ],
    whyChooseUs: [
      "Prompt and reliable mobile appointments across Reading",
      "Personal care from owner Rhys with guaranteed quality",
      "Safe two-bucket wash technique that preserves your vehicle's gloss",
      "Transparent package rates: £30 Mini Valet, £50 Maintenance, £100 Deep Clean",
      "5-star rated service with hundreds of satisfied clients"
    ],
    faqs: [
      {
        question: "Do you travel to Reading for mobile valeting?",
        answer: "Yes, Reading is a regular destination on our M4 service route. We take Deep Clean, Full Valet, and multi-vehicle bookings throughout Reading and the Thames Valley."
      },
      {
        question: "Can you detail multiple cars on the same driveway?",
        answer: "Absolutely! We frequently detail 2 or more household vehicles in a single visit, saving you time and keeping your entire driveway looking pristine."
      },
      {
        question: "How do I book for my Reading address?",
        answer: "Select your preferred package and date via our online booking wizard, or message Rhys directly on WhatsApp at 07393 682 365."
      }
    ],
    nearbyAreas: [
      { name: "Newbury", path: "/car-detailing-newbury" },
      { name: "Oxford", path: "/car-detailing-oxford" },
      { name: "Swindon", path: "/mobile-car-detailing-swindon" },
      { name: "London", path: "/car-detailing-london" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39750!2d-0.9781!3d51.4543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48769b1897c8ff79%3A0xc48083a2d216503c!2sReading!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },

  // 10. London
  {
    slug: "car-detailing-london",
    title: "Mobile Car Valeting in London | RD Valeting",
    metaDescription: "Bespoke mobile car detailing & deep cleans for London and M4 corridor clients. Luxury vehicle care directly on your private driveway. Fully insured. Book with Rhys.",
    heroImage: "/719890908_2222286848526617_3057517277440017740_n.jpg",
    heroImagePosition: "object-center",
    heroOverlayOpacity: "bg-black/[0.45]",
    locationName: "London",
    county: "Greater London",
    region: "London",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    travelTime: "~75–90 minutes direct via M4",
    distanceFromBase: "~75 miles east of Swindon",
    heroTagline: "Bespoke Mobile Car Detailing for London",
    heroSubtitle: "Delivering studio-grade vehicle care and deep interior decontamination to private residences across West and Central London. Professional, discreet, and uncompromising quality.",
    introTitle: "London's High-End Mobile Valeting Solution",
    introParagraphs: [
      "London motorists face some of the highest concentrations of brake dust, diesel particulate fallout, and road contamination anywhere in the UK. Keeping a luxury or daily vehicle pristine in the capital requires meticulous, dedicated care.",
      "RD Valeting provides high-end mobile detailing for clients across West London and the Western M4 approach, including Chiswick, Richmond, Kensington, Chelsea, and surrounding boroughs.",
      "We bring our fully self-contained setup directly to your private driveway or residential mews. Rhys personally carries out every service, ensuring delicate clear coats receive safe hand washing, deep decontamination, and premium protective sealants.",
      "From comprehensive £100 Deep Cleans to full multi-stage valeting and detailing packages from £150, we deliver flawless results with complete discretion and professionalism."
    ],
    localHighlights: [
      "Covering West & Central London, Richmond, Chiswick, Kensington, Chelsea & M4 borders",
      "Specialising in prestige, sports, and executive vehicles",
      "Intensive fallout decontamination combating heavy urban emissions",
      "Discreet, professional driveway appointments arranged at your convenience",
      "Comprehensive £2M+ public liability insurance"
    ],
    whyChooseUs: [
      "Dedicated personal service from business owner Rhys",
      "Studio-grade results delivered right to your private driveway",
      "Gentle, swirl-free wash techniques for flawless luxury paintwork",
      "Deep fabric extraction, leather rejuvenation, and steam sanitisation",
      "Transparent, upfront communication with zero hidden charges"
    ],
    faqs: [
      {
        question: "Do you travel to London for detailing?",
        answer: "Yes! We regularly travel direct along the M4 corridor for Deep Clean, Full Valet, and multi-vehicle bookings across West and Central London."
      },
      {
        question: "Do I need a private driveway in London?",
        answer: "Yes, for London bookings a private off-street driveway, mews space, or dedicated parking bay is required so our mobile unit can operate safely."
      },
      {
        question: "How do I schedule a London appointment with Rhys?",
        answer: "Please contact Rhys directly via WhatsApp at 07393 682 365 or use our online booking wizard to discuss your vehicle and preferred date."
      }
    ],
    nearbyAreas: [
      { name: "Reading", path: "/car-detailing-reading" },
      { name: "Newbury", path: "/car-detailing-newbury" },
      { name: "Oxford", path: "/car-detailing-oxford" },
      { name: "Swindon", path: "/mobile-car-detailing-swindon" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  }
];
