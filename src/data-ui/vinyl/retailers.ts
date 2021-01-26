import { RETAILERS as retailers } from "@constants";
import { VINYL_PURCHASED as DATA } from "data-raw";

import { mapVinylsToMiniCardPanelDetails } from "./utils";

const getRetailerMatches = (retailer: Retailer): IVinyl[] =>
  DATA.reduce(
    (matches: IVinyl[], vinyl: IVinyl): IVinyl[] =>
      vinyl.retailer === retailer ? [...matches, vinyl] : matches,
    []
  );

export const RETAILERS: MiniCardProps[] = Object.values(retailers).map(
  (retailer: Retailer): MiniCardProps => {
    const { name } = retailer;
    const retailerMatches: IVinyl[] = getRetailerMatches(retailer);
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
