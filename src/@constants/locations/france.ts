const cities: ICitiesFrance = {
  MONACO: { name: "Monaco" },
  NICE: { name: "Nice" },
  PARIS: { name: "Paris", capital: true }
};

const attractions: IAttractionsFrance = {
  SACRE_COEUR: { name: "Sacré-Cœur" },
  LOUVRE: { name: "Louvre" },
  ARC_DE_TRIOMPHE: { name: "Arc de Triomphe" },
  AIR_SPACE_MUSEUM: { name: "National Air and Space Museum of France" },
  SCIENCE_MUSEUM: { name: "Paris Science Museum" },
  EIFFEL_TOWER: { name: "Eiffel Tower" },
  NOTRE_DAME: { name: "Notre-Dame de Paris" },
  DISNEYLAND_PARIS: { name: "Disneyland Paris", themePark: true },
  PARC_ASTERIX: { name: "Parc Astérix", themePark: true }
};

export const FRANCE: IFrance = { name: "France", cities, attractions };
