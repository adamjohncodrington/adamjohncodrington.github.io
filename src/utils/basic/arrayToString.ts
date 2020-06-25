import { moveTheSuffixToPrefix } from "./moveTheSuffixToPrefix";

interface IArrayToString {
  stringArray: Array<string>;
  useAmpersandsForPair?: boolean;
}

export const arrayToString = ({
  stringArray,
  useAmpersandsForPair
}: IArrayToString): string => {
  stringArray.map((item: string): string => moveTheSuffixToPrefix(item));

  if (useAmpersandsForPair && stringArray.length === 2)
    return `${stringArray[0]} & ${stringArray[1]}`;

  return stringArray.join(", ");
};
