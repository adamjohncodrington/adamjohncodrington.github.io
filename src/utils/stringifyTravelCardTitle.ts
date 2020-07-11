import { arrayToString } from "./basic";

export const stringifyTravelCardTitle = (title: Array<ILocation>) =>
  arrayToString({
    stringArray: title.map(({ name }: ILocation) => name),
    useAmpersandsForPair: true
  });
