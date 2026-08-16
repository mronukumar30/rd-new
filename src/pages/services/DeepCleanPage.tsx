/**
 * Deep Clean Service Page
 * Target keywords: "deep clean car luton", "full car detail luton", "interior exterior car clean"
 */

import { useEffect } from "react";
import ServicePageTemplate from "./ServicePageTemplate";

export default function DeepCleanPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageTemplate
      title="Deep Clean Car Detailing in Luton | Full Interior & Exterior | King of Detailing"
      metaDescription="Professional deep clean car detailing in Luton, Bedfordshire. Full interior & exterior detail from £150. Fully mobile, fully insured. Book today."
      canonicalPath="/deep-clean"
      serviceName="Deep Clean"
      heroTagline="A Complete Reset for Your Vehicle"
      heroDescription="Our flagship deep clean is a comprehensive interior and exterior detail that restores your vehicle to a factory-fresh finish. Every surface, every crevice, every detail — meticulously cleaned and restored."
      price="From £150"
      duration="5–6 Hours"
      heroImage="/bmw-535d-interior-detailing-luton.webp"
      heroImageAlt="Professional deep clean car detailing service in Luton — BMW 535d interior and exterior restoration by King of Detailing"
      whatIsTitle="The King's Deep Clean"
      whatIsContent={[
        "Our deep clean is far more than a car wash. It's a comprehensive, multi-stage detailing process that transforms your vehicle from the inside out. We treat every surface with professional-grade products from Garage Therapy — the same system used in the UK's top detailing studios.",
        "Starting with a full exterior decontamination and snow foam pre-wash, we work through every panel with precision. The interior receives equal attention: seats are deep-cleaned and conditioned, carpets are extracted, plastics are restored, and every air vent, door pocket, and crevice is meticulously detailed.",
        "This is the entry point to the King of Detailing experience, and it sets the standard for everything we do.",
        "After your deep clean, you qualify for our exclusive maintenance plan — regular scheduled cleans every 3 to 6 weeks that keep your vehicle in perpetual showroom condition for up to 6 months."
      ]}
      whatsIncluded={[
        "Full exterior pre-wash, snow foam, and hand wash",
        "Clay bar decontamination to remove bonded contaminants",
        "Tar and iron fallout removal",
        "Wheel and arch deep clean with dedicated wheel cleaner",
        "Tyre dressing and trim restoration",
        "Full interior vacuum and extraction clean",
        "Leather or fabric seat deep clean and conditioning",
        "Dashboard, console, and trim restoration",
        "Door cards, sills, and boot detail",
        "Glass polish — interior and exterior",

        "Air freshener application",
        "Final wax or sealant protection"
      ]}
      benefits={[
        "Restores your car to a like-new, factory-fresh condition inside and out",
        "Removes months or years of built-up grime, stains, and odours",
        "Professional-grade Garage Therapy products — not off-the-shelf car wash soap",

        "Qualifies you for our maintenance plan (up to 6 months of scheduled care)",
        "Fully mobile — we come to your driveway in Luton, Bedfordshire, and beyond",
        "Fully insured for complete peace of mind",
        "5-star rated service with obsessive attention to every detail",
        "Perfect preparation before selling, leasing return, or special occasions"
      ]}
      idealFor={[
        "Vehicles that haven't been professionally detailed in 6+ months",
        "Cars with stained or heavily soiled interiors",
        "Pre-sale preparation to maximise resale value",
        "Lease return preparation to avoid end-of-lease charges",
        "New car owners wanting a protection baseline",
        "Anyone who wants their car to feel brand new again"
      ]}
      processSteps={[
        { title: "Exterior Pre-Wash", desc: "Snow foam and pre-wash to safely lift surface dirt and debris without scratching your paintwork." },
        { title: "Decontamination", desc: "Clay bar, tar remover, and iron fallout treatment to remove bonded contaminants that washing alone can't shift." },
        { title: "Hand Wash & Wheels", desc: "Two-bucket method hand wash with pH-neutral shampoo. Wheels, arches, and tyres detailed separately." },
        { title: "Interior Deep Clean", desc: "Full extraction clean of carpets and seats. Leather conditioning. Dashboard, console, door cards, and boot meticulously detailed." },

        { title: "Protection & Finish", desc: "Wax or sealant applied. Glass polished. Tyres dressed. Final inspection to ensure the King standard." }
      ]}
      faqs={[
        {
          question: "How much does a deep clean cost in Luton?",
          answer: "Our deep clean starts from £150 for standard-sized vehicles. Price may vary depending on the size of your vehicle (e.g., SUV, van) and its current condition. We'll provide a clear quote before any work begins."
        },
        {
          question: "How long does a deep clean take?",
          answer: "A typical deep clean takes 5 to 6 hours. We don't rush — every surface receives the time and attention it deserves. For heavily soiled vehicles, it may take slightly longer."
        },
        {
          question: "Do I need to provide water or electricity?",
          answer: "Ideally, yes — access to an outdoor tap and a power socket helps. However, we carry our own water supply and can work without electricity if needed. Just let us know when you book."
        },
        {
          question: "What's the difference between a deep clean and a regular car wash?",
          answer: "A car wash cleans the surface. A deep clean restores every surface inside and out — decontamination, extraction cleaning, leather conditioning, and professional protection. It's a completely different level of care."
        },
        {
          question: "Can you remove dog hair and pet odours?",
          answer: "Absolutely. Our extraction cleaning process is specifically designed to remove embedded pet hair, and we use professional odour neutralisers — not just air fresheners — to eliminate smells at the source."
        },
        {
          question: "What happens after my deep clean?",
          answer: "After your deep clean, you qualify for our exclusive maintenance plan. This means regular scheduled cleans every 3 to 6 weeks for up to 6 months, keeping your vehicle in showroom condition without needing another full deep clean."
        }
      ]}
      schemaDescription="Professional deep clean car detailing service in Luton, Bedfordshire. Full interior and exterior detail. Fully mobile, fully insured."
      schemaMinPrice="150"
      relatedServices={[
        { name: "Maintenance Clean", path: "/maintenance-clean", price: "From £100" },
        { name: "Paint Correction", path: "/paint-correction", price: "From £650" },
        { name: "Ceramic Coating", path: "/ceramic-coating", price: "From £650" },
      ]}
    />
  );
}
