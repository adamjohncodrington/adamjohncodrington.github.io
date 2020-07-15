import React from "react";

import { useThemeContext } from "context";
import { GridColumnDiv, CentredContent } from "primitives";

import { Disclosure } from "../Disclosure";
import { RoundedSymbol } from "../RoundedSymbol";
import { CardTitleBold, CardSubtitleBold } from "../styles";
import {
  EventCardNote,
  EventCardCountdown,
  EventCardTextContainer,
  EventCardSymbolsContainer,
  EventCardSecondaryBody,
  EventCardVideo
} from "./styles";

export const EventCard: React.FC<IEventCard> = ({
  title,
  subtitle,
  favourite,
  body,
  secondaryBody,
  note,
  countdownText,
  company,
  videoSrc
}) => {
  const {
    eventCard: { companySymbol }
  }: ITheme = useThemeContext();

  return (
    <>
      <Disclosure
        isStatic={!videoSrc}
        Header={() => (
          <GridColumnDiv
            data-test="event-card-grid-container"
            equalWidthColumns={false}
          >
            <EventCardTextContainer data-test="event-card-container">
              <CardTitleBold data-test="event-card-title" favourite={favourite}>
                {title}
              </CardTitleBold>

              {subtitle && (
                <CardSubtitleBold data-test="event-card-subtitle">
                  {subtitle}
                </CardSubtitleBold>
              )}

              {body && <span data-test="event-card-body">{body}</span>}

              {secondaryBody && (
                <EventCardSecondaryBody data-test="event-card-secondary-body">
                  {secondaryBody}
                </EventCardSecondaryBody>
              )}

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
            </EventCardTextContainer>

            {(company.length > 0 || videoSrc) && (
              <EventCardSymbolsContainer>
                {videoSrc && <RoundedSymbol color="black">V</RoundedSymbol>}
                {company
                  .sort((a: IFriend, b: IFriend) =>
                    a.initials > b.initials ? 1 : -1
                  )
                  .map(({ initials }: IFriend, index: number) => (
                    <RoundedSymbol key={index} color={companySymbol.color}>
                      {initials}
                    </RoundedSymbol>
                  ))}
              </EventCardSymbolsContainer>
            )}
          </GridColumnDiv>
        )}
      >
        {videoSrc && (
          <CentredContent>
            <EventCardVideo controls src={videoSrc} />
          </CentredContent>
        )}
      </Disclosure>
    </>
  );
};
