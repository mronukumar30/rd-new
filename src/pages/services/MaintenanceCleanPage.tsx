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
      title="Maintenance Wash in Swindon | Regular Mobile Valeting £50 | RD Valeting"
      metaDescription="Regular mobile maintenance wash in Swindon, Wiltshire from £50. Keep your vehicle in showroom condition with scheduled professional care. Fully mobile."
      canonicalPath="/maintenance-clean"
      serviceName="Maintenance Wash"
      heroTagline="Showroom Condition. Every Time."
      heroDescription="A quick and effective clean to keep your car fresh, shiny and well-maintained. Perfect for regular upkeep on prestige and daily vehicles across Swindon and Wiltshire."
      price="From £50"
      duration="1.5–2 Hours"
      heroImage="/719890908_2222286848526617_3057517277440017740_n.jpg"
      heroImageAlt="Professional mobile maintenance wash in Swindon — regular scheduled detailing service by RD Valeting to maintain showroom condition"
      whatIsTitle="Maintenance Programme"
      whatIsContent={[
        "The Maintenance Wash is our core upkeep package at RD Valeting. It's a thorough, safe service designed to preserve your vehicle's paintwork, decontamination, and interior cleanliness between full details.",
        "Unlike a harsh roadside car wash that uses acidic chemicals and abrasive sponges, our maintenance wash uses pH-neutral, swirl-free wash techniques. Wheels and tyres are thoroughly cleaned, windows are polished inside and out, and the interior receives a full vacuum and tidy.",
        "Regular maintenance prevents brake dust from burning into alloys, removes bird lime and traffic film before it etches paint, and keeps your vehicle feeling fresh every day.",
        "Book as a standalone refresh or set up regular monthly visits to ensure your pride and joy never loses its shine."
      ]}
      whatsIncluded={[
        "Exterior pre-wash and snow foam to safely lift surface dirt",
        "Gentle two-bucket hand wash with pH-neutral shampoo",
        "Wheel faces and tyres cleaned and dressed",
        "Full interior cabin vacuum and tidy",
        "Dashboard, console, and steering wheel wipe-down",
        "Door sills and frames wiped",
        "Windows cleaned inside & out for streak-free visibility",
        "Air freshener scent application"
      ]}
      benefits={[
        "Keeps your vehicle in perpetual showroom condition — prevents grime buildup",
        "100% swirl-free hand wash techniques preserving your clear coat",
        "Affordable, transparent pricing at just £50",
        "Consistent results every visit by Rhys personally",
        "Fully mobile — we come directly to your home or office in Swindon & Wiltshire",
        "Your vehicle always looks its best for work, events, or everyday pride"
      ]}
      idealFor={[
        "Regular drivers wanting to keep their car in top condition",
        "Prestige, sports, and daily vehicles",
        "Busy professionals who want convenience without dropping off their vehicle",
        "Anyone who appreciates spotless, swirl-free automotive care"
      ]}
      processSteps={[
        { title: "Snow Foam Pre-Wash", desc: "High-density snow foam lifting road film safely without touching the paint." },
        { title: "Wheels & Tyres", desc: "pH-safe wheel cleaner and soft brushes cleaning brake dust and applying tyre dressing." },
        { title: "Safe Hand Wash", desc: "Two-bucket method with microfibre mitts and warm shampoo for a spotless, scratch-free finish." },
        { title: "Interior Tidy & Glass", desc: "Complete vacuum, dashboard wipe, and crystal-clear streak-free glass inside and out." }
      ]}
      faqs={[
        {
          question: "How much does a maintenance wash cost in Swindon?",
          answer: "Our Maintenance Wash is £50 for standard vehicles. Fast, efficient, and thorough."
        },
        {
          question: "How often should I get a maintenance wash?",
          answer: "We recommend every 2 to 4 weeks depending on your mileage and parking conditions to keep your car looking sharp year-round."
        },
        {
          question: "Do you come directly to my driveway?",
          answer: "Yes! We are 100% mobile across Swindon, Marlborough, Cirencester, Chippenham, and surrounding Wiltshire areas."
        },
        {
          question: "How do I book?",
          answer: "Simply book online through our booking wizard, or message Rhys directly on WhatsApp at 07393 682 365."
        }
      ]}
      schemaDescription="Regular maintenance car wash service in Swindon, Wiltshire. Scheduled professional care to maintain showroom condition. Fully mobile, fully insured."
      schemaMinPrice="50"
      relatedServices={[
        { name: "Deep Clean", path: "/deep-clean", price: "From £100" },
        { name: "Mini Valet", path: "/#services", price: "From £30" },
        { name: "Full Valet & Detailing", path: "/paint-correction", price: "From £150" },
      ]}
    />
  );
}
