import { PAGE_SECTION_TITLES } from "@constants";
import { TRAVEL as DATA } from "data-ui";
import { SVG } from "resources";

const BUCKET_LIST: IPageSection = {
  SvgIcon: SVG.STARS,
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  data: { miniCards: DATA.BUCKET_LIST }
};

const CITIES: IPageSection = {
  SvgIcon: SVG.CITY,
  title: PAGE_SECTION_TITLES.CITIES,
  data: { miniCards: DATA.CITIES },
  count: DATA.CITIES.length,
  starCount: DATA.CITIES.filter(({ star }: IMiniCard): boolean => !!star).length
};

const COUNTRIES: IPageSection = {
  title: PAGE_SECTION_TITLES.COUNTRIES,
  SvgIcon: SVG.FLAG,
  data: { miniCards: DATA.COUNTRIES },
  count: DATA.COUNTRIES.length
};

const WITH: IPageSection = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION_TITLES.WITH,
  data: { miniCards: DATA.WITH }
};

const HIGHLIGHTS: IPageSection = {
  title: PAGE_SECTION_TITLES.HIGHLIGHTS,
  SvgIcon: SVG.MAP_PIN,
  data: { miniCards: DATA.HIGHLIGHTS }
};

const ISLANDS: IPageSection = {
  title: PAGE_SECTION_TITLES.ISLANDS,
  SvgIcon: SVG.PALM_TREE,
  data: { miniCards: DATA.ISLANDS }
};

const THEME_PARKS: IPageSection = {
  SvgIcon: SVG.ROLLER_COASTER,
  title: PAGE_SECTION_TITLES.THEME_PARKS,
  hide: true,
  data: { miniCards: DATA.THEME_PARKS },
  count: DATA.THEME_PARKS.length
};

const UP_NEXT: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { cards: DATA.UP_NEXT }
};

const VIDEOS: IPageSection = {
  SvgIcon: SVG.VIDEO_CAMERA,
  title: PAGE_SECTION_TITLES.VIDEOS,
  data: { cards: DATA.VIDEOS }
};

const PHOTOS: IPageSection = {
  SvgIcon: SVG.CAMERA,
  title: PAGE_SECTION_TITLES.PHOTOS,
  data: { photoGrid: { photos: DATA.PHOTOS, columnCount: 3 } }
};

const YEARS: IPageSection[] = DATA.YEARS.map(
  (year: ICard[]): IPageSection => ({
    title: year[0].year.toString(),
    count: year.length,
    data: {
      cards: year
    }
  })
);

export const TRAVEL: IPageSection[] = [
  BUCKET_LIST,
  CITIES,
  COUNTRIES,
  WITH,
  HIGHLIGHTS,
  ISLANDS,
  THEME_PARKS,
  PHOTOS,
  UP_NEXT,
  VIDEOS
]
  .sort((a: IPageSection, b: IPageSection): number =>
    a.title.localeCompare(b.title)
  )
  .concat(YEARS);
