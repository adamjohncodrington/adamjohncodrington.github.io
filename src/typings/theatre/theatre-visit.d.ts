interface ITheatreVisit extends IDate, IEventCardCommon {
  play: IPlay;
  theatre: ITheatreVenue;
  cast?: Array<IActor>;
}
