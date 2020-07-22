import React from "react";
import styled, { css } from "styled-components";

import { SVG } from "resources";

interface IStyledRoundedSymbol extends IRoundedSymbol, I_Theme {}

const StyledRoundedSymbol = styled.div(
  ({
    type,
    theme: {
      roundedSymbol: { borderRadius, color, fontSize, size, textColor }
    }
  }: IStyledRoundedSymbol) => {
    const backgroundColor: string =
      type === "diet"
        ? color.diet
        : type === "photo"
        ? color.photo
        : type === "friend"
        ? color.friend
        : type === "video"
        ? color.video
        : "black";

    const iconSize: string =
      type === "photo" ? "55%" : type === "video" ? "65%" : "0";

    return css`
      background: ${backgroundColor};
      border-radius: ${borderRadius};
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
        opacity: 85%;
        fill: white;
      }
    `;
  }
);

interface IRoundedSymbol {
  type: "diet" | "friend" | "photo" | "video";
}

export const RoundedSymbol: React.FC<IRoundedSymbol> = ({ type, children }) => {
  const isSvgSymbol: boolean = type === "video" || type === "photo";

  return isSvgSymbol ? (
    <StyledRoundedSymbol type={type}>
      {type === "photo" && <SVG.CAMERA />}
      {type === "video" && <SVG.VIDEO_CAMERA />}
    </StyledRoundedSymbol>
  ) : (
    <StyledRoundedSymbol type={type}>{children}</StyledRoundedSymbol>
  );
};
