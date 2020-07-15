import React from "react";
import styled, { css } from "styled-components";

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
  `
);

interface IRoundedSymbol {
  color: string;
}

export const RoundedSymbol: React.FC<IRoundedSymbol> = props => (
  <StyledRoundedSymbol {...props} />
);
