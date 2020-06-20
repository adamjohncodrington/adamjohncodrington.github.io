import { turnTheSuffixIntoPrefix } from "./turnTheSuffixIntoPrefix";

export const formatData = (inputData: any | Array<any>): string | null => {
  if (!inputData) return null;

  if (!Array.isArray(inputData))
    return inputData.name && turnTheSuffixIntoPrefix(inputData.name);

  const array = inputData.map(
    item => item.name && turnTheSuffixIntoPrefix(item.name)
  );

  if (array.length === 2) return array[0] + " & " + array[1];
  if (array.length === 3) return array[0] + ", " + array[1] + " & " + array[2];

  let outputString: string = "";

  for (let i = 0; i < array.length; i++) {
    outputString += i === array.length - 1 ? array[i] : `${array[i]}, `;
  }

  return outputString;
};
