import { STUDIOS as studios } from "@constants";

export const STUDIOS: Array<IMiniCard> = Object.values(studios).map(
  ({ name, location }: IPoleStudio): IMiniCard => ({
    text: name,
    sort: name + "-" + location,
    secondaryText: location,
    countInfoIrrelevant: true,
    pastCount: 0,
    futureCount: 0
  })
);
