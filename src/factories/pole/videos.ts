import { VIDEOS } from "resources";
import { mapPoleVideosToVideoCards } from "utils";

const poleVideos: Array<IPoleVideo> = Object.values(VIDEOS.POLE);

const improv: Array<IPoleVideo> = poleVideos.filter(
  ({ category }: IPoleVideo): boolean => category === "improv"
);

const exotic: Array<IPoleVideo> = poleVideos.filter(
  ({ category }: IPoleVideo): boolean => category === "exotic"
);

const contemporary: Array<IPoleVideo> = poleVideos.filter(
  ({ category }: IPoleVideo): boolean => category === "contemporary"
);

export const IMPROV: Array<IVideoCard> = mapPoleVideosToVideoCards(improv);
export const EXOTIC: Array<IVideoCard> = mapPoleVideosToVideoCards(exotic);
export const CONTEMPORARY: Array<IVideoCard> = mapPoleVideosToVideoCards(
  contemporary
);
