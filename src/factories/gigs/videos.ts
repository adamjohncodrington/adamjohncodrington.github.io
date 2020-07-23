import { GIGS as DATA } from "data";

export const VIDEOS: Array<IGig> = DATA.filter(
  ({ video }: IGig): boolean => !!video
)
  .map(
    (gig: IGig): IGig => ({
      ...gig,
      hideCompanySymbols: true,
      hideSubtitle: true,
      hideBody: true,
      hideVideoIcon: true
    })
  )
  .sort((a: IGig, b: IGig): number =>
    a.dates[0].valueOf() < b.dates[0].valueOf() ? 1 : -1
  );
