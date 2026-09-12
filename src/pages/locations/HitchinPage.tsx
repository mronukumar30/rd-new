/**
 * Hitchin Location Page
 * Target keywords: "car detailing hitchin", "car valeting hitchin"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-royal-wootton-bassett" || l.slug === "car-detailing-hitchin")!;

export default function HitchinPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
