import React, { FC } from "react";

import { Arrow } from "../Arrow";
import { Symbol } from "../Symbol";

import { CardSymbolsContainer, StyledArrowContainer } from "./styles";

export const CardHeaderSymbols: FC<ICardHeader> = ({
  symbols,
  panelExists,
  panelVisible
}) => {
  return (
    <CardSymbolsContainer>
      {symbols &&
        symbols.map((symbol: ISymbol, index: number) => (
          <Symbol key={index} {...symbol} />
        ))}

      {panelExists && (
        <StyledArrowContainer>
          <Arrow panelVisible={panelVisible} size="0.75rem" />
        </StyledArrowContainer>
      )}
    </CardSymbolsContainer>
  );
};
