interface ITripLeg extends I__Favourite, I__Photos, I_Dates, I_Company {
  video?: ITravelVideo;
  country: ICountryTemplate;
  primaryLocations?: Array<ILocation>;
  secondaryLocations?: Array<ILocation>;
  hiddenLocations?: Array<ILocation>;
  notAbroad?: boolean;
  showCountryAsTitle?: boolean;
}

type ITrip = Array<ITripLeg>;
