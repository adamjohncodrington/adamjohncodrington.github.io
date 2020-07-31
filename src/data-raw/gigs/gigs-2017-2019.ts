import { FRIENDS, MUSICIANS, MUSIC_VENUES, DATES } from "@constants";
import { VIDEOS, PHOTOS } from "resources";

export const JONAS_BLUE: IGig = {
  headline: MUSICIANS.JONAS_BLUE,
  venue: MUSIC_VENUES.MINISTRY_OF_SOUND,
  date: new Date("2017-01-28"),
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
  date: DATES.GIGS.LYVES,
  video: VIDEOS.GIGS.LYVES,
  company: []
};

export const DUSKY: IGig = {
  headline: MUSICIANS.DUSKY,
  venue: MUSIC_VENUES.ELECTRIC_BRIXTON,
  date: new Date("2017-02-24"),
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
  date: new Date("2017-03-10"),
  venue: MUSIC_VENUES.EGG,
  company: [FRIENDS.TONYA_FRANCE]
};

export const BANKS_2017: IGig = {
  headline: MUSICIANS.BANKS,
  date: DATES.GIGS.BANKS_2017,
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
  date: DATES.GIGS.TOVE_LO,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  company: [FRIENDS.DAN_SPARROW],
  video: VIDEOS.GIGS.TOVE_LO
};

export const MUNA_2017: IGig = {
  headline: MUSICIANS.MUNA,
  date: DATES.GIGS.MUNA_2017,
  video: VIDEOS.GIGS.MUNA_2017,
  venue: MUSIC_VENUES.HOXTON_SQUARE_BAR_AND_KITCHEN,
  company: [FRIENDS.LUKE_STERN],
  favourite: true
};

export const JORJA_SMITH: IGig = {
  headline: MUSICIANS.JORJA_SMITH,
  video: VIDEOS.GIGS.JORJA_SMITH,
  date: DATES.GIGS.JORJA_SMITH,
  venue: MUSIC_VENUES.VILLAGE_UNDERGROUND,
  company: [FRIENDS.LUKE_STERN]
};

export const VERITE: IGig = {
  headline: MUSICIANS.VERITE,
  video: VIDEOS.GIGS.VERITE,
  date: DATES.GIGS.VERITE,
  venue: MUSIC_VENUES.ELECTROWERKZ,
  company: [FRIENDS.TONYA_FRANCE]
};

export const FRANCES: IGig = {
  headline: MUSICIANS.FRANCES,
  video: VIDEOS.GIGS.FRANCES,
  date: DATES.GIGS.FRANCES,
  venue: MUSIC_VENUES.INSTITUTE_BIRMINGHAM,
  company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
};

export const JONES: IGig = {
  headline: MUSICIANS.JONES,
  date: DATES.GIGS.JONES,
  video: VIDEOS.GIGS.JONES,
  venue: MUSIC_VENUES.HOXTON_HALL,
  company: [FRIENDS.LUKE_STERN]
};

export const BETSY: IGig = {
  headline: MUSICIANS.BETSY,
  video: VIDEOS.GIGS.BETSY,
  date: DATES.GIGS.BETSY,
  venue: MUSIC_VENUES.MOTH_CLUB,
  company: [FRIENDS.LUKE_STERN]
};

export const ALMA: IGig = {
  headline: MUSICIANS.ALMA,
  video: VIDEOS.GIGS.ALMA,
  date: DATES.GIGS.ALMA,
  venue: MUSIC_VENUES.OSLO_HACKNEY,
  company: [FRIENDS.LUKE_STERN]
};

export const BETTY_WHO: IGig = {
  headline: MUSICIANS.BETTY_WHO,
  video: VIDEOS.GIGS.BETTY_WHO,
  date: DATES.GIGS.BETTY_WHO,
  venue: MUSIC_VENUES.ZIGFRID_VON_UNDERBELLY,
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const PARAMORE_2017: IGig = {
  headline: MUSICIANS.PARAMORE,
  video: VIDEOS.GIGS.PARAMORE_2017,
  date: DATES.GIGS.PARAMORE_2017,
  venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
  company: [FRIENDS.LUKE_STERN],
  favourite: true
};

export const SIGRID: IGig = {
  headline: MUSICIANS.SIGRID,
  date: DATES.GIGS.SIGRID,
  video: VIDEOS.GIGS.SIGRID,
  venue: MUSIC_VENUES.SCALA,
  company: [FRIENDS.SIAN_RODWAY_SMITH]
};

export const ALLIE_X_2018: IGig = {
  headline: MUSICIANS.ALLIE_X,
  date: DATES.GIGS.ALLIE_X_2018,
  venue: MUSIC_VENUES.OMEARA,
  company: [FRIENDS.SIAN_RODWAY_SMITH],
  video: VIDEOS.GIGS.ALLIE_X_2018,
  favourite: true
};

export const LORDE_2017: IGig = {
  headline: MUSICIANS.LORDE,
  date: DATES.GIGS.LORDE_2017,
  video: VIDEOS.GIGS.LORDE_2017,
  favourite: true,
  venue: MUSIC_VENUES.ALEXANDRA_PALACE,
  company: [FRIENDS.LUKE_STERN, FRIENDS.CAITLIN_MCCAIG, FRIENDS.CAITY_DALBY]
};

export const MURA_MASA: IGig = {
  headline: MUSICIANS.MURA_MASA,
  video: VIDEOS.GIGS.MURA_MASA,
  date: DATES.GIGS.MURA_MASA,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  company: [FRIENDS.LUKE_STERN]
};

export const FREYA_RIDINGS: IGig = {
  headline: MUSICIANS.FREYA_RIDINGS,
  video: VIDEOS.GIGS.FREYA_RIDINGS,
  date: DATES.GIGS.FREYA_RIDINGS,
  venue: MUSIC_VENUES.ST_GILES_IN_THE_FIELD,
  company: [FRIENDS.TONYA_FRANCE]
};

export const PVRIS: IGig = {
  headline: MUSICIANS.PVRIS,
  video: VIDEOS.GIGS.PVRIS,
  date: DATES.GIGS.PVRIS,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  company: [FRIENDS.LUKE_STERN]
};

export const KYGO: IGig = {
  headline: MUSICIANS.KYGO,
  support: [MUSICIANS.GRYFFIN, MUSICIANS.SEEB],
  venue: MUSIC_VENUES.O2_THE,
  video: VIDEOS.GIGS.KYGO,
  date: DATES.GIGS.KYGO,
  company: [FRIENDS.TONYA_FRANCE]
};

export const CODE_THE: IGig = {
  headline: MUSICIANS.CODE_THE,
  venue: MUSIC_VENUES.CORSICA_STUDIOS,
  video: VIDEOS.GIGS.CODE_THE,
  date: DATES.GIGS.CODE_THE,
  company: [FRIENDS.JERRY_EDWARDS, FRIENDS.JAMIE_HALKET, FRIENDS.DOM_COYNE]
};

export const GEORGE_FITZGERALD: IGig = {
  headline: MUSICIANS.GEORGE_FITZGERALD,
  video: VIDEOS.GIGS.GEORGE_FITZGERALD,
  venue: MUSIC_VENUES.ISLINGTON_ASSEMBLY_HALL,
  date: DATES.GIGS.GEORGE_FITZGERALD,
  company: [FRIENDS.TONYA_FRANCE]
};

export const AQUILO: IGig = {
  headline: MUSICIANS.AQUILO,
  venue: MUSIC_VENUES.OVAL_SPACE,
  video: VIDEOS.GIGS.AQUILO,
  date: DATES.GIGS.AQUILO,
  company: [FRIENDS.JAMIE_HALKET]
};

export const TWO_FEET: IGig = {
  headline: MUSICIANS.TWO_FEET,
  video: VIDEOS.GIGS.TWO_FEET,
  venue: MUSIC_VENUES.ELECTROWERKZ,
  date: DATES.GIGS.TWO_FEET,
  company: [FRIENDS.JERRY_EDWARDS]
};

export const KIM_PETRAS_2018: IGig = {
  headline: MUSICIANS.KIM_PETRAS,
  video: VIDEOS.GIGS.KIM_PETRAS_2018,
  venue: MUSIC_VENUES.COURTYARD_THEATRE,
  date: DATES.GIGS.KIM_PETRAS_2018,
  company: [FRIENDS.JERRY_EDWARDS],
  favourite: true
};

export const SOFI_TUKKER: IGig = {
  headline: MUSICIANS.SOFI_TUKKER,
  venue: MUSIC_VENUES.KOKO,
  date: DATES.GIGS.SOFI_TUKKER,
  company: [FRIENDS.TONYA_FRANCE]
};

export const HAIM_2018: IGig = {
  headline: MUSICIANS.HAIM,
  support: [MUSICIANS.MAGGIE_ROGERS],
  venue: MUSIC_VENUES.ALEXANDRA_PALACE,
  date: new Date("2018-06-15"),
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
  date: new Date("2018-06-22"),
  company: [FRIENDS.DAN_SPARROW],
  favourite: true
};

export const LAUV_2018: IGig = {
  headline: MUSICIANS.LAUV,
  venue: MUSIC_VENUES.KOKO,
  date: new Date("2018-09-18"),
  company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
};

export const RALPH_2018: IGig = {
  headline: MUSICIANS.RALPH,
  venue: MUSIC_VENUES.OLD_BLUE_LAST,
  date: new Date("2018-10-15"),
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const RAINBOW_KITTEN_SURPRISE: IGig = {
  headline: MUSICIANS.RAINBOW_KITTEN_SURPRISE,
  venue: MUSIC_VENUES.HEAVEN,
  date: new Date("2018-10-31"),
  company: [FRIENDS.JAMIE_HALKET]
};

export const LYKKE_LI_2018: IGig = {
  headline: MUSICIANS.LYKKE_LI,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  date: new Date("2018-11-04"),
  company: [FRIENDS.EMMA_CODRINGTON],
  favourite: true
};

export const FLORENCE_2018: IGig = {
  headline: MUSICIANS.FLORENCE_AND_THE_MACHINE,
  venue: MUSIC_VENUES.O2_THE,
  date: new Date("2018-11-21"),
  company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MEGAN_BLACKBURN]
};

export const YOU_ME_AT_SIX_2018: IGig = {
  headline: MUSICIANS.YOU_ME_AT_SIX,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  date: new Date("2018-12-03"),
  company: [FRIENDS.EMMA_CODRINGTON]
};

export const MAGGIE_ROGERS_2019: IGig = {
  headline: MUSICIANS.MAGGIE_ROGERS,
  video: VIDEOS.GIGS.MAGGIE_ROGERS_2019,
  support: [MUSICIANS.MALLRAT],
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  date: DATES.GIGS.MAGGIE_ROGERS_2019,
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const TROYE_SIVAN: IGig = {
  headline: MUSICIANS.TROYE_SIVAN,
  support: [MUSICIANS.LELAND],
  venue: MUSIC_VENUES.HAMMERSMITH_APOLLO,
  date: new Date("2019-02-28"),
  company: [FRIENDS.JERRY_EDWARDS]
};

export const THE_1975_2019: IGig = {
  headline: MUSICIANS._1975_THE,
  venue: MUSIC_VENUES.O2_THE,
  photos: PHOTOS.GIGS.THE_1975_2019,
  date: new Date("2019-01-19"),
  company: [FRIENDS.JERRY_EDWARDS]
};

export const LANY: IGig = {
  headline: MUSICIANS.LANY,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  date: new Date("2019-03-12"),
  company: [FRIENDS.JERRY_EDWARDS]
};

export const LEON_2019: IGig = {
  headline: MUSICIANS.LEON,
  video: VIDEOS.GIGS.LEON_2019,
  venue: MUSIC_VENUES.ISLINGTON_ASSEMBLY_HALL,
  date: DATES.GIGS.LEON_2019,
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const BULOW: IGig = {
  headline: MUSICIANS.BULOW,
  venue: MUSIC_VENUES.COURTYARD_THEATRE,
  date: new Date("2019-04-11"),
  company: [FRIENDS.DARREN_TAYLOR]
};

export const ROBYN_2019: IGig = {
  headline: MUSICIANS.ROBYN,
  video: VIDEOS.GIGS.ROBYN_2019,
  venue: MUSIC_VENUES.ALEXANDRA_PALACE,
  date: DATES.GIGS.ROBYN_2019,
  company: [FRIENDS.DAN_SPARROW, FRIENDS.RYAN_MILLS],
  favourite: true
};

export const BEARS_DEN: IGig = {
  headline: MUSICIANS.BEARS_DEN,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  date: new Date("2019-04-23"),
  company: [FRIENDS.JAMIE_HALKET]
};

export const MARINA_2019: IGig = {
  headline: MUSICIANS.MARINA,
  venue: MUSIC_VENUES.ROYAL_ALBERT_HALL,
  video: VIDEOS.GIGS.MARINA_2019,
  date: DATES.GIGS.MARINA_2019,
  company: [FRIENDS.DARREN_TAYLOR]
};

export const SASHA_SLOAN: IGig = {
  headline: MUSICIANS.SASHA_SLOAN,
  venue: MUSIC_VENUES.DINGWALLS,
  date: new Date("2019-05-07"),
  company: [FRIENDS.DARREN_TAYLOR]
};

export const G_FLIP: IGig = {
  headline: MUSICIANS.G_FLIP,
  venue: MUSIC_VENUES.GARAGE_THE,
  date: new Date("2019-05-15"),
  company: [FRIENDS.JERRY_EDWARDS]
};

export const FKA_TWIGS_2019_05: IGig = {
  headline: MUSICIANS.FKA_TWIGS,
  video: VIDEOS.GIGS.FKA_TWIGS_2019_05,
  venue: MUSIC_VENUES.ALEXANDRA_PALACE_THEATRE,
  date: DATES.GIGS.FKA_TWIGS_2019_05,
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const FLEETWOOD_MAC: IGig = {
  headline: MUSICIANS.FLEETWOOD_MAC,
  support: [MUSICIANS.PRETENDERS],
  venue: MUSIC_VENUES.WEMBLEY_STADIUM,
  date: new Date("2019-06-16"),
  company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
};

export const SOPHIE_2019: IGig = {
  headline: MUSICIANS.SOPHIE,
  video: VIDEOS.GIGS.SOPHIE_2019,
  favourite: true,
  venue: MUSIC_VENUES.ROYAL_FESTIVAL_HALL,
  date: DATES.GIGS.SOPHIE_2019,
  company: [FRIENDS.JERRY_EDWARDS]
};

export const KIM_PETRAS_2019: IGig = {
  headline: MUSICIANS.KIM_PETRAS,
  video: VIDEOS.GIGS.KIM_PETRAS_2019,
  venue: MUSIC_VENUES.HEAVEN,
  date: DATES.GIGS.KIM_PETRAS_2019,
  company: [FRIENDS.DARREN_TAYLOR, FRIENDS.JERRY_EDWARDS]
};

export const MUNA_2019_09: IGig = {
  headline: MUSICIANS.MUNA,
  venue: MUSIC_VENUES.VILLAGE_UNDERGROUND,
  video: VIDEOS.GIGS.MUNA_2019_09,
  date: DATES.GIGS.MUNA_2019_09,
  company: [FRIENDS.EMMA_CODRINGTON]
};

export const JULIA_MICHAELS: IGig = {
  headline: MUSICIANS.JULIA_MICHAELS,
  video: VIDEOS.GIGS.JULIA_MICHAELS,
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  date: DATES.GIGS.JULIA_MICHAELS,
  company: [FRIENDS.DARREN_TAYLOR]
};

export const ELDERBROOK: IGig = {
  headline: MUSICIANS.ELDERBROOK,
  venue: MUSIC_VENUES.EARTH,
  date: new Date("2019-10-12"),
  company: [
    FRIENDS.TONYA_FRANCE,
    FRIENDS.SONYA_PARDI,
    FRIENDS.LAURA_CAPECE_GALEOTA
  ]
};

export const CHARLI_XCX_2019: IGig = {
  headline: MUSICIANS.CHARLI_XCX,
  video: VIDEOS.GIGS.CHARLI_XCX_2019,
  support: [MUSICIANS.RINA_SAWAYAMA],
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  date: DATES.GIGS.CHARLI_XCX_2019,
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const BANKS_2019: IGig = {
  headline: MUSICIANS.BANKS,
  video: VIDEOS.GIGS.BANKS_2019,
  support: [MUSICIANS.GLOWIE],
  venue: MUSIC_VENUES.ROUNDHOUSE,
  date: DATES.GIGS.BANKS_2019,
  company: [FRIENDS.DARREN_TAYLOR],
  favourite: true
};

export const LAUV_2019: IGig = {
  headline: MUSICIANS.LAUV,
  video: VIDEOS.GIGS.LAUV_2019,
  support: [MUSICIANS.CHELSEA_CUTLER],
  venue: MUSIC_VENUES.KENTISH_TOWN_FORUM,
  date: DATES.GIGS.LAUV_2019,
  company: [FRIENDS.JERRY_EDWARDS, FRIENDS.POPPY_SMITH]
};

export const SABRINA_CLAUDIO_2019: IGig = {
  headline: MUSICIANS.SABRINA_CLAUDIO,
  support: [MUSICIANS.OH_ANNIE_OH],
  venue: MUSIC_VENUES.ELECTRIC_BRIXTON,
  date: new Date("2019-11-19"),
  company: [FRIENDS.DARREN_TAYLOR]
};

export const ROBINSON: IGig = {
  headline: MUSICIANS.ROBINSON,
  video: VIDEOS.GIGS.ROBINSON,
  support: [MUSICIANS.NAVVY],
  venue: MUSIC_VENUES.QUEEN_OF_HOXTON,
  date: DATES.GIGS.ROBINSON,
  company: [FRIENDS.DARREN_TAYLOR]
};

export const FKA_TWIGS_2019_11: IGig = {
  headline: MUSICIANS.FKA_TWIGS,
  video: VIDEOS.GIGS.FKA_TWIGS_2019_11,
  venue: MUSIC_VENUES.BRIXTON_ACADEMY,
  date: DATES.GIGS.FKA_TWIGS_2019_11,
  company: [
    FRIENDS.DARREN_TAYLOR,
    FRIENDS.CAITLIN_MCCAIG,
    FRIENDS.EMMA_CODRINGTON,
    FRIENDS.MEGAN_BLACKBURN
  ]
};

export const NAAZ: IGig = {
  headline: MUSICIANS.NAAZ,
  video: VIDEOS.GIGS.NAAZ,
  support: [MUSICIANS.DYLAN],
  venue: MUSIC_VENUES.CAMDEN_ASSEMBLY,
  date: DATES.GIGS.NAAZ,
  company: [FRIENDS.DARREN_TAYLOR]
};

export const MUNA_2019_12: IGig = {
  headline: MUSICIANS.MUNA,
  support: [MUSICIANS.L_DEVINE],
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  date: new Date("2019-12-03"),
  company: [FRIENDS.LEWIS_STEADMAN, FRIENDS.DARREN_TAYLOR]
};

export const MELANIE_MARTINEZ: IGig = {
  headline: MUSICIANS.MELANIE_MARTINEZ,
  support: [MUSICIANS.NAAZ],
  venue: MUSIC_VENUES.SHEPHERDS_BUSH_EMPIRE,
  date: new Date("2019-12-09"),
  company: [FRIENDS.DARREN_TAYLOR]
};
