import { PAGE_SECTION } from "@constants";
import {
  SvgStars,
  SvgFlag,
  SvgCity,
  SvgFriends,
  SvgPalmTree,
  SvgNotepad,
  SvgMapPin,
  SvgRollerCoaster,
  SvgVideoCamera,
  SvgCamera,
  PHOTOS_TRAVEL_ARRAY,
  YOUTUBE
} from "resources";
import { isInFuture } from "utils";

import { DATA } from "./data";
import { FACTORY } from "./factory";

const SECTION_BUCKET_LIST_TRAVEL: IPageSection = {
  SvgIcon: SvgStars,
  title: PAGE_SECTION.TITLES.BUCKET_LIST,
  data: { countedListItems: FACTORY.BUCKET_LIST }
};

const SECTION_CITIES: IPageSection = {
  SvgIcon: SvgCity,
  title: PAGE_SECTION.TITLES.CITIES,
  data: { countedListItems: FACTORY.CITIES },
  count: FACTORY.CITIES.length,
  starCount: FACTORY.CITIES.filter(
    ({ star }: ICountedListItem): boolean => !!star
  ).length
};

const SECTION_COUNTRIES: IPageSection = {
  title: PAGE_SECTION.TITLES.COUNTRIES,
  SvgIcon: SvgFlag,
  data: { countedListItems: FACTORY.COUNTRIES },
  count: FACTORY.COUNTRIES.length
};

const SECTION_FRIENDS_TRAVEL: IPageSection = {
  SvgIcon: SvgFriends,
  title: PAGE_SECTION.TITLES.FRIENDS,
  data: { countedListItems: FACTORY.FRIENDS }
};

const SECTION_HIGHLIGHTS: IPageSection = {
  title: PAGE_SECTION.TITLES.HIGHLIGHTS,
  SvgIcon: SvgMapPin,
  data: { countedListItems: FACTORY.HIGHLIGHTS }
};

const SECTION_ISLANDS: IPageSection = {
  title: PAGE_SECTION.TITLES.ISLANDS,
  SvgIcon: SvgPalmTree,
  data: { countedListItems: FACTORY.ISLANDS }
};

const SECTION_THEME_PARKS: IPageSection = {
  SvgIcon: SvgRollerCoaster,
  title: PAGE_SECTION.TITLES.THEME_PARKS,
  hide: true,
  data: { countedListItems: FACTORY.THEME_PARKS },
  count: FACTORY.THEME_PARKS.length
};

const SECTION_UP_NEXT_TRAVEL: IPageSection = {
  SvgIcon: SvgNotepad,
  title: PAGE_SECTION.TITLES.UP_NEXT,
  data: { trips: FACTORY.UP_NEXT }
};

const SECTION_VIDEOS_TRAVEL: IPageSection = {
  SvgIcon: SvgVideoCamera,
  title: PAGE_SECTION.TITLES.VIDEOS,
  data: { videos: Object.values(YOUTUBE.TRAVEL) }
};

const SECTION_PHOTOS_TRAVEL: IPageSection = {
  SvgIcon: SvgCamera,
  title: PAGE_SECTION.TITLES.PHOTOS,
  data: { photoGrid: { photos: PHOTOS_TRAVEL_ARRAY, columnCount: 4 } }
};

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
  (year: Array<ITrip>): IPageSection => ({
    title: year[0][0].dates[0].getFullYear().toString(),
    count: year.length,
    data: {
      trips: year
        .flat()
        .filter(({ dates }: ITripLeg): boolean => !isInFuture(dates[0]))
    }
  })
);

export const sections: Array<IPageSection> = [
  SECTION_BUCKET_LIST_TRAVEL,
  SECTION_CITIES,
  SECTION_COUNTRIES,
  SECTION_FRIENDS_TRAVEL,
  SECTION_HIGHLIGHTS,
  SECTION_ISLANDS,
  SECTION_THEME_PARKS,
  SECTION_PHOTOS_TRAVEL,
  SECTION_UP_NEXT_TRAVEL,
  SECTION_VIDEOS_TRAVEL,
  ...SECTIONS_YEARS
].filter((pageSection: IPageSection): boolean => !pageSection.hide);
