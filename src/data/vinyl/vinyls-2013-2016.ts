import { PHOTOS } from "resources";
import { MUSICIANS } from "@constants";

export const LORDE_PURE_HEROINE: IVinylPostPurchase = {
  musician: MUSICIANS.LORDE,
  title: "Pure Heroine",
  appleMusicId: "pure-heroine/1440818584",
  year: 2013,
  signed: false,
  sides: 2,
  inches: 12,
  color: "black",
  artwork: PHOTOS.ALBUMS.LORDE_PURE_HEROINE
};

export const TAYLOR_SWIFT_1989: IVinylPostPurchase = {
  musician: MUSICIANS.TAYLOR_SWIFT,
  title: "1989",
  artwork: PHOTOS.ALBUMS.TAYLOR_SWIFT_1989,
  year: 2014,
  sides: 4,
  color: "black",
  inches: 12,
  signed: false,
  appleMusicId: "1989/1445888258"
};

export const GRIMES_ART_ANGELS: IVinylPostPurchase = {
  musician: MUSICIANS.GRIMES,
  title: "Art Angels",
  artwork: PHOTOS.ALBUMS.GRIMES_ART_ANGELS,
  appleMusicId: "art-angels/1051022913",
  year: 2015,
  inches: 12,
  sides: 2,
  color: "black",
  signed: false
};

export const SUFJAN_STEVENS_CARRIE_LOWELL: IVinylPostPurchase = {
  musician: MUSICIANS.SUFJAN_STEVENS,
  artwork: PHOTOS.ALBUMS.SUFJAN_STEVENS_CARRIE_LOWELL,
  appleMusicId: "carrie-lowell/955572616",
  title: "Carrie & Lowell",
  signed: false,
  color: "black",
  sides: 2,
  inches: 12,
  year: 2015
};
