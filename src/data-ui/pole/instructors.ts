import { INSTRUCTORS as instructors } from "@constants";
import { POLE_ROUTINES as DATA } from "data-raw";

const getInstructorMatches = (
  instructor: IPoleInstructor
): Array<IPoleRoutine> => {
  const instructorMatches: Array<IPoleRoutine> = [];
  DATA.forEach((routine: IPoleRoutine): void => {
    if (routine.choreographer === instructor) instructorMatches.push(routine);
  });
  return instructorMatches;
};

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
    const panelDetails: Array<IMiniCardPanelDetail> = getInstructorDetails(
      instructor
    );
    const instructorName: string = stageName || name;
    return {
      primaryText: instructorName,
      sort: [instructorName],
      secondaryText: stageName ? name : undefined,
      primaryCount: panelDetails.length || undefined,
      panelDetails: panelDetails.length > 0 ? panelDetails : undefined
    };
  }
);
