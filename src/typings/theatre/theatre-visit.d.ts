interface ITheatreVisit extends IEventCardCommon {
  play: IPlay;
  theatre: ITheatreVenue;
  cast?: Array<IActor>;
}
