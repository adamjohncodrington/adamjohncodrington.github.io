interface I__Favourite {
  favourite?: boolean;
}

interface I_Name {
  name: string;
}

interface I__Insignificant {
  insignificant?: boolean;
}

interface I_PastFutureCounts {
  futureCount: number;
  pastCount: number;
}

interface I_Company {
  company: Array<IFriend>;
}

interface I__Company {
  company?: Array<IFriend>;
}

interface I__Photos {
  photos?: Array<IPhoto>;
}

interface I_Date {
  date: Date;
}

interface I__Hide {
  hide?: boolean;
}

interface I_Dates {
  dates: Array<Date>;
}

interface I__Star {
  star?: boolean;
}

interface I__SecondaryText {
  secondaryText?: string;
}

type IOpacityOptions = "100%" | "50%";

interface I_Opacity {
  opacity: IOpacityOptions;
}

interface I__ColumnCount {
  columnCount?: number;
}

interface I_Bold {
  bold: boolean;
}

interface I__ExcludeFromBucketList {
  excludeFromBucketList?: boolean;
}

interface I_UseTriangleAsBullet {
  useTriangleAsBullet: boolean;
}

interface I_ShowVideoSymbol {
  showVideoSymbol: boolean;
}

interface I_Video {
  video: IVideo;
}

interface I__Video {
  video?: IVideo;
}
