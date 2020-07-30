import { MUSICIANS as musicians } from "@constants";
import { VINYL_COLLECTION as DATA } from "data-raw";
import { getItemCounts } from "utils";

import { mapVinylsToMiniCardPanelDetails } from "./utils";

const getMusicianMatches = (musician: IMusician): Array<IVinyl> => {
  const musicianMatches: Array<IVinyl> = [];
  DATA.forEach((vinyl: IVinyl): void => {
    if (vinyl.musician === musician) musicianMatches.push(vinyl);
  });
  return musicianMatches;
};

export const MUSICIANS: Array<IMiniCard> = Object.values(musicians).map(
  (musician: IMusician): IMiniCard => {
    const { name, previousStageName } = musician;
    const panelDetails: Array<IMiniCardPanelDetail> = mapVinylsToMiniCardPanelDetails(
      getMusicianMatches(musician),
      { showMusicianName: false }
    );
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({ item: { musician }, data: { vinyls: DATA } });
    return {
      primaryText: name,
      sort: [name],
      primaryCount,
      secondaryCount,
      secondaryText: previousStageName && previousStageName.name,
      panelDetails
    };
  }
);
