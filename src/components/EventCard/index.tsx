import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "styled-components";

import { datesArrayToString } from "@utils";
import { GridColumnDiv } from "primitives";

import { RoundedSymbol } from "../RoundedSymbol";
import { CardTitleBold, CardSubtitleBold } from "../styles";

import {
  EventCardCountdownNoteContainer,
  EventCardNote,
  EventCardMainContainer,
  EventCardCompanyContainer,
  EventCardDates
} from "./styles";
import { getCountdownText, daysToGo } from "./utils";

export const EventCard: React.FC<IEventCard> = ({
  title,
  subtitle,
  favourite,
  body,
  dates,
  note,
  company
}) => {
  const theme: ITheme = useContext(ThemeContext);
  const daysUntilEvent: number = daysToGo(dates);

  const EventCardMain: ReactElement = (
    <EventCardMainContainer data-test="event-card-container">
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

      <EventCardDates data-test="event-card-date(s)">
        {datesArrayToString(dates)}
      </EventCardDates>

      {daysUntilEvent >= 0 && (
        <EventCardCountdownNoteContainer data-test="event-card-countdown-note-container">
          <strong data-test="event-card-countdown">
            {getCountdownText(daysUntilEvent)}
          </strong>

          {note && (
            <EventCardNote data-test="event-card-note">{`(${note})`}</EventCardNote>
          )}
        </EventCardCountdownNoteContainer>
      )}
    </EventCardMainContainer>
  );

  if (company.length === 0) return EventCardMain;

  const EventCardCompany: ReactElement = (
    <EventCardCompanyContainer>
      {company
        .sort((a: IFriend, b: IFriend) => (a.initials > b.initials ? 1 : -1))
        .map(({ initials }: IFriend) => (
          <RoundedSymbol color={theme.eventCard.companySymbol.color}>
            {initials}
          </RoundedSymbol>
        ))}
    </EventCardCompanyContainer>
  );

  return (
    <GridColumnDiv
      data-test="event-card-grid-container"
      equalWidthColumns={false}
    >
      {EventCardMain}
      {EventCardCompany}
    </GridColumnDiv>
  );
};
