import { FESTIVALS_W_VIDEOS } from "data-raw";
import { VIDEOS as videosObject } from "resources";
import { getMusicianStageNameAtTime, getDateText } from "utils";

const mapFestivalsWithVideosToMiniCards = (
  festivalsWithVideos: IFestivalWithVideo[]
): MiniCardProps[] => {
  const mapFestivalWithVideoToMiniCard = ({
    title: { name },
    dates,
    video
  }: IFestivalWithVideo): MiniCardProps => {
    return {
      primaryText: name,
      sort: [name, dates[0].valueOf()],
      video,
      secondaryText: getDateText(dates[0], { hideDay: true })
    };
  };

  return festivalsWithVideos.map((festivalWithVideo: IFestivalWithVideo) =>
    mapFestivalWithVideoToMiniCard(festivalWithVideo)
  );
};

const mapGigVideosToMiniCards = (gigVideos: IGigVideo[]): MiniCardProps[] => {
  const mapGigVideoToMiniCard = ({
    date,
    musician,
    ...video
  }: IGigVideo): MiniCardProps => {
    const musicianName: string = getMusicianStageNameAtTime({
      musician,
      year: date.getFullYear()
    });
    return {
      primaryText: musicianName,
      sort: [musicianName, date.valueOf()],
      video,
      secondaryText: getDateText(date, { hideDay: true })
    };
  };
  return gigVideos.map(
    (gigVideo: IGigVideo): MiniCardProps => mapGigVideoToMiniCard(gigVideo)
  );
};

const gigVideos: IGigVideo[] = Object.values(videosObject.GIGS);

export const VIDEOS: MiniCardProps[] = [
  ...mapGigVideosToMiniCards(gigVideos),
  ...mapFestivalsWithVideosToMiniCards(FESTIVALS_W_VIDEOS)
];
