import React from "react";

import { datesArrayToString } from "@utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";
import {
  EventCardCountdownNoteContainer,
  EventCardNote,
  EventCardContainer,
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
  const daysUntilEvent: number = daysToGo(dates);

  const friendsInitials: Array<string> = company.map(
    (friend: IFriend) => friend.initials
  );

  return (
    <EventCardContainer data-test="event-card-container">
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
    </EventCardContainer>
  );
};
