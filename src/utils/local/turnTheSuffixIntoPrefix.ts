export const turnTheSuffixIntoPrefix = (word: string): string => {
  const THE_SUFFIX = ", The";

  if (word.slice(-5) === THE_SUFFIX)
    return `The ${word.substring(0, word.length - THE_SUFFIX.length)}`;

  return word;
};
