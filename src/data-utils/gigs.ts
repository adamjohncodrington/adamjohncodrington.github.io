import {
  getGigTitle,
  getGigSubtitle,
  getGigMusicians,
  getFestivalTitle,
  getFestivalSubtitle,
  getFestivalMusicians,
  moveTheSuffixToPrefix,
  getDatesText,
  getCountdownText
} from "utils";

export const mapGigsToMusicEvents = (gigs: Array<IGig>): Array<IMusicEvent> => {
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
  festivals: Array<IFestival>
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

export const mapMusicEventsToCards = (
  musicEvents: Array<IMusicEvent>
): Array<ICard> => {
  const mapMusicEventToCard = (musicEvent: IMusicEvent): ICard => {
    const { venue, dates, ticketType } = musicEvent;
    return {
      ...musicEvent,
      body: moveTheSuffixToPrefix(venue.name),
      secondaryBody: getDatesText(dates),
      countdownText: getCountdownText(dates[0]),
      note: ticketType
    };
  };
  return musicEvents.map(
    (musicEvent: IMusicEvent): ICard => mapMusicEventToCard(musicEvent)
  );
};
