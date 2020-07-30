import React, { FC } from "react";

import { DynamicFontWeightFlexRow } from "primitives";
import { moveTheSuffixToPrefix } from "utils";
import {
  StyledPrimaryText,
  StyledSecondaryText,
  StyledTextContainer,
  StyledPrimaryCount,
  StyledSecondaryCount
} from "./styles";

export const MiniCardHeader: FC<IMiniCardHeader> = ({
  primaryText,
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

  return (
    <DynamicFontWeightFlexRow
      italic={!!anomaly}
      bold={!isStatic && panelVisible}
    >
      <StyledTextContainer>
        <StyledPrimaryText
          faded={faded}
          favourite={favourite}
          star={star}
          video={video}
        >
          {moveTheSuffixToPrefix(primaryText)}
        </StyledPrimaryText>

        {secondaryText && (
          <StyledSecondaryText>
            ({moveTheSuffixToPrefix(secondaryText)})
          </StyledSecondaryText>
        )}
      </StyledTextContainer>

      {showSecondaryCount && (
        <StyledSecondaryCount>{secondaryCount}</StyledSecondaryCount>
      )}

      {showPrimaryCount && (
        <StyledPrimaryCount greaterCountPadding={greaterCountPadding}>
          {primaryCount}
        </StyledPrimaryCount>
      )}
    </DynamicFontWeightFlexRow>
  );
};
