import { INSTRUCTORS as instructors } from "@constants";

export const INSTRUCTORS: Array<ICountedListItem> = Object.values(
  instructors
).map(
  ({ name, stageName }: IPoleInstructor): ICountedListItem => ({
    text: name,
    secondaryText: stageName,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
