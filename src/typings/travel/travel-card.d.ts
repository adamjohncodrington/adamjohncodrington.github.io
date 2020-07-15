interface ITrip {
  title: Array<ILocation>;
  subtitle?: Array<ILocation>;
  hidden?: Array<ILocation>;
  body?: Array<ILocation>;
  favourite?: boolean;
  dates: Array<Date>;
  notAbroad?: boolean;
  company: Array<IFriend>;
  photos?: Array<IJpgSrc>;
}
