import { INSTRUCTORS as instructors } from "@constants";

export const INSTRUCTORS: Array<IMiniCard> = Object.values(instructors).map(
  ({ name, stageName }: IPoleInstructor): IMiniCard => ({
    text: stageName || name,
    secondaryText: stageName ? name : undefined,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
