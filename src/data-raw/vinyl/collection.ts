import { MUSICIANS, RETAILERS, FRIENDS } from "@constants";
import { PHOTOS } from "resources";
import { COLORS } from "styles";
import { Vinyl } from "types";

const { BLACK, CLEAR } = COLORS;
const {
  NORMAN_ONLINE,
  JUNO_ONLINE,
  HIVE,
  MUSIC_MAGPIE,
  CHALKYS,
  AMAZON,
  GLOBAL_GROOVE_ONLINE,
  EBAY,
  RECORDSTORE_ONLINE,
  MUSICIAN_WEB_STORE,
  ROUGH_TRADE_ONLINE,
  ROUGH_TRADE_EAST,
  HMV_ONLINE,
  ROUGH_TRADE_WEST,
  MUSICROOM_ONLINE,
  ROUGH_TRADE_NOTTINGHAM,
  FAT_POSSUM,
  FOPP_LONDON
} = RETAILERS;

export const FLEETWOOD_MAC_TANGO_IN_THE_NIGHT: Vinyl = {
  musician: MUSICIANS.FLEETWOOD_MAC,
  artwork: PHOTOS.ALBUM_ARTWORK.FLEETWOOD_MAC_TANGO_IN_THE_NIGHT,
  title: "Tango in the Night",
  appleMusicId: "tango-in-the-night-remastered/1217901688",
  year: 1987,
  purchaseCondition: "new",
  signed: false,
  sides: 2,
  color: COLORS.VINYL.FLEETWOOD_MAC_TANGO_IN_THE_NIGHT,
  costExcDelivery: 13,
  retailer: FOPP_LONDON,
  inches: 12
};

export const JESSIE_WARE_WHATS_YOUR_PLEASURE: Vinyl = {
  musician: MUSICIANS.JESSIE_WARE,
  artwork: PHOTOS.ALBUM_ARTWORK.JESSIE_WARE_WHATS_YOUR_PLEASURE,
  title: "What's Your Pleasure?",
  appleMusicId: "whats-your-pleasure/1498945382",
  year: 2020,
  signed: false,
  purchaseCondition: "new",
  sides: 2,
  color: BLACK,
  costExcDelivery: 20,
  retailer: FOPP_LONDON,
  inches: 12
};

export const SMITHS_HATFUL_OF_HOLLOW: Vinyl = {
  musician: MUSICIANS.SMITHS_THE,
  artwork: PHOTOS.ALBUM_ARTWORK.SMITHS_HATFUL_OF_HOLLOW,
  title: "Hatful of Hollow",
  appleMusicId: "hatful-of-hollow/799969670",
  year: 1984,
  purchaseCondition: "new",
  signed: false,
  sides: 2,
  color: BLACK,
  costExcDelivery: 15,
  retailer: FOPP_LONDON,
  inches: 12
};

export const ELLIE_GOULDING_HALCYON: Vinyl = {
  musician: MUSICIANS.ELLIE_GOULDING,
  artwork: PHOTOS.ALBUM_ARTWORK.ELLIE_GOULDING_HALCYON,
  purchaseCondition: "new",
  title: "Halcyon",
  appleMusicId: "halcyon/1442722757",
  year: 2012,
  signed: false,
  sides: 2,
  color: BLACK,
  costExcDelivery: 15,
  retailer: FOPP_LONDON,
  inches: 12
};

export const CARLY_RAE_JEPSEN_EMOTION: Vinyl = {
  musician: MUSICIANS.CARLY_RAE_JEPSEN,
  artwork: PHOTOS.ALBUM_ARTWORK.CARLY_RAE_JEPSEN_EMOTION,
  appleMusicId: "e-mo-tion/1442688656",
  title: "E•MO•TION",
  year: 2015,
  sides: 2,
  inches: 12,
  purchaseCondition: "new",
  signed: true,
  color: COLORS.VINYL.CARLY_RAE_JEPSEN_EMOTION_PINK,
  costExcDelivery: 19.99,
  retailer: MUSICIAN_WEB_STORE
};

export const LISSIE_CATCHING_A_TIGER: Vinyl = {
  musician: MUSICIANS.LISSIE,
  purchaseCondition: "new",
  artwork: PHOTOS.ALBUM_ARTWORK.LISSIE_CATCHING_A_TIGER,
  appleMusicId: "catching-a-tiger/1517705755",
  title: "Catching a Tiger",
  year: 2010,
  sides: 2,
  inches: 12,
  signed: false,
  color: BLACK,
  costExcDelivery: 12.99,
  retailer: FAT_POSSUM
};

export const TAYLOR_SWIFT_FOLKLORE: Vinyl = {
  musician: MUSICIANS.TAYLOR_SWIFT,
  title: "folklore",
  costExcDelivery: 26.99,
  retailer: MUSICIAN_WEB_STORE,
  appleMusicId: "folklore-deluxe-version/1528112358",
  year: 2020,
  color: COLORS.VINYL.TAYLOR_SWIFT_FOLKLORE_TEAL,
  inches: 12,
  purchaseCondition: "new",
  sides: 4,
  artwork: PHOTOS.ALBUM_ARTWORK.TAYLOR_SWIFT_FOLKLORE,
  signed: false
};

export const TROYE_SIVAN_IN_A_DREAM: Vinyl = {
  musician: MUSICIANS.TROYE_SIVAN,
  title: "In a Dream",
  artwork: PHOTOS.ALBUM_ARTWORK.TROYE_SIVAN_IN_A_DREAM,
  appleMusicId: "in-a-dream-2020-ep/1536713511",
  year: 2020,
  purchaseCondition: "new",
  costExcDelivery: 21.99,
  retailer: MUSICIAN_WEB_STORE,
  color: COLORS.VINYL.TROYE_SIVAN_IN_A_DREAM_BLUE_MIST,
  sides: 2,
  signed: true,
  inches: 12
};

export const CHARLI_XCX_HOW_IM_FEELING_NOW: Vinyl = {
  musician: MUSICIANS.CHARLI_XCX,
  title: "how i'm feeling now",
  year: 2020,
  inches: 12,
  sides: 2,
  artwork: PHOTOS.ALBUM_ARTWORK.CHARLI_XCX_HOW_IM_FEELING_NOW,
  purchaseCondition: "new",
  appleMusicId: "how-im-feeling-now/1513162098",
  color: COLORS.VINYL.CHARLI_XCX_HOW_IM_FEELING_NOW_ORANGE,
  costExcDelivery: 18.99,
  retailer: MUSICIAN_WEB_STORE,
  signed: false
};

export const CARIBOU_OUR_LOVE: Vinyl = {
  musician: MUSICIANS.CARIBOU,
  artwork: PHOTOS.ALBUM_ARTWORK.CARIBOU_OUR_LOVE,
  appleMusicId: "our-love/1276611236",
  title: "Our Love",
  purchaseCondition: "new",
  sides: 2,
  color: BLACK,
  signed: false,
  costExcDelivery: 12.99,
  retailer: ROUGH_TRADE_WEST,
  inches: 12,
  year: 2014
};

export const BEN_HOWARD_EVERY_KINGDOM: Vinyl = {
  musician: MUSICIANS.BEN_HOWARD,
  artwork: PHOTOS.ALBUM_ARTWORK.BEN_HOWARD_EVERY_KINGDOM,
  appleMusicId: "every-kingdom/1440804636",
  purchaseCondition: "new",
  title: "Every Kingdom",
  color: BLACK,
  retailer: MUSICIAN_WEB_STORE,
  signed: false,
  inches: 12,
  costExcDelivery: 9.99,
  sides: 2,
  year: 2011
};

export const AMY_WINEHOUSE_BACK_TO_BLACK: Vinyl = {
  musician: MUSICIANS.AMY_WINEHOUSE,
  retailer: AMAZON,
  costExcDelivery: 12.99,
  title: "Back to Black",
  artwork: PHOTOS.ALBUM_ARTWORK.AMY_WINEHOUSE_BACK_TO_BLACK,
  purchaseCondition: "new",
  appleMusicId: "back-to-black/1006515289",
  year: 2006,
  signed: false,
  color: BLACK,
  inches: 12,
  sides: 2
};

export const ARCTIC_MONKEYS_FAVOURITE_WORST_NIGHTMARE: Vinyl = {
  musician: MUSICIANS.ARCTIC_MONKEYS,
  costExcDelivery: 21.99,
  retailer: ROUGH_TRADE_NOTTINGHAM,
  title: "Favourite Worst Nightmare",
  appleMusicId: "favourite-worst-nightmare/251126923",
  year: 2007,
  purchaseCondition: "new",
  sides: 2,
  color: BLACK,
  inches: 12,
  signed: false,
  artwork: PHOTOS.ALBUM_ARTWORK.ARCTIC_MONKEYS_FAVOURITE_WORST_NIGHTMARE
};

export const KATE_NASH_MADE_OF_BRICKS: Vinyl = {
  musician: MUSICIANS.KATE_NASH,
  purchaseCondition: "new",
  title: "Made of Bricks",
  artwork: PHOTOS.ALBUM_ARTWORK.KATE_NASH_MADE_OF_BRICKS,
  appleMusicId: "made-of-bricks-bonus-track-version/1440791847",
  year: 2007,
  inches: 12,
  sides: 2,
  retailer: NORMAN_ONLINE,
  costExcDelivery: 17.99,
  signed: false,
  color: BLACK
};

export const SASHA_SLOAN_ONLY_CHILD: Vinyl = {
  musician: MUSICIANS.SASHA_SLOAN,
  title: "Only Child",
  year: 2020,
  inches: 12,
  purchaseCondition: "new",
  signed: false,
  sides: 2,
  costExcDelivery: 27.79,
  color: BLACK,
  retailer: AMAZON,
  appleMusicId: "only-child/1529018233",
  artwork: PHOTOS.ALBUM_ARTWORK.SASHA_SLOAN_ONLY_CHILD
};

export const LEON_APART: Vinyl = {
  musician: MUSICIANS.LEON,
  title: "Apart",
  appleMusicId: "apart/1525538383",
  year: 2020,
  color: BLACK,
  inches: 12,
  signed: false,
  purchaseCondition: "new",
  costExcDelivery: 17.78,
  sides: 2,
  retailer: HIVE,
  artwork: PHOTOS.ALBUM_ARTWORK.LEON_APART
};
export const GEORGE_FITZGERALD_ALL_THAT_MUST_BE: Vinyl = {
  musician: MUSICIANS.GEORGE_FITZGERALD,
  title: "All That Must Be",
  year: 2018,
  color: COLORS.VINYL.GEORGE_FITZGERALD_ALL_THAT_MUST_BE,
  purchaseCondition: "new",
  retailer: HIVE,
  signed: false,
  costExcDelivery: 20.39,
  appleMusicId: "all-that-must-be/1322664114",
  sides: 4,
  inches: 12,
  artwork: PHOTOS.ALBUM_ARTWORK.GEORGE_FITZGERALD_ALL_THAT_MUST_BE
};
export const MAGGIE_ROGERS_HEARD_IT_IN_A_PAST_LIFE: Vinyl = {
  musician: MUSICIANS.MAGGIE_ROGERS,
  year: 2019,
  title: "Head It in a Past Life",
  signed: false,
  retailer: HIVE,
  purchaseCondition: "new",
  appleMusicId: "heard-it-in-a-past-life/1437448293",
  color: BLACK,
  artwork: PHOTOS.ALBUM_ARTWORK.MAGGIE_ROGERS_HEARD_IT_IN_A_PAST_LIFE,
  costExcDelivery: 17.87,
  sides: 2,
  inches: 12
};
export const BEYONCE_LEMONADE: Vinyl = {
  musician: MUSICIANS.BEYONCE,
  year: 2016,
  color: COLORS.VINYL.BEYONCE_LEMONADE,
  retailer: MUSICROOM_ONLINE,
  sides: 4,
  signed: false,
  purchaseCondition: "new",
  inches: 12,
  appleMusicId: "lemonade/1460430561",
  artwork: PHOTOS.ALBUM_ARTWORK.BEYONCE_LEMONADE,
  costExcDelivery: 30,
  title: "Lemonade"
};

export const JON_HOPKINS_SINGULARITY: Vinyl = {
  musician: MUSICIANS.JON_HOPKINS,
  title: "Singularity",
  artwork: PHOTOS.ALBUM_ARTWORK.JON_HOPKINS_SINGULARITY,
  appleMusicId: "singularity/1349736537",
  year: 2018,
  inches: 12,
  sides: 4,
  retailer: CHALKYS,
  costExcDelivery: 21.48,
  purchaseCondition: "new",
  signed: false,
  color: BLACK
};

export const ARIANA_GRANDE_POSITIONS: Vinyl = {
  musician: MUSICIANS.ARIANA_GRANDE,
  title: "Positions",
  artwork: PHOTOS.ALBUM_ARTWORK.ARIANA_GRANDE_POSITIONS,
  appleMusicId: "positions/1537476578",
  year: 2020,
  inches: 12,
  sides: 2,
  retailer: HMV_ONLINE,
  purchaseCondition: "new",
  costExcDelivery: 27.99,
  signed: false,
  color: COLORS.VINYL.ARIANA_GRANDE_POSITIONS
};

export const DUA_LIPA_FUTURE_NOSTALGIA: Vinyl = {
  musician: MUSICIANS.DUA_LIPA,
  title: "Future Nostalgia",
  artwork: PHOTOS.ALBUM_ARTWORK.DUA_LIPA_FUTURE_NOSTALGIA,
  appleMusicId: "future-nostalgia/1538003494",
  year: 2020,
  inches: 12,
  purchaseCondition: "new",
  sides: 2,
  retailer: HIVE,
  costExcDelivery: 18.32,
  signed: false,
  color: BLACK
};

export const ADELE_19: Vinyl = {
  musician: MUSICIANS.ADELE,
  title: "19",
  retailer: NORMAN_ONLINE,
  costExcDelivery: 15.49,
  artwork: PHOTOS.ALBUM_ARTWORK.ADELE_19,
  appleMusicId: "19/269864356",
  purchaseCondition: "new",
  year: 2008,
  inches: 12,
  sides: 2,
  signed: false,
  color: BLACK
};

export const FLORENCE_LUNGS: Vinyl = {
  musician: MUSICIANS.FLORENCE_AND_THE_MACHINE,
  purchaseCondition: "new",
  title: "Lungs",
  costExcDelivery: 12.99,
  retailer: AMAZON,
  sides: 2,
  color: BLACK,
  signed: false,
  inches: 12,
  artwork: PHOTOS.ALBUM_ARTWORK.FLORENCE_LUNGS,
  appleMusicId: "lungs/1440982056",
  year: 2009
};

export const MARINA_ELECTRA_HEART: Vinyl = {
  musician: MUSICIANS.MARINA,
  retailer: MUSICIAN_WEB_STORE,
  purchaseCondition: "new",
  costExcDelivery: 18.99,
  title: "Electra Heart",
  artwork: PHOTOS.ALBUM_ARTWORK.MARINA_ELECTRA_HEART,
  appleMusicId: "electra-heart/612448612",
  year: 2012,
  inches: 12,
  sides: 4,
  signed: false,
  color: BLACK
};

export const LANA_BORN_TO_DIE: Vinyl = {
  musician: MUSICIANS.LANA_DEL_REY,
  signed: false,
  color: BLACK,
  sides: 4,
  costExcDelivery: 25.99,
  retailer: ROUGH_TRADE_EAST,
  purchaseCondition: "new",
  inches: 12,
  title: "Born to Die",
  appleMusicId: "born-to-die/1440809572",
  year: 2012,
  artwork: PHOTOS.ALBUM_ARTWORK.LANA_BORN_TO_DIE
};

export const LADY_GAGA_BORN_THIS_WAY: Vinyl = {
  musician: MUSICIANS.LADY_GAGA,
  retailer: JUNO_ONLINE,
  artwork: PHOTOS.ALBUM_ARTWORK.LADY_GAGA_BORN_THIS_WAY,
  title: "Born This Way",
  appleMusicId: "born-this-way-special-edition/1440857161",
  year: 2011,
  sides: 4,
  purchaseCondition: "new",
  costExcDelivery: 18.75,
  color: BLACK,
  inches: 12,
  signed: false
};

export const LADY_GAGA_FAME_MONSTER: Vinyl = {
  musician: MUSICIANS.LADY_GAGA,
  artwork: PHOTOS.ALBUM_ARTWORK.LADY_GAGA_FAME_MONSTER,
  retailer: JUNO_ONLINE,
  costExcDelivery: 29.25,
  title: "The Fame Monster",
  appleMusicId: "the-fame-monster/1440860294",
  purchaseCondition: "new",
  year: 2009,
  sides: 2,
  color: { photo: PHOTOS.DISC_ARTWORK.LADY_GAGA_FAME_MONSTER_DISC },
  inches: 12,
  signed: false
};

export const LORDE_PURE_HEROINE: Vinyl = {
  musician: MUSICIANS.LORDE,
  gift: { from: FRIENDS.MUM },
  costExcDelivery: 8,
  retailer: RECORDSTORE_ONLINE,
  title: "Pure Heroine",
  purchaseCondition: "new",
  appleMusicId: "pure-heroine/1440818584",
  year: 2013,
  signed: false,
  sides: 2,
  inches: 12,
  color: BLACK,
  artwork: PHOTOS.ALBUM_ARTWORK.LORDE_PURE_HEROINE
};

export const LANY_MALIBU_NIGHTS: Vinyl = {
  purchaseCondition: "new",
  musician: MUSICIANS.LANY,
  title: "Malibu Nights",
  artwork: PHOTOS.ALBUM_ARTWORK.LANY_MALIBU_NIGHTS,
  appleMusicId: "malibu-nights/1435482172",
  year: 2018,
  sides: 2,
  retailer: MUSIC_MAGPIE,
  costExcDelivery: 21.39,
  inches: 12,
  color: CLEAR,
  signed: false
};

export const TAYLOR_SWIFT_1989: Vinyl = {
  musician: MUSICIANS.TAYLOR_SWIFT,
  gift: { from: FRIENDS.MUM },
  title: "1989",
  costExcDelivery: 14.99,
  purchaseCondition: "new",
  retailer: RECORDSTORE_ONLINE,
  artwork: PHOTOS.ALBUM_ARTWORK.TAYLOR_SWIFT_1989,
  year: 2014,
  sides: 4,
  color: BLACK,
  inches: 12,
  signed: false,
  appleMusicId: "1989/1445888258"
};

export const GRIMES_ART_ANGELS: Vinyl = {
  musician: MUSICIANS.GRIMES,
  title: "Art Angels",
  retailer: NORMAN_ONLINE,
  costExcDelivery: 19.89,
  artwork: PHOTOS.ALBUM_ARTWORK.GRIMES_ART_ANGELS,
  appleMusicId: "art-angels/1051022913",
  year: 2015,
  purchaseCondition: "new",
  inches: 12,
  sides: 2,
  color: BLACK,
  signed: false
};

export const MUNA_ABOUT_U: Vinyl = {
  musician: MUSICIANS.MUNA,
  title: "About U",
  gift: { from: FRIENDS.MUM },
  sides: 4,
  retailer: EBAY,
  costExcDelivery: 22.89,
  inches: 12,
  signed: false,
  purchaseCondition: "new",
  color: COLORS.VINYL.MUNA_ABOUT_U_PINK,
  artwork: PHOTOS.ALBUM_ARTWORK.MUNA_ABOUT_U,
  appleMusicId: "about-u/1171832662",
  year: 2017
};

export const RIHANNA_RATED_R: Vinyl = {
  year: 2009,
  musician: MUSICIANS.RIHANNA,
  title: "Rated R",
  inches: 12,
  sides: 4,
  costExcDelivery: 18.49,
  purchaseCondition: "mint",
  retailer: GLOBAL_GROOVE_ONLINE,
  signed: false,
  appleMusicId: "rated-r/1440885156",
  artwork: PHOTOS.ALBUM_ARTWORK.RIHANNA_RATED_R,
  color: BLACK
};

export const _1975_I_LIKE_IT_WHEN_YOU_SLEEP: Vinyl = {
  musician: MUSICIANS._1975_THE,
  color: CLEAR,
  signed: false,
  purchaseCondition: "new",
  costExcDelivery: 24.99,
  inches: 12,
  year: 2016,
  title:
    "I like it when you sleep, for you are so beautiful yet so unaware of it",
  sides: 4,
  artwork: PHOTOS.ALBUM_ARTWORK._1975_I_LIKE_IT_WHEN_YOU_SLEEP,
  appleMusicId:
    "i-like-it-when-you-sleep-for-you-are-so-beautiful-yet/1440840422",
  retailer: MUSICIAN_WEB_STORE
};

export const PVRIS_AWKOHAWNOH: Vinyl = {
  musician: MUSICIANS.PVRIS,
  retailer: MUSICIAN_WEB_STORE,
  costExcDelivery: 21.99,
  title: "All We Know of Heaven, All We Need of Hell",
  artwork: PHOTOS.ALBUM_ARTWORK.PVRIS_AWKOHAWNOH,
  appleMusicId: "all-we-know-of-heaven-all-we-need-of-hell/1227528237",
  purchaseCondition: "new",
  year: 2017,
  color: COLORS.VINYL.PVRIS_AWKOHAWNOH,
  inches: 12,
  sides: 2,
  signed: true
};

export const _1975_BRIEF_INQUIRY: Vinyl = {
  musician: MUSICIANS._1975_THE,
  title: "A Brief Inquiry Into Online Relationships",
  artwork: PHOTOS.ALBUM_ARTWORK._1975_BRIEF_INQUIRY,
  appleMusicId: "a-brief-inquiry-into-online-relationships/1435546528",
  year: 2018,
  costExcDelivery: 25.99,
  purchaseCondition: "new",
  retailer: MUSICIAN_WEB_STORE,
  sides: 4,
  inches: 12,
  signed: false,
  color: CLEAR
};

export const BANKS_III: Vinyl = {
  musician: MUSICIANS.BANKS,
  purchaseCondition: "new",
  appleMusicId: "iii/1467547466",
  title: "III",
  retailer: ROUGH_TRADE_EAST,
  artwork: PHOTOS.ALBUM_ARTWORK.BANKS_III,
  year: 2019,
  signed: true,
  costExcDelivery: 20.99,
  sides: 2,
  inches: 12,
  color: CLEAR
};

export const LEON_LEON: Vinyl = {
  gift: { from: FRIENDS.MUM },
  musician: MUSICIANS.LEON,
  retailer: HIVE,
  purchaseCondition: "new",
  costExcDelivery: 15.75,
  title: MUSICIANS.LEON.name,
  appleMusicId: "l%C3%A9on/1450257286",
  year: 2019,
  signed: false,
  sides: 2,
  inches: 12,
  color: BLACK,
  artwork: PHOTOS.ALBUM_ARTWORK.LEON_LEON
};

export const LYKKE_LI_SO_SAD_SO_SEXY: Vinyl = {
  musician: MUSICIANS.LYKKE_LI,
  retailer: NORMAN_ONLINE,
  costExcDelivery: 17.99,
  title: "so sad so sexy",
  purchaseCondition: "new",
  appleMusicId: "so-sad-so-sexy/1372324600",
  year: 2018,
  signed: false,
  sides: 2,
  inches: 12,
  color: BLACK,
  artwork: PHOTOS.ALBUM_ARTWORK.LYKKE_LI_SO_SAD_SO_SEXY
};

export const FKA_TWIGS_MAGDALENE: Vinyl = {
  musician: MUSICIANS.FKA_TWIGS,
  title: "Magdalene",
  gift: { from: FRIENDS.MUM },
  costExcDelivery: 16,
  retailer: MUSICIAN_WEB_STORE,
  purchaseCondition: "new",
  appleMusicId: "magdalene/1477652618",
  year: 2019,
  signed: false,
  sides: 2,
  color: BLACK,
  inches: 12,
  artwork: PHOTOS.ALBUM_ARTWORK.FKA_TWIGS_MAGDALENE
};

export const CAROLINE_POLACHEK_PANG: Vinyl = {
  musician: MUSICIANS.CAROLINE_POLACHEK,
  retailer: NORMAN_ONLINE,
  title: "Pang",
  purchaseCondition: "new",
  artwork: PHOTOS.ALBUM_ARTWORK.CAROLINE_POLACHEK_PANG,
  appleMusicId: "pang/1482421639",
  year: 2019,
  costExcDelivery: 17.49,
  sides: 2,
  signed: false,
  color: BLACK,
  inches: 12
};

export const KIM_PETRAS_CLARITY: Vinyl = {
  musician: MUSICIANS.KIM_PETRAS,
  retailer: NORMAN_ONLINE,
  title: "Clarity",
  purchaseCondition: "new",
  artwork: PHOTOS.ALBUM_ARTWORK.KIM_PETRAS_CLARITY,
  costExcDelivery: 18.18,
  year: 2019,
  signed: false,
  inches: 12,
  sides: 2,
  color: { photo: PHOTOS.DISC_ARTWORK.KIM_PETRAS_CLARITY_DISC },
  appleMusicId: "clarity/1469298192"
};

export const ARIANA_GRANDE_TUN: Vinyl = {
  retailer: JUNO_ONLINE,
  costExcDelivery: 18.75,
  purchaseCondition: "new",
  musician: MUSICIANS.ARIANA_GRANDE,
  title: "thank u, next",
  artwork: PHOTOS.ALBUM_ARTWORK.ARIANA_GRANDE_TUN,
  appleMusicId: "thank-u-next/1450330588",
  year: 2019,
  sides: 4,
  color: BLACK,
  inches: 12,
  signed: false
};

export const HAIM_WIMPIII: Vinyl = {
  purchaseCondition: "new",
  musician: MUSICIANS.HAIM,
  retailer: MUSICIAN_WEB_STORE,
  costExcDelivery: 25,
  title: "Women In Music Pt. III",
  appleMusicId: "women-in-music-pt-iii/1500020581",
  year: 2020,
  color: COLORS.VINYL.HAIM_WIMPIII_RED,
  inches: 12,
  sides: 4,
  artwork: PHOTOS.ALBUM_ARTWORK.HAIM_WIMPIII,
  signed: true
};

export const SUFJAN_STEVENS_CARRIE_LOWELL: Vinyl = {
  musician: MUSICIANS.SUFJAN_STEVENS,
  artwork: PHOTOS.ALBUM_ARTWORK.SUFJAN_STEVENS_CARRIE_LOWELL,
  appleMusicId: "carrie-lowell/955572616",
  retailer: NORMAN_ONLINE,
  purchaseCondition: "new",
  costExcDelivery: 15.73,
  title: "Carrie & Lowell",
  signed: false,
  color: BLACK,
  sides: 2,
  inches: 12,
  year: 2015
};

export const BANKS_ALTAR: Vinyl = {
  musician: MUSICIANS.BANKS,
  artwork: PHOTOS.ALBUM_ARTWORK.BANKS_ALTAR,
  appleMusicId: "the-altar/1440836872",
  title: "The Altar",
  signed: false,
  purchaseCondition: "new",
  retailer: JUNO_ONLINE,
  costExcDelivery: 13.25,
  color: BLACK,
  sides: 2,
  inches: 12,
  year: 2016
};

export const ALLIE_X_SUPER_SUNSET: Vinyl = {
  musician: MUSICIANS.ALLIE_X,
  retailer: MUSICIAN_WEB_STORE,
  costExcDelivery: 20,
  title: "Super Sunset",
  color: COLORS.VINYL.ALLIE_X_SUPER_SUNSET_YELLOW,
  artwork: PHOTOS.ALBUM_ARTWORK.ALLIE_X_SUPER_SUNSET,
  purchaseCondition: "new",
  appleMusicId: "super-sunset/1421851140",
  year: 2018,
  inches: 10,
  sides: 2,
  signed: true
};

export const LORDE_MELODRAMA: Vinyl = {
  year: 2017,
  musician: MUSICIANS.LORDE,
  title: "Melodrama",
  sides: 2,
  artwork: PHOTOS.ALBUM_ARTWORK.LORDE_MELODRAMA,
  color: BLACK,
  signed: false,
  purchaseCondition: "new",
  inches: 12,
  costExcDelivery: 12.99,
  appleMusicId: "melodrama/1429662346",
  retailer: ROUGH_TRADE_ONLINE
};

export const YEARS_AND_YEARS_PALO_SANTO: Vinyl = {
  year: 2018,
  musician: MUSICIANS.YEARS_AND_YEARS,
  title: "Palo Santo",
  purchaseCondition: "new",
  sides: 4,
  artwork: PHOTOS.ALBUM_ARTWORK.YEARS_AND_YEARS_PALO_SANTO,
  color: COLORS.VINYL.YEARS_AND_YEARS_PALO_SANTO,
  signed: false,
  inches: 12,
  appleMusicId: "palo-santo/1451136724",
  costExcDelivery: 22.99,
  retailer: ROUGH_TRADE_ONLINE
};
