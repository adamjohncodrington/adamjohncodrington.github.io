import React from "react";

import { CardHeaderPhoto } from "./CardHeaderPhoto";
import { CardHeaderText } from "./CardHeaderText";
import { CardHeaderSymbols } from "./CardHeaderSymbols";
import {
  StyledCardHeaderContainer,
  StyledCardHeaderTextSymbolsContainer
} from "./styles";

export const CardHeader: React.FC<ICardHeader> = cardHeaderProps => (
  <StyledCardHeaderContainer>
    <CardHeaderPhoto {...cardHeaderProps} />

    <StyledCardHeaderTextSymbolsContainer equalWidthColumns={false}>
      <CardHeaderText {...cardHeaderProps} />
      <CardHeaderSymbols {...cardHeaderProps} />
    </StyledCardHeaderTextSymbolsContainer>
  </StyledCardHeaderContainer>
);
