import { moveTheSuffixToPrefix } from "./moveTheSuffixToPrefix";

interface IArrayToStringOptions {
  useAmpersandsForPair?: boolean;
}

export const arrayToString = (
  stringArray: string[],
  options?: IArrayToStringOptions
): string => {
  const useAmpersandsForPair: boolean = !!(
    options && options.useAmpersandsForPair
  );

  stringArray.map((item: string): string => moveTheSuffixToPrefix(item));

  if (useAmpersandsForPair && stringArray.length === 2)
    return `${stringArray[0]} & ${stringArray[1]}`;

  return stringArray.join(", ");
};
