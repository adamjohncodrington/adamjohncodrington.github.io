import React, { ReactElement } from "react";

import { DynamicFontWeightFlexRow, Link } from "primitives";
import { getDatesText, moveTheSuffixToPrefix } from "utils";

import {
  StyledLevel1MainText,
  StyledIndex,
  StyledPanelSecondaryText
} from "./styles";

export const MiniCardPanelDetailHeader: React.FC<IMiniCardPanelDetailHeader> = ({
  index,
  mainText,
  dates,
  favourite,
  headerLink,
  video,
  secondaryText,
  panelVisible,
  year,
  isStatic
}) => {
  const useTriangleAsBullet: boolean = !!headerLink;

  const HeaderContents: ReactElement = (
    <DynamicFontWeightFlexRow bold={!isStatic && panelVisible} italic={false}>
      {index && !useTriangleAsBullet && <StyledIndex>{index}.</StyledIndex>}

      {mainText && (
        <StyledLevel1MainText useTriangleAsBullet={useTriangleAsBullet}>
          {moveTheSuffixToPrefix(mainText[0])}
        </StyledLevel1MainText>
      )}

      {(dates || year || secondaryText) && (
        <StyledPanelSecondaryText
          favourite={favourite}
          showVideoSymbol={!!video}
        >
          {secondaryText ? secondaryText : dates ? getDatesText(dates) : year}
        </StyledPanelSecondaryText>
      )}
    </DynamicFontWeightFlexRow>
  );

  return headerLink ? (
    <Link href={headerLink}>{HeaderContents}</Link>
  ) : (
    HeaderContents
  );
};
