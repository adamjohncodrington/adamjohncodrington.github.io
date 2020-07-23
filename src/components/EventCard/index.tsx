import React from "react";

import { GridColumnDiv } from "primitives";

import { Disclosure } from "../Disclosure";
import { PhotoGrid } from "../PhotoGrid";
import { RoundedSymbol } from "../RoundedSymbol";
import { YouTubeVideo } from "../YouTubeVideo";

import { CardTitle, CardSubtitle } from "../styles";
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
  hideFavouriteIcon,
  body,
  secondaryBody,
  note,
  countdownText,
  company,
  video,
  photos,
  hidePhotosIcon,
  hideVideoIcon,
  hideCompanySymbols,
  hideBody,
  hideSecondaryBody,
  hideSubtitle
}) => {
  const isStatic: boolean = !(video || (photos && photos.length > 0));

  return (
    <>
      <Disclosure
        isStatic={isStatic}
        Header={({ panelIsVisible }) => (
          <GridColumnDiv
            data-test="event-card-grid-container"
            equalWidthColumns={false}
          >
            <EventCardTextContainer data-test="event-card-container">
              <CardTitle
                bold={!isStatic && panelIsVisible}
                data-test="event-card-title"
                favourite={!hideFavouriteIcon && favourite}
              >
                {title}
              </CardTitle>

              {subtitle && !hideSubtitle && (
                <CardSubtitle data-test="event-card-subtitle">
                  {subtitle}
                </CardSubtitle>
              )}

              {body && !hideBody && (
                <span data-test="event-card-body">{body}</span>
              )}

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

            {(company.length > 0 || video) && (
              <EventCardSymbolsContainer>
                {company.length > 0 &&
                  !hideCompanySymbols &&
                  company
                    .sort((a: IFriend, b: IFriend): number =>
                      a.initials > b.initials ? 1 : -1
                    )
                    .map(({ initials }: IFriend, index: number) => (
                      <RoundedSymbol key={index} type="friend" opacity="50%">
                        {initials}
                      </RoundedSymbol>
                    ))}

                {photos && !hidePhotosIcon && (
                  <RoundedSymbol
                    type="photo"
                    opacity={!hideCompanySymbols ? "100%" : "50%"}
                  />
                )}
                {video && !hideVideoIcon && (
                  <RoundedSymbol
                    type="video"
                    opacity={!hideCompanySymbols ? "100%" : "50%"}
                  />
                )}
              </EventCardSymbolsContainer>
            )}
          </GridColumnDiv>
        )}
        Panel={
          <>
            {photos && <PhotoGrid photos={photos} columnCount={2} />}
            {video && <YouTubeVideo {...video} marginTop="10px" />}
          </>
        }
      />
    </>
  );
};
