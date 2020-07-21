import React, { FC, ReactElement } from "react";

import { FlexLiGrow, DynamicFontWeightFlexRow } from "primitives";

import { CountedListItemDetails } from "../CountedListItemDetails";
import { Disclosure } from "../Disclosure";

import {
  StyledMainText,
  StyledTextContainer,
  CountedListItemPastCount,
  CountedListItemFutureCount
} from "./styles";

interface IDisclosureHeader extends IClassName, IPanelIsVisible {}

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
  // secondaryText,
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

        {/* {secondaryText && <span>({secondaryText})</span>} */}
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

  return details && details.length > 0 ? (
    <li>
      <Disclosure
        Header={({ panelIsVisible }) => (
          <DisclosureHeader panelIsVisible={panelIsVisible}>
            {TextAndCounts}
          </DisclosureHeader>
        )}
        Panel={<CountedListItemDetails details={details} />}
      />
    </li>
  ) : (
    <FlexLiGrow>{TextAndCounts}</FlexLiGrow>
  );
};
