import { PORTRAIT_1080P, STUDIOS, SONGS, INSTRUCTORS } from "@constants";

export const AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME: IPoleRoutine = {
  studio: STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  category: "improv",
  song: SONGS.AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME,
  instructor: "none",
  video: { youtubeId: "ju-1nlmZfW8", ...PORTRAIT_1080P }
};

export const ELLIE_GOULDING_START: IPoleRoutine = {
  studio: STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  category: "improv",
  song: SONGS.ELLIE_GOULDING_START,
  instructor: "none",
  video: { youtubeId: "zMrrMXu4oLA", ...PORTRAIT_1080P }
};

export const TAIKO_NO_MORE: IPoleRoutine = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-11"),
  category: "exotic",
  song: SONGS.TAIKO_NO_MORE,
  instructor: INSTRUCTORS.MARINE,
  video: { youtubeId: "MhkVVvWvYro", ...PORTRAIT_1080P }
};

export const JORJA_SMITH_TOMORROW: IPoleRoutine = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-02-20"),
  category: "contemporary",
  song: SONGS.JORJA_SMITH_TOMORROW,
  instructor: INSTRUCTORS.MARINE,
  video: { youtubeId: "BR1YB5hJlmc", ...PORTRAIT_1080P }
};

export const BILLIE_EILISH_WISH_YOU_WERE_GAY: IPoleRoutine = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-05"),
  category: "exotic",
  song: SONGS.BILLIE_EILISH_WISH_YOU_WERE_GAY,
  instructor: INSTRUCTORS.VERONICA,
  video: { youtubeId: "JBT8tNVkzFE", ...PORTRAIT_1080P }
};

export const GALLANT_WEIGHT_IN_GOLD: IPoleRoutine = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-16"),
  category: "contemporary",
  song: SONGS.GALLANT_WEIGHT_IN_GOLD,
  instructor: INSTRUCTORS.VERONICA,
  video: { youtubeId: "8uRd2M1aDEI", ...PORTRAIT_1080P }
};
