import React, { useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";

import { A, FlexRow, SquareImage } from "primitives";
import { moveTheSuffixToPrefix } from "@utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";

const VinylCardContainer = FlexRow;

const VinylCardLink = styled(A)(
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
  artist: { name },
  title,
  year,
  artwork,
  appleMusic
}) => {
  const theme: ITheme = useContext(ThemeContext);
  const artist: string = moveTheSuffixToPrefix(name);

  return (
    <VinylCardContainer data-test="vinyl-card">
      <VinylCardLink href={appleMusic}>
        <VinylCardArtwork
          dataTest="vinyl-artwork"
          size={theme.vinylCard.artwork.size}
          imgSrc={artwork}
        />
      </VinylCardLink>

      <VinylCardTextContainer>
        <CardTitleBold>{title}</CardTitleBold>
        <CardSubtitleBold>{artist}</CardSubtitleBold>

        <div>{year}</div>
      </VinylCardTextContainer>
    </VinylCardContainer>
  );
};
