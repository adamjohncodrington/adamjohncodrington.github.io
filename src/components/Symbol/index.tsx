import React, { FC } from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";

import { SVG } from "resources";
import { COLORS } from "styles";

interface IStyledSymbol extends ISymbol, I_Theme {}

const { GRAY_LIGHT } = COLORS;

const StyledSymbol = styled.div(
  ({
    background,
    border,
    borderRadius = "25%",
    svgFill = GRAY_LIGHT,
    theme: {
      boxShadow,
      symbol: { fontSize, iconSize, size, textColor }
    }
  }: IStyledSymbol) => css`
    background: ${background} center;

    background-size: ${size} ${size};

    border-radius: ${borderRadius};
    border: ${border};
    box-shadow: ${boxShadow.dark};
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
    contents: { text, icon }
  } = props;
  return (
    <StyledSymbol {...props}>
      {icon === "photo" ? (
        <SVG.CAMERA />
      ) : icon === "video" ? (
        <SVG.VIDEO_CAMERA />
      ) : icon === "pen" ? (
        <SVG.PEN />
      ) : icon === "gift" ? (
        <SVG.GIFT />
      ) : icon === "home" ? (
        <SVG.HOME />
      ) : icon === "improvisation" ? (
        <SVG.DANCER_MALE_1 />
      ) : icon === "stars" ? (
        <SVG.STARS />
      ) : icon === "guitar" ? (
        <SVG.GUITAR />
      ) : icon === "tricks" ? (
        <SVG.POLE_VAULT />
      ) : icon === "contemporary" ? (
        <SVG.DANCER_MALE_2 />
      ) : icon === "exotic" ? (
        <SVG.HEELS />
      ) : (
        text
      )}
    </StyledSymbol>
  );
};
