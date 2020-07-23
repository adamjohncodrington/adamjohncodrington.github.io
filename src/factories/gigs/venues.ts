import { MUSIC_VENUES as venues } from "@constants";
import { GIGS_AND_FESTIVALS as DATA } from "data";
import { getItemCounts } from "utils";

const getMusicVenueMatches = (
  musicVenue: IMusicVenue
): Array<IGigOrFestival> => {
  const musicVenueMatches: Array<IGigOrFestival> = [];
  DATA.forEach((gigOrFestival: IGigOrFestival): void => {
    if (gigOrFestival.venue === musicVenue)
      musicVenueMatches.push(gigOrFestival);
  });
  return musicVenueMatches;
};

const getMusicVenueDetails = (
  musicVenue: IMusicVenue
): Array<ICountedListItemDetail> => {
  const musicVenueMatches: Array<IGigOrFestival> = getMusicVenueMatches(
    musicVenue
  );
  return musicVenueMatches.map(
    (gigOrFestival: IGigOrFestival, index: number): ICountedListItemDetail => {
      const { title, dates, video } = gigOrFestival;
      return {
        index: musicVenueMatches.length > 1 ? index + 1 : undefined,
        mainText: [title],
        dates,
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
      ...getItemCounts({
        item: { musicVenue },
        data: { gigsAndFestivals: DATA }
      }),
      details: getMusicVenueDetails(musicVenue)
    };
  }
);
