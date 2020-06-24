import { MUSICIANS } from "@constants";
import { PHOTOS_VINYL } from "resources";

export const VINYL_COLLECTION: Array<IVinylCard> = [
  {
    artist: MUSICIANS.TAYLOR_SWIFT,
    title: "1989",
    year: 2014,
    artwork: PHOTOS_VINYL.TAYLOR_SWIFT["1989"]
  },
  {
    artist: MUSICIANS.AMY_WINEHOUSE,
    title: "Back to Black",
    artwork: PHOTOS_VINYL.AMY_WINEHOUSE.BACK_TO_BLACK,
    year: 2006
  },
  {
    artist: MUSICIANS.FKA_TWIGS,
    title: "Magdalene",
    artwork: PHOTOS_VINYL.FKA_TWIGS.MAGDALENE,
    year: 2019
  },
  {
    artist: MUSICIANS.FLORENCE_AND_THE_MACHINE,
    title: "Lungs",
    artwork: PHOTOS_VINYL.FLORENCE_AND_THE_MACHINE.LUNGS,
    year: 2009
  },
  {
    artist: MUSICIANS.BANKS,
    artwork: PHOTOS_VINYL.BANKS.III,
    title: "III",
    year: 2019
  },
  {
    artist: MUSICIANS.LORDE,
    title: "Pure Heroine",
    year: 2013,
    artwork: PHOTOS_VINYL.LORDE.PURE_HEROINE
  },
  {
    artist: MUSICIANS.ALLIE_X,
    title: "Super Sunset",
    artwork: PHOTOS_VINYL.ALLIE_X.SUPER_SUNSET,
    year: 2018
  },
  {
    artist: MUSICIANS.ADELE,
    artwork: PHOTOS_VINYL.ADELE["19"],
    title: "19",
    year: 2008
  },

  {
    artist: MUSICIANS.KATE_NASH,
    title: "Made of Bricks",
    artwork: PHOTOS_VINYL.KATE_NASH.MADE_OF_BRICKS,
    year: 2007
  },
  {
    artist: MUSICIANS.ARCTIC_MONKEYS,
    title: "Favourite Worst Nightmare",
    artwork: PHOTOS_VINYL.ARCTIC_MONKEYS.FAVOURITE_WORST_NIGHTMARE,
    year: 2018
  },
  {
    artist: MUSICIANS.LANA_DEL_REY,
    title: "Born to Die",
    artwork: PHOTOS_VINYL.LANA_DEL_REY.BORN_TO_DIE,
    year: 2012
  },
  {
    artist: MUSICIANS.MUNA,
    title: "About U",
    year: 2013,
    artwork: PHOTOS_VINYL.MUNA.ABOUT_U
  },
  {
    artist: MUSICIANS.HAIM,
    artwork: PHOTOS_VINYL.HAIM.WOMEN_IN_MUSIC_PT_III,
    title: "Women In Music Pt. III",
    year: 2020
  },
  {
    artist: MUSICIANS["1975"],
    title: "A Brief Inquiry Into Online Relationships",
    artwork: PHOTOS_VINYL["1975"].A_BRIEF_INQUIRY_INTO_ONLINE_RELATIONSHIPS,
    year: 2018
  },
  {
    artist: MUSICIANS.LEON,
    artwork: PHOTOS_VINYL.LEON.LEON,
    title: MUSICIANS.LEON.name,
    year: 2019
  }
]
  .sort((a: IVinylCard, b: IVinylCard) =>
    a.artist.name < b.artist.name ? 1 : -1
  )
  .sort((a: IVinylCard, b: IVinylCard) => (a.year < b.year ? 1 : -1));
