import { VIDEOS as videosObject } from "resources";
import { getMusicianStageNameAtTime, getDateText } from "utils";

const mapGigVideosToMiniCards = (gigVideos: IGigVideo[]): IMiniCard[] => {
  const mapGigVideoToCard = ({
    date,
    musician,
    ...video
  }: IGigVideo): IMiniCard => {
    const musicianName: string = getMusicianStageNameAtTime({
      musician,
      year: date.getFullYear()
    });
    return {
      primaryText: musicianName,
      sort: [musicianName, date],
      video,
      secondaryText: getDateText(date, { hideDay: true })
    };
  };
  return gigVideos.map(
    (gigVideo: IGigVideo): IMiniCard => mapGigVideoToCard(gigVideo)
  );
};

const videos: IGigVideo[] = Object.values(videosObject.GIGS);

export const VIDEOS: IMiniCard[] = mapGigVideosToMiniCards(videos);
