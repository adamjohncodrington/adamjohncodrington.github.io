import * as collection from "./collection";
import * as ordered from "./ordered";
import * as wish_list from "./wish-list";

export const VINYL_COLLECTION: Array<IVinyl> = Object.values(collection);
export const VINYL_ORDERED: Array<IVinyl> = Object.values(ordered);
export const VINYL_PURCHASED: Array<IVinyl> = Object.values({
  ...collection,
  ...ordered
});
export const VINYL_WISH_LIST: Array<IAlbum> = Object.values(wish_list);
