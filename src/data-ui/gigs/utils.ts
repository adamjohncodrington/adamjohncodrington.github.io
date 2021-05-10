import {
  getDatesText,
  getDateText,
  getSymbols,
  getMusicianStageNameAtTime,
  isInFuture
} from "utils";

export const mapMusicEventsToCards = (
  musicEvents: MusicEvent[],
  { hideFavouriteHeart }: { hideFavouriteHeart?: boolean } = {}
): CardProps[] =>
  musicEvents.map(
    (musicEvent: MusicEvent): CardProps => {
      const {
        venue,
        dates,
        ticketType,
        company,
        favourite,
        video,
        photos,
        postponedWithNoNewDate
      } = musicEvent;
      return {
        ...musicEvent,
        favourite: hideFavouriteHeart ? undefined : favourite,
        year: dates[0].getFullYear(),
        sort: [dates[0].valueOf()],
        symbols: getSymbols({
          company,
          photos,
          video,
          date: postponedWithNoNewDate ? undefined : dates[0]
        }),
        body: venue.name,
        secondaryBody: postponedWithNoNewDate ? undefined : getDatesText(dates),
        disclaimer: isInFuture(dates[0]) ? ticketType : undefined
      };
    }
  );

const mapGigVideoToCard = ({
  date,
  musician,
  ...video
}: GigVideo): CardProps => {
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

export const mapGigVideosToCards = (gigVideos: GigVideo[]): CardProps[] =>
  gigVideos.map(mapGigVideoToCard);
