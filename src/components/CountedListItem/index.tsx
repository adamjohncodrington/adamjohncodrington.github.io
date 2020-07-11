import React from "react";

import { FlexRow, FlexLiGrow } from "primitives";
import {
  isInFuture,
  getGigCardTitle,
  getTravelCardTitle,
  dateToString,
  datesToString,
  getTheatreCardTitle
} from "utils";

import {
  CountedListItemText,
  CountedListItemPastCount,
  CountedListItemFutureCount,
  StyledOl,
  StyledLi,
  StyledSummary,
  StyledDetails
} from "./styles";

interface IDetailedListItemDetail {
  dates: Array<Date>;
  index: number;
  text: string;
}

const DetailedListItemDetail: React.FC<IDetailedListItemDetail> = ({
  dates,
  index,
  text
}) => {
  const IS_IN_FUTURE: boolean = isInFuture(dates[0]);

  return (
    <StyledLi key={index} isInFuture={IS_IN_FUTURE}>
      <FlexRow>
        {index}. {text} (
        {dates.length === 2 ? datesToString(dates) : dateToString(dates[0])})
      </FlexRow>
    </StyledLi>
  );
};

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
        <StyledDetails>
          <StyledSummary>{text}</StyledSummary>
          <StyledOl>
            {details.gigCards &&
              details.gigCards.map((gigCard: IGigCard, index: number) => (
                <DetailedListItemDetail
                  key={index}
                  dates={gigCard.dates}
                  text={getGigCardTitle(gigCard)}
                  index={index + 1}
                />
              ))}

            {details.travelCards &&
              details.travelCards.map(
                (travelCard: ITravelCard, index: number) => (
                  <DetailedListItemDetail
                    key={index}
                    dates={travelCard.dates}
                    text={getTravelCardTitle(travelCard)}
                    index={index + 1}
                  />
                )
              )}

            {details.theatreCards &&
              details.theatreCards.map(
                (theatreCard: ITheatreCard, index: number) => (
                  <DetailedListItemDetail
                    key={index}
                    dates={[theatreCard.date]}
                    text={getTheatreCardTitle(theatreCard)}
                    index={index + 1}
                  />
                )
              )}
          </StyledOl>
        </StyledDetails>
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
