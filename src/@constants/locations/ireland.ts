const cities: ICitiesIreland = { DUBLIN: { name: "Dublin", capital: true } };

const attractions: IAttractionsIreland = {
  ST_STEPHENS_GREEN_PARK: { name: "St. Stephen's Green Park" },
  DUBLIN_PRISON: { name: "Kilmainham Gaol" },
  GUINNESS_STOREHOUSE: { name: "Guinness Storehouse" }
};

export const IRELAND: IIreland = {
  name: "Ireland",
  attractions,
  cities
};
