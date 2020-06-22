import {
  PAGE_SECTION_IDS,
  MUSIC_VENUES,
  FRIENDS,
  MUSICIANS,
  FESTIVALS
} from "@constants";
import { DATA_GIGS } from "data";

import { mapToCountedList } from "../factory";

const { ALL } = DATA_GIGS;

const FAVOURITES: Array<IGigData> = ALL.filter(item => item.favourite);

const mapToCountedListWrapper = (params: any) =>
  mapToCountedList({
    ...params,
    allData: ALL,
    favouritedData: FAVOURITES
  });

export const CL_BUCKET_LIST: Array<ICountedListItem> = mapToCountedListWrapper({
  bucketListMode: true,
  items: MUSICIANS,
  id: PAGE_SECTION_IDS.MUSICIAN
});

export const CL_FESTIVALS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: FESTIVALS,
  id: PAGE_SECTION_IDS.FESTIVAL,
  filter: "festival"
});

export const CL_FRIENDS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: FRIENDS,
  id: PAGE_SECTION_IDS.FRIEND,
  filter: "gigs"
});

export const CL_MUSICIANS: Array<ICountedListItem> = mapToCountedListWrapper({
  items: MUSICIANS,
  id: PAGE_SECTION_IDS.MUSICIAN
});

export const CL_VENUES: Array<ICountedListItem> = mapToCountedListWrapper({
  items: MUSIC_VENUES,
  id: PAGE_SECTION_IDS.MUSIC_VENUES
});
