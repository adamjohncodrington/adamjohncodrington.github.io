import React from "react";
import styled, { css } from "styled-components";

import {
  FlexColDivumn,
  FlexRowDiv,
  Headers,
  SeventyFivePercentSpan
} from "../../primitives";
import {
  daysToGo,
  getDisplayDateText,
  getCountdownText
} from "../../utils/global";

const { EventCardTitle } = Headers;

const verticalSpaceBetweenEventCardRows: PxValue = "3px";

interface EventCardTitleProps {
  favourite: boolean;
}
const StyledEventCardTitle = styled(EventCardTitle)`
  ${({ favourite }: EventCardTitleProps) =>
    favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}

  font-weight: bold;
  text-transform: uppercase;
`;

const ItalicBoldFlexRowDiv = styled(FlexRowDiv)`
  font-style: italic;

  > *:not(:first-child) {
    margin-top: 3px;
    margin-left: 5px;
  }
`;

const EventCardSubtitle = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledFlexColDivumn = styled(FlexColDivumn)`
  > *:not(:first-child) {
    padding-top: ${verticalSpaceBetweenEventCardRows};
  }
`;

const TitleAndSubtitle = styled.div``;

export const EventCard: React.FC<IEventCard> = ({
  title,
  subtitle,
  favourite,
  body,
  dates,
  disclaimer
}) => {
  const daysTilGig: number = daysToGo(dates);

  return (
    <StyledFlexColDivumn data-test="event-card-container">
      <TitleAndSubtitle>
        <StyledEventCardTitle
          data-test="event-card-title"
          favourite={favourite}
        >
          {title}
        </StyledEventCardTitle>

        {subtitle && (
          <EventCardSubtitle data-test="event-card-subtitle">
            {subtitle}
          </EventCardSubtitle>
        )}
      </TitleAndSubtitle>

      {body && <span data-test="event-card-body">{body}</span>}

      <SeventyFivePercentSpan data-test="event-card-date">
        {getDisplayDateText(dates)}
      </SeventyFivePercentSpan>

      {daysTilGig >= 0 && (
        <ItalicBoldFlexRowDiv>
          <strong>{getCountdownText(daysTilGig)}</strong>

          {disclaimer && (
            <SeventyFivePercentSpan>({disclaimer})</SeventyFivePercentSpan>
          )}
        </ItalicBoldFlexRowDiv>
      )}
    </StyledFlexColDivumn>
  );
};
