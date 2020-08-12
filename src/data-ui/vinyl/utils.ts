import { APPLE_MUSIC_URL_PREFIX } from "config";
import {
  getMusicianStageNameAtTime,
  moveTheSuffixToPrefix,
  numberToCurrencyString,
  getSymbols
} from "utils";

interface IOptions {
  hideYear?: boolean;
  hideSignedIcon?: boolean;
  hideColorSymbol?: boolean;
  hideGiftSymbol?: boolean;
  showGiftFrom?: boolean;
}

const mapAlbumToCard = (
  { title, musician, year, photo, appleMusicId }: IAlbum,
  options?: IOptions
): ICard => {
  const hideYear: boolean = !!(options && options.hideYear);
  return {
    title,
    year,
    sort: [year],
    subtitle: getMusicianStageNameAtTime({ musician, year }),
    body: hideYear ? undefined : year.toString(),
    headerPhoto: {
      ...photo,
      href: APPLE_MUSIC_URL_PREFIX + appleMusicId
    }
  };
};

const mapVinylToCard = (vinyl: IVinyl, options?: IOptions): ICard => {
  const { signed, gift } = vinyl;
  const hideSignedIcon: boolean = !!(options && options.hideSignedIcon);
  const hideColorSymbol: boolean = !!(options && options.hideColorSymbol);
  const hideGiftSymbol: boolean = !!(options && options.hideGiftSymbol);
  const showGiftFrom: boolean = !!(options && options.showGiftFrom);
  return {
    ...mapAlbumToCard(vinyl, options),
    symbols: getSymbols({
      company: !!gift && showGiftFrom ? [gift.from] : undefined,
      gift: hideGiftSymbol ? undefined : gift,
      signed: hideSignedIcon ? undefined : signed,
      vinyl: hideColorSymbol ? undefined : vinyl
    })
  };
};

export const mapAlbumsToCards = (
  albums: IAlbum[],
  options?: IOptions
): ICard[] =>
  albums.map((album: IAlbum): ICard => mapAlbumToCard(album, options));

export const mapVinylsToCards = (
  vinyls: IVinyl[],
  options?: IOptions
): ICard[] =>
  vinyls.map((vinyl: IVinyl): ICard => mapVinylToCard(vinyl, options));

interface IOptions2 {
  showMusicianName: boolean;
  showCost?: boolean;
}

export const mapVinylsToMiniCardPanelDetails = (
  vinyls: IVinyl[],
  { showMusicianName, showCost = false }: IOptions2
): IMiniCardPanelDetail[] => {
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
      secondaryText: showCost
        ? numberToCurrencyString(costExcDelivery, 0)
        : year.toString(),
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
