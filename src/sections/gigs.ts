import { PAGE_SECTION_TITLES } from "@constants";
import { GIGS as DATA } from "data-ui";
import { SVG } from "resources";

const BUCKET_LIST: IPageSection = {
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  SvgIcon: SVG.STARS,
  data: { miniCards: DATA.BUCKET_LIST }
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
  data: { cards: DATA.SOLO },
  hide: true
};

const FAVOURITES: IPageSection = {
  SvgIcon: SVG.HEART,
  shuffle: true,
  title: PAGE_SECTION_TITLES.FAVOURITES,
  data: { cards: DATA.FAVOURITES },
  hide: true
};

const PHOTOS: IPageSection = {
  SvgIcon: SVG.CAMERA,
  title: PAGE_SECTION_TITLES.PHOTOS,
  data: { photoGrid: { photos: DATA.PHOTOS } }
};

const UP_NEXT: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { cards: DATA.UP_NEXT },
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
  data: { miniCards: DATA.VIDEOS },
  count: DATA.VIDEOS.length
};

const YEARS: IPageSection[] = DATA.YEARS.map(
  (year: ICard[]): IPageSection => ({
    title: year[0].year.toString(),
    count: year.length,
    data: { cards: year }
  })
);

export const GIGS: IPageSection[] = [
  MUSICIANS,
  BUCKET_LIST,
  FAVOURITES,
  FESTIVALS,
  FRIENDS,
  PHOTOS,
  SOLO,
  UP_NEXT,
  VENUES,
  VIDEOS,
  ...YEARS
];
