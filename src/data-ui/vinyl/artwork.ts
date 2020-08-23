import { VINYL_PURCHASED as DATA } from "data-raw";

import { mapAlbumToPhoto } from "./utils";

export const ARTWORK: IPhoto[] = DATA.map(
  (vinyl: IVinyl): IPhoto => mapAlbumToPhoto(vinyl)
);
