import { MUSICIANS } from "@constants";
import { GIGS_AND_FESTIVALS as DATA } from "data";
import { getItemCounts } from "utils";

interface IMusicianCounted extends IMusician, I_PastFutureCounts {}

const musiciansForBucketList = Object.values(MUSICIANS)
  .map(
    (musician: IMusician): IMusicianCounted => ({
      ...musician,
      ...getItemCounts({ item: { musician }, data: { gigsAndFestivals: DATA } })
    })
  )
  .filter(
    ({
      pastCount,
      futureCount,
      noLongerExists,
      excludeFromBucketList
    }: IMusicianCounted): boolean =>
      pastCount === 0 &&
      futureCount === 0 &&
      !noLongerExists &&
      !excludeFromBucketList
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
