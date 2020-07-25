import { VINYL as DATA } from "data";

export const MUSICIANS: Array<IBasicListItem> = DATA.COLLECTION.map(
  ({ musician: { name } }: IVinyl): IBasicListItem => ({
    text: name,
    pastCount: 0,
    futureCount: 0,
    countInfoIrrelevant: true
  })
);
