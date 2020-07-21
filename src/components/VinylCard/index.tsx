import React, { FC } from "react";
import styled, { css } from "styled-components";

import { useThemeContext } from "context";
import { Link, FlexRow, SquareImage } from "primitives";
import { moveTheSuffixToPrefix, getMusicianStageNameAtTime } from "utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";

const VinylCardLink = styled(Link)(
  ({ theme: { vinyl } }: IThemeProp) =>
    css`
      margin-right: ${vinyl.artwork.margin.right};
    `
);

const VinylCardTextContainer = styled.div(
  ({ theme: { vinyl } }: IThemeProp) =>
    css`
      flex: 1;

      > *:not(:last-child) {
        margin-bottom: ${vinyl.notLastChild.margin.bottom};
      }
    `
);

export const VinylCard: FC<IVinyl> = ({
  musician,
  title,
  year,
  artwork,
  appleMusicId
}) => {
  const {
    vinyl: {
      artwork: { size }
    }
  }: ITheme = useThemeContext();

  return (
    <FlexRow data-test="vinyl-card">
      <VinylCardLink href={"https://music.apple.com/gb/album/" + appleMusicId}>
        <SquareImage dataTest="vinyl-artwork" size={size} photo={artwork} />
      </VinylCardLink>

      <VinylCardTextContainer>
        <CardTitleBold>{title}</CardTitleBold>
        <CardSubtitleBold>
          {moveTheSuffixToPrefix(
            getMusicianStageNameAtTime({ musician, year })
          )}
        </CardSubtitleBold>
        <div>{year}</div>
      </VinylCardTextContainer>
    </FlexRow>
  );
};
