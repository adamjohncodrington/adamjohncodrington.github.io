import {
  getGigMusicians,
  getFestivalMusicians,
  getGigTitle,
  getGigSubtitle,
  getFestivalTitle,
  getFestivalSubtitle
} from "utils";

const mapGigToMusicEvent = (gig: Gig): MusicEvent => ({
  ...gig,
  gig,
  dates: [gig.date],
  title: getGigTitle(gig),
  subtitle: getGigSubtitle(gig),
  musicians: getGigMusicians(gig)
});

export const mapGigsToMusicEvents = (gigs: Gig[]): MusicEvent[] =>
  gigs.map(mapGigToMusicEvent);

const mapFestivalToMusicEvent = (festival: Festival): MusicEvent => ({
  ...festival,
  festival,
  title: getFestivalTitle(festival),
  subtitle: getFestivalSubtitle(festival),
  musicians: getFestivalMusicians(festival)
});

export const mapFestivalsToMusicEvents = (
  festivals: Festival[]
): MusicEvent[] => festivals.map(mapFestivalToMusicEvent);
