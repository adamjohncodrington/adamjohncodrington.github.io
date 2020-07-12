import { MUSIC_VENUES } from "@constants";
import {
  getItemCounts,
  getGigCardTitle,
  getDatesText,
  isInFuture
} from "utils";

import { DATA } from "../data";

const getMusicVenueVisits = (musicVenue: IMusicVenue): Array<IGigCard> => {
  const venueVisits: Array<IGigCard> = [];
  const allGigs: Array<IGigCard> = DATA.ALL;
  allGigs.forEach((gig: IGigCard): void => {
    if (gig.venue === musicVenue) venueVisits.push(gig);
  });
  return venueVisits;
};

export const VENUES_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  MUSIC_VENUES
).map(
  (musicVenue: IMusicVenue): ICountedListItem => ({
    text: musicVenue.name,
    favourite: musicVenue.favourite,
    ...getItemCounts({ item: { musicVenue }, data: { gigCards: DATA.ALL } }),
    details: getMusicVenueVisits(musicVenue).map(
      (gigCard: IGigCard, index: number): ICountedListItemDetail => {
        const { dates } = gigCard;
        return {
          index,
          mainText: getGigCardTitle(gigCard),
          dateText: getDatesText(dates),
          isInFuture: isInFuture(dates[0])
        };
      }
    )
  })
);
