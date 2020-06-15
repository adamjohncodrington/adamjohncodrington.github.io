import styled, { css } from "styled-components";

interface ICircle {
  className?: string;
  theme: ITheme;
  size: string;
  fontSize: string;
  invert: boolean;
  color: string;
}

export const Circle = styled.div`
  border-radius: 50%;
  text-align: center;

  ${({ size, fontSize, theme }: ICircle) => css`
    height: ${size};
    width: ${size};
    line-height: ${size};
    border: ${theme.circleBorder};
    font-size: ${fontSize};
  `}

  ${({ invert }: ICircle) =>
    invert &&
    css`
      background: #777777;
      color: white;
      border-color: transparent;
    `}

  ${({ color }: ICircle) =>
    color &&
    css`
      background: ${color};
      color: white;
      border-color: transparent;
    `}
`;
