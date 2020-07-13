const cities: ICitiesPortugal = {
  LISBON: { name: "Lisbon", capital: true },
  PORTIMAO: { name: "Portimão" },
  PORTO: { name: "Porto" }
};

const attractions: IAttractionsPortugal = {
  ZOOMARINE: { name: "Zoomarine Algarve" },
  OCENARIO_DE_LISBOA: {
    name: "Lisbon Oceanarium",
    foreignName: "Oceanário de Lisboa"
  }
};

const towns: ITownsPortugal = {
  FERRAGUDO: { name: "Ferragudo" },
  LAGOS: { name: "Lagos" },
  TAVIRA: { name: "Tavira" },
  VILAMOURA: { name: "Vilamoura" }
};

export const PORTUGAL: IPortugal = {
  name: "Portugal",
  cities,
  attractions,
  towns
};
