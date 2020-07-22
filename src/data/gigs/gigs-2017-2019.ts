import { FRIENDS, MUSICIANS, MUSIC_VENUES } from "@constants";
import { VIDEOS } from "resources";

export const JONAS_BLUE: IGig = {
  headline: MUSICIANS.JONAS_BLUE,
  venue: MUSIC_VENUES.MINISTRY_OF_SOUND,
  dates: [new Date("2017-01-28")],
  company: [
    FRIENDS.ALICE_RODER,
    FRIENDS.TOM_CHINDA_COUTTS,
    FRIENDS.RYAN_MILLS,
    FRIENDS.LAURA_CAPECE_GALEOTA
  ]
};

export const LYVES: IGig = {
  headline: MUSICIANS.LYVES,
  venue: MUSIC_VENUES.SERVANT_JAZZ_QUARTERS,
  dates: [new Date("2017-02-20")],
  video: VIDEOS.GIGS.LYVES,
  company: []
};

export const DUSKY: IGig = {
  headline: MUSICIANS.DUSKY,
  venue: MUSIC_VENUES.ELECTRIC_BRIXTON,
  dates: [new Date("2017-02-24")],
  favourite: true,
  company: [
    FRIENDS.TONYA_FRANCE,
    FRIENDS.TOM_CHINDA_COUTTS,
    FRIENDS.CAITLIN_MCCAIG,
    FRIENDS.RYAN_MILLS
  ]
};

export const MARTIN_SOLVEIG: IGig = {
  headline: MUSICIANS.MARTIN_SOLVEIG,
  support: [MUSICIANS.JAX_JONES],
  dates: [new Date("2017-03-10")],
  venue: MUSIC_VENUES.EGG,
  company: [FRIENDS.TONYA_FRANCE]
};

export const BANKS_2017: IGig = {
  headline: MUSICIANS.BANKS,
  dates: [new Date("2017-03-13")],
  venue: MUSIC_VENUES.ROUNDHOUSE,
  video: VIDEOS.GIGS.BANKS_2017,
  company: [
    FRIENDS.BECKY_MILLS,
    FRIENDS.EMMA_CODRINGTON,
    FRIENDS.MEGAN_BLACKBURN
  ]
};

export const TOVE_LO: IGig = {
  headline: MUSICIANS.TOVE_LO,
  support: [MUSICIANS.BROODS],
  dates: [new Date("2017-03-17")],
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  company: [FRIENDS.DAN_SPARROW],
  video: VIDEOS.GIGS.TOVE_LO
};

export const MUNA_2017: IGig = {
  headline: MUSICIANS.MUNA,
  dates: [new Date("2017-03-28")],
  video: VIDEOS.GIGS.MUNA_2017,
  venue: MUSIC_VENUES.HOXTON_SQUARE_BAR_AND_KITCHEN,
  company: [FRIENDS.LUKE_STERN],
  favourite: true
};

export const JORJA_SMITH: IGig = {
  headline: MUSICIANS.JORJA_SMITH,
  video: VIDEOS.GIGS.JORJA_SMITH,
  dates: [new Date("2017-04-03")],
  venue: MUSIC_VENUES.VILLAGE_UNDERGROUND,
  company: [FRIENDS.LUKE_STERN]
};

export const VERITE: IGig = {
  headline: MUSICIANS.VERITE,
  video: VIDEOS.GIGS.VERITE,
  dates: [new Date("2017-04-06")],
  venue: MUSIC_VENUES.ELECTROWERKZ,
  company: [FRIENDS.TONYA_FRANCE]
};

export const FRANCES: IGig = {
  headline: MUSICIANS.FRANCES,
  video: VIDEOS.GIGS.FRANCES,
  dates: [new Date("2017-04-07")],
  venue: MUSIC_VENUES.INSTITUTE_BIRMINGHAM,
  company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
};

export const JONES: IGig = {
  headline: MUSICIANS.JONES,
  dates: [new Date("2017-05-03")],
  //youtubeId: "7WRudCbbXl8",
  venue: MUSIC_VENUES.HOXTON_HALL,
  company: [FRIENDS.LUKE_STERN]
};

export const BETSY: IGig = {
  headline: MUSICIANS.BETSY,
  //youtubeId: "3Tri20SZIyw",
  dates: [new Date("2017-05-15")],
  venue: MUSIC_VENUES.MOTH_CLUB,
  company: [FRIENDS.LUKE_STERN]
};

export const ALMA: IGig = {
  headline: MUSICIANS.ALMA,
  dates: [new Date("2017-05-16")],
  venue: MUSIC_VENUES.OSLO_HACKNEY,
  //youtubeId: "swBApwCoEGY",
  company: [FRIENDS.LUKE_STERN]
};

export const BETTY_WHO: IGig = {
  headline: MUSICIANS.BETTY_WHO,
  dates: [new Date("2017-05-17")],
  //youtubeId: "gzccsq6FR7A",
  venue: MUSIC_VENUES.ZIGFRID_VON_UNDERBELLY,
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const PARAMORE_2017: IGig = {
  headline: MUSICIANS.PARAMORE,
  //youtubeId: "4yCEwRyXc6s",
  dates: [new Date("2017-06-19")],
  venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
  company: [FRIENDS.LUKE_STERN],
  favourite: true
};

export const SIGRID: IGig = {
  headline: MUSICIANS.SIGRID,
  dates: [new Date("2017-09-13")],
  venue: MUSIC_VENUES.SCALA,
  //youtubeId: "o0WcLEYO3EA",
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const ALLIE_X: IGig = {
  headline: MUSICIANS.ALLIE_X,
  dates: [new Date("2017-09-18")],
  venue: MUSIC_VENUES.OMEARA,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  //youtubeId: "jY1TrVD966s",
  favourite: true
};

export const LORDE_2017: IGig = {
  headline: MUSICIANS.LORDE,
  dates: [new Date("2017-09-27")],
  //youtubeId: "UTWTPj2AwIE",
  favourite: true,
  venue: MUSIC_VENUES.ALEXANDRA_PALACE,
  company: [FRIENDS.LUKE_STERN, FRIENDS.CAITLIN_MCCAIG, FRIENDS.CAITY_DALBY]
};

export const MURA_MASA: IGig = {
  headline: MUSICIANS.MURA_MASA,
  dates: [new Date("2017-10-19")],
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  //youtubeId: "lP5PXTTMRuY",
  company: [FRIENDS.LUKE_STERN]
};

export const FREYA_RIDINGS: IGig = {
  headline: MUSICIANS.FREYA_RIDINGS,
  //youtubeId: "PqEYdOy4ozI",
  dates: [new Date("2017-10-26")],
  venue: MUSIC_VENUES.ST_GILES_IN_THE_FIELD,
  company: [FRIENDS.TONYA_FRANCE]
};

export const PVRIS: IGig = {
  headline: MUSICIANS.PVRIS,
  //youtubeId: "h3YCpEnU-NI",
  dates: [new Date("2017-11-30")],
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  company: [FRIENDS.LUKE_STERN]
};

export const KYGO: IGig = {
  headline: MUSICIANS.KYGO,
  support: [MUSICIANS.GRYFFIN, MUSICIANS.SEEB],
  venue: MUSIC_VENUES.O2_THE,
  dates: [new Date("2018-02-25")],
  //youtubeId: "59OAEOL05dw",
  company: [FRIENDS.TONYA_FRANCE]
};

export const CODE_THE: IGig = {
  headline: MUSICIANS.CODE_THE,
  venue: MUSIC_VENUES.CORSICA_STUDIOS,
  dates: [new Date("2018-03-07")],
  //youtubeId: "xSS9YiCzqWw",
  company: [FRIENDS.JERRY_EDWARDS, FRIENDS.JAMIE_HALKET, FRIENDS.DOM_COYNE]
};

export const GEORGE_FTIZGERALD: IGig = {
  headline: MUSICIANS.GEORGE_FITZGERALD,
  venue: MUSIC_VENUES.ISLINGTON_ASSEMBLY_HALL,
  //youtubeId: "cGQD-nAo4Vc",
  dates: [new Date("2018-03-27")],
  company: [FRIENDS.TONYA_FRANCE]
};

export const AQUILO: IGig = {
  headline: MUSICIANS.AQUILO,
  venue: MUSIC_VENUES.OVAL_SPACE,
  dates: [new Date("2018-04-19")],
  //youtubeId: "ts7L_aQBvbQ",
  company: [FRIENDS.JAMIE_HALKET]
};

export const TWO_FEET: IGig = {
  headline: MUSICIANS.TWO_FEET,
  venue: MUSIC_VENUES.ELECTROWERKZ,
  //youtubeId: "EVP4BbbcFxE",
  dates: [new Date("2018-05-24")],
  company: [FRIENDS.JERRY_EDWARDS]
};

export const KIM_PETRAS_2018: IGig = {
  headline: MUSICIANS.KIM_PETRAS,
  venue: MUSIC_VENUES.COURTYARD_THEATRE,
  dates: [new Date("2018-05-25")],
  company: [FRIENDS.JERRY_EDWARDS],
  //youtubeId: "hks5LRHlgLE",
  favourite: true
};

export const SOFI_TUKKER: IGig = {
  headline: MUSICIANS.SOFI_TUKKER,
  venue: MUSIC_VENUES.KOKO,
  dates: [new Date("2018-09-17")],
  company: [FRIENDS.TONYA_FRANCE]
};

export const HAIM_2018: IGig = {
  headline: MUSICIANS.HAIM,
  support: [MUSICIANS.MAGGIE_ROGERS],
  venue: MUSIC_VENUES.ALEXANDRA_PALACE,
  dates: [new Date("2018-06-15")],
  company: [
    FRIENDS.EMMA_CODRINGTON,
    FRIENDS.BECKY_MILLS,
    FRIENDS.CAITLIN_MCCAIG
  ]
};

export const TAYLOR_SWIFT_2018: IGig = {
  headline: MUSICIANS.TAYLOR_SWIFT,
  support: [MUSICIANS.CHARLI_XCX, MUSICIANS.CAMILA_CABELLO],
  venue: MUSIC_VENUES.WEMBLEY_STADIUM,
  dates: [new Date("2018-06-22")],
  company: [FRIENDS.DAN_SPARROW],
  favourite: true
};

export const LAUV_2018: IGig = {
  headline: MUSICIANS.LAUV,
  venue: MUSIC_VENUES.KOKO,
  dates: [new Date("2018-09-18")],
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
};

export const RALPH_2018: IGig = {
  headline: MUSICIANS.RALPH,
  venue: MUSIC_VENUES.OLD_BLUE_LAST,
  dates: [new Date("2018-10-15")],
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const RAINBOW_KITTEN_SURPRISE: IGig = {
  headline: MUSICIANS.RAINBOW_KITTEN_SURPRISE,
  venue: MUSIC_VENUES.HEAVEN,
  dates: [new Date("2018-10-31")],
  company: [FRIENDS.JAMIE_HALKET]
};

export const LYKKE_LI_2018: IGig = {
  headline: MUSICIANS.LYKKE_LI,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2018-11-04")],
  company: [FRIENDS.EMMA_CODRINGTON],
  favourite: true
};

export const FLORENCE_2018: IGig = {
  headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
  venue: MUSIC_VENUES.O2_THE,
  dates: [new Date("2018-11-21")],
  company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN]
};

export const YOU_ME_AT_SIX_2018: IGig = {
  headline: MUSICIANS.YOU_ME_AT_SIX,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2018-12-03")],
  company: [FRIENDS.EMMA_CODRINGTON]
};

export const MAGGIE_ROGERS: IGig = {
  headline: MUSICIANS.MAGGIE_ROGERS,
  video: VIDEOS.GIGS.MAGGIE_ROGERS,
  support: [MUSICIANS.MALLRAT],
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2019-02-19")],
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const TROYE_SIVAN: IGig = {
  headline: MUSICIANS.TROYE_SIVAN,
  support: [MUSICIANS.LELAND],
  venue: MUSIC_VENUES.HAMMERSMITH_APOLLO,
  dates: [new Date("2019-02-28")],
  company: [FRIENDS.JERRY_EDWARDS]
};

export const THE_1975_2019: IGig = {
  headline: MUSICIANS._1975_THE,
  venue: MUSIC_VENUES.O2_THE,
  dates: [new Date("2019-01-19")],
  company: [FRIENDS.JERRY_EDWARDS]
};

export const LANY: IGig = {
  headline: MUSICIANS.LANY,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2019-03-12")],
  company: [FRIENDS.JERRY_EDWARDS]
};

export const LEON: IGig = {
  headline: MUSICIANS.LEON,
  video: VIDEOS.GIGS.LEON,
  venue: MUSIC_VENUES.ISLINGTON_ASSEMBLY_HALL,
  dates: [new Date("2019-04-08")],
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const BULOW: IGig = {
  headline: MUSICIANS.BULOW,
  venue: MUSIC_VENUES.COURTYARD_THEATRE,
  dates: [new Date("2019-04-11")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const ROBYN: IGig = {
  headline: MUSICIANS.ROBYN,
  video: VIDEOS.GIGS.ROBYN,
  venue: MUSIC_VENUES.ALEXANDRA_PALACE,
  dates: [new Date("2019-04-12")],
  company: [FRIENDS.DAN_SPARROW, FRIENDS.RYAN_MILLS],
  favourite: true
};

export const BEARS_DEN: IGig = {
  headline: MUSICIANS.BEARS_DEN,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2019-04-23")],
  company: [FRIENDS.JAMIE_HALKET]
};

export const MARINA_2020: IGig = {
  headline: MUSICIANS.MARINA,
  venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
  video: VIDEOS.GIGS.MARINA_2019,
  dates: [new Date("2019-05-03")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const SASHA_SLOAN: IGig = {
  headline: MUSICIANS.SASHA_SLOAN,
  venue: MUSIC_VENUES.DINGWALLS,
  dates: [new Date("2019-05-07")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const G_FLIP: IGig = {
  headline: MUSICIANS.G_FLIP,
  venue: MUSIC_VENUES.GARAGE_THE,
  dates: [new Date("2019-05-15")],
  company: [FRIENDS.JERRY_EDWARDS]
};

export const FKA_TWIGS_2019_05: IGig = {
  headline: MUSICIANS.FKA_TWIGS,
  video: VIDEOS.GIGS.FKA_TWIGS_ALLY_PALLY,
  venue: MUSIC_VENUES.ALEXANDRA_PALACE_THEATRE,
  dates: [new Date("2019-05-28")],
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const FLEETWOOD_MAC: IGig = {
  headline: MUSICIANS.FLEETWOOD_MAC,
  support: [MUSICIANS.PRETENDERS],
  venue: MUSIC_VENUES.WEMBLEY_STADIUM,
  dates: [new Date("2019-06-16")],
  company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
};

export const SOPHIE_2019: IGig = {
  headline: MUSICIANS.SOPHIE,
  //youtubeId: "-ktoahuTfZQ",
  favourite: true,
  venue: MUSIC_VENUES.ROYAL_FESTIVAL_HALL,
  dates: [new Date("2019-08-10")],
  company: [FRIENDS.JERRY_EDWARDS]
};

export const KIM_PETRAS_2019: IGig = {
  headline: MUSICIANS.KIM_PETRAS,
  //youtubeId: "F6OBvyUN-xE",
  venue: MUSIC_VENUES.HEAVEN,
  dates: [new Date("2019-08-27")],
  company: [FRIENDS.DARREN_TAYLOR, FRIENDS.JERRY_EDWARDS]
};

export const MUNA_2019_09: IGig = {
  headline: MUSICIANS.MUNA,
  venue: MUSIC_VENUES.VILLAGE_UNDERGROUND,
  dates: [new Date("2019-09-10")],
  //youtubeId: "b1GQKpH9nRY",
  company: [FRIENDS.EMMA_CODRINGTON]
};

export const JULIA_MICHAELS: IGig = {
  headline: MUSICIANS.JULIA_MICHAELS,
  //youtubeId: "QjZxfJ5rMoI",
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2019-09-17")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const ELDERBROOK: IGig = {
  headline: MUSICIANS.ELDERBROOK,
  venue: MUSIC_VENUES.EARTH,
  dates: [new Date("2019-10-12")],
  company: [
    FRIENDS.TONYA_FRANCE,
    FRIENDS.SONYA_PARDI,
    FRIENDS.LAURA_CAPECE_GALEOTA
  ]
};

export const CHARLI_XCX_2019: IGig = {
  headline: MUSICIANS.CHARLI_XCX,
  //youtubeId: "aWMtkdL7_5Q",
  support: [MUSICIANS.RINA_SAWAYAMA],
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2019-10-31")],
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const BANKS_2019: IGig = {
  headline: MUSICIANS.BANKS,
  //youtubeId: "2sp-iXxyxLg",
  support: [MUSICIANS.GLOWIE],
  venue: MUSIC_VENUES.ROUNDHOUSE,
  dates: [new Date("2019-11-04")],
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const LAUV_2019: IGig = {
  headline: MUSICIANS.LAUV,
  //youtubeId: "CWEoCdcltQ8",
  support: [MUSICIANS.CHELSEA_CUTLER],
  venue: MUSIC_VENUES.KENTISH_TOWN_FORUM,
  dates: [new Date("2019-11-05")],
  company: [FRIENDS.JERRY_EDWARDS, FRIENDS.POPPY_SMITH]
};

export const SABRINA_CLAUDIO_2019: IGig = {
  headline: MUSICIANS.SABRINA_CLAUDIO,
  support: [MUSICIANS.OH_ANNIE_OH],
  venue: MUSIC_VENUES.ELECTRIC_BRIXTON,
  dates: [new Date("2019-11-19")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const ROBINSON: IGig = {
  headline: MUSICIANS.ROBINSON,
  //youtubeId: "msmiWt45P0A",
  support: [MUSICIANS.NAVVY],
  venue: MUSIC_VENUES.QUEEN_OF_HOXTON,
  dates: [new Date("2019-11-20")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const FKA_TWIGS_2019_11: IGig = {
  headline: MUSICIANS.FKA_TWIGS,
  //youtubeId: "ayQHCkqK04c",
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  dates: [new Date("2019-11-25")],
  company: [
    FRIENDS.DARREN_TAYLOR,
    FRIENDS.CAITLIN_MCCAIG,
    FRIENDS.EMMA_CODRINGTON,
    FRIENDS.MEGAN_BLACKBURN
  ]
};

export const NAAZ: IGig = {
  headline: MUSICIANS.NAAZ,
  //youtubeId: "YYqQIxqo2y4",
  support: [MUSICIANS.DYLAN],
  venue: MUSIC_VENUES.CAMDEN_ASSEMBLY,
  dates: [new Date("2019-11-27")],
  company: [FRIENDS.DARREN_TAYLOR]
};

export const MUNA_2019_12: IGig = {
  headline: MUSICIANS.MUNA,
  support: [MUSICIANS.L_DEVINE],
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2019-12-03")],
  company: [FRIENDS.LEWIS_STEADMAN, FRIENDS.DARREN_TAYLOR]
};

export const MELANIE_MARTINEZ: IGig = {
  headline: MUSICIANS.MELANIE_MARTINEZ,
  support: [MUSICIANS.NAAZ],
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  dates: [new Date("2019-12-09")],
  company: [FRIENDS.DARREN_TAYLOR]
};
