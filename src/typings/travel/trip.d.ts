interface ITripLeg extends I__Favourite, I__Photos, I_Dates, I_Company {
  video?: ITravelVideo;
  country: ICountryTemplate;
  primaryLocations?: ILocation[];
  secondaryLocations?: ILocation[];
  hiddenLocations?: ILocation[];
  notAbroad?: boolean;
  showCountryAsTitle?: boolean;
}

type ITrip = ITripLeg[];
