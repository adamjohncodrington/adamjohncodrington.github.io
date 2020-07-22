import { MUSICIANS } from "@constants";
import { GIGS as DATA } from "data";
import { getItemCounts } from "utils";

interface IMusicianCounted extends IMusician, I_PastFutureCounts {}

const musiciansForBucketList = Object.values(MUSICIANS)
  .map(
    (musician: IMusician): IMusicianCounted => ({
      ...musician,
      ...getItemCounts({ item: { musician }, data: { gigs: DATA } })
    })
  )
  .filter(
    ({ pastCount, futureCount, noLongerExists }: IMusicianCounted): boolean =>
      pastCount === 0 && futureCount === 0 && !noLongerExists
  );

export const BUCKET_LIST: Array<ICountedListItem> = musiciansForBucketList.map(
  ({
    name,
    pastCount,
    futureCount,
    favourite
  }: IMusicianCounted): ICountedListItem => ({
    text: name,
    favourite,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);
