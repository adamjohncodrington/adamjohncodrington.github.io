const attractions: IAttractionsCostaRica = {
  CORCOVADO: { name: "Corcovado National Park", highlight: true },
  JAGUAR_RESCUE_CENTER: { name: "Jaguar Rescue Center" }
};

const cities: ICitiesCostaRica = {
  SAN_JOSE: { name: "San Jose", capital: true, excludeFromBucketList: true }
};

const towns: ITownsCostaRica = {
  MONTEVERDE: { name: "Monteverde" },
  PUERTO_VIEJO: { name: "Puerto Viejo" }
};

export const COSTA_RICA: ICostaRica = {
  name: "Costa Rica",
  attractions,
  cities,
  towns
};
