interface IActor extends I_NameFavourite {}

interface IPlay extends I_NameFavourite {}

interface ITheatre extends I_NameFavourite {}

interface ITheatreVisit extends IDate, IEventCardCommon {
  play: IPlay;
  theatre: ITheatre;
  cast?: Array<IActor>;
}
