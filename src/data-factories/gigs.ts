import {
  getGigMusicians,
  getFestivalMusicians,
  moveTheSuffixToPrefix,
  getDatesText,
  getDateText,
  getGigTitle,
  getGigSubtitle,
  getFestivalTitle,
  getFestivalSubtitle,
  getSymbols,
  getMusicianStageNameAtTime,
  isInFuture
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
      sort: [dates[0]],
      symbols: getSymbols({ company, video, date: dates[0] }),
      body: moveTheSuffixToPrefix(venue.name),
      secondaryBody: getDatesText(dates),
      disclaimer: isInFuture(dates[0]) ? ticketType : undefined
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
  }: IGigVideo): ICard => {
    const musicianName: string = getMusicianStageNameAtTime({
      musician,
      year: date.getFullYear()
    });
    return {
      title: musicianName,
      sort: [musicianName, date],
      video,
      secondaryBody: getDateText(date)
    };
  };

  return gigVideos.map(
    (gigVideo: IGigVideo): ICard => mapGigVideoToCard(gigVideo)
  );
};
