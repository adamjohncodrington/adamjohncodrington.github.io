import React from "react";

import { GridColumnDiv } from "primitives";

import { Disclosure } from "../Disclosure";
import { PhotoGrid } from "../PhotoGrid";
import { RoundedSymbol } from "../RoundedSymbol";
import { YouTubeVideo } from "../YouTubeVideo";

import { CardTitleBold, CardSubtitleBold } from "../styles";
import {
  EventCardNote,
  EventCardCountdown,
  EventCardTextContainer,
  EventCardSymbolsContainer,
  EventCardSecondaryBody
} from "./styles";

export const EventCard: React.FC<IEventCard> = ({
  title,
  subtitle,
  favourite,
  body,
  secondaryBody,
  note,
  countdownText,
  hideVideoIcon,
  company,
  youtubeVideo,
  photos,
  hideCompany,
  hidePhotosIcon,
  hideSecondaryBody,
  hideSubtitle
}) => (
  <>
    <Disclosure
      isStatic={!(youtubeVideo || (photos && photos.length > 0))}
      Header={() => (
        <GridColumnDiv
          data-test="event-card-grid-container"
          equalWidthColumns={false}
        >
          <EventCardTextContainer data-test="event-card-container">
            <CardTitleBold data-test="event-card-title" favourite={favourite}>
              {title}
            </CardTitleBold>

            {subtitle && !hideSubtitle && (
              <CardSubtitleBold data-test="event-card-subtitle">
                {subtitle}
              </CardSubtitleBold>
            )}

            {body && <span data-test="event-card-body">{body}</span>}

            {secondaryBody && !hideSecondaryBody && (
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

          {(company.length > 0 || youtubeVideo) && (
            <EventCardSymbolsContainer>
              {!hideCompany &&
                company
                  .sort((a: IFriend, b: IFriend) =>
                    a.initials > b.initials ? 1 : -1
                  )
                  .map(({ initials }: IFriend, index: number) => (
                    <RoundedSymbol key={index} type="friend">
                      {initials}
                    </RoundedSymbol>
                  ))}

              {photos && !hidePhotosIcon && <RoundedSymbol type="photo" />}
              {youtubeVideo && !hideVideoIcon && <RoundedSymbol type="video" />}
            </EventCardSymbolsContainer>
          )}
        </GridColumnDiv>
      )}
      Panel={
        <>
          {photos && <PhotoGrid photos={photos} columnCount={2} />}
          {youtubeVideo && <YouTubeVideo {...youtubeVideo} />}
        </>
      }
    />
  </>
);
