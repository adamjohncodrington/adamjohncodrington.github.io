export const moveTheSuffixToPrefix = (string: string): string => {
  const THE_SUFFIX = ", The";

  if (string.slice(-5) === THE_SUFFIX)
    return `The ${string.substring(0, string.length - THE_SUFFIX.length)}`;

  return string;
};
