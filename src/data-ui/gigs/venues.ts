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
): Array<IMiniCardPanelDetail> =>
  getMusicVenueMatches(musicVenue).map(
    ({ title, dates, video }: IMusicEvent): IMiniCardPanelDetail => ({
      mainText: [title],
      dates,
      sort: [dates[0]],
      video
    })
  );

export const VENUES: Array<IMiniCard> = Object.values(venues).map(
  (musicVenue: IMusicVenue): IMiniCard => {
    const { name, favourite } = musicVenue;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({
      item: { musicVenue },
      data: { musicEvents: DATA }
    });
    return {
      primaryText: name,
      sort: [name],
      favourite,
      primaryCount,
      secondaryCount,
      panelDetails: getMusicVenueDetails(musicVenue)
    };
  }
);
