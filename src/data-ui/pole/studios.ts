import { STUDIOS as studios } from "@constants";

export const STUDIOS: Array<IMiniCard> = Object.values(studios).map(
  ({ name, location }: IPoleStudio): IMiniCard => ({
    primaryText: name,
    sort: [name + "-" + location],
    secondaryText: location
  })
);
