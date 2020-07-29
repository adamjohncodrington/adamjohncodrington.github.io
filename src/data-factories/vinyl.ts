import { APPLE_MUSIC_URL_PREFIX } from "config";

import { getMusicianStageNameAtTime, moveTheSuffixToPrefix } from "utils";

interface IMapAlbumsToCardsOptions {
  hideYear?: boolean;
}

export const mapAlbumsToCards = (
  albums: Array<IAlbum>,
  options?: IMapAlbumsToCardsOptions
): Array<ICard> => {
  const hideYear: boolean = !!(options && options.hideYear);
  const mapAlbumToCard = ({
    title,
    musician,
    year,
    artwork,
    appleMusicId
  }: IAlbum): ICard => ({
    title,
    year,
    sort: [year],
    subtitle: moveTheSuffixToPrefix(
      getMusicianStageNameAtTime({ musician, year })
    ),
    body: hideYear ? undefined : year.toString(),
    headerPhoto: { ...artwork, href: APPLE_MUSIC_URL_PREFIX + appleMusicId }
  });
  return albums.map((album: IAlbum): ICard => mapAlbumToCard(album));
};
