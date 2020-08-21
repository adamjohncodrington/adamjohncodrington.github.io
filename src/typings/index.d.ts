type ITicketType = string;
type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface IPerson extends I_Name {
  initials: string;
}

interface IFriend extends IPerson {
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
}

//TODO: make date prop and title for alt purposes
interface IPhoto extends I__Hide, I__Date {
  href?: string;
  title?: string;
  freeimagehostId: string;
}

interface IAlbumPhoto extends IPhoto {
  discPhoto?: IPhoto;
}

interface I_OrientationQuality {
  orientation: "portrait" | "landscape";
  quality: "720p" | "1080p";
}

interface IVideo extends I_OrientationQuality {
  youtubeId: string;
}

interface ITravelVideo extends IVideo, I_StartEndDates {
  locations: ILocation[];
}

interface IRecipeHeader extends IRecipe, IDisclosureHeader {}

interface ISong {
  musician: IMusician;
  title: string;
  year: number;
}

interface IActor extends I_Name, I__Favourite {}

interface IPlay extends I_Name, I__Favourite {}

interface ITheatre extends I_Name, I__Favourite {}

interface ITheatreVisit extends I_Date, I__Favourite, I_Company {
  play: IPlay;
  theatre: ITheatre;
  cast?: IActor[];
}

interface IAlbum {
  musician: IMusician;
  title: string;
  year: number;
  photo: IAlbumPhoto;
  appleMusicId: string;
}

interface IHeadline extends I__Faded {
  text: string;
  subText?: string;
}

interface ISymbol extends I_Background, I__Border, I__BorderRadius {
  svgFill?: string;
  contents: {
    text?: string;
    icon?:
      | "photo"
      | "video"
      | "pen"
      | "gift"
      | "home"
      | "exotic"
      | "improvisation"
      | "contemporary"
      | "stars"
      | "guitar"
      | "tricks";
  };
}

interface IRetailer extends I_Name {
  online: boolean;
  branch?: string;
}

interface IVinyl extends I_Colors, IAlbum, I_Signed {
  costExcDelivery: number;
  retailer: IRetailer;
  gift?: IGift;
  sides: 2 | 4;
  inches: 10 | 12;
  arrived: boolean;
}

interface ILocation
  extends I_Name,
    I__Favourite,
    I__Insignificant,
    I__ExcludeFromBucketList {
  island?: boolean;
  insignificant?: boolean;
  englishName?: string;
  shortName?: string;
  foreignName?: string;
}
