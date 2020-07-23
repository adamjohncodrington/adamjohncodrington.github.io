import { VIDEOS as videos } from "resources";

export const VIDEOS: Array<IVideoCard> = Object.values(videos.GIGS).map(
  ({ musician, date, ...rest }: IGigVideo): IVideoCard => ({
    ...rest,
    title: musician.name,
    dates: [date]
  })
);
