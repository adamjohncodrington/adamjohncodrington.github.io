import { PAGE_SECTION_TITLES } from "@constants";
import { GIGS as FACTORY } from "factories";
import { SVG } from "resources";

const BUCKET_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  SvgIcon: SVG.STARS,
  data: { countedListItems: FACTORY.BUCKET_LIST }
};

const FESTIVALS: IPageSection = {
  SvgIcon: SVG.PEACE_SIGN,
  title: PAGE_SECTION_TITLES.FESTIVALS,
  data: { countedListItems: FACTORY.FESTIVALS }
};

const ARTISTS: IPageSection = {
  title: PAGE_SECTION_TITLES.ARTISTS,
  SvgIcon: SVG.ARTIST,
  data: { countedListItems: FACTORY.MUSICIANS },
  count: FACTORY.MUSICIANS.length
};

const FRIENDS: IPageSection = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION_TITLES.FRIENDS,
  data: { countedListItems: FACTORY.FRIENDS }
};

const SOLO: IPageSection = {
  SvgIcon: SVG.SOLO,
  title: PAGE_SECTION_TITLES.SOLO,
  data: { gigsAndFestivals: FACTORY.SOLO }
};

const FAVOURITES: IPageSection = {
  SvgIcon: SVG.HEART,
  title: PAGE_SECTION_TITLES.FAVOURITES,
  data: { gigsAndFestivals: FACTORY.FAVOURITES }
};

const UP_NEXT: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { gigsAndFestivals: FACTORY.UP_NEXT },
  count: FACTORY.UP_NEXT.length
};

const VENUES: IPageSection = {
  SvgIcon: SVG.STADIUM,
  title: PAGE_SECTION_TITLES.VENUES,
  data: { countedListItems: FACTORY.VENUES },
  count: FACTORY.VENUES.length
};

const VIDEOS: IPageSection = {
  SvgIcon: SVG.VIDEO_CAMERA,
  title: PAGE_SECTION_TITLES.VIDEOS,
  data: { videoCards: FACTORY.VIDEOS }
};

const YEARS: Array<IPageSection> = FACTORY.YEARS.map(
  (year: Array<IGigOrFestival>): IPageSection => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: { gigsAndFestivals: year }
  })
);

export const GIGS: Array<IPageSection> = [
  ARTISTS,
  BUCKET_LIST,
  FAVOURITES,
  FESTIVALS,
  FRIENDS,
  SOLO,
  UP_NEXT,
  VENUES,
  VIDEOS,
  ...YEARS
];
