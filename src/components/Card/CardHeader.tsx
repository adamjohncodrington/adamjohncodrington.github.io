import React from "react";

import { CardHeaderPhoto } from "./CardHeaderPhoto";
import { CardHeaderText } from "./CardHeaderText";
import { CardHeaderSymbols } from "./CardHeaderSymbols";
import {
  StyledCardHeaderContainer,
  StyledCardHeaderTextSymbolsContainer
} from "./styles";

export const CardHeader: React.FC<ICardHeader> = props => (
  <StyledCardHeaderContainer>
    <CardHeaderPhoto {...props} />

    <StyledCardHeaderTextSymbolsContainer equalWidthColumns={false}>
      <CardHeaderText {...props} />
      <CardHeaderSymbols {...props} />
    </StyledCardHeaderTextSymbolsContainer>
  </StyledCardHeaderContainer>
);
