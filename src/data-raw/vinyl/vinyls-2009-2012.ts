import { PHOTOS } from "resources";
import { MUSICIANS } from "@constants";

export const FLORENCE_LUNGS: IVinyl = {
  musician: MUSICIANS.FLORENCE_AND_THE_MACHINE,
  title: "Lungs",
  sides: 2,
  color: "black",
  signed: false,
  inches: 12,
  artwork: PHOTOS.ALBUMS.FLORENCE_LUNGS,
  appleMusicId: "lungs/1440982056",
  year: 2009
};

export const MARINA_ELECTRA_HEART: IVinyl = {
  musician: MUSICIANS.MARINA,
  title: "Electra Heart",
  artwork: PHOTOS.ALBUMS.MARINA_ELECTRA_HEART,
  appleMusicId: "electra-heart/612448612",
  year: 2012,
  inches: 12,
  sides: 4,
  signed: false,
  color: "black"
};

export const LANA_BORN_TO_DIE: IVinyl = {
  musician: MUSICIANS.LANA_DEL_REY,
  signed: false,
  color: "black",
  sides: 4,
  inches: 12,
  title: "Born to Die",
  appleMusicId: "born-to-die/1440809572",
  year: 2012,
  artwork: PHOTOS.ALBUMS.LANA_BORN_TO_DIE
};
