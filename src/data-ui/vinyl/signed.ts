import { VINYL_PURCHASED as DATA } from "data-raw";

export const SIGNED: Array<IVinyl> = DATA.filter(
  ({ signed }: IVinyl): boolean => signed
);
