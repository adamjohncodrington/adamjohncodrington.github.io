interface TripLeg extends I__Favourite, I_Dates, I_Company {
  video?: ITravelVideo;
  photos?: Photo[];

  country: ICountryTemplate;
  primaryLocations?: LocationProps[];
  secondaryLocations?: LocationProps[];
  hiddenLocations?: LocationProps[];
  notAbroad?: boolean;
  showCountryAsTitle?: boolean;
}

type Trip = TripLeg[];
