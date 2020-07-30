import { APPLE_MUSIC_URL_PREFIX } from "config";
import { getMusicianStageNameAtTime, moveTheSuffixToPrefix } from "utils";

interface IOptions {
  showMusicianName: boolean;
}

export const mapVinylsToMiniCardPanelDetails = (
  vinyls: Array<IVinyl>,
  { showMusicianName }: IOptions
): Array<IMiniCardPanelDetail> => {
  const mapVinylToMiniCardPanelDetail = ({
    year,
    musician,
    title,
    appleMusicId
  }: IVinyl): IMiniCardPanelDetail => {
    const mainText: string = showMusicianName
      ? `${moveTheSuffixToPrefix(
          getMusicianStageNameAtTime({ musician, year })
        )} - ${title}`
      : title;
    return {
      mainText: [mainText],
      year,
      sort: showMusicianName ? [musician.name, title] : [year],
      headerLink: APPLE_MUSIC_URL_PREFIX + appleMusicId
    };
  };
  return vinyls.map(
    (vinyl: IVinyl): IMiniCardPanelDetail =>
      mapVinylToMiniCardPanelDetail(vinyl)
  );
};
