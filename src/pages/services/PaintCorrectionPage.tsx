/**
 * Paint Correction Service Page
 * Target keywords: "paint correction luton", "car polish luton", "swirl mark removal", "machine polishing luton"
 */

import { useEffect } from "react";
import ServicePageTemplate from "./ServicePageTemplate";

export default function PaintCorrectionPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <ServicePageTemplate
      title="Paint Correction in Luton | Swirl Mark & Scratch Removal | King of Detailing"
      metaDescription="Professional paint correction in Luton, Bedfordshire. Machine polishing to remove swirl marks, scratches & water etching. 3-year ceramic coating included. From £650."
      canonicalPath="/paint-correction"
      serviceName="Paint Correction"
      heroTagline="Precision Polishing. Flawless Finish."
      heroDescription="Swirl marks, light scratches, water etching, and oxidation — our machine polishing process eliminates paintwork defects that hand polishing can't touch. Combined with our 3-year ceramic coating for lasting protection."
      price="From £650"
      duration="1–1.5 Days"
      heroImage="/gallery-car-detailing-2.webp"
      heroImagePosition="center bottom"
      heroImageAlt="Professional paint correction and machine polishing in Luton — swirl mark removal and mirror-finish results by King of Detailing"
      whatIsTitle="Paint Correction"
      whatIsContent={[
        "Paint correction is the art and science of removing imperfections from your vehicle's clear coat using machine polishing techniques. Unlike hand polishing or buffing, machine correction uses calibrated tools, specialist pads, and professional compounds to precisely level the clear coat — removing defects without compromising paint thickness.",
        "Everyday driving takes a toll on your paintwork. Automated car washes leave swirl marks. Improper drying techniques cause micro-scratches. UV exposure causes oxidation. Hard water leaves etching. These defects scatter light instead of reflecting it cleanly, which is why your paint looks dull instead of glossy.",
        "Our paint correction process removes these defects at the molecular level, restoring your paintwork to a mirror-like finish with incredible depth and clarity. We inspect every panel under specialist LED lighting to ensure every defect is addressed.",
        "Once the paintwork is corrected, we seal it with a professional ceramic coating that locks in the perfect finish for up to 3 years. This combination of correction + protection is our Enhance package — the ultimate treatment for your vehicle's exterior."
      ]}
      whatsIncluded={[
        "Full exterior decontamination wash (snow foam, clay bar, tar and iron removal)",
        "Paint depth gauge readings to assess safe correction levels",
        "Single or multi-stage machine polishing with dual-action and rotary polishers",
        "Swirl mark removal from all painted surfaces",
        "Light scratch and buffer trail removal",
        "Water etching and acid rain damage correction",
        "Oxidation removal and colour restoration",
        "Panel-by-panel inspection under specialist LED lighting",
        "Professional ceramic coating application (3-year protection)",
        "Full interior deep clean and conditioning",
        "Wheel, arch, and tyre detail",

        "Glass polish and treatment",
        "Aftercare guide and 3-year maintenance plan enrolment"
      ]}
      benefits={[
        "Removes swirl marks that make your paint look dull and scratched — revealing true colour depth",
        "Eliminates light scratches, buffer trails, and hologramming from previous poor polishing",
        "Corrects water etching and acid rain damage that weakens your clear coat",
        "Restores oxidised and faded paint to its original vibrant colour",
        "Creates a mirror-like, glass-smooth surface that reflects light perfectly",
        "Includes 3-year ceramic coating to protect the corrected finish long-term",
        "Professional paint depth readings ensure safe correction without burning through clear coat",
        "Specialist LED inspection lighting — we find defects the naked eye can't see",
        "Dramatically increases your vehicle's value and visual impact"
      ]}
      idealFor={[
        "Vehicles with visible swirl marks, especially dark-coloured cars (black, navy, dark grey)",
        "Cars that have been through automated car washes repeatedly",
        "Vehicles with dull, oxidised, or faded paintwork",
        "Pre-sale preparation — corrected paint significantly increases resale value",
        "Enthusiasts who want their vehicle to look better than the day it left the factory",
        "Cars with water spot etching or hard water damage on the paintwork"
      ]}
      processSteps={[
        { title: "Decontamination Wash", desc: "Full pre-wash, snow foam, clay bar, and chemical decontamination to create a perfectly clean surface for polishing." },
        { title: "Paint Assessment", desc: "Paint depth gauge readings on every panel. Inspection under specialist LED lighting to map all defects and plan the correction strategy." },
        { title: "Machine Polishing", desc: "Single or multi-stage machine polishing using dual-action and rotary polishers with professional compounds and pads. Every panel corrected individually." },
        { title: "Defect Inspection", desc: "Each panel re-inspected under LED lighting after correction to verify complete defect removal. Additional passes applied where needed." },
        { title: "Ceramic Coating", desc: "Once paintwork is perfected, ceramic coating is applied panel by panel to seal and protect the corrected finish for up to 3 years." },
        { title: "Full Detail & Handover", desc: "Interior deep clean, wheels, and final exterior dressing. Vehicle handed over with aftercare guide and maintenance plan." }
      ]}
      faqs={[
        {
          question: "How much does paint correction cost in Luton?",
          answer: "Our paint correction package (Enhance) starts from £650 and includes machine polishing plus 3-year ceramic coating. The exact price depends on vehicle size, paint condition, and whether single-stage or multi-stage correction is needed."
        },
        {
          question: "Can paint correction remove deep scratches?",
          answer: "Paint correction removes defects within the clear coat layer — swirl marks, light scratches, buffer trails, water etching, and oxidation. Deep scratches that have gone through to the base coat or primer cannot be fully removed by polishing alone and may need professional touch-up paint or bodywork."
        },
        {
          question: "How long does paint correction last?",
          answer: "The polishing results are permanent — once swirl marks are removed, they're gone. However, new swirl marks can form over time from washing and environmental exposure. That's why we include a ceramic coating (3-year protection) and a maintenance plan to keep the finish protected long-term."
        },
        {
          question: "Will paint correction damage my clear coat?",
          answer: "Not when done professionally. We take paint depth gauge readings on every panel before starting to ensure there's sufficient clear coat for safe correction. Our polishing removes only microns of clear coat — well within safe limits. We never compromise your paint's integrity."
        },
        {
          question: "What's the difference between paint correction and a cut and polish?",
          answer: "A traditional 'cut and polish' is a single-step process that improves but rarely perfects the finish. Professional paint correction is a multi-stage process using specialist compounds, pads, and LED inspection lighting to achieve a near-perfect, defect-free finish. It's a fundamentally different level of precision and result."
        },
        {
          question: "How do I know if my car needs paint correction?",
          answer: "Run your fingertip lightly across your paintwork — if it doesn't feel glass-smooth, there are contaminants. Look at your paint under direct sunlight or a bright light — if you see spider-web patterns of fine scratches (swirl marks), your paint needs correction. Dark-coloured vehicles show these defects most prominently."
        }
      ]}
      schemaDescription="Professional paint correction and machine polishing service in Luton, Bedfordshire. Swirl mark removal, scratch repair, and 3-year ceramic coating. Fully mobile, fully insured."
      schemaMinPrice="650"
      relatedServices={[
        { name: "Deep Clean", path: "/deep-clean", price: "From £150" },
        { name: "Ceramic Coating", path: "/ceramic-coating", price: "From £650" },
        { name: "Maintenance Clean", path: "/maintenance-clean", price: "From £100" },
      ]}
    />
  );
}
