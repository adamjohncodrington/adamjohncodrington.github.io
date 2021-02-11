type ITicketType = string;
type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

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

interface IHeadline extends I__Faded {
  text: string;
  subText?: string;
}

type SymbolProps = {
  background: string;
  border?: string;
  borderRadius?: string;
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
  svgFill?: string;
};

interface I_CostExcDelivery {}

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
