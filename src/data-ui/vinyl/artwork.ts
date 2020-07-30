import { VINYL_COLLECTION as DATA } from "data-raw";
import { APPLE_MUSIC_URL_PREFIX } from "config";

export const ARTWORK: Array<IPhoto> = DATA.map(
  ({ photo, appleMusicId }: IVinyl): IPhoto => ({
    ...photo,
    href: APPLE_MUSIC_URL_PREFIX + appleMusicId
  })
);
