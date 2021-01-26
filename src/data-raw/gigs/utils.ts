import {
  getGigMusicians,
  getFestivalMusicians,
  getGigTitle,
  getGigSubtitle,
  getFestivalTitle,
  getFestivalSubtitle
} from "utils";

export const mapGigsToMusicEvents = (gigs: Gig[]): IMusicEvent[] => {
  const mapGigToMusicEvent = (gig: Gig): IMusicEvent => ({
    ...gig,
    gig,
    dates: [gig.date],
    title: getGigTitle(gig),
    subtitle: getGigSubtitle(gig),
    musicians: getGigMusicians(gig)
  });
  return gigs.map((gig: Gig): IMusicEvent => mapGigToMusicEvent(gig));
};

export const mapFestivalsToMusicEvents = (
  festivals: Festival[]
): IMusicEvent[] => {
  const mapFestivalToMusicEvent = (festival: Festival): IMusicEvent => ({
    ...festival,
    festival,
    title: getFestivalTitle(festival),
    subtitle: getFestivalSubtitle(festival),
    musicians: getFestivalMusicians(festival)
  });
  return festivals.map(
    (festival: Festival): IMusicEvent => mapFestivalToMusicEvent(festival)
  );
};
