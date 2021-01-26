import React, { FC } from "react";

import { PhotoLink } from "../PhotoLink";

import { CardHeaderText } from "./CardHeaderText";
import { CardHeaderSymbols } from "./CardHeaderSymbols";
import {
  StyledCardHeaderContainer,
  StyledCardHeaderTextSymbolsContainer
} from "./styles";

export const CardHeader: FC<CardHeaderProps> = props => {
  const { headerPhoto } = props;
  return (
    <StyledCardHeaderContainer>
      {headerPhoto && <PhotoLink photo={headerPhoto} size="75px" />}
      <StyledCardHeaderTextSymbolsContainer equalWidthColumns={false}>
        <CardHeaderText {...props} />
        <CardHeaderSymbols {...props} />
      </StyledCardHeaderTextSymbolsContainer>
    </StyledCardHeaderContainer>
  );
};
