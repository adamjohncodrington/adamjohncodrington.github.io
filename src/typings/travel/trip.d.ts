interface ITrip extends IEventCardCommon, IDates {
  title: Array<ILocation>;
  subtitle?: Array<ILocation>;
  hidden?: Array<ILocation>;
  body?: Array<ILocation>;
  notAbroad?: boolean;
}
