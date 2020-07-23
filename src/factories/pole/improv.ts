import { VIDEOS } from "resources";

const poleVideos: Array<IPoleVideo> = Object.values(VIDEOS.POLE);

export const IMPROV: Array<IVideoCard> = poleVideos
  .filter(({ category }: IPoleVideo): boolean => category === "improv")
  .map(
    ({ date, song: { musician, title }, ...rest }: IPoleVideo): IVideoCard => ({
      ...rest,
      title: musician.name,
      subtitle: title,
      dates: [date]
    })
  );
