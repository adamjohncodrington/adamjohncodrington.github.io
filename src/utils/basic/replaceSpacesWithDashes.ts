export const replaceSpacesWithDashes = (stringWithSpaces: string): string =>
  stringWithSpaces.replace(/\s+/g, "-").toLowerCase();
