import { STUDIOS as studios } from "@constants";

export const STUDIOS: Array<IBasicListItem> = Object.values(studios).map(
  ({ name, location }: IPoleStudio): IBasicListItem => ({
    text: name,
    secondaryText: location,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
