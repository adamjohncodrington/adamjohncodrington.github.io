type ITicketType = string;
type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface IPerson extends I_Name {
  initials: string;
}

interface Friend extends IPerson {
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
  locations: LocationProps[];
}

interface IRecipeHeader extends IRecipe, IDisclosureHeader {}

interface Song {
  musician: Musician;
  title: string;
  year: number;
}

interface Actor extends I_Name, I__Favourite {}

interface Play extends I_Name, I__Favourite {}

interface Theatre extends I_Name, I__Favourite {}

interface TheatreVisit extends I_Date, I__Favourite, I_Company {
  play: Play;
  theatre: Theatre;
  cast?: Actor[];
}

interface I_AlbumPhoto {
  photo: IAlbumPhoto;
}

interface IAlbum extends I_AlbumPhoto {
  musician: Musician;
  title: string;
  year: number;
  appleMusicId: string;
}

interface IHeadline extends I__Faded {
  text: string;
  subText?: string;
}

interface SymbolProps extends I_Background, I__Border, I__BorderRadius {
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

interface Retailer extends I_Name {
  online: boolean;
  branch?: string;
}

interface I_CostExcDelivery {
  costExcDelivery: number;
}

interface IVinylExtraCopy extends I_AlbumPhoto, I_Colors, I_CostExcDelivery {}

interface Vinyl extends IAlbum, I_Colors, I_CostExcDelivery, I_Signed {
  retailer: Retailer;
  gift?: IGift;
  sides: 2 | 4;
  inches: 7 | 10 | 12;
  extraCopy?: IVinylExtraCopy;
}

interface LocationProps
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
