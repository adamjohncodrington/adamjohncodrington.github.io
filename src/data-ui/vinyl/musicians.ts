import { MUSICIANS as musicians } from "@constants";
import { VINYL_COLLECTION as DATA } from "data-raw";
import { APPLE_MUSIC_URL_PREFIX } from "config";
import { getItemCounts } from "utils";

const getMusicianMatches = (musician: IMusician): Array<IVinyl> => {
  const musicianMatches: Array<IVinyl> = [];
  DATA.forEach((vinyl: IVinyl): void => {
    if (vinyl.musician === musician) musicianMatches.push(vinyl);
  });
  return musicianMatches;
};

const getMusicianDetails = (musician: IMusician): Array<IMiniCardPanelDetail> =>
  getMusicianMatches(musician).map(
    ({ year, title, appleMusicId }: IVinyl): IMiniCardPanelDetail => ({
      mainText: [title],
      year,
      sort: [year],
      headerLink: APPLE_MUSIC_URL_PREFIX + appleMusicId
    })
  );

export const MUSICIANS: Array<IMiniCard> = Object.values(musicians).map(
  (musician: IMusician): IMiniCard => {
    const { name, previousStageName } = musician;
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
      details: getMusicianDetails(musician)
    };
  }
);
