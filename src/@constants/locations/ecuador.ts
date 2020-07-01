const cities: ICitiesEcuador = {
  BANOS: { name: "Baños" },
  GUAYAQUIL: { name: "Guayaquil" },
  OTAVALO: { name: "Otavalo" },
  QUITO: { name: "Quito", capital: true }
};

const attractions: IAttractionsEcuador = {
  EQUATOR_MONUMENT: {
    name: "Equator Monument",
    foreignName: "Ciudad Mitad del Mundo"
  },
  OTAVALO_MARKET: { name: "Otavalo Market" },
  TORTOISE_PARK: {
    name: "Giant Tortoise Reserve",
    foreignName: "Reserva el Chato"
  },
  PAILON_DEL_DIABLO: { name: "Pailon del Diablo", highlight: true },
  COTOPAXI: { name: "Cotopaxi Volcano", highlight: true }
};

const islands: IIslandsEcuador = {
  GALAPAGOS: { name: "Galápagos Islands" }
};

export const ECUADOR: IEcuador = {
  name: "Ecuador",
  cities,
  attractions,
  islands
};
