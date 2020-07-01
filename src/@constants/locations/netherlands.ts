const cities: ICitiesNetherlands = {
  AMSTERDAM: { name: "Amsterdam", capital: true },
  GRONINGEN: { name: "Groningen" }
};

const attractions: IAttractionsNetherlands = {
  STEDELIJK_MUSEUM: { name: "Stedelijk Museum Amsterdam" },
  SEX_MUSEUM: { name: "Venustempel Sex Museum" },
  GRONINGEN_MUSEUM: { name: "Groninger Museum" }
};

export const NETHERLANDS: INetherlands = {
  name: "Netherlands",
  cities,
  attractions
};
