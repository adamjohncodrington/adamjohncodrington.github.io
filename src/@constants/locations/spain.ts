const cities: ICitiesSpain = {
  BARCELONA: { name: "Barcelona" },
  MADRID: { name: "Madrid", capital: true },
  VALENCIA: { name: "Valencia" }
};

const attractions: IAttractionsSpain = {
  CIUTADELLA_PARK: { name: "Ciutadella Park" },
  PARK_GUELL: { name: "Park Güell", highlight: true },
  PARQUE_WARNER: { name: "Parque Warner Madrid", themePark: true },
  SIAM_PARK: { name: "Siam Park", themePark: true },
  PORTAVENTURA: { name: "PortAventura", themePark: true }
};

const islands: IIslandsSpain = {
  TENERIFE: { name: "Tenerife" },
  IBIZA: { name: "Ibiza" },
  MINORCA: { name: "Minorca" },
  LANZAROTE: { name: "Lanzarote" }
};

export const SPAIN: ISpain = { name: "Spain", cities, attractions, islands };
