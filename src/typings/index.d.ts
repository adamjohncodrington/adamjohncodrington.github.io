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

interface PageSectionData {
  recipes?: Array<IRecipeCard>;
  countedList?: Array<ICountedListEntry>;
  eventCards?: Array<IEventCard>;
}

interface ICountedItem {
  text: string;
  doNotIncludeInList?: boolean;
  favourite?: boolean;
  star?: boolean;
  futureCount: number;
  pastCount: number;
  countInfoIrrelevant?: boolean;
}

interface IEventCard {
  title: string;
  subtitle?: string;
  favourite?: boolean;
  body?: string;
  dates: Array<Date>;
  company: Array<IFriend>;
  disclaimer?: string;
}

interface IPageSectionDataTypes {
  countedItems?: Array<ICountedItem>;
  gigCards?: Array<IGigCard>;
  recipeCards?: Array<IRecipeCard>;
  theatreCards?: Array<ITheatreCard>;
  travelCards?: Array<ITravelCard>;
  vinylCards?: Array<IVinylCard>;
}

interface IPageSectionDisclosure {
  initiallyExpandedOnDesktop?: boolean;
  initiallyExpandedAlways?: boolean;
  isStatic?: boolean;
  onlyHeaderClickable?: boolean;
}

interface IPageSection extends IPageSectionDisclosure {
  title: string;
  icon?: IImageSrc;
  data: IPageSectionDataTypes;
  count?: number;
  starCount?: number;
}

interface IPage {
  count?: number;
  sections: Array<IPageSection>;
}

interface IRoute {
  title: string;
  dest: string;
}

interface IPageRoute extends IRoute {
  hide?: boolean;
  icon: IImageSrc;
  page: IPage;
}

type IconsObject = { [iconName: string]: IImageSrc };
type RecipePhotosObject = { [recipe: string]: IImageSrc };
type VinylPhotosObject = { [artist: string]: { [album: string]: IImageSrc } };

interface IListItemWithPaddingTopFlag {
  text: string;
  addPaddingTop?: boolean;
}
