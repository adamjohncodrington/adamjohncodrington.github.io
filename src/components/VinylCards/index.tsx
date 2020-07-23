import React from "react";

import { Li } from "primitives";
import { shuffle as shuffleArray } from "utils";

import { VinylCard } from "../VinylCard";

export const VinylCards: React.FC<IVinylCards> = ({ vinyls, shuffle }) => {
  const VINYLS: Array<IVinylCard> = shuffle
    ? shuffleArray(vinyls)
    : vinyls.sort((a: IVinylCard, b: IVinylCard) =>
        a.musician.name > b.musician.name ? 1 : -1
      );

  return (
    <>
      {VINYLS.map((vinyl: IVinylCard, index: number) => (
        <Li key={index}>
          <VinylCard {...vinyl} />
        </Li>
      ))}
    </>
  );
};
