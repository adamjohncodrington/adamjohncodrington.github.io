const cities: ICitiesEgypt = {
  CAIRO: { name: "Cairo", capital: true },
  SHARM_EL_SHEIKH: { name: "Sharm El Sheikh" }
};

const attractions: IAttractionsEgypt = {
  GIZA_PYRAMIDS_SPHINX: {
    name: "Giza Pyramids & Great Sphinx",
    highlight: true
  }
};

export const EGYPT: IEgypt = { name: "Egypt", cities, attractions };
