import { PAGE_SECTION_TITLES } from "@constants";
import { TRAVEL as DATA } from "data";
import { TRAVEL as FACTORY } from "factories";
import { SVG, PHOTOS as photos } from "resources";
import { isInFuture } from "utils";

const BUCKET_LIST: IPageSection = {
  SvgIcon: SVG.STARS,
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  data: { countedListItems: FACTORY.BUCKET_LIST }
};

const CITIES: IPageSection = {
  SvgIcon: SVG.CITY,
  title: PAGE_SECTION_TITLES.CITIES,
  data: { countedListItems: FACTORY.CITIES },
  count: FACTORY.CITIES.length,
  starCount: FACTORY.CITIES.filter(
    ({ star }: ICountedListItem): boolean => !!star
  ).length
};

const COUNTRIES: IPageSection = {
  title: PAGE_SECTION_TITLES.COUNTRIES,
  SvgIcon: SVG.FLAG,
  data: { countedListItems: FACTORY.COUNTRIES },
  count: FACTORY.COUNTRIES.length
};

const FRIENDS: IPageSection = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION_TITLES.FRIENDS,
  data: { countedListItems: FACTORY.FRIENDS }
};

const HIGHLIGHTS: IPageSection = {
  title: PAGE_SECTION_TITLES.HIGHLIGHTS,
  SvgIcon: SVG.MAP_PIN,
  data: { countedListItems: FACTORY.HIGHLIGHTS }
};

const ISLANDS: IPageSection = {
  title: PAGE_SECTION_TITLES.ISLANDS,
  SvgIcon: SVG.PALM_TREE,
  data: { countedListItems: FACTORY.ISLANDS }
};

const THEME_PARKS: IPageSection = {
  SvgIcon: SVG.ROLLER_COASTER,
  title: PAGE_SECTION_TITLES.THEME_PARKS,
  hide: true,
  data: { countedListItems: FACTORY.THEME_PARKS },
  count: FACTORY.THEME_PARKS.length
};

const UP_NEXT: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { trips: FACTORY.UP_NEXT }
};

const VIDEOS: IPageSection = {
  SvgIcon: SVG.VIDEO_CAMERA,
  title: PAGE_SECTION_TITLES.VIDEOS,
  data: { videoCards: FACTORY.VIDEOS }
};

const PHOTOS: IPageSection = {
  SvgIcon: SVG.CAMERA,
  title: PAGE_SECTION_TITLES.PHOTOS,
  data: {
    photoGrid: { photos: Object.values(photos.TRAVEL).flat(), columnCount: 4 }
  }
};

const YEARS: Array<IPageSection> = DATA.YEARS.map(
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

export const TRAVEL: Array<IPageSection> = [
  BUCKET_LIST,
  CITIES,
  COUNTRIES,
  FRIENDS,
  HIGHLIGHTS,
  ISLANDS,
  THEME_PARKS,
  PHOTOS,
  UP_NEXT,
  VIDEOS,
  ...YEARS
];
