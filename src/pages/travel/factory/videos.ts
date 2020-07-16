import { DATA } from "../data";

export const VIDEOS: Array<ITripLeg> = DATA.ALL_FLAT.filter(
  ({ youtubeId }: ITripLeg): boolean => !!youtubeId
).map(
  (gig: ITripLeg): ITripLeg => ({
    ...gig,
    hideCompany: true,
    hideSubtitle: true,
    hideVideoIcon: true,
    hideSecondaryBody: true
  })
);
