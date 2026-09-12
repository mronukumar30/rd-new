/**
 * Watford Location Page
 * Target keywords: "car detailing watford", "mobile car cleaning watford"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-oxford" || l.slug === "car-detailing-watford")!;

export default function WatfordPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
