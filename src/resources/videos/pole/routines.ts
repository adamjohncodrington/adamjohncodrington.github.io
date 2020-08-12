import {
  PORTRAIT_1080P,
  STUDIOS,
  ME,
  HOME,
  SONGS,
  INSTRUCTORS
} from "@constants";

const { LAETITIA, VERONICA, SARAH_ELLIOTT, MEL, MARINE } = INSTRUCTORS;
const { EXOTICA_BERMONDSEY, DAN_LEA_STUDIO, TIGRA_GST } = STUDIOS;

export const JAMES_BLAKE_ARE_YOU_EVEN_REAL: IPoleRoutine = {
  studio: DAN_LEA_STUDIO,
  date: new Date("2020-07-27"),
  category: "exotic-improv",
  song: SONGS.JAMES_BLAKE_ARE_YOU_EVEN_REAL,
  choreographer: ME,
  video: { youtubeId: "LeomyYPrc3M", ...PORTRAIT_1080P }
};

export const MOTORHEAD_HELLRAISER: IPoleRoutine = {
  studio: TIGRA_GST,
  date: new Date("2018-06-21"),
  category: "rock",
  song: SONGS.MOTORHEAD_HELLRAISER,
  choreographer: LAETITIA,
  video: { youtubeId: "5B-QCrrKYNE", ...PORTRAIT_1080P }
};

export const AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME: IPoleRoutine = {
  studio: DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  category: "contemporary-improv",
  song: SONGS.AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME,
  choreographer: ME,
  video: { youtubeId: "ju-1nlmZfW8", ...PORTRAIT_1080P }
};

export const BILLIE_EILISH_MY_FUTURE: IPoleRoutine = {
  studio: DAN_LEA_STUDIO,
  date: new Date("2020-08-03"),
  category: "contemporary-improv",
  song: SONGS.BILLIE_EILISH_MY_FUTURE,
  choreographer: ME,
  video: { youtubeId: "XeGzy7-ACPQ", ...PORTRAIT_1080P }
};

export const ELLIE_GOULDING_START: IPoleRoutine = {
  studio: DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  category: "contemporary-improv",
  song: SONGS.ELLIE_GOULDING_START,
  choreographer: ME,
  video: { youtubeId: "zMrrMXu4oLA", ...PORTRAIT_1080P }
};

export const TAIKO_NO_MORE: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-01-11"),
  category: "exotic-class",
  song: SONGS.TAIKO_NO_MORE,
  choreographer: MARINE,
  video: { youtubeId: "MhkVVvWvYro", ...PORTRAIT_1080P }
};

export const JORJA_SMITH_TOMORROW: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-02-20"),
  category: "contemporary-class",
  song: SONGS.JORJA_SMITH_TOMORROW,
  choreographer: MARINE,
  video: { youtubeId: "BR1YB5hJlmc", ...PORTRAIT_1080P }
};

export const BILLIE_EILISH_WISH_YOU_WERE_GAY: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-01-05"),
  category: "exotic-class",
  song: SONGS.BILLIE_EILISH_WISH_YOU_WERE_GAY,
  choreographer: VERONICA,
  video: { youtubeId: "JBT8tNVkzFE", ...PORTRAIT_1080P }
};

export const GALLANT_WEIGHT_IN_GOLD: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-01-16"),
  category: "contemporary-class",
  song: SONGS.GALLANT_WEIGHT_IN_GOLD,
  choreographer: VERONICA,
  video: { youtubeId: "8uRd2M1aDEI", ...PORTRAIT_1080P }
};

export const CHARLI_XCX_5_IN_THE_MORNING: IPoleRoutine = {
  studio: HOME,
  date: new Date("2020-04-22"),
  category: "quarantine",
  song: SONGS.CHARLI_XCX_5_IN_THE_MORNING,
  choreographer: MARINE,
  video: { youtubeId: "lD-Yt9-34f4", ...PORTRAIT_1080P }
};

export const HER_FOCUS: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-07-17"),
  category: "exotic-class",
  song: SONGS.HER_FOCUS,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "AjejWFfydx4", ...PORTRAIT_1080P }
};

export const JESSIE_REYEZ_FIGURES: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-08-15"),
  category: "contemporary-class",
  song: SONGS.JESSIE_REYEZ_FIGURES,
  choreographer: MARINE,
  video: { youtubeId: "yEFoPX94UH8", ...PORTRAIT_1080P }
};

export const JP_COOPER_BIRTHDAY: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-08-07"),
  category: "exotic-class",
  song: SONGS.JP_COOPER_BIRTHDAY,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "38h8BKTRz2g", ...PORTRAIT_1080P }
};

export const JUSTIN_BIEBER_YUMMY: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-02-09"),
  category: "exotic-class",
  song: SONGS.JUSTIN_BIEBER_YUMMY,
  choreographer: MEL,
  video: { youtubeId: "ZSxW7_k2d5k", ...PORTRAIT_1080P }
};

export const NICKI_MINAJ_CHUN_LI: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-03-08"),
  category: "exotic-class",
  song: SONGS.NICKI_MINAJ_CHUN_LI,
  choreographer: MEL,
  video: { youtubeId: "VJ8P46ZtEh0", ...PORTRAIT_1080P }
};

export const SEREDA_I_GOT_YOU: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-07-24"),
  category: "exotic-class",
  song: SONGS.SEREDA_I_GOT_YOU,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "H5bIR9s4d2I", ...PORTRAIT_1080P }
};

export const TOMMEE_PROFITT_PULL_THAT_TRIGGER: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-12-15"),
  category: "exotic-class",
  song: SONGS.TOMMEE_PROFITT_PULL_THAT_TRIGGER,
  choreographer: VERONICA,
  video: { youtubeId: "b5H4RcDTH14", ...PORTRAIT_1080P }
};

export const TRUTH_LOOK_AROUND: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2020-03-14"),
  category: "exotic-class",
  song: SONGS.TRUTH_LOOK_AROUND,
  choreographer: VERONICA,
  video: { youtubeId: "19a_Yl99zaY", ...PORTRAIT_1080P }
};

export const ANNIE_LENNOX_I_PUT_A_SPELL_ON_YOU: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-07-03"),
  category: "exotic-class",
  song: SONGS.ANNIE_LENNOX_I_PUT_A_SPELL_ON_YOU,
  choreographer: SARAH_ELLIOTT,
  video: { youtubeId: "U6Dgqhrkxys", ...PORTRAIT_1080P }
};

export const CRUEL_YOUTH_DEVIL_IN_PARADISE: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-04-13"),
  category: "showcase",
  song: SONGS.CRUEL_YOUTH_DEVIL_IN_PARADISE,
  choreographer: ME,
  video: { youtubeId: "hAQlxstDUpA", ...PORTRAIT_1080P }
};

export const JANIS_JOPLIN_GET_IT_WHILE_YOU_CAN: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-09-12"),
  category: "contemporary-class",
  song: SONGS.JANIS_JOPLIN_GET_IT_WHILE_YOU_CAN,
  choreographer: MARINE,
  video: { youtubeId: "J9rSCQ31ZNo", ...PORTRAIT_1080P }
};

export const LUDOVICO_EINAUDI_I_GIORNI: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-06-27"),
  category: "contemporary-class",
  song: SONGS.LUDOVICO_EINAUDI_I_GIORNI,
  choreographer: MARINE,
  video: { youtubeId: "JdMtmrBOMSw", ...PORTRAIT_1080P }
};

export const JUDY_GARLAND_HAVE_YOURSELF_A_MERRY_LITTLE_CHRISTMAS: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-12-19"),
  category: "contemporary-class",
  song: SONGS.JUDY_GARLAND_HAVE_YOURSELF_A_MERRY_LITTLE_CHRISTMAS,
  choreographer: MARINE,
  video: { youtubeId: "E8Pu7j4WDlk", ...PORTRAIT_1080P }
};

export const VANESSA_WAGNER_ELF_DANCE: IPoleRoutine = {
  studio: EXOTICA_BERMONDSEY,
  date: new Date("2019-12-07"),
  category: "showcase",
  song: SONGS.VANESSA_WAGNER_ELF_DANCE,
  choreographer: MARINE,
  video: { youtubeId: "heRUwlr2wiU", ...PORTRAIT_1080P }
};
