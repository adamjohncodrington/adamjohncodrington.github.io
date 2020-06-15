import React from "react";
import styled, { css } from "styled-components";

import { FlexRow, FlexColumn, Text } from "../../../primitives";
import { daysToGo, getDisplayDateText } from "../../../utils/global";

import { EventCardCompany } from "./EventCardCompany";
import { EventCardCountdown } from "./EventCardCountdown";

const TextContent = styled.div`
  flex: 1;
`;

interface IEventCardTitle {
  favourite: boolean;
}
const EventCardTitle = styled(Text.P.M)`
  ${({ favourite }: IEventCardTitle) =>
    favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}

  font-weight: bold;
  text-transform: uppercase;
`;

const EventCardSubtitle = styled(Text.P.S)`
  font-weight: bold;
  text-transform: uppercase;
`;

const EventCardBody = styled(Text.P.S)`
  padding: 1px 0 3px;
`;

export const EventCard: React.FC<IEventCard> = ({
  title,
  subtitle,
  favourite,
  body,
  eventType,
  dates,
  company,
  disclaimer
}) => {
  const days = daysToGo(dates);

  return (
    <FlexColumn data-test="event-card-container">
      <FlexRow data-test="event-card-main-info">
        <TextContent data-test="event-card-main-text">
          <EventCardTitle data-test="event-card-title" favourite={favourite}>
            {title}
          </EventCardTitle>

          {subtitle && (
            <EventCardSubtitle data-test="event-card-subtitle">
              {subtitle}
            </EventCardSubtitle>
          )}

          <EventCardBody data-test="event-card-body">{body}</EventCardBody>
        </TextContent>

        {company && (
          <EventCardCompany company={company} eventType={eventType} />
        )}
      </FlexRow>

      <FlexColumn data-test="event-card-date-info">
        <Text.P.XS data-test="event-card-date">
          {getDisplayDateText(dates)}
        </Text.P.XS>

        {days >= 0 && (
          <EventCardCountdown days={days} disclaimer={disclaimer} />
        )}
      </FlexColumn>
    </FlexColumn>
  );
};
