import * as PHOTOS_RECIPES_OBJECT from "./recipe-photos";
import * as PHOTOS_TRAVEL_OBJECT from "./travel-photos";

export const PHOTOS_RECIPES_ARRAY: Array<IPhoto> = Object.values(
  PHOTOS_RECIPES_OBJECT
);

export const PHOTOS_TRAVEL_ARRAY: Array<IPhoto> = Object.values(
  PHOTOS_TRAVEL_OBJECT
).flat();
