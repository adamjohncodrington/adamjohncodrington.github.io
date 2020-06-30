import { musiciansCounted } from "./musicians";

const musiciansForBucketList = musiciansCounted.filter(
  ({ pastCount, futureCount, noLongerExists }: IMusicianCounted): boolean =>
    pastCount === 0 && futureCount === 0 && !noLongerExists
);

export const BUCKET_LIST_ITEMS: Array<ICountedListItem> = musiciansForBucketList.map(
  ({ name, pastCount, futureCount }: IMusicianCounted): ICountedListItem => ({
    text: name,
    pastCount,
    futureCount,
    countInfoIrrelevant: true
  })
);
