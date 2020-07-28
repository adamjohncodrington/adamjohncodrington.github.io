import { VIDEOS } from "resources";

const poleVideos: Array<IPoleRoutine> = Object.values(VIDEOS.POLE);

export const IMPROV: Array<IPoleRoutine> = poleVideos.filter(
  ({ category }: IPoleRoutine): boolean =>
    category === "contemporary-improv" || category === "exotic-improv"
);

export const EXOTIC: Array<IPoleRoutine> = poleVideos.filter(
  ({ category }: IPoleRoutine): boolean => category === "exotic-class"
  // || category === "exotic-improv"
);

export const CONTEMPORARY: Array<IPoleRoutine> = poleVideos.filter(
  ({ category }: IPoleRoutine): boolean => category === "contemporary-class"
  // || category === "contemporary-improv"
);
