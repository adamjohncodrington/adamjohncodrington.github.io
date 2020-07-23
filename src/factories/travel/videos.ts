import { VIDEOS as videos } from "resources";
import { arrayToString } from "utils";

export const VIDEOS: Array<IVideoCard> = Object.values(videos.TRAVEL).map(
  ({ locations, dates, ...rest }: ITravelVideo): IVideoCard => {
    const locationNames: Array<string> = locations.map(
      ({ name }: ILocation): string => name
    );

    console.log(locationNames);

    return {
      ...rest,
      title: arrayToString(locationNames),
      // title: locationNames[0],
      // title: "Travel Video Title",
      // title: locations[0].name + locations[1].name,
      // title: arrayToString(locations.map(({ name }: ILocation): string => name)),
      dates: [dates.start, dates.end]
    };
  }
);
