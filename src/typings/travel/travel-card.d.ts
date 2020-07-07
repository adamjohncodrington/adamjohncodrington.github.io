interface ITravelCard {
  title: Array<ILocation>;
  subtitle?: Array<ILocation>;
  favourite?: boolean;
  hidden?: Array<ILocation>;
  dates: Array<Date>;
  notAbroad?: boolean;
  company: Array<IFriend>;
  photos?: Array<IJpgSrc>;
}
