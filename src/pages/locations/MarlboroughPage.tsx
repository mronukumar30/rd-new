/**
 * Marlborough Location Page
 * Target keywords: "car detailing marlborough", "mobile car valeting marlborough"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-marlborough")!;

export default function MarlboroughPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
