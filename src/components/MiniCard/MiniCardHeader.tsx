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
  panelVisible,
  star,
  primaryCount,
  secondaryCount,
  isStatic,
  countInfoIrrelevant,
  isLeaderboardItem
}) => {
  // const fadedText: boolean = !countInfoIrrelevant && primaryCount === 0;
  // const showPrimaryCount: boolean =
  //   !!primaryCount &&
  //   !!secondaryCount &&
  //   (primaryCount > 1 || (secondaryCount > 0 && primaryCount > 0));
  // const showSecondaryCount: boolean =
  //   !!primaryCount &&
  //   !!secondaryCount &&
  //   secondaryCount > 0 &&
  //   primaryCount > 0;

  return (
    <DynamicFontWeightFlexRow bold={!isStatic && panelVisible}>
      <StyledTextContainer>
        <StyledPrimaryText
          //TODO: fix
          faded={false}
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

      {secondaryCount && !countInfoIrrelevant && (
        <StyledSecondaryCount>{secondaryCount}</StyledSecondaryCount>
      )}

      {primaryCount && !countInfoIrrelevant && (
        <StyledPrimaryCount isLeaderboardItem={isLeaderboardItem}>
          {primaryCount}
        </StyledPrimaryCount>
      )}
    </DynamicFontWeightFlexRow>
  );
};
