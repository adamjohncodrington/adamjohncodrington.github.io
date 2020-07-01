const cities: ICitiesLaos = {
  LUANG_PRABANG: { name: "Luang Prabang" },
  VIENTIANE: { name: "Vientiane", capital: true }
};

const attractions: IAttractionsLaos = {
  KUANG_SI_FALLS: { name: "Kuang Si Falls", highlight: true },
  ELEPHANT_VILLAGE: { name: "Elephant Village" },
  BUDDHA_PARK: { name: "Buddha Park" }
};

export const LAOS: ILaos = { name: "Laos", cities, attractions };
