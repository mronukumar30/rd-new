/**
 * Location data for 10 location landing pages.
 * Each location has unique content to ensure 60%+ uniqueness per page.
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
  {
    slug: "mobile-car-detailing-luton",
    title: "Mobile Car Detailing in Luton | Premium Car Care | King of Detailing",
    metaDescription: "Professional mobile car detailing in Luton, Bedfordshire. Deep cleans from £150, ceramic coatings from £650. We come to your driveway. Fully insured. Book today.",
    heroImage: "/gallery-car-detailing-1.webp",
    locationName: "Luton",
    county: "Bedfordshire",
    region: "Bedfordshire",
    coordinates: { lat: 51.8787, lng: -0.4200 },
    travelTime: "We're based right here in Luton — no travel charge",
    distanceFromBase: "0 miles — our home base",
    heroTagline: "Premium Mobile Car Detailing in Luton",
    heroSubtitle: "We're proud to call Luton home. As Bedfordshire's leading mobile detailing specialists, we deliver studio-grade car care directly to your driveway — no travel charges, no fuss, just flawless results every time.",
    introTitle: "Luton's Premier Mobile Car Detailing Service",
    introParagraphs: [
      "King of Detailing was born in Luton, and it's where we've built our reputation as Bedfordshire's most trusted mobile car detailing service. From the residential streets around Luton Hoo Estate to the busy roads near London Luton Airport, we know this town inside out — and we know exactly what Luton's roads and weather do to your vehicle's finish.",
      "Living near the M1 corridor means your car faces a constant battle against motorway grime, brake dust, and the relentless British weather. Our professional detailing packages are designed specifically to combat these challenges, restoring and protecting your vehicle's paintwork against everything Luton's roads throw at it.",
      "Whether you're based in Stopsley, Leagrave, Bramingham, Limbury, or anywhere across Luton town centre, we bring our full mobile detailing studio directly to your driveway. No dropping your car off, no waiting around — we come to you with everything we need to transform your vehicle.",
      "As our home base, Luton clients benefit from zero travel charges and priority booking availability. We're proud to be the local choice for hundreds of Luton residents who demand nothing less than showroom perfection for their vehicles."
    ],
    localHighlights: [
      "Based right here in Luton — zero travel charges for all Luton postcodes",
      "Trusted by residents across Stopsley, Leagrave, Bramingham & Limbury",
      "Combating M1 corridor grime, airport fallout & Bedfordshire weather",
      "Priority booking for Luton LU1–LU7 postcodes",
      "Regular clients near Luton Hoo, Stockwood Park & Wardown Park areas"
    ],
    whyChooseUs: [
      "Luton is our home — we understand local road conditions and what your car needs",
      "Zero travel charge for all Luton postcodes (LU1–LU7)",
      "Priority booking availability as our base location",
      "Trusted by hundreds of Luton residents — check our 5-star Google reviews",
      "Professional Garage Therapy products — not supermarket car wash soap",
      "Fully insured for your complete peace of mind"
    ],
    faqs: [
      {
        question: "How much does car detailing cost in Luton?",
        answer: "Our car detailing packages in Luton start from £100 for a maintenance clean, £150 for a comprehensive deep clean, and £650 for our full enhance package including paint correction and ceramic coating. As we're based in Luton, there are no travel charges. Contact us for a personalised quote based on your vehicle's size and condition."
      },
      {
        question: "Do you travel to all areas of Luton?",
        answer: "Absolutely! We cover every area of Luton including Stopsley, Leagrave, Bramingham, Limbury, Farley Hill, Biscot, Bury Park, and Luton town centre. As our home base, Luton postcodes (LU1–LU7) receive zero travel charges and priority booking."
      },
      {
        question: "How do I book a car detail in Luton?",
        answer: "Booking is simple — message us on WhatsApp, call us on 07749 311494, or use our online booking system. We're open 7 days a week from 8am to 8pm. We'll confirm your appointment and arrive at your chosen location with everything we need."
      },
      {
        question: "Is there a mobile car detailing service near Luton Airport?",
        answer: "Yes! We regularly detail vehicles for clients near London Luton Airport, including the Airport Way and Percival Way areas. Whether you need your car detailed before a trip or refreshed when you return, we've got you covered."
      }
    ],
    nearbyAreas: [
      { name: "Dunstable", path: "/car-detailing-dunstable" },
      { name: "Hitchin", path: "/car-detailing-hitchin" },
      { name: "St Albans", path: "/car-detailing-st-albans" },
      { name: "Bedford", path: "/car-detailing-bedford" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39283.63623519999!2d-0.45304130000000003!3d51.87870000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763a5f6d5f6d31%3A0x4c0aa3f1d7f6b0a0!2sLuton!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-bedford",
    title: "Car Detailing in Bedford | Mobile Car Care | King of Detailing",
    metaDescription: "Professional mobile car detailing in Bedford, Bedfordshire. Deep cleans, ceramic coatings & paint correction. We come to you. Fully insured. Book today.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.45]",
    locationName: "Bedford",
    county: "Bedfordshire",
    region: "Bedfordshire",
    coordinates: { lat: 52.1356, lng: -0.4685 },
    travelTime: "Approximately 20 minutes from our Luton base",
    distanceFromBase: "~20 miles north of Luton",
    heroTagline: "Professional Car Detailing in Bedford",
    heroSubtitle: "Premium mobile car detailing delivered to your driveway in Bedford. From the leafy streets of Clapham to the riverside residences of the Embankment, we bring showroom-quality results directly to you.",
    introTitle: "Bedford's Trusted Mobile Car Detailing Specialists",
    introParagraphs: [
      "Bedford is one of our most popular service areas, and it's easy to see why. With its beautiful riverside setting along the Great Ouse, tree-lined residential streets, and thriving town centre, Bedford is home to car owners who take genuine pride in their vehicles — and who expect the highest standard of care.",
      "The county town of Bedfordshire presents unique challenges for vehicle owners. Seasonal flooding near the river, rural road dust from the surrounding farmland, and the constant traffic through Bedford's busy town centre all take their toll on your car's finish. Our professional detailing packages are designed to tackle every one of these issues.",
      "We regularly serve clients across Bedford's most desirable areas — from the period homes around Priory Country Park and De Parys Avenue to the newer developments in Wixams and Great Denham. Whether you drive a family SUV or a premium sports car, our mobile detailing service delivers the same meticulous, studio-grade results.",
      "At just 20 minutes from our Luton base, Bedford is well within our core service radius. We arrive fully equipped with our own water supply, power, and professional-grade Garage Therapy products — everything needed to transform your vehicle without you lifting a finger."
    ],
    localHighlights: [
      "Serving all Bedford postcodes including MK40, MK41, MK42, MK43, MK44, MK45",
      "Popular areas: De Parys, Priory Park, Great Denham, Wixams, Clapham",
      "Just 20 minutes from our Luton base — quick response times",
      "Tackling river-area moisture, rural dust & Bedford town centre grime",
      "Regular clients across Bedford Borough including Kempston & Elstow"
    ],
    whyChooseUs: [
      "Just 20 minutes from base — fast, reliable service across Bedford",
      "Experienced with Bedford's unique conditions — river moisture, rural dust, town grime",
      "5-star rated across Google with clients throughout Bedford Borough",
      "We bring everything — water, power, professional products — to your driveway",
      "Fully insured and fully mobile — no need to drop your car anywhere",
      "Same meticulous standard whether it's a family car or a high-end vehicle"
    ],
    faqs: [
      {
        question: "How much does car detailing cost in Bedford?",
        answer: "Our car detailing packages for Bedford clients start from £100 for a maintenance clean, £150 for a deep clean, and £650 for our full enhance package with paint correction and ceramic coating. A small travel supplement may apply. Contact us for an exact quote for your vehicle."
      },
      {
        question: "Do you cover all areas of Bedford?",
        answer: "Yes! We cover the entire Bedford Borough including Bedford town centre, Kempston, Clapham, Great Denham, Wixams, Elstow, Bromham, and all surrounding villages. We're just 20 minutes from our Luton base, so we can be with you quickly."
      },
      {
        question: "Can you detail my car at my workplace in Bedford?",
        answer: "Absolutely. We regularly detail vehicles at offices and workplaces across Bedford, including the business parks near Priory Marina and Bedford town centre. Just provide us with a suitable parking space and we'll take care of the rest while you work."
      },
      {
        question: "How often should I have my car detailed in Bedford?",
        answer: "We recommend a deep clean every 6-12 months, with maintenance cleans every 3-6 weeks to keep your vehicle in peak condition. Bedford's mix of rural and urban driving can be particularly harsh on paintwork, so regular maintenance is key to protecting your investment."
      }
    ],
    nearbyAreas: [
      { name: "Luton", path: "/mobile-car-detailing-luton" },
      { name: "Milton Keynes", path: "/car-detailing-milton-keynes" },
      { name: "Hitchin", path: "/car-detailing-hitchin" },
      { name: "St Albans", path: "/car-detailing-st-albans" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39121.38!2d-0.5085!3d52.1356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b7e8e6d6c913%3A0x75a3428d3a6baab0!2sBedford!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-dunstable",
    title: "Car Detailing in Dunstable | Mobile Car Care | King of Detailing",
    metaDescription: "Professional mobile car detailing in Dunstable, Bedfordshire. Deep cleans, paint correction & ceramic coatings. Just 15 mins from our base. Fully insured. Book now.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Dunstable",
    county: "Bedfordshire",
    region: "Bedfordshire",
    coordinates: { lat: 51.8860, lng: -0.5210 },
    travelTime: "Just 15 minutes from our Luton base",
    distanceFromBase: "~6 miles west of Luton",
    heroTagline: "Expert Car Detailing in Dunstable",
    heroSubtitle: "Premium mobile car detailing for Dunstable residents. Nestled at the foot of the Chiltern Hills, your car deserves the same natural beauty as the Dunstable Downs. We bring showroom results to your door.",
    introTitle: "Dunstable's Go-To Mobile Car Detailing Service",
    introParagraphs: [
      "Dunstable sits in one of the most picturesque corners of Bedfordshire, right at the foot of the stunning Dunstable Downs and the Chiltern Hills. It's a town where people take pride in their surroundings — and that extends to the vehicles parked on their driveways. That's where King of Detailing comes in.",
      "The chalk downland terrain and rural roads surrounding Dunstable create unique challenges for vehicle owners. Fine chalk dust, country lane mud, and the seasonal pollen from the surrounding countryside can leave even the best-maintained car looking tired. Our professional detailing treatments are specifically formulated to tackle these local conditions.",
      "We're one of Dunstable's closest detailing specialists — just 15 minutes from our Luton base along the A505. We regularly serve clients across Dunstable's residential areas including Houghton Regis, the streets around Priory House, and the newer developments along the Dunstable bypass.",
      "From quick maintenance cleans to comprehensive paint correction and ceramic coating, every service we offer is available at your Dunstable doorstep. We arrive fully self-sufficient with all the equipment, water, and professional-grade products needed to deliver stunning results."
    ],
    localHighlights: [
      "Just 15 minutes from our Luton base — one of our closest service areas",
      "Covering Dunstable, Houghton Regis & Toddington areas",
      "Combating chalk dust, rural road grime & Chiltern Hills conditions",
      "Quick access via A505 — reliable, on-time arrival guaranteed",
      "Serving residents near Dunstable Downs, Priory House & town centre"
    ],
    whyChooseUs: [
      "Just 15 minutes away — we're practically neighbours",
      "Deep understanding of Dunstable's chalk dust and rural road challenges",
      "Fully self-sufficient — we bring our own water, power, and products",
      "5-star rated mobile detailing across Bedfordshire",
      "From maintenance cleans to full ceramic protection — all at your door",
      "Fully insured for your complete peace of mind"
    ],
    faqs: [
      {
        question: "Do you offer car detailing in Dunstable and Houghton Regis?",
        answer: "Yes! We cover all of Dunstable and Houghton Regis, including the newer housing developments. At just 15 minutes from our Luton base, Dunstable is one of our core service areas with quick response times and competitive pricing."
      },
      {
        question: "How much does mobile car valeting cost in Dunstable?",
        answer: "Our packages for Dunstable start from £100 for maintenance cleans, £150 for a deep clean, and £650 for our full enhance package with paint correction and ceramic coating. Dunstable's proximity to our base means minimal travel supplements."
      },
      {
        question: "Can you remove chalk dust and country road grime?",
        answer: "Absolutely — it's one of our specialities! Dunstable's location near the Downs means chalk dust and rural road grime are constant issues. Our decontamination process includes clay bar treatment, tar removal, and iron fallout removal that eliminates bonded contaminants a normal wash can't touch."
      },
      {
        question: "Do I need to provide anything for the detailing session?",
        answer: "Ideally, access to an outdoor tap and power socket is helpful, but we carry our own water supply and can work without mains power if needed. Just let us know your setup when you book and we'll prepare accordingly."
      }
    ],
    nearbyAreas: [
      { name: "Luton", path: "/mobile-car-detailing-luton" },
      { name: "Aylesbury", path: "/car-detailing-aylesbury" },
      { name: "Hemel Hempstead", path: "/car-detailing-hemel-hempstead" },
      { name: "St Albans", path: "/car-detailing-st-albans" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19646.7!2d-0.5410!3d51.886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766c5cc3b4a413%3A0x8b1f2ec8a9c0b0a0!2sDunstable!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-st-albans",
    title: "Car Detailing in St Albans | Mobile Detailing | King of Detailing",
    metaDescription: "Premium mobile car detailing in St Albans, Hertfordshire. Professional deep cleans, paint correction & ceramic coatings. We come to you. Fully insured. Book today.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "St Albans",
    county: "Hertfordshire",
    region: "Hertfordshire",
    coordinates: { lat: 51.7520, lng: -0.3413 },
    travelTime: "Approximately 25 minutes from our Luton base",
    distanceFromBase: "~15 miles south of Luton",
    heroTagline: "Premium Car Detailing in St Albans",
    heroSubtitle: "St Albans deserves nothing less than premium. From the historic streets near the Cathedral to the leafy avenues of Marshalswick, we deliver meticulous mobile car detailing to one of Hertfordshire's most prestigious towns.",
    introTitle: "St Albans' Premium Mobile Car Detailing Service",
    introParagraphs: [
      "St Albans is one of Hertfordshire's most prestigious addresses — a cathedral city with a rich history dating back to Roman times, where tree-lined streets, period properties, and a thriving high street create a community that values quality in everything. The cars on St Albans' driveways reflect that standard, and King of Detailing is here to maintain it.",
      "The city's mix of urban streets and surrounding countryside creates specific challenges for vehicle paintwork. Tree sap from the mature canopies along Verulamium Park, road salt from winter gritting on the A1(M) approach, and the general wear from commuter traffic through the city centre all demand professional-grade care that goes far beyond a standard car wash.",
      "We regularly detail vehicles for clients across St Albans' most sought-after areas — from the Victorian homes near the Cathedral and the modern developments at Highfield Park to the family residences of Marshalswick and Sandridge. Whatever you drive, wherever you are in St Albans, we bring the same obsessive attention to detail.",
      "At approximately 25 minutes from our Luton base, St Albans is firmly within our core service radius. We've built a loyal client base here — premium car owners who recognise that King of Detailing offers a level of care that matches the prestige of their city."
    ],
    localHighlights: [
      "Serving all St Albans postcodes including AL1, AL2, AL3, AL4",
      "Popular areas: Cathedral Quarter, Marshalswick, Sandridge, Highfield Park",
      "Tackling tree sap, A1(M) road salt & urban commuter grime",
      "25 minutes from our Luton base — reliable and on-time, every time",
      "Trusted by premium car owners across Hertfordshire's cathedral city"
    ],
    whyChooseUs: [
      "Premium service for a premium city — detailing that matches St Albans' standards",
      "Experienced with local challenges — tree sap, road salt, commuter wear",
      "Growing client base of 5-star reviewed customers across the AL postcode area",
      "Fully mobile — we come to your driveway, office, or anywhere in St Albans",
      "Professional Garage Therapy products for superior results",
      "Fully insured and fully equipped — we bring everything we need"
    ],
    faqs: [
      {
        question: "Do you offer mobile car detailing in St Albans?",
        answer: "Yes! We provide fully mobile car detailing across the entire St Albans area. We come to your home or workplace with all the equipment and products we need. St Albans is approximately 25 minutes from our Luton base, making it one of our core service areas."
      },
      {
        question: "How much does car detailing cost in St Albans?",
        answer: "Our packages for St Albans clients start from £100 for maintenance cleans, £150 for a comprehensive deep clean, and £650 for our enhance package including paint correction and ceramic coating. A small travel supplement applies for the St Albans area. Contact us for a personalised quote."
      },
      {
        question: "Can you remove tree sap from my car in St Albans?",
        answer: "Absolutely! Tree sap is one of the most common issues we tackle for St Albans clients, especially those parked near Verulamium Park and the tree-lined residential streets. Our decontamination process safely removes tree sap, bird droppings, and other organic contaminants without damaging your paintwork."
      },
      {
        question: "Do you detail luxury and prestige vehicles in St Albans?",
        answer: "Yes — a significant portion of our St Albans bookings are for premium and luxury vehicles. We're experienced with all marques including BMW, Mercedes, Audi, Porsche, Range Rover, and more. Our professional-grade products and techniques are safe for all paint types and finishes."
      }
    ],
    nearbyAreas: [
      { name: "Luton", path: "/mobile-car-detailing-luton" },
      { name: "Watford", path: "/car-detailing-watford" },
      { name: "Hemel Hempstead", path: "/car-detailing-hemel-hempstead" },
      { name: "Hitchin", path: "/car-detailing-hitchin" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39371.89!2d-0.3813!3d51.752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876414e5abf2481%3A0x267d28018a513c44!2sSt%20Albans!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-hitchin",
    title: "Car Detailing in Hitchin | Mobile Car Care | King of Detailing",
    metaDescription: "Professional mobile car detailing in Hitchin, Hertfordshire. Deep cleans, ceramic coatings & paint correction. We come to your door. Fully insured. Book now.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Hitchin",
    county: "Hertfordshire",
    region: "Hertfordshire",
    coordinates: { lat: 51.9469, lng: -0.2834 },
    travelTime: "Approximately 20 minutes from our Luton base",
    distanceFromBase: "~10 miles east of Luton",
    heroTagline: "Mobile Car Detailing in Hitchin",
    heroSubtitle: "From the charming market square to the lavender fields beyond, Hitchin is a town that appreciates quality. We bring that same commitment to excellence directly to your driveway with our premium mobile car detailing service.",
    introTitle: "Hitchin's Trusted Mobile Car Detailing Service",
    introParagraphs: [
      "Hitchin is one of north Hertfordshire's hidden gems — a beautiful market town with a rich history, stunning architecture, and a community that genuinely cares about quality. From the independent shops along Bancroft to the period homes lining the River Hiz, Hitchin is a place where attention to detail matters. That's exactly what King of Detailing delivers.",
      "The town's semi-rural setting brings specific challenges for car owners. Country lane mud from the surrounding farmland, seasonal pollen from the famous Hitchin Lavender fields, and agricultural dust all settle on your vehicle's paintwork. Add in the daily commuter run along the A505 or A1(M), and your car is fighting a constant battle.",
      "We've built a growing client base across Hitchin's residential areas — from the character properties near the town centre and Windmill Hill to the family homes in Walsworth, Purwell, and Ickleford. Our fully mobile service means we come to you, wherever you are in the Hitchin area.",
      "At just 20 minutes from our Luton base, Hitchin is a quick and easy drive for our team. We bring absolutely everything we need — professional-grade Garage Therapy products, our own water supply, and years of expertise — to deliver the kind of results that Hitchin residents expect."
    ],
    localHighlights: [
      "Approximately 20 minutes from our Luton base along the A505",
      "Covering Hitchin town, Walsworth, Purwell, Ickleford & surrounding villages",
      "Combating country lane mud, lavender pollen & A1(M) commuter grime",
      "Growing reputation amongst Hitchin's quality-focused car owners",
      "Easy access via A505 — reliable, on-time mobile detailing service"
    ],
    whyChooseUs: [
      "Just 20 minutes away — reliable, on-time service for all Hitchin postcodes",
      "Understanding of Hitchin's rural and semi-urban driving conditions",
      "Professional decontamination to tackle pollen, sap, and agricultural residue",
      "5-star Google reviews from clients across north Hertfordshire",
      "Fully mobile — we bring everything we need to your door",
      "All packages available: deep clean, maintenance, paint correction, ceramic coating"
    ],
    faqs: [
      {
        question: "Is there a mobile car detailing service in Hitchin?",
        answer: "Yes! King of Detailing provides fully mobile car detailing across Hitchin and the surrounding villages. We're based in Luton, just 20 minutes away, and we come to your home or workplace with all the professional equipment and products we need."
      },
      {
        question: "How much does car valeting cost in Hitchin?",
        answer: "Our professional detailing packages for Hitchin start from £100 for a maintenance clean, £150 for a comprehensive deep clean, and £650 for our full enhance package including paint correction and ceramic coating. Contact us for a quote tailored to your vehicle."
      },
      {
        question: "Can you detail cars in the Hitchin countryside and villages?",
        answer: "Absolutely! We regularly visit clients in Ickleford, Pirton, Great Offley, and other villages around Hitchin. As long as we have a suitable driveway or parking space, we can deliver our full range of services anywhere in the area."
      },
      {
        question: "How do you handle pollen and agricultural dust on cars?",
        answer: "Our decontamination stage includes clay bar treatment, which is specifically designed to remove bonded contaminants like pollen, sap, and agricultural residue that a normal wash can't shift. We then apply a protective sealant or coating to help prevent future build-up."
      }
    ],
    nearbyAreas: [
      { name: "Luton", path: "/mobile-car-detailing-luton" },
      { name: "Stevenage", path: "/car-detailing-stevenage" },
      { name: "Bedford", path: "/car-detailing-bedford" },
      { name: "St Albans", path: "/car-detailing-st-albans" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19596.8!2d-0.3034!3d51.9469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876331c8c820f01%3A0x5a4b4fb809d68c7!2sHitchin!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-stevenage",
    title: "Car Detailing in Stevenage | Mobile Detailing | King of Detailing",
    metaDescription: "Professional mobile car detailing in Stevenage, Hertfordshire. Deep cleans, paint correction & ceramic coatings delivered to your door. Fully insured. Book today.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Stevenage",
    county: "Hertfordshire",
    region: "Hertfordshire",
    coordinates: { lat: 51.9020, lng: -0.2024 },
    travelTime: "Approximately 25 minutes from our Luton base",
    distanceFromBase: "~15 miles east of Luton",
    heroTagline: "Professional Car Detailing in Stevenage",
    heroSubtitle: "Britain's first New Town deserves new-car freshness. From the modern developments of Great Ashby to the charming Old Town high street, we deliver premium mobile car detailing across Stevenage.",
    introTitle: "Stevenage's Professional Mobile Car Detailing",
    introParagraphs: [
      "Stevenage holds a unique place in British history as the UK's first designated New Town — a pioneering community built around modern living. Today, it's a thriving Hertfordshire town with a diverse mix of residential areas, from the original New Town neighbourhoods to the award-winning Great Ashby development and the historic charm of Stevenage Old Town.",
      "The town's extensive road network, including the A1(M) running through its heart, means vehicles here face significant road spray, motorway grime, and brake dust. The mix of urban driving through the town centre and surrounding countryside excursions adds tree sap, pollen, and rural road dust to the challenge.",
      "We've been building a presence in Stevenage with clients who appreciate the difference between a standard car wash and professional detailing. Whether you're in Pin Green, Shephall, Broadwater, the Old Town, or any Stevenage neighbourhood, we bring our full mobile studio to your driveway.",
      "Located approximately 25 minutes from our Luton base via the A602, Stevenage is well within our regular service area. We carry everything we need — professional Garage Therapy products, equipment, and our own water supply — for a completely self-contained service."
    ],
    localHighlights: [
      "Covering all Stevenage areas: Old Town, Pin Green, Shephall, Great Ashby, Broadwater",
      "25 minutes from Luton via the A602 — reliable service times",
      "Tackling A1(M) motorway grime, brake dust & urban road spray",
      "Serving Stevenage's SG1 and SG2 postcodes comprehensively",
      "Growing client base in Hertfordshire's largest town"
    ],
    whyChooseUs: [
      "25-minute drive from base — efficient and reliable arrival times",
      "Deep understanding of Stevenage's A1(M) motorway grime challenges",
      "Professional decontamination for brake dust, road film, and tar",
      "Every package available at your Stevenage driveway — from maintenance to ceramic",
      "Fully insured, fully mobile — no need to drop off or collect your car",
      "Obsessive attention to detail backed by 5-star reviews"
    ],
    faqs: [
      {
        question: "Do you offer car detailing in Stevenage?",
        answer: "Yes! We provide fully mobile car detailing across the entire Stevenage area. We're approximately 25 minutes from our Luton base, and we come to your home or workplace with everything we need — no dropping off required."
      },
      {
        question: "What car detailing packages are available in Stevenage?",
        answer: "We offer all our packages in Stevenage: Maintenance Clean (from £100), Deep Clean (from £150), and our full Enhance package with paint correction and ceramic coating (from £650). Each package is delivered at your doorstep with the same professional standard."
      },
      {
        question: "Can you remove motorway contamination from my car?",
        answer: "Absolutely! Stevenage's proximity to the A1(M) means motorway contamination is common — brake dust, tar spots, and road film. Our decontamination process includes iron fallout removal, tar treatment, and clay bar to strip away every contaminant before we detail and protect your paintwork."
      },
      {
        question: "Do you work in Stevenage Old Town and the newer areas?",
        answer: "Yes, we cover all of Stevenage including the Old Town, New Town areas, Pin Green, Shephall, Great Ashby, Broadwater, and surrounding neighbourhoods. Wherever you are in the SG1 or SG2 postcode area, we'll come to you."
      }
    ],
    nearbyAreas: [
      { name: "Hitchin", path: "/car-detailing-hitchin" },
      { name: "Luton", path: "/mobile-car-detailing-luton" },
      { name: "Watford", path: "/car-detailing-watford" },
      { name: "St Albans", path: "/car-detailing-st-albans" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39229.0!2d-0.2424!3d51.902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487631e3e31b7587%3A0x5ea96c13dae64e4e!2sStevenage!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-hemel-hempstead",
    title: "Car Detailing in Hemel Hempstead | Mobile Service | King of Detailing",
    metaDescription: "Professional mobile car detailing in Hemel Hempstead, Hertfordshire. Deep cleans, ceramic coatings & paint correction. We come to you. Fully insured. Book now.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Hemel Hempstead",
    county: "Hertfordshire",
    region: "Hertfordshire",
    coordinates: { lat: 51.7537, lng: -0.4729 },
    travelTime: "Approximately 30 minutes from our Luton base",
    distanceFromBase: "~15 miles south-west of Luton",
    heroTagline: "Mobile Car Detailing in Hemel Hempstead",
    heroSubtitle: "From the Gade Valley to the Maylands business district, Hemel Hempstead is a town that moves fast. Let us keep your vehicle looking its absolute best with our premium mobile detailing service, delivered right to your doorstep.",
    introTitle: "Hemel Hempstead's Mobile Car Detailing Specialists",
    introParagraphs: [
      "Hemel Hempstead is one of Hertfordshire's most dynamic towns — a bustling community nestled in the Gade Valley with a perfect blend of New Town energy and countryside charm. With quick access to the M1 and M25, Hemel is a commuter's dream — but all those motorway miles take a serious toll on your vehicle's finish.",
      "The Gade Valley setting means moisture, morning dew, and occasional flooding are part of life here. Combine that with the constant M1 traffic spray, the industrial fallout from the Maylands business park area, and the usual urban grime, and your car's paintwork is under constant assault. Our professional detailing treatments are designed to restore and protect against every one of these challenges.",
      "We serve clients right across Hemel Hempstead — from the town centre and Marlowes shopping area to the residential neighbourhoods of Adeyfield, Bennetts End, Leverstock Green, and the popular Gadebridge area. Whether you need a quick maintenance clean or a full paint correction, we come to you.",
      "At roughly 30 minutes from our Luton base via the M1, Hemel Hempstead is comfortably within our regular service zone. We've seen growing demand from Hemel residents who want something far beyond a standard valeting service — and that's exactly what King of Detailing provides."
    ],
    localHighlights: [
      "Serving all Hemel Hempstead postcodes: HP1, HP2, HP3",
      "Covering Adeyfield, Bennetts End, Leverstock Green, Gadebridge & more",
      "Approximately 30 minutes from base via the M1 — reliable arrival times",
      "Tackling M1/M25 commuter grime, Gade Valley moisture & industrial fallout",
      "Growing demand from quality-focused car owners in the HP postcode area"
    ],
    whyChooseUs: [
      "30-minute drive via the M1 — regular and reliable service for Hemel residents",
      "Experienced with M1 motorway contamination, valley moisture, and urban grime",
      "Full range of packages available at your driveway — from £100 maintenance to £650 ceramic",
      "Professional Garage Therapy products for results that outlast any car wash",
      "Fully insured and fully self-sufficient — we bring everything we need",
      "5-star rated with a growing Hemel Hempstead client base"
    ],
    faqs: [
      {
        question: "Is there a mobile car detailing service in Hemel Hempstead?",
        answer: "Yes! King of Detailing provides fully mobile car detailing across Hemel Hempstead and surrounding areas. We come to your home or workplace with all professional equipment and products — approximately 30 minutes from our Luton base via the M1."
      },
      {
        question: "How much does car detailing cost in Hemel Hempstead?",
        answer: "Our packages start from £100 for maintenance cleans, £150 for comprehensive deep cleans, and £650 for our full enhance package with paint correction and ceramic coating. A travel supplement applies for the Hemel Hempstead area. Contact us for an exact quote."
      },
      {
        question: "Can you detail my car at my office in Maylands?",
        answer: "Absolutely! We regularly visit business parks and offices across Hemel Hempstead, including the Maylands area. Provide us with a suitable parking space and we'll detail your car while you work — it's the most convenient way to maintain your vehicle."
      },
      {
        question: "Do you cover Berkhamsted and Tring as well?",
        answer: "Yes — we cover the wider Dacorum area including Berkhamsted, Tring, Kings Langley, and Bovingdon. If you're within reasonable distance, we'll come to you. Just get in touch to confirm availability for your specific area."
      }
    ],
    nearbyAreas: [
      { name: "Dunstable", path: "/car-detailing-dunstable" },
      { name: "St Albans", path: "/car-detailing-st-albans" },
      { name: "Watford", path: "/car-detailing-watford" },
      { name: "Aylesbury", path: "/car-detailing-aylesbury" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39370.8!2d-0.5129!3d51.7537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876417a6f6aaddd%3A0x3e2827bcb7f28b0e!2sHemel%20Hempstead!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-watford",
    title: "Car Detailing in Watford | Mobile Detailing Service | King of Detailing",
    metaDescription: "Premium mobile car detailing in Watford, Hertfordshire. Professional deep cleans, paint correction & ceramic coatings. We come to you. Fully insured. Book today.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Watford",
    county: "Hertfordshire",
    region: "Hertfordshire",
    coordinates: { lat: 51.6565, lng: -0.3957 },
    travelTime: "Approximately 35 minutes from our Luton base",
    distanceFromBase: "~25 miles south of Luton",
    heroTagline: "Premium Car Detailing in Watford",
    heroSubtitle: "Where Hertfordshire meets London, vehicles deserve premium care. From the leafy avenues of Cassiobury to the busy streets near the Intu centre, we deliver showroom-quality mobile detailing across Watford.",
    introTitle: "Watford's Premium Mobile Car Detailing Service",
    introParagraphs: [
      "Watford sits at the gateway between Hertfordshire and London — a vibrant, metropolitan town where the pace of life is fast, the roads are busy, and vehicles work hard. From the commuter traffic on the M1 and M25 junction to the stop-start driving through the town centre, Watford's cars endure some of the toughest conditions in the Home Counties.",
      "The town's proximity to London means higher concentrations of traffic pollution, brake dust, and road film than quieter rural areas. Add in the tree-lined residential streets of Cassiobury Park — stunning to look at but notorious for dropping sap, pollen, and leaves onto parked cars — and you have a vehicle maintenance challenge that demands professional-grade solutions.",
      "We detail vehicles for clients across Watford's diverse neighbourhoods — from the prestigious homes near Cassiobury Park and the Grove to the family properties in Garston, Oxhey, Leavesden, and North Watford. We also visit offices in the Clarendon Road business corridor and the Warner Bros. Studios area regularly.",
      "At approximately 35 minutes from our Luton base, Watford is at the edge of our core radius — but the demand from quality-conscious Watford residents keeps us coming back. These are car owners who know the difference between a machine wash and professional detailing, and they won't settle for anything less than King standard."
    ],
    localHighlights: [
      "Covering all Watford postcodes: WD17, WD18, WD19, WD24, WD25",
      "Popular areas: Cassiobury, Oxhey, Garston, Leavesden, North Watford",
      "Approximately 35 minutes from base — reliable service across south Herts",
      "Tackling M1/M25 junction grime, London pollution & Cassiobury tree sap",
      "Office detailing available — Clarendon Road, Leavesden & business parks"
    ],
    whyChooseUs: [
      "Quality-focused service for Watford's discerning car owners",
      "Expert at tackling London-proximity pollution, motorway grime, and tree sap",
      "Fully mobile — driveway, office, or anywhere with suitable space in Watford",
      "Professional Garage Therapy products for results that outperform any car wash",
      "Fully insured and equipped — we bring everything needed for a perfect result",
      "5-star reviewed across Hertfordshire and Bedfordshire"
    ],
    faqs: [
      {
        question: "Do you provide mobile car detailing in Watford?",
        answer: "Yes! We offer fully mobile car detailing across the entire Watford area. We come to your home or workplace with all professional equipment, products, and our own water supply. Watford is approximately 35 minutes from our Luton base."
      },
      {
        question: "How much does professional car detailing cost in Watford?",
        answer: "Our packages for Watford clients start from £100 for maintenance cleans, £150 for a deep clean, and £650 for our full enhance package with paint correction and ceramic coating. A travel supplement applies for the Watford area. Get in touch for a personalised quote."
      },
      {
        question: "Can you protect my car from London pollution and road grime?",
        answer: "Absolutely. Watford's proximity to London means vehicles here are exposed to higher levels of pollution, brake dust, and road film. Our ceramic coating packages provide long-lasting protection — up to 3 years — creating a barrier against environmental contaminants and making future cleaning much easier."
      },
      {
        question: "Do you detail cars near Watford Junction and the town centre?",
        answer: "Yes, we cover every area of Watford including the town centre, Watford Junction, and all residential areas. If you have a suitable driveway, garage, or parking space, we can deliver our full range of detailing services at your location."
      }
    ],
    nearbyAreas: [
      { name: "St Albans", path: "/car-detailing-st-albans" },
      { name: "Hemel Hempstead", path: "/car-detailing-hemel-hempstead" },
      { name: "Luton", path: "/mobile-car-detailing-luton" },
      { name: "Aylesbury", path: "/car-detailing-aylesbury" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39418.9!2d-0.4357!3d51.6565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487636941e8e3c07%3A0x95dc5283d5e0b0c0!2sWatford!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-milton-keynes",
    title: "Car Detailing in Milton Keynes | Mobile Service | King of Detailing",
    metaDescription: "Professional mobile car detailing in Milton Keynes. Deep cleans, paint correction & ceramic coatings. We come to your driveway. Fully insured. Book today.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Milton Keynes",
    county: "Buckinghamshire",
    region: "Buckinghamshire",
    coordinates: { lat: 52.0406, lng: -0.7594 },
    travelTime: "Approximately 35 minutes from our Luton base",
    distanceFromBase: "~30 miles north-west of Luton",
    heroTagline: "Mobile Car Detailing in Milton Keynes",
    heroSubtitle: "Britain's most modern city deserves modern car care. From centre:mk to the grid road network, we deliver precision mobile detailing that keeps your vehicle in showroom condition — right at your MK doorstep.",
    introTitle: "Milton Keynes' Expert Mobile Car Detailing Service",
    introParagraphs: [
      "Milton Keynes is unlike anywhere else in the UK — a purpose-built city defined by its iconic grid road system, landmark roundabouts, and miles of dual carriageway. It's a city designed around the car, and MK residents take their vehicles seriously. Whether you're cruising the grid roads in a new BMW or navigating the Redways in a family SUV, your car deserves professional care.",
      "The city's extensive road network and high-speed grid roads mean vehicles here accumulate road film, brake dust, and tyre residue faster than in most towns. Milton Keynes' many trees — the city is famously green — add seasonal challenges of sap, pollen, and fallen leaves. And the numerous construction sites across this ever-expanding city create persistent dust that settles on everything.",
      "We detail vehicles for clients across Milton Keynes' grid squares — from the premium addresses of Campbell Park and the Kingston area near the centre:mk to the family-friendly estates of Emerson Valley, Bletchley, and Wolverton. MK's generous driveways and parking make it ideal for mobile detailing.",
      "At approximately 35 minutes from our Luton base via the M1, Milton Keynes is at the edge of our standard radius — but we've built strong demand here. MK residents appreciate our no-compromises approach: fully mobile, fully insured, fully professional."
    ],
    localHighlights: [
      "Covering all MK postcodes: MK1–MK19 and surrounding areas",
      "Popular areas: Campbell Park, centre:mk, Emerson Valley, Bletchley, Wolverton",
      "35 minutes from base via the M1 — efficient motorway access",
      "Tackling grid road grime, construction dust & abundant tree sap",
      "MK's spacious driveways are perfect for our mobile detailing setup"
    ],
    whyChooseUs: [
      "Efficient M1 access — 35 minutes door-to-door from our Luton base",
      "Understanding of MK's unique grid road conditions and construction dust",
      "MK's spacious driveways are ideal for our comprehensive mobile service",
      "Full range of packages — from £100 maintenance to £650 ceramic coating",
      "Fully insured and self-sufficient — we bring water, power, and products",
      "Growing 5-star reputation across Milton Keynes and Buckinghamshire"
    ],
    faqs: [
      {
        question: "Do you offer car detailing in Milton Keynes?",
        answer: "Yes! We provide fully mobile car detailing across Milton Keynes. We travel from our Luton base (approximately 35 minutes via the M1) and come to your driveway with all the professional equipment and products we need. MK's spacious driveways make it perfect for our mobile service."
      },
      {
        question: "How much does mobile car detailing cost in Milton Keynes?",
        answer: "Our packages for Milton Keynes start from £100 for maintenance cleans, £150 for deep cleans, and £650 for our enhance package with paint correction and ceramic coating. A travel supplement applies. Contact us for a quote tailored to your vehicle's size and condition."
      },
      {
        question: "Which areas of Milton Keynes do you cover?",
        answer: "We cover the entire Milton Keynes area including Campbell Park, central Milton Keynes, Bletchley, Wolverton, Stony Stratford, Newport Pagnell, Emerson Valley, and all grid squares in between. If you're in an MK postcode, we'll come to you."
      },
      {
        question: "Can you handle construction dust and grid road contamination?",
        answer: "Absolutely. Milton Keynes' ongoing construction and high-speed grid roads create specific challenges. Our decontamination process includes iron fallout removal (critical for brake dust), clay bar treatment for bonded particles, and tar removal — stripping away everything a normal wash leaves behind."
      }
    ],
    nearbyAreas: [
      { name: "Bedford", path: "/car-detailing-bedford" },
      { name: "Aylesbury", path: "/car-detailing-aylesbury" },
      { name: "Luton", path: "/mobile-car-detailing-luton" },
      { name: "Dunstable", path: "/car-detailing-dunstable" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39167.7!2d-0.7994!3d52.0406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877a1cf58f50605%3A0xb6a8e0551ab2ddb4!2sMilton%20Keynes!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  },
  {
    slug: "car-detailing-aylesbury",
    title: "Car Detailing in Aylesbury | Mobile Car Care | King of Detailing",
    metaDescription: "Professional mobile car detailing in Aylesbury, Buckinghamshire. Deep cleans, ceramic coatings & paint correction. We come to your door. Fully insured. Book now.",
    heroImage: "/bernie-fineman-car-detailing-luton.webp",
    heroImagePosition: "object-top",
    heroOverlayOpacity: "bg-black/[0.50]",
    locationName: "Aylesbury",
    county: "Buckinghamshire",
    region: "Buckinghamshire",
    coordinates: { lat: 51.8154, lng: -0.8084 },
    travelTime: "Approximately 30 minutes from our Luton base",
    distanceFromBase: "~25 miles west of Luton",
    heroTagline: "Expert Car Detailing in Aylesbury",
    heroSubtitle: "The county town of Buckinghamshire deserves county-town-quality car care. From the Vale of Aylesbury's rolling landscapes to the bustling town centre, we bring premium mobile detailing to your Aylesbury doorstep.",
    introTitle: "Aylesbury's Reliable Mobile Car Detailing Service",
    introParagraphs: [
      "Aylesbury is the proud county town of Buckinghamshire — a thriving market town surrounded by the beautiful Vale of Aylesbury, one of England's most picturesque landscapes. With its blend of historic architecture, modern developments, and quintessentially English countryside, Aylesbury is home to car owners who appreciate quality craftsmanship — and that includes how their vehicles are cared for.",
      "The Vale's agricultural landscape creates specific challenges for vehicle owners. Country lane mud, crop dust, and the seasonal pollen from the surrounding farmland settle onto paintwork and become bonded if left untreated. Combined with the commuter traffic along the A41 corridor to London, your car faces a double assault of rural and urban contamination.",
      "We serve clients across Aylesbury's residential areas — from the established neighbourhoods of Stoke Mandeville and Wendover Road to the newer developments at Berryfields, Aylesbury Vale Parkway, and Fairford Leys. Our fully mobile service means we come equipped with everything needed for a complete transformation.",
      "At approximately 30 minutes from our Luton base, Aylesbury sits at the western edge of our core service area. We've seen increasing demand from Aylesbury's quality-conscious residents who want more than a standard car wash — they want the King of Detailing standard."
    ],
    localHighlights: [
      "Covering all Aylesbury postcodes: HP19, HP20, HP21, HP22",
      "Serving Stoke Mandeville, Berryfields, Fairford Leys & surrounding areas",
      "Approximately 30 minutes from our Luton base — reliable service",
      "Tackling Vale countryside grime, agricultural dust & A41 commuter residue",
      "Growing client base across Buckinghamshire's county town"
    ],
    whyChooseUs: [
      "30 minutes from base — efficient, reliable service for Aylesbury residents",
      "Experienced with Vale of Aylesbury's rural and commuter driving conditions",
      "Professional decontamination to tackle agricultural dust, sap, and road grime",
      "Full range of packages from maintenance cleans to ceramic coating",
      "Fully insured and self-sufficient — we bring water, power, and everything we need",
      "5-star rated across Bedfordshire, Hertfordshire, and Buckinghamshire"
    ],
    faqs: [
      {
        question: "Is there a mobile car detailing service in Aylesbury?",
        answer: "Yes! King of Detailing provides fully mobile car detailing across Aylesbury and the surrounding Buckinghamshire area. We travel from our Luton base (approximately 30 minutes) and come to your home or workplace with all professional equipment and products."
      },
      {
        question: "How much does car detailing cost in Aylesbury?",
        answer: "Our packages for Aylesbury clients start from £100 for a maintenance clean, £150 for a comprehensive deep clean, and £650 for our full enhance package with paint correction and ceramic coating. A travel supplement applies. Get in touch for a personalised quote."
      },
      {
        question: "Do you cover Wendover, Stoke Mandeville, and surrounding villages?",
        answer: "Yes — we cover the wider Aylesbury Vale area including Wendover, Stoke Mandeville, Haddenham, Stone, Princes Risborough, and surrounding villages. As long as we have access to a suitable driveway or parking area, we can deliver our full service."
      },
      {
        question: "Can you protect my car from countryside contamination?",
        answer: "Absolutely. Living in the Vale of Aylesbury means dealing with crop dust, mud, pollen, and other rural contaminants. Our professional detailing includes thorough decontamination with clay bar treatment, and we offer ceramic coating protection that lasts up to 3 years — creating a barrier against future build-up."
      }
    ],
    nearbyAreas: [
      { name: "Dunstable", path: "/car-detailing-dunstable" },
      { name: "Milton Keynes", path: "/car-detailing-milton-keynes" },
      { name: "Hemel Hempstead", path: "/car-detailing-hemel-hempstead" },
      { name: "Luton", path: "/mobile-car-detailing-luton" }
    ],
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39332.4!2d-0.8484!3d51.8154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876e0d5c26c13d1%3A0x80f2b16bdc4e8f0!2sAylesbury!5e0!3m2!1sen!2suk!4v1720000000000!5m2!1sen!2suk"
  }
];
