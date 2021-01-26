import React, { FC } from "react";

import { Arrow } from "../Arrow";
import { Symbol } from "../Symbol";

import { CardSymbolsContainer, StyledArrowContainer } from "./styles";

export const CardHeaderSymbols: FC<CardHeaderProps> = ({
  panelExists,
  panelVisible,
  symbols
}) => (
  <CardSymbolsContainer>
    {symbols &&
      symbols.map((symbol: SymbolProps, i: number) => (
        <Symbol key={i} {...symbol} />
      ))}

    {panelExists && (
      <StyledArrowContainer>
        <Arrow panelVisible={panelVisible} size="0.75rem" />
      </StyledArrowContainer>
    )}
  </CardSymbolsContainer>
);
