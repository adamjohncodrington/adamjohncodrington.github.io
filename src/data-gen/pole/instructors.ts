import { INSTRUCTORS as instructors } from "@constants";

export const INSTRUCTORS: Array<IMiniCard> = Object.values(instructors).map(
  ({ name, stageName }: IPoleInstructor): IMiniCard => ({
    text: name,
    secondaryText: stageName,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
