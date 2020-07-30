import React, { FC } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { SVG } from "resources";
import { COLORS } from "styles";

interface IStyledSymbol extends ISymbol, I_Theme {}

const { WHITE } = COLORS;

const StyledSymbol = styled.div(
  ({
    background,
    border,
    borderRadius = "25%",
    svgFill = rgba(WHITE, 0.85),
    theme: {
      symbol: { fontSize, iconSize, size, textColor }
    }
  }: IStyledSymbol) => css`
    background: ${background};
    border-radius: ${borderRadius};
    border: ${border};
    color: ${textColor};
    font-size: ${fontSize};
    height: ${size};
    line-height: ${size};
    text-align: center;
    width: ${size};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      height: ${iconSize};
      width: ${iconSize};
      fill: ${svgFill};
    }
  `
);

export const Symbol: FC<ISymbol> = props => {
  const {
    background,
    content: { text, icon }
  } = props;
  return (
    <StyledSymbol {...props}>
      {icon === "photo" || background === COLORS.VINYL.PHOTO ? (
        <SVG.CAMERA />
      ) : icon === "video" ? (
        <SVG.VIDEO_CAMERA />
      ) : icon === "pen" ? (
        <SVG.PEN />
      ) : icon === "vinyl" ? (
        <SVG.VINYL />
      ) : (
        text
      )}
    </StyledSymbol>
  );
};
