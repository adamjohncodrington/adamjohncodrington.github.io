import { DATA } from "../data";

export const VIDEOS: Array<IGig> = DATA.ALL.filter(
  ({ videoSrc }: IGig): boolean => !!videoSrc
);
