import React from "react";

import { FlexLiGrow } from "primitives";

import {
  CountedListItemText,
  CountedListItemPastCount,
  CountedListItemFutureCount,
  StyledOl,
  StyledLi,
  StyledSpan,
  StyledSummary
} from "./styles";

export const CountedListItem: React.FC<ICountedListItem> = ({
  text,
  favourite,
  star,
  futureCount,
  pastCount,
  countInfoIrrelevant,
  isLeaderboardItem,
  details
}) => {
  if (details)
    return (
      <li>
        <details>
          <StyledSummary>{text}</StyledSummary>
          <StyledOl>
            {details.map(({ text, isInFuture }: IDetailItem, index: number) => (
              <StyledLi key={index} isInFuture={isInFuture}>
                <StyledSpan>{text}</StyledSpan>
              </StyledLi>
            ))}
          </StyledOl>
        </details>
      </li>
    );

  const showFutureCount: boolean = futureCount > 0 && pastCount > 0;
  const showPastCount: boolean =
    pastCount > 1 || (futureCount > 0 && pastCount > 0);

  return (
    <FlexLiGrow>
      <CountedListItemText
        faded={!countInfoIrrelevant && pastCount === 0}
        favourite={favourite}
        star={star}
      >
        {text}
      </CountedListItemText>

      {!countInfoIrrelevant && showFutureCount && (
        <CountedListItemFutureCount>{futureCount}</CountedListItemFutureCount>
      )}

      {!countInfoIrrelevant && showPastCount && (
        <CountedListItemPastCount isLeaderboardItem={isLeaderboardItem}>
          {pastCount}
        </CountedListItemPastCount>
      )}
    </FlexLiGrow>
  );
};
