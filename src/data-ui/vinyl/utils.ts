import { APPLE_MUSIC_URL_PREFIX } from "config";
import { Photo, Vinyl, VinylColor } from "types";
import {
  getMusicianStageNameAtTime,
  moveTheSuffixToPrefix,
  numberToCurrencyString,
  getSymbols
} from "utils";

interface Options1 {
  hideYear?: boolean;
  hideSignedIcon?: boolean;
  hideAppearanceSymbol?: boolean;
  hideGiftSymbol?: boolean;
  showGiftFrom?: boolean;
  sortByColor?: boolean;
}

const getVinylPhotoTitle = ({ musician, year, title }: Vinyl): string =>
  `${moveTheSuffixToPrefix(
    getMusicianStageNameAtTime({ musician, year })
  )} • ${title}`;

export const mapVinylToPhoto = (vinyl: Vinyl): Photo => {
  const { artwork, appleMusicId } = vinyl;
  return {
    ...artwork,
    href: APPLE_MUSIC_URL_PREFIX + appleMusicId,
    title: getVinylPhotoTitle(vinyl)
  };
};

const mapVinylToCard = (
  vinyl: Vinyl,
  {
    hideAppearanceSymbol,
    hideGiftSymbol,
    hideSignedIcon,
    hideYear,
    showGiftFrom,
    sortByColor
  }: Options1 = {}
): CardProps => {
  const { signed, gift, title, color, inches, sides, musician, year } = vinyl;
  return {
    title,
    year,
    sort: [sortByColor ? getMainVinylColor(color) : year],
    subtitle: getMusicianStageNameAtTime({ musician, year }),
    body: hideYear ? undefined : year.toString(),
    headerPhoto: mapVinylToPhoto(vinyl),
    symbols: getSymbols({
      company: !!gift && showGiftFrom ? [gift.from] : undefined,
      gift: hideGiftSymbol ? undefined : gift,
      signed: hideSignedIcon ? undefined : signed,
      vinylAppearance: hideAppearanceSymbol
        ? undefined
        : { color, inches, sides }
    })
  };
};

export const mapVinylsToCards = (
  vinyls: Vinyl[],
  options?: Options1
): CardProps[] =>
  vinyls.map((vinyl: Vinyl): CardProps => mapVinylToCard(vinyl, options));

interface Options2 {
  showMusicianName: boolean;
  showCost?: boolean;
}

export const mapVinylsToMiniCardPanelDetails = (
  vinyls: Vinyl[],
  { showMusicianName, showCost = false }: Options2
): MiniCardPanelDetailProps[] => {
  const mapVinylToMiniCardPanelDetail = ({
    year,
    musician,
    title,
    costExcDelivery,
    appleMusicId
  }: Vinyl): MiniCardPanelDetailProps => {
    const mainText: string = showMusicianName
      ? `${moveTheSuffixToPrefix(
          getMusicianStageNameAtTime({ musician, year })
        )} - ${title}`
      : title;
    return {
      mainText: [mainText],
      secondaryText: showCost
        ? numberToCurrencyString(costExcDelivery, 0)
        : year.toString(),
      year,
      sort: showMusicianName ? [musician.name, title] : [year],
      headerLink: APPLE_MUSIC_URL_PREFIX + appleMusicId
    };
  };
  return vinyls.map(mapVinylToMiniCardPanelDetail);
};

export const getMainVinylColor = (vinylColor: VinylColor): string =>
  typeof vinylColor === "string"
    ? vinylColor
    : Array.isArray(vinylColor)
    ? vinylColor[0]
    : "photo";
