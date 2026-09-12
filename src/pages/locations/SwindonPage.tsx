/**
 * Swindon Location Page (Home Base)
 * Target keywords: "mobile car valeting swindon", "car detailing swindon", "car cleaning swindon"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "mobile-car-detailing-swindon")!;

export default function SwindonPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
