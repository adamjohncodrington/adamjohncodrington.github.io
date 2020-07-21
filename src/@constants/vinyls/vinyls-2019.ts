import { PHOTOS } from "resources";
import * as MUSICIANS from "../musicians";

export const ARIANA_GRANDE_TUN: IVinyl = {
  musician: MUSICIANS.ARIANA_GRANDE,
  title: "thank u, next",
  artwork: PHOTOS.ALBUMS.ArianaGrande_TUN,
  appleMusicId: "thank-u-next/1450330588",
  year: 2019
};

export const BANKS_III: IVinyl = {
  musician: MUSICIANS.BANKS,
  appleMusicId: "iii/1467547466",
  title: "III",
  artwork: PHOTOS.ALBUMS.BANKS_III,
  year: 2019,
  purchased: true,
  signed: true
};

export const LEON_LEON: IVinyl = {
  musician: MUSICIANS.LEON,
  title: MUSICIANS.LEON.name,
  appleMusicId: "l%C3%A9on/1450257286",
  year: 2019,
  artwork: PHOTOS.ALBUMS.LEON_LEON,
  purchased: true
};

export const FKA_TWIGS_MAGDALENE: IVinyl = {
  musician: MUSICIANS.FKA_TWIGS,
  title: "Magdalene",
  appleMusicId: "magdalene/1477652618",
  year: 2019,
  artwork: PHOTOS.ALBUMS.FKA_TWIGS_MAGDALENE,
  purchased: true
};

export const CAROLINE_POLACHEK_PANG: IVinyl = {
  musician: MUSICIANS.CAROLINE_POLACHEK,
  title: "Pang",
  artwork: PHOTOS.ALBUMS.CAROLINE_POLACHEK_PANG,
  appleMusicId: "pang/1482421639",
  year: 2019,
  purchased: true
};

export const KIM_PETRAS_CLARITY: IVinyl = {
  musician: MUSICIANS.KIM_PETRAS,
  title: "Clarity",
  artwork: PHOTOS.ALBUMS.KIM_PETRAS_CLARITY,
  year: 2019,
  appleMusicId: "clarity/1469298192",
  purchased: true
};
