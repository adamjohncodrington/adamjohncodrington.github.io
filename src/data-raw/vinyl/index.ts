import { INCLUDE_VINYL_WISH_LIST_BACKLOG } from "config";

import * as purchased from "./purchased";
import * as wish_list from "./wish-list";
import * as wish_list_backlog from "./wish-list-backlog";

export const VINYL_PURCHASED: IVinyl[] = Object.values(purchased);
export const VINYL_COLLECTION: IVinyl[] = VINYL_PURCHASED.filter(
  ({ arrived }: IVinyl): boolean => arrived
);
export const VINYL_ORDERED: IVinyl[] = VINYL_PURCHASED.filter(
  ({ arrived }: IVinyl): boolean => !arrived
);
export const VINYL_WISH_LIST: IAlbum[] = Object.values(
  INCLUDE_VINYL_WISH_LIST_BACKLOG
    ? { ...wish_list, ...wish_list_backlog }
    : wish_list
);
