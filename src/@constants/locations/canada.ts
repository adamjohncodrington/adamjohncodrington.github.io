const cities: ICitiesCanada = {
  NIAGARA_FALLS: { name: "Niagara Falls" },
  TORONTO: { name: "Toronto" }
};

const attractions: IAttractionsCanada = {
  NIAGARA_FALLS: { name: "Niagara Falls", highlight: true }
};

export const CANADA: ICanada = { name: "Canada", cities, attractions };
