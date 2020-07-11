import React from "react";

import {
  dateToString,
  getTheatreCardTitle,
  getTheatreCardSubtitle
} from "utils";

import { EventCard } from "../EventCard";

export const TheatreCard: React.FC<ITheatreCard> = theatreCard => {
  const { favourite, company, theatre, date } = theatreCard;

  return (
    <EventCard
      title={getTheatreCardTitle(theatreCard)}
      subtitle={getTheatreCardSubtitle(theatreCard)}
      body={theatre.name}
      favourite={favourite}
      company={company}
      dateText={dateToString(date)}
    />
  );
};
