const requireVinyl = (artist: string, album: string): IImageSrc =>
  require(`./${artist}_${album}.jpg`);

export const PHOTOS_VINYL: VinylPhotosObject = {
  // 123
  "1975_THE": {
    A_BRIEF_INQUIRY_INTO_ONLINE_RELATIONSHIPS: requireVinyl(
      "1975-the",
      "a-brief-inquiry-into-online-relationships"
    )
  },
  // A
  ADELE: { "19": requireVinyl("adele", "19") },
  ALLIE_X: { SUPER_SUNSET: requireVinyl("allie-x", "super-sunset") },
  AMY_WINEHOUSE: {
    BACK_TO_BLACK: requireVinyl("amy-winehouse", "back-to-black")
  },
  ARCTIC_MONKEYS: {
    FAVOURITE_WORST_NIGHTMARE: requireVinyl(
      "arctic-monkeys",
      "favourite-worst-nightmare"
    )
  },
  ARIANA_GRANDE: {
    THANK_U_NEXT: requireVinyl("ariana-grande", "thank-u-next")
  },
  // B
  BANKS: { III: requireVinyl("banks", "iii") },
  BEN_HOWARD: { EVERY_KINGDOM: requireVinyl("ben-howard", "every-kingdom") },
  BEYONCE: { LEMONADE: requireVinyl("beyonce", "lemonade") },
  // C
  CARIBOU: { OUR_LOVE: requireVinyl("caribou", "our-love") },
  CHARLI_XCX: {
    HOW_IM_FEELING_NOW: requireVinyl("charli-xcx", "how-im-feeling-now")
  },
  // D
  DUA_LIPA: { FUTURE_NOSTALGIA: requireVinyl("dua-lipa", "future-nostalgia") },
  // E
  ELLIE_GOULDING: { HALCYON: requireVinyl("ellie-goulding", "halcyon") },
  // F
  FKA_TWIGS: { MAGDALENE: requireVinyl("fka-twigs", "magdalene") },
  FLORENCE_AND_THE_MACHINE: {
    LUNGS: requireVinyl("florence-and-the-machine", "lungs")
  },
  // G
  GEORGE_FITZGERALD: {
    ALL_THAT_MUST_BE: requireVinyl("george-fitzgerald", "all-that-must-be")
  },
  GRIMES: { ART_ANGELS: requireVinyl("grimes", "art-angels") },
  // H
  HAIM: {
    WOMEN_IN_MUSIC_PT_III: requireVinyl("haim", "women-in-music-pt-iii")
  },
  // J
  JON_HOPKINS: { SINGULARITY: requireVinyl("jon-hopkins", "singularity") },
  // K
  KATE_NASH: {
    MADE_OF_BRICKS: requireVinyl("kate-nash", "made-of-bricks")
  },
  KATY_PERRY: {
    ONE_OF_THE_BOYS: requireVinyl("katy-perry", "one-of-the-boys")
  },
  KIM_PETRAS: { CLARITY: requireVinyl("kim-petras", "clarity") },
  // L
  LADY_GAGA: { BORN_THIS_WAY: requireVinyl("lady-gaga", "born-this-way") },
  LANA_DEL_REY: { BORN_TO_DIE: requireVinyl("lana-del-rey", "born-to-die") },
  LANE_8: { RISE: requireVinyl("lane-8", "rise") },
  LANY: { MALIBU_NIGHTS: requireVinyl("lany", "malibu-nights") },
  LEON: { LEON: requireVinyl("leon", "leon") },
  LENNON_STELLA: {
    THREE_TWO_ONE: requireVinyl("lennon-stella", "three-two-one")
  },
  LISSIE: { CATCHING_A_TIGER: requireVinyl("lissie", "catching-a-tiger") },
  LORDE: { PURE_HEROINE: requireVinyl("lorde", "pure-heroine") },
  // M
  MARINA: { ELECTRA_HEART: requireVinyl("marina", "electra-heart") },
  MUNA: { ABOUT_U: requireVinyl("muna", "about-u") },
  // N
  NATALIA_KILLS: {
    PERFECTIONIST: requireVinyl("natalia-kills", "perfectionist")
  },
  // P
  PANIC_AT_THE_DISCO: {
    A_FEVER_YOU_CANT_SWEAT_OUT: requireVinyl(
      "panic-at-the-disco",
      "a-fever-you-cant-sweat-out"
    )
  },
  PARAMORE: { RIOT: requireVinyl("paramore", "riot") },
  PVRIS: {
    ALL_WE_KNOW_OF_HEAVEN_ALL_WE_NEED_OF_HELL: requireVinyl(
      "pvris",
      "all-we-know-of-heaven-all-we-need-of-hell"
    )
  },
  // R
  RIHANNA: { RATED_R: requireVinyl("rihanna", "rated-r") },
  RYN_WEAVER: { THE_FOOL: requireVinyl("ryn-weaver", "the-fool") },
  // S
  SOPHIE: {
    OIL_OF_EVERY_PEARLS_UNINSIDES: requireVinyl(
      "sophie",
      "oil-of-every-pearls-uninsides"
    )
  },
  SUFJAN_STEVENS: {
    CARRIE_AND_LOWELL: requireVinyl("sufjan-stevens", "carrie-and-lowell")
  },
  // T
  TAYLOR_SWIFT: { "1989": requireVinyl("taylor-swift", "1989") },
  TOURIST: { U: requireVinyl("tourist", "u") },
  TROYE_SIVAN: { BLOOM: requireVinyl("troye-sivan", "bloom") }
};
