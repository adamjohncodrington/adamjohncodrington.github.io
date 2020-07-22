import { MUSIC_VENUES as venues } from "@constants";
import { GIGS as DATA } from "data";
import { getItemCounts, getGigTitle, getDatesText, isInFuture } from "utils";

const getGigsMatchingMusicVenue = (musicVenue: IMusicVenue): Array<IGig> => {
  const gigsMatchingMusicVenue: Array<IGig> = [];
  DATA.forEach((gig: IGig): void => {
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
      const { dates, video } = gig;
      return {
        index: gigsMatchingMusicVenue.length > 1 ? index + 1 : undefined,
        mainText: [getGigTitle(gig)],
        dateText: getDatesText(dates),
        isInFuture: isInFuture(dates[0]),
        video
      };
    }
  );
};

export const VENUES: Array<ICountedListItem> = Object.values(venues).map(
  (musicVenue: IMusicVenue): ICountedListItem => {
    const { name, favourite } = musicVenue;
    return {
      text: name,
      favourite,
      ...getItemCounts({ item: { musicVenue }, data: { gigs: DATA } }),
      details: getMusicVenueDetails(musicVenue)
    };
  }
);
