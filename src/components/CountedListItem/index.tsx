import React from "react";

import {
  CountedListItemContainer,
  CountedListItemText,
  CountedListItemPastCount,
  CountedListItemFutureCount
} from "./styles";

export const CountedListItem: React.FC<ICountedListItem> = ({
  text,
  favourite,
  star,
  futureCount,
  pastCount,
  countInfoIrrelevant
}) => {
  const showFutureCount: boolean = futureCount > 0 && pastCount > 0;
  const showPastCount: boolean =
    pastCount > 1 || (futureCount > 0 && pastCount > 0);

  return (
    <CountedListItemContainer>
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
        <CountedListItemPastCount>{pastCount}</CountedListItemPastCount>
      )}
    </CountedListItemContainer>
  );
};
