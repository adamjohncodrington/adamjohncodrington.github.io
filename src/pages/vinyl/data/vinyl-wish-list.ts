import { MUSICIANS } from "@constants";
import { PHOTOS_VINYL } from "resources";

export const VINYL_WISH_LIST: Array<IVinylCard> = [
  {
    artist: MUSICIANS.ARIANA_GRANDE,
    title: "thank u, next",
    year: 2019,
    artwork: PHOTOS_VINYL.ARIANA_GRANDE.THANK_U_NEXT
  },
  {
    artist: MUSICIANS.CHARLI_XCX,
    title: "how i'm feeling now",
    year: 2020,
    artwork: PHOTOS_VINYL.CHARLI_XCX.HOW_IM_FEELING_NOW
  },
  {
    artist: MUSICIANS.DUA_LIPA,
    title: "Future Nostalgia",
    year: 2020,
    artwork: PHOTOS_VINYL.DUA_LIPA.FUTURE_NOSTALGIA
  },
  {
    artist: MUSICIANS.MARINA,
    title: "Electra Heart",
    year: 2012,
    artwork: PHOTOS_VINYL.MARINA.ELECTRA_HEART
  },
  {
    artist: MUSICIANS.BEYONCE,
    title: "Lemonade",
    artwork: PHOTOS_VINYL.BEYONCE.LEMONADE,
    year: 2016
  },
  {
    artist: MUSICIANS.JON_HOPKINS,
    title: "Singularity",
    year: 2018,
    artwork: PHOTOS_VINYL.JON_HOPKINS.SINGULARITY
  },
  {
    artist: MUSICIANS.TOURIST,
    title: "U",
    artwork: PHOTOS_VINYL.TOURIST.U,
    year: 2016
  },
  {
    artist: MUSICIANS.GEORGE_FITZGERALD,
    title: "All That Must Be",
    year: 2018,
    artwork: PHOTOS_VINYL.GEORGE_FITZGERALD.ALL_THAT_MUST_BE
  },
  {
    artist: MUSICIANS.LANE_8,
    title: "Rise",
    year: 2015,
    artwork: PHOTOS_VINYL.LANE_8.RISE
  },
  {
    artist: MUSICIANS.CARIBOU,
    artwork: PHOTOS_VINYL.CARIBOU.OUR_LOVE,
    title: "Our Love",
    year: 2014
  },
  {
    artist: MUSICIANS.ELLIE_GOULDING,
    title: "Halcyon",
    artwork: PHOTOS_VINYL.ELLIE_GOULDING.HALCYON,
    year: 2012
  },
  {
    artist: MUSICIANS.LANY,
    title: "Malibu Nights",
    year: 2018,
    artwork: PHOTOS_VINYL.LANY.MALIBU_NIGHTS
  },
  {
    artist: MUSICIANS.PANIC_AT_THE_DISCO,
    title: "A Fever You Can't Sweat Out",
    artwork: PHOTOS_VINYL.PANIC_AT_THE_DISCO.A_FEVER_YOU_CANT_SWEAT_OUT,
    year: 2005
  },
  {
    artist: MUSICIANS.LADY_GAGA,
    title: "Born This Way",
    artwork: PHOTOS_VINYL.LADY_GAGA.BORN_THIS_WAY,
    year: 2011
  },
  {
    artist: MUSICIANS.KATY_PERRY,
    title: "One of the Boys",
    artwork: PHOTOS_VINYL.KATY_PERRY.ONE_OF_THE_BOYS,
    year: 2008
  },
  {
    artist: MUSICIANS.PARAMORE,
    title: "Riot!",
    artwork: PHOTOS_VINYL.PARAMORE.RIOT,
    year: 2007
  },
  {
    artist: MUSICIANS.RIHANNA,
    title: "Rated R",
    artwork: PHOTOS_VINYL.RIHANNA.RATED_R,
    year: 2009
  },
  {
    artist: MUSICIANS.LISSIE,
    artwork: PHOTOS_VINYL.LISSIE.CATCHING_A_TIGER,
    title: "Catching a Tiger",
    year: 2010
  },
  {
    artist: MUSICIANS.TROYE_SIVAN,
    title: "Bloom",
    year: 2018,
    artwork: PHOTOS_VINYL.TROYE_SIVAN.BLOOM
  },
  {
    artist: MUSICIANS.BEN_HOWARD,
    artwork: PHOTOS_VINYL.BEN_HOWARD.EVERY_KINGDOM,
    title: "Every Kingdom",
    year: 2011
  },
  {
    artist: MUSICIANS.GRIMES,
    title: "Art Angels",
    artwork: PHOTOS_VINYL.GRIMES.ART_ANGELS,
    year: 2015
  },
  {
    artist: MUSICIANS.SUFJAN_STEVENS,
    artwork: PHOTOS_VINYL.SUFJAN_STEVENS.CARRIE_AND_LOWELL,
    title: "Carrie & Lowell",
    year: 2015
  },
  {
    artist: MUSICIANS.PVRIS,
    title: "All We Know of Heaven, All We Need of Hell",
    artwork: PHOTOS_VINYL.PVRIS.ALL_WE_KNOW_OF_HEAVEN_ALL_WE_NEED_OF_HELL,
    year: 2017
  }
]
  .sort((a: IVinylCard, b: IVinylCard) =>
    a.artist.name < b.artist.name ? 1 : -1
  )
  .sort((a: IVinylCard, b: IVinylCard) => (a.year < b.year ? 1 : -1));
