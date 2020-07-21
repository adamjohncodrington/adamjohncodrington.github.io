import { VINYLS } from "@constants";
import { moveTheSuffixToPrefix, formatCountedListItems } from "utils";

const sortedVinyls: Array<IVinyl> = Object.values(
  VINYLS
).sort((a: IVinyl, b: IVinyl): number =>
  a && b
    ? a.year < b.year
      ? 1
      : a.year === b.year
      ? a.musician < b.musician
        ? -1
        : 1
      : -1
    : 0
);

const WISH_LIST: Array<IVinyl> = sortedVinyls.filter(
  (vinyl: IVinyl): boolean => !vinyl.purchased
);

const COLLECTION: Array<IVinyl> = sortedVinyls.filter(
  (vinyl: IVinyl): boolean => !!vinyl.purchased
);

const SIGNED: Array<IVinyl> = sortedVinyls.filter(
  (vinyl: IVinyl): boolean => !!vinyl.signed
);

const artists: Array<ICountedListItem> = COLLECTION.map(
  ({ musician }: IVinyl): ICountedListItem => ({
    text: moveTheSuffixToPrefix(musician.name),
    pastCount: 0,
    futureCount: 0,
    countInfoIrrelevant: true
  })
);

const ARTISTS: Array<ICountedListItem> = formatCountedListItems({
  countedListItems: artists
});

export const FACTORY = { ARTISTS, WISH_LIST, COLLECTION, SIGNED };
