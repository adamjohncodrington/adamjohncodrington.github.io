import { DATA } from "../data";

export const VIDEOS: Array<IGig> = DATA.ALL.filter(
  ({ youtubeId }: IGig): boolean => !!youtubeId
)
  .map(
    (gig: IGig): IGig => ({
      ...gig,
      hideCompany: true,
      hideSubtitle: true,
      hideVideoIcon: true
    })
  )
  .sort((a: IGig, b: IGig) =>
    a.dates[0].valueOf() < b.dates[0].valueOf() ? 1 : -1
  );
