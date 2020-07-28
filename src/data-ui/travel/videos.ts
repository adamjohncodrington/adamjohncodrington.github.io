import { VIDEOS as videos } from "resources";
import { arrayToString } from "utils";

export const VIDEOS: Array<IVideoCard> = Object.values(videos.TRAVEL).map(
  ({ locations, dates, ...video }: ITravelVideo): IVideoCard => ({
    video,
    title: arrayToString(
      locations.map(
        ({ name, shortName }: ILocation): string => shortName || name
      ),
      { useAmpersandsForPair: true }
    ),
    dates: [dates.start, dates.end]
  })
);
