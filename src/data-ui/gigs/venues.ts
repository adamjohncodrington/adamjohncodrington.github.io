import { MUSIC_VENUES as venues } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getMusicVenueMatches = (musicVenue: IMusicVenue): Array<IMusicEvent> => {
  const musicVenueMatches: Array<IMusicEvent> = [];
  DATA.forEach((musicEvent: IMusicEvent): void => {
    if (musicEvent.venue === musicVenue) musicVenueMatches.push(musicEvent);
  });
  return musicVenueMatches;
};

const getMusicVenueDetails = (
  musicVenue: IMusicVenue
): Array<IMiniCardDetail> =>
  getMusicVenueMatches(musicVenue).map(
    ({ title, dates, video }: IMusicEvent): IMiniCardDetail => ({
      mainText: [title],
      dates,
      video
    })
  );

export const VENUES: Array<IMiniCard> = Object.values(venues).map(
  (musicVenue: IMusicVenue): IMiniCard => {
    const { name, favourite } = musicVenue;
    return {
      text: name,
      favourite,
      ...getItemCounts({
        item: { musicVenue },
        data: { musicEvents: DATA }
      }),
      details: getMusicVenueDetails(musicVenue)
    };
  }
);
