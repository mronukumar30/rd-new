/**
 * Maintenance Clean Service Page
 * Target keywords: "car maintenance clean luton", "regular car clean luton", "car detailing subscription"
 */

import { useEffect } from "react";
import ServicePageTemplate from "./ServicePageTemplate";

export default function MaintenanceCleanPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageTemplate
      title="Maintenance Clean in Luton | Regular Car Care from £100 | King of Detailing"
      metaDescription="Regular maintenance clean in Luton, Bedfordshire from £100. Keep your vehicle in showroom condition with scheduled professional care every 3-6 weeks. Fully mobile."
      canonicalPath="/maintenance-clean"
      serviceName="Maintenance Clean"
      heroTagline="Showroom Condition. Every Time."
      heroDescription="Our maintenance clean is designed for clients who've already invested in a deep clean or ceramic coating and want to preserve that perfect finish. Scheduled every 3 to 6 weeks, it keeps your vehicle in perpetual showroom condition without needing another full detail."
      price="From £100"
      duration="3–4 Hours"
      heroImage="/maintenance-clean-luton.webp"
      heroImageAlt="Professional maintenance car clean in Luton — regular scheduled detailing service by King of Detailing to maintain showroom condition"
      whatIsTitle="Maintenance Programme"
      whatIsContent={[
        "The maintenance clean is the second stage of the King of Detailing system. It's a lighter but thorough service designed to preserve and extend the results of your initial deep clean or ceramic coating — keeping your vehicle in showroom condition between full details.",
        "Unlike a basic car wash that merely rinses dirt off the surface, our maintenance clean is a professional-grade detail session. We use pH-neutral, ceramic-safe products that won't strip your existing protection. Every surface — interior and exterior — is refreshed, conditioned, and maintained to our exacting standards.",
        "Think of it like a dental hygienist visit: you don't need a deep treatment every time, but regular professional maintenance prevents problems from building up. Your paintwork stays protected, your interior stays fresh, and small issues are caught before they become big ones.",
        "The maintenance plan is exclusive to existing King of Detailing clients. After a Deep Clean, you qualify for up to 6 months of regular maintenance. After an Enhance (paint correction + ceramic coating), you qualify for up to 3 years."
      ]}
      whatsIncluded={[
        "Exterior pre-wash and snow foam to safely lift surface dirt",
        "Gentle hand wash with pH-neutral, protection-safe shampoo",
        "Wheel and tyre clean and dress",
        "Full interior vacuum and wipe-down",
        "Dashboard, console, and trim clean and condition",
        "Door cards and sills detail",
        "Leather conditioning (if applicable)",
        "Glass clean — interior and exterior",
        "Air freshener application",
        "Quick trim and tyre dressing",
        "Ceramic coating top-up (for coated vehicles)",
        "Visual inspection for any damage or contamination issues"
      ]}
      benefits={[
        "Keeps your vehicle in perpetual showroom condition — no more peaks and valleys",
        "Extends the life of your ceramic coating by using compatible, pH-neutral products",
        "Prevents dirt and contaminants from building up to a level that requires another full detail",
        "Catches small issues early — bird dropping etching, tree sap damage, stone chips",
        "More cost-effective than repeated deep cleans — regular maintenance is always cheaper than remediation",
        "Scheduled service — we contact you when it's time, so you never have to remember",
        "Consistent results every visit — same detailer, same products, same standards",
        "Fully mobile — we come to your home or office on a schedule that suits you",
        "Your vehicle always looks its best for work, events, or just everyday pride"
      ]}
      idealFor={[
        "Existing King of Detailing clients who've had a deep clean or ceramic coating",
        "Busy professionals who want a 'set and forget' car care solution",
        "Vehicle owners who park outdoors and face regular environmental exposure",
        "Company car users who need their vehicle to always look professional",
        "Parents with children — regular maintenance handles the inevitable mess",
        "Anyone who wants their car to always feel fresh, clean, and well-maintained"
      ]}
      processSteps={[
        { title: "Exterior Refresh", desc: "Snow foam pre-wash followed by a gentle hand wash using pH-neutral shampoo that's safe for your existing protection layer." },
        { title: "Wheels & Tyres", desc: "Dedicated wheel cleaner and tyre dressing to keep your wheels looking sharp between full details." },
        { title: "Interior Refresh", desc: "Full vacuum, wipe-down of all surfaces, leather conditioning, and console/trim detail. Everything touched up to showroom standards." },
        { title: "Glass & Finishing", desc: "Interior and exterior glass cleaned. Trim dressed. Air freshener applied. Quick visual inspection for any emerging issues." },
        { title: "Protection Top-Up", desc: "For ceramic-coated vehicles, we apply a compatible topper to refresh the hydrophobic properties and maintain the coating's performance." },
        { title: "Schedule Next Visit", desc: "Before we leave, we schedule your next maintenance visit — typically 3 to 6 weeks out. You'll receive a reminder before each appointment." }
      ]}
      faqs={[
        {
          question: "How much does a maintenance clean cost?",
          answer: "Our maintenance clean starts from £100 for standard-sized vehicles. This is a premium, professional-grade detail — not a basic wash. Price may vary slightly for larger vehicles like SUVs and vans."
        },
        {
          question: "Do I need a deep clean before I can get maintenance cleans?",
          answer: "Yes. The maintenance clean is designed to maintain the results of an initial package. After a Deep Clean, you qualify for maintenance cleans for up to 6 months. After an Enhance (paint correction + ceramic coating), you qualify for up to 3 years."
        },
        {
          question: "How often should I get a maintenance clean?",
          answer: "We recommend every 3 to 6 weeks depending on your driving conditions and parking situation. Vehicles parked outdoors or driven daily typically benefit from a 3-4 week cycle. Garaged vehicles can stretch to 5-6 weeks."
        },
        {
          question: "Can I just get a maintenance clean without a deep clean first?",
          answer: "We recommend starting with a deep clean because it establishes a baseline of cleanliness that the maintenance programme then preserves. If your vehicle is already in excellent condition, contact us and we'll assess whether you can go straight to maintenance."
        },
        {
          question: "What products do you use for maintenance cleans?",
          answer: "We exclusively use pH-neutral, ceramic-safe, professional-grade products from Garage Therapy. These are specifically formulated to clean effectively without stripping wax, sealant, or ceramic coatings — maintaining your existing protection layer."
        },
        {
          question: "What if I miss a scheduled maintenance clean?",
          answer: "Life happens — if you need to reschedule, just let us know. We'll fit you in as soon as possible. However, for ceramic coated vehicles, we strongly recommend not exceeding 6 weeks between maintenance visits to preserve the coating's performance."
        }
      ]}
      schemaDescription="Regular maintenance car clean service in Luton, Bedfordshire. Scheduled professional care every 3-6 weeks to maintain showroom condition. Fully mobile, fully insured."
      schemaMinPrice="100"
      relatedServices={[
        { name: "Deep Clean", path: "/deep-clean", price: "From £150" },
        { name: "Paint Correction", path: "/paint-correction", price: "From £650" },
        { name: "Ceramic Coating", path: "/ceramic-coating", price: "From £650" },
      ]}
    />
  );
}
