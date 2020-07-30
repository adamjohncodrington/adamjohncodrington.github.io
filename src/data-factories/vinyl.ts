import { APPLE_MUSIC_URL_PREFIX } from "config";

import { getMusicianStageNameAtTime } from "utils";

interface IOptions {
  hideYear?: boolean;
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

export const mapAlbumsToCards = (
  albums: Array<IAlbum>,
  options?: IOptions
): Array<ICard> =>
  albums.map((album: IAlbum): ICard => mapAlbumToCard(album, options));
