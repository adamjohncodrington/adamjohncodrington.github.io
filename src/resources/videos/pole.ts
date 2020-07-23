import { PORTRAIT_1080P, POLE_STUDIOS, SONGS } from "@constants";

// TODO: bump this to 1080p portrait
export const IMPROV_AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME: IPoleVideo = {
  studio: POLE_STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  ...PORTRAIT_1080P,
  category: "improv",
  song: SONGS.AMY_WINEHOUSE_LOVE_IS_A_LOSING_GAME,
  instructor: "none",
  youtubeId: "ju-1nlmZfW8"
};

// TODO: bump this to 1080p portrait
export const IMPROV_ELLIE_GOULDING_START: IPoleVideo = {
  studio: POLE_STUDIOS.DAN_LEA_STUDIO,
  date: new Date("2020-07-20"),
  ...PORTRAIT_1080P,
  category: "improv",
  song: SONGS.ELLIE_GOULDING_START,
  instructor: "none",
  youtubeId: "zMrrMXu4oLA"
};
