/**
 * Ceramic Coating Service Page
 * Target keywords: "ceramic coating luton", "ceramic coating bedfordshire", "ceramic car coating near me"
 */

import { useEffect } from "react";
import ServicePageTemplate from "./ServicePageTemplate";

export default function CeramicCoatingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageTemplate
      title="Ceramic Coating in Luton, Bedfordshire | 5-Year Protection | RD Valeting"
      metaDescription="Professional ceramic coating in Luton from £650. 5-year paint protection with machine polishing. Superior water beading, UV resistance & gloss. Fully mobile, fully insured."
      canonicalPath="/ceramic-coating"
      serviceName="Ceramic Coating"
      heroTagline="5-Year Protection. Unrivalled Gloss."
      heroDescription="Our ceramic coating package combines precision machine polishing with advanced ceramic technology to give your vehicle the ultimate protection. Superior water beading, UV resistance, and an unmatched depth of gloss — all backed by up to 5 years of maintenance plan eligibility."
      price="From £650"
      duration="1–1.5 Days"
      heroImage="/Maintenance is key to keeping your car in the best shape possible month after month!Drop us a me (2).jpg"
      heroImagePosition="top"
      heroImageAlt="Porsche 911 GTS ceramic coating in Luton — RD Valeting"
      whatIsTitle="Ceramic Protection"
      whatIsContent={[
        "Ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paintwork to create a semi-permanent layer of protection. Unlike traditional waxes that wash off after a few weeks, a ceramic coating forms a molecular bond that lasts for years.",
        "Our ceramic coating package isn't just the coating itself — it starts with comprehensive paint preparation. We perform a full machine polish (single or multi-stage depending on the condition of your paintwork) to remove swirl marks, light scratches, water etching, and oxidation. Only then do we apply the ceramic coating to a perfectly prepared surface.",
        "The result is a vehicle with a depth of gloss and reflection that exceeds showroom standards. Water beads and sheets off the surface effortlessly. Environmental contaminants like bird droppings, tree sap, and industrial fallout can't bond to the coated surface, making maintenance dramatically easier.",
        "Once coated, you qualify for our maintenance plan for up to 5 years — regular scheduled washes that preserve the coating's performance and keep your vehicle looking exceptional between professional details."
      ]}
      whatsIncluded={[
        "Full exterior pre-wash, snow foam, and decontamination",
        "Clay bar treatment to remove bonded contaminants",
        "Tar and iron fallout chemical removal",
        "Single or multi-stage machine polishing (paint correction)",
        "Swirl mark, light scratch, and water etching removal",
        "Panel-by-panel paint inspection under specialist lighting",
        "Professional ceramic coating application",
        "Full interior deep clean and conditioning",
        "Wheel and arch deep clean",
        "Tyre dressing and trim restoration",
        "Glass polish and treatment",
        "24-hour curing period monitoring",
        "Aftercare guide and maintenance plan enrolment"
      ]}
      benefits={[
        "5-year protective coating that chemically bonds with your paint — no peeling or flaking",
        "Extreme water beading — water rolls right off, taking dirt and grime with it",
        "Superior UV protection to prevent colour fading and oxidation",
        "Resistance against bird droppings, tree sap, and industrial fallout",
        "Enhanced depth of colour and mirror-like gloss that exceeds showroom standards",
        "Dramatically easier maintenance — less effort to keep your car clean",
        "Includes full machine polish (paint correction) to remove existing defects",
        "5 years of maintenance plan eligibility to preserve coating performance",
        "Fully mobile — we come to your driveway in Luton, Bedfordshire, and beyond"
      ]}
      idealFor={[
        "New car owners who want to protect their investment from day one",
        "Enthusiasts who want the ultimate gloss, depth, and protection",
        "Lease vehicles — protect the paint to avoid end-of-lease damage charges",
        "Dark-coloured vehicles that show swirl marks and imperfections easily",
        "Anyone tired of waxing every few weeks — ceramic coating lasts years",
        "Vehicles parked outdoors and exposed to environmental contaminants"
      ]}
      processSteps={[
        { title: "Assessment & Pre-Wash", desc: "Full vehicle assessment under specialist lighting. Snow foam pre-wash and thorough decontamination to create a pristine surface." },
        { title: "Paint Decontamination", desc: "Clay bar, tar remover, and iron fallout treatment to remove every bonded contaminant from the paintwork surface." },
        { title: "Machine Polishing", desc: "Single or multi-stage machine polishing to remove swirl marks, light scratches, and water etching. The paintwork is perfected panel by panel." },
        { title: "Paint Inspection", desc: "Every panel is inspected under specialist LED lighting to ensure defect removal meets our standards before coating." },
        { title: "Ceramic Coating Application", desc: "The ceramic coating is applied by hand, panel by panel, ensuring complete and even coverage across the entire vehicle." },
        { title: "Curing & Final Inspection", desc: "The coating requires a 24-hour curing period. Final inspection ensures perfect finish. You receive an aftercare guide and maintenance plan enrolment." }
      ]}
      faqs={[
        {
          question: "How much does ceramic coating cost in Luton?",
          answer: "Our ceramic coating package starts from £650. This includes full machine polishing (paint correction), the ceramic coating application, and a complete interior and exterior detail. Pricing depends on vehicle size and paintwork condition."
        },
        {
          question: "How long does ceramic coating last?",
          answer: "Our ceramic coatings provide protection for up to 60 months depending on maintenance, exposure, and care. Following our recommended maintenance plan dramatically extends the coating's lifespan and performance."
        },
        {
          question: "Is ceramic coating worth it?",
          answer: "For most vehicle owners, absolutely. Ceramic coating provides years of protection compared to weeks from traditional wax. It dramatically reduces maintenance effort, protects against UV damage and environmental contaminants, and provides a depth of gloss that wax simply can't match. It's an investment in your vehicle's long-term value and appearance."
        },
        {
          question: "Can ceramic coating be applied to any car?",
          answer: "Yes — we apply ceramic coating to vehicles of all makes, models, ages, and colours. For older vehicles or those with significant paint damage, we recommend a multi-stage polish first to ensure the best possible results."
        },
        {
          question: "Does ceramic coating prevent scratches?",
          answer: "Ceramic coating provides a sacrificial layer that significantly increases scratch resistance, but it is not scratch-proof. It protects against light marring, swirl marks from washing, and environmental damage. For extreme scratch protection, consider paint protection film (PPF)."
        },
        {
          question: "How do I maintain my ceramic coating?",
          answer: "After your coating is applied, we enrol you in our maintenance plan — regular scheduled washes every 3 to 6 weeks using pH-neutral, ceramic-safe products. This preserves the coating's hydrophobic properties and gloss for the full lifespan."
        }
      ]}
      schemaDescription="Professional ceramic coating service in Luton, Bedfordshire. Machine polishing and 5-year ceramic paint protection. Fully mobile, fully insured."
      schemaMinPrice="650"
      relatedServices={[
        { name: "Deep Clean", path: "/deep-clean", price: "From £120" },
        { name: "Paint Correction", path: "/paint-correction", price: "From £650" },
        { name: "Maintenance Clean", path: "/maintenance-clean", price: "From £50" },
      ]}
    />
  );
}
