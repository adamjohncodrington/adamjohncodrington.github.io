import React from "react";

import { Li } from "primitives";

import { TheatreCard } from "../TheatreCard";
import { PageSectionList } from "../PageSectionList";

interface ITheatreCards {
  theatreCards: Array<ITheatreCard>;
}

export const TheatreCardList: React.FC<ITheatreCards> = ({ theatreCards }) => (
  <PageSectionList isCards>
    {theatreCards.map((theatreCard: ITheatreCard, index: number) => (
      <Li key={index}>
        <TheatreCard {...theatreCard} />
      </Li>
    ))}
  </PageSectionList>
);
