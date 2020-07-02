import { MUSICIANS } from "@constants";
import { PHOTOS_VINYL } from "resources";

export const VINYL_COLLECTION: Array<IVinylCard> = [
  {
    artist: MUSICIANS.TAYLOR_SWIFT,
    title: "1989",
    year: 2014,
    appleMusicUrl: "https://music.apple.com/gb/album/1989/1445888258",
    artwork: PHOTOS_VINYL.TAYLOR_SWIFT["1989"]
  },
  {
    artist: MUSICIANS.AMY_WINEHOUSE,
    title: "Back to Black",
    artwork: PHOTOS_VINYL.AMY_WINEHOUSE.BACK_TO_BLACK,
    appleMusicUrl: "https://music.apple.com/gb/album/back-to-black/1006515289",
    year: 2006
  },
  {
    artist: MUSICIANS.FKA_TWIGS,
    title: "Magdalene",
    artwork: PHOTOS_VINYL.FKA_TWIGS.MAGDALENE,
    appleMusicUrl: "https://music.apple.com/gb/album/magdalene/1477652618",
    year: 2019
  },
  {
    artist: MUSICIANS.FLORENCE_AND_THE_MACHINE,
    title: "Lungs",
    appleMusicUrl: "https://music.apple.com/gb/album/lungs/1440982056",
    artwork: PHOTOS_VINYL.FLORENCE_AND_THE_MACHINE.LUNGS,
    year: 2009
  },
  {
    artist: MUSICIANS.MARINA,
    title: "Electra Heart",
    appleMusicUrl: "https://music.apple.com/gb/album/electra-heart/612448612",
    year: 2012,
    artwork: PHOTOS_VINYL.MARINA.ELECTRA_HEART
  },
  {
    artist: MUSICIANS.BANKS,
    artwork: PHOTOS_VINYL.BANKS.III,
    appleMusicUrl: "https://music.apple.com/gb/album/iii/1467547466",
    title: "III",
    year: 2019
  },
  {
    artist: MUSICIANS.LORDE,
    title: "Pure Heroine",
    appleMusicUrl: "https://music.apple.com/gb/album/pure-heroine/1440818584",
    year: 2013,
    artwork: PHOTOS_VINYL.LORDE.PURE_HEROINE
  },
  {
    artist: MUSICIANS.ALLIE_X,
    title: "Super Sunset",
    artwork: PHOTOS_VINYL.ALLIE_X.SUPER_SUNSET,
    appleMusicUrl: "https://music.apple.com/gb/album/super-sunset/1421851140",
    year: 2018
  },
  {
    artist: MUSICIANS.ADELE,
    artwork: PHOTOS_VINYL.ADELE["19"],
    title: "19",
    appleMusicUrl: "https://music.apple.com/gb/album/19/269864356",
    year: 2008
  },

  {
    artist: MUSICIANS.KATE_NASH,
    title: "Made of Bricks",
    appleMusicUrl:
      "https://music.apple.com/gb/album/made-of-bricks-bonus-track-version/1440791847",
    artwork: PHOTOS_VINYL.KATE_NASH.MADE_OF_BRICKS,
    year: 2007
  },
  {
    artist: MUSICIANS.ARCTIC_MONKEYS,
    title: "Favourite Worst Nightmare",
    artwork: PHOTOS_VINYL.ARCTIC_MONKEYS.FAVOURITE_WORST_NIGHTMARE,
    appleMusicUrl:
      "https://music.apple.com/gb/album/favourite-worst-nightmare/251126923",
    year: 2007
  },
  {
    artist: MUSICIANS.LANA_DEL_REY,
    title: "Born to Die",
    artwork: PHOTOS_VINYL.LANA_DEL_REY.BORN_TO_DIE,
    appleMusicUrl: "https://music.apple.com/gb/album/born-to-die/1440809572",
    year: 2012
  },
  {
    artist: MUSICIANS.MUNA,
    title: "About U",
    appleMusicUrl: "https://music.apple.com/gb/album/about-u/1171832662",
    year: 2017,
    artwork: PHOTOS_VINYL.MUNA.ABOUT_U
  },
  {
    artist: MUSICIANS.HAIM,
    artwork: PHOTOS_VINYL.HAIM.WOMEN_IN_MUSIC_PT_III,
    title: "Women In Music Pt. III",
    appleMusicUrl:
      "https://music.apple.com/gb/album/women-in-music-pt-iii/1500020581",
    year: 2020
  },
  {
    artist: MUSICIANS["1975_THE"],
    title: "A Brief Inquiry Into Online Relationships",
    artwork: PHOTOS_VINYL["1975_THE"].A_BRIEF_INQUIRY_INTO_ONLINE_RELATIONSHIPS,
    appleMusicUrl:
      "https://music.apple.com/gb/album/a-brief-inquiry-into-online-relationships/1435546528",
    year: 2018
  },
  {
    artist: MUSICIANS.LEON,
    artwork: PHOTOS_VINYL.LEON.LEON,
    title: MUSICIANS.LEON.name,
    appleMusicUrl: "https://music.apple.com/gb/album/l%C3%A9on/1450257286",
    year: 2019
  }
]
  .sort((a: IVinylCard, b: IVinylCard) =>
    a.artist.name < b.artist.name ? 1 : -1
  )
  .sort((a: IVinylCard, b: IVinylCard) => (a.year < b.year ? 1 : -1));
