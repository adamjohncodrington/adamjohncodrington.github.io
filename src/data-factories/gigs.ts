import {
  getDatesText,
  getDateText,
  getSymbols,
  getMusicianStageNameAtTime,
  isInFuture
} from "utils";

export const mapMusicEventsToCards = (
  musicEvents: Array<IMusicEvent>
): Array<ICard> => {
  const mapMusicEventToCard = (musicEvent: IMusicEvent): ICard => {
    const { venue, dates, ticketType, company, video } = musicEvent;
    return {
      ...musicEvent,
      sort: [dates[0]],
      symbols: getSymbols({ company, video, date: dates[0] }),
      body: venue.name,
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
