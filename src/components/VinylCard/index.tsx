import React, { FC, ReactElement, useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";

import { Link, FlexRow, SquareImage } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

import { CardTitleBold, CardSubtitleBold } from "../styles";
import { CSS } from "styles";
import { RoundedSymbol } from "components/RoundedSymbol";

const VinylCardContainer = FlexRow;

const VinylCardLink = styled(Link)(
  ({ theme: { vinyl } }: IThemeProp) =>
    css`
      margin-right: ${vinyl.artwork.margin.right};
    `
);

const VinylCardArtwork = styled(SquareImage)`
  display: block;
`;

const VinylCardTextContainer = styled.div(
  ({ theme: { vinyl } }: IThemeProp) =>
    css`
      flex: 1;

      > *:not(:last-child) {
        margin-bottom: ${vinyl.notLastChild.margin.bottom};
      }
    `
);

const VinylCardSigned = styled.div`
  font-style: italic;
  ${CSS.FONT_SIZE_75_PERCENT}
`;

const StyledFlexRow = styled(FlexRow)`
  align-items: baseline;
  > :first-child {
    flex: 1;
  }
`;

export const VinylCard: FC<IVinyl> = ({
  artist,
  title,
  year,
  artwork,
  appleMusicUrl,
  signed
}) => {
  const theme: ITheme = useContext(ThemeContext);

  const Year: ReactElement = <div>{year}</div>;

  return (
    <VinylCardContainer data-test="vinyl-card">
      <VinylCardLink href={appleMusicUrl}>
        <VinylCardArtwork
          dataTest="vinyl-artwork"
          size={theme.vinyl.artwork.size}
          imgSrc={artwork}
        />
      </VinylCardLink>

      <VinylCardTextContainer>
        <CardTitleBold star={signed}>{title}</CardTitleBold>
        <CardSubtitleBold>{moveTheSuffixToPrefix(artist)}</CardSubtitleBold>
        <div>{year}</div>
      </VinylCardTextContainer>
    </VinylCardContainer>
  );
};
