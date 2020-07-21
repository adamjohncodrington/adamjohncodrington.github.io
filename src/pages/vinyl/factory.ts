import { VINYLS } from "@constants";
import { moveTheSuffixToPrefix, formatCountedListItems } from "utils";

const allVinylsSorted: Array<IVinyl> = Object.values(
  VINYLS
).sort((a: IVinyl, b: IVinyl): number =>
  a.year < b.year
    ? 1
    : a.year === b.year
    ? a.musician < b.musician
      ? -1
      : 1
    : -1
);

const desiredVinyls: Array<IVinyl> = allVinylsSorted.filter(
  ({ purchased }: IVinyl): boolean => !purchased
);

const purchasedVinyls: Array<IVinyl> = allVinylsSorted.filter(
  ({ purchased }: IVinyl): boolean => !!purchased
);

const signedVinyls: Array<IVinyl> = allVinylsSorted.filter(
  ({ signed }: IVinyl): boolean => !!signed
);

const artists: Array<ICountedListItem> = purchasedVinyls.map(
  ({ musician: { name } }: IVinyl): ICountedListItem => ({
    text: moveTheSuffixToPrefix(name),
    pastCount: 0,
    futureCount: 0,
    countInfoIrrelevant: true
  })
);

const ARTISTS: Array<ICountedListItem> = formatCountedListItems({
  countedListItems: artists
});

export const FACTORY = {
  ARTISTS,
  WISH_LIST: desiredVinyls,
  COLLECTION: purchasedVinyls,
  SIGNED: signedVinyls
};
