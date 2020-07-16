import { DATA } from "../data";

export const VIDEOS: Array<ITrip> = DATA.ALL.filter(
  ({ youtubeId }: ITrip): boolean => !!youtubeId
).map(
  (gig: ITrip): ITrip => ({
    ...gig,
    hideCompany: true,
    hideSubtitle: true,
    hideVideoIcon: true,
    hideSecondaryBody: true
  })
);
// .sort((a: IGig, b: IGig) =>
//   a.dates[0].valueOf() < b.dates[0].valueOf() ? 1 : -1
// );
