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

type IInputData =
  | IActor
  | IFriend
  | IMusician
  | IPlay
  | IFestival
  | IMusicVenue
  | IAttraction
  | ITheatreVenue
  | ILocationItem;

type IEventCardType = "gig" | "trip" | "theatre";
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

interface IEventCard {
  title: string;
  subtitle?: string;
  favourite: boolean;
  body: string;
  eventType: IEventCardType;
  dates: Array<Date>;
  company?: Array<IFriend>;
  disclaimer?: string;
}

interface IPageSection {
  details: IPageSectionDetails;
  icon?: IImageSrc;
  data: Array<any>;
  leaderboard?: true;
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
  pageData: IPageData;
}

type ITheme = any;
