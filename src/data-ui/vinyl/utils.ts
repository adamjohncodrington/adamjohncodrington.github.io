import { APPLE_MUSIC_URL_PREFIX } from "config";
import {
  getMusicianStageNameAtTime,
  moveTheSuffixToPrefix,
  numberToCurrencyString
} from "utils";

interface IOptions {
  showMusicianName: boolean;
  showCost?: boolean;
}

export const mapVinylsToMiniCardPanelDetails = (
  vinyls: Array<IVinyl>,
  { showMusicianName, showCost = false }: IOptions
): Array<IMiniCardPanelDetail> => {
  const mapVinylToMiniCardPanelDetail = ({
    year,
    musician,
    title,
    costExcDelivery,
    appleMusicId
  }: IVinyl): IMiniCardPanelDetail => {
    const mainText: string = showMusicianName
      ? `${moveTheSuffixToPrefix(
          getMusicianStageNameAtTime({ musician, year })
        )} - ${title}`
      : title;
    return {
      mainText: [mainText],
      secondaryText: numberToCurrencyString(costExcDelivery, 0),
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
