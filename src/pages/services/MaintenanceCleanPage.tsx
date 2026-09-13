/**
 * Maintenance Clean Service Page
 * Target keywords: "car maintenance clean swindon", "regular car clean wiltshire", "maintenance wash swindon"
 */

import { useEffect } from "react";
import ServicePageTemplate from "./ServicePageTemplate";

export default function MaintenanceCleanPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageTemplate
      title="Maintenance Plan in Swindon | Regular Mobile Valeting £50 | RD Valeting"
      metaDescription="Regular mobile maintenance plan in Swindon, Wiltshire — £50. Keep your vehicle in showroom condition with scheduled professional care every 2–4 weeks. Fully mobile, 100% pure water."
      canonicalPath="/maintenance-clean"
      serviceName="Maintenance Plan"
      heroTagline="Showroom Condition. Every Time."
      heroDescription="A professional, contact-safe wash cycle that preserves your protection layer and keeps your car in a condition that turns heads — scheduled every 2 to 4 weeks across Swindon and Wiltshire."
      price="From £50"
      duration="1.5–2 Hours"
      heroImage="/719890908_2222286848526617_3057517277440017740_n.jpg"
      heroImageAlt="Professional mobile maintenance plan in Swindon — regular scheduled detailing service by RD Valeting to maintain showroom condition"
      whatIsTitle="Maintenance Programme"
      whatIsContent={[
        "Your paintwork is an investment. Every week without proper care, road fallout bonds deeper, brake dust etches further, and contaminants shorten the life of your finish.",
        "The Maintenance Plan is the intelligent choice — a professional, contact-safe wash cycle carried out using our own 100% purified spotless water and safe two-bucket method. No swirls. No water marks. Just a clean that holds.",
        "Regular scheduled visits prevent brake dust from permanently etching alloys, remove bird lime and traffic film before they bond to paint, and keep your protection layer in peak condition.",
        "Book it once and it runs like clockwork. We work around you — evenings and weekends included."
      ]}
      whatsIncluded={[
        "Pre-wash rinse & snow foam pre-soak",
        "Wheel arch deep clean",
        "Wheels & tyres hand cleaned",
        "Safe two-bucket wash method",
        "Interior vacuum",
        "Interior & exterior glass cleaned streak-free",
        "Interior seats wiped down",
        "Spray sealant applied (3 months protection)",
        "Tyre dressing",
        "Air freshener"
      ]}
      benefits={[
        "Keeps your vehicle in perpetual showroom condition — prevents grime buildup",
        "100% pure spotless water — zero mineral deposits, zero water marks",
        "Swirl-free two-bucket hand wash preserving your clear coat",
        "Fixed, transparent pricing from £50 — no surprises",
        "Scheduled every 2–4 weeks around your life",
        "Fully mobile — we come to your home or workplace across Swindon & Wiltshire"
      ]}
      idealFor={[
        "Regular drivers who want their car always looking sharp",
        "Prestige, sports, and daily vehicles",
        "Ceramic-coated vehicles needing safe maintenance washes",
        "Busy professionals who want convenience without drop-offs"
      ]}
      processSteps={[
        { title: "Pre-Wash & Snow Foam", desc: "High-density snow foam applied after a rinse, safely lifting road film and fallout without touching the paint." },
        { title: "Wheel Arches & Wheels", desc: "Deep arch clean followed by pH-safe wheel cleaner and soft brushes removing brake dust." },
        { title: "Safe Two-Bucket Wash", desc: "Microfibre mitts and warm shampoo in a strict two-bucket method — no grit re-introduced to the paint." },
        { title: "Interior, Glass & Sealant", desc: "Full vacuum, seat wipe, streak-free glass inside and out, sealant applied, tyres dressed, air freshener finished." }
      ]}
      faqs={[
        {
          question: "How much does the Maintenance Plan cost in Swindon?",
          answer: "The Maintenance Plan is from £50 for standard vehicles — scheduled every 2–4 weeks to keep your protection layer topped up and your car consistently sharp."
        },
        {
          question: "How often should I book?",
          answer: "We recommend every 2 to 4 weeks depending on mileage and parking conditions. The more consistently you maintain it, the better the finish holds."
        },
        {
          question: "Do you come directly to my driveway?",
          answer: "Yes — we are 100% mobile across Swindon, Marlborough, Cirencester, Chippenham, Royal Wootton Bassett, and surrounding Wiltshire areas."
        },
        {
          question: "Do I need to supply water?",
          answer: "No. We carry our own 100% pure spotless water. We do need access to a standard 13A plug socket — we bring an extension lead."
        }
      ]}
      schemaDescription="Regular mobile maintenance plan in Swindon, Wiltshire. Scheduled professional care every 2–4 weeks to maintain showroom condition. Fully mobile, fully insured."
      schemaMinPrice="50"
      relatedServices={[
        { name: "Full Valet Package", path: "/#services", price: "From £70" },
        { name: "Deep Clean Package", path: "/deep-clean", price: "From £120" },
        { name: "Ceramic Coating", path: "/ceramic-coating", price: "From £100" },
      ]}
    />
  );
}
