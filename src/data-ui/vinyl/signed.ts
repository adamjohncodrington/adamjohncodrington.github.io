import { VINYL as DATA } from "data-raw";

export const SIGNED: Array<IVinyl> = DATA.COLLECTION.filter(
  ({ signed }: IVinyl): boolean => signed
);
