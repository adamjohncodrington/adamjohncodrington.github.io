import React from "react";

import { DynamicFontWeightFlexRow } from "primitives";
import { getDatesText } from "utils";

import { StyledLevel1MainText, StyledIndex, StyledDateText } from "./styles";

export const MiniCardPanelItemHeader: React.FC<IMiniCardPanelItemHeader> = props => {
  const { index, mainText, dates, favourite, video, panelIsVisible } = props;

  const isStatic: boolean = !video;

  return (
    <DynamicFontWeightFlexRow bold={!isStatic && panelIsVisible}>
      {index && <StyledIndex>{index}.</StyledIndex>}

      {mainText && <StyledLevel1MainText>{mainText[0]}</StyledLevel1MainText>}

      <StyledDateText favourite={favourite} video={video}>
        {getDatesText(dates)}
      </StyledDateText>
    </DynamicFontWeightFlexRow>
  );
};
