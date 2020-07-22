import { VINYLS as DATA } from "data";

export const COLLECTION: Array<IVinyl> = DATA.filter(
  ({ purchased }: IVinyl): boolean => !!purchased
);
