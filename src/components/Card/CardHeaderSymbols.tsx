import React, { FC } from "react";

import { Arrow } from "../Arrow";
import { Symbol } from "../Symbol";

import { CardSymbolsContainer } from "./styles";

export const CardHeaderSymbols: FC<ICardHeader> = ({
  symbols,
  panelExists,
  panelVisible
}) => {
  if (!(symbols && symbols.length)) return null;

  return (
    <CardSymbolsContainer>
      {symbols.map((symbol: ISymbol, index: number) => (
        <Symbol key={index} {...symbol} />
      ))}

      {panelExists && <Arrow panelVisible={panelVisible} size="0.75rem" />}
    </CardSymbolsContainer>
  );
};
