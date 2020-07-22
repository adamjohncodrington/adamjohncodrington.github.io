import { MUSICIANS } from "@constants";
import { getItemCounts } from "utils";

import * as DATA from "../data";

interface IMusicianCounted extends IMusician, I_PastFutureCounts {}

const musiciansForBucketList = Object.values(MUSICIANS)
  .map(
    (musician: IMusician): IMusicianCounted => ({
      ...musician,
      ...getItemCounts({ item: { musician }, data: { gigs: DATA.ARRAY } })
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
