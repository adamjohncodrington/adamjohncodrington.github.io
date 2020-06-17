import React from "react";
import styled from "styled-components";

import { FlexColumn, FlexRow, GlobalText } from "../../primitives";
import {
  daysToGo,
  getDisplayDateText,
  getCountdownText
} from "../../utils/global";

const {
  EventCardTitle,
  EventCardSubtitle,
  EventCardDates,
  EventCardBody,
  EventCardCountdown,
  EventCardDisclaimer
} = GlobalText;

const ItalicFlexRow = styled(FlexRow)`
  font-style: italic;
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
    <FlexColumn data-test="event-card-container">
      <EventCardTitle data-test="event-card-title" favourite={favourite}>
        {title}
      </EventCardTitle>

      {subtitle && (
        <EventCardSubtitle data-test="event-card-subtitle">
          {subtitle}
        </EventCardSubtitle>
      )}

      {body && (
        <EventCardBody data-test="event-card-body">{body}</EventCardBody>
      )}

      <EventCardDates data-test="event-card-date">
        {getDisplayDateText(dates)}
      </EventCardDates>

      {daysTilGig >= 0 && (
        <ItalicFlexRow>
          <EventCardCountdown>
            {getCountdownText(daysTilGig)}
          </EventCardCountdown>

          {disclaimer && (
            <EventCardDisclaimer>({disclaimer})</EventCardDisclaimer>
          )}
        </ItalicFlexRow>
      )}
    </FlexColumn>
  );
};
