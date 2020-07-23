import { STUDIOS as studios } from "@constants";

export const STUDIOS: Array<ICountedListItem> = Object.values(studios).map(
  ({ name, location }: IPoleStudio): ICountedListItem => ({
    text: name,
    secondaryText: location,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
