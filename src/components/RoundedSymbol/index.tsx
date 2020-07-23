import React from "react";
import styled, { css } from "styled-components";

import { SVG } from "resources";
import { COLORS } from "styles";

interface IStyledRoundedSymbol extends IRoundedSymbol, I_Theme {}

const StyledRoundedSymbol = styled.div(
  ({
    type,
    opacity,
    theme: {
      roundedSymbol: { borderRadius, fontSize, size, textColor }
    }
  }: IStyledRoundedSymbol) => {
    const iconSize: string =
      type === "photo" ? "55%" : type === "video" ? "65%" : "0";

    return css`
      background: ${COLORS.black};
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

interface IRoundedSymbol {
  opacity: IOpacityOptions;
  type: "diet" | "friend" | "photo" | "video";
}

export const RoundedSymbol: React.FC<IRoundedSymbol> = ({
  type,
  children,
  opacity
}) => {
  const isSvgSymbol: boolean = type === "video" || type === "photo";

  return isSvgSymbol ? (
    <StyledRoundedSymbol type={type} opacity={opacity}>
      {type === "photo" && <SVG.CAMERA />}
      {type === "video" && <SVG.VIDEO_CAMERA />}
    </StyledRoundedSymbol>
  ) : (
    <StyledRoundedSymbol type={type} opacity={opacity}>
      {children}
    </StyledRoundedSymbol>
  );
};
