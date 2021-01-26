import { MUSICIANS as musicians } from "@constants";
import { VINYL_PURCHASED as DATA } from "data-raw";
import { getItemCounts } from "utils";

import { mapAlbumToPhoto } from "./utils";

const getMusicianMatches = (musician: Musician): IVinyl[] =>
  DATA.reduce(
    (matches: IVinyl[], vinyl: IVinyl): IVinyl[] =>
      vinyl.musician === musician ? [...matches, vinyl] : matches,
    []
  );

export const MUSICIANS: MiniCardProps[] = Object.values(musicians).map(
  (musician: Musician): MiniCardProps => {
    const { name, previousStageName } = musician;
    const photos: IPhoto[] = getMusicianMatches(musician).map(
      (vinyl: IVinyl): IPhoto => mapAlbumToPhoto(vinyl)
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
      photos
    };
  }
);
