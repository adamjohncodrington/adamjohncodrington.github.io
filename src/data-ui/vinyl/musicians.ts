import { MUSICIANS as musicians } from "@constants";
import { VINYL_PURCHASED as DATA } from "data-raw";
import { getItemCounts } from "utils";

import { mapVinylsToMiniCardPanelDetails } from "./utils";

const getMusicianMatches = (musician: IMusician): IVinyl[] =>
  DATA.reduce(
    (matches: IVinyl[], vinyl: IVinyl): IVinyl[] =>
      vinyl.musician === musician ? [...matches, vinyl] : matches,
    []
  );

export const MUSICIANS: IMiniCard[] = Object.values(musicians).map(
  (musician: IMusician): IMiniCard => {
    const { name, previousStageName } = musician;
    const details: IMiniCardPanelDetail[] = mapVinylsToMiniCardPanelDetails(
      getMusicianMatches(musician),
      { showMusicianName: false }
    );
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({ item: { musician }, data: { vinyls: DATA } });
    return {
      primaryText: name,
      primaryTextAlt: previousStageName && previousStageName.name,
      sort: [name],
      primaryCount,
      secondaryCount,
      details
    };
  }
);
