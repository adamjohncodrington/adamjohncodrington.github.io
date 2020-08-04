import { POLE_ROUTINES, POLE_TRICKS_VIDEOS } from "data-raw";
import { STUDIOS as studios } from "@constants";

import {
  mapPoleRoutineToMiniCardDetail,
  mapPoleTricksVideoToMiniCardDetail
} from "./utils";

const getStudioRoutineMatches = (studio: IPoleStudio): Array<IPoleRoutine> =>
  POLE_ROUTINES.reduce(
    (
      matches: Array<IPoleRoutine>,
      routine: IPoleRoutine
    ): Array<IPoleRoutine> =>
      routine.studio === studio ? [...matches, routine] : matches,
    []
  );

const getStudioTricksMatches = (studio: IPoleStudio): Array<IPoleTricksVideo> =>
  POLE_TRICKS_VIDEOS.reduce(
    (
      matches: Array<IPoleTricksVideo>,
      tricksVideo: IPoleTricksVideo
    ): Array<IPoleTricksVideo> =>
      tricksVideo.studio === studio ? [...matches, tricksVideo] : matches,
    []
  );

const getStudioDetails = (studio: IPoleStudio): Array<IMiniCardPanelDetail> => [
  ...getStudioRoutineMatches(studio).map(
    (poleRoutine: IPoleRoutine): IMiniCardPanelDetail =>
      mapPoleRoutineToMiniCardDetail(poleRoutine)
  ),
  ...getStudioTricksMatches(studio).map(
    (poleTricksVideo: IPoleTricksVideo): IMiniCardPanelDetail =>
      mapPoleTricksVideoToMiniCardDetail(poleTricksVideo)
  )
];

export const STUDIOS: Array<IMiniCard> = Object.values(studios).map(
  (studio: IPoleStudio): IMiniCard => {
    const { name, location } = studio;
    const details: Array<IMiniCardPanelDetail> = getStudioDetails(studio);
    return {
      primaryText: name,
      sort: [name, location],
      secondaryText: location,
      primaryCount: details.length,
      details
    };
  }
);
