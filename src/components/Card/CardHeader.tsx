import React from "react";

import { GridColumnDiv, FlexRow } from "primitives";

import { CardHeaderPhoto } from "./CardHeaderPhoto";
import { CardHeaderText } from "./CardHeaderText";
import { CardHeaderSymbols } from "./CardHeaderSymbols";

export const CardHeader: React.FC<ICardHeader> = props => (
  <FlexRow>
    <CardHeaderPhoto {...props} />
    <GridColumnDiv data-test="card-grid-container" equalWidthColumns={false}>
      <CardHeaderText {...props} />
      <CardHeaderSymbols {...props} />
    </GridColumnDiv>
  </FlexRow>
);
