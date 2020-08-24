import * as purchased from "./purchased";
import * as wish_list from "./wish-list";

export const VINYL_PURCHASED: IVinyl[] = Object.values(purchased);
export const VINYL_COLLECTION: IVinyl[] = VINYL_PURCHASED.filter(
  ({ arrived }: IVinyl): boolean => arrived
);
export const VINYL_ORDERED: IVinyl[] = VINYL_PURCHASED.filter(
  ({ arrived }: IVinyl): boolean => !arrived
);
export const VINYL_WISH_LIST: IAlbum[] = Object.values(wish_list);
