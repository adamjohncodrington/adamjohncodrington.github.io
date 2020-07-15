interface ITrip extends IFavourite, ICompany {
  title: Array<ILocation>;
  subtitle?: Array<ILocation>;
  hidden?: Array<ILocation>;
  body?: Array<ILocation>;
  dates: Array<Date>;
  notAbroad?: boolean;
  photos?: Array<IJpgSrc>;
}
