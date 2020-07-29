import React, { ReactElement } from "react";

import { DynamicFontWeightFlexRow, Link } from "primitives";
import { getDatesText } from "utils";

import { StyledLevel1MainText, StyledIndex, StyledDateText } from "./styles";

export const MiniCardPanelDetailHeader: React.FC<IMiniCardPanelDetailHeader> = ({
  index,
  mainText,
  dates,
  favourite,
  headerLink,
  video,
  panelVisible,
  year,
  isStatic
}) => {
  const useTriangleAsBullet: boolean = !!headerLink;

  const HeaderContents: ReactElement = (
    <DynamicFontWeightFlexRow bold={!isStatic && panelVisible}>
      {index && !useTriangleAsBullet && <StyledIndex>{index}.</StyledIndex>}

      {mainText && (
        <StyledLevel1MainText useTriangleAsBullet={useTriangleAsBullet}>
          {mainText[0]}
        </StyledLevel1MainText>
      )}

      {(dates || year) && (
        <StyledDateText favourite={favourite} showVideoSymbol={!!video}>
          {dates ? getDatesText(dates) : year}
        </StyledDateText>
      )}
    </DynamicFontWeightFlexRow>
  );

  if (!headerLink) return HeaderContents;

  return <Link href={headerLink}>{HeaderContents}</Link>;
};
