import React from "react";

import { arrayToString, moveTheSuffixToPrefix } from "@utils";

import { EventCard } from "../EventCard";

export const TheatreCard: React.FC<ITheatreCard> = ({
  play,
  cast,
  favourite,
  company,
  theatre,
  dates
}) => {
  const title: string = moveTheSuffixToPrefix(play.name);

  const subtitle: string | undefined =
    cast &&
    arrayToString({
      stringArray: cast.map(({ name }: IActor): string =>
        moveTheSuffixToPrefix(name)
      )
    });

  const body: string = theatre.name;

  return (
    <EventCard
      title={title}
      subtitle={subtitle}
      body={body}
      favourite={favourite}
      company={company}
      dates={dates}
    />
  );
};
