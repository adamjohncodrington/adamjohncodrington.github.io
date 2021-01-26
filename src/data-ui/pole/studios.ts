import { POLE_ROUTINES, POLE_TRICKS_VIDEOS } from "data-raw";
import { STUDIOS as studios } from "@constants";

import {
  mapPoleRoutineToMiniCardDetail,
  mapPoleTricksVideoToMiniCardDetail
} from "./utils";

const getStudioRoutineMatches = (studio: PoleStudio): PoleRoutine[] =>
  POLE_ROUTINES.reduce(
    (matches: PoleRoutine[], routine: PoleRoutine): PoleRoutine[] =>
      routine.studio === studio ? [...matches, routine] : matches,
    []
  );

const getStudioTricksMatches = (studio: PoleStudio): PoleTricksVideo[] =>
  POLE_TRICKS_VIDEOS.reduce(
    (
      matches: PoleTricksVideo[],
      tricksVideo: PoleTricksVideo
    ): PoleTricksVideo[] =>
      tricksVideo.studio === studio ? [...matches, tricksVideo] : matches,
    []
  );

const getStudioDetails = (studio: PoleStudio): MiniCardPanelDetailProps[] => [
  ...getStudioRoutineMatches(studio).map(
    (poleRoutine: PoleRoutine): MiniCardPanelDetailProps =>
      mapPoleRoutineToMiniCardDetail(poleRoutine)
  ),
  ...getStudioTricksMatches(studio).map(
    (poleTricksVideo: PoleTricksVideo): MiniCardPanelDetailProps =>
      mapPoleTricksVideoToMiniCardDetail(poleTricksVideo)
  )
];

export const STUDIOS: MiniCardProps[] = Object.values(studios).map(
  (studio: PoleStudio): MiniCardProps => {
    const { name, shortName, branch } = studio;
    const details: MiniCardPanelDetailProps[] = getStudioDetails(studio);
    return {
      primaryText: shortName || name,
      primaryTextAlt: branch,
      sort: [name, branch],
      primaryCount: details.length,
      details
    };
  }
);
