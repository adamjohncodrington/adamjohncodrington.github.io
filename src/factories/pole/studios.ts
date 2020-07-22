import { POLE_STUDIOS as studios } from "@constants";

export const STUDIOS: Array<ICountedListItem> = Object.values(studios).map(
  ({ name, branch }: IPoleStudio): ICountedListItem => ({
    text: name,
    secondaryText: branch,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
