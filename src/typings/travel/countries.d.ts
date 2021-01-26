interface ICountryTemplate extends LocationProps {
  attractions?: any;
  cities?: any;
  islands?: any;
  regions?: any;
  states?: any;
  towns?: any;
  villages?: any;
}

interface ICountryCounted extends ICountryTemplate, I_PastFutureCounts {}

interface IIndonesia extends LocationProps {}

interface IIreland extends LocationProps {
  attractions: IAttractionsIreland;
  cities: ICitiesIreland;
}

interface IZimbabwe extends LocationProps {
  attractions: IAttractionsZimbabwe;
}

interface IUSA extends LocationProps {
  attractions: IAttractionsUSA;
  cities: ICitiesUSA;
  islands: IIslandsUSA;
  regions: IRegionsUSA;
  states: IStatesUSA;
}

interface IUAE extends LocationProps {
  cities: ICitiesUAE;
  attractions: IAttractionsUAE;
}

interface IUganda extends LocationProps {
  cities: ICitiesUganda;
  attractions: IAttractionsUganda;
}

interface IUK extends LocationProps {
  attractions: IAttractionsUK;
  islands: IIslandsUK;
  cities: ICitiesUK;
  towns: ITownsUK;
  regions: IRegionsUK;
}

interface IThailand extends LocationProps {
  cities: ICitiesThailand;
  attractions: IAttractionsThailand;
  towns: ITownsThailand;
  islands: IIslandsThailand;
}

interface IPhillipines extends LocationProps {}

interface ISweden extends LocationProps {
  cities: ICitiesSweden;
}

interface ISpain extends LocationProps {
  cities: ICitiesSpain;
  attractions: IAttractionsSpain;
  islands: IIslandsSpain;
}

interface IPoland extends LocationProps {
  cities: ICitiesPoland;
  attractions: IAttractionsPoland;
  towns: ITownsPoland;
}

interface ICzechRepublic extends LocationProps {
  cities: ICitiesCzechRepublic;
  attractions: IAttractionsCzechRepublic;
}

interface IArgentina extends LocationProps {
  cities: ICitiesArgentina;
}

interface IAustralia extends LocationProps {}

interface INewZealand extends LocationProps {}

interface ITanzania extends LocationProps {}

interface IDenmark extends LocationProps {
  cities: ICitiesDenmark;
  attractions: IAttractionsDenmark;
}

interface IHungary extends LocationProps {
  cities: ICitiesHungary;
  attractions: IAttractionsHungary;
}

interface IFrance extends LocationProps {
  cities: ICitiesFrance;
  attractions: IAttractionsFrance;
}

interface IEcuador extends LocationProps {
  cities: ICitiesEcuador;
  attractions: IAttractionsEcuador;
  islands: IIslandsEcuador;
}

interface IAustria extends LocationProps {
  cities: ICitiesAustria;
}

interface IColombia extends LocationProps {}

interface ICanada extends LocationProps {
  cities: ICitiesCanada;
  attractions: IAttractionsCanada;
}

interface IBarbados extends LocationProps {
  attractions: IAttractionsBarbados;
}

interface IEgypt extends LocationProps {
  cities: ICitiesEgypt;
  attractions: IAttractionsEgypt;
}

interface IBolivia extends LocationProps {}

interface IBelize extends LocationProps {
  attractions: IAttractionsBelize;
  cities: ICitiesBelize;
  islands: IIslandsBelize;
}

interface ICuba extends LocationProps {
  cities: ICitiesCuba;
  towns: ITownsCuba;
}

interface IBrazil extends LocationProps {
  cities: ICitiesBrazil;
  attractions: IAttractionsBrazil;
  islands: IIslandsBrazil;
}

interface ICroatia extends LocationProps {
  cities: ICitiesCroatia;
  attractions: IAttractionsCroatia;
}

interface ICostaRica extends LocationProps {
  attractions: IAttractionsCostaRica;
  cities: ICitiesCostaRica;
  towns: ITownsCostaRica;
}

interface ICyprus extends LocationProps {
  cities: ICitiesCyprus;
  attractions: IAttractionsCyprus;
}

interface IBelgium extends LocationProps {
  cities: ICitiesBeligum;
  attractions: IAttractionsBelgium;
}

interface IGermany extends LocationProps {
  cities: ICitiesGermany;
  attractions: IAttractionsGermany;
}

interface IPortugal extends LocationProps {
  cities: ICitiesPortugal;
  attractions: IAttractionsPortugal;
  towns: ITownsPortugal;
}

interface IMexico extends LocationProps {}

interface IGreece extends LocationProps {
  islands: IIslandsGreece;
  regions: IRegionsGreece;
}

interface INorway extends LocationProps {
  attractions: IAttractionsNorway;
  cities: ICitiesNorway;
  islands: IIslandsNorway;
}

interface IItaly extends LocationProps {
  regions: IRegionsItaly;
  cities: ICitiesItaly;
  towns: ITownsItaly;
  attractions: IAttractionsItaly;
}

interface ILaos extends LocationProps {
  cities: ICitiesLaos;
  attractions: IAttractionsLaos;
}

interface INetherlands extends LocationProps {
  cities: ICitiesNetherlands;
  attractions: IAttractionsNetherlands;
}

interface IJapan extends LocationProps {}

interface IPeru extends LocationProps {
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
