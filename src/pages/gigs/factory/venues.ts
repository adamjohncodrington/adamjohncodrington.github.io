import { MUSIC_VENUES } from "@constants";
import { getItemCounts, getGigTitle, getDatesText, isInFuture } from "utils";

import { DATA } from "../data";

const getGigsMatchingMusicVenue = (musicVenue: IMusicVenue): Array<IGig> => {
  const gigsMatchingMusicVenue: Array<IGig> = [];
  const gigs: Array<IGig> = DATA.ALL;
  gigs.forEach((gig: IGig): void => {
    if (gig.venue === musicVenue) gigsMatchingMusicVenue.push(gig);
  });
  return gigsMatchingMusicVenue;
};

const getMusicVenueDetails = (
  musicVenue: IMusicVenue
): Array<ICountedListItemDetail> => {
  const gigsMatchingMusicVenue: Array<IGig> = getGigsMatchingMusicVenue(
    musicVenue
  );
  return gigsMatchingMusicVenue.map(
    (gig: IGig, index: number): ICountedListItemDetail => {
      const { dates } = gig;
      return {
        index: gigsMatchingMusicVenue.length > 1 ? index + 1 : undefined,
        mainText: [getGigTitle(gig)],
        dateText: getDatesText(dates),
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

export const VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  MUSIC_VENUES
).map(
  (musicVenue: IMusicVenue): ICountedListItem => {
    const { name, favourite } = musicVenue;
    return {
      text: name,
      favourite,
      ...getItemCounts({ item: { musicVenue }, data: { gigs: DATA.ALL } }),
      details: getMusicVenueDetails(musicVenue)
    };
  }
);
