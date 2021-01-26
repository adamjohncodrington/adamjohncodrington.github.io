import { FESTIVALS_W_VIDEOS } from "data-raw";
import { VIDEOS as videosObject } from "resources";
import { getMusicianStageNameAtTime, getDateText } from "utils";

const mapFestivalWithVideoToMiniCard = ({
  title: { name },
  dates,
  video
}: IFestivalWithVideo): MiniCardProps => ({
  primaryText: name,
  sort: [name, dates[0].valueOf()],
  video,
  secondaryText: getDateText(dates[0], { hideDay: true })
});

const mapFestivalsWithVideosToMiniCards = (
  festivalsWithVideos: IFestivalWithVideo[]
): MiniCardProps[] => festivalsWithVideos.map(mapFestivalWithVideoToMiniCard);

const mapGigVideoToMiniCard = ({
  date,
  musician,
  ...video
}: GigVideo): MiniCardProps => {
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

const mapGigVideosToMiniCards = (gigVideos: GigVideo[]): MiniCardProps[] =>
  gigVideos.map(mapGigVideoToMiniCard);

const gigVideos: GigVideo[] = Object.values(videosObject.GIGS);

export const VIDEOS: MiniCardProps[] = [
  ...mapGigVideosToMiniCards(gigVideos),
  ...mapFestivalsWithVideosToMiniCards(FESTIVALS_W_VIDEOS)
];
