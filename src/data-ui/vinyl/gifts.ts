import { VINYL_COLLECTION as DATA } from "data-raw";

export const GIFTS: Array<IVinyl> = DATA.filter(
  ({ gift }: IVinyl): boolean => !!gift
);
