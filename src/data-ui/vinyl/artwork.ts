import { VINYL_COLLECTION as DATA } from "data-raw";

import { mapAlbumToPhoto } from "./utils";

export const ARTWORK: IPhoto[] = DATA.map(
  (vinyl: Vinyl): IPhoto => mapAlbumToPhoto(vinyl)
);
