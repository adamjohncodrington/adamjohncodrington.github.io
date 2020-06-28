import React from "react";

import { arrayToString, moveTheSuffixToPrefix } from "@utils";

import { EventCard } from "../EventCard";

export const GigCard: React.FC<IGigCard> = ({
  headline,
  festival,
  support,
  lineup,
  venue,
  favourite,
  company,
  ticketType,
  dates
}) => {
  const title: string = headline
    ? moveTheSuffixToPrefix(headline.name)
    : festival
    ? festival.name
    : "GIG CARD TITLE MISSING";

  const subtitle: string | undefined = support
    ? arrayToString({
        stringArray: support.map(({ name }: IMusician): string =>
          moveTheSuffixToPrefix(name)
        )
      })
    : lineup &&
      arrayToString({
        stringArray: lineup.map(({ name }: IMusician): string =>
          moveTheSuffixToPrefix(name)
        )
      });

  const body: string = moveTheSuffixToPrefix(venue.name);

  return (
    <EventCard
      title={title}
      subtitle={subtitle}
      body={body}
      favourite={favourite}
      company={company}
      dates={dates}
      note={ticketType}
    />
  );
};
