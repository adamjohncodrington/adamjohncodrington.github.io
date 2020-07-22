import { VINYLS } from "@constants";
import {
  formatCountedListItems,
  splitVinylsIntoYears,
  sortVinyls
} from "utils";

const allVinyls: Array<IVinyl> = Object.values(VINYLS);

const wishList: Array<IVinyl> = allVinyls.filter(
  ({ purchased }: IVinyl): boolean => !purchased
);

const collection: Array<IVinyl> = allVinyls.filter(
  ({ purchased }: IVinyl): boolean => !!purchased
);

const signed: Array<IVinyl> = allVinyls.filter(
  ({ signed }: IVinyl): boolean => !!signed
);

const artists: Array<ICountedListItem> = collection.map(
  ({ musician: { name } }: IVinyl): ICountedListItem => ({
    text: name,
    pastCount: 0,
    futureCount: 0,
    countInfoIrrelevant: true
  })
);

export const FACTORY = {
  ARTISTS: formatCountedListItems({ countedListItems: artists }),
  COLLECTION: sortVinyls(collection),
  WISH_LIST: wishList,
  SIGNED: signed,
  VINYLS_BY_YEAR: splitVinylsIntoYears(collection)
};
