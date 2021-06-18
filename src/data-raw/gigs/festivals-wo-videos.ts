import {
  FRIENDS,
  FESTIVAL_TITLES,
  MUSICIANS,
  MUSIC_VENUES,
  TICKET_TYPES
} from "@constants";
import { PHOTOS } from "resources";

const {
  MUM,
  EMMA_CODRINGTON,
  CALLUM_BAILEY,
  LAURA_CAPECE_GALEOTA,
  LUKE_STERN,
  ALICE_RODER,
  CAITLIN_MCCAIG,
  MEGAN_BLACKBURN,
  SIAN_RODWAY_SMITH,
  LUKE_JONES,
  TONYA_FRANCE,
  DAN_SPARROW,
  DARREN_TAYLOR,
  AMY_BAGNI,
  ELLE_OLDROYD,
  ALEX_FAYE,
  BECKY_MILLS,
  GRACE_HULME,
  ELLIE_GURKIN,
  THOM_STEPHANAKIS,
  BETH_SPELLER,
  SARAH_WHITAKER,
  ASH_MORETON,
  SAM_BERRIE,
  LINDSAY_ASPINALL,
  NATALIE_LAMBERT,
  CHELSEA_CUNNINGHAM,
  CHLOE_WHITE,
  SONYA_PARDI,
  TOM_CHINDA_COUTTS,
  CHLOE_ANDERSON,
  MARIA_TAYLOR,
  RYAN_MILLS,
  FANNY_LINDQVIST,
  HANNA_FROGNER,
  JESS_SMITH,
  POOJA_DHIR,
  JERRY_EDWARDS
} = FRIENDS;

export const DECAYDANCE: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.DECAYDANCE,
  lineup: [
    [
      MUSICIANS.COBRA_STARSHIP,
      MUSICIANS.ACADEMY_IS_THE,
      MUSICIANS.GYM_CLASS_HEROES,
      MUSICIANS.PANIC_AT_THE_DISCO,
      MUSICIANS.FALL_OUT_BOY
    ]
  ],
  dates: [new Date("2007-08-22")],
  venue: MUSIC_VENUES.HAMMERSMITH_APOLLO,
  company: [MUM, EMMA_CODRINGTON, MEGAN_BLACKBURN]
};

export const WHP_2014_10: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.WAREHOUSE_PROJECT,
  lineup: [
    [
      MUSICIANS.JAX_JONES,
      MUSICIANS.DUKE_DUMONT,
      MUSICIANS.CYRIL_HAHN,
      MUSICIANS.FRIEND_WITHIN
    ]
  ],
  venue: MUSIC_VENUES.STORE_STREET,
  company: [TONYA_FRANCE],
  dates: [new Date("2014-10-04")]
};

export const WHP_2014_11_07: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.WAREHOUSE_PROJECT,
  lineup: [
    [
      MUSICIANS.KIDNAP,
      MUSICIANS.BONDAX,
      MUSICIANS.GORGON_CITY,
      MUSICIANS.REDLIGHT
    ]
  ],
  venue: MUSIC_VENUES.STORE_STREET,
  company: [AMY_BAGNI, ELLE_OLDROYD],
  dates: [new Date("2014-11-07")]
};

export const WHP_2014_11_15: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.WAREHOUSE_PROJECT,
  lineup: [
    [
      MUSICIANS.GEORGE_FITZGERALD,
      MUSICIANS.SKREAM,
      MUSICIANS.PAUL_WOOLFORD,
      MUSICIANS.GREEN_VELVET
    ]
  ],
  venue: MUSIC_VENUES.STORE_STREET,
  company: [ALEX_FAYE],
  dates: [new Date("2014-11-15")]
};

export const WHP_2014_12: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.WAREHOUSE_PROJECT,
  lineup: [[MUSICIANS.MIDLAND, MUSICIANS.JOY_ORBISON, MUSICIANS.DUSKY]],
  venue: MUSIC_VENUES.STORE_STREET,
  company: [EMMA_CODRINGTON, BECKY_MILLS, NATALIE_LAMBERT],
  dates: [new Date("2014-12-06")]
};

export const PARKLIFE_2014: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.PARKLIFE,
  lineup: [
    [
      MUSICIANS.FOXES,
      MUSICIANS.ROUTE_94,
      MUSICIANS.REDLIGHT,
      MUSICIANS.BREACH,
      MUSICIANS.RUDIMENTAL
    ],
    [
      MUSICIANS.ELLA_EYRE,
      MUSICIANS.CLEAN_BANDIT,
      MUSICIANS.SAM_SMITH,
      MUSICIANS.LONDON_GRAMMAR,
      MUSICIANS.BASTILLE,
      MUSICIANS.DISCLOSURE
    ]
  ],
  venue: MUSIC_VENUES.HEATON_PARK,
  company: [JESS_SMITH, POOJA_DHIR, TONYA_FRANCE],
  dates: [new Date("2014-06-07"), new Date("2014-06-08")]
};

export const TRANSMISSION_2015_02_07: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.TRANSMISSION,
  lineup: [[MUSICIANS.TEN_WALLS, MUSICIANS.DUSKY, MUSICIANS.YOUSEF]],
  venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
  company: [CHLOE_WHITE, AMY_BAGNI, BETH_SPELLER],
  dates: [new Date("2015-02-07")]
};

export const DEFECTED_BRISTOL: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.DEFECTED_BRISTOL,
  lineup: [[MUSICIANS.MK]],
  venue: MUSIC_VENUES.MOTION,
  dates: [new Date("2016-07-30")],
  company: [CHELSEA_CUNNINGHAM, SARAH_WHITAKER]
};

export const TRIBAL_SESSIONS: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.TRIBAL_SESSIONS,
  lineup: [[MUSICIANS.JOSH_BUTLER, MUSICIANS.BONTAN, MUSICIANS.GREEN_VELVET]],
  venue: MUSIC_VENUES.SANKEYS,
  company: [TONYA_FRANCE, ALEX_FAYE],
  dates: [new Date("2015-02-13")]
};

export const TRANSMISSION_2015_02_27: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.TRANSMISSION,
  lineup: [[MUSICIANS.JAX_JONES, MUSICIANS.DUKE_DUMONT, MUSICIANS.BLONDE]],
  venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
  company: [BETH_SPELLER],
  dates: [new Date("2015-02-27")]
};

export const TRANSMISSION_2015_04: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.TRANSMISSION,
  lineup: [[MUSICIANS.EATS_EVERYTHING, MUSICIANS.CARL_COX]],
  venue: MUSIC_VENUES.ALBERT_HALL_MANCHESTER,
  company: [SONYA_PARDI, TONYA_FRANCE, ALEX_FAYE],
  dates: [new Date("2015-04-03")]
};

export const PARKLIFE_2015: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.PARKLIFE,
  lineup: [
    [
      MUSICIANS.BONDAX,
      MUSICIANS.JUSTIN_MARTIN,
      MUSICIANS.JULIO_BASHMORE,
      MUSICIANS.TENSNAKE,
      MUSICIANS.JAMES_BAY,
      MUSICIANS.MK
    ],
    [
      MUSICIANS.DANIEL_AVERY,
      MUSICIANS.BAAUER,
      MUSICIANS.DUSKY,
      MUSICIANS.DAVID_RODIGAN,
      MUSICIANS.GEORGE_FITZGERALD,
      MUSICIANS.KAYTRANADA,
      MUSICIANS.TEN_WALLS
    ]
  ],
  venue: MUSIC_VENUES.HEATON_PARK,
  company: [SONYA_PARDI, TONYA_FRANCE, AMY_BAGNI, ELLE_OLDROYD, CHLOE_WHITE],
  dates: [new Date("2015-06-06"), new Date("2015-06-07")]
};

export const GLASTONBURY_2015: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.GLASTONBURY,
  lineup: [
    [
      MUSICIANS.JAMES_BAY,
      MUSICIANS.MARY_J_BLIGE,
      MUSICIANS.SBTRKT,
      MUSICIANS.CARIBOU,
      MUSICIANS.FLORENCE_AND_THE_MACHINE,
      MUSICIANS.MACEO_PLEX,
      MUSICIANS.DUSKY,
      MUSICIANS.SKREAM
    ],
    [
      MUSICIANS.GEORGE_EZRA,
      MUSICIANS.YEARS_AND_YEARS,
      MUSICIANS.JESSIE_WARE,
      MUSICIANS.BEN_HOWARD,
      MUSICIANS.KANYE_WEST,
      MUSICIANS.JAMIE_JONES,
      MUSICIANS.FOUR_TET
    ],
    [
      MUSICIANS.SMYTHS_THE,
      MUSICIANS.SOAK,
      MUSICIANS.SEINABO_SEY,
      MUSICIANS.CHARLI_XCX,
      MUSICIANS.GROOVE_ARMADA,
      MUSICIANS.JAMIE_T,
      MUSICIANS.CHEMICAL_BROTHERS_THE
    ]
  ],
  venue: MUSIC_VENUES.WORTHY_FARM,
  company: [
    TONYA_FRANCE,
    GRACE_HULME,
    ELLIE_GURKIN,
    EMMA_CODRINGTON,
    THOM_STEPHANAKIS,
    FANNY_LINDQVIST,
    HANNA_FROGNER
  ],
  dates: [
    new Date("2015-06-26"),
    new Date("2015-06-27"),
    new Date("2015-06-28")
  ]
};

export const FABRIC_NYE: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.FABRIC_NYE,
  lineup: [[MUSICIANS.GEORGE_FITZGERALD, MUSICIANS.EATS_EVERYTHING]],
  venue: MUSIC_VENUES.FABRIC,
  company: [
    TONYA_FRANCE,
    SONYA_PARDI,
    FANNY_LINDQVIST,
    HANNA_FROGNER,
    LAURA_CAPECE_GALEOTA
  ],
  dates: [new Date("2015-12-31")]
};

export const BRIGHTON_PRIDE_2017: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.BRIGHTON_PRIDE,
  lineup: [[MUSICIANS.BECKY_MILLS_HILL, MUSICIANS.YEARS_AND_YEARS]],
  dates: [new Date("2017-08-05")],
  venue: MUSIC_VENUES.PRESTON_PARK,
  company: [
    LUKE_STERN,
    TONYA_FRANCE,
    SONYA_PARDI,
    TOM_CHINDA_COUTTS,
    RYAN_MILLS,
    LAURA_CAPECE_GALEOTA
  ]
};

export const LOVEBOX_2017: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.LOVEBOX,
  lineup: [
    [
      MUSICIANS.JOE_GODDARD,
      MUSICIANS.RUFUS_DU_SOL,
      MUSICIANS.BICEP,
      MUSICIANS.JAMIE_XX,
      MUSICIANS.EATS_EVERYTHING,
      MUSICIANS.FRANK_OCEAN
    ]
  ],
  dates: [new Date("2017-07-14")],
  venue: MUSIC_VENUES.VICTORIA_PARK,
  company: [
    TONYA_FRANCE,
    TOM_CHINDA_COUTTS,
    RYAN_MILLS,
    CAITLIN_MCCAIG,
    ALICE_RODER
  ]
};

export const NOTION_SUMMER_PARTY: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.NOTION_SUMMER_PARTY,
  lineup: [
    [
      MUSICIANS.M_0,
      MUSICIANS.BONDAX,
      MUSICIANS.RITON,
      MUSICIANS.KAH_LO,
      MUSICIANS.ANNE_MARIE,
      MUSICIANS.MO
    ]
  ],
  venue: MUSIC_VENUES.TROXY,
  dates: [new Date("2018-07-27")],
  company: [LUKE_JONES]
};

export const BRIGHTON_PRIDE_2018: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.BRIGHTON_PRIDE,
  lineup: [[MUSICIANS.BRITNEY_SPEARS]],
  venue: MUSIC_VENUES.PRESTON_PARK,
  dates: [new Date("2018-08-04")],
  company: [
    TONYA_FRANCE,
    SONYA_PARDI,
    TOM_CHINDA_COUTTS,
    RYAN_MILLS,
    SIAN_RODWAY_SMITH
  ]
};

export const MANCHESTER_PRIDE_2019: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.MANCHESTER_PRIDE,
  lineup: [
    [
      MUSICIANS.BECKY_MILLS_HILL,
      MUSICIANS.BANANARAMA,
      MUSICIANS.TULISA,
      MUSICIANS.CHERYL,
      MUSICIANS.ARIANA_GRANDE
    ]
  ],
  venue: MUSIC_VENUES.MAYFIELD_DEPOT,
  dates: [new Date("2019-08-25")],
  company: [
    DAN_SPARROW,
    MARIA_TAYLOR,
    ASH_MORETON,
    SAM_BERRIE,
    CALLUM_BAILEY,
    LINDSAY_ASPINALL
  ]
};

export const CHINGFEST: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.CHINGFEST,
  lineup: [[MUSICIANS.INCOGNITO, MUSICIANS.NAO]],
  venue: MUSIC_VENUES.RIDGEWAY_PARK,
  dates: [new Date("2019-08-31")],
  company: [DARREN_TAYLOR]
};

export const HOMOBLOC_2019: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.HOMOBLOC,
  lineup: [[MUSICIANS.ROMY, MUSICIANS.ROBYN, MUSICIANS.HORSE_MEAT_DISCO]],
  venue: MUSIC_VENUES.MAYFIELD_DEPOT,
  dates: [new Date("2019-11-09")],
  company: [DAN_SPARROW, MARIA_TAYLOR]
};

export const HOMOBLOC_2021: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.HOMOBLOC,
  lineup: [[]],
  venue: MUSIC_VENUES.MAYFIELD_DEPOT,
  dates: [new Date("2021-11-06")],
  company: [DAN_SPARROW, MARIA_TAYLOR, CALLUM_BAILEY]
};

export const AREA_10_NYE: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.AREA_10_NYE,
  lineup: [[MUSICIANS.MK]],
  photos: PHOTOS.GIGS.MK_AREA_10_NYE,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2019-12-31")],
  company: [TOM_CHINDA_COUTTS, TONYA_FRANCE, SONYA_PARDI]
};

export const MIGHTY_HOOPLA_2021: IFestivalWithoutVideo = {
  title: FESTIVAL_TITLES.MIGHTY_HOOPLA,
  venue: MUSIC_VENUES.BROCKWELL_PARK,
  dates: [new Date("2021-09-04")],
  lineup: [[]],
  company: [
    TONYA_FRANCE,
    MARIA_TAYLOR,
    TOM_CHINDA_COUTTS,
    RYAN_MILLS,
    DARREN_TAYLOR,
    CHLOE_ANDERSON,
    JERRY_EDWARDS,
    SIAN_RODWAY_SMITH,
    CAITLIN_MCCAIG,
    DAN_SPARROW
  ],
  ticketType: TICKET_TYPES.KABOODLE_ETICKET
};
