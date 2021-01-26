import { POLE_ROUTINES, POLE_TRICKS_VIDEOS } from "data-raw";
import { STUDIOS as studios } from "@constants";

import {
  mapPoleRoutineToMiniCardDetail,
  mapPoleTricksVideoToMiniCardDetail
} from "./utils";

const getStudioRoutineMatches = (studio: PoleStudio): IPoleRoutine[] =>
  POLE_ROUTINES.reduce(
    (matches: IPoleRoutine[], routine: IPoleRoutine): IPoleRoutine[] =>
      routine.studio === studio ? [...matches, routine] : matches,
    []
  );

const getStudioTricksMatches = (studio: PoleStudio): IPoleTricksVideo[] =>
  POLE_TRICKS_VIDEOS.reduce(
    (
      matches: IPoleTricksVideo[],
      tricksVideo: IPoleTricksVideo
    ): IPoleTricksVideo[] =>
      tricksVideo.studio === studio ? [...matches, tricksVideo] : matches,
    []
  );

const getStudioDetails = (studio: PoleStudio): IMiniCardPanelDetail[] => [
  ...getStudioRoutineMatches(studio).map(
    (poleRoutine: IPoleRoutine): IMiniCardPanelDetail =>
      mapPoleRoutineToMiniCardDetail(poleRoutine)
  ),
  ...getStudioTricksMatches(studio).map(
    (poleTricksVideo: IPoleTricksVideo): IMiniCardPanelDetail =>
      mapPoleTricksVideoToMiniCardDetail(poleTricksVideo)
  )
];

export const STUDIOS: MiniCardProps[] = Object.values(studios).map(
  (studio: PoleStudio): MiniCardProps => {
    const { name, shortName, branch } = studio;
    const details: IMiniCardPanelDetail[] = getStudioDetails(studio);
    return {
      primaryText: shortName || name,
      primaryTextAlt: branch,
      sort: [name, branch],
      primaryCount: details.length,
      details
    };
  }
);
