import { MUSICIANS as musicians } from "@constants";
import { VINYL_COLLECTION as DATA } from "data-raw";
import { Musician, Photo, Vinyl } from "types";
import { getItemCounts } from "utils";

import { mapVinylToPhoto } from "./utils";

const getMusicianMatches = (musician: Musician): Vinyl[] =>
  DATA.reduce(
    (matches: Vinyl[], vinyl: Vinyl): Vinyl[] =>
      vinyl.musician === musician ? [...matches, vinyl] : matches,
    []
  );

export const MUSICIANS: MiniCardProps[] = Object.values(musicians).map(
  (musician: Musician): MiniCardProps => {
    const { name, previousStageName } = musician;
    const photos: Photo[] = getMusicianMatches(musician).map(mapVinylToPhoto);
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
