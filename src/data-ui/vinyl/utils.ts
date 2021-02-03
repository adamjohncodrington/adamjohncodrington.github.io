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

const getAlbumPhotoTitle = ({ musician, year, title }: IAlbum): string => {
  return `${moveTheSuffixToPrefix(
    getMusicianStageNameAtTime({ musician, year })
  )} • ${title}`;
};

export const mapAlbumToPhoto = (album: IAlbum): IPhoto => {
  const { photo, appleMusicId } = album;
  return {
    ...photo,
    href: APPLE_MUSIC_URL_PREFIX + appleMusicId,
    title: getAlbumPhotoTitle(album)
  };
};

const mapAlbumToCard = (album: IAlbum, options?: IOptions): CardProps => {
  const { title, musician, year } = album;
  const hideYear: boolean = !!(options && options.hideYear);
  return {
    title,
    year,
    sort: [year],
    subtitle: getMusicianStageNameAtTime({ musician, year }),
    body: hideYear ? undefined : year.toString(),
    headerPhoto: mapAlbumToPhoto(album)
  };
};

const mapVinylToCard = (vinyl: Vinyl, options?: IOptions): CardProps => {
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
): CardProps[] =>
  albums.map((album: IAlbum): CardProps => mapAlbumToCard(album, options));

export const mapVinylsToCards = (
  vinyls: Vinyl[],
  options?: IOptions
): CardProps[] =>
  vinyls.map((vinyl: Vinyl): CardProps => mapVinylToCard(vinyl, options));

interface IOptions2 {
  showMusicianName: boolean;
  showCost?: boolean;
}

export const mapVinylsToMiniCardPanelDetails = (
  vinyls: Vinyl[],
  { showMusicianName, showCost = false }: IOptions2
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
  return vinyls.map(
    (vinyl: Vinyl): MiniCardPanelDetailProps =>
      mapVinylToMiniCardPanelDetail(vinyl)
  );
};
