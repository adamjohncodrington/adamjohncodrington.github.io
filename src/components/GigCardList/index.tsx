import React from "react";

import { Li } from "primitives";

import { GigCard } from "../GigCard";
import { PageSectionList } from "../PageSectionList";

interface IGigCards {
  gigCards: Array<IGigCard>;
}

export const GigCardList: React.FC<IGigCards> = ({ gigCards }) => (
  <PageSectionList isCards>
    {gigCards.map((gigCard: IGigCard, index: number) => (
      <Li key={index}>
        <GigCard {...gigCard} />
      </Li>
    ))}
  </PageSectionList>
);
