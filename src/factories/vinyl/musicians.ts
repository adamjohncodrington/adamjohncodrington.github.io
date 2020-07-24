import { VINYL as DATA } from "data";

export const MUSICIANS: Array<ICountedListItem> = DATA.COLLECTION.map(
  ({ musician: { name } }: IVinylPostPurchase): ICountedListItem => ({
    text: name,
    pastCount: 0,
    futureCount: 0,
    countInfoIrrelevant: true
  })
);
