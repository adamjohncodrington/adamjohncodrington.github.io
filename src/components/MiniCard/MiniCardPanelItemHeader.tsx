import React, { ReactElement } from "react";

import { DynamicFontWeightFlexRow, Link } from "primitives";
import { getDatesText } from "utils";

import { StyledLevel1MainText, StyledIndex, StyledDateText } from "./styles";

export const MiniCardPanelItemHeader: React.FC<IMiniCardPanelItemHeader> = ({
  index,
  mainText,
  dates,
  favourite,
  headerLink,
  video,
  panelVisible,
  isStatic
}) => {
  const HeaderContents: ReactElement = (
    <DynamicFontWeightFlexRow bold={!isStatic && panelVisible}>
      {index && <StyledIndex>{index}.</StyledIndex>}

      {mainText && <StyledLevel1MainText>{mainText[0]}</StyledLevel1MainText>}

      <StyledDateText favourite={favourite} video={video}>
        {getDatesText(dates)}
      </StyledDateText>
    </DynamicFontWeightFlexRow>
  );

  if (!headerLink) return HeaderContents;

  return <Link href={headerLink}>{HeaderContents}</Link>;
};
