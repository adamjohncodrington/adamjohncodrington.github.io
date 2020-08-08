import { PORTRAIT_1080P, STUDIOS, INSTRUCTORS } from "@constants";

export const MY_GRAVITY: IPoleTricksVideo = {
  studio: STUDIOS.MY_GRAVITY,
  dates: { start: new Date("2017-11-29"), end: new Date("2018-01-17") },
  category: "tricks",
  instructor: INSTRUCTORS.JANE,
  video: { youtubeId: "_rdSVk71D64", ...PORTRAIT_1080P }
};

export const TIGRA_GST: IPoleTricksVideo = {
  studio: STUDIOS.TIGRA_GST,
  dates: { start: new Date("2018-04-04"), end: new Date("2018-06-26") },
  category: "tricks",
  instructor: INSTRUCTORS.LAETITIA,
  video: { youtubeId: "FPTjIDKUgXo", ...PORTRAIT_1080P }
};

export const EXOTICA_1: IPoleTricksVideo = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  dates: { start: new Date("2018-08-14"), end: new Date("2018-11-27") },
  category: "tricks",
  instructor: INSTRUCTORS.VERONICA,
  video: { youtubeId: "hFsoQH-b3bQ", ...PORTRAIT_1080P }
};

export const EXOTICA_2: IPoleTricksVideo = {
  studio: STUDIOS.EXOTICA_BERMONDSEY,
  dates: { start: new Date("2019-01-28"), end: new Date("2019-04-07") },
  category: "tricks",
  instructor: INSTRUCTORS.VERONICA,
  video: { youtubeId: "F6jSO01xU5I", ...PORTRAIT_1080P }
};
