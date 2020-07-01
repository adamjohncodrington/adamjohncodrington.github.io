export const moveTheSuffixToPrefix = (string: string): string => {
  const theSuffix = ", The";

  if (string.slice(-5) === theSuffix)
    return `The ${string.substring(0, string.length - theSuffix.length)}`;

  return string;
};
