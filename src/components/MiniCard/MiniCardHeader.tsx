import React, { FC } from "react";

import { DynamicFontWeightFlexRow } from "primitives";
import {
  StyledMainText,
  StyledSecondaryText,
  StyledTextContainer,
  MiniCardPastCount,
  MiniCardFutureCount
} from "./styles";

export const MiniCardHeader: FC<IMiniCardHeader> = ({
  text,
  secondaryText,
  favourite,
  panelIsVisible,
  star,
  futureCount,
  pastCount,
  countInfoIrrelevant,
  isLeaderboardItem
}) => {
  const fadedMainText: boolean = !countInfoIrrelevant && pastCount === 0;

  const showFutureCount: boolean = futureCount > 0 && pastCount > 0;
  const showPastCount: boolean =
    pastCount > 1 || (futureCount > 0 && pastCount > 0);

  return (
    <DynamicFontWeightFlexRow panelIsVisible={panelIsVisible}>
      <StyledTextContainer>
        <StyledMainText faded={fadedMainText} favourite={favourite} star={star}>
          {text}
        </StyledMainText>

        {secondaryText && (
          <StyledSecondaryText>({secondaryText})</StyledSecondaryText>
        )}
      </StyledTextContainer>

      {!countInfoIrrelevant && showFutureCount && (
        <MiniCardFutureCount>{futureCount}</MiniCardFutureCount>
      )}

      {!countInfoIrrelevant && showPastCount && (
        <MiniCardPastCount isLeaderboardItem={isLeaderboardItem}>
          {pastCount}
        </MiniCardPastCount>
      )}
    </DynamicFontWeightFlexRow>
  );
};
