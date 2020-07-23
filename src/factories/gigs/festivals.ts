// import { FESTIVALS } from "@constants";
// import { getItemCounts, isInFuture, getGigSubtitle } from "utils";

// import * as DATA from "../data";

export const TO_BE_FIXED: string = "TO BE FIXED";

// const getGigsMatchingFestival = (festival: IFestivalTitle): Array<IGig> => {
//   const gigsMatchingFestival: Array<IGig> = [];
//   const gigs: Array<IGig> = DATA.ARRAY;
//   gigs.forEach((gig: IGig): void => {
//     if (festival === gig.festival) {
//       gigsMatchingFestival.push(gig);
//     }
//   });
//   return gigsMatchingFestival;
// };

// const getFestivalDetails = (
//   musician: IMusician
// ): Array<ICountedListItemDetail> => {
//   const gigsMatchingFestival: Array<IGig> = getGigsMatchingFestival(musician);
//   return gigsMatchingFestival.map(
//     (gig: IGig, index: number): ICountedListItemDetail => {
//       const { dates, video } = gig;
//       return {
//         mainText: [getGigSubtitle(gig) || "TBC"],
//         dates,
//         video
//       };
//     }
//   );
// };

// export const FESTIVALS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
//   FESTIVALS
// ).map(
//   (festival: IFestivalTitle): ICountedListItem => ({
//     text: festival.name,
//     ...getItemCounts({ item: { festival }, data: { gigs: DATA.ARRAY } }),
//     details: getFestivalDetails(festival)
//   })
// );
