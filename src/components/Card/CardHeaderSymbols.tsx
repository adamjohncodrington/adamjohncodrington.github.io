import React, { FC } from "react";

import { Symbol } from "../Symbol";

import { CardSymbolsContainer } from "./styles";

export const CardHeaderSymbols: FC<ICard> = ({ symbols }) => {
  if (!(symbols && symbols.length)) return null;

  return (
    <CardSymbolsContainer>
      {symbols.map((symbol: ISymbol, index: number) => (
        <Symbol key={index} {...symbol} />
      ))}
    </CardSymbolsContainer>
  );
};
