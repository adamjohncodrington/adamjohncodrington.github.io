import { INSTRUCTORS as instructors } from "@constants";
import { POLE_ROUTINES as DATA } from "data-raw";

const getInstructorMatches = (
  instructor: IPoleInstructor
): Array<IPoleRoutine> =>
  DATA.reduce(
    (
      matches: Array<IPoleRoutine>,
      routine: IPoleRoutine
    ): Array<IPoleRoutine> =>
      routine.choreographer === instructor ? [...matches, routine] : matches,
    []
  );

const getInstructorDetails = (
  instructor: IPoleInstructor
): Array<IMiniCardPanelDetail> =>
  getInstructorMatches(instructor).map(
    ({
      song: {
        musician: { name },
        title
      },
      date,
      video
    }: IPoleRoutine): IMiniCardPanelDetail => ({
      mainText: [`${name} - ${title}`],
      dates: [date],
      sort: [date],
      video
    })
  );

export const INSTRUCTORS: Array<IMiniCard> = Object.values(instructors).map(
  (instructor: IPoleInstructor): IMiniCard => {
    const { name, stageName } = instructor;
    const details: Array<IMiniCardPanelDetail> = getInstructorDetails(
      instructor
    );
    const instructorName: string = stageName || name;
    return {
      primaryText: instructorName,
      sort: [instructorName],
      secondaryText: stageName ? name : undefined,
      primaryCount: details.length || undefined,
      details: details.length > 0 ? details : undefined
    };
  }
);
