import { PAGE_SECTION_TITLES } from "@constants";
import {
  SvgArtist,
  SvgStars,
  SvgPeaceSign,
  SvgFriends,
  SvgNotepad,
  SvgStadium,
  SvgVideoCamera
} from "resources";

import { FACTORY } from "./factory";
import { DATA } from "./data";
import { isInFuture } from "utils";

const SECTION_BUCKET_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  SvgIcon: SvgStars,
  data: { countedListItems: FACTORY.BUCKET_LIST },
  count: FACTORY.BUCKET_LIST.length
};

const SECTION_FESTIVALS: IPageSection = {
  SvgIcon: SvgPeaceSign,
  title: "Festivals",
  data: { countedListItems: FACTORY.FESTIVALS }
};

const SECTION_ARTISTS: IPageSection = {
  title: "Artists",
  SvgIcon: SvgArtist,
  data: { countedListItems: FACTORY.MUSICIANS },
  count: FACTORY.MUSICIANS.length
};

const SECTION_FRIENDS_GIGS: IPageSection = {
  SvgIcon: SvgFriends,
  title: PAGE_SECTION_TITLES.FRIENDS,
  data: { countedListItems: FACTORY.FRIENDS }
};

const SECTION_UP_NEXT_GIGS: IPageSection = {
  SvgIcon: SvgNotepad,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { gigs: FACTORY.UP_NEXT },
  count: FACTORY.UP_NEXT.length
};

const SECTION_VENUES_GIGS: IPageSection = {
  SvgIcon: SvgStadium,
  title: "Venues",
  data: { countedListItems: FACTORY.VENUES },
  count: FACTORY.VENUES.length
};

const SECTION_VIDEOS_GIGS: IPageSection = {
  autoExpandAlways: true,
  SvgIcon: SvgVideoCamera,
  title: PAGE_SECTION_TITLES.VIDEOS,
  data: { gigs: FACTORY.VIDEOS },
  count: FACTORY.VIDEOS.length
};

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
  (year: Array<IGig>): IPageSection => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: {
      gigs: year.filter(({ dates }: IGig): boolean => !isInFuture(dates[0]))
    }
  })
);

export const sections: Array<IPageSection> = [
  SECTION_ARTISTS,
  SECTION_BUCKET_LIST,
  SECTION_FESTIVALS,
  SECTION_FRIENDS_GIGS,
  SECTION_UP_NEXT_GIGS,
  SECTION_VENUES_GIGS,
  SECTION_VIDEOS_GIGS,
  ...SECTIONS_YEARS
];
