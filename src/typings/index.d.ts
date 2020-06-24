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

interface IPageSection {
  title: string;
  icon?: IImageSrc;
  data: IPageSectionDataTypes;
  count?: number;
  starredCount?: number;
  initiallyExpanded?: boolean;
  isStatic?: boolean;
}

interface IPage {
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
  page: IPage;
}

type IconsObject = { [iconName: string]: IImageSrc };
type RecipePhotosObject = { [recipe: string]: IImageSrc };
type VinylPhotosObject = { [artist: string]: { [album: string]: IImageSrc } };

interface IListItemWithPaddingTopFlag {
  text: string;
  addPaddingTop?: boolean;
}
