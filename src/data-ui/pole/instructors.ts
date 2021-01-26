import { INSTRUCTORS as instructors } from "@constants";
import { POLE_ROUTINES, POLE_TRICKS_VIDEOS } from "data-raw";

import {
  mapPoleRoutineToMiniCardDetail,
  mapPoleTricksVideoToMiniCardDetail
} from "./utils";

const getRoutinesForInstructor = (instructor: PoleInstructor): PoleRoutine[] =>
  POLE_ROUTINES.reduce(
    (matches: PoleRoutine[], routine: PoleRoutine): PoleRoutine[] =>
      routine.choreographer === instructor ? [...matches, routine] : matches,
    []
  );

const getTricksVideosForInstructor = (
  instructor: PoleInstructor
): PoleTricksVideo[] =>
  POLE_TRICKS_VIDEOS.reduce(
    (
      matches: PoleTricksVideo[],
      tricksVideo: PoleTricksVideo
    ): PoleTricksVideo[] =>
      tricksVideo.instructor === instructor
        ? [...matches, tricksVideo]
        : matches,
    []
  );

const getInstructorDetails = (
  instructor: PoleInstructor
): MiniCardPanelDetailProps[] => [
  ...getRoutinesForInstructor(instructor).map(
    (poleRoutine: PoleRoutine): MiniCardPanelDetailProps =>
      mapPoleRoutineToMiniCardDetail(poleRoutine)
  ),
  ...getTricksVideosForInstructor(instructor).map(
    (poleTricksVideo: PoleTricksVideo): MiniCardPanelDetailProps =>
      mapPoleTricksVideoToMiniCardDetail(poleTricksVideo)
  )
];

export const INSTRUCTORS: MiniCardProps[] = Object.values(instructors).map(
  (instructor: PoleInstructor): MiniCardProps => {
    const { name, stageName } = instructor;
    const details: MiniCardPanelDetailProps[] = getInstructorDetails(
      instructor
    );
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
