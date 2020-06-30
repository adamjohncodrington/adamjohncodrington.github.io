import React, { ReactElement, useContext } from "react";
import { ThemeContext } from "styled-components";

import { GridColumnDiv } from "primitives";

import { RoundedSymbol } from "../RoundedSymbol";
import { CardTitleBold, CardSubtitleBold } from "../styles";
import {
  EventCardNote,
  EventCardCountdown,
  EventCardMainContainer,
  EventCardCompanyContainer,
  EventCardDateText
} from "./styles";

export const EventCard: React.FC<IEventCard> = ({
  title,
  subtitle,
  favourite,
  body,
  dateText,
  note,
  countdownText,
  company
}) => {
  const theme: ITheme = useContext(ThemeContext);
  // const daysUntilEvent: number = daysToGo(dates);

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

      <EventCardDateText data-test="event-card-date-text">
        {dateText}
      </EventCardDateText>

      {countdownText && (
        <>
          <EventCardCountdown data-test="event-card-countdown">
            {countdownText}
          </EventCardCountdown>

          {note && (
            <EventCardNote data-test="event-card-note">{`(${note})`}</EventCardNote>
          )}
        </>
      )}
    </EventCardMainContainer>
  );

  if (company.length === 0) return EventCardMain;

  const EventCardCompany: ReactElement = (
    <EventCardCompanyContainer>
      {company
        .sort((a: IFriend, b: IFriend) => (a.initials > b.initials ? 1 : -1))
        .map(({ initials }: IFriend, index: number) => (
          <RoundedSymbol
            key={index}
            color={theme.eventCard.companySymbol.color}
          >
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
