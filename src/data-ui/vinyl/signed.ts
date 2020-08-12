import { VINYL_PURCHASED as DATA } from "data-raw";

export const SIGNED: IVinyl[] = DATA.filter(
  ({ signed }: IVinyl): boolean => signed
);
