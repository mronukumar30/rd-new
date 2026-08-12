/**
 * Hemel Hempstead Location Page
 * Target keywords: "car detailing hemel hempstead", "mobile valeting hemel"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-hemel-hempstead")!;

export default function HemelHempsteadPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
