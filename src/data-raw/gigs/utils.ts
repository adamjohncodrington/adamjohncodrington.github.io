import {
  getGigMusicians,
  getFestivalMusicians,
  getGigTitle,
  getGigSubtitle,
  getFestivalTitle,
  getFestivalSubtitle
} from "utils";

export const mapGigsToMusicEvents = (gigs: IGig[]): Array<IMusicEvent> => {
  const mapGigToMusicEvent = (gig: IGig): IMusicEvent => ({
    ...gig,
    gig,
    dates: [gig.date],
    title: getGigTitle(gig),
    subtitle: getGigSubtitle(gig),
    musicians: getGigMusicians(gig)
  });
  return gigs.map((gig: IGig): IMusicEvent => mapGigToMusicEvent(gig));
};

export const mapFestivalsToMusicEvents = (
  festivals: IFestival[]
): Array<IMusicEvent> => {
  const mapFestivalToMusicEvent = (festival: IFestival): IMusicEvent => ({
    ...festival,
    festival,
    title: getFestivalTitle(festival),
    subtitle: getFestivalSubtitle(festival),
    musicians: getFestivalMusicians(festival)
  });
  return festivals.map(
    (festival: IFestival): IMusicEvent => mapFestivalToMusicEvent(festival)
  );
};
