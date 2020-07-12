import React, { ReactElement } from "react";

import { FlexRow, FlexLiGrow } from "primitives";

import { CountedListItemDetails } from "../CountedListItemDetails";
import { Disclosure } from "../Disclosure";

import {
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
  countInfoIrrelevant,
  isLeaderboardItem,
  details
}) => {
  const showFutureCount: boolean = futureCount > 0 && pastCount > 0;
  const showPastCount: boolean =
    pastCount > 1 || (futureCount > 0 && pastCount > 0);

  const TextAndCounts: ReactElement = (
    <>
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
    </>
  );

  return details && details.length > 0 ? (
    <li>
      <Disclosure Header={<FlexRow>{TextAndCounts}</FlexRow>}>
        <CountedListItemDetails details={details} />
      </Disclosure>
    </li>
  ) : (
    <FlexLiGrow>{TextAndCounts}</FlexLiGrow>
  );
};
