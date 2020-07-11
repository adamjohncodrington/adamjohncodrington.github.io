import React from "react";

import { arrayToString, datesToString, stringifyTravelCardTitle } from "utils";

import { EventCard } from "../EventCard";

export const TravelCard: React.FC<ITravelCard> = ({
  title,
  subtitle,
  favourite,
  company,
  dates,
  photos
}) => {
  const TITLE: string = stringifyTravelCardTitle(title);

  const SUBTITLE: string | undefined =
    subtitle &&
    arrayToString({
      stringArray: subtitle.map(({ name }: ILocation) => name)
    });

  const dateText: string = datesToString(dates);

  return (
    <EventCard
      title={TITLE}
      subtitle={SUBTITLE}
      favourite={favourite}
      company={company}
      dateText={dateText}
      photos={photos}
    />
  );
};
