interface ICountryTemplate extends ILocation {
  attractions?: IAttractionsObject;
  cities?: ICitiesObject;
  islands?: IIslandsObject;
  regions?: { [region: string]: IRegion };
  states?: { [state: string]: IState };
  towns?: { [town: string]: ITown };
  villages?: { [village: string]: IVillage };
}

interface ICountryCounted extends ICountryTemplate, IPastAndFutureCounts {}

interface IIndonesia extends ILocation {}

interface IIreland extends ILocation {
  attractions: IAttractionsIreland;
  cities: ICitiesIreland;
}

interface IZimbabwe extends ILocation {
  attractions: IAttractionsZimbabwe;
}

interface IUSA extends ILocation {
  attractions: IAttractionsUSA;
  cities: ICitiesUSA;
  islands: IIslandsUSA;
  regions: IRegionsUSA;
  states: IStatesUSA;
}

interface IUAE extends ILocation {
  cities: ICitiesUAE;
  attractions: IAttractionsUAE;
}

interface IUganda extends ILocation {
  cities: ICitiesUganda;
  attractions: IAttractionsUganda;
}

interface IUK extends ILocation {
  attractions: IAttractionsUK;
  islands: IIslandsUK;
  cities: ICitiesUK;
  towns: ITownsUK;
  regions: IRegionsUK;
}

interface IThailand extends ILocation {
  cities: ICitiesThailand;
  attractions: IAttractionsThailand;
  towns: ITownsThailand;
  islands: IIslandsThailand;
}

interface IPhillipines extends ILocation {}

interface ISweden extends ILocation {
  cities: ICitiesSweden;
}

interface ISpain extends ILocation {
  cities: ICitiesSpain;
  attractions: IAttractionsSpain;
  islands: IIslandsSpain;
}

interface IPoland extends ILocation {
  cities: ICitiesPoland;
  attractions: IAttractionsPoland;
  towns: ITownsPoland;
}

interface ICzechRepublic extends ILocation {
  cities: ICitiesCzechRepublic;
  attractions: IAttractionsCzechRepublic;
}

interface IArgentina extends ILocation {
  cities: ICitiesArgentina;
}

interface IAustralia extends ILocation {}

interface INewZealand extends ILocation {}

interface ITanzania extends ILocation {}

interface IDenmark extends ILocation {
  cities: ICitiesDenmark;
  attractions: IAttractionsDenmark;
}

interface IHungary extends ILocation {
  cities: ICitiesHungary;
  attractions: IAttractionsHungary;
}

interface IFrance extends ILocation {
  cities: ICitiesFrance;
  attractions: IAttractionsFrance;
}

interface IEcuador extends ILocation {
  cities: ICitiesEcuador;
  attractions: IAttractionsEcuador;
  islands: IIslandsEcuador;
}

interface IAustria extends ILocation {
  cities: ICitiesAustria;
}

interface IColombia extends ILocation {}

interface ICanada extends ILocation {
  cities: ICitiesCanada;
  attractions: IAttractionsCanada;
}

interface IBarbados extends ILocation {
  attractions: IAttractionsBarbados;
}

interface IEgypt extends ILocation {
  cities: ICitiesEgypt;
  attractions: IAttractionsEgypt;
}

interface IBolivia extends ILocation {}

interface IBelize extends ILocation {
  attractions: IAttractionsBelize;
  cities: ICitiesBelize;
  islands: IIslandsBelize;
}

interface ICuba extends ILocation {
  cities: ICitiesCuba;
  towns: ITownsCuba;
}

interface IBrazil extends ILocation {
  cities: ICitiesBrazil;
  attractions: IAttractionsBrazil;
  islands: IIslandsBrazil;
}

interface ICroatia extends ILocation {
  cities: ICitiesCroatia;
  attractions: IAttractionsCroatia;
}

interface ICostaRica extends ILocation {
  attractions: IAttractionsCostaRica;
  cities: ICitiesCostaRica;
  towns: ITownsCostaRica;
}

interface ICyprus extends ILocation {
  cities: ICitiesCyprus;
  attractions: IAttractionsCyprus;
}

interface IBelgium extends ILocation {
  cities: ICitiesBeligum;
  attractions: IAttractionsBelgium;
}

interface IGermany extends ILocation {
  cities: ICitiesGermany;
  attractions: IAttractionsGermany;
}

interface IPortugal extends ILocation {
  cities: ICitiesPortugal;
  attractions: IAttractionsPortugal;
  towns: ITownsPortugal;
}

interface IMexico extends ILocation {}

interface IGreece extends ILocation {
  islands: IIslandsGreece;
  regions: IRegionsGreece;
}

interface INorway extends ILocation {
  cities: ICitiesNorway;
  islands: IIslandsNorway;
}

interface IItaly extends ILocation {
  regions: IRegionsItaly;
  cities: ICitiesItaly;
  towns: ITownsItaly;
  attractions: IAttractionsItaly;
}

interface ILaos extends ILocation {
  cities: ICitiesLaos;
  attractions: IAttractionsLaos;
}

interface INetherlands extends ILocation {
  cities: ICitiesNetherlands;
  attractions: IAttractionsNetherlands;
}

interface IJapan extends ILocation {}

interface IPeru extends ILocation {
  cities: ICitiesPeru;
  attractions: IAttractionsPeru;
  towns: ITownsPeru;
  villages: IVillagesPeru;
}

interface ICountries {
  ARGENTINA: IArgentina;
  AUSTRALIA: IAustralia;
  AUSTRIA: IAustria;
  BARBADOS: IBarbados;
  BELGIUM: IBelgium;
  BELIZE: IBelize;
  BOLIVIA: IBolivia;
  BRAZIL: IBrazil;
  CANADA: ICanada;
  COLOMBIA: IColombia;
  COSTA_RICA: ICostaRica;
  CROATIA: ICroatia;
  CUBA: ICuba;
  CYPRUS: ICyprus;
  CZECH_REPUBLIC: ICzechRepublic;
  DENMARK: IDenmark;
  ECUADOR: IEcuador;
  EGYPT: IEgypt;
  FRANCE: IFrance;
  GERMANY: IGermany;
  GREECE: IGreece;
  HUNGARY: IHungary;
  INDONESIA: IIndonesia;
  IRELAND: IIreland;
  ITALY: IItaly;
  JAPAN: IJapan;
  LAOS: ILaos;
  MEXICO: IMexico;
  NETHERLANDS: INetherlands;
  NEW_ZEALAND: INewZealand;
  NORWAY: INorway;
  PERU: IPeru;
  PHILLIPINES: IPhillipines;
  POLAND: IPoland;
  PORTUGAL: IPortugal;
  SPAIN: ISpain;
  SWEDEN: ISweden;
  TANZANIA: ITanzania;
  THAILAND: IThailand;
  UGANDA: IUganda;
  UAE: IUAE;
  UK: IUK;
  USA: IUSA;
  ZIMBABWE: IZimbabwe;
}
