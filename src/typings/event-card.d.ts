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

interface IYouTubeVideo {
  youtubeId: string;
}

interface IVideo {
  youtubeId?: string;
  hideVideoIcon?: boolean;
}
interface IEventCardCommon extends ICompany, IFavourite, IVideo {
  hideSubtitle?: boolean;
  photos?: Array<IPhoto>;

  hideCompany?: boolean;
  hideSecondaryBody?: boolean;
  hidePhotosIcon?: boolean;
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
