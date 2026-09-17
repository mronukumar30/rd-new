/**
 * Deep Clean Service Page
 * Target keywords: "deep clean car swindon", "full car detail swindon", "interior exterior car clean"
 */

import { useEffect } from "react";
import ServicePageTemplate from "./ServicePageTemplate";

export default function DeepCleanPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageTemplate
      title="Deep Clean Car Valeting in Swindon | Full Interior & Exterior | RD Valeting"
      metaDescription="Professional deep clean car valeting in Swindon, Wiltshire. Full interior & exterior detail for £100. Fully mobile, fully insured. Book today."
      canonicalPath="/deep-clean"
      serviceName="Deep Clean"
      heroTagline="A Complete Reset for Your Vehicle"
      heroDescription="Our flagship deep clean is a comprehensive interior and exterior detail that restores your vehicle to a factory-fresh finish. Every surface, every crevice, every detail — meticulously cleaned and restored."
      price="From £120"
      duration="3–4 Hours"
      heroImage="/724453567_1741795673842657_7212829807354336478_n.jpg"
      heroImageAlt="Professional deep clean car valeting service in Swindon — interior and exterior restoration by RD Valeting"
      whatIsTitle="The RD Valeting Deep Clean"
      whatIsContent={[
        "Our deep clean is far more than a basic car wash. It's a comprehensive, multi-stage valeting process that transforms your vehicle from the inside out. We treat every surface with professional-grade detailing products that safely decontaminate and protect your vehicle.",
        "Starting with a safe exterior hand wash and decontamination, we work through every panel, wheel arch, and door shut with precision. The interior receives equal attention: seats and carpets are extracted, plastics and leather are conditioned, and every air vent, door pocket, and crevice is meticulously detailed.",
        "This is our most popular package, designed to give your vehicle a complete like-new reset without leaving your driveway.",
        "After your deep clean, you can easily maintain that showroom fresh feeling with our regular £50 Maintenance Wash every few weeks."
      ]}
      whatsIncluded={[
        "Full exterior pre-wash, snow foam, and hand wash",
        "Wheels, arches, and tyre wall deep clean",
        "Full interior vacuum including boot and under seats",
        "Seats, carpets, and floor mats deep cleaned and extracted",
        "Dashboard, trims, door cards, and console rejuvenated",
        "Windows cleaned and polished inside & out",
        "Air freshener and scent neutraliser",
        "Tyre dressing and exterior trim finish"
      ]}
      benefits={[
        "Restores your car to a like-new, factory-fresh condition inside and out",
        "Removes built-up road grime, fabric stains, and odours",
        "Professional pH-neutral products that preserve paint and interior materials",
        "Fully mobile — Rhys comes directly to your driveway across Swindon & Wiltshire",
        "Fully insured for complete peace of mind",
        "5-star rated service with obsessive attention to every detail",
        "Perfect preparation before selling, leasing return, or just everyday pride"
      ]}
      idealFor={[
        "Vehicles that haven't had a thorough clean in 2+ months",
        "Cars with family, pet hair, or everyday grime",
        "Pre-sale preparation to maximise resale value",
        "Lease return preparation to avoid end-of-contract penalties",
        "Anyone who wants their car to feel spotless, fresh, and showroom-ready"
      ]}
      processSteps={[
        { title: "Exterior Hand Wash", desc: "Safe multi-stage wash lifting dirt without scratching paintwork, including wheels and arches." },
        { title: "Interior Extraction", desc: "Thorough vacuum and deep extraction of seats, floor mats, and carpets removing trapped dirt." },
        { title: "Trims & Console Detail", desc: "Dashboard, centre console, vents, and door cards cleaned, degreased, and refreshed." },
        { title: "Glass & Finishing", desc: "Windows polished inside and out for crystal clarity. Tyres dressed and final inspection to ensure the RD Valeting standard." }
      ]}
      faqs={[
        {
          question: "How much does a deep clean cost in Swindon?",
          answer: "Our Deep Clean Package is £120 for standard vehicles — a full interior and exterior restoration with no hidden fees and no corners cut."
        },
        {
          question: "How long does a deep clean take?",
          answer: "A typical deep clean takes 3 to 4 hours. We don't rush — every surface receives the time and care it deserves."
        },
        {
          question: "Do you come to my home or office in Swindon & Wiltshire?",
          answer: "Yes! RD Valeting is 100% mobile. We arrive in our self-contained van with all professional equipment at your driveway across Swindon, Marlborough, Cirencester, and surrounding areas."
        },
        {
          question: "Can you remove pet hair and stubborn interior marks?",
          answer: "Yes, our deep extraction process and specialist brushes are designed to tackle pet hair, stains, and daily grime."
        }
      ]}
      schemaDescription="Professional deep clean car valeting service in Swindon, Wiltshire. Full interior and exterior detail. Fully mobile, fully insured."
      schemaMinPrice="100"
      relatedServices={[
        { name: "Maintenance Plan", path: "/maintenance-clean", price: "From £50" },
        { name: "Full Valet Package", path: "/#services", price: "From £70" },
        { name: "Ceramic Coating", path: "/ceramic-coating", price: "From £100" },
      ]}
    />
  );
}
