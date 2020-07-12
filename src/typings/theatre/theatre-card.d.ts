interface ITheatreVisit {
  play: IPlay;
  theatre: ITheatreVenue;
  company: Array<IFriend>;
  date: Date;
  favourite?: boolean;
  cast?: Array<IActor>;
}
