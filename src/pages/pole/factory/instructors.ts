import { POLE_INSTRUCTORS } from "@constants";

export const INSTRUCTORS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  POLE_INSTRUCTORS
).map(
  ({ name, stageName }: IPoleInstructor): ICountedListItem => ({
    text: name,
    secondaryText: stageName,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
