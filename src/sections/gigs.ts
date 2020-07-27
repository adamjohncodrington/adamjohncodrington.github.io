import { PAGE_SECTION_TITLES } from "@constants";
import { GIGS as DATA } from "data-gen";
import { SVG } from "resources";

const BUCKET_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  SvgIcon: SVG.STARS,
  data: { miniCards: DATA.BUCKET_LIST },
  count: DATA.BUCKET_LIST.length
};

const FESTIVALS: IPageSection = {
  SvgIcon: SVG.PEACE_SIGN,
  title: PAGE_SECTION_TITLES.FESTIVALS,
  data: { miniCards: DATA.FESTIVALS }
};

const MUSICIANS: IPageSection = {
  title: PAGE_SECTION_TITLES.MUSICIANS,
  SvgIcon: SVG.ARTIST,
  data: { miniCards: DATA.MUSICIANS },
  count: DATA.MUSICIANS.length
};

const FRIENDS: IPageSection = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION_TITLES.FRIENDS,
  data: { miniCards: DATA.FRIENDS }
};

const SOLO: IPageSection = {
  SvgIcon: SVG.SOLO,
  title: PAGE_SECTION_TITLES.SOLO,
  data: { musicEvents: DATA.SOLO }
};

const FAVOURITES: IPageSection = {
  SvgIcon: SVG.HEART,
  title: PAGE_SECTION_TITLES.FAVOURITES,
  data: { musicEvents: DATA.FAVOURITES }
};

const UP_NEXT: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { musicEvents: DATA.UP_NEXT },
  count: DATA.UP_NEXT.length
};

const VENUES: IPageSection = {
  SvgIcon: SVG.STADIUM,
  title: PAGE_SECTION_TITLES.VENUES,
  data: { miniCards: DATA.VENUES },
  count: DATA.VENUES.length
};

const VIDEOS: IPageSection = {
  SvgIcon: SVG.VIDEO_CAMERA,
  title: PAGE_SECTION_TITLES.VIDEOS,
  data: { videoCards: DATA.VIDEOS },
  count: DATA.VIDEOS.length
};

const YEARS: Array<IPageSection> = DATA.YEARS.map(
  (year: Array<IMusicEvent>): IPageSection => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: { musicEvents: year }
  })
);

export const GIGS: Array<IPageSection> = [
  MUSICIANS,
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
