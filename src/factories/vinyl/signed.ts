import { VINYL as DATA } from "data";

export const SIGNED: Array<IVinylPostPurchase> = DATA.COLLECTION.filter(
  ({ signed }: IVinylPostPurchase): boolean => signed
);
