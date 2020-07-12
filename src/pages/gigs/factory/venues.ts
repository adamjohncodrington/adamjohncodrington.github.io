import { MUSIC_VENUES } from "@constants";
import { getItemCounts, getGigTitle, getDatesText, isInFuture } from "utils";

import { DATA } from "../data";

const getMusicVenueVisits = (musicVenue: IMusicVenue): Array<IGig> => {
  const venueVisits: Array<IGig> = [];
  const allGigs: Array<IGig> = DATA.ALL;
  allGigs.forEach((gig: IGig): void => {
    if (gig.venue === musicVenue) venueVisits.push(gig);
  });
  return venueVisits;
};

const getMusicVenueDetails = (
  musicVenue: IMusicVenue
): Array<ICountedListItemDetail> => {
  const musicVenueGigs = getMusicVenueVisits(musicVenue);
  return musicVenueGigs.map(
    (gig: IGig, index: number): ICountedListItemDetail => {
      const { dates } = gig;
      return {
        index: musicVenueGigs.length > 1 ? index + 1 : undefined,
        mainText: getGigTitle(gig),
        dateText: getDatesText(dates),
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

export const VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  MUSIC_VENUES
).map(
  (musicVenue: IMusicVenue): ICountedListItem => ({
    text: musicVenue.name,
    favourite: musicVenue.favourite,
    ...getItemCounts({ item: { musicVenue }, data: { gigs: DATA.ALL } }),
    details: getMusicVenueDetails(musicVenue)
  })
);
