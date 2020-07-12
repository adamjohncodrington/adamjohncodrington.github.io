import React, { FC, ReactElement } from "react";

import { FlexRow, FlexLiGrow } from "primitives";

import { CountedListItemDetails } from "../CountedListItemDetails";
import { Disclosure } from "../Disclosure";

import {
  CountedListItemText,
  CountedListItemPastCount,
  CountedListItemFutureCount
} from "./styles";

export const CountedListItem: FC<ICountedListItem> = ({
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

  interface IDisclosureHeader {
    className?: string;
  }

  const DisclosureHeader: FC<IDisclosureHeader> = ({ className }) => (
    <FlexRow className={className}>{TextAndCounts}</FlexRow>
  );

  return details && details.length > 0 ? (
    <li>
      <Disclosure Header={DisclosureHeader}>
        <CountedListItemDetails details={details} />
      </Disclosure>
    </li>
  ) : (
    <FlexLiGrow>{TextAndCounts}</FlexLiGrow>
  );
};
