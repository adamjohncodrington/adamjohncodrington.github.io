import { VINYL_COLLECTION as DATA } from "data-raw";

export const ARTWORK: Array<IPhoto> = DATA.map(
  ({ photo }: IVinyl): IPhoto => photo
);
