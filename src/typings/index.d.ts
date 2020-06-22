type IFilter = string;

interface INameFavourite {
  name: string;
  favourite?: boolean;
  insignificant?: boolean;
}
interface IFriend extends INameFavourite {
  initials: string;
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
}

type IEventCardType = "gig" | "trip" | "theatre";

type IEventCardRawData = IGigData | ITravelData | ITheatreData;

type IPageSecionType = "recipes" | "event-cards" | "counted-list";

interface IPageSectionDetails {
  title: string;
  id: string;
  type: IPageSectionType;
}

interface PageSectionData {
  recipes?: Array<IRecipeCard>;
  countedList?: Array<ICountedListEntry>;
  eventCards?: Array<IEventCard>;
}

interface ICountedListItem {
  text: string;
  favourite?: boolean;
  star?: boolean;
  futureCount: number;
  pastCount: number;
  ignoreCountInfo?: boolean;
  leaderboard?: boolean;
}

interface IEventCard {
  title: string;
  subtitle?: string;
  favourite: boolean;
  body: string;
  dates: Array<Date>;
  company: Array<IFriend>;
  disclaimer?: string;
}

interface IPageSection {
  details: IPageSectionDetails;
  icon?: IImageSrc;
  data: Array<any>;
  showSectionLength?: boolean;
  listOfRecipes?: boolean;
  expandedAutomatically?: boolean;
}

interface IPageData {
  pastCount?: number;
  futureCount?: number;
  sections: Array<IPageSection>;
}

interface IHomepageRoute {
  title: string;
  dest: string;
}

interface IRoute extends IHomepageRoute {
  icon: IImageSrc;
  page: IPageData;
}

type IconsObject = { [iconName: string]: IImageSrc };
type PhotosObject = { [photoName: string]: IImageSrc };

interface IListItemWithPaddingTopFlag {
  text: string;
  addPaddingTop?: boolean;
}
