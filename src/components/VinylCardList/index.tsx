import React from "react";

import { Li } from "primitives";

import { PageSectionList } from "../PageSectionList";
import { VinylCard } from "../VinylCard";

interface IVinylCards {
  vinylCards: Array<IVinylCard>;
}

export const VinylCardList: React.FC<IVinylCards> = ({ vinylCards }) => (
  <PageSectionList isCards>
    {vinylCards.map((vinyl: IVinylCard, index: number) => (
      <Li key={index}>
        <VinylCard {...vinyl} />
      </Li>
    ))}
  </PageSectionList>
);
