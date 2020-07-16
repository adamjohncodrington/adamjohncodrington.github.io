interface ITrip extends IEventCardCommon, IDates {
  country: ICountryTemplate;
  primaryLocations?: Array<ILocation>;
  secondaryLocations?: Array<ILocation>;
  hiddenLocations?: Array<ILocation>;
  notAbroad?: boolean;
  showCountryAsTitle?: boolean;
}

type ITripLeg = ITrip;
type ITripLegs = Array<ITripLeg>;
