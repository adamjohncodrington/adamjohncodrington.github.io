import { VIDEOS as videosObject } from "resources";
import { getMusicianStageNameAtTime, getDateText } from "utils";

const mapGigVideosToCards = (gigVideos: Array<IGigVideo>): Array<ICard> => {
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

const videos: Array<IGigVideo> = Object.values(videosObject.GIGS);

export const VIDEOS: Array<ICard> = mapGigVideosToCards(videos);
