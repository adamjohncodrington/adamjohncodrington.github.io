import { MUSICIANS } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

interface IMusicianCounted extends IMusician, IPastAndFutureCounts {}

const musiciansForBucketList = Object.values(MUSICIANS)
  .map(
    (musician: IMusician): IMusicianCounted => ({
      ...musician,
      ...getItemCounts({ item: { musician }, data: { gigs: DATA.ALL } })
    })
  )
  .filter(
    ({ pastCount, futureCount, noLongerExists }: IMusicianCounted): boolean =>
      pastCount === 0 && futureCount === 0 && !noLongerExists
  );

export const BUCKET_LIST_ITEMS: Array<ICountedListItem> = musiciansForBucketList.map(
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
