/**
 * Luton Location Page
 * Target keywords: "car detailing luton", "mobile car valeting luton", "car cleaning luton"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "mobile-car-detailing-swindon" || l.slug === "mobile-car-detailing-luton")!;

export default function LutonPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
