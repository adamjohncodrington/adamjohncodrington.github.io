interface I__Favourite {
  favourite?: boolean;
}

interface I_Name {
  name: string;
}

interface I__Insignificant {
  insignificant?: boolean;
}

interface IGift {
  from: IFriend;
}

interface I__Gift {
  gift?: IGift;
}

interface I_Sort {
  sort: Array<string | number | Date | boolean>;
}

interface I_Signed {
  signed: boolean;
}

interface I__Signed {
  signed?: boolean;
}

interface I_PastFutureCounts {
  futureCount: number;
  pastCount: number;
}

interface I_Company {
  company: Array<IPerson>;
}

interface I__Company {
  company?: Array<IFriend>;
}

interface I__Date {
  date?: Date;
}

interface I_Photos {
  photos: Array<IPhoto>;
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

interface I_Background {
  background: string;
}

interface I_Faded {
  faded: boolean;
}

interface I__Faded {
  faded?: boolean;
}

interface I_Color {
  color: string;
}

interface I__Border {
  border?: string;
}

interface I__BorderRadius {
  borderRadius?: string;
}

interface I_Colors {
  colors: Array<string>;
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

interface I_ColumnCount {
  columnCount: number;
}

interface I_Bold {
  bold: boolean;
}

interface I_Italic {
  italic: boolean;
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

interface I_Photo {
  photo: IPhoto;
}
