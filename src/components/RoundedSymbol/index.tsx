import React from "react";
import styled, { css } from "styled-components";

import { SvgVideoCamera, SvgCamera } from "resources";

interface IStyledRoundedSymbol extends IRoundedSymbol, IThemeProp {}

const videoSvgSymbolSize: string = "65%";
const photoSvgSymbolSize: string = "55%";

const StyledRoundedSymbol = styled.div(
  ({ photo, video, color, theme: { roundedSymbol } }: IStyledRoundedSymbol) => {
    const iconSize: string = photo
      ? photoSvgSymbolSize
      : video
      ? videoSvgSymbolSize
      : "0";
    return css`
      background: ${color};
      border-radius: ${roundedSymbol.borderRadius};
      color: ${roundedSymbol.textColor};
      font-size: ${roundedSymbol.fontSize};
      height: ${roundedSymbol.size};
      line-height: ${roundedSymbol.size};
      text-align: center;
      width: ${roundedSymbol.size};

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
  photo?: boolean;
  video?: boolean;
  color?: string;
}

export const RoundedSymbol: React.FC<IRoundedSymbol> = props => {
  const { photo, video } = props;

  return video || photo ? (
    <StyledRoundedSymbol {...props} color="black">
      {photo && <SvgCamera />}
      {video && <SvgVideoCamera />}
    </StyledRoundedSymbol>
  ) : (
    <StyledRoundedSymbol {...props} />
  );
};
