import styled, { css } from "styled-components";

interface IRoundedSymbol extends IThemeProp {
  color: string;
}

export const RoundedSymbol = styled.div(
  ({ color, theme: { roundedSymbol } }: IRoundedSymbol) => css`
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
