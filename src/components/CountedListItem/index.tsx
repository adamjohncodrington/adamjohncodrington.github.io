import React, { FC, ReactElement } from "react";

import { FlexLiGrow, DynamicFontWeightFlexRow } from "primitives";

import { CountedListItemDetails } from "../CountedListItemDetails";
import { Disclosure } from "../Disclosure";

import {
  StyledMainText,
  StyledSecondaryText,
  StyledTextContainer,
  CountedListItemPastCount,
  CountedListItemFutureCount
} from "./styles";

interface IDisclosureHeader extends I_ClassName, IPanelIsVisible {}

const DisclosureHeader: FC<IDisclosureHeader> = ({
  className,
  children,
  panelIsVisible
}) => (
  <DynamicFontWeightFlexRow
    className={className}
    panelIsVisible={panelIsVisible}
  >
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
        <CountedListItemFutureCount>{futureCount}</CountedListItemFutureCount>
      )}

      {!countInfoIrrelevant && showPastCount && (
        <CountedListItemPastCount isLeaderboardItem={isLeaderboardItem}>
          {pastCount}
        </CountedListItemPastCount>
      )}
    </>
  );

  if (details && details.length > 0) {
    const sortedDetails: Array<ICountedListItemDetail> = details.sort(
      (a: ICountedListItemDetail, b: ICountedListItemDetail) =>
        a.dates[0].valueOf() > b.dates[0].valueOf() ? 1 : -1
    );

    return (
      <li>
        <Disclosure
          Header={({ panelIsVisible }) => (
            <DisclosureHeader panelIsVisible={panelIsVisible}>
              {TextAndCounts}
            </DisclosureHeader>
          )}
          Panel={<CountedListItemDetails details={sortedDetails} />}
        />
      </li>
    );
  }

  return <FlexLiGrow>{TextAndCounts}</FlexLiGrow>;
};
