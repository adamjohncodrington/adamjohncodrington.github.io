import { PHOTOS } from "resources";
import { MUSICIANS } from "@constants";

export const HAIM_WIMPIII: IVinyl = {
  musician: MUSICIANS.HAIM,
  title: "Women In Music Pt. III",
  appleMusicId: "women-in-music-pt-iii/1500020581",
  year: 2020,
  color: "red",
  inches: 12,
  sides: 4,
  artwork: PHOTOS.ALBUMS.HAIM_WIMPIII,
  signed: true
};

export const TAYLOR_SWIFT_FOLKLORE: IVinyl = {
  musician: MUSICIANS.TAYLOR_SWIFT,
  title: "folklore",
  appleMusicId: "folklore/1524801260",
  year: 2020,
  color: "teal",
  inches: 12,
  sides: 4,
  artwork: PHOTOS.ALBUMS.TAYLOR_SWIFT_FOLKLORE,
  signed: false
};

export const TROYE_SIVAN_IN_A_DREAM: IVinyl = {
  musician: MUSICIANS.TROYE_SIVAN,
  title: "In a Dream",
  artwork: PHOTOS.ALBUMS.TROYE_SIVAN_IN_A_DREAM,
  appleMusicId: "in-a-dream-ep/1523003841",
  year: 2020,
  color: "blue-mist",
  sides: 2,
  signed: true,
  //TODO: verify that it is 10" not 12"
  inches: 10
};
