import { VIDEOS } from "resources";

const poleVideos: Array<IPoleRoutine> = Object.values(VIDEOS.POLE);

export const IMPROV: Array<IPoleRoutine> = poleVideos.filter(
  ({ category }: IPoleRoutine): boolean => category === "improv"
);

export const EXOTIC: Array<IPoleRoutine> = poleVideos.filter(
  ({ category }: IPoleRoutine): boolean => category === "exotic"
);

export const CONTEMPORARY: Array<IPoleRoutine> = poleVideos.filter(
  ({ category }: IPoleRoutine): boolean => category === "contemporary"
);
