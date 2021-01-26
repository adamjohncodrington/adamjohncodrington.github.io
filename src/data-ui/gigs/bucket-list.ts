import { MUSICIANS } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { getItemCounts } from "utils";

interface IMusicianCounted extends Musician, I_PastFutureCounts {}

const musiciansForBucketList = Object.values(MUSICIANS)
  .map(
    (musician: Musician): IMusicianCounted => ({
      ...musician,
      ...getItemCounts({ item: { musician }, data: { musicEvents: DATA } })
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

export const BUCKET_LIST: MiniCardProps[] = musiciansForBucketList.map(
  ({ name, favourite }: IMusicianCounted): MiniCardProps => ({
    sort: [name],
    primaryText: name,
    favourite
  })
);
