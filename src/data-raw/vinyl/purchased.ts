import { MUSICIANS, RETAILERS, FRIENDS } from "@constants";
import { PHOTOS } from "resources";
import { COLORS } from "styles";

const { BLACK, CLEAR } = COLORS;
const {
  NORMAN_ONLINE,
  JUNO_ONLINE,
  HIVE,
  MUSIC_MAGPIE,
  AMAZON,
  EBAY,
  RECORDSTORE_ONLINE,
  MUSICIAN_WEB_STORE,
  ROUGH_TRADE_EAST,
  ROUGH_TRADE_WEST,
  ROUGH_TRADE_NOTTINGHAM,
  FAT_POSSUM
} = RETAILERS;

export const CARLY_RAE_JEPSEN_EMOTION: IVinyl = {
  musician: MUSICIANS.CARLY_RAE_JEPSEN,
  photo: PHOTOS.ALBUM_ARTWORK.CARLY_RAE_JEPSEN_EMOTION,
  appleMusicId: "e-mo-tion/1442688656",
  title: "E•MO•TION",
  year: 2015,
  sides: 2,
  inches: 12,
  signed: true,
  colors: [COLORS.VINYL.CARLY_RAE_JEPSEN_EMOTION_PINK],
  arrived: false,
  costExcDelivery: 19.99,
  retailer: MUSICIAN_WEB_STORE
};

export const LISSIE_CATCHING_A_TIGER: IVinyl = {
  musician: MUSICIANS.LISSIE,
  photo: PHOTOS.ALBUM_ARTWORK.LISSIE_CATCHING_A_TIGER,
  appleMusicId: "catching-a-tiger/1517705755",
  title: "Catching a Tiger",
  year: 2010,
  sides: 2,
  inches: 12,
  signed: false,
  colors: [BLACK],
  arrived: true,
  costExcDelivery: 12.99,
  retailer: FAT_POSSUM
};

export const TAYLOR_SWIFT_FOLKLORE: IVinyl = {
  musician: MUSICIANS.TAYLOR_SWIFT,
  title: "folklore",
  costExcDelivery: 26.99,
  retailer: MUSICIAN_WEB_STORE,
  appleMusicId: "folklore-deluxe-version/1528112358",
  year: 2020,
  arrived: false,
  colors: [COLORS.VINYL.TAYLOR_SWIFT_FOLKLORE_TEAL],
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
  colors: COLORS.VINYL.TROYE_SIVAN_IN_A_DREAM_BLUE_MIST,
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
  colors: [COLORS.VINYL.CHARLI_XCX_HOW_IM_FEELING_NOW_ORANGE],
  photo: PHOTOS.ALBUM_ARTWORK.CHARLI_XCX_HOW_IM_FEELING_NOW,
  appleMusicId: "how-im-feeling-now/1513162098"
};

export const CARIBOU_OUR_LOVE: IVinyl = {
  musician: MUSICIANS.CARIBOU,
  photo: PHOTOS.ALBUM_ARTWORK.CARIBOU_OUR_LOVE,
  appleMusicId: "our-love/1276611236",
  title: "Our Love",
  sides: 2,
  arrived: true,
  colors: [BLACK],
  signed: false,
  costExcDelivery: 12.99,
  retailer: ROUGH_TRADE_WEST,
  inches: 12,
  year: 2014
};

export const BEN_HOWARD_EVERY_KINGDOM: IVinyl = {
  musician: MUSICIANS.BEN_HOWARD,
  photo: PHOTOS.ALBUM_ARTWORK.BEN_HOWARD_EVERY_KINGDOM,
  appleMusicId: "every-kingdom/1440804636",
  title: "Every Kingdom",
  arrived: true,
  colors: [BLACK],
  retailer: MUSICIAN_WEB_STORE,
  signed: false,
  inches: 12,
  costExcDelivery: 9.99,
  sides: 2,
  year: 2011
};

export const AMY_WINEHOUSE_BACK_TO_BLACK: IVinyl = {
  musician: MUSICIANS.AMY_WINEHOUSE,
  retailer: AMAZON,
  costExcDelivery: 12.99,
  title: "Back to Black",
  photo: PHOTOS.ALBUM_ARTWORK.AMY_WINEHOUSE_BACK_TO_BLACK,
  appleMusicId: "back-to-black/1006515289",
  year: 2006,
  signed: false,
  arrived: true,
  colors: [BLACK],
  inches: 12,
  sides: 2
};

export const ARCTIC_MONKEYS_FAVOURITE_WORST_NIGHTMARE: IVinyl = {
  musician: MUSICIANS.ARCTIC_MONKEYS,
  //TOOD: verify this cost
  costExcDelivery: 21.99,
  retailer: ROUGH_TRADE_NOTTINGHAM,
  title: "Favourite Worst Nightmare",
  appleMusicId: "favourite-worst-nightmare/251126923",
  year: 2007,
  sides: 2,
  arrived: true,
  colors: [BLACK],
  inches: 12,
  signed: false,
  photo: PHOTOS.ALBUM_ARTWORK.ARCTIC_MONKEYS_FAVOURITE_WORST_NIGHTMARE
};

export const KATE_NASH_MADE_OF_BRICKS: IVinyl = {
  musician: MUSICIANS.KATE_NASH,
  title: "Made of Bricks",
  photo: PHOTOS.ALBUM_ARTWORK.KATE_NASH_MADE_OF_BRICKS,
  appleMusicId: "made-of-bricks-bonus-track-version/1440791847",
  year: 2007,
  inches: 12,
  sides: 2,
  retailer: NORMAN_ONLINE,
  costExcDelivery: 17.99,
  signed: false,
  arrived: true,
  colors: [BLACK]
};

export const ADELE_19: IVinyl = {
  musician: MUSICIANS.ADELE,
  title: "19",
  retailer: NORMAN_ONLINE,
  costExcDelivery: 15.49,
  photo: PHOTOS.ALBUM_ARTWORK.ADELE_19,
  appleMusicId: "19/269864356",
  year: 2008,
  inches: 12,
  sides: 2,
  signed: false,
  arrived: true,
  colors: [BLACK]
};

export const FLORENCE_LUNGS: IVinyl = {
  musician: MUSICIANS.FLORENCE_AND_THE_MACHINE,
  title: "Lungs",
  costExcDelivery: 12.99,
  retailer: AMAZON,
  sides: 2,
  arrived: true,
  colors: [BLACK],
  signed: false,
  inches: 12,
  photo: PHOTOS.ALBUM_ARTWORK.FLORENCE_LUNGS,
  appleMusicId: "lungs/1440982056",
  year: 2009
};

export const MARINA_ELECTRA_HEART: IVinyl = {
  musician: MUSICIANS.MARINA,
  retailer: MUSICIAN_WEB_STORE,
  costExcDelivery: 18.99,
  title: "Electra Heart",
  photo: PHOTOS.ALBUM_ARTWORK.MARINA_ELECTRA_HEART,
  appleMusicId: "electra-heart/612448612",
  year: 2012,
  inches: 12,
  sides: 4,
  signed: false,
  arrived: true,
  colors: [BLACK]
};

export const LANA_BORN_TO_DIE: IVinyl = {
  musician: MUSICIANS.LANA_DEL_REY,
  signed: false,
  arrived: true,
  colors: [BLACK],
  sides: 4,
  costExcDelivery: 25.99,
  retailer: ROUGH_TRADE_EAST,
  inches: 12,
  title: "Born to Die",
  appleMusicId: "born-to-die/1440809572",
  year: 2012,
  photo: PHOTOS.ALBUM_ARTWORK.LANA_BORN_TO_DIE
};

export const LADY_GAGA_BORN_THIS_WAY: IVinyl = {
  musician: MUSICIANS.LADY_GAGA,
  retailer: JUNO_ONLINE,
  photo: PHOTOS.ALBUM_ARTWORK.LADY_GAGA_BORN_THIS_WAY,
  title: "Born This Way",
  appleMusicId: "born-this-way-special-edition/1440857161",
  year: 2011,
  sides: 4,
  costExcDelivery: 18.75,
  arrived: true,
  colors: [BLACK],
  inches: 12,
  signed: false
};

export const LADY_GAGA_FAME_MONSTER: IVinyl = {
  musician: MUSICIANS.LADY_GAGA,
  photo: PHOTOS.ALBUM_ARTWORK.LADY_GAGA_FAME_MONSTER,
  retailer: JUNO_ONLINE,
  costExcDelivery: 29.25,
  title: "The Fame Monster",
  appleMusicId: "the-fame-monster/1440860294",
  year: 2009,
  sides: 2,
  arrived: true,
  colors: [COLORS.VINYL.PHOTO],
  inches: 12,
  signed: false
};

export const LORDE_PURE_HEROINE: IVinyl = {
  musician: MUSICIANS.LORDE,
  gift: { from: FRIENDS.MUM },
  costExcDelivery: 8,
  retailer: RECORDSTORE_ONLINE,
  title: "Pure Heroine",
  appleMusicId: "pure-heroine/1440818584",
  year: 2013,
  signed: false,
  sides: 2,
  inches: 12,
  arrived: true,
  colors: [BLACK],
  photo: PHOTOS.ALBUM_ARTWORK.LORDE_PURE_HEROINE
};

export const LANY_MALIBU_NIGHTS: IVinyl = {
  musician: MUSICIANS.LANY,
  title: "Malibu Nights",
  photo: PHOTOS.ALBUM_ARTWORK.LANY_MALIBU_NIGHTS,
  appleMusicId: "malibu-nights/1435482172",
  year: 2018,
  arrived: true,
  sides: 2,
  retailer: MUSIC_MAGPIE,
  costExcDelivery: 21.39,
  inches: 12,
  colors: [CLEAR],
  signed: false
};

export const TAYLOR_SWIFT_1989: IVinyl = {
  musician: MUSICIANS.TAYLOR_SWIFT,
  gift: { from: FRIENDS.MUM },
  title: "1989",
  costExcDelivery: 14.99,
  retailer: RECORDSTORE_ONLINE,
  photo: PHOTOS.ALBUM_ARTWORK.TAYLOR_SWIFT_1989,
  year: 2014,
  sides: 4,
  arrived: true,
  colors: [BLACK],
  inches: 12,
  signed: false,
  appleMusicId: "1989/1445888258"
};

export const GRIMES_ART_ANGELS: IVinyl = {
  musician: MUSICIANS.GRIMES,
  title: "Art Angels",
  retailer: NORMAN_ONLINE,
  costExcDelivery: 19.89,
  photo: PHOTOS.ALBUM_ARTWORK.GRIMES_ART_ANGELS,
  appleMusicId: "art-angels/1051022913",
  year: 2015,
  inches: 12,
  sides: 2,
  arrived: true,
  colors: [BLACK],
  signed: false
};

export const MUNA_ABOUT_U: IVinyl = {
  musician: MUSICIANS.MUNA,
  title: "About U",
  gift: { from: FRIENDS.MUM },
  sides: 4,
  retailer: EBAY,
  costExcDelivery: 22.89,
  inches: 12,
  signed: false,
  arrived: true,
  colors: [COLORS.VINYL.MUNA_ABOUT_U_PINK],
  photo: PHOTOS.ALBUM_ARTWORK.MUNA_ABOUT_U,
  appleMusicId: "about-u/1171832662",
  year: 2017
};

export const PVRIS_AWKOHAWNOH: IVinyl = {
  musician: MUSICIANS.PVRIS,
  retailer: MUSICIAN_WEB_STORE,
  costExcDelivery: 21.99,
  title: "All We Know of Heaven, All We Need of Hell",
  photo: PHOTOS.ALBUM_ARTWORK.PVRIS_AWKOHAWNOH,
  appleMusicId: "all-we-know-of-heaven-all-we-need-of-hell/1227528237",
  year: 2017,
  arrived: true,
  colors: COLORS.VINYL.PVRIS_AWKOHAWNOH,
  inches: 12,
  sides: 2,
  signed: true
};

export const _1975_BRIEF_INQUIRY: IVinyl = {
  musician: MUSICIANS._1975_THE,
  title: "A Brief Inquiry Into Online Relationships",
  photo: PHOTOS.ALBUM_ARTWORK._1975_BRIEF_INQUIRY,
  appleMusicId: "a-brief-inquiry-into-online-relationships/1435546528",
  year: 2018,
  costExcDelivery: 25.99,
  retailer: MUSICIAN_WEB_STORE,
  sides: 4,
  inches: 12,
  signed: false,
  arrived: true,
  colors: [COLORS.CLEAR]
};

export const BANKS_III: IVinyl = {
  musician: MUSICIANS.BANKS,
  appleMusicId: "iii/1467547466",
  title: "III",
  retailer: ROUGH_TRADE_EAST,
  photo: PHOTOS.ALBUM_ARTWORK.BANKS_III,
  year: 2019,
  signed: true,
  costExcDelivery: 20.99,
  sides: 2,
  inches: 12,
  arrived: true,
  colors: [COLORS.CLEAR]
};

export const LEON_LEON: IVinyl = {
  gift: { from: FRIENDS.MUM },
  musician: MUSICIANS.LEON,
  retailer: HIVE,
  costExcDelivery: 15.75,
  title: MUSICIANS.LEON.name,
  appleMusicId: "l%C3%A9on/1450257286",
  year: 2019,
  signed: false,
  sides: 2,
  inches: 12,
  arrived: true,
  colors: [BLACK],
  photo: PHOTOS.ALBUM_ARTWORK.LEON_LEON
};

export const LYKKE_LI_SO_SAD_SO_SEXY: IVinyl = {
  musician: MUSICIANS.LYKKE_LI,
  retailer: NORMAN_ONLINE,
  costExcDelivery: 17.99,
  title: "so sad so sexy",
  appleMusicId: "so-sad-so-sexy/1372324600",
  year: 2018,
  signed: false,
  sides: 2,
  inches: 12,
  arrived: true,
  colors: [BLACK],
  photo: PHOTOS.ALBUM_ARTWORK.LYKKE_LI_SO_SAD_SO_SEXY
};

export const FKA_TWIGS_MAGDALENE: IVinyl = {
  musician: MUSICIANS.FKA_TWIGS,
  title: "Magdalene",
  gift: { from: FRIENDS.MUM },
  costExcDelivery: 16,
  retailer: MUSICIAN_WEB_STORE,
  appleMusicId: "magdalene/1477652618",
  year: 2019,
  signed: false,
  sides: 2,
  arrived: true,
  colors: [BLACK],
  inches: 12,
  photo: PHOTOS.ALBUM_ARTWORK.FKA_TWIGS_MAGDALENE
};

export const CAROLINE_POLACHEK_PANG: IVinyl = {
  musician: MUSICIANS.CAROLINE_POLACHEK,
  retailer: NORMAN_ONLINE,
  title: "Pang",
  photo: PHOTOS.ALBUM_ARTWORK.CAROLINE_POLACHEK_PANG,
  appleMusicId: "pang/1482421639",
  year: 2019,
  costExcDelivery: 17.49,
  sides: 2,
  signed: false,
  arrived: true,
  colors: [BLACK],
  inches: 12
};

export const KIM_PETRAS_CLARITY: IVinyl = {
  musician: MUSICIANS.KIM_PETRAS,
  retailer: NORMAN_ONLINE,
  title: "Clarity",
  photo: PHOTOS.ALBUM_ARTWORK.KIM_PETRAS_CLARITY,
  costExcDelivery: 18.18,
  year: 2019,
  signed: false,
  inches: 12,
  sides: 2,
  arrived: true,
  colors: [COLORS.VINYL.PHOTO],
  appleMusicId: "clarity/1469298192"
};

export const ARIANA_GRANDE_TUN: IVinyl = {
  retailer: JUNO_ONLINE,
  costExcDelivery: 18.75,
  musician: MUSICIANS.ARIANA_GRANDE,
  title: "thank u, next",
  photo: PHOTOS.ALBUM_ARTWORK.ArianaGrande_TUN,
  appleMusicId: "thank-u-next/1450330588",
  year: 2019,
  sides: 4,
  arrived: true,
  colors: [BLACK],
  inches: 12,
  signed: false
};

export const HAIM_WIMPIII: IVinyl = {
  musician: MUSICIANS.HAIM,
  retailer: MUSICIAN_WEB_STORE,
  costExcDelivery: 25,
  title: "Women In Music Pt. III",
  appleMusicId: "women-in-music-pt-iii/1500020581",
  year: 2020,
  arrived: true,
  colors: [COLORS.VINYL.HAIM_WIMPIII_RED],
  inches: 12,
  sides: 4,
  photo: PHOTOS.ALBUM_ARTWORK.HAIM_WIMPIII,
  signed: true
};

export const SUFJAN_STEVENS_CARRIE_LOWELL: IVinyl = {
  musician: MUSICIANS.SUFJAN_STEVENS,
  photo: PHOTOS.ALBUM_ARTWORK.SUFJAN_STEVENS_CARRIE_LOWELL,
  appleMusicId: "carrie-lowell/955572616",
  retailer: NORMAN_ONLINE,
  costExcDelivery: 15.73,
  title: "Carrie & Lowell",
  signed: false,
  arrived: true,
  colors: [BLACK],
  sides: 2,
  inches: 12,
  year: 2015
};

export const BANKS_ALTAR: IVinyl = {
  musician: MUSICIANS.BANKS,
  photo: PHOTOS.ALBUM_ARTWORK.BANKS_ALTAR,
  appleMusicId: "the-altar/1440836872",
  title: "The Altar",
  signed: false,
  retailer: JUNO_ONLINE,
  costExcDelivery: 13.25,
  arrived: true,
  colors: [BLACK],
  sides: 2,
  inches: 12,
  year: 2016
};

export const ALLIE_X_SUPER_SUNSET: IVinyl = {
  musician: MUSICIANS.ALLIE_X,
  retailer: MUSICIAN_WEB_STORE,
  costExcDelivery: 20,
  title: "Super Sunset",
  arrived: true,
  colors: [COLORS.VINYL.ALLIE_X_SUPER_SUNSET_YELLOW],
  photo: PHOTOS.ALBUM_ARTWORK.ALLIE_X_SUPER_SUNSET,
  appleMusicId: "super-sunset/1421851140",
  year: 2018,
  inches: 10,
  sides: 2,
  signed: true
};
