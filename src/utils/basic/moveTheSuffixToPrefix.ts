export const moveTheSuffixToPrefix = (string: string): string => {
  const theSuffix = ", The";

  if (string.slice(-theSuffix.length) === theSuffix)
    return `The ${string.substring(0, string.length - theSuffix.length)}`;

  return string;
};
