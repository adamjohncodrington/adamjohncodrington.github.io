import { MUSICIANS, RETAILERS } from "@constants";
import { PHOTOS } from "resources";
import { COLORS } from "styles";

const { BLACK } = COLORS;
const { MUSICIAN_WEB_STORE, FAT_POSSUM } = RETAILERS;

export const LISSIE_CATCHING_A_TIGER: IVinyl = {
  musician: MUSICIANS.LISSIE,
  photo: PHOTOS.ALBUM_ARTWORK.LISSIE_CATCHING_A_TIGER,
  appleMusicId: "catching-a-tiger/372594767",
  title: "Catching a Tiger",
  year: 2010,
  sides: 2,
  inches: 12,
  signed: false,
  colors: [BLACK],
  arrived: false,
  costExcDelivery: 12.99,
  retailer: FAT_POSSUM
};

export const TAYLOR_SWIFT_FOLKLORE: IVinyl = {
  musician: MUSICIANS.TAYLOR_SWIFT,
  title: "folklore",
  costExcDelivery: 26.99,
  retailer: MUSICIAN_WEB_STORE,
  appleMusicId: "folklore/1524801260",
  year: 2020,
  arrived: false,
  colors: [COLORS.VINYL.TAYLOR_SWIFT_FOLKLORE],
  inches: 12,
  sides: 4,
  photo: PHOTOS.ALBUM_ARTWORK.TAYLOR_SWIFT_FOLKLORE,
  signed: false
};

export const TROYE_SIVAN_IN_A_DREAM: IVinyl = {
  musician: MUSICIANS.TROYE_SIVAN,
  title: "In a Dream",
  photo: PHOTOS.ALBUM_ARTWORK.TROYE_SIVAN_IN_A_DREAM,
  appleMusicId: "in-a-dream-ep/1523003841",
  year: 2020,
  costExcDelivery: 21.99,
  retailer: MUSICIAN_WEB_STORE,
  arrived: false,
  colors: COLORS.VINYL.TROYE_SIVAN_IN_A_DREAM,
  sides: 2,
  signed: true,
  //TODO: verify that it is 10" not 12"
  inches: 10
};

export const CHARLI_XCX_HOW_IM_FEELING_NOW: IVinyl = {
  musician: MUSICIANS.CHARLI_XCX,
  title: "how i'm feeling now",
  retailer: MUSICIAN_WEB_STORE,
  year: 2020,
  costExcDelivery: 18.99,
  signed: false,
  inches: 12,
  sides: 2,
  arrived: false,
  colors: [COLORS.VINYL.CHARLI_XCX_HOW_IM_FEELING_NOW],
  photo: PHOTOS.ALBUM_ARTWORK.CHARLI_XCX_HOW_IM_FEELING_NOW,
  appleMusicId: "how-im-feeling-now/1513162098"
};
