interface IArgentinaCities {
  BUENOS_AIRES: ICity;
}

const cities: IArgentinaCities = {
  BUENOS_AIRES: { name: "Buenos Aires", capital: true }
};

interface IArgentina extends ILocation {
  cities: IArgentinaCities;
}

export const ARGENTINA: IArgentina = {
  name: "Argentina",
  excludeFromBucketList: true,
  cities
};
