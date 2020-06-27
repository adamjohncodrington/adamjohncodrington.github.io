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

interface ICountedListItem {
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
  countedListItems?: Array<ICountedListItem>;
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
  hide?: boolean;
}

interface IPage {
  title: string;
  path: string;
  SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  sections: Array<IPageSection>;
  count?: number;
  hide?: boolean;
}

type IconsStringObject = { [iconName: string]: IImageSrc };
type RecipePhotosObject = { [recipe: string]: IImageSrc };
type VinylPhotosObject = { [artist: string]: { [album: string]: IImageSrc } };

interface IListItemWithPaddingTopFlag {
  text: string;
  addPaddingTop?: boolean;
}
