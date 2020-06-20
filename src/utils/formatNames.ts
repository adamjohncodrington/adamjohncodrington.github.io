import { moveTheSuffixToPrefix } from "./moveTheSuffixToPrefix";

export const formatNames = (inputData: any | Array<any>): string | null => {
  if (!inputData) return null;

  if (!Array.isArray(inputData))
    return inputData.name && moveTheSuffixToPrefix(inputData.name);

  const array = inputData.map(
    item => item.name && moveTheSuffixToPrefix(item.name)
  );

  let outputString: string = "";

  array.forEach(
    (name: string, index: number) =>
      (outputString += index === array.length - 1 ? name : `${name}, `)
  );

  return outputString;
};
