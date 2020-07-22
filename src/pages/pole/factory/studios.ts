import { POLE_STUDIOS } from "@constants";

export const STUDIOS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  POLE_STUDIOS
).map(
  ({ name, branch }: IPoleStudio): ICountedListItem => ({
    text: name,
    secondaryText: branch,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
