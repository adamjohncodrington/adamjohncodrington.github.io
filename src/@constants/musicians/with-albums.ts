import {
  Jpg_1975_BriefInquiry,
  Jpg_Adele_19,
  Jpg_AllieX_SuperSunset,
  Jpg_Banks_III,
  Jpg_Haim_WIMPIII,
  Jpg_Leon_Leon,
  Jpg_FkaTwigs_Magdalene,
  Jpg_Muna_AU,
  Jpg_TaylorSwift_1989,
  Jpg_Lorde_PH,
  Jpg_LanaDelRey_BTD,
  Jpg_Marina_EH,
  Jpg_Florence_Lungs,
  Jpg_ArcticMonkeys_FWN,
  Jpg_AmyWinehouse_BTB,
  Jpg_KateNash_MOB,
  Jpg_CharliXCX_HIFN,
  Jpg_DuaLipa_FN,
  Jpg_LennonStella_TTO,
  Jpg_ArianaGrande_TUN,
  Jpg_CarolinePolachek_Pang,
  Jpg_KimPetras_Clarity,
  Jpg_GeorgeFitzgerald_ATMB,
  Jpg_JonHopkins_Singularity,
  Jpg_Lany_MN,
  Jpg_Sophie_OOEPUI,
  Jpg_Pvris_AWKOHAWNOH,
  Jpg_Beyonce_Lemonade,
  Jpg_Tourist_U,
  Jpg_Grimes_ArtAngels,
  Jpg_RynWeaver_Fool,
  Jpg_BenHoward_EK,
  Jpg_LadyGaga_BTW,
  Jpg_Rihanna_RR,
  Jpg_Lissie_CAT,
  Jpg_KatyPerry_OOTB,
  Jpg_Panic_AFYCSO,
  Jpg_Paramore_Riot,
  Jpg_SufajnStevens_CAL,
  Jpg_NataliaKills_P,
  Jpg_Lane8_Rise,
  Jpg_Caribou_OurLove,
  Jpg_EllieGoulding_Halcyon,
  Jpg_TroyeSivan_IAD
} from "resources";

export const ALLIE_X: IMusician = {
  name: "Allie X",
  favourite: true,
  albums: [
    {
      title: "Super Sunset",
      artwork: Jpg_AllieX_SuperSunset,
      appleMusicUrl: "https://music.apple.com/gb/album/super-sunset/1421851140",
      year: 2018,
      purchased: true,
      signed: true
    }
  ]
};

export const BANKS: IMusician = {
  name: "Banks",
  favourite: true,
  albums: [
    {
      appleMusicUrl: "https://music.apple.com/gb/album/iii/1467547466",
      title: "III",
      artwork: Jpg_Banks_III,
      year: 2019,
      purchased: true,
      signed: true
    }
  ]
};

export const HAIM: IMusician = {
  name: "HAIM",
  albums: [
    {
      title: "Women In Music Pt. III",
      appleMusicUrl:
        "https://music.apple.com/gb/album/women-in-music-pt-iii/1500020581",
      year: 2020,
      purchased: true,
      artwork: Jpg_Haim_WIMPIII,
      signed: true
    }
  ]
};

const leon: string = "LÉON";
export const LEON: IMusician = {
  name: leon,
  favourite: true,
  albums: [
    {
      title: leon,
      appleMusicUrl: "https://music.apple.com/gb/album/l%C3%A9on/1450257286",
      year: 2019,
      artwork: Jpg_Leon_Leon,
      purchased: true
    }
  ]
};

export const FKA_TWIGS: IMusician = {
  name: "FKA twigs",
  favourite: true,
  albums: [
    {
      title: "Magdalene",
      appleMusicUrl: "https://music.apple.com/gb/album/magdalene/1477652618",
      year: 2019,
      artwork: Jpg_FkaTwigs_Magdalene,
      purchased: true
    }
  ]
};

export const THE_1975: IMusician = {
  name: "1975, The",
  favourite: true,
  albums: [
    {
      title: "A Brief Inquiry Into Online Relationships",
      artwork: Jpg_1975_BriefInquiry,
      appleMusicUrl:
        "https://music.apple.com/gb/album/a-brief-inquiry-into-online-relationships/1435546528",
      year: 2018,
      purchased: true
    }
  ]
};

export const MUNA: IMusician = {
  name: "MUNA",
  favourite: true,
  albums: [
    {
      title: "About U",
      artwork: Jpg_Muna_AU,
      appleMusicUrl: "https://music.apple.com/gb/album/about-u/1171832662",
      year: 2017,
      purchased: true
    }
  ]
};

export const TAYLOR_SWIFT: IMusician = {
  name: "Taylor Swift",
  favourite: true,
  albums: [
    {
      title: "1989",
      artwork: Jpg_TaylorSwift_1989,
      year: 2014,
      appleMusicUrl: "https://music.apple.com/gb/album/1989/1445888258",
      purchased: true
    }
  ]
};

export const LORDE: IMusician = {
  name: "Lorde",
  favourite: true,
  albums: [
    {
      title: "Pure Heroine",
      appleMusicUrl: "https://music.apple.com/gb/album/pure-heroine/1440818584",
      year: 2013,
      artwork: Jpg_Lorde_PH,
      purchased: true
    }
  ]
};

export const LANA_DEL_REY: IMusician = {
  name: "Lana Del Rey",
  favourite: true,
  albums: [
    {
      title: "Born to Die",
      appleMusicUrl: "https://music.apple.com/gb/album/born-to-die/1440809572",
      year: 2012,
      artwork: Jpg_LanaDelRey_BTD,
      purchased: true
    }
  ]
};

export const MARINA: IMusician = {
  name: "MARINA",
  previousStageName: { name: "Marina and the Diamonds", yearDeprecated: 2019 },
  albums: [
    {
      title: "Electra Heart",
      purchased: true,
      artwork: Jpg_Marina_EH,
      appleMusicUrl: "https://music.apple.com/gb/album/electra-heart/612448612",
      year: 2012
    }
  ]
};

export const FLORENCE_AND_THE_MACHINE: IMusician = {
  name: "Florence + the Machine",
  favourite: true,
  albums: [
    {
      title: "Lungs",
      artwork: Jpg_Florence_Lungs,
      purchased: true,
      appleMusicUrl: "https://music.apple.com/gb/album/lungs/1440982056",
      year: 2009
    }
  ]
};

export const ADELE: IMusician = {
  name: "Adele",
  albums: [
    {
      title: "19",
      artwork: Jpg_Adele_19,
      appleMusicUrl: "https://music.apple.com/gb/album/19/269864356",
      year: 2008,
      purchased: true
    }
  ]
};

export const ARCTIC_MONKEYS: IMusician = {
  name: "Arctic Monkeys",
  albums: [
    {
      title: "Favourite Worst Nightmare",
      purchased: true,
      appleMusicUrl:
        "https://music.apple.com/gb/album/favourite-worst-nightmare/251126923",
      year: 2007,
      artwork: Jpg_ArcticMonkeys_FWN
    }
  ]
};

export const AMY_WINEHOUSE: IMusician = {
  name: "Amy Winehouse",
  noLongerExists: true,
  albums: [
    {
      title: "Back to Black",
      artwork: Jpg_AmyWinehouse_BTB,
      appleMusicUrl:
        "https://music.apple.com/gb/album/back-to-black/1006515289",
      year: 2006,
      purchased: true
    }
  ]
};

export const KATE_NASH: IMusician = {
  name: "Kate Nash",
  favourite: true,
  albums: [
    {
      title: "Made of Bricks",
      artwork: Jpg_KateNash_MOB,
      appleMusicUrl:
        "https://music.apple.com/gb/album/made-of-bricks-bonus-track-version/1440791847",
      year: 2007,
      purchased: true
    }
  ]
};

export const CHARLI_XCX: IMusician = {
  name: "Charli XCX",
  favourite: true,
  albums: [
    {
      title: "how i'm feeling now",
      year: 2020,
      artwork: Jpg_CharliXCX_HIFN,
      appleMusicUrl:
        "https://music.apple.com/gb/album/how-im-feeling-now/1513162098"
    }
  ]
};

export const DUA_LIPA: IMusician = {
  name: "Dua Lipa",
  albums: [
    {
      title: "Future Nostalgia",
      artwork: Jpg_DuaLipa_FN,
      appleMusicUrl:
        "https://music.apple.com/gb/album/future-nostalgia/1495799403",
      year: 2020
    }
  ]
};

export const LENNON_STELLA: IMusician = {
  name: "Lennon Stella",
  albums: [
    {
      title: "Three. Two. One.",
      artwork: Jpg_LennonStella_TTO,
      appleMusicUrl:
        "https://music.apple.com/gb/album/three-two-one/1501262697",
      year: 2020
    }
  ]
};

export const ARIANA_GRANDE: IMusician = {
  name: "Ariana Grande",
  albums: [
    {
      title: "thank u, next",
      artwork: Jpg_ArianaGrande_TUN,
      appleMusicUrl: "https://music.apple.com/gb/album/thank-u-next/1450330588",
      year: 2019
    }
  ]
};

export const CAROLINE_POLACHEK: IMusician = {
  name: "Caroline Polachek",
  favourite: true,
  albums: [
    {
      title: "Pang",
      artwork: Jpg_CarolinePolachek_Pang,
      appleMusicUrl: "https://music.apple.com/gb/album/pang/1482421639",
      year: 2019,
      purchased: true
    }
  ]
};

export const KIM_PETRAS: IMusician = {
  name: "Kim Petras",
  favourite: true,
  albums: [
    {
      title: "Clarity",
      artwork: Jpg_KimPetras_Clarity,
      year: 2019,
      appleMusicUrl: "https://music.apple.com/gb/album/clarity/1469298192",
      purchased: true
    }
  ]
};

export const GEORGE_FITZGERALD: IMusician = {
  name: "George FitzGerald",
  albums: [
    {
      title: "All That Must Be",
      artwork: Jpg_GeorgeFitzgerald_ATMB,
      appleMusicUrl:
        "https://music.apple.com/gb/album/all-that-must-be/1322664114",
      year: 2018
    }
  ]
};

export const JON_HOPKINS: IMusician = {
  name: "Jon Hopkins",
  favourite: true,
  albums: [
    {
      title: "Singularity",
      artwork: Jpg_JonHopkins_Singularity,
      appleMusicUrl: "https://music.apple.com/gb/album/singularity/1349736537",
      year: 2018
    }
  ]
};

export const LANY: IMusician = {
  name: "LANY",
  albums: [
    {
      title: "Malibu Nights",
      artwork: Jpg_Lany_MN,
      appleMusicUrl:
        "https://music.apple.com/gb/album/malibu-nights/1435482172",
      year: 2018
    }
  ]
};

export const SOPHIE: IMusician = {
  name: "SOPHIE",
  favourite: true,
  albums: [
    {
      title: "Oil of Every Pearl's Un-Insides",
      artwork: Jpg_Sophie_OOEPUI,
      appleMusicUrl:
        "https://music.apple.com/gb/album/oil-of-every-pearls-un-insides/1395045797",
      year: 2018
    }
  ]
};

export const TROYE_SIVAN: IMusician = {
  name: "Troye Sivan",
  favourite: true,
  albums: [
    // {
    //   title: "Bloom",
    //   artwork: Jpg_TroyeSivan_Bloom,
    //   appleMusicUrl: "https://music.apple.com/gb/album/bloom/1396292262",
    //   year: 2018
    // },
    {
      title: "In a Dream",
      artwork: Jpg_TroyeSivan_IAD,
      appleMusicUrl:
        "https://music.apple.com/gb/album/in-a-dream-ep/1523003841",
      year: 2020,
      signed: true,
      purchased: true
    }
  ]
};

export const PVRIS: IMusician = {
  name: "PVRIS",
  albums: [
    {
      title: "All We Know of Heaven, All We Need of Hell",
      artwork: Jpg_Pvris_AWKOHAWNOH,
      appleMusicUrl:
        "https://music.apple.com/gb/album/all-we-know-of-heaven-all-we-need-of-hell/1227528237",
      year: 2017,
      purchased: true,
      signed: true
    }
  ]
};

export const BEYONCE: IMusician = {
  name: "Beyoncé",
  albums: [
    {
      title: "Lemonade",
      artwork: Jpg_Beyonce_Lemonade,
      appleMusicUrl: "https://music.apple.com/gb/album/lemonade/1460430561",
      year: 2016
    }
  ]
};

export const TOURIST: IMusician = {
  name: "Tourist",
  albums: [
    {
      appleMusicUrl: "https://music.apple.com/gb/album/u/1086160489",
      title: "U",
      artwork: Jpg_Tourist_U,
      year: 2016
    }
  ]
};

export const GRIMES: IMusician = {
  name: "Grimes",
  favourite: true,
  albums: [
    {
      title: "Art Angels",
      artwork: Jpg_Grimes_ArtAngels,
      appleMusicUrl: "https://music.apple.com/gb/album/art-angels/1051022913",
      year: 2015,
      purchased: true
    }
  ]
};

export const RYN_WEAVER: IMusician = {
  name: "Ryn Weaver",
  favourite: true,
  albums: [
    {
      title: "The Fool",
      artwork: Jpg_RynWeaver_Fool,
      year: 2015,
      appleMusicUrl: "https://music.apple.com/gb/album/the-fool/1442781012"
    }
  ]
};

export const ELLIE_GOULDING: IMusician = {
  name: "Ellie Goulding",
  albums: [
    {
      artwork: Jpg_EllieGoulding_Halcyon,
      title: "Halcyon",
      appleMusicUrl: "https://music.apple.com/gb/album/halcyon/1442722757",
      year: 2012
    }
  ]
};

export const BEN_HOWARD: IMusician = {
  name: "Ben Howard",
  albums: [
    {
      artwork: Jpg_BenHoward_EK,
      appleMusicUrl:
        "https://music.apple.com/gb/album/every-kingdom/1440804636",
      title: "Every Kingdom",
      year: 2011
    }
  ]
};

export const LADY_GAGA: IMusician = {
  name: "Lady Gaga",
  favourite: true,
  albums: [
    {
      artwork: Jpg_LadyGaga_BTW,
      title: "Born This Way",
      appleMusicUrl:
        "https://music.apple.com/gb/album/born-this-way-special-edition/1440857161",
      year: 2011
    }
  ]
};

export const RIHANNA: IMusician = {
  name: "Rihanna",
  albums: [
    {
      artwork: Jpg_Rihanna_RR,
      title: "Rated R",
      appleMusicUrl: "https://music.apple.com/gb/album/rated-r/338914834",
      year: 2009
    }
  ]
};

export const LISSIE: IMusician = {
  name: "Lissie",
  favourite: true,
  albums: [
    {
      artwork: Jpg_Lissie_CAT,
      appleMusicUrl:
        "https://music.apple.com/gb/album/catching-a-tiger/372594767",
      title: "Catching a Tiger",
      year: 2010
    }
  ]
};

export const KATY_PERRY: IMusician = {
  name: "Katy Perry",
  albums: [
    {
      artwork: Jpg_KatyPerry_OOTB,
      title: "One of the Boys",
      appleMusicUrl:
        "https://music.apple.com/gb/album/one-of-the-boys/715853053",
      year: 2008
    }
  ]
};

export const PANIC_AT_THE_DISCO: IMusician = {
  name: "Panic! At the Disco",
  albums: [
    {
      artwork: Jpg_Panic_AFYCSO,
      title: "A Fever You Can't Sweat Out",
      appleMusicUrl:
        "https://music.apple.com/gb/album/a-fever-you-cant-sweat-out/128167002",
      year: 2005
    }
  ]
};

export const PARAMORE: IMusician = {
  name: "Paramore",
  albums: [
    {
      artwork: Jpg_Paramore_Riot,
      title: "Riot!",
      appleMusicUrl: "https://music.apple.com/gb/album/riot/604804755",
      year: 2007
    }
  ]
};

export const SUFJAN_STEVENS: IMusician = {
  name: "Sufjan Stevens",
  albums: [
    {
      artwork: Jpg_SufajnStevens_CAL,
      appleMusicUrl: "https://music.apple.com/gb/album/carrie-lowell/955572616",
      title: "Carrie & Lowell",
      year: 2015,
      purchased: true
    }
  ]
};

export const NATALIA_KILLS: IMusician = {
  name: "Natalia Kills",
  favourite: true,
  noLongerExists: true,
  albums: [
    {
      artwork: Jpg_NataliaKills_P,
      title: "Perfectionist",
      year: 2011,
      appleMusicUrl: "https://music.apple.com/gb/album/perfectionist/1443164533"
    }
  ]
};

export const LANE_8: IMusician = {
  name: "Lane 8",
  albums: [
    {
      artwork: Jpg_Lane8_Rise,
      title: "Rise",
      appleMusicUrl: "https://music.apple.com/gb/album/rise/988732595",
      year: 2015
    }
  ]
};

export const CARIBOU: IMusician = {
  name: "Caribou",
  albums: [
    {
      artwork: Jpg_Caribou_OurLove,
      appleMusicUrl: "https://music.apple.com/gb/album/our-love/1276611236",
      title: "Our Love",
      year: 2014
    }
  ]
};
