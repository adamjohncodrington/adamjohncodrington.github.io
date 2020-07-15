import React, { FC, ReactElement } from "react";

import { FlexLiGrow, DynamicFontWeightFlexRow } from "primitives";

import { CountedListItemDetails } from "../CountedListItemDetails";
import { Disclosure } from "../Disclosure";

import {
  CountedListItemText,
  CountedListItemPastCount,
  CountedListItemFutureCount
} from "./styles";

interface IDisclosureHeader extends IClassName, IPanelIsVisible {}

const DisclosureHeader: FC<IDisclosureHeader> = ({
  className,
  children,
  panelIsVisible
}) => (
  <DynamicFontWeightFlexRow className={className} isBold={panelIsVisible}>
    {children}
  </DynamicFontWeightFlexRow>
);

export const CountedListItem: FC<ICountedListItem> = ({
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
  const showFutureCount: boolean = futureCount > 0 && pastCount > 0;
  const showPastCount: boolean =
    pastCount > 1 || (futureCount > 0 && pastCount > 0);

  const TextAndCounts: ReactElement = (
    <>
      <CountedListItemText
        faded={!countInfoIrrelevant && pastCount === 0}
        favourite={favourite}
        star={star}
        secondaryText={secondaryText}
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
      <Disclosure
        Header={({ panelIsVisible }) => (
          <DisclosureHeader panelIsVisible={panelIsVisible}>
            {TextAndCounts}
          </DisclosureHeader>
        )}
      >
        <CountedListItemDetails details={details} />
      </Disclosure>
    </li>
  ) : (
    <FlexLiGrow>{TextAndCounts}</FlexLiGrow>
  );
};
