import styled, { css } from "styled-components";

interface IDietSymbol {
  color: string;
  size: string;
  fontSize: string;
}

export const DietSymbol = styled.div`
  ${({ size, fontSize }: IDietSymbol) => css`
    border-radius: 25%;
    text-align: center;
    height: ${size};
    width: ${size};
    line-height: ${size};
    font-size: ${fontSize};
  `}

  ${({ color }: IDietSymbol) =>
    color &&
    css`
      background: ${color};
      color: white;
    `}
`;
