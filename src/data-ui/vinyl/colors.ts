import { VINYL_COLLECTION as DATA } from "data-raw";

export const COLORS: Array<IVinyl> = DATA.filter(
  ({ color }: IVinyl): boolean => color !== "black"
);
