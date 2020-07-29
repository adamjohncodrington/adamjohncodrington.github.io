import {
  getGigMusicians,
  getFestivalMusicians,
  moveTheSuffixToPrefix,
  getDatesText,
  getDateText,
  getCountdownText,
  getGigTitle,
  getGigSubtitle,
  getFestivalTitle,
  getFestivalSubtitle,
  getSymbols,
  getMusicianStageNameAtTime
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
    const { venue, dates, ticketType, company, video } = musicEvent;
    return {
      ...musicEvent,
      symbols: getSymbols({ company, video }),
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

export const mapGigVideosToCards = (
  gigVideos: Array<IGigVideo>
): Array<ICard> => {
  const mapGigVideoToCard = ({
    date,
    musician,
    ...video
  }: IGigVideo): ICard => ({
    video,
    title: getMusicianStageNameAtTime({ musician, year: date.getFullYear() }),
    secondaryBody: getDateText(date)
  });

  return gigVideos.map(
    (gigVideo: IGigVideo): ICard => mapGigVideoToCard(gigVideo)
  );
};
