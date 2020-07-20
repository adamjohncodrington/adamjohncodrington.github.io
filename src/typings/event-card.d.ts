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

interface IEventCardCommon extends ICompany, IFavourite {
  hideSubtitle?: boolean;
  photos?: Array<IPhoto>;
  youtubeVideo?: IYouTubeVideo;

  hideCompany?: boolean;
  hideSecondaryBody?: boolean;
  hidePhotosIcon?: boolean;
  hideVideoIcon?: boolean;
}

interface IEventCard extends IEventCardCommon {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  countdownText?: string;
  note?: string;
}

interface IPhotoGrid {
  photos: Array<IPhoto>;
  columnCount: number;
  randomise?: boolean;
}
