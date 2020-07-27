import { VINYL as DATA } from "data";

export const MUSICIANS: Array<IMiniCard> = DATA.COLLECTION.map(
  ({ musician: { name } }: IVinyl): IMiniCard => ({
    text: name,
    pastCount: 0,
    futureCount: 0,
    countInfoIrrelevant: true
  })
);
