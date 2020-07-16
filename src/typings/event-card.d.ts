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
interface IYouTubeVideo {
  youtubeId: string;
}
interface IVideo {
  youtubeId?: string;
  hideVideoIcon?: boolean;
}
interface IEventCardCommon extends ICompany, IFavourite, IPhotos, IVideo {
  hideSubtitle?: boolean;
  hideCompany?: boolean;
  hideSecondaryBody?: boolean;
}

interface IEventCard extends IEventCardCommon {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  countdownText?: string;
  note?: string;
}
