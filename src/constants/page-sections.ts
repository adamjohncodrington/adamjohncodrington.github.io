interface I_PAGE_SECTION_TYPES {
  RECIPES: IPageSecionType;
  COUNTED_LIST: IPageSecionType;
  EVENT_CARDS: IPageSecionType;
}

export const PAGE_SECTION_TYPES: I_PAGE_SECTION_TYPES = {
  RECIPES: "recipes",
  COUNTED_LIST: "counted-list",
  EVENT_CARDS: "event-cards"
};

interface IEventCardTypes {
  GIG: IEventCardType;
  THEATRE: IEventCardType;
  TRIP: IEventCardType;
}

export const EVENT_CARD_TYPES: IEventCardTypes = {
  GIG: "gig",
  THEATRE: "theatre",
  TRIP: "trip"
};

interface AllPageSectionTitles {
  ACTOR: IPageSectionDetails;
  ATTRACTION: IPageSectionDetails;
  BUCKET_LIST: IPageSectionDetails;
  CITY: IPageSectionDetails;
  COUNTRY: IPageSectionDetails;
  FESTIVAL: IPageSectionDetails;
  HIGHLIGHT: IPageSectionDetails;
  ISLAND: IPageSectionDetails;
  FRIEND: IPageSectionDetails;
  MUSICIAN: IPageSectionDetails;
  MUSIC_VENUES: IPageSectionDetails;
  REGION: IPageSectionDetails;
  PLAY: IPageSectionDetails;
  THEATRE_VENUES: IPageSectionDetails;
  TOWN: IPageSectionDetails;
  THEME_PARK: IPageSectionDetails;
  UP_NEXT: IPageSectionDetails;
}

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

export const PAGE_SECTIONS: AllPageSectionTitles = {
  ACTOR: { title: actor, id: actor, type: PAGE_SECTION_TYPES.COUNTED_LIST },
  ATTRACTION: {
    title: attraction,
    id: attraction,
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  BUCKET_LIST: {
    title: "bucket list",
    id: "bucket-list",
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  CITY: { title: city, id: city, type: PAGE_SECTION_TYPES.COUNTED_LIST },
  COUNTRY: {
    title: country,
    id: country,
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  FESTIVAL: {
    title: festival,
    id: festival,
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  FRIEND: { title: friend, id: friend, type: PAGE_SECTION_TYPES.COUNTED_LIST },
  ISLAND: { title: island, id: island, type: PAGE_SECTION_TYPES.COUNTED_LIST },
  HIGHLIGHT: {
    title: highlight,
    id: highlight,
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  MUSICIAN: {
    title: musician,
    id: musician,
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  MUSIC_VENUES: {
    title: musicVenue,
    id: musicVenue,
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  REGION: { title: region, id: region, type: PAGE_SECTION_TYPES.COUNTED_LIST },
  PLAY: { title: play, id: play, type: PAGE_SECTION_TYPES.COUNTED_LIST },
  THEATRE_VENUES: {
    title: theatreVenue,
    id: theatreVenue,
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  THEME_PARK: {
    title: "theme parks",
    id: "theme-parks",
    type: PAGE_SECTION_TYPES.COUNTED_LIST
  },
  TOWN: { title: town, id: town, type: PAGE_SECTION_TYPES.COUNTED_LIST },
  UP_NEXT: {
    title: "up next",
    id: "up-next",
    type: PAGE_SECTION_TYPES.EVENT_CARDS
  }
};
