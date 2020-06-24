import React from "react";
import styled from "styled-components";

import { FlexColumn, FlexRow, SeventyFivePercentSpan } from "primitives";
import { datesArrayToString } from "utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";
import { getCountdownText, daysToGo } from "./utils";

const ItalicBoldFlexRow = styled(FlexRow)`
  font-style: italic;

  > *:not(:first-child) {
    margin-top: 3px;
    margin-left: 5px;
  }
`;

const verticalSpaceBetweenEventCardRows: PxValue = "3px";
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
      <div data-test="event-card-title-and-subtitle">
        <CardTitleBold data-test="event-card-title" favourite={favourite}>
          {title}
        </CardTitleBold>

        {subtitle && (
          <CardSubtitleBold data-test="event-card-subtitle">
            {subtitle}
          </CardSubtitleBold>
        )}
      </div>

      {body && <span data-test="event-card-body">{body}</span>}

      <SeventyFivePercentSpan data-test="event-card-date">
        {datesArrayToString(dates)}
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
