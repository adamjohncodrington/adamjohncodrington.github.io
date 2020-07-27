import { VINYL_COLLECTION as DATA } from "data-raw";

export const SIGNED: Array<IVinyl> = DATA.filter(
  ({ signed }: IVinyl): boolean => signed
);
