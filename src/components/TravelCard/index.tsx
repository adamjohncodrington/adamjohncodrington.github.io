import React from "react";

import { arrayToString } from "utils";

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

  return (
    <EventCard
      title={TITLE}
      subtitle={SUBTITLE}
      favourite={favourite}
      company={company}
      dates={dates}
    />
  );
};
