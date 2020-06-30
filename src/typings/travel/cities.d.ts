interface ICity extends ILocation {
  capital?: boolean;
}

interface ICityCounted extends ICity, IPastAndFutureCounts {}

type ICitiesObject = { [city: string]: ICity };
type ICities = { cities: ICitiesObject };
