import { VINYLS as DATA } from "data";

export const SIGNED: Array<IVinyl> = DATA.filter(
  ({ signed }: IVinyl): boolean => !!signed
);
