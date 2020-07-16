interface ITripLeg extends IEventCardCommon, IDates {
  country: ICountryTemplate;
  primaryLocations?: Array<ILocation>;
  secondaryLocations?: Array<ILocation>;
  hiddenLocations?: Array<ILocation>;
  notAbroad?: boolean;
  showCountryAsTitle?: boolean;
}

type ITrip = Array<ITripLegLeg>;
