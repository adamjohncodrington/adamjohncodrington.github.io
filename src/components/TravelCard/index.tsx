import React from "react";

import {
  datesToString,
  getTravelCardTitle,
  getTravelCardSubtitle
} from "utils";

import { EventCard } from "../EventCard";

export const TravelCard: React.FC<ITravelCard> = travelCard => {
  const { favourite, company, dates, photos } = travelCard;

  return (
    <EventCard
      title={getTravelCardTitle(travelCard)}
      subtitle={getTravelCardSubtitle(travelCard)}
      favourite={favourite}
      company={company}
      dateText={datesToString(dates)}
      photos={photos}
    />
  );
};
