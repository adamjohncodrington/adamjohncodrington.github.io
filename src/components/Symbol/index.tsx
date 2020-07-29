import React from "react";
import styled, { css } from "styled-components";

import { SVG } from "resources";
import { COLORS } from "styles";

interface IStyledSymbol extends I_Opacity, I_Theme {}

const { BLACK } = COLORS;

const StyledSymbol = styled.div(
  ({
    opacity,
    theme: {
      roundedSymbol: { borderRadius, fontSize, iconSize, size, textColor }
    }
  }: IStyledSymbol) => css`
    background: ${BLACK};
    border-radius: ${borderRadius};
    color: ${textColor};
    font-size: ${fontSize};
    height: ${size};
    line-height: ${size};
    text-align: center;
    width: ${size};
    opacity: ${opacity};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      height: ${iconSize};
      width: ${iconSize};
      opacity: 85%;
      fill: white;
    }
  `
);

export const Symbol: React.FC<ISymbol> = props => {
  const {
    content: { text, icon },
    opacity
  } = props;

  return (
    <StyledSymbol opacity={opacity}>
      {icon === "photo" ? (
        <SVG.CAMERA />
      ) : icon === "video" ? (
        <SVG.VIDEO_CAMERA />
      ) : (
        text
      )}
    </StyledSymbol>
  );
};
