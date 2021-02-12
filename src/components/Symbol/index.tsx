import React, { FC } from "react";
import styled, { css } from "styled-components";

import { SVG } from "resources";
import { COLORS } from "styles";

type StyledSymbolProps = SingleSymbolProps & ThemeProp;

const { GRAY_LIGHT } = COLORS;

const StyledSymbol = styled.div(
  ({
    background,
    border,
    borderRadius = "25%",
    sizeProportion = 1,
    svgFill = GRAY_LIGHT,
    theme: {
      boxShadow,
      symbol: { fontSize, iconSize, size, textColor }
    }
  }: StyledSymbolProps) => {
    const SIZE = `calc(${size} * ${sizeProportion})`;

    return css`
      background: ${background} center;

      background-size: ${SIZE} ${SIZE};

      border-radius: ${borderRadius};
      border: ${border};
      box-shadow: ${boxShadow.dark};
      color: ${textColor};
      font-size: ${fontSize};
      line-height: ${SIZE};
      text-align: center;

      height: ${SIZE};
      width: ${SIZE};

      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        height: ${iconSize};
        width: ${iconSize};
        fill: ${svgFill};
      }
    `;
  }
);

const DoubleSymbolContainer = styled.div(
  ({
    sizeProportion = 1,
    theme: {
      symbol: { size }
    }
  }: StyledSymbolProps) => {
    const SIZE = `calc(${size} * ${sizeProportion})`;

    return css`
      position: relative;

      width: calc(26px * ${sizeProportion} * 4 / 3);
      height: ${SIZE};

      > * {
        position: absolute;

        &:first-child {
          right: 0;
        }
      }
    `;
  }
);

const SingleSymbol: FC<SymbolProps> = props => {
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

export const Symbol: FC<SymbolProps> = props => {
  const { subSymbol } = props;

  if (subSymbol)
    return (
      <DoubleSymbolContainer {...props}>
        <SingleSymbol {...props} />
        <SingleSymbol {...subSymbol} />
      </DoubleSymbolContainer>
    );

  return <SingleSymbol {...props} />;
};
