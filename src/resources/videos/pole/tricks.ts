import { PORTRAIT_1080P, STUDIOS, INSTRUCTORS } from "@constants";

export const MY_GRAVITY_2017_2018: IPoleTricksVideo = {
  studio: STUDIOS.MY_GRAVITY,
  dates: { start: new Date("2017-11-29"), end: new Date("2018-01-17") },
  category: "tricks",
  instructor: INSTRUCTORS.JANE,
  video: { youtubeId: "_rdSVk71D64", ...PORTRAIT_1080P }
};
