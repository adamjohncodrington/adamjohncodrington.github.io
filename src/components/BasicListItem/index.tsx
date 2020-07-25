import React, { FC, ReactElement } from "react";

import { FlexLiGrow, DynamicFontWeightFlexRow } from "primitives";

import { BasicListItemDetails } from "../BasicListItemDetails";
import { Disclosure } from "../Disclosure";

import {
  StyledMainText,
  StyledSecondaryText,
  StyledTextContainer,
  BasicListItemPastCount,
  BasicListItemFutureCount
} from "./styles";

export const BasicListItem: FC<IBasicListItem> = ({
  text,
  secondaryText,
  favourite,
  star,
  futureCount,
  pastCount,
  countInfoIrrelevant,
  isLeaderboardItem,
  details
}) => {
  const fadedMainText: boolean = !countInfoIrrelevant && pastCount === 0;

  const showFutureCount: boolean = futureCount > 0 && pastCount > 0;
  const showPastCount: boolean =
    pastCount > 1 || (futureCount > 0 && pastCount > 0);

  const TextAndCounts: ReactElement = (
    <>
      <StyledTextContainer>
        <StyledMainText faded={fadedMainText} favourite={favourite} star={star}>
          {text}
        </StyledMainText>

        {secondaryText && (
          <StyledSecondaryText>({secondaryText})</StyledSecondaryText>
        )}
      </StyledTextContainer>

      {!countInfoIrrelevant && showFutureCount && (
        <BasicListItemFutureCount>{futureCount}</BasicListItemFutureCount>
      )}

      {!countInfoIrrelevant && showPastCount && (
        <BasicListItemPastCount isLeaderboardItem={isLeaderboardItem}>
          {pastCount}
        </BasicListItemPastCount>
      )}
    </>
  );

  if (details && details.length > 0) {
    return (
      <li>
        <Disclosure
          Header={({ panelIsVisible }) => (
            <DynamicFontWeightFlexRow panelIsVisible={panelIsVisible}>
              {TextAndCounts}
            </DynamicFontWeightFlexRow>
          )}
          Panel={() => <BasicListItemDetails details={details} />}
        />
      </li>
    );
  }

  return <FlexLiGrow>{TextAndCounts}</FlexLiGrow>;
};
