import React from "react";
import styled, { css } from "styled-components";

import { FlexColumn, FlexRow, Text } from "../primitives";
import {
  daysToGo,
  getDisplayDateText,
  getCountdownText
} from "../utils/global";

type EventCardTitleProps = {
  favourite: boolean;
};
const Title = styled(Text.P.M)`
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

const Subtitle = styled(Text.P.S)`
  font-weight: bold;
  text-transform: uppercase;
`;

const Body = styled(Text.P.S)`
  padding: 1px 0 3px;
`;

const Dates = styled(Text.P.XS)``;

const ItalicFlexRow = styled(FlexRow)`
  font-style: italic;
`;

const Disclaimer = styled(Text.P.XS)`
  margin: 8px 0 0 4px;
`;

const Countdown = styled(Text.P.S)`
  font-weight: bold;
  margin-top: 5px;
  text-align: left;
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
      <Title data-test="event-card-title" favourite={favourite}>
        {title}
      </Title>

      {subtitle && (
        <Subtitle data-test="event-card-subtitle">{subtitle}</Subtitle>
      )}

      {body && <Body data-test="event-card-body">{body}</Body>}

      <Dates data-test="event-card-date">{getDisplayDateText(dates)}</Dates>

      {daysTilGig >= 0 && (
        <ItalicFlexRow>
          <Countdown>{getCountdownText(daysTilGig)}</Countdown>

          {disclaimer && <Disclaimer>({disclaimer})</Disclaimer>}
        </ItalicFlexRow>
      )}
    </FlexColumn>
  );
};
