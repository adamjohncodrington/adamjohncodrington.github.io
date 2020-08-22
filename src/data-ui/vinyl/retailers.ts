import { RETAILERS as retailers } from "@constants";
import { VINYL_PURCHASED as DATA } from "data-raw";

import { mapVinylsToMiniCardPanelDetails } from "./utils";

const getRetailerMatches = (retailer: IRetailer): IVinyl[] =>
  DATA.reduce(
    (matches: IVinyl[], vinyl: IVinyl): IVinyl[] =>
      vinyl.retailer === retailer ? [...matches, vinyl] : matches,
    []
  );

export const RETAILERS: IMiniCard[] = Object.values(retailers).map(
  (retailer: IRetailer): IMiniCard => {
    const { name } = retailer;
    const retailerMatches: IVinyl[] = getRetailerMatches(retailer);
    const details: IMiniCardPanelDetail[] = mapVinylsToMiniCardPanelDetails(
      retailerMatches,
      { showMusicianName: true, showCost: true, artworkOnly: false }
    );
    return {
      primaryText: name,
      primaryCount: retailerMatches.length,
      sort: [name],
      details
    };
  }
);
