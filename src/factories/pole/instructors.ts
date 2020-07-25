import { INSTRUCTORS as instructors } from "@constants";

export const INSTRUCTORS: Array<IBasicListItem> = Object.values(
  instructors
).map(
  ({ name, stageName }: IPoleInstructor): IBasicListItem => ({
    text: name,
    secondaryText: stageName,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
