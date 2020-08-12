import { VINYL_COLLECTION as DATA } from "data-raw";

export const GIFTS: IVinyl[] = DATA.filter(
  ({ gift }: IVinyl): boolean => !!gift
);
