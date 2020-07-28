import { SONGS as songs } from "@constants";

export const SONGS: Array<IMiniCard> = Object.values(songs).map(
  ({ musician, title, year }: ISong): IMiniCard => ({
    text: `${musician.name} - ${title}`,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
