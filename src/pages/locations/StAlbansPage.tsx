/**
 * St Albans Location Page
 * Target keywords: "car detailing st albans", "mobile car cleaning st albans"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-chippenham" || l.slug === "car-detailing-st-albans")!;

export default function StAlbansPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
