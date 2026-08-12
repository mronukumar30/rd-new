/**
 * Milton Keynes Location Page
 * Target keywords: "car detailing milton keynes", "mobile detailing mk"
 */

import { useEffect } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import { LOCATIONS } from "../../constants/locations";

const locationData = LOCATIONS.find(l => l.slug === "car-detailing-milton-keynes")!;

export default function MiltonKeynesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <LocationPageTemplate location={locationData} />;
}
