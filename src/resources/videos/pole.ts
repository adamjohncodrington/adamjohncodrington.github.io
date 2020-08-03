import { PORTRAIT_1080P, STUDIOS, ME, SONGS, INSTRUCTORS } from "@constants";

export const JAMES_BLAKE_ARE_YOU_EVEN_REAL: IPoleRoutine = {
  studio: STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-27"),
  category: "exotic-improv",
  song: SONGS.JAMES_BLAKE_ARE_YOU_EVEN_REAL,
  choreographer: ME,
  video: { youtubeId: "LeomyYPrc3M", ...PORTRAIT_1080P }
};

export const AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME: IPoleRoutine = {
  studio: STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  category: "contemporary-improv",
  song: SONGS.AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME,
  choreographer: ME,
  video: { youtubeId: "ju-1nlmZfW8", ...PORTRAIT_1080P }
};

export const BILLIE_EILISH_MY_FUTURE: IPoleRoutine = {
  studio: STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-08-03"),
  category: "contemporary-improv",
  song: SONGS.BILLIE_EILISH_MY_FUTURE,
  choreographer: ME,
  video: { youtubeId: "XeGzy7-ACPQ", ...PORTRAIT_1080P }
};

export const ELLIE_GOULDING_START: IPoleRoutine = {
  studio: STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  category: "contemporary-improv",
  song: SONGS.ELLIE_GOULDING_START,
  choreographer: ME,
  video: { youtubeId: "zMrrMXu4oLA", ...PORTRAIT_1080P }
};

export const TAIKO_NO_MORE: IPoleRoutine = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-11"),
  category: "exotic-class",
  song: SONGS.TAIKO_NO_MORE,
  choreographer: INSTRUCTORS.MARINE,
  video: { youtubeId: "MhkVVvWvYro", ...PORTRAIT_1080P }
};

export const JORJA_SMITH_TOMORROW: IPoleRoutine = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-02-20"),
  category: "contemporary-class",
  song: SONGS.JORJA_SMITH_TOMORROW,
  choreographer: INSTRUCTORS.MARINE,
  video: { youtubeId: "BR1YB5hJlmc", ...PORTRAIT_1080P }
};

export const BILLIE_EILISH_WISH_YOU_WERE_GAY: IPoleRoutine = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-05"),
  category: "exotic-class",
  song: SONGS.BILLIE_EILISH_WISH_YOU_WERE_GAY,
  choreographer: INSTRUCTORS.VERONICA,
  video: { youtubeId: "JBT8tNVkzFE", ...PORTRAIT_1080P }
};

export const GALLANT_WEIGHT_IN_GOLD: IPoleRoutine = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-16"),
  category: "contemporary-class",
  song: SONGS.GALLANT_WEIGHT_IN_GOLD,
  choreographer: INSTRUCTORS.VERONICA,
  video: { youtubeId: "8uRd2M1aDEI", ...PORTRAIT_1080P }
};
