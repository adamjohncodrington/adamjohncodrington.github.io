import React from "react";
import styled, { css } from "styled-components";

import { useThemeContext } from "context";
import { GridColumnDiv } from "primitives";

import { Disclosure } from "../Disclosure";
import { PhotoGrid } from "../PhotoGrid";
import { RoundedSymbol } from "../RoundedSymbol";
import { YouTubeVideo } from "../YouTubeVideo";

import { CardTitle, CardSubtitle } from "../styles";
import {
  CardNote,
  CardCountdown,
  CardTextContainer,
  CardSymbolsContainer,
  CardSecondaryBody
} from "./styles";

import { Link, FlexRow, SquareImage } from "primitives";

const CardHeaderPhotoLink = styled(Link)(
  ({ theme: { vinyl } }: I_Theme) =>
    css`
      margin-right: ${vinyl.artwork.margin.right};
    `
);

export const Card: React.FC<ICard> = ({
  title,
  subtitle,
  favourite,
  headerPhoto,
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
  const {
    vinyl: {
      artwork: { size }
    }
  }: ITheme = useThemeContext();

  const isStatic: boolean = !(video || (photos && photos.length > 0));

  return (
    <>
      <Disclosure
        isStatic={isStatic}
        Header={({ panelIsVisible }) => (
          <FlexRow>
            {headerPhoto && (
              <CardHeaderPhotoLink href={headerPhoto.href}>
                <SquareImage size={size} photo={headerPhoto} />
              </CardHeaderPhotoLink>
            )}

            <GridColumnDiv
              data-test="card-grid-container"
              equalWidthColumns={false}
            >
              <CardTextContainer data-test="card-container">
                <CardTitle
                  bold={!isStatic && panelIsVisible}
                  data-test="card-title"
                  favourite={!hideFavouriteIcon && favourite}
                >
                  {title}
                </CardTitle>

                {subtitle && !hideSubtitle && (
                  <CardSubtitle bold={false} data-test="card-subtitle">
                    {subtitle}
                  </CardSubtitle>
                )}

                {body && !hideBody && <span data-test="card-body">{body}</span>}

                {secondaryBody && !hideSecondaryBody && (
                  <CardSecondaryBody data-test="card-secondary-body">
                    {secondaryBody}
                  </CardSecondaryBody>
                )}

                {countdownText && (
                  <>
                    <CardCountdown data-test="card-countdown">
                      {countdownText}
                    </CardCountdown>

                    {note && (
                      <CardNote data-test="card-note">{`(${note})`}</CardNote>
                    )}
                  </>
                )}
              </CardTextContainer>

              {(company.length > 0 || video) && (
                <CardSymbolsContainer>
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
                </CardSymbolsContainer>
              )}
            </GridColumnDiv>
          </FlexRow>
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
