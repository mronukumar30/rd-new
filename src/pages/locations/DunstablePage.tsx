/**
 * Dunstable Location Page
 * Target keywords: "car detailing dunstable", "mobile valeting dunstable"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-cirencester" || l.slug === "car-detailing-dunstable")!;

export default function DunstablePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
