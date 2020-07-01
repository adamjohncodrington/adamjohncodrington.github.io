import React from "react";

import { arrayToString, datesToString } from "@utils";

import { EventCard } from "../EventCard";

export const TravelCard: React.FC<ITravelCard> = ({
  title,
  subtitle,
  favourite,
  company,
  dates
}) => {
  const TITLE: string = arrayToString({
    stringArray: title.map(({ name }: ILocation) => name),
    useAmpersandsForPair: true
  });

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
    />
  );
};
