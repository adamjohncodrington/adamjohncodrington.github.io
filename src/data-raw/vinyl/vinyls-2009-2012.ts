import { PHOTOS } from "resources";
import { MUSICIANS } from "@constants";
import { COLORS } from "styles";

export const FLORENCE_LUNGS: IVinyl = {
  musician: MUSICIANS.FLORENCE_AND_THE_MACHINE,
  title: "Lungs",
  sides: 2,
  colors: [COLORS.BLACK],
  signed: false,
  inches: 12,
  photo: PHOTOS.ALBUMS.FLORENCE_LUNGS,
  appleMusicId: "lungs/1440982056",
  year: 2009
};

export const MARINA_ELECTRA_HEART: IVinyl = {
  musician: MUSICIANS.MARINA,
  title: "Electra Heart",
  photo: PHOTOS.ALBUMS.MARINA_ELECTRA_HEART,
  appleMusicId: "electra-heart/612448612",
  year: 2012,
  inches: 12,
  sides: 4,
  signed: false,
  colors: [COLORS.BLACK]
};

export const LANA_BORN_TO_DIE: IVinyl = {
  musician: MUSICIANS.LANA_DEL_REY,
  signed: false,
  colors: [COLORS.BLACK],
  sides: 4,
  inches: 12,
  title: "Born to Die",
  appleMusicId: "born-to-die/1440809572",
  year: 2012,
  photo: PHOTOS.ALBUMS.LANA_BORN_TO_DIE
};

export const LADY_GAGA_BORN_THIS_WAY: IVinyl = {
  musician: MUSICIANS.LADY_GAGA,
  photo: PHOTOS.ALBUMS.LADY_GAGA_BORN_THIS_WAY,
  title: "Born This Way",
  appleMusicId: "born-this-way-special-edition/1440857161",
  year: 2011,
  sides: 4,
  colors: [COLORS.BLACK],
  inches: 12,
  signed: false
};

export const LADY_GAGA_FAME_MONSTER: IVinyl = {
  musician: MUSICIANS.LADY_GAGA,
  photo: PHOTOS.ALBUMS.LADY_GAGA_FAME_MONSTER,
  title: "The Fame Monster",
  appleMusicId: "the-fame-monster/1440860294",
  year: 2009,
  sides: 2,
  colors: [COLORS.VINYL.PHOTO],
  inches: 12,
  signed: false
};
