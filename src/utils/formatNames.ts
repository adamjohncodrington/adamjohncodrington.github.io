import { moveTheSuffixToPrefix } from "./moveTheSuffixToPrefix";

export const formatNames = (inputData: any): string => {
  // if (!inputData) return null;

  if (!inputData) {
    // console.log(inputData);
    return "";
  }

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
