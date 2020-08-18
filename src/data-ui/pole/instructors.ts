import { INSTRUCTORS as instructors } from "@constants";
import { POLE_ROUTINES, POLE_TRICKS_VIDEOS } from "data-raw";

import {
  mapPoleRoutineToMiniCardDetail,
  mapPoleTricksVideoToMiniCardDetail
} from "./utils";

const getInstructorRoutineMatches = (
  instructor: IPoleInstructor
): IPoleRoutine[] =>
  POLE_ROUTINES.reduce(
    (matches: IPoleRoutine[], routine: IPoleRoutine): IPoleRoutine[] =>
      routine.choreographer === instructor ? [...matches, routine] : matches,
    []
  );

const getInstructorTricksMatches = (
  instructor: IPoleInstructor
): IPoleTricksVideo[] =>
  POLE_TRICKS_VIDEOS.reduce(
    (
      matches: IPoleTricksVideo[],
      tricksVideo: IPoleTricksVideo
    ): IPoleTricksVideo[] =>
      tricksVideo.instructor === instructor
        ? [...matches, tricksVideo]
        : matches,
    []
  );

const getInstructorDetails = (
  instructor: IPoleInstructor
): IMiniCardPanelDetail[] => [
  ...getInstructorRoutineMatches(instructor).map(
    (poleRoutine: IPoleRoutine): IMiniCardPanelDetail =>
      mapPoleRoutineToMiniCardDetail(poleRoutine)
  ),
  ...getInstructorTricksMatches(instructor).map(
    (poleTricksVideo: IPoleTricksVideo): IMiniCardPanelDetail =>
      mapPoleTricksVideoToMiniCardDetail(poleTricksVideo)
  )
];

export const INSTRUCTORS: IMiniCard[] = Object.values(instructors).map(
  (instructor: IPoleInstructor): IMiniCard => {
    const { name, stageName } = instructor;
    const details: IMiniCardPanelDetail[] = getInstructorDetails(instructor);
    const instructorName: string = stageName || name;
    return {
      primaryText: instructorName,
      primaryTextAlt: stageName ? name : undefined,
      sort: [instructorName],
      primaryCount: details.length || undefined,
      details: details.length > 0 ? details : undefined
    };
  }
);
