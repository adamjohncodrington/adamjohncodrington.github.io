import React, { FC } from "react";
import styled, { css } from "styled-components";

import { useThemeContext } from "context";
import { Link, FlexRow, SquareImage } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

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
  artist,
  title,
  year,
  artwork,
  appleMusicUrl
}) => {
  const {
    vinyl: {
      artwork: { size }
    }
  }: ITheme = useThemeContext();

  return (
    <FlexRow data-test="vinyl-card">
      <VinylCardLink href={appleMusicUrl}>
        <SquareImage dataTest="vinyl-artwork" size={size} imgSrc={artwork} />
      </VinylCardLink>

      <VinylCardTextContainer>
        <CardTitleBold>{title}</CardTitleBold>
        <CardSubtitleBold>{moveTheSuffixToPrefix(artist)}</CardSubtitleBold>
        <div>{year}</div>
      </VinylCardTextContainer>
    </FlexRow>
  );
};
