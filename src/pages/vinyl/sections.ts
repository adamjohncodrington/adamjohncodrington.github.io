import { DATA } from "./data";

const SECTION_COLLECTION: IPageSection = {
  title: "collection",
  data: { vinylCards: DATA.COLLECTION },
  count: DATA.COLLECTION.length,
  onlyHeaderClickable: true,
  autoExpandAlways: true
};

const SECTION_WISHLIST: IPageSection = {
  title: "wish list",
  data: { vinylCards: DATA.WISH_LIST },
  count: DATA.WISH_LIST.length,
  onlyHeaderClickable: true,
  autoExpandIf2Columns: true
};

export const sections: Array<IPageSection> = [
  SECTION_COLLECTION,
  SECTION_WISHLIST
];
