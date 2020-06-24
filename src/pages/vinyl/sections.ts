import { DATA } from "./data";

const { WISH_LIST, COLLECTION } = DATA;

export const sections: Array<IPageSection> = [
  {
    title: "collection",
    data: { vinylCards: COLLECTION },
    count: COLLECTION.length,
    initiallyExpanded: true
  },
  {
    title: "wish list",
    data: { vinylCards: WISH_LIST },
    count: WISH_LIST.length
  }
];
