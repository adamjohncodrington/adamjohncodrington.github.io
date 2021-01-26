interface TripLeg extends I__Favourite, I__Photos, I_Dates, I_Company {
  video?: ITravelVideo;
  country: ICountryTemplate;
  primaryLocations?: LocationProps[];
  secondaryLocations?: LocationProps[];
  hiddenLocations?: LocationProps[];
  notAbroad?: boolean;
  showCountryAsTitle?: boolean;
}

type Trip = TripLeg[];
