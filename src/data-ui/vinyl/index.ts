import { VINYL_COLLECTION, VINYL_WISH_LIST } from "data-raw";
import { APPLE_MUSIC_URL_PREFIX } from "config";
import { filterMiniCards, getMusicianStageNameAtTime, getSymbols } from "utils";

import { ARTWORK } from "./artwork";
import { COSTS } from "./costs";
import { COLORED } from "./colored";
import { GIFTS } from "./gifts";
import { MUSICIANS } from "./musicians";
import { RETAILERS } from "./retailers";
import { SIGNED } from "./signed";
import { YEARS } from "./years";

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

const mapAlbumsToCards = (
  albums: Array<IAlbum>,
  options?: IOptions
): Array<ICard> =>
  albums.map((album: IAlbum): ICard => mapAlbumToCard(album, options));

const mapVinylsToCards = (
  vinyls: Array<IVinyl>,
  options?: IOptions
): Array<ICard> =>
  vinyls.map((vinyl: IVinyl): ICard => mapVinylToCard(vinyl, options));

export const VINYL = {
  ARTWORK,
  COLORED: mapVinylsToCards(COLORED, {
    hideSignedIcon: true,
    hideGiftSymbol: true
  }),
  COSTS,
  GIFTS: mapVinylsToCards(GIFTS, {
    hideGiftSymbol: true,
    showGiftFrom: true,
    hideColorSymbol: true
  }),
  MUSICIANS: filterMiniCards(MUSICIANS),
  RETAILERS: filterMiniCards(RETAILERS),
  COLLECTION: mapVinylsToCards(VINYL_COLLECTION, {
    hideColorSymbol: true,
    hideGiftSymbol: true,
    hideSignedIcon: true
  }),
  SIGNED: mapVinylsToCards(SIGNED, { hideSignedIcon: true }),
  WISH_LIST: mapAlbumsToCards(VINYL_WISH_LIST),
  YEARS: YEARS.map(
    (year: Array<IVinyl>): Array<ICard> =>
      mapVinylsToCards(year, { hideYear: true })
  )
};
