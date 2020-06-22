import React from "react";
import styled, { css } from "styled-components";

import { FlexColumn, FlexRow, H3, SeventyFivePercentSpan } from "_primitives";

import { getCountdownText, getDisplayDateText, daysToGo } from "./utils";

const verticalSpaceBetweenEventCardRows: PxValue = "3px";

interface EventCardTitleProps {
  favourite: boolean;
}
const EventCardTitle = styled(H3)`
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

const ItalicBoldFlexRow = styled(FlexRow)`
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

const StyledFlexColumn = styled(FlexColumn)`
  > *:not(:first-child) {
    padding-top: ${verticalSpaceBetweenEventCardRows};
  }
`;

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
    <StyledFlexColumn data-test="event-card-container">
      <div>
        <EventCardTitle data-test="event-card-title" favourite={favourite}>
          {title}
        </EventCardTitle>

        {subtitle && (
          <EventCardSubtitle data-test="event-card-subtitle">
            {subtitle}
          </EventCardSubtitle>
        )}
      </div>

      {body && <span data-test="event-card-body">{body}</span>}

      <SeventyFivePercentSpan data-test="event-card-date">
        {getDisplayDateText(dates)}
      </SeventyFivePercentSpan>

      {daysTilGig >= 0 && (
        <ItalicBoldFlexRow>
          <strong>{getCountdownText(daysTilGig)}</strong>

          {disclaimer && (
            <SeventyFivePercentSpan>({disclaimer})</SeventyFivePercentSpan>
          )}
        </ItalicBoldFlexRow>
      )}
    </StyledFlexColumn>
  );
};
