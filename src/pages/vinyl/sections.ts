import { FACTORY } from "./factory";

const SECTION_COLLECTION: IPageSection = {
  title: "collection",
  data: { vinylCards: FACTORY.COLLECTION },
  count: FACTORY.COLLECTION.length,
  autoExpandAlways: true,
  staticIf2Columns: true
};

const SECTION_WISHLIST: IPageSection = {
  title: "wish list",
  data: { vinylCards: FACTORY.WISH_LIST },
  count: FACTORY.WISH_LIST.length,
  autoExpandIf2Columns: true,
  staticIf2Columns: true
};

export const sections: Array<IPageSection> = [
  SECTION_COLLECTION,
  SECTION_WISHLIST
];
