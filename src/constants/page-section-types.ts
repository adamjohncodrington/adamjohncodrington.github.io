const actor: string = "actors";
const attraction: string = "attractions";
const city: string = "cities";
const country: string = "countries";
const festival: string = "festivals";
const friend: string = "friends";
const highlight: string = "highlights";
const island: string = "islands";
const musician: string = "artists";
const musicVenue: string = "venues";
const play: string = "plays";
const region: string = "regions";
const theatreVenue: string = "theatres";
const town: string = "towns";

interface AllPageSectionTypes {
  ACTOR: IPageSectionType;
  ATTRACTION: IPageSectionType;
  BUCKET_LIST: IPageSectionType;
  CITY: IPageSectionType;
  COUNTRY: IPageSectionType;
  FESTIVAL: IPageSectionType;
  HIGHLIGHT: IPageSectionType;
  ISLAND: IPageSectionType;
  FRIEND: IPageSectionType;
  MUSICIAN: IPageSectionType;
  MUSIC_VENUES: IPageSectionType;
  REGION: IPageSectionType;
  PLAY: IPageSectionType;
  THEATRE_VENUES: IPageSectionType;
  TOWN: IPageSectionType;
  THEME_PARK: IPageSectionType;
  UP_NEXT: IPageSectionType;
}

export const PAGE_SECTION_TYPES: AllPageSectionTypes = {
  ACTOR: { title: actor, id: actor },
  ATTRACTION: { title: attraction, id: attraction },
  BUCKET_LIST: { title: "bucket list", id: "bucket-list" },
  CITY: { title: city, id: city },
  COUNTRY: { title: country, id: country },
  FESTIVAL: { title: festival, id: festival },
  FRIEND: { title: friend, id: friend },
  ISLAND: { title: island, id: island },
  HIGHLIGHT: { title: highlight, id: highlight },
  MUSICIAN: { title: musician, id: musician },
  MUSIC_VENUES: { title: musicVenue, id: musicVenue },
  REGION: { title: region, id: region },
  PLAY: { title: play, id: play },
  THEATRE_VENUES: { title: theatreVenue, id: theatreVenue },
  THEME_PARK: { title: "theme parks", id: "theme-parks" },
  TOWN: { title: town, id: town },
  UP_NEXT: { title: "up next", id: "up-next" }
};
