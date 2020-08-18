import React, { FC } from "react";

import { DynamicFontWeightFlexRow } from "primitives";
import { moveTheSuffixToPrefix } from "utils";
import {
  StyledPrimaryText,
  StyledPrimaryAltText,
  StyledPrimaryTextContainer,
  StyledPrimaryCount,
  StyledSecondaryCount
} from "./styles";

export const MiniCardHeader: FC<IMiniCardHeader> = ({
  primaryText,
  primaryTextAlt,
  secondaryText,
  video,
  favourite,
  anomaly,
  panelVisible,
  star,
  primaryCount,
  secondaryCount,
  isStatic,
  countInfoIrrelevant,
  greaterCountPadding
}) => {
  const faded: boolean = !countInfoIrrelevant && primaryCount === 0;

  const showPrimaryCount: boolean =
    !!primaryCount &&
    (primaryCount > 1 || (!!secondaryCount && secondaryCount > 0));

  const showSecondaryCount: boolean =
    !!primaryCount &&
    !!secondaryCount &&
    secondaryCount > 0 &&
    primaryCount > 0;

  const bold: boolean = !isStatic && panelVisible;

  return (
    <DynamicFontWeightFlexRow italic={!!anomaly} bold={bold}>
      <StyledPrimaryTextContainer>
        <StyledPrimaryText
          faded={faded}
          favourite={favourite}
          star={star}
          video={video}
        >
          {moveTheSuffixToPrefix(primaryText)}
        </StyledPrimaryText>

        {primaryTextAlt && (
          <StyledPrimaryAltText>
            ({moveTheSuffixToPrefix(primaryTextAlt)})
          </StyledPrimaryAltText>
        )}
      </StyledPrimaryTextContainer>

      {showSecondaryCount && (
        <StyledSecondaryCount>{secondaryCount}</StyledSecondaryCount>
      )}

      {showPrimaryCount && (
        <StyledPrimaryCount greaterCountPadding={greaterCountPadding}>
          {primaryCount}
        </StyledPrimaryCount>
      )}

      {secondaryText}
    </DynamicFontWeightFlexRow>
  );
};
