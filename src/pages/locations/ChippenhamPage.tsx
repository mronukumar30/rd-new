/**
 * Chippenham Location Page
 * Target keywords: "car detailing chippenham", "mobile car valeting chippenham"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-chippenham")!;

export default function ChippenhamPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
