import React from "react";
import styled, { css } from "styled-components";

import { useThemeContext } from "context";
import { Link, SquareImage } from "primitives";

const CardHeaderPhotoLink = styled(Link)(
  ({ theme: { vinyl } }: I_Theme) =>
    css`
      margin-right: ${vinyl.photo.margin.right};
    `
);

export const CardHeaderPhoto: React.FC<ICard> = ({ headerPhoto }) => {
  const {
    vinyl: { photo }
  }: ITheme = useThemeContext();

  if (!headerPhoto) return null;

  return (
    <CardHeaderPhotoLink href={headerPhoto.href}>
      <SquareImage size={photo.size} photo={headerPhoto} />
    </CardHeaderPhotoLink>
  );
};
