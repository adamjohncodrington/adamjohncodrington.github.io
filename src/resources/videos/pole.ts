import { PORTRAIT_1080P, STUDIOS, SONGS, INSTRUCTORS } from "@constants";

export const AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME: IPoleVideo = {
  ...PORTRAIT_1080P,
  studio: STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  category: "improv",
  song: SONGS.AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME,
  instructor: "none",
  youtubeId: "ju-1nlmZfW8"
};

export const ELLIE_GOULDING_START: IPoleVideo = {
  ...PORTRAIT_1080P,
  studio: STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  category: "improv",
  song: SONGS.ELLIE_GOULDING_START,
  instructor: "none",
  youtubeId: "zMrrMXu4oLA"
};

export const TAIKO_NO_MORE: IPoleVideo = {
  ...PORTRAIT_1080P,
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-11"),
  category: "exotic",
  song: SONGS.TAIKO_NO_MORE,
  instructor: INSTRUCTORS.MARINE,
  youtubeId: "MhkVVvWvYro"
};

export const JORJA_SMITH_TOMORROW: IPoleVideo = {
  ...PORTRAIT_1080P,
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-02-20"),
  category: "contemporary",
  song: SONGS.JORJA_SMITH_TOMORROW,
  instructor: INSTRUCTORS.MARINE,
  youtubeId: "BR1YB5hJlmc"
};

export const BILLIE_EILISH_WISH_YOU_WERE_GAY: IPoleVideo = {
  ...PORTRAIT_1080P,
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-05"),
  category: "exotic",
  song: SONGS.BILLIE_EILISH_WISH_YOU_WERE_GAY,
  instructor: INSTRUCTORS.VERONICA,
  youtubeId: "JBT8tNVkzFE"
};

export const GALLANT_WEIGHT_IN_GOLD: IPoleVideo = {
  ...PORTRAIT_1080P,
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  date: new Date("2020-01-16"),
  category: "contemporary",
  song: SONGS.GALLANT_WEIGHT_IN_GOLD,
  instructor: INSTRUCTORS.VERONICA,
  youtubeId: "8uRd2M1aDEI"
};
