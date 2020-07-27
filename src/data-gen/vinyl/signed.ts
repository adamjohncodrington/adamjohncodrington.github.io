import { VINYL as DATA } from "data";

export const SIGNED: Array<IVinyl> = DATA.COLLECTION.filter(
  ({ signed }: IVinyl): boolean => signed
);
