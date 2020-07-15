interface IFavourite {
  favourite?: boolean;
}

interface ICompany {
  company: Array<IFriend>;
}

interface IDate {
  date: Date;
}
interface IDates {
  dates: Array<Date>;
}

interface IPhotos {
  photos?: Array<IJpgSrc>;
}
interface IVideo {
  videoSrc?: string;
  hideVideoIcon?: boolean;
}
interface IEventCardCommon extends ICompany, IFavourite, IPhotos, IVideo {}

interface IEventCard extends IEventCardCommon {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  countdownText?: string;
  note?: string;
}
