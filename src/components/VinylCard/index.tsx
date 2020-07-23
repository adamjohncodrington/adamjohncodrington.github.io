import React, { FC } from "react";
import styled, { css } from "styled-components";

import { useThemeContext } from "context";
import { Link, FlexRow, SquareImage } from "primitives";
import { moveTheSuffixToPrefix, getMusicianStageNameAtTime } from "utils";

import { CardTitle, CardSubtitle } from "../styles";

const VinylCardLink = styled(Link)(
  ({ theme: { vinyl } }: I_Theme) =>
    css`
      margin-right: ${vinyl.artwork.margin.right};
    `
);

const VinylCardTextContainer = styled.div(
  ({ theme: { vinyl } }: I_Theme) =>
    css`
      flex: 1;

      > *:not(:last-child) {
        margin-bottom: ${vinyl.notLastChild.margin.bottom};
      }
    `
);

export const VinylCard: FC<IVinylCard> = ({
  musician,
  title,
  year,
  artwork,
  appleMusicId,
  hideYear
}) => {
  const {
    vinyl: {
      artwork: { size }
    }
  }: ITheme = useThemeContext();

  const musicianName: string = moveTheSuffixToPrefix(
    getMusicianStageNameAtTime({ musician, year })
  );
  const albumTitle: string = title;

  return (
    <FlexRow data-test="vinyl-card">
      <VinylCardLink href={"https://music.apple.com/gb/album/" + appleMusicId}>
        <SquareImage dataTest="vinyl-artwork" size={size} photo={artwork} />
      </VinylCardLink>

      <VinylCardTextContainer>
        <CardTitle bold={false}>{albumTitle}</CardTitle>
        <CardSubtitle bold={false}>{musicianName}</CardSubtitle>

        {!hideYear && <div>{year}</div>}
      </VinylCardTextContainer>
    </FlexRow>
  );
};
