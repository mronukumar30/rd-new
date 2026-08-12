/**
 * Aylesbury Location Page
 * Target keywords: "car detailing aylesbury", "mobile valeting aylesbury"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-aylesbury")!;

export default function AylesburyPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
