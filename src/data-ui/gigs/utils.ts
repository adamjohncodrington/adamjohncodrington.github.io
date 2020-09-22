import {
  getDatesText,
  getDateText,
  getSymbols,
  getMusicianStageNameAtTime,
  isInFuture
} from "utils";

export const mapMusicEventsToCards = (musicEvents: IMusicEvent[]): ICard[] => {
  const mapMusicEventToCard = (musicEvent: IMusicEvent): ICard => {
    const { venue, dates, ticketType, company, video, photos } = musicEvent;
    return {
      ...musicEvent,
      year: dates[0].getFullYear(),
      sort: [dates[0].valueOf()],
      symbols: getSymbols({
        company,
        photos,
        video,
        date: dates[0]
      }),
      body: venue.name,
      secondaryBody: getDatesText(dates),
      disclaimer: isInFuture(dates[0]) ? ticketType : undefined
    };
  };
  return musicEvents.map(
    (musicEvent: IMusicEvent): ICard => mapMusicEventToCard(musicEvent)
  );
};

export const mapGigVideosToCards = (gigVideos: IGigVideo[]): ICard[] => {
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
      year: date.getFullYear(),
      sort: [musicianName, date.valueOf()],
      video,
      secondaryBody: getDateText(date)
    };
  };

  return gigVideos.map(
    (gigVideo: IGigVideo): ICard => mapGigVideoToCard(gigVideo)
  );
};
