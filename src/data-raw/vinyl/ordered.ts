import { MUSICIANS, RETAILERS } from "@constants";
import { PHOTOS } from "resources";
import { COLORS } from "styles";

const { BLACK, CLEAR } = COLORS;
const { MUSICIAN_WEB_STORE, ROUGH_TRADE_WEST, MUSIC_MAGPIE } = RETAILERS;

export const BEN_HOWARD_EVERY_KINGDOM: IVinyl = {
  musician: MUSICIANS.BEN_HOWARD,
  photo: PHOTOS.ALBUM_ARTWORK.BEN_HOWARD_EVERY_KINGDOM,
  appleMusicId: "every-kingdom/1440804636",
  title: "Every Kingdom",
  arrived: false,
  colors: [BLACK],
  retailer: MUSICIAN_WEB_STORE,
  signed: false,
  inches: 12,
  costExcDelivery: 9.99,
  sides: 2,
  year: 2011
};

export const LANY_MALIBU_NIGHTS: IVinyl = {
  musician: MUSICIANS.LANY,
  title: "Malibu Nights",
  photo: PHOTOS.ALBUM_ARTWORK.LANY_MALIBU_NIGHTS,
  appleMusicId: "malibu-nights/1435482172",
  year: 2018,
  arrived: false,
  sides: 2,
  retailer: MUSIC_MAGPIE,
  costExcDelivery: 21.39,
  inches: 12,
  //TODO: VERIFY THAT IT IS CLEAR
  colors: [CLEAR],
  signed: false
};

export const CARIBOU_OUR_LOVE: IVinyl = {
  musician: MUSICIANS.CARIBOU,
  photo: PHOTOS.ALBUM_ARTWORK.CARIBOU_OUR_LOVE,
  appleMusicId: "our-love/1276611236",
  title: "Our Love",
  sides: 2,
  arrived: false,
  colors: [BLACK],
  signed: false,
  costExcDelivery: 12.99,
  retailer: ROUGH_TRADE_WEST,
  inches: 12,
  year: 2014
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
