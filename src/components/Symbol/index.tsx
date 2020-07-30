import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { FREE_IMAGE_HOST_URL_PREFIX } from "config";
import { SVG, PHOTOS } from "resources";
import { COLORS } from "styles";

interface IStyledSymbol extends ISymbol, I_Theme {}

const { BLACK, WHITE } = COLORS;

const StyledSymbol = styled.div(
  ({
    content: { isVinyl },
    color,
    theme: {
      symbol: { borderRadius, fontSize, iconSize, size, textColor }
    }
  }: IStyledSymbol) => {
    const background: string =
      color === "dark-grey"
        ? rgba(BLACK, 0.65)
        : color === "grey"
        ? rgba(BLACK, 0.5)
        : color === "yellow"
        ? color
        : color === "orange"
        ? color
        : color === "blue-mist"
        ? "blue"
        : color === "black-and-clear"
        ? `linear-gradient(to bottom right, black 50%, transparent 50%);`
        : color === "red"
        ? "red"
        : color === "clear"
        ? "transparent"
        : color === "pink"
        ? "pink"
        : color === "photo"
        ? "black"
        : color === "teal"
        ? "#008080"
        : BLACK;

    const border: string = isVinyl ? "0.5px solid grey" : "none";

    return css`
      background: ${background};
      border-radius: ${isVinyl ? "50%" : borderRadius};
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
        fill: ${rgba(WHITE, 0.85)};
      }
    `;
  }
);

export const Symbol: React.FC<ISymbol> = props => {
  const {
    color,
    content: { text, icon }
  } = props;

  return (
    <StyledSymbol {...props}>
      {icon === "photo" || color === "photo" ? (
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
