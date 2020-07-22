interface ITripLeg extends IEventCardAll, I_Dates {
  country: ICountryTemplate;
  primaryLocations?: Array<ILocation>;
  secondaryLocations?: Array<ILocation>;
  hiddenLocations?: Array<ILocation>;
  notAbroad?: boolean;
  showCountryAsTitle?: boolean;
}

type ITrip = Array<ITripLegLeg>;
