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

interface IVideo {
  videoSrc?: string;
}

interface IEventCard extends ICompany, IFavourite, IVideo {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  countdownText?: string;
  note?: string;
  photos?: Array<IJpgSrc>;
}
