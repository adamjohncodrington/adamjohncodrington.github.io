import { COLLECTION } from "./collection";

export const ARTISTS: Array<ICountedListItem> = COLLECTION.map(
  ({ musician: { name } }: IVinyl): ICountedListItem => ({
    text: name,
    pastCount: 0,
    futureCount: 0,
    countInfoIrrelevant: true
  })
);
