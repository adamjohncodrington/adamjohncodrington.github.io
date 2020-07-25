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
): Array<IBasicListItemDetail> =>
  getMusicVenueMatches(musicVenue).map(
    ({ title, dates, video }: IGigOrFestival): IBasicListItemDetail => ({
      mainText: [title],
      dates,
      video
    })
  );

export const VENUES: Array<IBasicListItem> = Object.values(venues).map(
  (musicVenue: IMusicVenue): IBasicListItem => {
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
