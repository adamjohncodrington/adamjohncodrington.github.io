interface IBasicLocation extends INameFavourite {
  highlight?: boolean;
  island?: boolean;
  foreignName?: string;
}
interface ITown extends IBasicLocation {}
interface IVillage extends IBasicLocation {}
interface ICity extends IBasicLocation {
  capital?: boolean;
}
interface IAttraction extends IBasicLocation {
  themePark?: boolean;
  highlight?: boolean;
}

interface IIsland extends IBasicLocation {}
interface ITown extends IBasicLocation {}
interface IRegion extends IBasicLocation {}
interface ICountry extends IBasicLocation {
  //TODO: strongly type this
  cities: any;
  regions?: any;
  islands?: any;
  attractions?: any;
  villages?: any;
  towns?: any;
}

type ILocationItem =
  | ICountry
  | IRegion
  | ICity
  | ITown
  | ITown
  | IVillage
  | IIsland
  | IAttraction;

interface ITravelData {
  title: Array<IBasicLocation>;
  subtitle?: Array<IBasicLocation>;
  favourite?: boolean;
  hidden?: Array<IBasicLocation>;
  dates: Array<Date>;
  notAbroad?: boolean;
  company: Array<IFriend>;
}
