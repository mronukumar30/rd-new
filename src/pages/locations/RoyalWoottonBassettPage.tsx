/**
 * Royal Wootton Bassett Location Page
 * Target keywords: "car detailing royal wootton bassett", "mobile valeting wootton bassett"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-royal-wootton-bassett")!;

export default function RoyalWoottonBassettPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
