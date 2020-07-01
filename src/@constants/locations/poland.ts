const cities: ICitiesPoland = { KRAKOW: { name: "Kraków" } };

const attractions: IAttractionsPoland = {
  AUSCHWITZ_BIRKENAU: { name: "Auschwitz-Birkenau", highlight: true },
  WIELICZKA_SALT_MINE: { name: "Wieliczka Salt Mine" }
};

const towns: ITownsPoland = { WIELICZKA: { name: "Wieliczka" } };

export const POLAND: IPoland = { name: "Poland", cities, attractions, towns };
