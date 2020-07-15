import React from "react";
import styled, { css } from "styled-components";

import { SvgVideoCamera } from "resources";

interface IStyledRoundedSymbol extends IRoundedSymbol, IThemeProp {}

const StyledRoundedSymbol = styled.div(
  ({ color, theme: { roundedSymbol } }: IStyledRoundedSymbol) => css`
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
      height: 65%;
      width: 65%;
      opacity: 85%;
      fill: white;
    }
  `
);

interface IRoundedSymbol {
  video?: boolean;
  color?: string;
}

export const RoundedSymbol: React.FC<IRoundedSymbol> = ({ video, ...rest }) =>
  video ? (
    <StyledRoundedSymbol color="black">
      <SvgVideoCamera />
    </StyledRoundedSymbol>
  ) : (
    <StyledRoundedSymbol {...rest} />
  );
