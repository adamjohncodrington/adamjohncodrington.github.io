import { RETAILERS as retailers } from "@constants";
import { VINYL_COLLECTION as DATA } from "data-raw";

const getRetailerMatches = (retailer: IRetailer): Array<IVinyl> => {
  const retailerMatches: Array<IVinyl> = [];
  DATA.forEach((vinyl: IVinyl): void => {
    if (vinyl.retailer === retailer) retailerMatches.push(vinyl);
  });
  return retailerMatches;
};

export const RETAILERS: Array<IMiniCard> = Object.values(retailers).map(
  (retailer: IRetailer): IMiniCard => {
    const { name, umbrella } = retailer;
    const retailerMatches: Array<IVinyl> = getRetailerMatches(retailer);
    return {
      primaryText: name,
      primaryCount: retailerMatches.length,
      anomaly: umbrella,
      sort: [!!umbrella, name]
    };
  }
);
