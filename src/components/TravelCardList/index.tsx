import React from "react";

import { Li } from "primitives";

import { TravelCard } from "../TravelCard";
import { PageSectionList } from "../PageSectionList";

interface ITravelCards {
  travelCards: Array<ITravelCard>;
}

export const TravelCardList: React.FC<ITravelCards> = ({ travelCards }) => (
  <PageSectionList isCards>
    {travelCards.map((travelCard: ITravelCard, index: number) => (
      <Li key={index}>
        <TravelCard {...travelCard} />
      </Li>
    ))}
  </PageSectionList>
);
