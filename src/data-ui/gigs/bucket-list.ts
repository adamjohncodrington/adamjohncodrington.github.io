import { MUSICIANS } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { Musician } from "types";
import { getItemCounts } from "utils";

type MusicianCounted = Musician & I_PastFutureCounts;

const musiciansForBucketList = Object.values(MUSICIANS)
  .map(
    (musician: Musician): MusicianCounted => ({
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
    }: MusicianCounted): boolean =>
      pastCount === 0 &&
      futureCount === 0 &&
      !noLongerExists &&
      !excludeFromBucketList
  );

export const BUCKET_LIST: MiniCardProps[] = musiciansForBucketList.map(
  ({ name, favourite }: MusicianCounted): MiniCardProps => ({
    sort: [name],
    primaryText: name,
    favourite
  })
);
