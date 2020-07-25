import { VIDEOS as videos } from "resources";

export const VIDEOS: Array<IVideoCard> = Object.values(videos.GIGS).map(
  ({ musician: { name }, date, ...rest }: IGigVideo): IVideoCard => ({
    ...rest,
    title: name,
    dates: [date]
  })
);
