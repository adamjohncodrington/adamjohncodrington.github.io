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

interface IFuturePastCounts {
  futureCount: number;
  pastCount: number;
}

interface ICountedListItem extends IFuturePastCounts {
  text: string;
  doNotIncludeInList?: boolean;
  favourite?: boolean;
  star?: boolean;
  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  isLeaderboardItem?: boolean;
}

interface IEventCard {
  title: string;
  subtitle?: string;
  favourite?: boolean;
  body?: string;
  company: Array<IFriend>;
  dateText: string;
  countdownText?: string;
  note?: string;
}

interface IPageSectionDataTypes {
  countedListItems?: Array<ICountedListItem>;
  gigCards?: Array<IGigCard>;
  recipeCards?: Array<IRecipeCard>;
  theatreCards?: Array<ITheatreCard>;
  travelCards?: Array<ITravelCard>;
  vinylCards?: Array<IVinylCard>;
}

interface IOnlyHeaderClicable {
  onlyHeaderClickable?: boolean;
}

interface IDisclosure extends IOnlyHeaderClicable {
  Header: React.ReactElement;
  autoExpand?: boolean;
  isStatic?: boolean;
}

interface IPageSectionDisclosure extends IOnlyHeaderClicable {
  autoExpandAlways?: boolean;
  autoExpandIf2Columns?: boolean;
  staticAlways?: boolean;
  staticIf2Columns?: boolean;
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
  color?: ColorValue;
}

type IconsStringObject = { [iconName: string]: IImageSrc };
type RecipePhotosObject = { [recipe: string]: IImageSrc };
type VinylPhotosObject = { [artist: string]: { [album: string]: IImageSrc } };

interface IListItemWithPaddingTopFlag {
  text: string;
  addPaddingTop?: boolean;
}
