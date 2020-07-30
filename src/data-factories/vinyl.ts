import { APPLE_MUSIC_URL_PREFIX } from "config";

import { getMusicianStageNameAtTime, getSymbols } from "utils";

interface IOptions {
  hideYear?: boolean;
  hideSignedIcon?: boolean;
  hideColorSymbols?: boolean;
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
    headerPhoto: { ...photo, href: APPLE_MUSIC_URL_PREFIX + appleMusicId }
  };
};

const mapVinylToCard = (vinyl: IVinyl, options?: IOptions): ICard => {
  const { signed, colors } = vinyl;
  const hideSignedIcon: boolean = !!(options && options.hideSignedIcon);
  const hideColorSymbols: boolean = !!(options && options.hideColorSymbols);
  return {
    ...mapAlbumToCard(vinyl, options),
    symbols: getSymbols({
      signed: hideSignedIcon ? undefined : signed,
      colorCircle: hideColorSymbols ? undefined : { colors }
    })
  };
};

export const mapAlbumsToCards = (
  albums: Array<IAlbum>,
  options?: IOptions
): Array<ICard> =>
  albums.map((album: IAlbum): ICard => mapAlbumToCard(album, options));

export const mapVinylsToCards = (
  vinyls: Array<IVinyl>,
  options?: IOptions
): Array<ICard> =>
  vinyls.map((vinyl: IVinyl): ICard => mapVinylToCard(vinyl, options));
