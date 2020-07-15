interface ITheatreVisit extends IDate, ICompany, IFavourite {
  play: IPlay;
  theatre: ITheatreVenue;
  cast?: Array<IActor>;
}
