import { POLE_INSTRUCTORS } from "@constants";

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  POLE_INSTRUCTORS
).map(
  ({ name }: IPoleInstructor): ICountedListItem => ({
    text: name,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
