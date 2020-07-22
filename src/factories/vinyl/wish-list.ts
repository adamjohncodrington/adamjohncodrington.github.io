import { VINYLS as DATA } from "data";

export const WISH_LIST: Array<IVinyl> = DATA.filter(
  ({ purchased }: IVinyl): boolean => !purchased
);
