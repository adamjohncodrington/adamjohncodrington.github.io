import { VIDEOS as videos } from "resources";

export const VIDEOS: Array<IVideoCard> = Object.values(videos.GIGS).map(
  ({ musician: { name }, date, ...video }: IGigVideo): IVideoCard => ({
    video,
    title: name,
    dates: [date]
  })
);
