import React, { useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";

import { Link, FlexRow, SquareImage } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";

const VinylCardContainer = FlexRow;

const VinylCardLink = styled(Link)(
  ({ theme: { vinylCard } }: IThemeProp) =>
    css`
      margin-right: ${vinylCard.artwork.margin.right};
    `
);

const VinylCardArtwork = styled(SquareImage)`
  display: block;
`;

const VinylCardTextContainer = styled.div(
  ({ theme: { vinylCard } }: IThemeProp) =>
    css`
      flex: 1;

      > *:not(:last-child) {
        margin-bottom: ${vinylCard.notLastChild.margin.bottom};
      }
    `
);

export const VinylCard: React.FC<IVinylCard> = ({
  artist,
  title,
  year,
  artwork,
  appleMusicUrl
}) => {
  const theme: ITheme = useContext(ThemeContext);

  return (
    <VinylCardContainer data-test="vinyl-card">
      <VinylCardLink href={appleMusicUrl}>
        <VinylCardArtwork
          dataTest="vinyl-artwork"
          size={theme.vinylCard.artwork.size}
          imgSrc={artwork}
        />
      </VinylCardLink>

      <VinylCardTextContainer>
        <CardTitleBold>{title}</CardTitleBold>
        <CardSubtitleBold>{moveTheSuffixToPrefix(artist)}</CardSubtitleBold>

        <div>{year}</div>
      </VinylCardTextContainer>
    </VinylCardContainer>
  );
};
