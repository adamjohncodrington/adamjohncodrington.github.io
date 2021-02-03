import { RETAILERS as retailers } from "@constants";
import { VINYL_COLLECTION as DATA } from "data-raw";

import { mapVinylsToMiniCardPanelDetails } from "./utils";

const getRetailerMatches = (retailer: Retailer): Vinyl[] =>
  DATA.reduce(
    (matches: Vinyl[], vinyl: Vinyl): Vinyl[] =>
      vinyl.retailer === retailer ? [...matches, vinyl] : matches,
    []
  );

export const RETAILERS: MiniCardProps[] = Object.values(retailers).map(
  (retailer: Retailer): MiniCardProps => {
    const { name } = retailer;
    const retailerMatches: Vinyl[] = getRetailerMatches(retailer);
    const details: MiniCardPanelDetailProps[] = mapVinylsToMiniCardPanelDetails(
      retailerMatches,
      { showMusicianName: true, showCost: true }
    );
    return {
      primaryText: name,
      primaryCount: retailerMatches.length,
      sort: [name],
      details
    };
  }
);
