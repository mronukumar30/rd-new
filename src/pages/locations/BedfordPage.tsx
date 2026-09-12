/**
 * Bedford Location Page
 * Target keywords: "car detailing bedford", "mobile valeting bedford", "car wash bedford"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-marlborough" || l.slug === "car-detailing-bedford")!;

export default function BedfordPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
