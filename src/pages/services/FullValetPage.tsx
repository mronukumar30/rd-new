/**
 * Full Valet Package Service Page
 * Target keywords: "full valet swindon", "car valet swindon", "mobile full valet wiltshire"
 */

import { useEffect } from "react";
import ServicePageTemplate from "./ServicePageTemplate";

export default function FullValetPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageTemplate
      title="Full Valet Package Swindon | Mobile Car Valet Wiltshire | RD Valeting"
      metaDescription="Professional full valet package in Swindon & Wiltshire from £70. Snow foam pre-wash, 3-bucket safe wash, carpet shampoo, steam/leather seats & 4-month spray sealant. Fully mobile, fully insured."
      canonicalPath="/full-valet"
      serviceName="Full Valet"
      heroTagline="The Comprehensive Reset Your Car Deserves"
      heroDescription="A ground-up reset that turns an everyday car into something that makes every journey feel like the first one. From pre-wash snow foam to a 4-month spray sealant, this is everything your car needs."
      price="From £70"
      duration="3–4 Hours"
      heroImage="/724893959_1438592524987609_4973891884401838852_n.jpg"
      heroImageAlt="Full valet package Swindon — mobile car valeting service by RD Valeting Wiltshire"
      whatIsTitle="The RD Valeting Full Valet"
      whatIsContent={[
        "The Full Valet Package is our most popular all-in-one service — a thorough, methodical clean that covers every inch of your car, inside and out. We use professional pH-neutral products and safe wash techniques to lift grime without harming your paintwork.",
        "We start with a full pre-wash, snow foam soak, and a safe 3-bucket hand wash before moving inside: vacuuming carpets and shampooing them, steam cleaning or conditioning seats and leather, and leaving every surface spotless.",
        "The finish is sealed with a spray sealant that protects your paintwork for up to 4 months — keeping that just-valeted look far longer between cleans.",
        "Want to maintain that finish without another full valet? Our Maintenance Wash (from £50) is designed to keep your car in top condition every 2–4 weeks."
      ]}
      whatsIncluded={[
        "Pre-wash, rinse & snow foam soak",
        "Safe hand wash (3-bucket method)",
        "Drying towel finish",
        "Door shuts cleaned",
        "Interior vacuum",
        "Steamed seats or leather cleaned & conditioned",
        "Carpets shampooed",
        "All trims & headlining cleaned",
        "Tyres & bodywork trim dressed",
        "Interior & exterior glass cleaned",
        "Tar removed from paintwork",
        "Spray sealant (4 months protection)",
        "Air freshener"
      ]}
      benefits={[
        "Complete interior and exterior reset in one visit",
        "4-month spray sealant keeps paintwork protected long after the clean",
        "Safe 3-bucket wash method — no swirl marks, no scratches",
        "Professional steaming for seats and leather to lift embedded grime",
        "Fully mobile — Rhys comes directly to your driveway across Swindon & Wiltshire",
        "Fully insured for complete peace of mind",
        "5-star rated with obsessive attention to every detail"
      ]}
      idealFor={[
        "Cars that need a comprehensive reset after a few months of use",
        "Anyone who wants a showroom-fresh finish without leaving their driveway",
        "Pre-sale preparation to maximise resale value",
        "Treating yourself or a loved one to a pristine car",
        "Anyone wanting lasting paint protection without a full ceramic coating"
      ]}
      processSteps={[
        { title: "Pre-Wash & Snow Foam", desc: "A full pre-rinse and thick snow foam soak lifts loose dirt safely before any contact is made with the paintwork." },
        { title: "Safe Hand Wash", desc: "3-bucket method hand wash — one for shampoo, one for rinse, one for wheels — ensuring no cross-contamination and zero scratches." },
        { title: "Interior Refresh", desc: "Full vacuum, carpet shampoo, seat steam or leather condition, trims, glass, and headlining all detailed to a high standard." },
        { title: "Protection & Finish", desc: "Tar removed, tyres dressed, and a 4-month spray sealant applied to seal and protect your paintwork before a final inspection." }
      ]}
      faqs={[
        {
          question: "How much does a full valet cost in Swindon?",
          answer: "Our Full Valet Package starts from £70 for standard vehicles — a complete interior and exterior reset with no hidden charges."
        },
        {
          question: "How long does a full valet take?",
          answer: "A full valet typically takes 3 to 4 hours. We never rush — every surface gets the time and care it deserves."
        },
        {
          question: "Do you come to my home or office?",
          answer: "Yes! RD Valeting is 100% mobile across Swindon, Marlborough, Chippenham, Cirencester, and surrounding Wiltshire areas. We bring all professional equipment directly to your driveway."
        },
        {
          question: "What is the difference between a Full Valet and a Deep Clean?",
          answer: "The Full Valet (from £70) is a comprehensive reset for a car in everyday condition — snow foam, 3-bucket safe wash, interior refresh, and a 4-month spray sealant. The Deep Clean (£150) goes further for cars that need rescuing: wet extraction machine shampoo, pet hair and stain removal, iron fallout and tar chemical purge, and a full steam interior clean."
        },
        {
          question: "Does the full valet include a sealant?",
          answer: "Yes — every Full Valet Package includes a spray sealant applied to the paintwork, giving up to 4 months of protection against road grime and the elements."
        }
      ]}
      schemaDescription="Professional full valet package in Swindon and Wiltshire. Mobile car valeting from £70 — snow foam pre-wash, safe hand wash, interior shampoo, and 4-month spray sealant. Fully insured."
      schemaMinPrice="70"
      relatedServices={[
        { name: "Maintenance Plan", path: "/maintenance-clean", price: "From £50" },
        { name: "Deep Clean Package", path: "/deep-clean", price: "£150" },
        { name: "Ceramic Coating", path: "/ceramic-coating", price: "From £100" },
      ]}
    />
  );
}
