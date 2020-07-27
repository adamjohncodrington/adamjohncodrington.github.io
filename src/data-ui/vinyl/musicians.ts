import { MUSICIANS as musicians } from "@constants";
import { VINYL_COLLECTION as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getMusicianMatches = (musician: IMusician): Array<IVinyl> => {
  const musicianMatches: Array<IVinyl> = [];
  DATA.forEach((vinyl: IVinyl): void => {
    if (vinyl.musician === musician) musicianMatches.push(vinyl);
  });
  return musicianMatches;
};

const getMusicianDetails = (musician: IMusician): Array<IMiniCardPanelItem> =>
  getMusicianMatches(musician).map(
    ({ year, title }: IVinyl): IMiniCardPanelItem => ({
      mainText: [title],
      dates: [new Date(year)]
    })
  );

export const MUSICIANS: Array<IMiniCard> = Object.values(musicians).map(
  (musician: IMusician): IMiniCard => {
    const { name, previousStageName } = musician;
    return {
      text: name,
      secondaryText: previousStageName && previousStageName.name,
      ...getItemCounts({ item: { musician }, data: { vinyls: DATA } }),
      details: getMusicianDetails(musician)
    };
  }
);
