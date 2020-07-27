import { MUSICIANS as musicians } from "@constants";
import { VINYL as DATA } from "data-raw";
import { getItemCounts } from "utils";

// const getMusicianMatches = (musician: IMusician): Array<IVinyl> => {
//   const musicianMatches: Array<IMusicEvent> = [];
//   DATA.COLLECTION.forEach((musicEvent: IMusicEvent): void => {
//     if (musicEvent.musicians.includes(musician)) {
//       musicianMatches.push(musicEvent);
//     }
//   });
//   return musicianMatches;
// };

// const getMusicianDetails = (musician: IMusician): Array<IMiniCardDetail> =>
//   getMusicianMatches(musician).map(
//     ({
//       dates,
//       festival,
//       gig,
//       venue,
//       favourite,
//       video
//     }: IMusicEvent): IMiniCardDetail => ({
//       mainText: [
//         festival ? festival.title.name : moveTheSuffixToPrefix(venue.name)
//       ],
//       dates: [new Date()],
//       video: gig ? (gig.headline === musician ? video : undefined) : undefined,
//       favourite: favourite && gig && gig.headline === musician
//     })
//   );

export const MUSICIANS: Array<IMiniCard> = Object.values(musicians).map(
  (musician: IMusician): IMiniCard => {
    const { name, previousStageName } = musician;
    return {
      text: name,
      secondaryText: previousStageName && previousStageName.name,
      ...getItemCounts({
        item: { musician },
        data: { vinyls: DATA.COLLECTION }
      })
    };
  }
);
