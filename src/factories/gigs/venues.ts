import { MUSIC_VENUES as venues } from "@constants";
import { MUSIC_EVENTS as DATA } from "data";
import { getItemCounts } from "utils";

const getMusicVenueMatches = (musicVenue: IMusicVenue): Array<IMusicEvent> => {
  const musicVenueMatches: Array<IMusicEvent> = [];
  DATA.forEach((MusicEvent: IMusicEvent): void => {
    if (MusicEvent.venue === musicVenue) musicVenueMatches.push(MusicEvent);
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
        data: { MusicEvents: DATA }
      }),
      details: getMusicVenueDetails(musicVenue)
    };
  }
);
