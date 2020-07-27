import React from "react";
import styled, { css } from "styled-components";

import { SVG } from "resources";
import { COLORS } from "styles";

interface IStyledSymbol extends ISymbol, I_Theme {}

const StyledSymbol = styled.div(
  ({
    type,
    opacity,
    theme: {
      roundedSymbol: { borderRadius, fontSize, size, textColor }
    }
  }: IStyledSymbol) => {
    const iconSize: string =
      type === "photo" ? "55%" : type === "video" ? "65%" : "0";

    return css`
      background: ${COLORS.BLACK};
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
    `;
  }
);

type IOpacityOptions = "100%" | "50%";

interface ISymbol {
  opacity: IOpacityOptions;
  type: "diet" | "friend" | "photo" | "video";
}

export const Symbol: React.FC<ISymbol> = ({ type, children, opacity }) => {
  const isSvg: boolean = type === "video" || type === "photo";

  return isSvg ? (
    <StyledSymbol type={type} opacity={opacity}>
      {type === "photo" && <SVG.CAMERA />}
      {type === "video" && <SVG.VIDEO_CAMERA />}
    </StyledSymbol>
  ) : (
    <StyledSymbol type={type} opacity={opacity}>
      {children}
    </StyledSymbol>
  );
};
