import {
  PORTRAIT_1080P,
  STUDIOS,
  ME,
  HOME,
  SONGS,
  INSTRUCTORS
} from "@constants";
import { EXOTICA_HACKNEY } from "@constants/pole-studios";

const {
  LAETITIA,
  VERONICA,
  SARAH_ELLIOTT,
  MEL,
  MARINE,
  CAROLINA
} = INSTRUCTORS;
const { EXOTICA_BERMONDSEY, DAN_LEA_STUDIO, TIGRA_GST } = STUDIOS;

export const BANKS_GIMME: PoleRoutine = {
  studio: EXOTICA_HACKNEY,
  date: new Date("2020-09-12"),
  category: "exotic-class",
  song: SONGS.BANKS_GIMME,
  choreographer: MARINE,
  video: { youtubeId: "NCej4NYDRCY", ...PORTRAIT_1080P }
};

export const AYANNA_PARTY_TRICKS: PoleRoutine = {
  studio: EXOTICA_HACKNEY,
  date: new Date("2020-09-07"),
  category: "contemporary-improv",
  song: SONGS.AYANNA_PARTY_TRICKS,
  choreographer: ME,
  video: { youtubeId: "WMtvNWShPsY", ...PORTRAIT_1080P }
};

export const CARDI_B_WAP: PoleRoutine = {
  studio: EXOTICA_HACKNEY,
  date: new Date("2020-09-13"),
  category: "exotic-class",
  song: SONGS.CARDI_B_WAP,
  choreographer: CAROLINA,
  video: { youtubeId: "qw2VhJKF2Is", ...PORTRAIT_1080P }
};

export const MOSIMANN_2_YOUNG: PoleRoutine = {
  studio: EXOTICA_HACKNEY,
  date: new Date("2020-08-29"),
  category: "exotic-class",
  song: SONGS.MOSIMANN_2_YOUNG,
  choreographer: VERONICA,
  video: { youtubeId: "Mb76odkQa_o", ...PORTRAIT_1080P }
};

export const JAMES_BLAKE_ARE_YOU_EVEN_REAL: PoleRoutine = {
  studio: DAN_LEA_STUDIO,
  date: new Date("2020-07-27"),
  category: "exotic-improv",
  song: SONGS.JAMES_BLAKE_ARE_YOU_EVEN_REAL,
  choreographer: ME,
  video: { youtubeId: "LeomyYPrc3M", ...PORTRAIT_1080P }
};

export const MOTORHEAD_HELLRAISER: PoleRoutine = {
  studio: TIGRA_GST,
  date: new Date("2018-06-21"),
  category: "rock",
  song: SONGS.MOTORHEAD_HELLRAISER,
  choreographer: LAETITIA,
  video: { youtubeId: "5B-QCrrKYNE", ...PORTRAIT_1080P }
};

export const AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME: PoleRoutine = {
  studio: DAN_LEA_STUDIO,
  date: new Date("2020-07-20T19:07Z"),
  category: "contemporary-improv",
  song: SONGS.AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME,
  choreographer: ME,
  video: { youtubeId: "ju-1nlmZfW8", ...PORTRAIT_1080P }
};

export const BILLIE_EILISH_MY_FUTURE: PoleRoutine = {
  studio: DAN_LEA_STUDIO,
  date: new Date("2020-08-03"),
  category: "contemporary-improv",
  song: SONGS.BILLIE_EILISH_MY_FUTURE,
  choreographer: ME,
  video: { youtubeId: "XeGzy7-ACPQ", ...PORTRAIT_1080P }
};

export const ELLIE_GOULDING_START: PoleRoutine = {
  studio: DAN_LEA_STUDIO,
  date: new Date("2020-07-20T18:41Z"),
  category: "contemporary-improv",
  song: SONGS.ELLIE_GOULDING_START,
  choreographer: ME,
  video: { youtubeId: "zMrrMXu4oLA", ...PORTRAIT_1080P }
};

export const TAIKO_NO_MORE: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-01-11"),
  category: "exotic-class",
  song: SONGS.TAIKO_NO_MORE,
  choreographer: MARINE,
  video: { youtubeId: "MhkVVvWvYro", ...PORTRAIT_1080P }
};

export const JORJA_SMITH_TOMORROW: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-02-20"),
  category: "contemporary-class",
  song: SONGS.JORJA_SMITH_TOMORROW,
  choreographer: MARINE,
  video: { youtubeId: "BR1YB5hJlmc", ...PORTRAIT_1080P }
};

export const SOAP_AND_SKIN_ME_AND_THE_DEVIL: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-11-14"),
  category: "contemporary-class",
  song: SONGS.SOAP_AND_SKIN_ME_AND_THE_DEVIL,
  choreographer: MARINE,
  video: { youtubeId: "G9SgOhE1_aM", ...PORTRAIT_1080P }
};

export const BILLIE_EILISH_WISH_YOU_WERE_GAY: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-01-05"),
  category: "exotic-class",
  song: SONGS.BILLIE_EILISH_WISH_YOU_WERE_GAY,
  choreographer: VERONICA,
  video: { youtubeId: "JBT8tNVkzFE", ...PORTRAIT_1080P }
};

export const GALLANT_WEIGHT_IN_GOLD: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-01-16"),
  category: "contemporary-class",
  song: SONGS.GALLANT_WEIGHT_IN_GOLD,
  choreographer: VERONICA,
  video: { youtubeId: "8uRd2M1aDEI", ...PORTRAIT_1080P }
};

export const CHARLI_XCX_5_IN_THE_MORNING: PoleRoutine = {
  studio: HOME,
  date: new Date("2020-04-22"),
  category: "quarantine",
  song: SONGS.CHARLI_XCX_5_IN_THE_MORNING,
  choreographer: MARINE,
  video: { youtubeId: "lD-Yt9-34f4", ...PORTRAIT_1080P }
};

export const HER_FOCUS: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-07-17"),
  category: "exotic-class",
  song: SONGS.HER_FOCUS,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "AjejWFfydx4", ...PORTRAIT_1080P }
};

export const JESSIE_REYEZ_FIGURES: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-08-15"),
  category: "contemporary-class",
  song: SONGS.JESSIE_REYEZ_FIGURES,
  choreographer: MARINE,
  video: { youtubeId: "yEFoPX94UH8", ...PORTRAIT_1080P }
};

export const JP_COOPER_BIRTHDAY: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-08-07"),
  category: "exotic-class",
  song: SONGS.JP_COOPER_BIRTHDAY,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "38h8BKTRz2g", ...PORTRAIT_1080P }
};

export const JUSTIN_BIEBER_YUMMY: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-02-09"),
  category: "exotic-class",
  song: SONGS.JUSTIN_BIEBER_YUMMY,
  choreographer: MEL,
  video: { youtubeId: "ZSxW7_k2d5k", ...PORTRAIT_1080P }
};

export const NICKI_MINAJ_CHUN_LI: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-03-08"),
  category: "exotic-class",
  song: SONGS.NICKI_MINAJ_CHUN_LI,
  choreographer: MEL,
  video: { youtubeId: "VJ8P46ZtEh0", ...PORTRAIT_1080P }
};

export const SEREDA_I_GOT_YOU: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-07-24"),
  category: "exotic-class",
  song: SONGS.SEREDA_I_GOT_YOU,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "H5bIR9s4d2I", ...PORTRAIT_1080P }
};

export const TOMMEE_PROFITT_PULL_THAT_TRIGGER: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-12-15"),
  category: "exotic-class",
  song: SONGS.TOMMEE_PROFITT_PULL_THAT_TRIGGER,
  choreographer: VERONICA,
  video: { youtubeId: "b5H4RcDTH14", ...PORTRAIT_1080P }
};

export const TRUTH_LOOK_AROUND: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-03-14"),
  category: "exotic-class",
  song: SONGS.TRUTH_LOOK_AROUND,
  choreographer: VERONICA,
  video: { youtubeId: "19a_Yl99zaY", ...PORTRAIT_1080P }
};

export const ANNIE_LENNOX_I_PUT_A_SPELL_ON_YOU: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-07-03"),
  category: "exotic-class",
  song: SONGS.ANNIE_LENNOX_I_PUT_A_SPELL_ON_YOU,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "U6Dgqhrkxys", ...PORTRAIT_1080P }
};

export const CRUEL_YOUTH_DEVIL_IN_PARADISE: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-04-13"),
  category: "showcase",
  song: SONGS.CRUEL_YOUTH_DEVIL_IN_PARADISE,
  choreographer: ME,
  video: { youtubeId: "hAQlxstDUpA", ...PORTRAIT_1080P }
};

export const JANIS_JOPLIN_GET_IT_WHILE_YOU_CAN: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-09-12"),
  category: "contemporary-class",
  song: SONGS.JANIS_JOPLIN_GET_IT_WHILE_YOU_CAN,
  choreographer: MARINE,
  video: { youtubeId: "J9rSCQ31ZNo", ...PORTRAIT_1080P }
};

export const LUDOVICO_EINAUDI_I_GIORNI: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-06-27"),
  category: "contemporary-class",
  song: SONGS.LUDOVICO_EINAUDI_I_GIORNI,
  choreographer: MARINE,
  video: { youtubeId: "JdMtmrBOMSw", ...PORTRAIT_1080P }
};

export const JUDY_GARLAND_HAVE_YOURSELF_A_MERRY_LITTLE_CHRISTMAS: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-12-19"),
  category: "contemporary-class",
  song: SONGS.JUDY_GARLAND_HAVE_YOURSELF_A_MERRY_LITTLE_CHRISTMAS,
  choreographer: MARINE,
  video: { youtubeId: "E8Pu7j4WDlk", ...PORTRAIT_1080P }
};

export const VANESSA_WAGNER_ELF_DANCE_SHOWCASE: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-12-07"),
  category: "showcase",
  song: SONGS.VANESSA_WAGNER_ELF_DANCE,
  choreographer: MARINE,
  video: { youtubeId: "heRUwlr2wiU", ...PORTRAIT_1080P }
};

// export const VANESSA_WAGNER_ELF_DANCE_CLASS: PoleRoutine = {
//   studio: EXOTICA_BERMONDSEY,
//   date: new Date("2019-11-21"),
//   category: "contemporary-class",
//   song: SONGS.VANESSA_WAGNER_ELF_DANCE,
//   choreographer: MARINE,
//   video: { youtubeId: "gTub-KawW78", ...PORTRAIT_1080P }
// };

export const A_BOOGIE_WIT_DA_HOODIE_LOOK_BACK_AT_IT: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-06-05"),
  category: "exotic-class",
  song: SONGS.A_BOOGIE_WIT_DA_HOODIE_LOOK_BACK_AT_IT,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "9HtbfKEBSLI", ...PORTRAIT_1080P }
};

export const ASAP_ROCKY_LSD: PoleRoutine = {
  studio: HOME,
  date: new Date("2020-03-25T19:05Z"),
  category: "quarantine",
  song: SONGS.ASAP_ROCKY_LSD,
  choreographer: ME,
  video: { youtubeId: "yer6sW5WAM8", ...PORTRAIT_1080P }
};

export const ARIANA_GRANDE_7_RINGS: PoleRoutine = {
  studio: HOME,
  date: new Date("2020-03-25T18:47Z"),
  category: "quarantine",
  song: SONGS.ARIANA_GRANDE_7_RINGS,
  choreographer: MARINE,
  video: { youtubeId: "qiVyMn6av_k", ...PORTRAIT_1080P }
};

export const BANKS_DROWNING: PoleRoutine = {
  studio: HOME,
  date: new Date("2020-04-01"),
  category: "quarantine",
  song: SONGS.BANKS_DROWNING,
  choreographer: MEL,
  video: { youtubeId: "D8q3xS3bNHQ", ...PORTRAIT_1080P }
};

export const FERAL_FAUNA_TINCTURE: PoleRoutine = {
  studio: HOME,
  date: new Date("2020-04-08"),
  category: "quarantine",
  song: SONGS.FERAL_FAUNA_TINCTURE,
  choreographer: MARINE,
  video: { youtubeId: "6zqQl1T8OeU", ...PORTRAIT_1080P }
};

export const SLEEPING_AT_LAST_ALREADY_GONE: PoleRoutine = {
  studio: HOME,
  date: new Date("2020-04-15"),
  category: "quarantine",
  song: SONGS.SLEEPING_AT_LAST_ALREADY_GONE,
  choreographer: MEL,
  video: { youtubeId: "NRzyrSDwhB0", ...PORTRAIT_1080P }
};

export const LAUV_MISS_ME: PoleRoutine = {
  studio: HOME,
  date: new Date("2020-04-15"),
  category: "quarantine",
  song: SONGS.LAUV_MISS_ME,
  choreographer: ME,
  video: { youtubeId: "qSsM6ogPt-s", ...PORTRAIT_1080P }
};

export const CHRISTINA_AGUILERA_DIRTY: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-09-04"),
  category: "exotic-class",
  song: SONGS.CHRISTINA_AGUILERA_DIRTY,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "pue4_Nzg4qs", ...PORTRAIT_1080P }
};

export const RIHANNA_RUDE_BOY: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-05-22"),
  category: "exotic-class",
  song: SONGS.RIHANNA_RUDE_BOY,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "AtdiGPfDm7s", ...PORTRAIT_1080P }
};

export const USHER_BAD_GIRL: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-04-24"),
  category: "exotic-class",
  song: SONGS.USHER_BAD_GIRL,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "5sFil9iYlzk", ...PORTRAIT_1080P }
};

export const THE_WEEKND_I_FEEL_IT_COMING: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-05-08"),
  category: "exotic-class",
  song: SONGS.THE_WEEKND_I_FEEL_IT_COMING,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "281EClS-0wo", ...PORTRAIT_1080P }
};

export const JOHNNY_BALIK_HONEY: PoleRoutine = {
  studio: EXOTICA_HACKNEY,
  date: new Date("2020-08-15"),
  category: "exotic-class",
  song: SONGS.JOHNNY_BALIK_HONEY,
  choreographer: VERONICA,
  video: { youtubeId: "e9CLQVXUSUM", ...PORTRAIT_1080P }
};

export const SKOTT_AMELIA: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-10-06"),
  category: "exotic-class",
  song: SONGS.SKOTT_AMELIA,
  choreographer: VERONICA,
  video: { youtubeId: "v23f_9U_6CY", ...PORTRAIT_1080P }
};

export const SUB_URBAN_ISOLATE: PoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-10-12"),
  category: "exotic-class",
  song: SONGS.SUB_URBAN_ISOLATE,
  choreographer: VERONICA,
  video: { youtubeId: "x1h7IF0nklQ", ...PORTRAIT_1080P }
};
