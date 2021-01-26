import { MUSIC_VENUES as venues } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getMusicVenueMatches = (musicVenue: MusicVenue): MusicEvent[] =>
  DATA.reduce(
    (matches: MusicEvent[], musicEvent: MusicEvent): MusicEvent[] =>
      musicEvent.venue === musicVenue ? [...matches, musicEvent] : matches,
    []
  );

const getMusicVenueDetails = (
  musicVenue: MusicVenue
): MiniCardPanelDetailProps[] =>
  getMusicVenueMatches(musicVenue).map(
    ({ title, dates, video }: MusicEvent): MiniCardPanelDetailProps => ({
      mainText: [title],
      dates,
      sort: [dates[0]],
      video
    })
  );

export const VENUES: MiniCardProps[] = Object.values(venues).map(
  (musicVenue: MusicVenue): MiniCardProps => {
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
      details: getMusicVenueDetails(musicVenue)
    };
  }
);
